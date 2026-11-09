// Conversion runs in a disposable worker to keep the UI responsive and reclaim CAD memory.
importScripts('occt-import-js.js');
onmessage=async event=>{
 try{
  const occt=await occtimportjs({locateFile:path=>new URL(path,self.location.href).href});
  const result=occt.ReadStepFile(new Uint8Array(event.data),{linearUnit:'millimeter',linearDeflectionType:'absolute_value',linearDeflection:0.01,angularDeflection:0.2});
  postMessage({result});
 }catch(error){postMessage({error:error.message||'Unable to read this STEP file.'});}
};
