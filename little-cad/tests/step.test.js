import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import Module from 'manifold-3d';
import {stepPiece} from '../src/step.js';
import {GeometryEngine,binarySTL} from '../src/geometry.js';
const require=createRequire(import.meta.url);
const occt=await require('occt-import-js')();
const mod=await Module();mod.setup();const engine=new GeometryEngine(mod);
test('real STEP to editable mesh to STL preserves dimensions and volume',()=>{
 const result=occt.ReadStepFile(new Uint8Array(fs.readFileSync(new URL('../examples/test-block.step',import.meta.url))),{linearUnit:'millimeter',linearDeflectionType:'absolute_value',linearDeflection:0.01,angularDeflection:0.2});
 const p=stepPiece(result,'Block',engine);assert.deepEqual(p.size,[10,20,30]);
 const m=engine.build(p);try{
  assert.ok(Math.abs(m.volume()-6000)<.001);
  const roundTrip=engine.importSTL(binarySTL(m),'STL block');assert.deepEqual(roundTrip.size,[10,20,30]);
 }finally{m.delete();}
});
test('invalid STEP fails without producing a model',()=>{
 const result=occt.ReadStepFile(new TextEncoder().encode('not a STEP file'),null);
 assert.throws(()=>stepPiece(result,'Invalid',engine),/conversion failed/);
});
