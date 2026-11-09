import {piece,validateProject} from './geometry.js';
export function stepPiece(result,name,engine){
 if(!result.success||!result.meshes?.length)throw Error('STEP conversion failed: no readable solids found.');
 const positions=[],indices=[],min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
 for(const mesh of result.meshes){
  const verts=mesh.attributes.position.array,offset=positions.length/3;
  if(indices.length+mesh.index.array.length>750000)throw Error('STEP is too detailed: limit is 250,000 triangles. Export a simpler part.');
  for(let i=0;i<verts.length;i++){const v=verts[i];positions.push(v);min[i%3]=Math.min(min[i%3],v);max[i%3]=Math.max(max[i%3],v);}
  for(const i of mesh.index.array)indices.push(i+offset);
 }
 const p=piece('mesh',{name,mesh:{positions,indices},size:max.map((v,i)=>v-min[i])});
 validateProject({version:1,name:'STEP import',pieces:[p]});
 const m=engine.build(p);try{if(m.volume()<=0)throw Error('STEP must contain closed solid bodies with positive volume.');}finally{m.delete();}
 return p;
}
export function readSTEP(buffer){
 return new Promise((resolve,reject)=>{
  const worker=new Worker(new URL('step-worker.js',location.href));
  const timer=setTimeout(()=>{worker.terminate();reject(Error('STEP conversion exceeded 2 minutes. Try a smaller part.'));},120000);
  const finish=()=>{clearTimeout(timer);worker.terminate();};
  worker.onmessage=e=>{finish();if(e.data.error)reject(Error(e.data.error));else resolve(e.data.result);};
  worker.onerror=e=>{finish();reject(Error(e.message||'Could not load the STEP converter. Check the app folder includes its WASM files.'));};
  worker.postMessage(buffer,[buffer]);
 });
}
