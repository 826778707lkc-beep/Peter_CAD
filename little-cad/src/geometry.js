import { STLLoader } from 'three/addons/loaders/STLLoader.js';

export const COLORS = ['#79a998', '#c7a46c', '#779bb9', '#b196b3', '#d08e78', '#8a9b9c'];
export function piece(kind, overrides = {}) {
  return { id: crypto.randomUUID(), name: kind[0].toUpperCase() + kind.slice(1), kind,
    size: [20, 20, 20], position: [0, 0, 0], rotation: [0, 0, 0], hole: false, color: COLORS[0], ...overrides };
}
export function sleeveExample() {
  return { version: 1, name: 'Capped sleeve', pieces: [
    piece('cylinder', {name:'Outer cylinder', size:[10,10,22]}),
    piece('cylinder', {name:'Inner cavity · Ø7', size:[7,7,18], hole:true}),
    piece('cylinder', {name:'Top opening · Ø4', size:[4,4,22], hole:true}),
  ]};
}
const finite = (v, limit = 100000) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= limit;
export function validateProject(p) {
  if (!p || p.version !== 1 || typeof p.name !== 'string' || !Array.isArray(p.pieces) || p.pieces.length > 100) throw Error('This is not a supported Little CAD project (maximum 100 pieces).');
  const ids = new Set();
  for (const s of p.pieces) {
    if (!s || typeof s.id !== 'string' || ids.has(s.id) || typeof s.name !== 'string' || !['box','cylinder','sphere','cone','profile','mesh'].includes(s.kind)) throw Error('Invalid piece in project.');
    ids.add(s.id);
    for (const field of ['size','position','rotation']) if (!Array.isArray(s[field]) || s[field].length !== 3 || !s[field].every(v=>finite(v))) throw Error('Invalid dimensions or position.');
    if (s.size.some(v=>v < 0.01 || v > 10000)) throw Error('Piece dimensions must be between 0.01 and 10,000 mm.');
    if (typeof s.hole !== 'boolean' || !/^#[0-9a-f]{6}$/i.test(s.color)) throw Error('Invalid piece appearance.');
    if (s.kind === 'profile') validatePolygon(s.points);
    if (s.kind === 'mesh') {
      const m = s.mesh;
      if (!m || !Array.isArray(m.positions) || !Array.isArray(m.indices) || m.positions.length % 3 || m.indices.length % 3 || m.indices.length < 12 || m.indices.length > 750000 || !m.positions.every(v=>finite(v)) || !m.indices.every(i=>Number.isInteger(i) && i >= 0 && i < m.positions.length/3)) throw Error('Invalid or oversized imported mesh.');
    }
  }
  return p;
}
export function validatePolygon(points) {
  if (!Array.isArray(points) || points.length < 3 || points.length > 512 || points.some(p=>!Array.isArray(p) || p.length!==2 || !p.every(v=>finite(v)))) throw Error('Draw at least three corners for the profile.');
  let area = 0;
  const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
  const on=(a,b,c)=>Math.abs(cross(a,b,c))<1e-8 && c[0]>=Math.min(a[0],b[0])-1e-8 && c[0]<=Math.max(a[0],b[0])+1e-8 && c[1]>=Math.min(a[1],b[1])-1e-8 && c[1]<=Math.max(a[1],b[1])+1e-8;
  for (let i=0;i<points.length;i++) {
    const a=points[i],b=points[(i+1)%points.length];
    if (Math.hypot(a[0]-b[0],a[1]-b[1])<1e-6) throw Error('Remove duplicate profile corners.');
    area += a[0]*b[1]-b[0]*a[1];
    for (let j=i+1;j<points.length;j++) {
      if (j===i+1 || (i===0 && j===points.length-1)) continue;
      const c=points[j],d=points[(j+1)%points.length];
      if ((cross(a,b,c)*cross(a,b,d)<0 && cross(c,d,a)*cross(c,d,b)<0) || on(a,b,c) || on(a,b,d) || on(c,d,a) || on(c,d,b)) throw Error('Profile edges cannot cross or touch.');
    }
  }
  if (Math.abs(area)<1e-6) throw Error('The profile needs an area, not a straight line.');
  return area > 0 ? points : [...points].reverse();
}
export class GeometryEngine {
  constructor(module) { this.M = module.Manifold; this.Mesh = module.Mesh; }
  // The caller owns the returned WASM solid and must delete it.
  build(p) {
    const allocated=[]; const own=m=>(allocated.push(m),m);
    try {
      let m;
      if (p.kind==='box') m=own(this.M.cube([1,1,1],true));
      if (p.kind==='cylinder' || p.kind==='cone') m=own(this.M.cylinder(1,.5,p.kind==='cone'?0:.5,128,true));
      if (p.kind==='sphere') m=own(this.M.sphere(.5,64));
      if (p.kind==='profile') m=own(this.M.extrude([validatePolygon(p.points)],1));
      if (p.kind==='mesh') {
        const mesh=new this.Mesh({numProp:3,vertProperties:new Float32Array(p.mesh.positions),triVerts:new Uint32Array(p.mesh.indices)});
        mesh.merge(); m=own(new this.M(mesh));
      }
      if (!m || m.status()!=='NoError' || m.isEmpty()) throw Error(`${p.name}: the mesh must be a closed solid without broken faces.`);
      let b=m.boundingBox(); const ext=b.max.map((v,i)=>v-b.min[i]);
      if(ext.some(v=>v<1e-8)) throw Error('The shape has no thickness.');
      m=own(m.translate(b.min.map((v,i)=>-(v+b.max[i])/2)));
      m=own(m.scale(p.size.map((v,i)=>v/ext[i])));
      m=own(m.rotate(p.rotation));
      b=m.boundingBox();
      m=own(m.translate([p.position[0]-(b.min[0]+b.max[0])/2,p.position[1]-(b.min[1]+b.max[1])/2,p.position[2]-b.min[2]]));
      if(m.status()!=='NoError') throw Error(`Cannot build ${p.name}.`);
      allocated.pop(); return m;
    } finally { for(const m of allocated) m.delete(); }
  }
  result(pieces) {
    const all=[]; const own=m=>(all.push(m),m);
    try {
      const solids=pieces.filter(p=>!p.hole).map(p=>own(this.build(p)));
      if(!solids.length) throw Error('Add at least one solid piece first.');
      let result=own(this.M.union(solids));
      const holes=pieces.filter(p=>p.hole).map(p=>own(this.build(p)));
      if(holes.length) result=own(result.subtract(own(this.M.union(holes))));
      if(result.status()!=='NoError' || result.isEmpty() || result.volume()<=0) throw Error('The holes removed the entire model. Move or resize a hole.');
      all.pop(); return result;
    } finally { for(const m of all) m.delete(); }
  }
  importSTL(buffer, name) {
    if(buffer.byteLength>25*1024*1024) throw Error('Please use an STL smaller than 25 MB.');
    let geo;
    try {
      geo=new STLLoader().parse(buffer);
      const positions=Array.from(geo.getAttribute('position').array);
      if(positions.length>2250000) throw Error('Please simplify this STL to fewer than 250,000 triangles.');
      const indices=geo.index?Array.from(geo.index.array):Array.from({length:positions.length/3},(_,i)=>i);
      geo.computeBoundingBox(); const b=geo.boundingBox;
      const p=piece('mesh',{name, mesh:{positions,indices},size:[b.max.x-b.min.x,b.max.y-b.min.y,b.max.z-b.min.z]});
      validateProject({version:1,name:'Import',pieces:[p]});
      const m=this.build(p);try { if(m.volume()<=0) throw Error('STL faces point inward or have zero volume. Repair the mesh before importing.'); }finally {m.delete();}
      return p;
    } finally {geo?.dispose();}
  }
}
export function meshData(solid) {
  const m=solid.getMesh(); const positions=[];
  for(let i=0;i<m.vertProperties.length;i+=m.numProp) positions.push(...m.vertProperties.subarray(i,i+3));
  return {positions,indices:Array.from(m.triVerts)};
}
export function binarySTL(solid) {
  const {positions:v,indices:t}=meshData(solid); const data=new DataView(new ArrayBuffer(84+50*t.length/3));
  const label=new TextEncoder().encode('Little CAD | units: millimeters');label.forEach((b,i)=>data.setUint8(i,b));
  data.setUint32(80,t.length/3,true);
  for(let i=0;i<t.length;i+=3) {
    const p=t.slice(i,i+3).map(k=>v.slice(k*3,k*3+3)); const a=p[1].map((x,j)=>x-p[0][j]),b=p[2].map((x,j)=>x-p[0][j]);
    const n=[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; const len=Math.hypot(...n)||1;
    [...n.map(x=>x/len),...p.flat()].forEach((x,j)=>data.setFloat32(84+i/3*50+j*4,x,true));
  }
  return data.buffer;
}
