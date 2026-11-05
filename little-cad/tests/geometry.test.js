import test from 'node:test';
import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {GeometryEngine,piece,sleeveExample,binarySTL,meshData,validateProject,validatePolygon} from '../src/geometry.js';
const module=await Module();module.setup();const engine=new GeometryEngine(module);
const near=(a,b,tol=1e-5)=>assert.ok(Math.abs(a-b)<tol,`${a} should be near ${b}`);
test('box dimensions, bottom placement, and volume',()=>{
 const m=engine.build(piece('box',{size:[10,20,30],position:[5,-2,8]}));try {assert.deepEqual(m.boundingBox(),{min:[0,-12,8],max:[10,8,38]});near(m.volume(),6000);}finally{m.delete();}
});
test('capped sleeve subtracts cavity and top bore at requested dimensions',()=>{
 const m=engine.result(sleeveExample().pieces);try {const b=m.boundingBox();assert.deepEqual(b,{min:[-5,-5,0],max:[5,5,22]});near(m.volume(),Math.PI*(25*22-12.25*18-4*4),.5);
 const cavity=engine.build(piece('cylinder',{size:[6.8,6.8,17.9]}));const overlap=m.intersect(cavity);try{near(overlap.volume(),0);}finally{cavity.delete();overlap.delete();}
 }finally{m.delete();}
});
test('touching stacked blocks union without internal duplicate faces',()=>{
 const m=engine.result([piece('box',{size:[10,10,10]}),piece('box',{size:[10,10,10],position:[0,0,10]})]);try{near(m.volume(),2000);near(m.boundingBox().max[2],20);assert.equal(m.decompose().length,1);}finally{m.delete();}
});
test('2D concave polygon extrudes and cuts a recess',()=>{
 const points=[[0,0],[10,0],[10,5],[5,5],[5,10],[0,10]];
 const p=piece('profile',{points,size:[10,10,4],position:[0,0,6],hole:true});
 const m=engine.result([piece('box',{size:[20,20,10]}),p]);try{near(m.volume(),4000-75*4);}finally{m.delete();}
});
test('rotation preserves volume and bottom position',()=>{
 const m=engine.build(piece('box',{size:[10,20,30],rotation:[90,0,0],position:[0,0,5]}));try{near(m.volume(),6000);near(m.boundingBox().max[2],25);near(m.boundingBox().min[2],5);}finally{m.delete();}
});
test('binary STL exports and reimports as closed solid at same scale',()=>{
 const m=engine.result(sleeveExample().pieces);let n;try{const buffer=binarySTL(m);const p=engine.importSTL(buffer,'Round trip');n=engine.build(p);near(n.volume(),m.volume(),.01);near(p.size[2],22);near(p.size[0],10);}finally{m.delete();n?.delete();}
});
test('combined mesh retains dimensions, location, and geometry after saving project',()=>{
 const m=engine.result([piece('box',{size:[5,5,5],position:[10,-4,8]})]);try{const p=piece('mesh',{mesh:meshData(m),size:[5,5,5],position:[10,-4,8]});const saved=validateProject(JSON.parse(JSON.stringify({version:1,name:'Test',pieces:[p]})));const restored=engine.result(saved.pieces);try{assert.deepEqual(restored.boundingBox(),m.boundingBox());near(restored.volume(),125);}finally{restored.delete();}}finally{m.delete();}
});
test('empty, invalid, and fully subtracted models fail clearly',()=>{
 assert.throws(()=>engine.result([]),/solid piece/);
 assert.throws(()=>engine.result([piece('box'),piece('box',{hole:true})]),/entire model/);
 assert.throws(()=>validatePolygon([[0,0],[5,5],[0,5],[5,0]]),/cross/);
 assert.throws(()=>validateProject({version:1,name:'bad',pieces:[piece('box',{size:[0,1,2]})]}),/dimensions/);
 const triangle=new TextEncoder().encode('solid bad\nfacet normal 0 0 1\nouter loop\nvertex 0 0 0\nvertex 1 0 0\nvertex 0 1 0\nendloop\nendfacet\nendsolid bad');
 assert.throws(()=>engine.importSTL(triangle.buffer,'open'));
});
