import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import Module from 'manifold-3d';
import { GeometryEngine, piece, sleeveExample, meshData, binarySTL, validateProject, validatePolygon, COLORS } from './geometry.js';

const $=id=>document.getElementById(id);
let engine, renderer, scene, camera, orbit, gizmo, modelGroup, selectionBox;
let project=sleeveExample(), selected=null, preview=false, undo=[], redo=[], meshes=[], sketchPoints=[], toastTimer;
const STORE='little-cad-project-v1';
const clone=x=>structuredClone(x), current=()=>project.pieces.find(p=>p.id===selected);
function toast(message) { $('toast').textContent=message; $('toast').hidden=false; clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,6500); }
function report(error) { console.error(error);toast(error.message || String(error)); }
function autosave() {
  try { localStorage.setItem(STORE,JSON.stringify(project));$('save-state').textContent='Saved on this browser'; }
  catch { $('save-state').textContent='Browser storage full — use Save project'; }
}
function change(fn) {
  const before=clone(project), oldSelected=selected;
  try {fn();validateProject(project);render();undo.push(before);if(undo.length>20)undo.shift();redo=[];autosave();updateHistory();return true;}
  catch(e){project=before;selected=oldSelected;render();report(e);return false;}
}
function updateHistory() {$('undo').disabled=!undo.length;$('redo').disabled=!redo.length;}
function stepHistory(back) {
  const source=back?undo:redo,target=back?redo:undo;if(!source.length)return;
  target.push(clone(project));project=source.pop();selected=null;preview=false;render();autosave();updateHistory();
}
function download(data,name,type) {
  const url=URL.createObjectURL(new Blob([data],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
}
const filename=()=>project.name.replace(/[^a-z0-9_-]+/gi,'-').replace(/^-|-$/g,'') || 'little-cad';
function geometry(solid) {
  const d=meshData(solid),g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(d.positions,3));g.setIndex(d.indices);g.computeVertexNormals();return g;
}
function disposeGroup() {
  gizmo.detach();selectionBox?.removeFromParent();selectionBox?.dispose();selectionBox=null;
  for (const m of meshes){m.geometry.dispose();m.material.dispose();}meshes=[];modelGroup.clear();
}
function render() {
  disposeGroup();
  if(preview && project.pieces.length) {
    const result=engine.result(project.pieces);
    try {
      const mesh=new THREE.Mesh(geometry(result),new THREE.MeshStandardMaterial({flatShading:true,color:COLORS[0],roughness:.47,metalness:.06}));
      modelGroup.add(mesh);meshes.push(mesh);
      const b=result.boundingBox(),size=b.max.map((x,i)=>x-b.min[i]);
      $('model-stats').textContent=`${size.map(v=>v.toFixed(2)).join(' × ')} mm · ${result.volume().toFixed(1)} mm³`;
    }finally{result.delete();}
  } else {
    for(const p of project.pieces){
      const m=engine.build(p);let g;try{g=geometry(m);}finally{m.delete();}
      g.translate(-p.position[0],-p.position[1],-p.position[2]);
      const mesh=new THREE.Mesh(g,new THREE.MeshStandardMaterial({flatShading:true,color:p.hole?'#d79783':p.color,transparent:p.hole,opacity:p.hole?.24:1,depthWrite:!p.hole,depthTest:!p.hole,roughness:.5,metalness:.05,side:THREE.DoubleSide}));
      mesh.position.fromArray(p.position);mesh.userData.id=p.id;modelGroup.add(mesh);meshes.push(mesh);
    }
    $('model-stats').textContent=`${project.pieces.filter(p=>!p.hole).length} solids · ${project.pieces.filter(p=>p.hole).length} holes · mm`;
  }
  $('empty-hint').hidden=project.pieces.length>0;
  $('project-name').value=project.name;$('edit-mode').classList.toggle('active',!preview);$('preview-mode').classList.toggle('active',preview);
  $('view-title').textContent=preview?'FINISHED RESULT':'BUILD VIEW';
  $('status').textContent=preview?'All solid pieces joined; all holes subtracted.':'Select a piece to move it. Hole shapes cut through overlapping solids.';
  renderPieces();renderInspector();attach();updateHistory();
}
function attach(){
  gizmo.detach();selectionBox?.removeFromParent();selectionBox?.dispose();selectionBox=null;
  const m=meshes.find(m=>m.userData.id===selected);
  if(m&&!preview){gizmo.attach(m);selectionBox=new THREE.BoxHelper(m,0x5c8c7f);selectionBox.material.transparent=true;selectionBox.material.opacity=.5;scene.add(selectionBox);}
}
function select(id) {selected=id;renderPieces();renderInspector();attach();}
function renderPieces(){
  $('pieces').replaceChildren();$('piece-count').textContent=project.pieces.length;
  for(const p of project.pieces){
    const button=document.createElement('button');button.className='piece-row'+(p.id===selected?' active':'');
    const dot=document.createElement('span');dot.className='piece-dot';dot.style.background=p.hole?'repeating-linear-gradient(45deg,#d6a795,#d6a795 2px,transparent 2px,transparent 4px)':p.color;
    const label=document.createElement('span');label.className='name';label.textContent=p.name;
    const type=document.createElement('small');type.textContent=p.hole?'HOLE':'SOLID';button.append(dot,label,type);button.onclick=()=>{if(preview){preview=false;render();}select(p.id);};$('pieces').append(button);
  }
}
function renderInspector(){
  const p=current();$('no-selection').hidden=!!p;$('properties').hidden=!p;if(!p)return;
  $('piece-name').value=p.name;$('solid-mode').classList.toggle('active',!p.hole);$('hole-mode').classList.toggle('active',p.hole);
  $('hole-note').textContent=p.hole?'Cuts every solid it overlaps in Result preview and STL export.':'Adds material to your finished model.';
  for(const [container,field,labels] of [['dimension-fields','size',['Width X','Depth Y','Height Z']],['position-fields','position',['X','Y','Bottom Z']],['rotation-fields','rotation',['X','Y','Z']]]){
    $(container).replaceChildren();
    labels.forEach((text,i)=>{const label=document.createElement('label');label.textContent=text;const input=document.createElement('input');input.type='number';input.step=field==='rotation'?1:.1;input.value=Number(p[field][i].toFixed(4));input.setAttribute('aria-label',`${field} ${labels[i]}`);if(field==='size')input.min=.01;
      input.onchange=()=>change(()=>{const n=Number(input.value);if(input.value==='' || !Number.isFinite(n))throw Error('Enter a valid number.');p[field][i]=n;});label.append(input);$(container).append(label);});
  }
  $('colors').replaceChildren();COLORS.forEach(c=>{const b=document.createElement('button');b.style.background=c;b.title=`Color ${c}`;b.setAttribute('aria-label',b.title);b.classList.toggle('active',c===p.color);b.onclick=()=>change(()=>p.color=c);$('colors').append(b);});
  const previous=$('stack-target').value;$('stack-target').replaceChildren();
  for(const target of project.pieces.filter(t=>t.id!==p.id&&!t.hole)){const o=document.createElement('option');o.value=target.id;o.textContent=target.name;$('stack-target').append(o);}
  if([...$('stack-target').options].some(o=>o.value===previous))$('stack-target').value=previous;
  $('stack').disabled=!$('stack-target').options.length;
}
function fit(view='iso'){
  const box=new THREE.Box3().setFromObject(modelGroup);if(box.isEmpty()){box.min.set(-15,-15,0);box.max.set(15,15,25);}
  const center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
  const vertical=THREE.MathUtils.degToRad(camera.fov);
  const horizontal=2*Math.atan(Math.tan(vertical/2)*camera.aspect);
  const dist=Math.max(size.length()/2,8)/Math.sin(Math.min(vertical,horizontal)/2)*1.25;
  const dirs={iso:[1.2,-1.6,1.2],top:[0,0,1],front:[0,-1,0],right:[1,0,0]};const direction=new THREE.Vector3(...(dirs[view]||dirs.iso)).normalize();
  camera.up.set(0,view==='top'?1:0,view==='top'?0:1);camera.position.copy(center).addScaledVector(direction,dist);orbit.target.copy(center);orbit.update();
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
}
function add(p){return change(()=>{preview=false;project.pieces.push(p);selected=p.id;});}
function duplicate(){const p=current();if(!p)return;add({...clone(p),id:crypto.randomUUID(),name:p.name+' copy',position:[p.position[0]+p.size[0]+2,p.position[1],p.position[2]]});}
function remove(){if(current())change(()=>{project.pieces=project.pieces.filter(p=>p.id!==selected);selected=null;});}
async function importFiles(files){
  if(!files.length)return;
  try{
    const imported=[];
    for(const file of files){if(!file.name.toLowerCase().endsWith('.stl'))throw Error('Choose an STL file, or use Open project for .littlecad files.');if(file.size>25*1024*1024)throw Error('Please use an STL smaller than 25 MB.');imported.push(engine.importSTL(await file.arrayBuffer(),file.name.replace(/\.stl$/i,'')));}
    if(!change(()=>{preview=false;project.pieces.push(...imported);selected=imported.at(-1).id;}))return;fit();toast(`Imported ${imported.length} STL file(s). Dimensions interpreted in millimeters.`);
  }catch(e){report(e);}
}
function wire(){
  document.querySelectorAll('[data-shape]').forEach(b=>b.onclick=()=>add(piece(b.dataset.shape,{color:COLORS[project.pieces.length%COLORS.length]})));
  $('piece-name').onchange=()=>change(()=>current().name=$('piece-name').value.trim()||'Piece');
  $('project-name').onchange=()=>change(()=>project.name=$('project-name').value.trim()||'Untitled');
  $('solid-mode').onclick=()=>change(()=>current().hole=false);$('hole-mode').onclick=()=>change(()=>current().hole=true);
  $('duplicate').onclick=duplicate;$('delete').onclick=remove;
  $('center').onclick=()=>change(()=>{current().position[0]=0;current().position[1]=0;});
  $('ground').onclick=()=>change(()=>current().position[2]=0);
  $('stack').onclick=()=>change(()=>{const p=current(),target=project.pieces.find(p=>p.id===$('stack-target').value);if(!target)throw Error('Choose a piece to stack on.');const m=engine.build(target);try{p.position=[target.position[0],target.position[1],m.boundingBox().max[2]];}finally{m.delete();}});
  $('bake').onclick=()=>change(()=>{const m=engine.result(project.pieces);try{const b=m.boundingBox();const p=piece('mesh',{name:'Combined model',mesh:meshData(m),size:b.max.map((v,i)=>v-b.min[i]),position:[(b.min[0]+b.max[0])/2,(b.min[1]+b.max[1])/2,b.min[2]]});project.pieces=[p];selected=p.id;preview=false;}finally{m.delete();}});
  $('edit-mode').onclick=()=>{preview=false;render();};
  $('preview-mode').onclick=()=>{try{preview=true;render();}catch(e){preview=false;render();report(e);}};
  $('undo').onclick=()=>stepHistory(true);$('redo').onclick=()=>stepHistory(false);
  $('snap').onchange=()=>gizmo.setTranslationSnap(Number($('snap').value)||null);
  $('fit').onclick=()=>fit();document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>fit(b.dataset.view));
  $('new').onclick=()=>{if(project.pieces.length&&!confirm('Start a new project? Save a project file first if you want a backup. You can also undo this action.'))return;change(()=>{project={version:1,name:'Untitled',pieces:[]};selected=null;preview=false;});fit();};
  $('example').onclick=()=>{if(project.pieces.length&&!confirm('Replace the workspace with the capped sleeve example? You can undo this action.'))return;change(()=>{project=sleeveExample();selected=project.pieces[0].id;preview=false;});fit();};
  $('export').onclick=()=>{try{const m=engine.result(project.pieces);try{download(binarySTL(m),filename()+'.stl','model/stl');toast('STL exported in millimeters. Import it into Bambu Studio to slice.');}finally{m.delete();}}catch(e){report(e);}};
  $('save').onclick=()=>{download(JSON.stringify(project,null,2),filename()+'.littlecad','application/json');toast('Editable project saved.');};
  $('open').onclick=()=>$('project-file').click();$('project-file').onchange=async e=>{try{const file=e.target.files[0];if(!file)return;if(file.size>50*1024*1024)throw Error('Project file exceeds 50 MB.');const loaded=validateProject(JSON.parse(await file.text()));change(()=>{project=loaded;selected=null;preview=false;});fit();}catch(e){report(e);}finally{e.target.value='';}};
  $('import').onclick=()=>$('stl-file').click();$('stl-file').onchange=async e=>{await importFiles([...e.target.files]);e.target.value='';};
  const viewport=$('viewport');viewport.ondragover=e=>{e.preventDefault();};viewport.ondrop=e=>{e.preventDefault();importFiles([...e.dataTransfer.files]);};
  $('help').onclick=()=>$('help-dialog').showModal();document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$(b.dataset.close).close());
  document.addEventListener('keydown',e=>{if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)||document.querySelector('dialog[open]'))return;
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='z'){e.preventDefault();stepHistory(!e.shiftKey);}else if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='d'){e.preventDefault();duplicate();}else if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();remove();}else if(e.key==='Escape')select(null);
  });
  wireSketch();
}
function drawProfile(){
  const group=$('sketch-lines');group.replaceChildren();const ns='http://www.w3.org/2000/svg';
  if(sketchPoints.length){const polygon=document.createElementNS(ns,'polygon');polygon.setAttribute('points',sketchPoints.map(([x,y])=>`${200+x*4},${200-y*4}`).join(' '));polygon.setAttribute('fill','#79a99844');polygon.setAttribute('stroke','#3a8d79');polygon.setAttribute('stroke-width','2');group.append(polygon);}
  sketchPoints.forEach(([x,y])=>{const c=document.createElementNS(ns,'circle');c.setAttribute('cx',200+x*4);c.setAttribute('cy',200-y*4);c.setAttribute('r',3);c.setAttribute('fill','#21796c');group.append(c);});
  $('profile-info').textContent=`${sketchPoints.length} points · ${sketchPoints.length<3?'minimum 3':'closed profile'}`;
}
function presetProfile(){
  const type=$('profile-preset').value,w=Number($('profile-width').value),d=Number($('profile-depth').value);
  if(type==='custom')return;
  if(!Number.isFinite(w)||w<=0||!Number.isFinite(d)||d<=0)return;
  if(type==='rectangle')sketchPoints=[[-w/2,-d/2],[w/2,-d/2],[w/2,d/2],[-w/2,d/2]];
  else{const n=type==='circle'?128:6;sketchPoints=Array.from({length:n},(_,i)=>[Math.cos(i*2*Math.PI/n)*w/2,Math.sin(i*2*Math.PI/n)*w/2]);}
  drawProfile();
}
function wireSketch(){
  $('sketch').onclick=()=>{$('sketch-dialog').showModal();drawProfile();};
  $('sketch-canvas').onclick=e=>{const r=e.currentTarget.getBoundingClientRect();const x=Math.round(((e.clientX-r.left)*400/r.width-200)/4),y=Math.round((200-(e.clientY-r.top)*400/r.height)/4);$('profile-preset').value='custom';sketchPoints.push([x,y]);drawProfile();};
  $('clear-profile').onclick=()=>{sketchPoints=[];$('profile-preset').value='custom';drawProfile();};$('undo-point').onclick=()=>{sketchPoints.pop();$('profile-preset').value='custom';drawProfile();};
  ['profile-preset','profile-width','profile-depth'].forEach(id=>$(id).onchange=presetProfile);
  $('extrude').onclick=()=>{try{const points=validatePolygon(sketchPoints),height=Number($('profile-height').value);if(height<.01||!Number.isFinite(height))throw Error('Enter a positive extrusion height.');const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);const p=piece('profile',{name:'Extruded profile',points:clone(points),size:[Math.max(...xs)-Math.min(...xs),Math.max(...ys)-Math.min(...ys),height],hole:$('profile-operation').value==='hole'});validateProject({version:1,name:'Profile',pieces:[p]});if(add(p))$('sketch-dialog').close();}catch(e){report(e);}};
}
async function init(){
  const module=await Module({locateFile:path=>new URL(path.endsWith('.wasm')?'manifold.wasm':path,location.href).href});module.setup();engine=new GeometryEngine(module);
  try{const saved=localStorage.getItem(STORE);if(saved)project=validateProject(JSON.parse(saved));}catch{toast('Could not restore the browser save. Starting with the sleeve example.');project=sleeveExample();}
  const viewport=$('viewport');scene=new THREE.Scene();scene.background=new THREE.Color('#eef2f3');
  camera=new THREE.PerspectiveCamera(35,viewport.clientWidth/viewport.clientHeight,.01,1000000);camera.up.set(0,0,1);
  renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor('#eef2f3');viewport.append(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff,0x889b93,2.5));const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(30,-40,80);scene.add(key);const fill=new THREE.DirectionalLight(0xdce9ff,1.5);fill.position.set(-50,10,20);scene.add(fill);
  const grid=new THREE.GridHelper(200,40,0xc2d2d1,0xd9e2e2);grid.rotation.x=Math.PI/2;grid.position.z=-.02;scene.add(grid);
  const axes=new THREE.AxesHelper(10);axes.position.set(-95,-95,.01);scene.add(axes);
  modelGroup=new THREE.Group();scene.add(modelGroup);
  orbit=new OrbitControls(camera,renderer.domElement);orbit.enableDamping=true;orbit.dampingFactor=.1;
  gizmo=new TransformControls(camera,renderer.domElement);gizmo.setMode('translate');gizmo.setSize(.8);gizmo.setTranslationSnap(1);scene.add(gizmo.getHelper());
  let dragBefore=null;
  gizmo.addEventListener('dragging-changed',event=>{orbit.enabled=!event.value;if(event.value)dragBefore=clone(project);else if(dragBefore&&current()){
    const p=current(),v=gizmo.object.position.toArray();const before=dragBefore;dragBefore=null;
    try{p.position=v;validateProject(project);undo.push(before);if(undo.length>20)undo.shift();redo=[];render();autosave();}catch(e){project=before;render();report(e);}
  }});
  gizmo.addEventListener('objectChange',()=>selectionBox?.update());
  let pointerStart;
  renderer.domElement.addEventListener('pointerdown',e=>pointerStart=[e.clientX,e.clientY]);
  renderer.domElement.addEventListener('pointerup',e=>{if(preview||gizmo.axis||!pointerStart||Math.hypot(e.clientX-pointerStart[0],e.clientY-pointerStart[1])>4)return;const r=renderer.domElement.getBoundingClientRect();const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);select(ray.intersectObjects(meshes)[0]?.object.userData.id||null);});
  new ResizeObserver(()=>{const w=viewport.clientWidth,h=viewport.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}).observe(viewport);
  wire();selected=project.pieces[0]?.id||null;render();fit();autosave();$('loading').hidden=true;
  renderer.setAnimationLoop(()=>{orbit.update();renderer.render(scene,camera);});
}
init().catch(e=>{$('loading').textContent='Could not start the 3D workbench. Please use a browser with WebGL enabled and launch with Start.command.';report(e);});
