import {build} from 'esbuild';
import {copyFile,readFile,writeFile} from 'node:fs/promises';
await build({entryPoints:['src/app.js'],bundle:true,format:'esm',outfile:'dist/app.js',minify:true,external:['node:module','node:fs','node:crypto','node:path','node:url'],target:'es2022',legalComments:'linked'});
await copyFile('node_modules/manifold-3d/manifold.wasm','dist/manifold.wasm');
// Preserve upstream license notices with the locally bundled libraries.
let notices='Little CAD uses Three.js (MIT), Manifold (Apache-2.0), and esbuild (MIT, build tooling).\n\n';
for(const path of ['node_modules/three/LICENSE','node_modules/manifold-3d/LICENSE','node_modules/esbuild/LICENSE.md']) { try {notices+=await readFile(path,'utf8')+'\n\n';}catch{} }
await writeFile('dist/THIRD-PARTY-NOTICES.txt',notices+'Manifold source and license: https://github.com/elalish/manifold\n');
console.log('Built Little CAD. Run python3 serve.py to launch.');
