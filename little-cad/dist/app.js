var ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},au=0,Sc=1,lu=2;var jr=1,cu=2,cr=3,ns=0,bn=1,Cn=2,bs=0,hr=1,Mc=2,bc=3,wc=4,hu=5;var ws=100,uu=101,du=102,fu=103,pu=104,mu=200,gu=201,_u=202,xu=203,Ec=204,Tc=205,vu=206,yu=207,Su=208,Mu=209,bu=210,wu=211,Eu=212,Tu=213,Au=214,jo=0,Qo=1,ta=2,Ks=3,ea=4,na=5,ia=6,sa=7,Ac=0,Cu=1,Ru=2,di=0,Cc=1,Rc=2,Pc=3,Ic=4,Lc=5,Dc=6,Nc=7;var Uc=300,Es=301,ur=302,Pa=303,Ia=304,ra=1e3,hi=1001,oa=1002,hn=1003,Pu=1004;var Qr=1005;var Mn=1006,La=1007;var Ni=1008;var Rn=1009,Fc=1010,Oc=1011,dr=1012,Da=1013,Qn=1014,ti=1015,ei=1016,Na=1017,Ua=1018,Ts=1020,Bc=35902,zc=35899,kc=1021,Vc=1022,ni=1023,Ri=1026,Ui=1027,Hc=1028,Fa=1029,is=1030,Oa=1031;var Ba=1033,to=33776,eo=33777,no=33778,io=33779,za=35840,ka=35841,Va=35842,Ha=35843,Ga=36196,Wa=37492,Xa=37496,Ya=37488,qa=37489,so=37490,$a=37491,Za=37808,Ja=37809,Ka=37810,ja=37811,Qa=37812,tl=37813,el=37814,nl=37815,il=37816,sl=37817,rl=37818,ol=37819,al=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,ro=36285,pl=36286;var Ir=2300,aa=2301,Jo=2302,uc=2303,dc=2400,fc=2401,pc=2402;var Iu=3200;var ml=0,Lu=1,Fi="",yn="srgb",Lr="srgb-linear",Dr="linear",Te="srgb";var Ko=7680;var Du=519,Nu=512,Uu=513,Fu=514,Gc=515,Ou=516,Bu=517,Wc=518,Xc=519,zu=35044;var Yc="300 es",Hn=2e3,js=2001;function $f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ku(){let i=Nr("canvas");return i.style.display="block",i}var Ph={},Qs=null;function qc(...i){let t="THREE."+i.shift();Qs?Qs("log",t,...i):console.log(t,...i)}function Vu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Vu(i);let t="THREE."+i.shift();if(Qs)Qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=Vu(i);let t="THREE."+i.shift();if(Qs)Qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cr(...i){let t=i.join(" ");t in Ph||(Ph[t]=!0,Zt(...i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gu={[jo]:jo,[ta]:ia,[ea]:ea,[Ks]:na,[Qo]:Qo,[ia]:ta,[sa]:sa,[na]:Ks},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ih=1234567,Rr=Math.PI/180,tr=180/Math.PI;function fr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function $c(i,t){return(i%t+t)%t}function Jf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kf(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function jf(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs($c(i,t*2)-t)}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ip(i,t){return i+Math.random()*(t-i)}function sp(i){return i*(.5-Math.random())}function rp(i){i!==void 0&&(Ih=i);let t=Ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function op(i){return i*Rr}function ap(i){return i*tr}function lp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),f=o((t-n)/2),g=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*p,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*g,a*l);break;case"YXY":i.set(c*g,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*g,a*h,a*l);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wu(i,t){if(t.constructor===Float32Array)return i;let e=Jc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Xu(i,t){if(t.constructor===Float32Array)return i;let e=Jc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var oo={DEG2RAD:Rr,RAD2DEG:tr,generateUUID:fr,clamp:_e,euclideanModulo:$c,mapLinear:Jf,inverseLerp:Kf,lerp:Pr,damp:jf,pingpong:Qf,smoothstep:tp,smootherstep:ep,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:op,radToDeg:ap,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:Zc,setQuaternionFromProperEuler:hp,normalize:Xu,denormalize:Wu},Jt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],g=r[o+1],v=r[o+2],b=r[o+3];if(p!==b||c!==f||l!==g||h!==v){let _=c*f+l*g+h*v+p*b;_<0&&(f=-f,g=-g,v=-v,b=-b,_=-_);let m=1-a;if(_<.9995){let M=Math.acos(_),C=Math.sin(M);m=Math.sin(m*M)/C,a=Math.sin(a*M)/C,c=c*m+f*a,l=l*m+g*a,h=h*m+v*a,p=p*m+b*a}else{c=c*m+f*a,l=l*m+g*a,h=h*m+v*a,p=p*m+b*a;let M=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=M,l*=M,h*=M,p*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],f=r[o+1],g=r[o+2],v=r[o+3];return t[e]=a*v+h*p+c*g-l*f,t[e+1]=c*v+h*f+l*p-a*g,t[e+2]=l*v+h*g+a*f-c*p,t[e+3]=h*v-a*p-c*f-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),f=c(n/2),g=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=f*h*p+l*g*v,this._y=l*g*p-f*h*v,this._z=l*h*v+f*g*p,this._w=l*h*p-f*g*v;break;case"YXZ":this._x=f*h*p+l*g*v,this._y=l*g*p-f*h*v,this._z=l*h*v-f*g*p,this._w=l*h*p+f*g*v;break;case"ZXY":this._x=f*h*p-l*g*v,this._y=l*g*p+f*h*v,this._z=l*h*v+f*g*p,this._w=l*h*p-f*g*v;break;case"ZYX":this._x=f*h*p-l*g*v,this._y=l*g*p+f*h*v,this._z=l*h*v-f*g*p,this._w=l*h*p+f*g*v;break;case"YZX":this._x=f*h*p+l*g*v,this._y=l*g*p+f*h*v,this._z=l*h*v-f*g*p,this._w=l*h*p-f*g*v;break;case"XZY":this._x=f*h*p-l*g*v,this._y=l*g*p-f*h*v,this._z=l*h*v+f*g*p,this._w=l*h*p+f*g*v;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],p=e[10],f=n+a+p;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>p){let g=2*Math.sqrt(1+n-a-p);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>p){let g=2*Math.sqrt(1+a-n-p);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{let g=2*Math.sqrt(1+p-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new O,Lh=new ke,re=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],f=n[2],g=n[5],v=n[8],b=s[0],_=s[3],m=s[6],M=s[1],C=s[4],E=s[7],I=s[2],A=s[5],x=s[8];return r[0]=o*b+a*M+c*I,r[3]=o*_+a*C+c*A,r[6]=o*m+a*E+c*x,r[1]=l*b+h*M+p*I,r[4]=l*_+h*C+p*A,r[7]=l*m+h*E+p*x,r[2]=f*b+g*M+v*I,r[5]=f*_+g*C+v*A,r[8]=f*m+g*E+v*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=h*o-a*l,f=a*c-h*r,g=l*r-o*c,v=e*p+n*f+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*l-h*n)*b,t[2]=(a*n-s*o)*b,t[3]=f*b,t[4]=(h*e-s*c)*b,t[5]=(s*r-a*e)*b,t[6]=g*b,t[7]=(n*c-l*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new re,Dh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:t,whitePoint:n,transfer:Dr,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),i}var Se=up();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=Nr("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dp=0,er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yl(s[o].image)):r.push(Yl(s[o]))}else r=Yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var fp=0,ql=new O,An=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,s=hi,r=Mn,o=Ni,a=ni,c=Rn,l=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=fr(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Uc;An.DEFAULT_ANISOTROPY=1;var Ve=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],p=c[8],f=c[1],g=c[5],v=c[9],b=c[2],_=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-b)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+b)<.1&&Math.abs(v+_)<.1&&Math.abs(l+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,E=(g+1)/2,I=(m+1)/2,A=(h+f)/4,x=(p+b)/4,w=(v+_)/4;return C>E&&C>I?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=A/n,r=x/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=w/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=x/r,s=w/r),this.set(n,s,r,e),this}let M=Math.sqrt((_-v)*(_-v)+(p-b)*(p-b)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(_-v)/M,this.y=(p-b)/M,this.z=(f-h)/M,this.w=Math.acos((l+g+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new An({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new er(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ur=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Pe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,h,p,f,g,v,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,p,f,g,v,b,_)}set(t,e,n,s,r,o,a,c,l,h,p,f,g,v,b,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=p,m[14]=f,m[3]=g,m[7]=v,m[11]=b,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),o=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=o*h,g=o*p,v=a*h,b=a*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=g+v*l,e[5]=f-b*l,e[9]=-a*c,e[2]=b-f*l,e[6]=v+g*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,g=c*p,v=l*h,b=l*p;e[0]=f+b*a,e[4]=v*a-g,e[8]=o*l,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=g*a-v,e[6]=b+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,g=c*p,v=l*h,b=l*p;e[0]=f-b*a,e[4]=-o*p,e[8]=v+g*a,e[1]=g+v*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,g=o*p,v=a*h,b=a*p;e[0]=c*h,e[4]=v*l-g,e[8]=f*l+b,e[1]=c*p,e[5]=b*l+f,e[9]=g*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,g=o*l,v=a*c,b=a*l;e[0]=c*h,e[4]=b-f*p,e[8]=v*p+g,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*p+v,e[10]=f-b*p}else if(t.order==="XZY"){let f=o*c,g=o*l,v=a*c,b=a*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=f*p+b,e[5]=o*h,e[9]=g*p-v,e[2]=v*p-g,e[6]=a*h,e[10]=b*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,mp)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Hi.crossVectors(n,Dn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Hi.crossVectors(n,Dn)),Hi.normalize(),Ao.crossVectors(Dn,Hi),s[0]=Hi.x,s[4]=Ao.x,s[8]=Dn.x,s[1]=Hi.y,s[5]=Ao.y,s[9]=Dn.y,s[2]=Hi.z,s[6]=Ao.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],f=n[9],g=n[13],v=n[2],b=n[6],_=n[10],m=n[14],M=n[3],C=n[7],E=n[11],I=n[15],A=s[0],x=s[4],w=s[8],B=s[12],D=s[1],k=s[5],G=s[9],Z=s[13],N=s[2],J=s[6],Q=s[10],j=s[14],ft=s[3],tt=s[7],ht=s[11],mt=s[15];return r[0]=o*A+a*D+c*N+l*ft,r[4]=o*x+a*k+c*J+l*tt,r[8]=o*w+a*G+c*Q+l*ht,r[12]=o*B+a*Z+c*j+l*mt,r[1]=h*A+p*D+f*N+g*ft,r[5]=h*x+p*k+f*J+g*tt,r[9]=h*w+p*G+f*Q+g*ht,r[13]=h*B+p*Z+f*j+g*mt,r[2]=v*A+b*D+_*N+m*ft,r[6]=v*x+b*k+_*J+m*tt,r[10]=v*w+b*G+_*Q+m*ht,r[14]=v*B+b*Z+_*j+m*mt,r[3]=M*A+C*D+E*N+I*ft,r[7]=M*x+C*k+E*J+I*tt,r[11]=M*w+C*G+E*Q+I*ht,r[15]=M*B+C*Z+E*j+I*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],p=t[6],f=t[10],g=t[14],v=t[3],b=t[7],_=t[11],m=t[15],M=c*g-l*f,C=a*g-l*p,E=a*f-c*p,I=o*g-l*h,A=o*f-c*h,x=o*p-a*h;return e*(b*M-_*C+m*E)-n*(v*M-_*I+m*A)+s*(v*C-b*I+m*x)-r*(v*E-b*A+_*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=t[9],f=t[10],g=t[11],v=t[12],b=t[13],_=t[14],m=t[15],M=e*a-n*o,C=e*c-s*o,E=e*l-r*o,I=n*c-s*a,A=n*l-r*a,x=s*l-r*c,w=h*b-p*v,B=h*_-f*v,D=h*m-g*v,k=p*_-f*b,G=p*m-g*b,Z=f*m-g*_,N=M*Z-C*G+E*k+I*D-A*B+x*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/N;return t[0]=(a*Z-c*G+l*k)*J,t[1]=(s*G-n*Z-r*k)*J,t[2]=(b*x-_*A+m*I)*J,t[3]=(f*A-p*x-g*I)*J,t[4]=(c*D-o*Z-l*B)*J,t[5]=(e*Z-s*D+r*B)*J,t[6]=(_*E-v*x-m*C)*J,t[7]=(h*x-f*E+g*C)*J,t[8]=(o*G-a*D+l*w)*J,t[9]=(n*D-e*G-r*w)*J,t[10]=(v*A-b*E+m*M)*J,t[11]=(p*E-h*A-g*M)*J,t[12]=(a*B-o*k-c*w)*J,t[13]=(e*k-n*B+s*w)*J,t[14]=(b*C-v*I-_*M)*J,t[15]=(h*I-p*C+f*M)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,p=a+a,f=r*l,g=r*h,v=r*p,b=o*h,_=o*p,m=a*p,M=c*l,C=c*h,E=c*p,I=n.x,A=n.y,x=n.z;return s[0]=(1-(b+m))*I,s[1]=(g+E)*I,s[2]=(v-C)*I,s[3]=0,s[4]=(g-E)*A,s[5]=(1-(f+m))*A,s[6]=(_+M)*A,s[7]=0,s[8]=(v+C)*x,s[9]=(_-M)*x,s[10]=(1-(f+b))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),c=Bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),qn.copy(this);let l=1/o,h=1/a,p=1/c;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=p,qn.elements[9]*=p,qn.elements[10]*=p,e.setFromRotationMatrix(qn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Hn,c=!1){let l=this.elements,h=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),g=(n+s)/(n-s),v,b;if(c)v=r/(o-r),b=o*r/(o-r);else if(a===Hn)v=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===js)v=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn,c=!1){let l=this.elements,h=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),g=-(n+s)/(n-s),v,b;if(c)v=1/(o-r),b=o/(o-r);else if(a===Hn)v=-2/(o-r),b=-(o+r)/(o-r);else if(a===js)v=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bs=new O,qn=new Pe,pp=new O(0,0,0),mp=new O(1,1,1),Hi=new O,Ao=new O,Dn=new O,Uh=new Pe,Fh=new ke,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gp=0,Oh=new O,zs=new ke,Si=new Pe,Co=new O,br=new O,_p=new O,xp=new ke,Bh=new O(1,0,0),zh=new O(0,1,0),kh=new O(0,0,1),Vh={type:"added"},vp={type:"removed"},ks={type:"childadded",child:null},$l={type:"childremoved",child:null},Je=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Kn,n=new ke,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new re}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Co.copy(t):Co.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(br,Co,this.up):Si.lookAt(Co,br,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(Si),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vh),ks.child=t,this.dispatchEvent(ks),ks.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vh),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),p=o(t.shapes),f=o(t.skeletons),g=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new O(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},yp={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let b of t.hand.values()){let _=e.getJointPose(b,n),m=this._getHandJoint(l,b);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),g=.02,v=.005;l.inputState.pinching&&f>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=$c(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zl(o,r,t+1/3),this.g=Zl(o,r,t),this.b=Zl(o,r,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=yn){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){let n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return Se.workingToColorSpace(pn.copy(this),t),Math.round(_e(pn.r*255,0,255))*65536+Math.round(_e(pn.g*255,0,255))*256+Math.round(_e(pn.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=yn){Se.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Ro);let n=Pr(Gi.h,Ro.h,e),s=Pr(Gi.s,Ro.s,e),r=Pr(Gi.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new ae;ae.NAMES=Yu;var Fr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$n=new O,Mi=new O,Jl=new O,bi=new O,Vs=new O,Hs=new O,Hh=new O,Kl=new O,jl=new O,Ql=new O,tc=new Ve,ec=new Ve,nc=new Ve,qi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),Mi.subVectors(n,e),Jl.subVectors(t,e);let o=$n.dot($n),a=$n.dot(Mi),c=$n.dot(Jl),l=Mi.dot(Mi),h=Mi.dot(Jl),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;let f=1/p,g=(l*c-a*h)*f,v=(o*h-a*c)*f;return r.set(1-g-v,v,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bi.x),c.addScaledVector(o,bi.y),c.addScaledVector(a,bi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tc,r.x),o.addScaledVector(ec,r.y),o.addScaledVector(nc,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Mi.subVectors(t,e),$n.cross(Mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),$n.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Hs.subVectors(r,n),Kl.subVectors(t,n);let c=Vs.dot(Kl),l=Hs.dot(Kl);if(c<=0&&l<=0)return e.copy(n);jl.subVectors(t,s);let h=Vs.dot(jl),p=Hs.dot(jl);if(h>=0&&p<=h)return e.copy(s);let f=c*p-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),e.copy(n).addScaledVector(Vs,o);Ql.subVectors(t,r);let g=Vs.dot(Ql),v=Hs.dot(Ql);if(v>=0&&g<=v)return e.copy(r);let b=g*l-c*v;if(b<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(Hs,a);let _=h*v-g*p;if(_<=0&&p-h>=0&&g-v>=0)return Hh.subVectors(r,s),a=(p-h)/(p-h+(g-v)),e.copy(s).addScaledVector(Hh,a);let m=1/(_+b+f);return o=b*m,a=f*m,e.copy(n).addScaledVector(Vs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),Io.subVectors(this.max,wr),Gs.subVectors(t.a,wr),Ws.subVectors(t.b,wr),Xs.subVectors(t.c,wr),Wi.subVectors(Ws,Gs),Xi.subVectors(Xs,Ws),fs.subVectors(Gs,Xs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-fs.z,fs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,fs.z,0,-fs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-fs.y,fs.x,0];return!ic(e,Gs,Ws,Xs,Io)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,Gs,Ws,Xs,Io))?!1:(Lo.crossVectors(Wi,Xi),e=[Lo.x,Lo.y,Lo.z],ic(e,Gs,Ws,Xs,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new O,new O,new O,new O,new O,new O,new O,new O],Zn=new O,Po=new jn,Gs=new O,Ws=new O,Xs=new O,Wi=new O,Xi=new O,fs=new O,wr=new O,Io=new O,Lo=new O,ps=new O;function ic(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=t.dot(ps),l=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var je=new O,Do=new Jt,Sp=0,mn=class extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=t!==void 0?Jc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xu(t,this.array)}};var Or=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Br=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mp=new jn,Er=new O,sc=new O,_s=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(sc)),this.expandByPoint(Er.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bp=0,Vn=new Pe,rc=new Je,Ys=new O,Nn=new jn,Tr=new jn,cn=new O,He=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($f(t)?Br:Or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Nn.min,Tr.min),Nn.expandByPoint(cn),cn.addVectors(Nn.max,Tr.max),Nn.expandByPoint(cn)):(Nn.expandByPoint(Tr.min),Nn.expandByPoint(Tr.max))}Nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)cn.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(t,l),cn.add(Ys)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let B=0;B<n.count;B++)a[B]=new O,c[B]=new O;let h=new O,p=new O,f=new O,g=new Jt,v=new Jt,b=new Jt,_=new O,m=new O;function M(B,D,k){l[B]=l[D]=l[k]=1,h.fromBufferAttribute(n,B),p.fromBufferAttribute(n,D),f.fromBufferAttribute(n,k),g.fromBufferAttribute(r,B),v.fromBufferAttribute(r,D),b.fromBufferAttribute(r,k),p.sub(h),f.sub(h),v.sub(g),b.sub(g);let G=1/(v.x*b.y-b.x*v.y);isFinite(G)&&(_.copy(p).multiplyScalar(b.y).addScaledVector(f,-v.y).multiplyScalar(G),m.copy(f).multiplyScalar(v.x).addScaledVector(p,-b.x).multiplyScalar(G),a[B].add(_),a[D].add(_),a[k].add(_),c[B].add(m),c[D].add(m),c[k].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let B=0,D=C.length;B<D;++B){let k=C[B],G=k.start,Z=k.count;for(let N=G,J=G+Z;N<J;N+=3)M(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let E=new O,I=new O,A=new O,x=new O;function w(B){A.fromBufferAttribute(s,B),x.copy(A);let D=a[B];E.copy(D),E.sub(A.multiplyScalar(A.dot(D))).normalize(),I.crossVectors(x,D);let G=I.dot(c[B])<0?-1:1;o.setXYZW(B,E.x,E.y,E.z,G)}for(let B=0,D=n.count;B<D;++B)l[B]&&w(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,p=new O;if(t)for(let f=0,g=t.count;f<g;f+=3){let v=t.getX(f+0),b=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,_),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,p=a.normalized,f=new l.constructor(c.length*h),g=0,v=0;for(let b=0,_=c.length;b<_;b++){a.isInterleavedBufferAttribute?g=c[b]*a.data.stride+a.offset:g=c[b]*h;for(let m=0;m<h;m++)f[v++]=l[g++]}return new mn(f,h,p)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){let f=l[h],g=t(f,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){let g=l[p];h.push(g.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],p=r[l];for(let f=0,g=p.length;f<g;f++)h.push(p[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=new O,wp=new O,Ep=new re,Un=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oc.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ep.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tp=0,Pi=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=hr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ei=new O,ac=new O,No=new O,Uo=new O,$i=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ac.copy(t).add(e).multiplyScalar(.5),No.copy(e).sub(t).normalize(),Uo.copy(this.origin).sub(ac);let r=t.distanceTo(e)*.5,o=-this.direction.dot(No),a=Uo.dot(this.direction),c=-Uo.dot(No),l=Uo.lengthSq(),h=Math.abs(1-o*o),p,f,g,v;if(h>0)if(p=o*c-a,f=o*a-c,v=r*h,p>=0)if(f>=-v)if(f<=v){let b=1/h;p*=b,f*=b,g=p*(p+o*f+2*a)+f*(o*p+f+2*c)+l}else f=r,p=Math.max(0,-(o*f+a)),g=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(o*f+a)),g=-p*p+f*(f+2*c)+l;else f<=-v?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-c),r),g=-p*p+f*(f+2*c)+l):f<=v?(p=0,f=Math.min(Math.max(-r,-c),r),g=f*(f+2*c)+l):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-c),r),g=-p*p+f*(f+2*c)+l);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),g=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ac).addScaledVector(No,f),g}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-f.z)*p,c=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,c=(t.min.z-f.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,p=t.x-o.x,f=t.y-o.y,g=t.z-o.z,v=e.x-o.x,b=e.y-o.y,_=e.z-o.z,m=n.x-o.x,M=n.y-o.y,C=n.z-o.z,E=Math.abs(c),I=Math.abs(l),A=Math.abs(h),x,w,B,D,k,G,Z,N,J,Q,j,ft;if(E>=I&&E>=A?(B=c,G=p,J=v,ft=m,c>=0?(x=l,w=h,D=f,k=g,Z=b,N=_,Q=M,j=C):(x=h,w=l,D=g,k=f,Z=_,N=b,Q=C,j=M)):I>=A?(B=l,G=f,J=b,ft=M,l>=0?(x=h,w=c,D=g,k=p,Z=_,N=v,Q=C,j=m):(x=c,w=h,D=p,k=g,Z=v,N=_,Q=m,j=C)):(B=h,G=g,J=_,ft=C,h>=0?(x=c,w=l,D=p,k=f,Z=v,N=b,Q=m,j=M):(x=l,w=c,D=f,k=p,Z=b,N=v,Q=M,j=m)),B===0)return null;let tt=x/B,ht=w/B,mt=1/B,Ot=D-tt*G,jt=k-ht*G,ot=Z-tt*J,Pt=N-ht*J,zt=Q-tt*ft,$t=j-ht*ft,It=zt*Pt-$t*ot,oe=Ot*$t-jt*zt,Xe=ot*jt-Pt*Ot;if(s){if(It<0||oe<0||Xe<0)return null}else if((It<0||oe<0||Xe<0)&&(It>0||oe>0||Xe>0))return null;let Qt=It+oe+Xe;if(Qt===0)return null;let we=mt*(It*G+oe*J+Xe*ft);return(Qt>0?we<0:we>0)?null:this.at(we/Qt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xs=class extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new Pe,ms=new $i,Fo=new _s,Wh=new O,Oo=new O,Bo=new O,zo=new O,lc=new O,ko=new O,Xh=new O,Vo=new O,Ut=class extends Je{constructor(t=new He,e=new xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],p=r[c];h!==0&&(lc.fromBufferAttribute(p,t),o?ko.addScaledVector(lc,h):ko.addScaledVector(lc.sub(e),h))}e.add(ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(Fo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Fo,Wh)===null||ms.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,b=f.length;v<b;v++){let _=f[v],m=o[_.materialIndex],M=Math.max(_.start,g.start),C=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=M,I=C;E<I;E+=3){let A=a.getX(E),x=a.getX(E+1),w=a.getX(E+2);s=Ho(this,m,t,n,l,h,p,A,x,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let _=v,m=b;_<m;_+=3){let M=a.getX(_),C=a.getX(_+1),E=a.getX(_+2);s=Ho(this,o,t,n,l,h,p,M,C,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,b=f.length;v<b;v++){let _=f[v],m=o[_.materialIndex],M=Math.max(_.start,g.start),C=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let E=M,I=C;E<I;E+=3){let A=E,x=E+1,w=E+2;s=Ho(this,m,t,n,l,h,p,A,x,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let _=v,m=b;_<m;_+=3){let M=_,C=_+1,E=_+2;s=Ho(this,o,t,n,l,h,p,M,C,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Ap(i,t,e,n,s,r,o,a){let c;if(t.side===bn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ns,a),c===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vo);return l<e.near||l>e.far?null:{distance:l,point:Vo.clone(),object:i}}function Ho(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Oo),i.getVertexPosition(c,Bo),i.getVertexPosition(l,zo);let h=Ap(i,t,e,n,Oo,Bo,zo,Xh);if(h){let p=new O;qi.getBarycoord(Xh,Oo,Bo,zo,p),s&&(h.uv=qi.getInterpolatedAttribute(s,a,c,l,p,new Jt)),r&&(h.uv1=qi.getInterpolatedAttribute(r,a,c,l,p,new Jt)),o&&(h.normal=qi.getInterpolatedAttribute(o,a,c,l,p,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};qi.getNormal(Oo,Bo,zo,f.normal),h.face=f,h.barycoord=p}return h}var ua=class extends An{constructor(t=null,e=1,n=1,s,r,o,a,c,l=hn,h=hn,p,f){super(null,o,a,c,l,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=new _s,Cp=new Jt(.5,.5),Go=new O,Zi=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],p=r[5],f=r[6],g=r[7],v=r[8],b=r[9],_=r[10],m=r[11],M=r[12],C=r[13],E=r[14],I=r[15];if(s[0].setComponents(l-o,g-h,m-v,I-M).normalize(),s[1].setComponents(l+o,g+h,m+v,I+M).normalize(),s[2].setComponents(l+a,g+p,m+b,I+C).normalize(),s[3].setComponents(l-a,g-p,m-b,I-C).normalize(),n)s[4].setComponents(c,f,_,E).normalize(),s[5].setComponents(l-c,g-f,m-_,I-E).normalize();else if(s[4].setComponents(l-c,g-f,m-_,I-E).normalize(),e===Hn)s[5].setComponents(l+c,g+f,m+_,I+E).normalize();else if(e===js)s[5].setComponents(c,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=Cp.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yh=new Pe,da=class i{constructor(){this.coordinateSystem=Hn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Yh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Zi),n[s].setFromProjectionMatrix(Yh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Zi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ii=class extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fa=new O,pa=new O,qh=new Pe,Ar=new $i,Wo=new _s,cc=new O,$h=new O,On=class extends Je{constructor(t=new He,e=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fa.fromBufferAttribute(e,s-1),pa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new xe(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;qh.copy(s).invert(),Ar.copy(t.ray).applyMatrix4(qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let b=g,_=v-1;b<_;b+=l){let m=h.getX(b),M=h.getX(b+1),C=Xo(this,t,Ar,c,m,M,b);C&&e.push(C)}if(this.isLineLoop){let b=h.getX(v-1),_=h.getX(g),m=Xo(this,t,Ar,c,b,_,v-1);m&&e.push(m)}}else{let g=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let b=g,_=v-1;b<_;b+=l){let m=Xo(this,t,Ar,c,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=Xo(this,t,Ar,c,v-1,g,v-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(fa.fromBufferAttribute(a,s),pa.fromBufferAttribute(a,r),e.distanceSqToSegment(fa,pa,cc,$h)>n)return;cc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(cc);if(!(l<t.near||l>t.far))return{distance:l,point:$h.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Zh=new O,Jh=new O,sr=class extends On{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zh.fromBufferAttribute(e,s),Jh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zh.distanceTo(Jh);t.setAttribute("lineDistance",new xe(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zr=class extends An{constructor(t=[],e=Es,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Li=class extends An{constructor(t,e,n=Qn,s,r,o,a=hn,c=hn,l,h=Ri,p=1){if(h!==Ri&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:p};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},kr=class extends Li{constructor(t,e=Qn,n=Es,s,r,o=hn,a=hn,c,l=Ri){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vr=class extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class i extends He{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],p=[],f=0,g=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(p,2));function v(b,_,m,M,C,E,I,A,x,w,B){let D=E/x,k=I/w,G=E/2,Z=I/2,N=A/2,J=x+1,Q=w+1,j=0,ft=0,tt=new O;for(let ht=0;ht<Q;ht++){let mt=ht*k-Z;for(let Ot=0;Ot<J;Ot++){let jt=Ot*D-G;tt[b]=jt*M,tt[_]=mt*C,tt[m]=N,l.push(tt.x,tt.y,tt.z),tt[b]=0,tt[_]=0,tt[m]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),p.push(Ot/x),p.push(1-ht/w),j+=1}}for(let ht=0;ht<w;ht++)for(let mt=0;mt<x;mt++){let Ot=f+mt+J*ht,jt=f+mt+J*(ht+1),ot=f+(mt+1)+J*(ht+1),Pt=f+(mt+1)+J*ht;c.push(Ot,jt,Pt),c.push(jt,ot,Pt),ft+=6}a.addGroup(g,ft,B),g+=ft,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var un=class i extends He{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],g=[],v=0,b=[],_=n/2,m=0;M(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(g,2));function M(){let E=new O,I=new O,A=0,x=(e-t)/n;for(let w=0;w<=r;w++){let B=[],D=w/r,k=D*(e-t)+t;for(let G=0;G<=s;G++){let Z=G/s,N=Z*c+a,J=Math.sin(N),Q=Math.cos(N);I.x=k*J,I.y=-D*n+_,I.z=k*Q,p.push(I.x,I.y,I.z),E.set(J,x,Q).normalize(),f.push(E.x,E.y,E.z),g.push(Z,1-D),B.push(v++)}b.push(B)}for(let w=0;w<s;w++)for(let B=0;B<r;B++){let D=b[B][w],k=b[B+1][w],G=b[B+1][w+1],Z=b[B][w+1];(t>0||B!==0)&&(h.push(D,k,Z),A+=3),(e>0||B!==r-1)&&(h.push(k,G,Z),A+=3)}l.addGroup(m,A,0),m+=A}function C(E){let I=v,A=new Jt,x=new O,w=0,B=E===!0?t:e,D=E===!0?1:-1;for(let G=1;G<=s;G++)p.push(0,_*D,0),f.push(0,D,0),g.push(.5,.5),v++;let k=v;for(let G=0;G<=s;G++){let N=G/s*c+a,J=Math.cos(N),Q=Math.sin(N);x.x=B*Q,x.y=_*D,x.z=B*J,p.push(x.x,x.y,x.z),f.push(0,D,0),A.x=J*.5+.5,A.y=Q*.5*D+.5,g.push(A.x,A.y),v++}for(let G=0;G<s;G++){let Z=I+G,N=k+G;E===!0?h.push(N,N+1,Z):h.push(N+1,N,Z),w+=3}l.addGroup(m,w,E===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ma=class i extends He{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let C=new O,E=new O,I=new O;for(let A=0;A<e.length;A+=3)g(e[A+0],C),g(e[A+1],E),g(e[A+2],I),c(C,E,I,M)}function c(M,C,E,I){let A=I+1,x=[];for(let w=0;w<=A;w++){x[w]=[];let B=M.clone().lerp(E,w/A),D=C.clone().lerp(E,w/A),k=A-w;for(let G=0;G<=k;G++)G===0&&w===A?x[w][G]=B:x[w][G]=B.clone().lerp(D,G/k)}for(let w=0;w<A;w++)for(let B=0;B<2*(A-w)-1;B++){let D=Math.floor(B/2);B%2===0?(f(x[w][D+1]),f(x[w+1][D]),f(x[w][D])):(f(x[w][D+1]),f(x[w+1][D+1]),f(x[w+1][D]))}}function l(M){let C=new O;for(let E=0;E<r.length;E+=3)C.x=r[E+0],C.y=r[E+1],C.z=r[E+2],C.normalize().multiplyScalar(M),r[E+0]=C.x,r[E+1]=C.y,r[E+2]=C.z}function h(){let M=new O;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];let E=_(M)/2/Math.PI+.5,I=m(M)/Math.PI+.5;o.push(E,1-I)}v(),p()}function p(){for(let M=0;M<o.length;M+=6){let C=o[M+0],E=o[M+2],I=o[M+4],A=Math.max(C,E,I),x=Math.min(C,E,I);A>.9&&x<.1&&(C<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function g(M,C){let E=M*3;C.x=t[E+0],C.y=t[E+1],C.z=t[E+2]}function v(){let M=new O,C=new O,E=new O,I=new O,A=new Jt,x=new Jt,w=new Jt;for(let B=0,D=0;B<r.length;B+=9,D+=6){M.set(r[B+0],r[B+1],r[B+2]),C.set(r[B+3],r[B+4],r[B+5]),E.set(r[B+6],r[B+7],r[B+8]),A.set(o[D+0],o[D+1]),x.set(o[D+2],o[D+3]),w.set(o[D+4],o[D+5]),I.copy(M).add(C).add(E).divideScalar(3);let k=_(I);b(A,D+0,M,k),b(x,D+2,C,k),b(w,D+4,E,k)}}function b(M,C,E,I){I<0&&M.x===1&&(o[C]=M.x-1),E.x===0&&E.z===0&&(o[C]=I/2/Math.PI+.5)}function _(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ji=class i extends ma{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},vs=class i extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=t/a,f=e/c,g=[],v=[],b=[],_=[];for(let m=0;m<h;m++){let M=m*f-o;for(let C=0;C<l;C++){let E=C*p-r;v.push(E,-M,0),b.push(0,0,1),_.push(C/a),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let C=M+l*m,E=M+l*(m+1),I=M+1+l*(m+1),A=M+1+l*m;g.push(C,E,A),g.push(E,I,A)}this.setIndex(g),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(b,3)),this.setAttribute("uv",new xe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hr=class i extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new O,f=new O,g=[],v=[],b=[],_=[];for(let m=0;m<=n;m++){let M=[],C=m/n,E=o+C*a,I=t*Math.cos(E),A=Math.sqrt(t*t-I*I),x=0;m===0&&o===0?x=.5/e:m===n&&c===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){let B=w/e,D=s+B*r;p.x=-A*Math.cos(D),p.y=I,p.z=A*Math.sin(D),v.push(p.x,p.y,p.z),f.copy(p).normalize(),b.push(f.x,f.y,f.z),_.push(B+x,1-C),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let C=h[m][M+1],E=h[m][M],I=h[m+1][M],A=h[m+1][M+1];(m!==0||o>0)&&g.push(C,E,A),(m!==n-1||c<Math.PI)&&g.push(E,I,A)}this.setIndex(g),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(b,3)),this.setAttribute("uv",new xe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Di=class i extends He{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],p=[],f=new O,g=new O,v=new O;for(let b=0;b<=n;b++){let _=o+b/n*a;for(let m=0;m<=s;m++){let M=m/s*r;g.x=(t+e*Math.cos(_))*Math.cos(M),g.y=(t+e*Math.cos(_))*Math.sin(M),g.z=e*Math.sin(_),l.push(g.x,g.y,g.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),v.subVectors(g,f).normalize(),h.push(v.x,v.y,v.z),p.push(m/s),p.push(b/n)}}for(let b=1;b<=n;b++)for(let _=1;_<=s;_++){let m=(s+1)*b+_-1,M=(s+1)*(b-1)+_-1,C=(s+1)*(b-1)+_,E=(s+1)*b+_;c.push(m,M,E),c.push(M,C,E)}this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Kh(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Kh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var qu={clone:As,merge:gn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ga=class extends ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rr=class extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var _a=class extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fc:r=t,a=2*e-n;break;case pc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fc:o=t,c=2*n-e;break;case pc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,g=this._weightNext,v=(n-e)/(s-e),b=v*v,_=b*v,m=-f*_+2*f*b-f*v,M=(1+f)*_+(-1.5-2*f)*b+(-.5+f)*v+1,C=(-1-g)*_+(1.5+g)*b+.5*v,E=g*_-g*b;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+M*o[l+I]+C*o[c+I]+E*o[p+I];return r}},ya=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),p=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*p+o[c+f]*h;return r}},Sa=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ma=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let v=(n-e)/(s-e),b=1-v;for(let _=0;_!==a;++_)r[_]=o[l+_]*b+o[c+_]*v;return r}let f=a*2,g=t-1;for(let v=0;v!==a;++v){let b=o[l+v],_=o[c+v],m=g*f+v*2,M=p[m],C=p[m+1],E=t*f+v*2,I=h[E],A=h[E+1],x=Dp(n,e,M,I,s);r[v]=$u(x,b,C,A,_)}return r}};function $u(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Lp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Dp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=$u(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Lp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Yo(t.settings)&&(n.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break;case uc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Yo(this.settings)&&(jh(this.settings.inTangents,t),jh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Yo(this.settings)&&(Qh(this.settings.inTangents,t),Qh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ne("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ne("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Zf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ne("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let p=a*n,f=p-n,g=p+n;for(let v=0;v!==n;++v){let b=e[p+v];if(b!==e[f+v]||b!==e[g+v]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let p=a*n,f=o*n;for(let g=0;g!==n;++g)e[f+g]=e[p+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Qh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=aa;var ji=class extends Bn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ir;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var wa=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="number";var Ea=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ke.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gr=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Bn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ir;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="vector";var mc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(tu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!tu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Aa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=l.length;p<f;p+=2){let g=l[p],v=l[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zu=new Aa,ys=class{constructor(t){this.manager=t!==void 0?t:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ys.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ti={},gc=class extends Error{constructor(t,e){super(t),this.response=e}},Wr=class extends ys{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=mc.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Ti[t]!==void 0){Ti[t].push({onLoad:e,onProgress:n,onError:s});return}Ti[t]=[],Ti[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ti[t],p=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=f?parseInt(f):0,v=g!==0,b=0,_=new ReadableStream({start(m){M();function M(){p.read().then(({done:C,value:E})=>{if(C)m.close();else{b+=E.byteLength;let I=new ProgressEvent("progress",{lengthComputable:v,loaded:b,total:g});for(let A=0,x=h.length;A<x;A++){let w=h[A];w.onProgress&&w.onProgress(I)}m.enqueue(E),M()}},C=>{m.error(C)})}}});return new Response(_)}else throw new gc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let p=/charset="?([^;"\s]*)"?/i.exec(a),f=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(f);return l.arrayBuffer().then(v=>g.decode(v))}}}).then(l=>{mc.add(`file:${t}`,l);let h=Ti[t];delete Ti[t];for(let p=0,f=h.length;p<f;p++){let g=h[p];g.onLoad&&g.onLoad(l)}}).catch(l=>{let h=Ti[t];if(h===void 0)throw this.manager.itemError(t),l;delete Ti[t];for(let p=0,f=h.length;p<f;p++){let g=h[p];g.onError&&g.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Xr=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Yr=class extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},hc=new Pe,eu=new O,nu=new O,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qo=new O,$o=new ke,ci=new O,qr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qo,$o,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,$o,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qo,$o,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,$o,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new O,iu=new Jt,su=new Jt,Sn=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $r=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends Ca{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var $s=-90,Zs=1,ar=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn($s,Zs,t,e);s.layers=this.layers,this.add(s);let r=new Sn($s,Zs,t,e);r.layers=this.layers,this.add(r);let o=new Sn($s,Zs,t,e);o.layers=this.layers,this.add(o);let a=new Sn($s,Zs,t,e);a.layers=this.layers,this.add(a);let c=new Sn($s,Zs,t,e);c.layers=this.layers,this.add(c);let l=new Sn($s,Zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,f,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Ra=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var jc="\\[\\]\\.:\\/",Np=new RegExp("["+jc+"]","g"),Qc="[^"+jc+"]",Up="[^"+jc.replace("\\.","")+"]",Fp=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Op=/(WCOD+)?/.source.replace("WCOD",Up),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),kp=new RegExp("^"+Fp+Op+Bp+zp+"$"),Vp=["material","materials","bones","map"],xc=class{constructor(t,e,n){let s=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Np,"")}static parseTrackName(t){let e=kp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=xc;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var ru=new Pe,Ss=class{constructor(t,e,n=0,s=1/0){this.ray=new $i(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ru.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ru),this}intersectObject(t,e=!0,n=[]){return vc(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)vc(t[s],this,n,e);return n.sort(ou),n}};function ou(i,t){return i.distance-t.distance}function vc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)vc(r[o],t,e,!0)}}var lr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var yc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Zr=class extends sr{constructor(t=10,e=10,n=4473924,s=8947848){n=new ae(n),s=new ae(s);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,g=0,v=-a;f<=e;f++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);let b=f===r?n:s;b.toArray(l,g),g+=3,b.toArray(l,g),g+=3,b.toArray(l,g),g+=3,b.toArray(l,g),g+=3}let h=new He;h.setAttribute("position",new xe(c,3)),h.setAttribute("color",new xe(l,3));let p=new Ii({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Zo=new jn,Jr=class extends sr{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new He;r.setIndex(new mn(n,1)),r.setAttribute("position",new mn(s,3)),super(r,new Ii({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Zo.setFromObject(this.object),Zo.isEmpty())return;let t=Zo.min,e=Zo.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Kr=class extends sr{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new He;s.setAttribute("position",new xe(e,3)),s.setAttribute("color",new xe(n,3));let r=new Ii({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){let s=new ae,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Ms=class extends Jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function th(i,t,e,n){let s=Hp(n);switch(e){case kc:return i*t;case Hc:return i*t/s.components*s.byteLength;case Fa:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case Oa:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case ni:return i*t*4/s.components*s.byteLength;case Ba:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case za:case Va:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Wa:case Ya:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:case so:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cl:case hl:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ro:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hp(i){switch(i){case Rn:case Fc:return{byteLength:1,components:1};case dr:case Oc:case ei:return{byteLength:2,components:1};case Na:case Ua:return{byteLength:2,components:4};case Qn:case Da:case ti:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _d(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((g,v)=>g.start-v.start);let f=0;for(let g=1;g<p.length;g++){let v=p[f],b=p[g];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++f,p[f]=b)}p.length=f+1;for(let g=0,v=p.length;g<v;g++){let b=p[g];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:Xp,alphahash_pars_fragment:Yp,alphamap_fragment:qp,alphamap_pars_fragment:$p,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Kp,aomap_pars_fragment:jp,batching_pars_vertex:Qp,batching_vertex:tm,begin_vertex:em,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:hm,color_pars_fragment:um,color_pars_vertex:dm,color_vertex:fm,common:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:xm,emissivemap_pars_fragment:vm,colorspace_fragment:ym,colorspace_pars_fragment:Sm,envmap_fragment:Mm,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Fm,envmap_vertex:Tm,fog_vertex:Am,fog_pars_vertex:Cm,fog_fragment:Rm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Lm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:Km,map_pars_fragment:jm,map_particle_fragment:Qm,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:og,morphtarget_vertex:ag,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,opaque_fragment:xg,packing:vg,premultiplied_alpha_fragment:yg,project_vertex:Sg,dithering_fragment:Mg,dithering_pars_fragment:bg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Cg,shadowmask_pars_fragment:Rg,skinbase_vertex:Pg,skinning_pars_vertex:Ig,skinning_vertex:Lg,skinnormal_vertex:Dg,specularmap_fragment:Ng,specularmap_pars_fragment:Ug,tonemapping_fragment:Fg,tonemapping_pars_fragment:Og,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:kg,uv_pars_vertex:Vg,uv_vertex:Hg,worldpos_vertex:Gg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:Yg,backgroundCube_frag:qg,cube_vert:$g,cube_frag:Zg,depth_vert:Jg,depth_frag:Kg,distance_vert:jg,distance_frag:Qg,equirect_vert:t0,equirect_frag:e0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:s0,meshbasic_frag:r0,meshlambert_vert:o0,meshlambert_frag:a0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:h0,meshnormal_frag:u0,meshphong_vert:d0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:x0,points_frag:v0,shadow_vert:y0,shadow_frag:S0,sprite_vert:M0,sprite_frag:b0},Dt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},pi={basic:{uniforms:gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:gn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:gn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:gn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:gn([Dt.points,Dt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:gn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:gn([Dt.common,Dt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:gn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:gn([Dt.sprite,Dt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:gn([Dt.common,Dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:gn([Dt.lights,Dt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var gl={r:0,b:0,g:0},w0=new Pe,xd=new re;xd.set(-1,0,0,0,1,0,0,0,1);function E0(i,t,e,n,s,r){let o=new ae(0),a=s===!0?0:1,c,l,h=null,p=0,f=null;function g(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let E=M.backgroundBlurriness>0;C=t.get(C,E)}return C}function v(M){let C=!1,E=g(M);E===null?_(o,a):E&&E.isColor&&(_(E,1),C=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(M,C){let E=g(C);E&&E.isCubeTexture?(l===void 0&&(l=new Ut(new $e(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:As(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xd),l.material.toneMapped=Se.getTransfer(E.colorSpace)!==Te,(h!==E||p!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,p=E.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ut(new vs(2,2),new ui({name:"BackgroundMaterial",uniforms:As(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Se.getTransfer(E.colorSpace)!==Te,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function _(M,C){M.getRGB(gl,Kc(i)),e.buffers.color.setClear(gl.r,gl.g,gl.b,C,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,C=1){o.set(M),a=C,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,_(o,a)},render:v,addToRenderList:b,dispose:m}}function T0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(k,G,Z,N,J){let Q=!1,j=p(k,N,Z,G);r!==j&&(r=j,l(r.object)),Q=g(k,N,Z,J),Q&&v(k,N,Z,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,E(k,G,Z,N),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return i.createVertexArray()}function l(k){return i.bindVertexArray(k)}function h(k){return i.deleteVertexArray(k)}function p(k,G,Z,N){let J=N.wireframe===!0,Q=n[G.id];Q===void 0&&(Q={},n[G.id]=Q);let j=k.isInstancedMesh===!0?k.id:0,ft=Q[j];ft===void 0&&(ft={},Q[j]=ft);let tt=ft[Z.id];tt===void 0&&(tt={},ft[Z.id]=tt);let ht=tt[J];return ht===void 0&&(ht=f(c()),tt[J]=ht),ht}function f(k){let G=[],Z=[],N=[];for(let J=0;J<e;J++)G[J]=0,Z[J]=0,N[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:N,object:k,attributes:{},index:null}}function g(k,G,Z,N){let J=r.attributes,Q=G.attributes,j=0,ft=Z.getAttributes();for(let tt in ft)if(ft[tt].location>=0){let mt=J[tt],Ot=Q[tt];if(Ot===void 0&&(tt==="instanceMatrix"&&k.instanceMatrix&&(Ot=k.instanceMatrix),tt==="instanceColor"&&k.instanceColor&&(Ot=k.instanceColor)),mt===void 0||mt.attribute!==Ot||Ot&&mt.data!==Ot.data)return!0;j++}return r.attributesNum!==j||r.index!==N}function v(k,G,Z,N){let J={},Q=G.attributes,j=0,ft=Z.getAttributes();for(let tt in ft)if(ft[tt].location>=0){let mt=Q[tt];mt===void 0&&(tt==="instanceMatrix"&&k.instanceMatrix&&(mt=k.instanceMatrix),tt==="instanceColor"&&k.instanceColor&&(mt=k.instanceColor));let Ot={};Ot.attribute=mt,mt&&mt.data&&(Ot.data=mt.data),J[tt]=Ot,j++}r.attributes=J,r.attributesNum=j,r.index=N}function b(){let k=r.newAttributes;for(let G=0,Z=k.length;G<Z;G++)k[G]=0}function _(k){m(k,0)}function m(k,G){let Z=r.newAttributes,N=r.enabledAttributes,J=r.attributeDivisors;Z[k]=1,N[k]===0&&(i.enableVertexAttribArray(k),N[k]=1),J[k]!==G&&(i.vertexAttribDivisor(k,G),J[k]=G)}function M(){let k=r.newAttributes,G=r.enabledAttributes;for(let Z=0,N=G.length;Z<N;Z++)G[Z]!==k[Z]&&(i.disableVertexAttribArray(Z),G[Z]=0)}function C(k,G,Z,N,J,Q,j){j===!0?i.vertexAttribIPointer(k,G,Z,J,Q):i.vertexAttribPointer(k,G,Z,N,J,Q)}function E(k,G,Z,N){b();let J=N.attributes,Q=Z.getAttributes(),j=G.defaultAttributeValues;for(let ft in Q){let tt=Q[ft];if(tt.location>=0){let ht=J[ft];if(ht===void 0&&(ft==="instanceMatrix"&&k.instanceMatrix&&(ht=k.instanceMatrix),ft==="instanceColor"&&k.instanceColor&&(ht=k.instanceColor)),ht!==void 0){let mt=ht.normalized,Ot=ht.itemSize,jt=t.get(ht);if(jt===void 0)continue;let ot=jt.buffer,Pt=jt.type,zt=jt.bytesPerElement,$t=Pt===i.INT||Pt===i.UNSIGNED_INT||ht.gpuType===Da;if(ht.isInterleavedBufferAttribute){let It=ht.data,oe=It.isInterleavedBuffer===!0?It.stride:It.itemSize,Xe=ht.offset;if(It.isInstancedInterleavedBuffer||It.isInstancedBufferAttribute){for(let Qt=0;Qt<tt.locationSize;Qt++)m(tt.location+Qt,It.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Qt=0;Qt<tt.locationSize;Qt++)_(tt.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Qt=0;Qt<tt.locationSize;Qt++)C(tt.location+Qt,Ot/tt.locationSize,Pt,mt,oe*zt,(Xe+Ot/tt.locationSize*Qt)*zt,$t)}else{if(ht.isInstancedBufferAttribute){for(let It=0;It<tt.locationSize;It++)m(tt.location+It,ht.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let It=0;It<tt.locationSize;It++)_(tt.location+It);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let It=0;It<tt.locationSize;It++)C(tt.location+It,Ot/tt.locationSize,Pt,mt,Ot*zt,Ot/tt.locationSize*It*zt,$t)}}else if(j!==void 0){let mt=j[ft];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(tt.location,mt);break;case 3:i.vertexAttrib3fv(tt.location,mt);break;case 4:i.vertexAttrib4fv(tt.location,mt);break;default:i.vertexAttrib1fv(tt.location,mt)}}}}M()}function I(){B();for(let k in n){let G=n[k];for(let Z in G){let N=G[Z];for(let J in N){let Q=N[J];for(let j in Q)h(Q[j].object),delete Q[j];delete N[J]}}delete n[k]}}function A(k){if(n[k.id]===void 0)return;let G=n[k.id];for(let Z in G){let N=G[Z];for(let J in N){let Q=N[J];for(let j in Q)h(Q[j].object),delete Q[j];delete N[J]}}delete n[k.id]}function x(k){for(let G in n){let Z=n[G];for(let N in Z){let J=Z[N];if(J[k.id]===void 0)continue;let Q=J[k.id];for(let j in Q)h(Q[j].object),delete Q[j];delete J[k.id]}}}function w(k){for(let G in n){let Z=n[G],N=k.isInstancedMesh===!0?k.id:0,J=Z[N];if(J!==void 0){for(let Q in J){let j=J[Q];for(let ft in j)h(j[ft].object),delete j[ft];delete J[Q]}delete Z[N],Object.keys(Z).length===0&&delete n[G]}}}function B(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:_,disableUnusedAttributes:M}}function A0(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let g=0;g<h;g++)f+=l[g];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function C0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ni&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Rn&&x!==ti&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:E,maxSamples:I,samples:A}}function R0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Un,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let g=p.length!==0||f||n!==0||s;return s=f,n=p.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,g){let v=p.clippingPlanes,b=p.clipIntersection,_=p.clipShadows,m=i.get(p);if(!s||v===null||v.length===0||r&&!_)r?h(null):l();else{let M=r?0:n,C=M*4,E=m.clippingState||null;c.value=E,E=h(v,f,C,g);for(let I=0;I!==C;++I)E[I]=e[I];m.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,f,g,v){let b=p!==null?p.length:0,_=null;if(b!==0){if(_=c.value,v!==!0||_===null){let m=g+b*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<m)&&(_=new Float32Array(m));for(let C=0,E=g;C!==b;++C,E+=4)o.copy(p[C]).applyMatrix4(M,a),o.normal.toArray(_,E),_[E+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}var co=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $e(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:bs});r.uniforms.tEquirect.value=e;let o=new Ut(s,r),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Mn),new ar(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ju=256,P0=3,I0=20,vd=256,yd=16,L0=3,D0=new O,N0=new ae,xl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new Ut(new $e(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=D0}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,g=c.autoClearDepth,v=c.autoClearStencil,b=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(t.background=c.getClearColor(N0));let _=new ar(n,s,h);return _.position.copy(a),_.update(c,t),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=g,c.autoClearStencil=v,t.background=b,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ju,Zc(t))}_fromTexture(t,e){t.mapping===Es||t.mapping===ur?this._setSize(t.image.length===0?Ju:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Ku(t,!1,!1),n=Math.log2(t)-P0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ku(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Es||t.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ju()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=U0(),this._integrationMaterial=F0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/yd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-L0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(vd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=O0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Ku(i,t,e){return new co(i,{minFilter:Ni,generateMipmaps:t,type:ei,colorSpace:Lr,depthBuffer:e})}function ho(i,t,e){return new ui({name:i,uniforms:t,vertexShader:fe.cube_vert,fragmentShader:e,side:bn,blending:bs,depthTest:!1,depthWrite:!1})}function U0(){return ho("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function F0(){return ho("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function O0(){return ho("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${I0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ju(){return ho("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qu(){return ho("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function B0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,g=!1){return f==null?null:g?o(f):r(f)}function r(f){if(f&&f.isTexture){let g=f.mapping;if(g===Pa||g===Ia)if(t.has(f)){let v=t.get(f).texture;return a(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let b=new co(v.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",l),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let g=f.mapping,v=g===Pa||g===Ia,b=g===Es||g===ur;if(v||b){let _=e.get(f),m=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new xl(i)),_=v?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{let M=f.image;return v&&M&&M.height>0||b&&M&&c(M)?(n===null&&(n=new xl(i)),_=v?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",h),_.texture):null}}}return f}function a(f,g){return g===Pa?f.mapping=Es:g===Ia&&(f.mapping=ur),f}function c(f){let g=0,v=6;for(let b=0;b<v;b++)f[b]!==void 0&&g++;return g===v}function l(f){let g=f.target;g.removeEventListener("dispose",l);let v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function h(f){let g=f.target;g.removeEventListener("dispose",h);let v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function z0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cr("WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(v=>delete s[v]);function a(v){c(v.target)}function c(v){v.index!==null&&t.remove(v.index);for(let _ in v.attributes)t.remove(v.attributes[_]);v.removeEventListener("dispose",a),delete s[v.id],o.unregister(v);let b=r.get(v);b&&(t.remove(b),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function l(v,b){return s[b.id]!==void 0||(b.addEventListener("dispose",a),s[b.id]=new WeakRef(b),o.register(b,b.id,b),e.memory.geometries++),b}function h(v){let b=v.attributes;for(let _ in b)t.update(b[_],i.ARRAY_BUFFER)}function p(v){let b=v.index,_=v.attributes.position,m=0;if(_===void 0)return;let M=b!==null?b.array.length:_.array.length/3-1,C=_.count>=65535?Br:Or,E=new C(Math.ceil(M/3)*6,1),I=E.array;if(b!==null){let x=b.array;m=b.version;for(let w=0,B=0;w<M;w+=3){let D=x[w+0],k=x[w+1],G=x[w+2];I[B++]=D,I[B++]=k,I[B++]=k,I[B++]=G,I[B++]=G,I[B++]=D}}else{m=_.version;for(let x=0,w=0;x<M;x+=3){let B=x+0,D=x+1,k=x+2;I[w++]=B,I[w++]=D,I[w++]=D,I[w++]=k,I[w++]=k,I[w++]=B}}E.version=m;let A=r.get(v);A&&t.remove(A),r.set(v,E)}function f(v){let b=r.get(v);if(b){let _=v.index;_!==null&&b.version<_.version&&p(v)}else p(v);return r.get(v)}function g(){for(let v in s){let b=s[v].deref();b!==void 0&&c(b)}}return{get:l,update:h,getWireframeAttribute:f,dispose:g}}function V0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let b=0;for(let _=0;_<g;_++)b+=f[_];e.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function H0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function G0(i,t,e){let n=new WeakMap,s=new Ve;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==p){let B=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],C=0;g===!0&&(C=1),v===!0&&(C=2),b===!0&&(C=3);let E=a.attributes.position.count*C,I=1;E>t.maxTextureSize&&(I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let A=new Float32Array(E*I*4*p),x=new Ur(A,E,I,p);x.type=ti,x.needsUpdate=!0;let w=C*4;for(let D=0;D<p;D++){let k=_[D],G=m[D],Z=M[D],N=E*I*4*D;for(let J=0;J<k.count;J++){let Q=J*w;g===!0&&(s.fromBufferAttribute(k,J),A[N+Q+0]=s.x,A[N+Q+1]=s.y,A[N+Q+2]=s.z,A[N+Q+3]=0),v===!0&&(s.fromBufferAttribute(G,J),A[N+Q+4]=s.x,A[N+Q+5]=s.y,A[N+Q+6]=s.z,A[N+Q+7]=0),b===!0&&(s.fromBufferAttribute(Z,J),A[N+Q+8]=s.x,A[N+Q+9]=s.y,A[N+Q+10]=s.z,A[N+Q+11]=Z.itemSize===4?s.w:1)}}f={count:p,texture:x,size:new Jt(E,I)},n.set(a,f),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let b=0;b<l.length;b++)g+=l[b];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function W0(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,p=l.geometry,f=t.get(l,p);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let g=l.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var X0={[Cc]:"LINEAR_TONE_MAPPING",[Rc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[Dc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function Y0(i,t,e,n,s,r){let o=new Fn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new He;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));let p=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(h,p),g=new $r(-1,1,1,-1,0,1),v=null,b=null,_=!1,m,M=null,C=[],E=!1;this.setSize=function(I,A){o.setSize(I,A),a!==null&&a.setSize(I,A),c!==null&&c.setSize(I,A);for(let x=0;x<C.length;x++){let w=C[x];w.setSize&&w.setSize(I,A)}},this.setEffects=function(I){C=I,E=C.length>0&&C[0].isRenderPass===!0;let A=o.width,x=o.height;C.length>0&&a===null&&(a=new Fn(A,x,{type:ei,depthBuffer:!1,stencilBuffer:!1}),c=new Fn(A,x,{type:ei,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&C.some(B=>B.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new Li(A,x),r===!0&&(l.format=Ui,l.type=Ts)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let B=0;B<C.length;B++){let D=C[B];D.setSize&&D.setSize(A,x),w&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(I,A){if(_||I.toneMapping===di&&C.length===0)return!1;if(M=A,A!==null){let x=A.width,w=A.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return E===!1&&I.setRenderTarget(o),m=I.toneMapping,I.toneMapping=di,!0},this.hasRenderPass=function(){return E},this.end=function(I,A){I.toneMapping=m,_=!0;let x=o,w=a;for(let B=0;B<C.length;B++){let D=C[B];D.enabled!==!1&&(D.render(I,w,x,A),D.needsSwap!==!1&&(x=w,w=w===a?c:a))}if(v!==I.outputColorSpace||b!==I.toneMapping){v=I.outputColorSpace,b=I.toneMapping,p.defines={},Se.getTransfer(v)===Te&&(p.defines.SRGB_TRANSFER="");let B=X0[b];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,I.setRenderTarget(M),I.render(f,g),M=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}var Sd=new An,Md=new Li(1,1),bd=new kr(1),wd=new Ur,Ed=new ha,Td=new zr,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yl(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function K0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),rn(e,n)}}function j0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),rn(e,n)}}function Q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),rn(e,n)}}function t_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function s_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function Sl(i){return i.version===0&&(i.compareFunction=Xc,i.needsUpdate=!0),i}function l_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sl(Md):r=Sd,e.setTexture2D(t||r,s)}function c_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ed,s)}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sl(bd):r=Td,e.setTextureCube(t||r,s)}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wd,s)}function d_(i){switch(i){case 5126:return q0;case 35664:return $0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}function f_(i,t){i.uniform1fv(this.addr,t)}function p_(i,t){let e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function m_(i,t){let e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function g_(i,t){let e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function __(i,t){let e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function x_(i,t){let e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v_(i,t){let e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y_(i,t){i.uniform1iv(this.addr,t)}function S_(i,t){i.uniform2iv(this.addr,t)}function M_(i,t){i.uniform3iv(this.addr,t)}function b_(i,t){i.uniform4iv(this.addr,t)}function w_(i,t){i.uniform1uiv(this.addr,t)}function E_(i,t){i.uniform2uiv(this.addr,t)}function T_(i,t){i.uniform3uiv(this.addr,t)}function A_(i,t){i.uniform4uiv(this.addr,t)}function C_(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sl(Md):o=Sd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function R_(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ed,r[o])}function P_(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Sl(bd):o=Td;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function I_(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wd,r[o])}function L_(i){switch(i){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return x_;case 35676:return v_;case 5124:case 35670:return y_;case 35667:case 35671:return S_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return w_;case 36294:return E_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}var ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d_(e.type)}},sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L_(e.type)}},rh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},eh=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function D_(i,t,e){let n=i.name,s=n.length;for(eh.lastIndex=0;;){let r=eh.exec(n),o=eh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rd(e,l===void 0?new ih(a,i,t):new sh(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new rh(a),rd(e,p)),e=p}}}var pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);D_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var N_=37297,U_=0;function F_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ad=new re;function O_(i){Se._getMatrix(ad,Se.workingColorSpace,i);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(t),a)}else return r}function B_(i,t){let e=O_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var z_={[Cc]:"Linear",[Rc]:"Reinhard",[Pc]:"Cineon",[Ic]:"ACESFilmic",[Dc]:"AgX",[Nc]:"Neutral",[Lc]:"Custom"};function k_(i,t){let e=z_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _l=new O;function V_(){Se.getLuminanceCoefficients(_l);let i=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function G_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function lo(i){return i!==""}function cd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(X_,Y_)}function Y_(i,t){let e=fe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return oh(e)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(q_,$_)}function $_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Z_={[jr]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function J_(i){return Z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var K_={[ur]:"ENVMAP_MODE_REFRACTION"};function j_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":K_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Q_={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Ru]:"ENVMAP_BLENDING_ADD"};function tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Q_[i.combine]||"ENVMAP_BLENDING_NONE"}function ex(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=J_(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=j_(e),p=tx(e),f=H_(e),g=G_(r),v=s.createProgram(),b,_,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lo).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lo).join(`
`),_.length>0&&(_+=`
`)):(b=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),_=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?fe.tonemapping_pars_fragment:"",e.toneMapping!==di?k_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,B_("linearToOutputTexel",e.outputColorSpace),V_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lo).join(`
`)),o=oh(o),o=cd(o,e),o=hd(o,e),a=oh(a),a=cd(a,e),a=hd(a,e),o=ud(o),a=ud(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=m+b+o,C=m+_+a,E=od(s,s.VERTEX_SHADER,M),I=od(s,s.FRAGMENT_SHADER,C);s.attachShader(v,E),s.attachShader(v,I),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(E)||"",Z=s.getShaderInfoLog(I)||"",N=k.trim(),J=G.trim(),Q=Z.trim(),j=!0,ft=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,I);else{let tt=ld(s,E,"vertex"),ht=ld(s,I,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+tt+`
`+ht)}else N!==""?Zt("WebGLProgram: Program Info Log:",N):(J===""||Q==="")&&(ft=!1);ft&&(D.diagnostics={runnable:j,programLog:N,vertexShader:{log:J,prefix:b},fragmentShader:{log:Q,prefix:_}})}s.deleteShader(E),s.deleteShader(I),x=new pr(s,v),w=W_(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(v,N_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=I,this}var nx=0,ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lh(t),e.set(t,n)),n}},lh=class{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}};function ix(i){return i===is||i===so||i===ro}function sx(i,t,e,n,s,r){let o=new nr,a=new ah,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,B,D,k,G){let Z=D.fog,N=k.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||J,Q),ft=f[x.type],tt=n.precision;x.precision!==null&&(tt=n.getMaxPrecision(x.precision),tt!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",tt,"instead."));let ht=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,mt=ht!==void 0?ht.length:0,Ot=0;N.morphAttributes.position!==void 0&&(Ot=1),N.morphAttributes.normal!==void 0&&(Ot=2),N.morphAttributes.color!==void 0&&(Ot=3);let jt,ot,Pt,zt;if(ft){let Rt=pi[ft];jt=Rt.vertexShader,ot=Rt.fragmentShader}else{jt=x.vertexShader,ot=x.fragmentShader;let Rt=a.getVertexShaderStage(x),Me=a.getFragmentShaderStage(x);a.update(x,Rt,Me),Pt=Rt.id,zt=Me.id}let $t=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),oe=k.isInstancedMesh===!0,Xe=k.isBatchedMesh===!0,Qt=!!x.map,we=!!x.matcap,Ee=!!j,pe=Ee&&j.isPMREMTexture===!0,Qe=!!x.aoMap,Ye=!!x.lightMap,dn=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,kn=!!x.displacementMap,Ue=!!x.emissiveMap,wn=!!x.metalnessMap,vn=!!x.roughnessMap,En=x.anisotropy>0,H=x.clearcoat>0,Tn=x.diffuseRoughness>0,Ae=x.dispersion>0,Ie=x.retroreflectivity>0,Tt=x.iridescence>0,Ne=x.sheen>0,Wt=x.transmission>0,te=En&&!!x.anisotropyMap,R=H&&!!x.clearcoatMap,y=H&&!!x.clearcoatNormalMap,q=H&&!!x.clearcoatRoughnessMap,_t=Tn&&!!x.diffuseRoughnessMap,it=Tt&&!!x.iridescenceMap,St=Tt&&!!x.iridescenceThicknessMap,dt=Ne&&!!x.sheenColorMap,at=Ne&&!!x.sheenRoughnessMap,nt=!!x.specularMap,Et=!!x.specularColorMap,U=!!x.specularIntensityMap,ct=Wt&&!!x.transmissionMap,st=Wt&&!!x.thicknessMap,Mt=!!x.gradientMap,vt=!!x.alphaMap,bt=x.alphaTest>0,Xt=!!x.alphaHash,le=!!x.extensions,gt=di;x.toneMapped&&($t===null||$t.isXRRenderTarget===!0)&&(gt=i.toneMapping);let Yt=pe?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,ce={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:jt,fragmentShader:ot,defines:x.defines,customVertexShaderID:Pt,customFragmentShaderID:zt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:tt,batching:Xe,batchingColor:Xe&&k._colorsTexture!==null,instancing:oe,instancingColor:oe&&k.instanceColor!==null,instancingMorph:oe&&k.morphTexture!==null,outputColorSpace:$t===null?i.outputColorSpace:$t.isXRRenderTarget===!0?$t.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Qt,matcap:we,envMap:Ee,envMapMode:Ee&&j.mapping,envMapPMREM:pe,envMapMaxLod:pe?Yt.length-1:null,envMapSize:pe?Yt[0].width:null,aoMap:Qe,lightMap:Ye,bumpMap:dn,normalMap:me,displacementMap:kn,emissiveMap:Ue,normalMapObjectSpace:me&&x.normalMapType===Lu,normalMapTangentSpace:me&&x.normalMapType===ml,packedNormalMap:me&&x.normalMapType===ml&&ix(x.normalMap.format),metalnessMap:wn,roughnessMap:vn,anisotropy:En,anisotropyMap:te,clearcoat:H,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:q,diffuseRoughness:Tn,diffuseRoughnessMap:_t,dispersion:Ae,retroreflection:Ie,iridescence:Tt,iridescenceMap:it,iridescenceThicknessMap:St,sheen:Ne,sheenColorMap:dt,sheenRoughnessMap:at,specularMap:nt,specularColorMap:Et,specularIntensityMap:U,transmission:Wt,transmissionMap:ct,thicknessMap:st,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===hr&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:bt,alphaHash:Xt,combine:x.combine,mapUv:Qt&&g(x.map.channel),aoMapUv:Qe&&g(x.aoMap.channel),lightMapUv:Ye&&g(x.lightMap.channel),bumpMapUv:dn&&g(x.bumpMap.channel),normalMapUv:me&&g(x.normalMap.channel),displacementMapUv:kn&&g(x.displacementMap.channel),emissiveMapUv:Ue&&g(x.emissiveMap.channel),metalnessMapUv:wn&&g(x.metalnessMap.channel),roughnessMapUv:vn&&g(x.roughnessMap.channel),anisotropyMapUv:te&&g(x.anisotropyMap.channel),clearcoatMapUv:R&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&g(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_t&&g(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:at&&g(x.sheenRoughnessMap.channel),specularMapUv:nt&&g(x.specularMap.channel),specularColorMapUv:Et&&g(x.specularColorMap.channel),specularIntensityMapUv:U&&g(x.specularIntensityMap.channel),transmissionMapUv:ct&&g(x.transmissionMap.channel),thicknessMapUv:st&&g(x.thicknessMap.channel),alphaMapUv:vt&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(me||En),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(Qt||vt),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:It,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ot,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Qt&&x.map.isVideoTexture===!0&&Se.getTransfer(x.map.colorSpace)===Te,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&Se.getTransfer(x.emissiveMap.colorSpace)===Te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cn,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||Xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function b(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)w.push(B),w.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(_(w,x),m(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function m(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let w=f[x.type],B;if(w){let D=pi[w];B=qu.clone(D.uniforms)}else B=x.uniforms;return B}function C(x,w){let B=h.get(w);return B!==void 0?++B.usedTimes:(B=new ex(i,w,x,s),l.push(B),h.set(w,B)),B}function E(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function I(x){a.remove(x)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:b,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:I,programs:l,dispose:A}}function rx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ox(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,v,b,_,m){let M=i[t];return M===void 0?(M={id:f.id,object:f,geometry:g,material:v,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:_,group:m},i[t]=M):(M.id=f.id,M.object=f,M.geometry=g,M.material=v,M.materialVariant=o(f),M.groupOrder=b,M.renderOrder=f.renderOrder,M.z=_,M.group=m),t++,M}function c(f,g,v,b,_,m,M){M.reversedDepth===!0&&(_=-_);let C=a(f,g,v,b,_,m);v.transmission>0?n.push(C):v.transparent===!0?s.push(C):e.push(C)}function l(f,g,v,b,_,m){let M=a(f,g,v,b,_,m);v.transmission>0?n.unshift(M):v.transparent===!0?s.unshift(M):e.unshift(M)}function h(f,g){e.length>1&&e.sort(f||ox),n.length>1&&n.sort(g||fd),s.length>1&&s.sort(g||fd)}function p(){for(let f=t,g=i.length;f<g;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function ax(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new ae};break;case"SpotLight":e={position:new O,direction:new O,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function cx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hx=0;function ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dx(i){let t=new lx,e=cx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new Pe,o=new Pe;function a(l){let h=0,p=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,v=0,b=0,_=0,m=0,M=0,C=0,E=0,I=0,A=0,x=0,w=0,B=0,D=0;l.sort(ux);for(let G=0,Z=l.length;G<Z;G++){let N=l[G],J=N.color,Q=N.intensity,j=N.distance,ft=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===is?ft=N.shadow.map.texture:ft=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=J.r*Q,p+=J.g*Q,f+=J.b*Q;else if(N.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(N.sh.coefficients[tt],Q);D++}else if(N.isSunLight){let tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ht=N.shadow,mt=e.get(N);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[v]=mt,n.sunShadowMap[v]=ft;let Ot=ht.getViewportCount();for(let jt=0;jt<Ot;jt++)n.sunShadowMatrix[b+jt]=ht.getMatrix(jt),n.sunShadowCascade[b+jt]=ht._cascadeData[jt];b+=Ot,v++}n.sun[g]=tt,g++}else if(N.isDirectionalLight){let tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ht=N.shadow,mt=e.get(N);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize=ht.mapSize,n.directionalShadow[_]=mt,n.directionalShadowMap[_]=ft,n.directionalShadowMatrix[_]=N.shadow.matrix,I++}n.directional[_]=tt,_++}else if(N.isSpotLight){let tt=t.get(N);tt.position.setFromMatrixPosition(N.matrixWorld),tt.color.copy(J).multiplyScalar(Q),tt.distance=j,tt.coneCos=Math.cos(N.angle),tt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),tt.decay=N.decay,n.spot[M]=tt;let ht=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,ht.updateMatrices(N),N.castShadow&&B++),n.spotLightMatrix[M]=ht.matrix,N.castShadow){let mt=e.get(N);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize=ht.mapSize,n.spotShadow[M]=mt,n.spotShadowMap[M]=ft,x++}M++}else if(N.isRectAreaLight){let tt=t.get(N);tt.color.copy(J).multiplyScalar(Q),tt.halfWidth.set(N.width*.5,0,0),tt.halfHeight.set(0,N.height*.5,0),n.rectArea[C]=tt,C++}else if(N.isPointLight){let tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),tt.distance=N.distance,tt.decay=N.decay,N.castShadow){let ht=N.shadow,mt=e.get(N);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize=ht.mapSize,mt.shadowCameraNear=ht.camera.near,mt.shadowCameraFar=ht.camera.far,n.pointShadow[m]=mt,n.pointShadowMap[m]=ft,n.pointShadowMatrix[m]=N.shadow.matrix,A++}n.point[m]=tt,m++}else if(N.isHemisphereLight){let tt=t.get(N);tt.skyColor.copy(N.color).multiplyScalar(Q),tt.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[E]=tt,E++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let k=n.hash;(k.sunLength!==g||k.directionalLength!==_||k.pointLength!==m||k.spotLength!==M||k.rectAreaLength!==C||k.hemiLength!==E||k.numSunShadows!==v||k.numDirectionalShadows!==I||k.numPointShadows!==A||k.numSpotShadows!==x||k.numSpotMaps!==w||k.numLightProbes!==D)&&(n.sun.length=g,n.directional.length=_,n.spot.length=M,n.rectArea.length=C,n.point.length=m,n.hemi.length=E,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-B,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=D,k.sunLength=g,k.directionalLength=_,k.pointLength=m,k.spotLength=M,k.rectAreaLength=C,k.hemiLength=E,k.numSunShadows=v,k.numDirectionalShadows=I,k.numPointShadows=A,k.numSpotShadows=x,k.numSpotMaps=w,k.numLightProbes=D,n.version=hx++)}function c(l,h){let p=0,f=0,g=0,v=0,b=0,_=0,m=h.matrixWorldInverse;for(let M=0,C=l.length;M<C;M++){let E=l[M];if(E.isSunLight){let I=n.sun[p];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),p++}else if(E.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),f++}else if(E.isSpotLight){let I=n.spot[v];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),v++}else if(E.isRectAreaLight){let I=n.rectArea[b];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),b++}else if(E.isPointLight){let I=n.point[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),g++}else if(E.isHemisphereLight){let I=n.hemi[_];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function md(i){let t=new dx(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function o(p){p.isLightProbeGrid?s.push(p):e.push(p)}function a(p){n.push(p)}function c(){t.setup(e),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function l(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new md(i),t.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],_x=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],gd=new Pe,ao=new O,nh=new O;function xx(i,t,e){let n=new Zi,s=new Jt,r=new Jt,o=new Ve,a=new _a,c=new xa,l={},h=e.maxTextureSize,p={[ns]:bn,[bn]:ns,[Cn]:Cn},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:px,fragmentShader:mx}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let v=new He;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ut(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jr;let m=this.type;this.render=function(A,x,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===cu&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jr);let B=i.getRenderTarget(),D=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),G=i.state;G.setBlending(bs),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Z=m!==this.type;Z&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(J=>J.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,J=A.length;N<J;N++){let Q=A[N],j=Q.shadow;if(j===void 0){Zt("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ft=j.getFrameExtents();s.multiply(ft),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,j.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=tt,j.map===null||Z===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===cr){if(Q.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Fn(s.x,s.y,{format:is,type:ei,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new Li(s.x,s.y,ti),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=Ri,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn}else Q.isPointLight?(j.map=new co(s.x),j.map.depthTexture=new kr(s.x,Qn)):(j.map=new Fn(s.x,s.y),j.map.depthTexture=new Li(s.x,s.y,Qn)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=Ri,this.type===jr?(j.map.depthTexture.compareFunction=tt?Wc:Gc,j.map.depthTexture.minFilter=Mn,j.map.depthTexture.magFilter=Mn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let ht=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Q.isPointLight!==!0&&j.updateMatrices(Q,w);let mt=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:w.layers;for(let Ot=0;Ot<ht;Ot++){let jt=j.getCamera(Ot);if(Q.isPointLight){let ot=j.camera,Pt=j.matrix,zt=Q.distance||ot.far;zt!==ot.far&&(ot.far=zt,ot.updateProjectionMatrix()),ao.setFromMatrixPosition(Q.matrixWorld),ot.position.copy(ao),nh.copy(ot.position),nh.add(gx[Ot]),ot.up.copy(_x[Ot]),ot.lookAt(nh),ot.updateMatrixWorld(),Pt.makeTranslation(-ao.x,-ao.y,-ao.z),gd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),j._frustum.setFromProjectionMatrix(gd,ot.coordinateSystem,ot.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,Ot),i.clear();else{Ot===0&&(i.setRenderTarget(j.map),i.clear());let ot=j.getViewport(Ot);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),G.viewport(o)}n=j.getFrustum(Ot),E(x,w,jt,Q,mt,this.type)}j.isPointLightShadow!==!0&&this.type===cr&&M(j,w),j.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(B,D,k)};function M(A,x){let w=t.update(b);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null?A.mapPass=new Fn(s.x,s.y,{format:is,type:ei}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(x,null,w,f,b,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value.set(A.map.width,A.map.height),g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(x,null,w,g,b,null)}function C(A,x,w,B){let D=null,k=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)D=k;else if(D=w.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let G=D.uuid,Z=x.uuid,N=l[G];N===void 0&&(N={},l[G]=N);let J=N[Z];J===void 0&&(J=D.clone(),N[Z]=J,x.addEventListener("dispose",I)),D=J}if(D.visible=x.visible,D.wireframe=x.wireframe,B===cr?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:p[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,w.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let G=i.properties.get(D);G.light=w}return D}function E(A,x,w,B,D,k){if(A.visible===!1)return;if(A.layers.test(D)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&k===cr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);let N=t.update(A),J=A.material;if(Array.isArray(J)){let Q=N.groups;for(let j=0,ft=Q.length;j<ft;j++){let tt=Q[j],ht=J[tt.materialIndex];if(ht&&ht.visible){let mt=C(A,ht,B,k);A.onBeforeShadow(i,A,x,w,N,mt,tt),i.renderBufferDirect(w,null,N,mt,A,tt),A.onAfterShadow(i,A,x,w,N,mt,tt)}}}else if(J.visible){let Q=C(A,J,B,k);A.onBeforeShadow(i,A,x,w,N,Q,null),i.renderBufferDirect(w,null,N,Q,A,null),A.onAfterShadow(i,A,x,w,N,Q,null)}}let Z=A.children;for(let N=0,J=Z.length;N<J;N++)E(Z[N],x,w,B,D,k)}function I(A){A.target.removeEventListener("dispose",I);for(let w in l){let B=l[w],D=A.target.uuid;D in B&&(B[D].dispose(),delete B[D])}}}function vx(i,t){function e(){let U=!1,ct=new Ve,st=null,Mt=new Ve(0,0,0,0);return{setMask:function(vt){st!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),st=vt)},setLocked:function(vt){U=vt},setClear:function(vt,bt,Xt,le,gt){gt===!0&&(vt*=le,bt*=le,Xt*=le),ct.set(vt,bt,Xt,le),Mt.equals(ct)===!1&&(i.clearColor(vt,bt,Xt,le),Mt.copy(ct))},reset:function(){U=!1,st=null,Mt.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,st=null,Mt=null,vt=null;return{setReversed:function(bt){if(ct!==bt){let Xt=t.get("EXT_clip_control");bt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),ct=bt;let le=vt;vt=null,this.setClear(le)}},getReversed:function(){return ct},setTest:function(bt){bt?It(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(bt){st!==bt&&!U&&(i.depthMask(bt),st=bt)},setFunc:function(bt){if(ct&&(bt=Gu[bt]),Mt!==bt){switch(bt){case jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=bt}},setLocked:function(bt){U=bt},setClear:function(bt){vt!==bt&&(vt=bt,ct&&(bt=1-bt),i.clearDepth(bt))},reset:function(){U=!1,st=null,Mt=null,vt=null,ct=!1}}}function s(){let U=!1,ct=null,st=null,Mt=null,vt=null,bt=null,Xt=null,le=null,gt=null;return{setTest:function(Yt){U||(Yt?It(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(Yt){ct!==Yt&&!U&&(i.stencilMask(Yt),ct=Yt)},setFunc:function(Yt,ce,Rt){(st!==Yt||Mt!==ce||vt!==Rt)&&(i.stencilFunc(Yt,ce,Rt),st=Yt,Mt=ce,vt=Rt)},setOp:function(Yt,ce,Rt){(bt!==Yt||Xt!==ce||le!==Rt)&&(i.stencilOp(Yt,ce,Rt),bt=Yt,Xt=ce,le=Rt)},setLocked:function(Yt){U=Yt},setClear:function(Yt){gt!==Yt&&(i.clearStencil(Yt),gt=Yt)},reset:function(){U=!1,ct=null,st=null,Mt=null,vt=null,bt=null,Xt=null,le=null,gt=null}}}let r=new e,o=new n,a=new s,c={},l=new WeakMap,h={},p={},f={},g=new WeakMap,v=[],b=null,_=!1,m=null,M=null,C=null,E=null,I=null,A=null,x=null,w=new ae(0,0,0),B=0,D=!1,k=null,G=null,Z=null,N=null,J=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ft=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(tt)[1]),j=ft>=1):tt.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),j=ft>=2);let ht=null,mt={},Ot=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),ot=new Ve().fromArray(Ot),Pt=new Ve().fromArray(jt);function zt(U,ct,st,Mt){let vt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(U,bt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<st;Xt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ct+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return bt}let $t={};$t[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),$t[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$t[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$t[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),It(i.DEPTH_TEST),o.setFunc(Ks),dn(!1),me(Sc),It(i.CULL_FACE),Qe(bs);function It(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function oe(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Xe(U,ct){return f[U]!==ct?(i.bindFramebuffer(U,ct),f[U]=ct,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Qt(U,ct){let st=v,Mt=!1;if(U){st=g.get(ct),st===void 0&&(st=[],g.set(ct,st));let vt=U.textures;if(st.length!==vt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Xt=vt.length;bt<Xt;bt++)st[bt]=i.COLOR_ATTACHMENT0+bt;st.length=vt.length,Mt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(st)}function we(U){return b!==U?(i.useProgram(U),b=U,!0):!1}let Ee={[ws]:i.FUNC_ADD,[uu]:i.FUNC_SUBTRACT,[du]:i.FUNC_REVERSE_SUBTRACT};Ee[fu]=i.MIN,Ee[pu]=i.MAX;let pe={[mu]:i.ZERO,[gu]:i.ONE,[_u]:i.SRC_COLOR,[Ec]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[vu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[Tc]:i.ONE_MINUS_SRC_ALPHA,[Mu]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Eu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(U,ct,st,Mt,vt,bt,Xt,le,gt,Yt){if(U===bs){_===!0&&(oe(i.BLEND),_=!1);return}if(_===!1&&(It(i.BLEND),_=!0),U!==hu){if(U!==m||Yt!==D){if((M!==ws||I!==ws)&&(i.blendEquation(i.FUNC_ADD),M=ws,I=ws),Yt)switch(U){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",U);break}else switch(U){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",U);break}C=null,E=null,A=null,x=null,w.set(0,0,0),B=0,m=U,D=Yt}return}vt=vt||ct,bt=bt||st,Xt=Xt||Mt,(ct!==M||vt!==I)&&(i.blendEquationSeparate(Ee[ct],Ee[vt]),M=ct,I=vt),(st!==C||Mt!==E||bt!==A||Xt!==x)&&(i.blendFuncSeparate(pe[st],pe[Mt],pe[bt],pe[Xt]),C=st,E=Mt,A=bt,x=Xt),(le.equals(w)===!1||gt!==B)&&(i.blendColor(le.r,le.g,le.b,gt),w.copy(le),B=gt),m=U,D=!1}function Ye(U,ct){U.side===Cn?oe(i.CULL_FACE):It(i.CULL_FACE);let st=U.side===bn;ct&&(st=!st),dn(st),U.blending===hr&&U.transparent===!1?Qe(bs):Qe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Mt=U.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function dn(U){k!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),k=U)}function me(U){U!==au?(It(i.CULL_FACE),U!==G&&(U===Sc?i.cullFace(i.BACK):U===lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),G=U}function kn(U){U!==Z&&(j&&i.lineWidth(U),Z=U)}function Ue(U,ct,st){U?(It(i.POLYGON_OFFSET_FILL),(N!==ct||J!==st)&&(N=ct,J=st,o.getReversed()&&(ct=-ct,st=-st),i.polygonOffset(ct,st))):oe(i.POLYGON_OFFSET_FILL)}function wn(U){U?It(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function vn(U){U===void 0&&(U=i.TEXTURE0+Q-1),ht!==U&&(i.activeTexture(U),ht=U)}function En(U,ct,st){st===void 0&&(ht===null?st=i.TEXTURE0+Q-1:st=ht);let Mt=mt[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},mt[st]=Mt),(Mt.type!==U||Mt.texture!==ct)&&(ht!==st&&(i.activeTexture(st),ht=st),i.bindTexture(U,ct||$t[U]),Mt.type=U,Mt.texture=ct)}function H(){let U=mt[ht];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Tn(){try{i.compressedTexImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function Ae(){try{i.compressedTexImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function Ie(){try{i.texSubImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function Tt(){try{i.texSubImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function Ne(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function Wt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function te(){try{i.texStorage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function R(){try{i.texStorage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function y(){try{i.texImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function q(){try{i.texImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function _t(U){return p[U]!==void 0?p[U]:i.getParameter(U)}function it(U,ct){p[U]!==ct&&(i.pixelStorei(U,ct),p[U]=ct)}function St(U){ot.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ot.copy(U))}function dt(U){Pt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Pt.copy(U))}function at(U,ct){let st=l.get(ct);st===void 0&&(st=new WeakMap,l.set(ct,st));let Mt=st.get(U);Mt===void 0&&(Mt=i.getUniformBlockIndex(ct,U.name),i.uniformBlockBinding(ct,Mt,Mt),st.set(U,Mt))}function nt(U,ct,st){let vt=l.get(ct).get(U);c[vt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,vt,st),c[vt]=st)}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ht=null,mt={},f={},c={},g=new WeakMap,v=[],b=null,_=!1,m=null,M=null,C=null,E=null,I=null,A=null,x=null,w=new ae(0,0,0),B=0,D=!1,k=null,G=null,Z=null,N=null,J=null,ot.set(0,0,i.canvas.width,i.canvas.height),Pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:It,disable:oe,bindFramebuffer:Xe,drawBuffers:Qt,useProgram:we,setBlending:Qe,setMaterial:Ye,setFlipSided:dn,setCullFace:me,setLineWidth:kn,setPolygonOffset:Ue,setScissorTest:wn,activeTexture:vn,bindTexture:En,unbindTexture:H,compressedTexImage2D:Tn,compressedTexImage3D:Ae,texImage2D:y,texImage3D:q,pixelStorei:it,getParameter:_t,updateUBOMapping:at,uniformBlockBinding:nt,texStorage2D:te,texStorage3D:R,texSubImage2D:Ie,texSubImage3D:Tt,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Wt,scissor:St,viewport:dt,reset:Et}}function yx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Jt,h=new WeakMap,p=new Set,f,g=new WeakMap,v=new Set,b=new FinalizationRegistry(R=>v.delete(R)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return _?new OffscreenCanvas(R,y):Nr("canvas")}function M(R,y,q){let _t=1,it=te(R);if((it.width>q||it.height>q)&&(_t=q/Math.max(it.width,it.height)),_t<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let St=Math.floor(_t*it.width),dt=Math.floor(_t*it.height);f===void 0&&(f=m(St,dt));let at=y?m(St,dt):f;return at.width=St,at.height=dt,at.getContext("2d").drawImage(R,0,0,St,dt),Zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+St+"x"+dt+")."),at}else return"data"in R&&Zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function C(R){return R.generateMipmaps}function E(R){i.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(R,y,q,_t,it,St=!1){if(R!==null){if(i[R]!==void 0)return i[R];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;_t&&(dt=t.get("EXT_texture_norm16"),dt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=y;if(y===i.RED&&(q===i.FLOAT&&(at=i.R32F),q===i.HALF_FLOAT&&(at=i.R16F),q===i.UNSIGNED_BYTE&&(at=i.R8),q===i.UNSIGNED_SHORT&&dt&&(at=dt.R16_EXT),q===i.SHORT&&dt&&(at=dt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.R8UI),q===i.UNSIGNED_SHORT&&(at=i.R16UI),q===i.UNSIGNED_INT&&(at=i.R32UI),q===i.BYTE&&(at=i.R8I),q===i.SHORT&&(at=i.R16I),q===i.INT&&(at=i.R32I)),y===i.RG&&(q===i.FLOAT&&(at=i.RG32F),q===i.HALF_FLOAT&&(at=i.RG16F),q===i.UNSIGNED_BYTE&&(at=i.RG8),q===i.UNSIGNED_SHORT&&dt&&(at=dt.RG16_EXT),q===i.SHORT&&dt&&(at=dt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RG8UI),q===i.UNSIGNED_SHORT&&(at=i.RG16UI),q===i.UNSIGNED_INT&&(at=i.RG32UI),q===i.BYTE&&(at=i.RG8I),q===i.SHORT&&(at=i.RG16I),q===i.INT&&(at=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RGB8UI),q===i.UNSIGNED_SHORT&&(at=i.RGB16UI),q===i.UNSIGNED_INT&&(at=i.RGB32UI),q===i.BYTE&&(at=i.RGB8I),q===i.SHORT&&(at=i.RGB16I),q===i.INT&&(at=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),q===i.UNSIGNED_INT&&(at=i.RGBA32UI),q===i.BYTE&&(at=i.RGBA8I),q===i.SHORT&&(at=i.RGBA16I),q===i.INT&&(at=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_SHORT&&dt&&(at=dt.RGB16_EXT),q===i.SHORT&&dt&&(at=dt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),y===i.RGBA){let nt=St?Dr:Se.getTransfer(it);q===i.FLOAT&&(at=i.RGBA32F),q===i.HALF_FLOAT&&(at=i.RGBA16F),q===i.UNSIGNED_BYTE&&(at=nt===Te?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&dt&&(at=dt.RGBA16_EXT),q===i.SHORT&&dt&&(at=dt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function x(R,y){let q;return R?y===null||y===Qn||y===Ts?q=i.DEPTH24_STENCIL8:y===ti?q=i.DEPTH32F_STENCIL8:y===dr&&(q=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qn||y===Ts?q=i.DEPTH_COMPONENT24:y===ti?q=i.DEPTH_COMPONENT32F:y===dr&&(q=i.DEPTH_COMPONENT16),q}function w(R,y){return C(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function B(R){let y=new WeakRef(R);n.get(R).__ref=y,v.add(y),b.register(R,y,y)}function D(R){let y=n.get(R).__ref;y!==void 0&&(v.delete(y),b.unregister(y))}function k(R){Z(R.target)}function G(R){N(R.target)}function Z(R){R.removeEventListener("dispose",k),D(R),Q(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&p.delete(R)}function N(R){R.removeEventListener("dispose",G),D(R),ft(R)}function J(){for(let R of v){let y=R.deref();y!==void 0&&(y.isRenderTarget===!0?N(y):Z(y))}v.clear(),p.clear()}function Q(R){let y=n.get(R);if(y.__webglInit===void 0)return;let q=R.source,_t=g.get(q);if(_t){let it=_t[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&j(R),Object.keys(_t).length===0&&g.delete(q)}n.remove(R)}function j(R){let y=n.get(R);i.deleteTexture(y.__webglTexture);let q=R.source,_t=g.get(q);delete _t[y.__cacheKey],o.memory.textures--}function ft(R){let y=n.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();let q=R.depthTexture;if(q&&q.renderTarget===R&&Z(q),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(y.__webglFramebuffer[it]))for(let St=0;St<y.__webglFramebuffer[it].length;St++)i.deleteFramebuffer(y.__webglFramebuffer[it][St]);else i.deleteFramebuffer(y.__webglFramebuffer[it]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[it])}else{if(Array.isArray(y.__webglFramebuffer))for(let it=0;it<y.__webglFramebuffer.length;it++)i.deleteFramebuffer(y.__webglFramebuffer[it]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let it=0;it<y.__webglColorRenderbuffer.length;it++)y.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[it]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let _t=R.textures;for(let it=0,St=_t.length;it<St;it++){let dt=n.get(_t[it]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(_t[it])}n.remove(R)}let tt=0;function ht(){tt=0}function mt(){return tt}function Ot(R){tt=R}function jt(){let R=tt;return R>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),tt+=1,R}function ot(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Pt(R,y){let q=n.get(R);if(R.isVideoTexture&&Ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){let _t=R.image;if(_t===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(q,R,y);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function zt(R,y){let q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){Ye(q,R,y);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function $t(R,y){let q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){Ye(q,R,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function It(R,y){let q=n.get(R);if(R.version>0&&q.__version!==R.version){dn(q,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}let oe={[ra]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},Xe={[hn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},Qt={[Nu]:i.NEVER,[Xc]:i.ALWAYS,[Uu]:i.LESS,[Gc]:i.LEQUAL,[Fu]:i.EQUAL,[Wc]:i.GEQUAL,[Ou]:i.GREATER,[Bu]:i.NOTEQUAL};function we(R,y){if(y.type===ti&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===La||y.magFilter===Qr||y.magFilter===Ni||y.minFilter===Mn||y.minFilter===La||y.minFilter===Qr||y.minFilter===Ni)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,oe[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Xe[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Xe[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Qt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==Qr&&y.minFilter!==Ni||y.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ee(R,y){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",k),B(y));let _t=y.source,it=g.get(_t);it===void 0&&(it={},g.set(_t,it));let St=ot(y);if(St!==R.__cacheKey){it[St]===void 0&&(it[St]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[St].usedTimes++;let dt=it[R.__cacheKey];dt!==void 0&&(it[R.__cacheKey].usedTimes--,dt.usedTimes===0&&j(y)),R.__cacheKey=St,R.__webglTexture=it[St].texture}return q}function pe(R,y,q){return Math.floor(Math.floor(R/q)/y)}function Qe(R,y,q,_t){let St=R.updateRanges;if(St.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,_t,y.data);else{St.sort((U,ct)=>U.start-ct.start);let dt=0;for(let U=1;U<St.length;U++){let ct=St[dt],st=St[U],Mt=ct.start+ct.count,vt=pe(st.start,y.width,4),bt=pe(ct.start,y.width,4);st.start<=Mt+1&&vt===bt&&pe(st.start+st.count-1,y.width,4)===vt?ct.count=Math.max(ct.count,st.start+st.count-ct.start):(++dt,St[dt]=st)}St.length=dt+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let U=0,ct=St.length;U<ct;U++){let st=St[U],Mt=Math.floor(st.start/4),vt=Math.ceil(st.count/4),bt=Mt%y.width,Xt=Math.floor(Mt/y.width),le=vt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(i.TEXTURE_2D,0,bt,Xt,le,gt,q,_t,y.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function Ye(R,y,q){let _t=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(_t=i.TEXTURE_3D);let it=Ee(R,y),St=y.source;e.bindTexture(_t,R.__webglTexture,i.TEXTURE0+q);let dt=n.get(St);if(St.version!==dt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let gt=Se.getPrimaries(Se.workingColorSpace),Yt=y.colorSpace===Fi?null:Se.getPrimaries(y.colorSpace),ce=y.colorSpace===Fi||gt===Yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let nt=M(y.image,!1,s.maxTextureSize);nt=Wt(y,nt);let Et=r.convert(y.format,y.colorSpace),U=r.convert(y.type),ct=A(y.internalFormat,Et,U,y.normalized,y.colorSpace,y.isVideoTexture);we(_t,y);let st,Mt=y.mipmaps,vt=y.isVideoTexture!==!0,bt=dt.__version===void 0||it===!0,Xt=St.dataReady,le=w(y,nt);if(y.isDepthTexture)ct=x(y.format===Ui,y.type),bt&&(vt?e.texStorage2D(i.TEXTURE_2D,1,ct,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,ct,nt.width,nt.height,0,Et,U,null));else if(y.isDataTexture)if(Mt.length>0){vt&&bt&&e.texStorage2D(i.TEXTURE_2D,le,ct,Mt[0].width,Mt[0].height);for(let gt=0,Yt=Mt.length;gt<Yt;gt++)st=Mt[gt],vt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,Et,U,st.data):e.texImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,Et,U,st.data);y.generateMipmaps=!1}else vt?(bt&&e.texStorage2D(i.TEXTURE_2D,le,ct,nt.width,nt.height),Xt&&Qe(y,nt,Et,U)):e.texImage2D(i.TEXTURE_2D,0,ct,nt.width,nt.height,0,Et,U,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){vt&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,ct,Mt[0].width,Mt[0].height,nt.depth);for(let gt=0,Yt=Mt.length;gt<Yt;gt++)if(st=Mt[gt],y.format!==ni)if(Et!==null)if(vt){if(Xt)if(y.layerUpdates.size>0){let ce=th(st.width,st.height,y.format,y.type);for(let Rt of y.layerUpdates){let Me=st.data.subarray(Rt*ce/st.data.BYTES_PER_ELEMENT,(Rt+1)*ce/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Rt,st.width,st.height,1,Et,Me)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,st.width,st.height,nt.depth,Et,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,ct,st.width,st.height,nt.depth,0,st.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?Xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,st.width,st.height,nt.depth,Et,U,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,ct,st.width,st.height,nt.depth,0,Et,U,st.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{vt&&bt&&e.texStorage2D(i.TEXTURE_2D,le,ct,Mt[0].width,Mt[0].height);for(let gt=0,Yt=Mt.length;gt<Yt;gt++)st=Mt[gt],y.format!==ni?Et!==null?vt?Xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,Et,st.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,st.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,Et,U,st.data):e.texImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,Et,U,st.data)}else if(y.isDataArrayTexture)if(vt){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,ct,nt.width,nt.height,nt.depth),Xt)if(y.layerUpdates.size>0){let gt=th(nt.width,nt.height,y.format,y.type);for(let Yt of y.layerUpdates){let ce=nt.data.subarray(Yt*gt/nt.data.BYTES_PER_ELEMENT,(Yt+1)*gt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Yt,nt.width,nt.height,1,Et,U,ce)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Et,U,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,nt.width,nt.height,nt.depth,0,Et,U,nt.data);else if(y.isData3DTexture)vt?(bt&&e.texStorage3D(i.TEXTURE_3D,le,ct,nt.width,nt.height,nt.depth),Xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Et,U,nt.data)):e.texImage3D(i.TEXTURE_3D,0,ct,nt.width,nt.height,nt.depth,0,Et,U,nt.data);else if(y.isFramebufferTexture){if(bt)if(vt)e.texStorage2D(i.TEXTURE_2D,le,ct,nt.width,nt.height);else{let gt=nt.width,Yt=nt.height;for(let ce=0;ce<le;ce++)e.texImage2D(i.TEXTURE_2D,ce,ct,gt,Yt,0,Et,U,null),gt>>=1,Yt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),nt.parentNode!==gt){gt.appendChild(nt),p.add(y),gt.onpaint=Yt=>{let ce=Yt.changedElements;for(let Rt of p)ce.includes(Rt.image)&&(Rt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let ce=i.RGBA,Rt=i.RGBA,Me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ce,Rt,Me,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(vt&&bt){let gt=te(Mt[0]);e.texStorage2D(i.TEXTURE_2D,le,ct,gt.width,gt.height)}for(let gt=0,Yt=Mt.length;gt<Yt;gt++)st=Mt[gt],vt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et,U,st):e.texImage2D(i.TEXTURE_2D,gt,ct,Et,U,st);y.generateMipmaps=!1}else if(vt){if(bt){let gt=te(nt);e.texStorage2D(i.TEXTURE_2D,le,ct,gt.width,gt.height)}Xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,U,nt)}else e.texImage2D(i.TEXTURE_2D,0,ct,Et,U,nt);C(y)&&y.mipmapsAutoUpdate===!0&&E(_t),dt.__version=St.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function dn(R,y,q){if(y.image.length!==6)return;let _t=Ee(R,y),it=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);let St=n.get(it);if(it.version!==St.__version||_t===!0){e.activeTexture(i.TEXTURE0+q);let dt=Se.getPrimaries(Se.workingColorSpace),at=y.colorSpace===Fi?null:Se.getPrimaries(y.colorSpace),nt=y.colorSpace===Fi||dt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Et=y.isCompressedTexture||y.image[0].isCompressedTexture,U=y.image[0]&&y.image[0].isDataTexture,ct=[];for(let Rt=0;Rt<6;Rt++)!Et&&!U?ct[Rt]=M(y.image[Rt],!0,s.maxCubemapSize):ct[Rt]=U?y.image[Rt].image:y.image[Rt],ct[Rt]=Wt(y,ct[Rt]);let st=ct[0],Mt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),bt=A(y.internalFormat,Mt,vt,y.normalized,y.colorSpace),Xt=y.isVideoTexture!==!0,le=St.__version===void 0||_t===!0,gt=it.dataReady,Yt=w(y,st);we(i.TEXTURE_CUBE_MAP,y);let ce;if(y.isDepthTexture){if(bt=x(y.format===Ui,y.type),le)if(Xt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,bt,st.width,st.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,bt,st.width,st.height,0,Mt,vt,null)}else if(Et){Xt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,bt,st.width,st.height);for(let Rt=0;Rt<6;Rt++){ce=ct[Rt].mipmaps;for(let Me=0;Me<ce.length;Me++){let We=ce[Me];y.format!==ni?Mt!==null?Xt?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,0,0,We.width,We.height,Mt,We.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,bt,We.width,We.height,0,We.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,0,0,We.width,We.height,Mt,vt,We.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me,bt,We.width,We.height,0,Mt,vt,We.data)}}}else{if(ce=y.mipmaps,Xt&&le){ce.length>0&&Yt++;let Rt=te(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,bt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(U){Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,ct[Rt].width,ct[Rt].height,Mt,vt,ct[Rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,bt,ct[Rt].width,ct[Rt].height,0,Mt,vt,ct[Rt].data);for(let Me=0;Me<ce.length;Me++){let In=ce[Me].image[Rt].image;Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,0,0,In.width,In.height,Mt,vt,In.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,bt,In.width,In.height,0,Mt,vt,In.data)}}else{Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Mt,vt,ct[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,bt,Mt,vt,ct[Rt]);for(let Me=0;Me<ce.length;Me++){let We=ce[Me];Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,0,0,Mt,vt,We.image[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Me+1,bt,Mt,vt,We.image[Rt])}}}C(y)&&y.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),St.__version=it.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function me(R,y,q,_t,it,St){let dt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),nt=A(q.internalFormat,dt,at,q.normalized,q.colorSpace),Et=n.get(y),U=n.get(q);if(U.__renderTarget=y,!Et.__hasExternalTextures){let ct=Math.max(1,y.width>>St),st=Math.max(1,y.height>>St);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,St,nt,ct,st,y.depth,0,dt,at,null):e.texImage2D(it,St,nt,ct,st,0,dt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Tt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,it,U.__webglTexture,0,Ie(y)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,it,U.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kn(R,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){let _t=y.depthTexture,it=_t&&_t.isDepthTexture?_t.type:null,St=x(y.stencilBuffer,it),dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(y),St,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(y),St,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,St,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,R)}else{let _t=y.textures;for(let it=0;it<_t.length;it++){let St=_t[it],dt=r.convert(St.format,St.colorSpace),at=r.convert(St.type),nt=A(St.internalFormat,dt,at,St.normalized,St.colorSpace);Tt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(y),nt,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(y),nt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,nt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(R,y,q){let _t=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(y.depthTexture);it.__renderTarget=y;let St=_t?y.depthTexture.image[0]:y.depthTexture.image;(!it.__webglTexture||St.width!==y.width||St.height!==y.height)&&(St.width=y.width,St.height=y.height,y.depthTexture.needsUpdate=!0),_t?It(y.depthTexture,0):Pt(y.depthTexture,0);let dt=it.__webglTexture,at=Ie(y),nt=_t?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Et=y.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ri)Tt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,nt,dt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,Et,nt,dt,0);else if(y.depthTexture.format===Ui)Tt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,nt,dt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,Et,nt,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wn(R){let y=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let _t=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),_t){let it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,_t.removeEventListener("dispose",it)};_t.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=_t}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let _t=0;_t<6;_t++)Ue(y.__webglFramebuffer[_t],R,_t);else R.texture.mipmaps.length>0?Ue(y.__webglFramebuffer[0],R,0):Ue(y.__webglFramebuffer,R,0);else if(q){y.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[_t]),y.__webglDepthbuffer[_t]===void 0)y.__webglDepthbuffer[_t]=i.createRenderbuffer(),kn(y.__webglDepthbuffer[_t],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,St)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),kn(y.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,St)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vn(R,y,q){let _t=n.get(R);y!==void 0&&me(_t.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wn(R)}function En(R){let y=R.texture,q=n.get(R),_t=n.get(y);R.addEventListener("dispose",G),B(R);let it=R.textures,St=R.isWebGLCubeRenderTarget===!0,dt=it.length>1;if(dt||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=y.version,o.memory.textures++),St){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let nt=0;nt<y.mipmaps.length;nt++)q.__webglFramebuffer[at][nt]=i.createFramebuffer()}else q.__webglFramebuffer[at]=i.createFramebuffer()}else{if(y.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)q.__webglFramebuffer[at]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(dt)for(let at=0,nt=it.length;at<nt;at++){let Et=n.get(it[at]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Tt(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<it.length;at++){let nt=it[at];q.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[at]);let Et=r.convert(nt.format,nt.colorSpace),U=r.convert(nt.type),ct=A(nt.internalFormat,Et,U,nt.normalized,nt.colorSpace,R.isXRRenderTarget===!0),st=Ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,q.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),kn(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),we(i.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps.length>0)for(let nt=0;nt<y.mipmaps.length;nt++)me(q.__webglFramebuffer[at][nt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,nt);else me(q.__webglFramebuffer[at],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);C(y)?E(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let at=0,nt=it.length;at<nt;at++){let Et=it[at],U=n.get(Et),ct=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,U.__webglTexture),we(ct,Et),me(q.__webglFramebuffer,R,Et,i.COLOR_ATTACHMENT0+at,ct,0),C(Et)&&E(ct)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,_t.__webglTexture),we(at,y),y.mipmaps.length>0)for(let nt=0;nt<y.mipmaps.length;nt++)me(q.__webglFramebuffer[nt],R,y,i.COLOR_ATTACHMENT0,at,nt);else me(q.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,at,0);C(y)?E(at):y.mipmaps.length>0&&i.texParameteri(at,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&wn(R)}function H(R){let y=R.textures;for(let q=0,_t=y.length;q<_t;q++){let it=y[q];if(C(it)&&it.mipmapsAutoUpdate===!0){let St=I(R),dt=n.get(it).__webglTexture;e.bindTexture(St,dt),E(St),e.unbindTexture()}}}let Tn=[];function Ae(R){if(R.samples>0){if(Tt(R)===!1){let y=R.textures,q=R.width,_t=R.height,it=i.COLOR_BUFFER_BIT,St=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(R),at=y.length>1;if(at)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Et]);let U=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,q,_t,0,0,q,_t,it,i.NEAREST),c===!0&&(Tn.length=0,Tn.push(i.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Tn.push(St),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Et]);let U=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,U,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ie(R){return Math.min(s.maxSamples,R.samples)}function Tt(R){let y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ne(R){let y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Wt(R,y){let q=R.colorSpace,_t=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==Lr&&q!==Fi&&(Se.getTransfer(q)===Te?(_t!==ni||it!==Rn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",q)),y}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=jt,this.resetTextureUnits=ht,this.getTextureUnits=mt,this.setTextureUnits=Ot,this.setTexture2D=Pt,this.setTexture2DArray=zt,this.setTexture3D=$t,this.setTextureCube=It,this.rebindTextures=vn,this.setupRenderTarget=En,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=wn,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Tt,this.dispose=J}function Sx(i,t){function e(n,s=Fi){let r,o=Se.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===ni)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===is)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Va||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa||n===Ya||n===qa||n===so||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===so)return r.COMPRESSED_RG11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dl||n===fl||n===ro||n===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ui({vertexShader:Mx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hh=class extends Jn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,f=null,g=null,v=null,b=typeof XRWebGLBinding<"u",_=new ch,m={},M=e.getContextAttributes(),C=null,E=null,I=[],A=[],x=new Jt,w=null,B=null,D=new Sn;D.viewport=new Ve;let k=new Sn;k.viewport=new Ve;let G=[D,k],Z=new Ra,N=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let Pt=I[ot];return Pt===void 0&&(Pt=new ir,I[ot]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(ot){let Pt=I[ot];return Pt===void 0&&(Pt=new ir,I[ot]=Pt),Pt.getGripSpace()},this.getHand=function(ot){let Pt=I[ot];return Pt===void 0&&(Pt=new ir,I[ot]=Pt),Pt.getHandSpace()};function Q(ot){let Pt=A.indexOf(ot.inputSource);if(Pt===-1)return;let zt=I[Pt];zt!==void 0&&(zt.update(ot.inputSource,ot.frame,l||o),zt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function j(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ft);for(let ot=0;ot<I.length;ot++){let Pt=A[ot];Pt!==null&&(A[ot]=null,I[ot].disconnect(Pt))}N=null,J=null,_.reset();for(let ot in m)delete m[ot];if(t.setRenderTarget(C),g=null,f=null,p=null,s=null,E=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(x.width,x.height,!1),B!==null){let ot=B.camera;ot.fov=B.fov,ot.zoom=B.zoom,ot.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ot){l=ot},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,$t=null,It=null;M.depth&&(It=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,zt=M.stencil?Ui:Ri,$t=M.stencil?Ts:Qn);let oe={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(oe),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Fn(f.textureWidth,f.textureHeight,{format:ni,type:Rn,depthTexture:new Li(f.textureWidth,f.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let zt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,zt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Fn(g.framebufferWidth,g.framebufferHeight,{format:ni,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ft(ot){for(let Pt=0;Pt<ot.removed.length;Pt++){let zt=ot.removed[Pt],$t=A.indexOf(zt);$t>=0&&(A[$t]=null,I[$t].disconnect(zt))}for(let Pt=0;Pt<ot.added.length;Pt++){let zt=ot.added[Pt],$t=A.indexOf(zt);if($t===-1){for(let oe=0;oe<I.length;oe++)if(oe>=A.length){A.push(zt),$t=oe;break}else if(A[oe]===null){A[oe]=zt,$t=oe;break}if($t===-1)break}let It=I[$t];It&&It.connect(zt)}}function tt(ot,Pt){Pt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(Pt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let Pt=ot.near,zt=ot.far;_.texture!==null&&(_.depthNear>0&&(Pt=_.depthNear),_.depthFar>0&&(zt=_.depthFar)),Z.near=k.near=D.near=Pt,Z.far=k.far=D.far=zt,(N!==Z.near||J!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),N=Z.near,J=Z.far),Z.layers.mask=ot.layers.mask|6,D.layers.mask=Z.layers.mask&-5,k.layers.mask=Z.layers.mask&-3;let $t=ot.parent,It=Z.cameras;tt(Z,$t);for(let oe=0;oe<It.length;oe++)tt(It[oe],$t);Z.projectionMatrix.copy(D.projectionMatrix),Z.projectionMatrixInverse.copy(D.projectionMatrixInverse),B===null&&ot.isPerspectiveCamera&&(B={camera:ot,fov:ot.fov,zoom:ot.zoom}),ht(ot,Z,$t)};function ht(ot,Pt,zt){zt===null?ot.matrix.copy(Pt.matrixWorld):(ot.matrix.copy(zt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(Pt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(Pt.projectionMatrix),ot.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=tr*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(ot){c=ot,f!==null&&(f.fixedFoveation=ot),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Z)},this.getCameraTexture=function(ot){return m[ot]};let mt=null;function Ot(ot,Pt){if(h=Pt.getViewerPose(l||o),v=Pt,h!==null){let zt=h.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let $t=!1;zt.length!==Z.cameras.length&&(Z.cameras.length=0,$t=!0);for(let Qt=0;Qt<zt.length;Qt++){let we=zt[Qt],Ee=null;if(g!==null)Ee=g.getViewport(we);else{let Qe=p.getViewSubImage(f,we);Ee=Qe.viewport,Qt===0&&(t.setRenderTargetTextures(E,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(E))}let pe=G[Qt];pe===void 0&&(pe=new Sn,pe.layers.enable(Qt),pe.viewport=new Ve,G[Qt]=pe),pe.matrix.fromArray(we.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(we.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Qt===0&&(Z.matrix.copy(pe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),$t===!0&&Z.cameras.push(pe)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let Qt=p.getDepthInformation(zt[0]);Qt&&Qt.isValid&&Qt.texture&&_.init(Qt,s.renderState)}if(It&&It.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let Qt=0;Qt<zt.length;Qt++){let we=zt[Qt].camera;if(we){let Ee=m[we];Ee||(Ee=new Vr,m[we]=Ee);let pe=p.getCameraImage(we);Ee.sourceTexture=pe}}}}for(let zt=0;zt<I.length;zt++){let $t=A[zt],It=I[zt];$t!==null&&It!==void 0&&It.update($t,Pt,l||o)}mt&&mt(ot,Pt),Pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Pt}),v=null}let jt=new _d;jt.setAnimationLoop(Ot),this.setAnimationLoop=function(ot){mt=ot},this.dispose=function(){}}},wx=new Pe,Ad=new re;Ad.set(-1,0,0,0,1,0,0,0,1);function Ex(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Kc(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,M,C,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),p(_,m)):m.isMeshPhongMaterial?(r(_,m),h(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&g(_,m,E)):m.isMeshMatcapMaterial?(r(_,m),v(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),b(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?c(_,m,M,C):m.isSpriteMaterial?l(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===bn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===bn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let M=t.get(m),C=M.envMap,E=M.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Ad),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,M,C){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*M,_.scale.value=C*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function p(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function g(_,m,M){_.ior.value=m.ior,m.diffuseRoughness>0&&(_.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,m){m.matcap&&(_.matcap.value=m.matcap)}function b(_,m){let M=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,t,e,n){let s={},r={};function o(M,C){let E=C.program;n.uniformBlockBinding(M,E,s[M.id])}function a(M,C){let E=s[M.id];E===void 0&&(v(M),E=c(M),s[M.id]=E,M.addEventListener("dispose",_));let I=C.program;n.updateUBOMapping(M,I);let A=t.render.frame;r[M.id]!==A&&(l(M),r[M.id]=A)}function c(M){let C=i.createBuffer(),E=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,E,I),i.bindBuffer(i.UNIFORM_BUFFER,null),C}function l(M){let C=s[M.id],E=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let A=0,x=E.length;A<x;A++){let w=E[A];if(Array.isArray(w))for(let B=0,D=w.length;B<D;B++)h(w[B],A,B,I);else h(w,A,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,C,E,I){if(f(M,C,E,I)===!0){let A=M.__offset,x=M.value;if(Array.isArray(x)){let w=0;for(let B=0;B<x.length;B++){let D=x[B],k=b(D,!0);p(D,M.__data,w),w+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function p(M,C,E){typeof M=="number"||typeof M=="boolean"?C[E]=M:M.isMatrix3?(C[E]=M.elements[0],C[E+1]=M.elements[1],C[E+2]=M.elements[2],C[E+3]=0,C[E+4]=M.elements[3],C[E+5]=M.elements[4],C[E+6]=M.elements[5],C[E+7]=0,C[E+8]=M.elements[6],C[E+9]=M.elements[7],C[E+10]=M.elements[8],C[E+11]=0):ArrayBuffer.isView(M)?C.set(M.subarray(0,C.length-E),E):M.toArray(C,E)}function f(M,C,E,I){let A=M.value,x=C+"_"+E;if(Array.isArray(A)){I[x]===void 0&&(I[x]=[]);let w=I[x],B=!1;for(let D=0;D<A.length;D++)g(A[D],w,D)===!0&&(B=!0);return B}return g(A,I,x)}function g(M,C,E){if(C[E]===void 0)return typeof M=="number"||typeof M=="boolean"?C[E]=M:ArrayBuffer.isView(M)?C[E]=M.slice():C[E]=M.clone(),!0;{let I=C[E];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return C[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function v(M){let C=M.uniforms,E=0,I=16;for(let x=0,w=C.length;x<w;x++){let B=Array.isArray(C[x])?C[x]:[C[x]];for(let D=0,k=B.length;D<k;D++){let G=B[D],Z=Array.isArray(G.value)?G.value:[G.value],N=Array.isArray(C[x])||Array.isArray(G.value),J=E;for(let j=0,ft=Z.length;j<ft;j++){let tt=Z[j],ht=b(tt,N),mt=E%I,Ot=mt%ht.boundary,jt=mt+Ot;E+=Ot,jt!==0&&I-jt<ht.storage&&(E+=I-jt),j===0&&(J=E),E+=ht.storage}let Q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Q((E-J)/Float32Array.BYTES_PER_ELEMENT),G.__offset=J}}let A=E%I;return A>0&&(E+=I-A),M.__size=E,M.__cache={},this}function b(M,C){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",M),C===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function _(M){let C=M.target;C.removeEventListener("dispose",_),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}var Ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function Cx(){return fi===null&&(fi=new ua(Ax,16,16,is,ei),fi.name="DFG_LUT",fi.minFilter=Mn,fi.magFilter=Mn,fi.wrapS=hi,fi.wrapT=hi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var vl=class{constructor(t={}){let{canvas:e=ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Rn}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;let b=g,_=new Set([Ba,Oa,Fa]),m=new Set([Rn,Qn,dr,Ts,Na,Ua]),M=new Uint32Array(4),C=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},I=null,A=null,x=[],w=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,k=!1,G=null,Z=null,N=null,J=null;this._outputColorSpace=yn;let Q=0,j=0,ft=null,tt=-1,ht=null,mt=new Ve,Ot=new Ve,jt=null,ot=new ae(0),Pt=0,zt=e.width,$t=e.height,It=1,oe=null,Xe=null,Qt=new Ve(0,0,zt,$t),we=new Ve(0,0,zt,$t),Ee=!1,pe=new Zi,Qe=new da,Ye=!1,dn=!1,me=new Pe,kn=new O,Ue=new Ve,wn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vn=!1;function En(){return ft===null?It:1}let H=n;function Tn(S,z){return e.getContext(S,z)}let Ae,Ie,Tt,Ne,Wt,te,R,y,q,_t,it,St,dt,at,nt,Et,U,ct,st,Mt,vt,bt,Xt;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),H===null){let z="webgl2";if(H=Tn(z,S),H===null)throw Tn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(S){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),ne("WebGLRenderer: "+S.message),S}function le(){Ae=new z0(H),Ae.init(),vt=new Sx(H,Ae),Ie=new C0(H,Ae,t,vt),Tt=new vx(H,Ae),Ie.reversedDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),N=H.createFramebuffer(),J=H.createFramebuffer(),Ne=new H0(H),Wt=new rx,te=new yx(H,Ae,Tt,Wt,Ie,vt,Ne),R=new B0(D),y=new Wp(H),bt=new T0(H,y),q=new k0(H,y,Ne,bt),_t=new W0(H,q,y,bt,Ne),ct=new G0(H,Ie,te),nt=new R0(Wt),it=new sx(D,R,Ae,Ie,bt,nt),St=new Ex(D,Wt),dt=new ax,at=new fx(Ae),U=new E0(D,R,Tt,_t,v,c),Et=new xx(D,_t,Ie),Xt=new Tx(H,Ne,Ie,Tt),st=new A0(H,Ae,Ne),Mt=new V0(H,Ae,Ne),Ne.programs=it.programs,D.capabilities=Ie,D.extensions=Ae,D.properties=Wt,D.renderLists=dt,D.shadowMap=Et,D.state=Tt,D.info=Ne}b!==Rn&&(B=new Y0(b,e.width,e.height,a,s,r));let gt=new hh(D,H);this.xr=gt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let S=Ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(S){S!==void 0&&(It=S,this.setSize(zt,$t,!1))},this.getSize=function(S){return S.set(zt,$t)},this.setSize=function(S,z,et=!0){if(gt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=S,$t=z,e.width=Math.floor(S*It),e.height=Math.floor(z*It),et===!0&&(e.style.width=S+"px",e.style.height=z+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(zt*It,$t*It).floor()},this.setDrawingBufferSize=function(S,z,et){zt=S,$t=z,It=et,e.width=Math.floor(S*et),e.height=Math.floor(z*et),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(b===Rn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(mt)},this.getViewport=function(S){return S.copy(Qt)},this.setViewport=function(S,z,et,$){S.isVector4?Qt.set(S.x,S.y,S.z,S.w):Qt.set(S,z,et,$),Tt.viewport(mt.copy(Qt).multiplyScalar(En()).round())},this.getScissor=function(S){return S.copy(we)},this.setScissor=function(S,z,et,$){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,z,et,$),Tt.scissor(Ot.copy(we).multiplyScalar(En()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(S){Tt.setScissorTest(Ee=S)},this.setOpaqueSort=function(S){oe=S},this.setTransparentSort=function(S){Xe=S},this.getClearColor=function(S){return S.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,et=!0){let $=0;if(S){let Y=!1;if(ft!==null){let At=ft.texture.format;Y=_.has(At)}if(Y){let At=ft.texture.type,Bt=m.has(At),wt=U.getClearColor(),Lt=U.getClearAlpha(),Ht=wt.r,ie=wt.g,ge=wt.b;Bt?(M[0]=Ht,M[1]=ie,M[2]=ge,M[3]=Lt,H.clearBufferuiv(H.COLOR,0,M)):(C[0]=Ht,C[1]=ie,C[2]=ge,C[3]=Lt,H.clearBufferiv(H.COLOR,0,C))}else $|=H.COLOR_BUFFER_BIT}z&&($|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),G=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),U.dispose(),dt.dispose(),at.dispose(),te.dispose(),Wt.dispose(),R.dispose(),_t.dispose(),q.dispose(),bt.dispose(),Xt.dispose(),it.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",vo),gt.removeEventListener("sessionend",yo),xi.stop()};function Yt(S){S.preventDefault(),qc("WebGLRenderer: Context Lost."),k=!0}function ce(){qc("WebGLRenderer: Context Restored."),k=!1;let S=Ne.autoReset,z=Et.enabled,et=Et.autoUpdate,$=Et.needsUpdate,Y=Et.type;le(),Ne.autoReset=S,Et.enabled=z,Et.autoUpdate=et,Et.needsUpdate=$,Et.type=Y}function Rt(S){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Me(S){let z=S.target;z.removeEventListener("dispose",Me),We(z)}function We(S){In(S),Wt.remove(S)}function In(S){let z=Wt.get(S).programs;z!==void 0&&(z.forEach(function(et){it.releaseProgram(et)}),S.isShaderMaterial&&it.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,et,$,Y,At){z===null&&(z=wn);let Bt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,wt=Fs(S,z,et,$,Y);Tt.setMaterial($,Bt);let Lt=et.index,Ht=1;if($.wireframe===!0){if(Lt=q.getWireframeAttribute(et),Lt===void 0)return;Ht=2}let ie=et.drawRange,ge=et.attributes.position,kt=ie.start*Ht,de=(ie.start+ie.count)*Ht;At!==null&&(kt=Math.max(kt,At.start*Ht),de=Math.min(de,(At.start+At.count)*Ht)),Lt!==null?(kt=Math.max(kt,0),de=Math.min(de,Lt.count)):ge!=null&&(kt=Math.max(kt,0),de=Math.min(de,ge.count));let qe=de-kt;if(qe<0||qe===1/0)return;bt.setup(Y,$,wt,et,Lt);let Ce,Re=st;if(Lt!==null&&(Ce=y.get(Lt),Re=Mt,Re.setIndex(Ce)),Y.isMesh)$.wireframe===!0?(Tt.setLineWidth($.wireframeLinewidth*En()),Re.setMode(H.LINES)):Re.setMode(H.TRIANGLES);else if(Y.isLine){let tn=$.linewidth;tn===void 0&&(tn=1),Tt.setLineWidth(tn*En()),Y.isLineSegments?Re.setMode(H.LINES):Y.isLineLoop?Re.setMode(H.LINE_LOOP):Re.setMode(H.LINE_STRIP)}else Y.isPoints?Re.setMode(H.POINTS):Y.isSprite&&Re.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Re.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let tn=Y._multiDrawStarts,Ft=Y._multiDrawCounts,en=Y._multiDrawCount,Kt=Lt?y.get(Lt).bytesPerElement:1,oi=Wt.get($).currentProgram.getUniforms();for(let ln=0;ln<en;ln++)oi.setValue(H,"_gl_DrawID",ln),Re.render(tn[ln]/Kt,Ft[ln])}else if(Y.isInstancedMesh)Re.renderInstances(kt,qe,Y.count);else if(et.isInstancedBufferGeometry){let tn=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ft=Math.min(et.instanceCount,tn);Re.renderInstances(kt,qe,Ft)}else Re.render(kt,qe)};function yr(S,z,et,$){G!==null&&S.isNodeMaterial&&G.setObject($,S),Ye===!0&&nt.setState(S,et,!1),S.transparent===!0&&S.side===Cn&&S.forceSinglePass===!1?(S.side=bn,S.needsUpdate=!0,zi(S,z,$),S.side=ns,S.needsUpdate=!0,zi(S,z,$),S.side=Cn):zi(S,z,$)}this.compile=function(S,z,et=null){et===null&&(et=S),G!==null&&G.renderStart(S,z,et),A=at.get(et),A.init(z),w.push(A),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),S!==et&&S.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),G!==null&&G.updateLights(A.state.lightsArray),dn=this.localClippingEnabled,Ye=nt.init(this.clippingPlanes,dn),Ye===!0&&nt.setGlobalState(this.clippingPlanes,z),G!==null&&Et.render(A.state.shadowsArray,et,z);let $=new Set;return S.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let At=Y.material;if(At)if(Array.isArray(At))for(let Bt=0;Bt<At.length;Bt++){let wt=At[Bt];yr(wt,et,z,Y),$.add(wt)}else yr(At,et,z,Y),$.add(At)}),A=w.pop(),G!==null&&G.renderEnd(),$},this.compileAsync=function(S,z,et=null){let $=this.compile(S,z,et);return new Promise(Y=>{function At(){if($.forEach(function(Bt){let Lt=Wt.get(Bt).currentProgram;(Lt===void 0||Lt.isReady())&&$.delete(Bt)}),$.size===0){Y(S);return}setTimeout(At,10)}Ae.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ls=null;function as(S){Ls&&Ls(S)}function vo(){xi.stop()}function yo(){xi.start()}let xi=new _d;xi.setAnimationLoop(as),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(S){Ls=S,gt.setAnimationLoop(S),S===null?xi.stop():xi.start()},gt.addEventListener("sessionstart",vo),gt.addEventListener("sessionend",yo),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;G!==null&&G.renderStart(S,z);let et=gt.enabled===!0&&gt.isPresenting===!0,$=B!==null&&(ft===null||et)&&B.begin(D,ft);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(z),z=gt.getCamera()),S.isScene===!0&&S.onBeforeRender(D,S,z,ft),A=at.get(S,w.length),A.init(z),A.state.textureUnits=te.getTextureUnits(),w.push(A),me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Qe.setFromArrayCamera(z):pe.setFromProjectionMatrix(me,Hn,z.reversedDepth),dn=this.localClippingEnabled,Ye=nt.init(this.clippingPlanes,dn),I=dt.get(S,x.length),I.init(),x.push(I),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let Bt=D.xr.getDepthSensingMesh();Bt!==null&&Sr(Bt,z,-1/0,D.sortObjects)}Sr(S,z,0,D.sortObjects),I.finish(),G!==null&&G.updateLights(A.state.lightsArray),D.sortObjects===!0&&I.sort(oe,Xe),vn=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,vn&&U.addToRenderList(I,S),this.info.autoReset===!0&&this.info.reset(),Ye===!0&&nt.beginShadows();let Y=A.state.shadowsArray;if(Et.render(Y,S,z),Ye===!0&&nt.endShadows(),($&&B.hasRenderPass())===!1){let Bt=I.opaque,wt=I.transmissive;if(A.setupLights(),z.isArrayCamera){let Lt=z.cameras;if(wt.length>0)for(let Ht=0,ie=Lt.length;Ht<ie;Ht++){let ge=Lt[Ht];Ns(Bt,wt,S,ge)}vn&&U.render(S);for(let Ht=0,ie=Lt.length;Ht<ie;Ht++){let ge=Lt[Ht];Ds(I,S,ge,ge.viewport)}}else wt.length>0&&Ns(Bt,wt,S,z),vn&&U.render(S),Ds(I,S,z)}ft!==null&&j===0&&(te.updateMultisampleRenderTarget(ft),te.updateRenderTargetMipmap(ft)),$&&B.end(D),S.isScene===!0&&S.onAfterRender(D,S,z),bt.resetDefaultState(),tt=-1,ht=null,w.pop(),w.length>0?(A=w[w.length-1],te.setTextureUnits(A.state.textureUnits),Ye===!0&&nt.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?I=x[x.length-1]:I=null,G!==null&&G.renderEnd()};function Sr(S,z,et,$){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)et=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let Bt=z.isArrayCamera?Qe:pe;if(!S.frustumCulled||S.intersectsFrustum(Bt)){$&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let wt=_t.update(S),Lt=S.material;Lt.visible&&I.push(S,wt,Lt,et,Ue.z,null,z)}}else if(S.isMesh||S.isLine||S.isPoints){let Bt=z.isArrayCamera?Qe:pe;if(!S.frustumCulled||S.intersectsFrustum(Bt)){let wt=_t.update(S),Lt=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ue.copy(wt.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Lt)){let Ht=wt.groups;for(let ie=0,ge=Ht.length;ie<ge;ie++){let kt=Ht[ie],de=Lt[kt.materialIndex];de&&de.visible&&I.push(S,wt,de,et,Ue.z,kt,z)}}else Lt.visible&&I.push(S,wt,Lt,et,Ue.z,null,z)}}}let At=S.children;for(let Bt=0,wt=At.length;Bt<wt;Bt++)Sr(At[Bt],z,et,$)}function Ds(S,z,et,$){let{opaque:Y,transmissive:At,transparent:Bt}=S;A.setupLightsView(et),Ye===!0&&nt.setGlobalState(D.clippingPlanes,et),$&&Tt.viewport(mt.copy($)),Y.length>0&&Us(Y,z,et),At.length>0&&Us(At,z,et),Bt.length>0&&Us(Bt,z,et),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Ns(S,z,et,$){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){let kt=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new Fn(1,1,{generateMipmaps:!0,type:kt?ei:Rn,minFilter:Ni,samples:Math.max(4,Ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let At=A.state.transmissionRenderTarget[$.id],Bt=$.viewport||mt;At.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);let wt=D.getRenderTarget(),Lt=D.getActiveCubeFace(),Ht=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(ot),Pt=D.getClearAlpha(),Pt<1&&D.setClearColor(16777215,.5),D.clear(),vn&&U.render(et);let ie=D.toneMapping;D.toneMapping=di;let ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),Ye===!0&&nt.setGlobalState(D.clippingPlanes,$),Us(S,et,$),te.updateMultisampleRenderTarget(At),te.updateRenderTargetMipmap(At),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let de=0,qe=z.length;de<qe;de++){let Ce=z[de],{object:Re,geometry:tn,material:Ft,group:en}=Ce;if(Ft.side===Cn&&Re.layers.test($.layers)){let Kt=Ft.side;Ft.side=bn,Ft.needsUpdate=!0,So(Re,et,$,tn,Ft,en),Ft.side=Kt,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(te.updateMultisampleRenderTarget(At),te.updateRenderTargetMipmap(At))}D.setRenderTarget(wt,Lt,Ht),D.setClearColor(ot,Pt),ge!==void 0&&($.viewport=ge),D.toneMapping=ie}function Us(S,z,et){let $=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,At=S.length;Y<At;Y++){let Bt=S[Y],{object:wt,geometry:Lt,group:Ht}=Bt,ie=Bt.material;ie.allowOverride===!0&&$!==null&&(ie=$),wt.layers.test(et.layers)&&So(wt,z,et,Lt,ie,Ht)}}function So(S,z,et,$,Y,At){G!==null&&Y.isNodeMaterial&&G.setObject(S,Y),S.onBeforeRender(D,z,et,$,Y,At),S.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(D,z,et,$,S,At),Y.transparent===!0&&Y.side===Cn&&Y.forceSinglePass===!1?(Y.side=bn,Y.needsUpdate=!0,D.renderBufferDirect(et,z,$,Y,S,At),Y.side=ns,Y.needsUpdate=!0,D.renderBufferDirect(et,z,$,Y,S,At),Y.side=Cn):D.renderBufferDirect(et,z,$,Y,S,At),S.onAfterRender(D,z,et,$,Y,At)}function Mo(S){let z=0;for(let et of S)et.texture!==null&&z++;return z}function zi(S,z,et){z.isScene!==!0&&(z=wn);let $=Wt.get(S),Y=A.state.lights,At=A.state.shadowsArray,Bt=Y.state.version,wt=it.getParameters(S,Y.state,At,z,et,A.state.lightProbeGridArray),Lt=it.getProgramCacheKey(wt),Ht=$.programs;$.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;let ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;$.envMap=R.get(S.envMap||$.environment,ie),$.envMapRotation=$.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",Me),Ht=new Map,$.programs=Ht,$.programVariants=new Map);let ge=Ht.get(Lt);if(ge!==void 0){if($.currentProgram===ge&&$.lightsStateVersion===Bt)return wo(S,wt),ge}else wt.uniforms=it.getUniforms(S),G!==null&&S.isNodeMaterial&&G.build(S,et,wt),S.onBeforeCompile(wt,D),ge=it.acquireProgram(wt,Lt),Ht.set(Lt,ge),$.uniforms=wt.uniforms;let kt=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(kt.clippingPlanes=nt.uniform),wo(S,wt),$.needsLights=Bl(S),$.lightsStateVersion=Bt,$.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.sunLights.value=Y.state.sun,kt.sunLightShadows.value=Y.state.sunShadow,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.sunShadowMatrix.value=Y.state.sunShadowMatrix,kt.sunShadowCascade.value=Y.state.sunShadowCascade,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.numLightProbeGrids=Mo(A.state.lightProbeGridArray),$.currentProgram=ge,$.uniformsList=null,ge}function Fl(S,z,et,$,Y){let At=Wt.get(S),Bt=At.currentProgram.id+","+$+","+Y,wt=At.programVariants.get(Bt);return wt===void 0?(wt=zi(S,z,et),At.programVariants.set(Bt,wt)):(At.currentProgram=wt,At.uniformsList=null,At.outputColorSpace=$,At.toneMapping=Y),wt}function bo(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=pr.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function wo(S,z){let et=Wt.get(S);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function Fs(S,z,et,$,Y){z.isScene!==!0&&(z=wn),te.resetTextureUnits();let At=z.fog,Bt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,wt=ft===null?D.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Se.workingColorSpace,Lt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ht=R.get($.envMap||Bt,Lt),ie=$.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ge=!!et.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),kt=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,qe=!!et.morphAttributes.color,Ce=di;$.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ce=D.toneMapping);let Re=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,tn=Re!==void 0?Re.length:0,Ft=Wt.get($),en=A.state.lights;if(Ye===!0&&(dn===!0||S!==ht)){let Fe=S===ht&&$.id===tt;nt.setState($,S,Fe)}let Kt=!1,oi=!1;$.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==en.state.version||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==Ht||$.fog===!0&&Ft.fog!==At||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==nt.numPlanes||Ft.numIntersection!==nt.numIntersection)||Ft.vertexAlphas!==ie||Ft.vertexTangents!==ge||Ft.morphTargets!==kt||Ft.morphNormals!==de||Ft.morphColors!==qe||Ft.morphTargetsCount!==tn||Ft.numLightProbeGrids!==Mo(A.state.lightProbeGridArray)?Kt=!0:(Ft.outputColorSpace!==wt||Ft.toneMapping!==Ce)&&(oi=!0):(Kt=!0,Ft.__version=$.version);let ln=Ft.currentProgram;(Kt===!0||oi===!0)&&(ln=oi===!0?Fl($,z,Y,wt,Ce):zi($,z,Y),G&&$.isNodeMaterial&&G.onUpdateProgram($,ln,Ft));let ki=!1,ai=!1,vi=!1,ve=ln.getUniforms(),nn=Ft.uniforms;if(Tt.useProgram(ln.program)&&(ki=!0,ai=!0,vi=!0),$.id!==tt&&(tt=$.id,ai=!0),ki||ht!==S){Tt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ve.setValue(H,"projectionMatrix",S.projectionMatrix),ve.setValue(H,"viewMatrix",S.matrixWorldInverse);let Ke=ve.map.cameraPosition;Ke!==void 0&&Ke.setValue(H,kn.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ve.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),ht!==S&&(ht=S,ai=!0,vi=!0)}if(Ft.needsLights&&(en.state.sunShadowMap.length>0&&ve.setValue(H,"sunShadowMap",en.state.sunShadowMap,te),en.state.directionalShadowMap.length>0&&ve.setValue(H,"directionalShadowMap",en.state.directionalShadowMap,te),en.state.spotShadowMap.length>0&&ve.setValue(H,"spotShadowMap",en.state.spotShadowMap,te),en.state.pointShadowMap.length>0&&ve.setValue(H,"pointShadowMap",en.state.pointShadowMap,te)),Y.isSkinnedMesh){ve.setOptional(H,Y,"bindMatrix"),ve.setOptional(H,Y,"bindMatrixInverse");let Fe=Y.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ve.setValue(H,"boneTexture",Fe.boneTexture,te))}Y.isBatchedMesh&&(ve.setOptional(H,Y,"batchingTexture"),ve.setValue(H,"batchingTexture",Y._matricesTexture,te),ve.setOptional(H,Y,"batchingIdTexture"),ve.setValue(H,"batchingIdTexture",Y._indirectTexture,te),ve.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ve.setValue(H,"batchingColorTexture",Y._colorsTexture,te));let Ln=et.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ct.update(Y,et,ln),(ai||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,ve.setValue(H,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Cx()),ai){if(ve.setValue(H,"toneMappingExposure",D.toneMappingExposure),Ft.needsLights&&Ol(nn,vi),At&&$.fog===!0&&St.refreshFogUniforms(nn,At),St.refreshMaterialUniforms(nn,$,It,$t,A.state.transmissionRenderTarget[S.id]),Ft.needsLights&&Ft.numLightProbeGrids>0){let Fe=E,Ke=0;for(let Yn of A.state.lightProbeGridArray)Yn.texture!==null&&(Fe.textures[Ke]=Yn.texture,Fe.min[Ke]=Yn.boundingBox.min,Fe.max[Ke]=Yn.boundingBox.max,Fe.resolution[Ke]=Yn.resolution,Ke++);for(let Yn in Fe)Fe[Yn].length=Ke;nn.probesSH.value=Fe.textures,nn.probesMin.value=Fe.min,nn.probesMax.value=Fe.max,nn.probesResolution.value=Fe.resolution}pr.upload(H,bo(Ft),nn,te)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pr.upload(H,bo(Ft),nn,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ve.setValue(H,"center",Y.center),ve.setValue(H,"modelViewMatrix",Y.modelViewMatrix),ve.setValue(H,"normalMatrix",Y.normalMatrix),ve.setValue(H,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){let Fe=$.uniformsGroups;for(let Ke=0,Yn=Fe.length;Ke<Yn;Ke++){let Eo=Fe[Ke];Xt.update(Eo,ln),Xt.bind(Eo,ln)}}return ln}function Ol(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.sunLights.needsUpdate=z,S.sunLightShadows.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Bl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(S,z,et){let $=Wt.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Wt.get(S.texture).__webglTexture=z,Wt.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:et,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){let et=Wt.get(S);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,et=0){ft=S,Q=z,j=et;let $=null,Y=!1,At=!1;if(S){let wt=Wt.get(S);if(wt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(H.FRAMEBUFFER,wt.__webglFramebuffer),mt.copy(S.viewport),Ot.copy(S.scissor),jt=S.scissorTest,Tt.viewport(mt),Tt.scissor(Ot),Tt.setScissorTest(jt),tt=-1;return}else if(wt.__webglFramebuffer===void 0)te.setupRenderTarget(S);else if(wt.__hasExternalTextures)te.rebindTextures(S,Wt.get(S.texture).__webglTexture,Wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ie=S.depthTexture;if(wt.__boundDepthTexture!==ie){if(ie!==null&&Wt.has(ie)&&(S.width!==ie.image.width||S.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(S)}}let Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(At=!0);let Ht=Wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?$=Ht[z][et]:$=Ht[z],Y=!0):S.samples>0&&te.useMultisampledRTT(S)===!1?$=Wt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ht)?$=Ht[et]:$=Ht,mt.copy(S.viewport),Ot.copy(S.scissor),jt=S.scissorTest}else mt.copy(Qt).multiplyScalar(It).floor(),Ot.copy(we).multiplyScalar(It).floor(),jt=Ee;if(et!==0&&($=Z),Tt.bindFramebuffer(H.FRAMEBUFFER,$)&&Tt.drawBuffers(S,$),Tt.viewport(mt),Tt.scissor(Ot),Tt.setScissorTest(jt),Y){let wt=Wt.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,wt.__webglTexture,et)}else if(At){let wt=z;for(let Lt=0;Lt<S.textures.length;Lt++){let Ht=Wt.get(S.textures[Lt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Lt,Ht.__webglTexture,et,wt)}}else if(S!==null&&et!==0){let wt=Wt.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wt.__webglTexture,et)}tt=-1};function ls(S){let z=Wt.get(S);return(z.__readFormat!==S.format||z.__readType!==S.type)&&(z.__readFormat=S.format,z.__readType=S.type,z.__formatReadable=Ie.textureFormatReadable(S.format),z.__typeReadable=Ie.textureTypeReadable(S.type)),z}this.readRenderTargetPixels=function(S,z,et,$,Y,At,Bt,wt=0){if(!(S&&S.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(Lt=Lt[Bt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){Tt.bindFramebuffer(H.FRAMEBUFFER,Lt);try{let Ht=S.textures[wt],ie=Ht.format,ge=Ht.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+wt);let kt=ls(Ht);if(kt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-$&&et>=0&&et<=S.height-Y&&H.readPixels(z,et,$,Y,vt.convert(ie),vt.convert(ge),At)}finally{let Ht=ft!==null?Wt.get(ft).__webglFramebuffer:null;Tt.bindFramebuffer(H.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(S,z,et,$,Y,At,Bt,wt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(Lt=Lt[Bt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(z>=0&&z<=S.width-$&&et>=0&&et<=S.height-Y){Tt.bindFramebuffer(H.FRAMEBUFFER,Lt);let Ht=S.textures[wt],ie=Ht.format,ge=Ht.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+wt);let kt=ls(Ht);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,de),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),H.readPixels(z,et,$,Y,vt.convert(ie),vt.convert(ge),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let qe=ft!==null?Wt.get(ft).__webglFramebuffer:null;Tt.bindFramebuffer(H.FRAMEBUFFER,qe);let Ce=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Hu(H,Ce,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,de),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(de),H.deleteSync(Ce),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,et=0){let $=Math.pow(2,-et),Y=Math.floor(S.image.width*$),At=Math.floor(S.image.height*$),Bt=z!==null?z.x:0,wt=z!==null?z.y:0;te.setTexture2D(S,0),H.copyTexSubImage2D(H.TEXTURE_2D,et,0,0,Bt,wt,Y,At),Tt.unbindTexture()},this.copyTextureToTexture=function(S,z,et=null,$=null,Y=0,At=0){let Bt,wt,Lt,Ht,ie,ge,kt,de,qe,Ce=S.isCompressedTexture?S.mipmaps[At]:S.image;if(et!==null)Bt=et.max.x-et.min.x,wt=et.max.y-et.min.y,Lt=et.isBox3?et.max.z-et.min.z:1,Ht=et.min.x,ie=et.min.y,ge=et.isBox3?et.min.z:0;else{let ve=Math.pow(2,-Y);Bt=Math.floor(Ce.width*ve),wt=Math.floor(Ce.height*ve),S.isDataArrayTexture?Lt=Ce.depth:S.isData3DTexture?Lt=Math.floor(Ce.depth*ve):Lt=1,Ht=0,ie=0,ge=0}$!==null?(kt=$.x,de=$.y,qe=$.z):(kt=0,de=0,qe=0);let Re=vt.convert(z.format),tn=vt.convert(z.type),Ft;z.isData3DTexture?(te.setTexture3D(z,0),Ft=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),Ft=H.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),Ft=H.TEXTURE_2D),Tt.activeTexture(H.TEXTURE0),Tt.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),Tt.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Tt.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let en=Tt.getParameter(H.UNPACK_ROW_LENGTH),Kt=Tt.getParameter(H.UNPACK_IMAGE_HEIGHT),oi=Tt.getParameter(H.UNPACK_SKIP_PIXELS),ln=Tt.getParameter(H.UNPACK_SKIP_ROWS),ki=Tt.getParameter(H.UNPACK_SKIP_IMAGES);Tt.pixelStorei(H.UNPACK_ROW_LENGTH,Ce.width),Tt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ce.height),Tt.pixelStorei(H.UNPACK_SKIP_PIXELS,Ht),Tt.pixelStorei(H.UNPACK_SKIP_ROWS,ie),Tt.pixelStorei(H.UNPACK_SKIP_IMAGES,ge);let ai=S.isDataArrayTexture||S.isData3DTexture,vi=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){let ve=Wt.get(S),nn=Wt.get(z),Ln=Wt.get(ve.__renderTarget),Fe=Wt.get(nn.__renderTarget);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ke=0;Ke<Lt;Ke++)ai&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(S).__webglTexture,Y,ge+Ke),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(z).__webglTexture,At,qe+Ke)),H.blitFramebuffer(Ht,ie,Ht+Bt,ie+wt,kt,de,kt+Bt,de+wt,H.DEPTH_BUFFER_BIT,H.NEAREST);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||S.isRenderTargetTexture||Wt.has(S)){let ve=Wt.get(S),nn=Wt.get(z);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,N),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,J);for(let Ln=0;Ln<Lt;Ln++)ai?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ve.__webglTexture,Y,ge+Ln):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ve.__webglTexture,Y),vi?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nn.__webglTexture,At,qe+Ln):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nn.__webglTexture,At),Y!==0?H.blitFramebuffer(Ht,ie,Ht+Bt,ie+wt,kt,de,kt+Bt,de+wt,H.COLOR_BUFFER_BIT,H.NEAREST):vi?H.copyTexSubImage3D(Ft,At,kt,de,qe+Ln,Ht,ie,Bt,wt):H.copyTexSubImage2D(Ft,At,kt,de,Ht,ie,Bt,wt);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else vi?S.isDataTexture||S.isData3DTexture?H.texSubImage3D(Ft,At,kt,de,qe,Bt,wt,Lt,Re,tn,Ce.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(Ft,At,kt,de,qe,Bt,wt,Lt,Re,Ce.data):H.texSubImage3D(Ft,At,kt,de,qe,Bt,wt,Lt,Re,tn,Ce):S.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,kt,de,Bt,wt,Re,tn,Ce.data):S.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,kt,de,Ce.width,Ce.height,Re,Ce.data):H.texSubImage2D(H.TEXTURE_2D,At,kt,de,Bt,wt,Re,tn,Ce);Tt.pixelStorei(H.UNPACK_ROW_LENGTH,en),Tt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Kt),Tt.pixelStorei(H.UNPACK_SKIP_PIXELS,oi),Tt.pixelStorei(H.UNPACK_SKIP_ROWS,ln),Tt.pixelStorei(H.UNPACK_SKIP_IMAGES,ki),At===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&H.generateMipmap(Ft),Tt.unbindTexture()},this.initRenderTarget=function(S){Wt.get(S).__webglFramebuffer===void 0&&te.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?te.setTextureCube(S,0):S.isData3DTexture?te.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?te.setTexture2DArray(S,0):te.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){Q=0,j=0,ft=null,Tt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var Ml=class extends ys{constructor(t){super(t)}load(t,e,n,s){let r=this,o=new Wr(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){function e(l){let h=new DataView(l),p=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*p===h.byteLength)return!0;let v=[115,111,108,105,100];for(let b=0;b<5;b++)if(n(v,h,b))return!1;return!0}function n(l,h,p){for(let f=0,g=l.length;f<g;f++)if(l[f]!==h.getUint8(p+f))return!1;return!0}function s(l){let h=new DataView(l),p=h.getUint32(80,!0),f,g,v,b=!1,_,m,M,C,E;for(let k=0;k<=70;k++)h.getUint32(k,!1)==1129270351&&h.getUint8(k+4)==82&&h.getUint8(k+5)==61&&(b=!0,_=new Float32Array(p*3*3),m=h.getUint8(k+6)/255,M=h.getUint8(k+7)/255,C=h.getUint8(k+8)/255,E=h.getUint8(k+9)/255);let I=84,A=50,x=new He,w=new Float32Array(p*3*3),B=new Float32Array(p*3*3),D=new ae;for(let k=0;k<p;k++){let G=I+k*A,Z=h.getFloat32(G,!0),N=h.getFloat32(G+4,!0),J=h.getFloat32(G+8,!0);if(b){let Q=h.getUint16(G+48,!0);(Q&32768)===0?(f=(Q&31)/31,g=(Q>>5&31)/31,v=(Q>>10&31)/31):(f=m,g=M,v=C)}for(let Q=1;Q<=3;Q++){let j=G+Q*12,ft=k*3*3+(Q-1)*3;w[ft]=h.getFloat32(j,!0),w[ft+1]=h.getFloat32(j+4,!0),w[ft+2]=h.getFloat32(j+8,!0),B[ft]=Z,B[ft+1]=N,B[ft+2]=J,b&&(D.setRGB(f,g,v,yn),_[ft]=D.r,_[ft+1]=D.g,_[ft+2]=D.b)}}return x.setAttribute("position",new mn(w,3)),x.setAttribute("normal",new mn(B,3)),b&&(x.setAttribute("color",new mn(_,3)),x.hasColors=!0,x.alpha=E),x}function r(l){let h=new He,p=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,g=/solid\s(.+)/,v=0,b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,_=new RegExp("vertex"+b+b+b,"g"),m=new RegExp("normal"+b+b+b,"g"),M=[],C=[],E=[],I=new O,A,x=0,w=0,B=0;for(;(A=p.exec(l))!==null;){w=B;let D=A[0],k=(A=g.exec(D))!==null?A[1]:"";for(E.push(k);(A=f.exec(D))!==null;){let N=0,J=0,Q=A[0];for(;(A=m.exec(Q))!==null;)I.x=parseFloat(A[1]),I.y=parseFloat(A[2]),I.z=parseFloat(A[3]),J++;for(;(A=_.exec(Q))!==null;)M.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),C.push(I.x,I.y,I.z),N++,B++;J!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+v),N!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+v),v++}let G=w,Z=B-w;h.userData.groupNames=E,h.addGroup(G,Z,x),x++}return h.setAttribute("position",new xe(M,3)),h.setAttribute("normal",new xe(C,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let h=new Uint8Array(l.length);for(let p=0;p<l.length;p++)h[p]=l.charCodeAt(p)&255;return h.buffer||h}else return l}let c=a(t);return e(c)?s(c):r(o(t))}};var gr=["#79a998","#c7a46c","#779bb9","#b196b3","#d08e78","#8a9b9c"];function mi(i,t={}){return{id:crypto.randomUUID(),name:i[0].toUpperCase()+i.slice(1),kind:i,size:[20,20,20],position:[0,0,0],rotation:[0,0,0],hole:!1,color:gr[0],...t}}function wl(){return{version:1,name:"Capped sleeve",pieces:[mi("cylinder",{name:"Outer cylinder",size:[10,10,22]}),mi("cylinder",{name:"Inner cavity \xB7 \xD87",size:[7,7,18],hole:!0}),mi("cylinder",{name:"Top opening \xB7 \xD84",size:[4,4,22],hole:!0})]}}var uh=(i,t=1e5)=>typeof i=="number"&&Number.isFinite(i)&&Math.abs(i)<=t;function Oi(i){if(!i||i.version!==1||typeof i.name!="string"||!Array.isArray(i.pieces)||i.pieces.length>100)throw Error("This is not a supported Little CAD project (maximum 100 pieces).");let t=new Set;for(let e of i.pieces){if(!e||typeof e.id!="string"||t.has(e.id)||typeof e.name!="string"||!["box","cylinder","sphere","cone","profile","mesh"].includes(e.kind))throw Error("Invalid piece in project.");t.add(e.id);for(let n of["size","position","rotation"])if(!Array.isArray(e[n])||e[n].length!==3||!e[n].every(s=>uh(s)))throw Error("Invalid dimensions or position.");if(e.size.some(n=>n<.01||n>1e4))throw Error("Piece dimensions must be between 0.01 and 10,000 mm.");if(typeof e.hole!="boolean"||!/^#[0-9a-f]{6}$/i.test(e.color))throw Error("Invalid piece appearance.");if(e.kind==="profile"&&El(e.points),e.kind==="mesh"){let n=e.mesh;if(!n||!Array.isArray(n.positions)||!Array.isArray(n.indices)||n.positions.length%3||n.indices.length%3||n.indices.length<12||n.indices.length>75e4||!n.positions.every(s=>uh(s))||!n.indices.every(s=>Number.isInteger(s)&&s>=0&&s<n.positions.length/3))throw Error("Invalid or oversized imported mesh.")}}return i}function El(i){if(!Array.isArray(i)||i.length<3||i.length>512||i.some(s=>!Array.isArray(s)||s.length!==2||!s.every(r=>uh(r))))throw Error("Draw at least three corners for the profile.");let t=0,e=(s,r,o)=>(r[0]-s[0])*(o[1]-s[1])-(r[1]-s[1])*(o[0]-s[0]),n=(s,r,o)=>Math.abs(e(s,r,o))<1e-8&&o[0]>=Math.min(s[0],r[0])-1e-8&&o[0]<=Math.max(s[0],r[0])+1e-8&&o[1]>=Math.min(s[1],r[1])-1e-8&&o[1]<=Math.max(s[1],r[1])+1e-8;for(let s=0;s<i.length;s++){let r=i[s],o=i[(s+1)%i.length];if(Math.hypot(r[0]-o[0],r[1]-o[1])<1e-6)throw Error("Remove duplicate profile corners.");t+=r[0]*o[1]-o[0]*r[1];for(let a=s+1;a<i.length;a++){if(a===s+1||s===0&&a===i.length-1)continue;let c=i[a],l=i[(a+1)%i.length];if(e(r,o,c)*e(r,o,l)<0&&e(c,l,r)*e(c,l,o)<0||n(r,o,c)||n(r,o,l)||n(c,l,r)||n(c,l,o))throw Error("Profile edges cannot cross or touch.")}}if(Math.abs(t)<1e-6)throw Error("The profile needs an area, not a straight line.");return t>0?i:[...i].reverse()}var bl=class{constructor(t){this.M=t.Manifold,this.Mesh=t.Mesh}build(t){let e=[],n=s=>(e.push(s),s);try{let s;if(t.kind==="box"&&(s=n(this.M.cube([1,1,1],!0))),(t.kind==="cylinder"||t.kind==="cone")&&(s=n(this.M.cylinder(1,.5,t.kind==="cone"?0:.5,128,!0))),t.kind==="sphere"&&(s=n(this.M.sphere(.5,64))),t.kind==="profile"&&(s=n(this.M.extrude([El(t.points)],1))),t.kind==="mesh"){let a=new this.Mesh({numProp:3,vertProperties:new Float32Array(t.mesh.positions),triVerts:new Uint32Array(t.mesh.indices)});a.merge(),s=n(new this.M(a))}if(!s||s.status()!=="NoError"||s.isEmpty())throw Error(`${t.name}: the mesh must be a closed solid without broken faces.`);let r=s.boundingBox(),o=r.max.map((a,c)=>a-r.min[c]);if(o.some(a=>a<1e-8))throw Error("The shape has no thickness.");if(s=n(s.translate(r.min.map((a,c)=>-(a+r.max[c])/2))),s=n(s.scale(t.size.map((a,c)=>a/o[c]))),s=n(s.rotate(t.rotation)),r=s.boundingBox(),s=n(s.translate([t.position[0]-(r.min[0]+r.max[0])/2,t.position[1]-(r.min[1]+r.max[1])/2,t.position[2]-r.min[2]])),s.status()!=="NoError")throw Error(`Cannot build ${t.name}.`);return e.pop(),s}finally{for(let s of e)s.delete()}}result(t){let e=[],n=s=>(e.push(s),s);try{let s=t.filter(a=>!a.hole).map(a=>n(this.build(a)));if(!s.length)throw Error("Add at least one solid piece first.");let r=n(this.M.union(s)),o=t.filter(a=>a.hole).map(a=>n(this.build(a)));if(o.length&&(r=n(r.subtract(n(this.M.union(o))))),r.status()!=="NoError"||r.isEmpty()||r.volume()<=0)throw Error("The holes removed the entire model. Move or resize a hole.");return e.pop(),r}finally{for(let s of e)s.delete()}}importSTL(t,e){if(t.byteLength>25*1024*1024)throw Error("Please use an STL smaller than 25 MB.");let n;try{n=new Ml().parse(t);let s=Array.from(n.getAttribute("position").array);if(s.length>225e4)throw Error("Please simplify this STL to fewer than 250,000 triangles.");let r=n.index?Array.from(n.index.array):Array.from({length:s.length/3},(l,h)=>h);n.computeBoundingBox();let o=n.boundingBox,a=mi("mesh",{name:e,mesh:{positions:s,indices:r},size:[o.max.x-o.min.x,o.max.y-o.min.y,o.max.z-o.min.z]});Oi({version:1,name:"Import",pieces:[a]});let c=this.build(a);try{if(c.volume()<=0)throw Error("STL faces point inward or have zero volume. Repair the mesh before importing.")}finally{c.delete()}return a}finally{n?.dispose()}}};function Tl(i){let t=i.getMesh(),e=[];for(let n=0;n<t.vertProperties.length;n+=t.numProp)e.push(...t.vertProperties.subarray(n,n+3));return{positions:e,indices:Array.from(t.triVerts)}}function Cd(i){let{positions:t,indices:e}=Tl(i),n=new DataView(new ArrayBuffer(84+50*e.length/3));new TextEncoder().encode("Little CAD | units: millimeters").forEach((r,o)=>n.setUint8(o,r)),n.setUint32(80,e.length/3,!0);for(let r=0;r<e.length;r+=3){let o=e.slice(r,r+3).map(p=>t.slice(p*3,p*3+3)),a=o[1].map((p,f)=>p-o[0][f]),c=o[2].map((p,f)=>p-o[0][f]),l=[a[1]*c[2]-a[2]*c[1],a[2]*c[0]-a[0]*c[2],a[0]*c[1]-a[1]*c[0]],h=Math.hypot(...l)||1;[...l.map(p=>p/h),...o.flat()].forEach((p,f)=>n.setFloat32(84+r/3*50+f*4,p,!0))}return n.buffer}function Rd(i,t,e){if(!i.success||!i.meshes?.length)throw Error("STEP conversion failed: no readable solids found.");let n=[],s=[],r=[1/0,1/0,1/0],o=[-1/0,-1/0,-1/0];for(let l of i.meshes){let h=l.attributes.position.array,p=n.length/3;if(s.length+l.index.array.length>75e4)throw Error("STEP is too detailed: limit is 250,000 triangles. Export a simpler part.");for(let f=0;f<h.length;f++){let g=h[f];n.push(g),r[f%3]=Math.min(r[f%3],g),o[f%3]=Math.max(o[f%3],g)}for(let f of l.index.array)s.push(f+p)}let a=mi("mesh",{name:t,mesh:{positions:n,indices:s},size:o.map((l,h)=>l-r[h])});Oi({version:1,name:"STEP import",pieces:[a]});let c=e.build(a);try{if(c.volume()<=0)throw Error("STEP must contain closed solid bodies with positive volume.")}finally{c.delete()}return a}function Pd(i){return new Promise((t,e)=>{let n=new Worker(new URL("step-worker.js",location.href)),s=setTimeout(()=>{n.terminate(),e(Error("STEP conversion exceeded 2 minutes. Try a smaller part."))},12e4),r=()=>{clearTimeout(s),n.terminate()};n.onmessage=o=>{r(),o.data.error?e(Error(o.data.error)):t(o.data.result)},n.onerror=o=>{r(),e(Error(o.message||"Could not load the STEP converter. Check the app folder includes its WASM files."))},n.postMessage(i,[i])})}var Id={type:"change"},fh={type:"start"},Dd={type:"end"},Al=new $i,Ld=new Un,Px=Math.cos(70*oo.DEG2RAD),on=new O,Pn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6,Cl=class extends Ms{constructor(t,e=null){super(t,e),this.state=be.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new ke,this._lastTargetPosition=new O,this._quat=new ke().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lr,this._sphericalDelta=new lr,this._scale=1,this._panOffset=new O,this._rotateStart=new Jt,this._rotateEnd=new Jt,this._rotateDelta=new Jt,this._panStart=new Jt,this._panEnd=new Jt,this._panDelta=new Jt,this._dollyStart=new Jt,this._dollyEnd=new Jt,this._dollyDelta=new Jt,this._dollyDirection=new O,this._mouse=new Jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lx.bind(this),this._onPointerDown=Ix.bind(this),this._onPointerUp=Dx.bind(this),this._onContextMenu=kx.bind(this),this._onMouseWheel=Fx.bind(this),this._onKeyDown=Ox.bind(this),this._onTouchStart=Bx.bind(this),this._onTouchMove=zx.bind(this),this._onMouseDown=Nx.bind(this),this._onMouseMove=Ux.bind(this),this._interceptControlDown=Vx.bind(this),this._interceptControlUp=Hx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=be.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Id),this.update(),this.state=be.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;on.copy(e).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),e.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=on.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Al.origin.copy(this.object.position),Al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Al.direction))<Px?this.object.lookAt(this.target):(Ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),Al.intersectPlane(Ld,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(Id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){on.setFromMatrixColumn(e,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,e){this.screenSpacePanning===!0?on.setFromMatrixColumn(e,1):(on.setFromMatrixColumn(e,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ix(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Lx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Dx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dd),this.state=be.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=be.DOLLY;break;case ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}break;case ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(fh)}function Ux(i){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Fx(i){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(i.preventDefault(),this.dispatchEvent(fh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Dd))}function Ox(i){this.enabled!==!1&&this._handleKeyDown(i)}function Bx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1){this.state=be.NONE;break}this._handleTouchStartRotate(i),this.state=be.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1){this.state=be.NONE;break}this._handleTouchStartPan(i),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=be.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(fh)}function zx(i){switch(this._trackPointer(i),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=be.NONE}}function kx(i){this.enabled!==!1&&i.preventDefault()}function Vx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Cs=new Ss,Ze=new O,ss=new O,Ge=new ke,Nd={X:new O(1,0,0),Y:new O(0,1,0),Z:new O(0,0,1)},ph={type:"change"},Ud={type:"mouseDown",mode:null},Fd={type:"mouseUp",mode:null},Od={type:"objectChange"},Dl=class extends Ms{constructor(t,e=null){super(void 0,e);let n=new gh(this);this._root=n;let s=new _h;this._gizmo=s,n.add(s);let r=new xh;this._plane=r,n.add(r);let o=this;function a(C,E){let I=E;Object.defineProperty(o,C,{get:function(){return I!==void 0?I:E},set:function(A){I!==A&&(I=A,r[C]=A,s[C]=A,o.dispatchEvent({type:C+"-changed",value:A}),o.dispatchEvent(ph))}}),o[C]=E,r[C]=E,s[C]=E}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),this.viewport=null,a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("showXY",!0),a("showYZ",!0),a("showXZ",!0),a("showXYZE",!0),a("showE",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let c=new O,l=new O,h=new ke,p=new ke,f=new O,g=new ke,v=new O,b=new O,_=new O,m=0,M=new O;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",h),a("worldQuaternionStart",p),a("cameraPosition",f),a("cameraQuaternion",g),a("pointStart",v),a("pointEnd",b),a("rotationAxis",_),a("rotationAngle",m),a("eye",M),this._offset=new O,this._startNorm=new O,this._endNorm=new O,this._cameraScale=new O,this._parentPosition=new O,this._parentQuaternion=new ke,this._parentQuaternionInv=new ke,this._parentScale=new O,this._worldScaleStart=new O,this._worldQuaternionInv=new ke,this._worldScale=new O,this._positionStart=new O,this._quaternionStart=new ke,this._scaleStart=new O,this._getPointer=Gx.bind(this),this._onPointerDown=Xx.bind(this),this._onPointerHover=Wx.bind(this),this._onPointerMove=Yx.bind(this),this._onPointerUp=qx.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Cs.setFromCamera(t,this.camera);let e=mh(this._gizmo.picker[this.mode],Cs);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Cs.setFromCamera(t,this.camera);let e=mh(this._plane,Cs,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Ud.mode=this.mode,this.dispatchEvent(Ud)}}pointerMove(t){let e=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Cs.setFromCamera(t,this.camera);let o=mh(this._plane,Cs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ge.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.getWorldPosition(Ze),e.search("X")!==-1&&(Ze.x=Math.round(Ze.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(Ze.y=Math.round(Ze.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(Ze.z=Math.round(Ze.z/this.translationSnap)*this.translationSnap),s.position.copy(s.parent.worldToLocal(Ze)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ss.set(a,a,a)}else Ze.copy(this.pointStart),ss.copy(this.pointEnd),Ze.applyQuaternion(this._worldQuaternionInv),ss.applyQuaternion(this._worldQuaternionInv),ss.divide(Ze),e.search("X")===-1&&(ss.x=1),e.search("Y")===-1&&(ss.y=1),e.search("Z")===-1&&(ss.z=1);s.scale.copy(this._scaleStart).multiply(ss),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Ze.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ze.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Nd[e]),Ze.copy(Nd[e]),r==="local"&&Ze.applyQuaternion(this.worldQuaternion),Ze.cross(this.eye),Ze.length()===0?c=!0:this.rotationAngle=this._offset.dot(Ze.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ge.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ge.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ph),this.dispatchEvent(Od)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Fd.mode=this.mode,this.dispatchEvent(Fd)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ph),this.dispatchEvent(Od),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Cs}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Gx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let t=this.domElement.getBoundingClientRect(),e=this.viewport,n,s,r,o;return e!==null?(n=e.x,s=t.height-e.y-e.w,r=e.z,o=e.w):(n=0,s=0,r=t.width,o=t.height),{x:(i.clientX-t.left-n)/r*2-1,y:-(i.clientY-t.top-s)/o*2+1,button:i.button}}}function Wx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Xx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Yx(i){this.enabled&&this.pointerMove(this._getPointer(i))}function qx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function mh(i,t,e){let n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}var Rl=new Kn,De=new O(0,1,0),Bd=new O(0,0,0),zd=new Pe,Pl=new ke,Ll=new ke,gi=new O,Nl=new Pe,po=new O(1,0,0),Rs=new O(0,1,0),mo=new O(0,0,1),Il=new O,uo=new O,fo=new O,gh=class extends Je{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),this.parent&&(Nl.copy(this.parent.matrixWorld).invert(),Nl.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},_h=class extends Je{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new xs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Ii({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let c=t.clone();c.color.setHex(16711680),c.opacity=.5;let l=t.clone();l.color.setHex(65280),l.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let p=t.clone();p.opacity=.25;let f=t.clone();f.color.setHex(16776960),f.opacity=.25;let g=t.clone();g.color.setHex(16776960);let v=t.clone();v.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:g,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:h,activeTransparent:f};let b=new un(0,.04,.1,12);b.translate(0,.05,0);let _=new $e(.08,.08,.08);_.translate(0,.04,0);let m=new He;m.setAttribute("position",new xe([0,0,0,1,0,0],3));let M=new un(.0075,.0075,.5,3);M.translate(0,.25,0);function C(J,Q){let j=new Di(J,.0075,3,64,Q*Math.PI*2);return j.rotateY(Math.PI/2),j.rotateX(Math.PI/2),j}function E(){let J=new He;return J.setAttribute("position",new xe([0,0,0,1,1,1],3)),J}let I={X:[[new Ut(b,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ut(b,r),[-.5,0,0],[0,0,Math.PI/2]],[new Ut(M,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ut(b,o),[0,.5,0]],[new Ut(b,o),[0,-.5,0],[Math.PI,0,0]],[new Ut(M,o)]],Z:[[new Ut(b,a),[0,0,.5],[Math.PI/2,0,0]],[new Ut(b,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ut(M,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ut(new Ji(.1,0),p),[0,0,0]]],XY:[[new Ut(new $e(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new Ut(new $e(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ut(new $e(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new Ut(new un(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ut(new un(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ut(new un(.2,0,.6,4),n),[0,.3,0]],[new Ut(new un(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ut(new un(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ut(new un(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ut(new Ji(.2,0),n)]],XY:[[new Ut(new $e(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ut(new $e(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ut(new $e(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},x={START:[[new Ut(new Ji(.01,2),s),null,null,null,"helper"]],END:[[new Ut(new Ji(.01,2),s),null,null,null,"helper"]],DELTA:[[new On(E(),s),null,null,null,"helper"]],X:[[new On(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new On(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new On(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},w={XYZE:[[new Ut(C(.5,1),v),null,[0,Math.PI/2,0]]],X:[[new Ut(C(.5,.5),r)]],Y:[[new Ut(C(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ut(C(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ut(C(.75,1),f),null,[0,Math.PI/2,0]]]},B={AXIS:[[new On(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},D={XYZE:[[new Ut(new Hr(.25,10,8),n)]],X:[[new Ut(new Di(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ut(new Di(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ut(new Di(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ut(new Di(.75,.1,2,24),n)]]},k={X:[[new Ut(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ut(M,r),[0,0,0],[0,0,-Math.PI/2]],[new Ut(_,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ut(_,o),[0,.5,0]],[new Ut(M,o)],[new Ut(_,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ut(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Ut(M,a),[0,0,0],[Math.PI/2,0,0]],[new Ut(_,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ut(new $e(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new Ut(new $e(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ut(new $e(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ut(new $e(.1,.1,.1),p)]]},G={X:[[new Ut(new un(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ut(new un(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ut(new un(.2,0,.6,4),n),[0,.3,0]],[new Ut(new un(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ut(new un(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ut(new un(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ut(new $e(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ut(new $e(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ut(new $e(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ut(new $e(.2,.2,.2),n),[0,0,0]]]},Z={X:[[new On(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new On(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new On(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function N(J){let Q=new Je;for(let j in J)for(let ft=J[j].length;ft--;){let tt=J[j][ft][0].clone(),ht=J[j][ft][1],mt=J[j][ft][2],Ot=J[j][ft][3],jt=J[j][ft][4];tt.name=j,tt.tag=jt,ht&&tt.position.set(ht[0],ht[1],ht[2]),mt&&tt.rotation.set(mt[0],mt[1],mt[2]),Ot&&tt.scale.set(Ot[0],Ot[1],Ot[2]),tt.updateMatrix();let ot=tt.geometry.clone();ot.applyMatrix4(tt.matrix),tt.geometry=ot,tt.renderOrder=1/0,tt.position.set(0,0,0),tt.rotation.set(0,0,0),tt.scale.set(1,1,1),Q.add(tt)}return Q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=N(I)),this.add(this.gizmo.rotate=N(w)),this.add(this.gizmo.scale=N(k)),this.add(this.picker.translate=N(A)),this.add(this.picker.rotate=N(D)),this.add(this.picker.scale=N(G)),this.add(this.helper.translate=N(x)),this.add(this.helper.rotate=N(B)),this.add(this.helper.scale=N(Z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ll;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ge.setFromEuler(Rl.set(0,0,0)),o.quaternion.copy(n).multiply(Ge),Math.abs(De.copy(po).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ge.setFromEuler(Rl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Ge),Math.abs(De.copy(Rs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ge.setFromEuler(Rl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Ge),Math.abs(De.copy(mo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ge.setFromEuler(Rl.set(0,Math.PI/2,0)),De.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(zd.lookAt(Bd,De,Rs)),o.quaternion.multiply(Ge),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ze.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ze.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ze),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(De.copy(po).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(De.copy(Rs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(De.copy(mo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(De.copy(mo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(De.copy(po).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(De.copy(Rs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Pl.copy(n),De.copy(this.eye).applyQuaternion(Ge.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(zd.lookAt(this.eye,Bd,Rs)),o.name==="X"&&(Ge.setFromAxisAngle(po,Math.atan2(-De.y,De.z)),Ge.multiplyQuaternions(Pl,Ge),o.quaternion.copy(Ge)),o.name==="Y"&&(Ge.setFromAxisAngle(Rs,Math.atan2(De.x,De.z)),Ge.multiplyQuaternions(Pl,Ge),o.quaternion.copy(Ge)),o.name==="Z"&&(Ge.setFromAxisAngle(mo,Math.atan2(De.y,De.x)),Ge.multiplyQuaternions(Pl,Ge),o.quaternion.copy(Ge))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.visible=o.visible&&(o.name.indexOf("XY")===-1||this.showXY),o.visible=o.visible&&(o.name.indexOf("YZ")===-1||this.showYZ),o.visible=o.visible&&(o.name.indexOf("XZ")===-1||this.showXZ),o.visible=o.visible&&(o.name!=="E"||this.showE),o.visible=o.visible&&(o.name!=="XYZE"||this.showXYZE),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},xh=class extends Ut{constructor(){super(new vs(1e5,1e5,2,2),new xs({visible:!1,wireframe:!0,side:Cn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Il.copy(po).applyQuaternion(e==="local"?this.worldQuaternion:Ll),uo.copy(Rs).applyQuaternion(e==="local"?this.worldQuaternion:Ll),fo.copy(mo).applyQuaternion(e==="local"?this.worldQuaternion:Ll),De.copy(uo),this.mode){case"translate":case"scale":switch(this.axis){case"X":De.copy(this.eye).cross(Il),gi.copy(Il).cross(De);break;case"Y":De.copy(this.eye).cross(uo),gi.copy(uo).cross(De);break;case"Z":De.copy(this.eye).cross(fo),gi.copy(fo).cross(De);break;case"XY":gi.copy(fo);break;case"YZ":gi.copy(Il);break;case"XZ":De.copy(fo),gi.copy(uo);break;case"XYZ":case"E":gi.set(0,0,0);break}break;default:gi.set(0,0,0)}gi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Nl.lookAt(Ze.set(0,0,0),gi,De),this.quaternion.setFromRotationMatrix(Nl)),super.updateMatrixWorld(t)}};async function $x(i={}){var t,e=i,n=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,r=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(r){let{createRequire:u}=await import("node:module");var o=u(import.meta.url)}var a=!1;e.setup=function(){if(a)return;a=!0,e.initTBB();function u(L,V,rt=(ut=>ut)){if(V)for(let ut of V)L.push_back(rt(ut));return L}function d(L,V=(rt=>rt)){let rt=[],ut=L.size();for(let Vt=0;Vt<ut;Vt++)rt.push(V(L.get(Vt)));return rt}function T(L,V=(rt=>rt)){let rt=[],ut=L.size();for(let Vt=0;Vt<ut;Vt++){let se=L.get(Vt),ye=se.size(),Oe=[];for(let Le=0;Le<ye;Le++)Oe.push(V(se.get(Le)));rt.push(Oe)}return rt}function P(L){return L[0].length<3&&(L=[L]),u(new e.Vector2_vec2,L,V=>u(new e.Vector_vec2,V,rt=>rt instanceof Array?{x:rt[0],y:rt[1]}:rt))}function F(L){for(let V=0;V<L.size();V++)L.get(V).delete();L.delete()}function W(L){return L[0]instanceof Array?{x:L[0][0],y:L[0][1]}:typeof L[0]=="number"?{x:L[0]||0,y:L[1]||0}:L[0]}function X(L){return L[0]instanceof Array?{x:L[0][0],y:L[0][1],z:L[0][2]}:typeof L[0]=="number"?{x:L[0]||0,y:L[1]||0,z:L[2]||0}:L[0]}function K(L){return L=="EvenOdd"?0:L=="NonZero"?1:L=="Negative"?3:2}function lt(L){return L=="Round"?1:L=="Miter"?2:0}let pt=e.CrossSection;function xt(L,V="Positive"){if(L instanceof pt)return L;{let rt=P(L),ut=new pt(rt,K(V));return F(rt),ut}}e.CrossSection.prototype.translate=function(...L){return this._Translate(W(L))},e.CrossSection.prototype.scale=function(L){return typeof L=="number"?this._Scale({x:L,y:L}):this._Scale(W([L]))},e.CrossSection.prototype.mirror=function(L){return this._Mirror(W([L]))},e.CrossSection.prototype.warp=function(L){let V=hs(function(ut){let Vt=me(ut,"double"),se=me(ut+8,"double"),ye=[Vt,se];L(ye),Ue(ut,ye[0],"double"),Ue(ut+8,ye[1],"double")},"vi"),rt=this._Warp(V);return us(V),rt},e.CrossSection.prototype.decompose=function(){let L=this._Decompose(),V=d(L);return L.delete(),V},e.CrossSection.prototype.bounds=function(){let L=this._Bounds();return{min:["x","y"].map(V=>L.min[V]),max:["x","y"].map(V=>L.max[V])}},e.CrossSection.prototype.offset=function(L,V="Round",rt=2,ut=0){return this._Offset(L,lt(V),rt,ut)},e.CrossSection.prototype.simplify=function(L=1e-6){return this._Simplify(L)},e.CrossSection.prototype.extrude=function(L,V=0,rt=0,ut=[1,1],Vt=!1){ut=W([ut]);let se=e._Extrude(this._ToPolygons(),L,V,rt,ut);return Vt?se.translate([0,0,-L/2]):se},e.CrossSection.prototype.revolve=function(L=0,V=360){return e._Revolve(this._ToPolygons(),L,V)},e.CrossSection.prototype.add=function(L){return this._add(xt(L))},e.CrossSection.prototype.subtract=function(L){return this._subtract(xt(L))},e.CrossSection.prototype.intersect=function(L){return this._intersect(xt(L))},e.CrossSection.prototype.toPolygons=function(){let L=this._ToPolygons(),V=T(L,rt=>[rt.x,rt.y]);return L.delete(),V},e.Manifold.prototype.smoothOut=function(L=52.5,V=0){return this._SmoothOut(L,V)},e.Manifold.prototype.warp=function(L){let V=hs(function(Vt){let se=me(Vt,"double"),ye=me(Vt+8,"double"),Oe=me(Vt+16,"double"),Le=[se,ye,Oe];L(Le),Ue(Vt,Le[0],"double"),Ue(Vt+8,Le[1],"double"),Ue(Vt+16,Le[2],"double")},"vi"),rt=this._Warp(V);us(V);let ut=rt.status();if(ut!=="NoError")throw new e.ManifoldError(ut);return rt},e.Manifold.prototype.warpBatch=function(L){let V=hs(function(Vt,se){let ye=e.HEAPF64??J;if(!ye)throw new Error("WASM heap is not initialized (HEAPF64 unavailable)");let Oe=new Float64Array(ye.buffer,Vt,se*3);L(Oe,se)},"vii"),rt=this._WarpBatch(V);us(V);let ut=rt.status();if(ut!=="NoError")throw new e.ManifoldError(ut);return rt},e.Manifold.prototype.calculateNormals=function(L=0,V=52.5){return this._CalculateNormals(L,V)},e.Manifold.prototype.smoothByNormals=function(L=0){return this._SmoothByNormals(L)},e.Manifold.prototype.setProperties=function(L,V){let rt=this.numProp(),ut=hs(function(se,ye,Oe){let Le=[];for(let Be=0;Be<L;++Be)Le[Be]=me(se+8*Be,"double");let li=[];for(let Be=0;Be<3;++Be)li[Be]=me(ye+8*Be,"double");let Vi=[];for(let Be=0;Be<rt;++Be)Vi[Be]=me(Oe+8*Be,"double");V(Le,li,Vi);for(let Be=0;Be<L;++Be)Ue(se+8*Be,Le[Be],"double")},"viii"),Vt=this._SetProperties(L,ut);return us(ut),Vt},e.Manifold.prototype.translate=function(...L){return this._Translate(X(L))},e.Manifold.prototype.rotate=function(L,V,rt){return Array.isArray(L)?this._Rotate(...L):this._Rotate(L,V||0,rt||0)},e.Manifold.prototype.scale=function(L){return typeof L=="number"?this._Scale({x:L,y:L,z:L}):this._Scale(X([L]))},e.Manifold.prototype.mirror=function(L){return this._Mirror(X([L]))},e.Manifold.prototype.trimByPlane=function(L,V=0){return this._TrimByPlane(X([L]),V)},e.Manifold.prototype.slice=function(L=0){let V=this._Slice(L),rt=new pt(V,K("Positive"));return F(V),rt},e.Manifold.prototype.project=function(){let L=this._Project(),V=new pt(L,K("Positive"));return F(L),V},e.Manifold.prototype.rayCast=function(L,V){let rt=this._RayCast(X([L]),X([V])),ut=d(rt,Vt=>({faceID:Vt.faceID,distance:Vt.distance,position:["x","y","z"].map(se=>Vt.position[se]),normal:["x","y","z"].map(se=>Vt.normal[se])}));return rt.delete(),ut},e.Manifold.prototype.split=function(L){let V=this._Split(L),rt=d(V);return V.delete(),rt},e.Manifold.prototype.splitByPlane=function(L,V=0){let rt=this._SplitByPlane(X([L]),V),ut=d(rt);return rt.delete(),ut},e.Manifold.prototype.decompose=function(){let L=this._Decompose(),V=d(L);return L.delete(),V},e.Manifold.prototype.boundingBox=function(){let L=this._boundingBox();return{min:["x","y","z"].map(V=>L.min[V]),max:["x","y","z"].map(V=>L.max[V])}},e.Manifold.prototype.simplify=function(L=0){return this._Simplify(L)};class Ct{constructor({numProp:V=3,triVerts:rt=new Uint32Array,vertProperties:ut=new Float32Array,mergeFromVert:Vt,mergeToVert:se,runIndex:ye,runOriginalID:Oe,faceID:Le,halfedgeTangent:li,runTransform:Vi,runFlags:Be,tolerance:Gl=0}={}){this.numProp=V,this.triVerts=rt,this.vertProperties=ut,this.mergeFromVert=Vt,this.mergeToVert=se,this.runIndex=ye,this.runOriginalID=Oe,this.faceID=Le,this.halfedgeTangent=li,this.runTransform=Vi,this.runFlags=Be,this.tolerance=Gl}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){let{changed:V,mesh:rt}=e._Merge(this);return Object.assign(this,{...rt}),V}verts(V){return this.triVerts.subarray(3*V,3*(V+1))}position(V){return this.vertProperties.subarray(this.numProp*V,this.numProp*V+3)}extras(V){return this.vertProperties.subarray(this.numProp*V+3,this.numProp*(V+1))}tangent(V){return this.halfedgeTangent.subarray(4*V,4*(V+1))}transform(V){let rt=new Array(16);for(let ut of[0,1,2,3])for(let Vt of[0,1,2])rt[4*ut+Vt]=this.runTransform[12*V+3*ut+Vt];return rt[15]=1,rt}backside(V){return this.runFlags!=null&&V<this.runFlags.length&&(this.runFlags[V]&1)!==0}hasNormals(V){return this.runFlags!=null&&V<this.runFlags.length&&(this.runFlags[V]&2)!==0}}e.Mesh=Ct,e.Manifold.prototype.getMesh=function(L=-1){return new Ct(this._GetMeshJS(L))},e.ManifoldError=function(V,...rt){let ut="Unknown error";switch(V){case"NonFiniteVertex":ut="Non-finite vertex";break;case"NotManifold":ut="Not manifold";break;case"VertexOutOfBounds":ut="Vertex index out of bounds";break;case"PropertiesWrongLength":ut="Properties have wrong length";break;case"MissingPositionProperties":ut="Less than three properties";break;case"MergeVectorsDifferentLengths":ut="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":ut="Merge index out of bounds";break;case"TransformWrongLength":ut="Transform vector has wrong length";break;case"RunIndexWrongLength":ut="Run index vector has wrong length";break;case"FaceIDWrongLength":ut="Face ID vector has wrong length";break;case"InvalidConstruction":ut="Manifold constructed with invalid parameters";break;case"ResultTooLarge":ut="Result exceeds maximum size";break;case"InvalidTangents":ut="Invalid halfedge tangents";break}let Vt=Error.apply(this,[ut,...rt]);Vt.name=this.name="ManifoldError",this.message=Vt.message,this.stack=Vt.stack,this.code=V},e.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:e.ManifoldError,writable:!0,configurable:!0}}),e.CrossSection=function(L,V="Positive"){let rt=P(L),ut=new pt(rt,K(V));return F(rt),ut},e.CrossSection.ofPolygons=function(L,V="Positive"){return new e.CrossSection(L,V)},e.CrossSection.square=function(...L){let V;L.length==0?V={x:1,y:1}:typeof L[0]=="number"?V={x:L[0],y:L[0]}:V=W(L);let rt=L[1]||!1;return e._Square(V,rt)},e.CrossSection.circle=function(L,V=0){return e._Circle(L,V)};function Nt(L){return function(...V){V.length==1&&(V=V[0]);let rt=new e.Vector_crossSection;for(let Vt of V)rt.push_back(xt(Vt));let ut=e["_crossSection"+L](rt);return rt.delete(),ut}}e.CrossSection.compose=Nt("Compose"),e.CrossSection.union=Nt("UnionN"),e.CrossSection.difference=Nt("DifferenceN"),e.CrossSection.intersection=Nt("IntersectionN");function Gt(L,V){u(L,V,rt=>rt instanceof Array?{x:rt[0],y:rt[1]}:rt)}e.CrossSection.hull=function(...L){L.length==1&&(L=L[0]);let V=new e.Vector_vec2;for(let ut of L)if(ut instanceof pt)e._crossSectionCollectVertices(V,ut);else if(ut instanceof Array&&ut.length==2&&typeof ut[0]=="number")V.push_back({x:ut[0],y:ut[1]});else if(ut.x)V.push_back(ut);else{let se=ut[0].length==2&&typeof ut[0][0]=="number"||ut[0].x?[ut]:ut;for(let ye of se)Gt(V,ye)}let rt=e._crossSectionHullPoints(V);return V.delete(),rt},e.CrossSection.prototype=Object.create(pt.prototype),Object.defineProperty(e.CrossSection,Symbol.hasInstance,{get:()=>L=>L instanceof pt});let qt=e.Manifold;e.Manifold=function(L){let V=new qt(L),rt=V.status();if(rt!=="NoError")throw new e.ManifoldError(rt);return V},e.Manifold.ofMesh=function(L){return new e.Manifold(L)},e.Manifold.tetrahedron=function(){return e._Tetrahedron()},e.Manifold.cube=function(...L){let V;L.length==0?V={x:1,y:1,z:1}:typeof L[0]=="number"?V={x:L[0],y:L[0],z:L[0]}:V=X(L);let rt=L[1]||!1;return e._Cube(V,rt)},e.Manifold.cylinder=function(L,V,rt=-1,ut=0,Vt=!1){return e._Cylinder(L,V,rt,ut,Vt)},e.Manifold.sphere=function(L,V=0){return e._Sphere(L,V)},e.Manifold.smooth=function(L,V=[]){let rt=new e.Vector_smoothness;u(rt,V);let ut=e._Smooth(L,rt);return rt.delete(),ut},e.Manifold.extrude=function(L,V,rt=0,ut=0,Vt=[1,1],se=!1){return(L instanceof pt?L:e.CrossSection(L,"Positive")).extrude(V,rt,ut,Vt,se)},e.Manifold.revolve=function(L,V=0,rt=360){return(L instanceof pt?L:e.CrossSection(L,"Positive")).revolve(V,rt)},e.Manifold.reserveIDs=function(L){return e._ReserveIDs(L)};function ee(L){return function(...V){V.length==1&&(V=V[0]);let rt=new e.Vector_manifold;for(let Vt of V)rt.push_back(Vt);let ut=e["_manifold"+L+"N"](rt);return rt.delete(),ut}}e.Manifold.union=ee("Union"),e.Manifold.compose=e.Manifold.union,e.Manifold.difference=ee("Difference"),e.Manifold.intersection=ee("Intersection"),e.Manifold.levelSet=function(L,V,rt,ut=0,Vt=-1){let se={min:{x:V.min[0],y:V.min[1],z:V.min[2]},max:{x:V.max[0],y:V.max[1],z:V.max[2]}},ye=hs(function(Le){let li=me(Le,"double"),Vi=me(Le+8,"double"),Be=me(Le+16,"double");return L([li,Vi,Be])},"di"),Oe=e._LevelSet(ye,se,rt,ut,Vt);return us(ye),Oe},e.ExecutionContext.prototype.fromMesh=function(L){return this._FromMesh(L)},e.ExecutionContext.prototype.smooth=function(L,V=[]){let rt=new e.Vector_smoothness;u(rt,V);let ut=this._Smooth(L,rt);return rt.delete(),ut},e.ExecutionContext.prototype.levelSet=function(L,V,rt,ut=0,Vt=-1){let se={min:{x:V.min[0],y:V.min[1],z:V.min[2]},max:{x:V.max[0],y:V.max[1],z:V.max[2]}},ye=hs(function(Le){let li=me(Le,"double"),Vi=me(Le+8,"double"),Be=me(Le+16,"double");return L([li,Vi,Be])},"di"),Oe=this._LevelSet(ye,se,rt,ut,Vt);return us(ye),Oe};function he(L,V){u(L,V,rt=>rt instanceof Array?{x:rt[0],y:rt[1],z:rt[2]}:rt)}e.Manifold.hull=function(...L){L.length==1&&(L=L[0]);let V=new e.Vector_vec3;for(let ut of L)ut instanceof qt?e._manifoldCollectVertices(V,ut):ut instanceof Array&&ut.length==3&&typeof ut[0]=="number"?V.push_back({x:ut[0],y:ut[1],z:ut[2]}):ut.x?V.push_back(ut):he(V,ut);let rt=e._manifoldHullPoints(V);return V.delete(),rt},e.Manifold.prototype=Object.create(qt.prototype),Object.defineProperty(e.Manifold,Symbol.hasInstance,{get:()=>L=>L instanceof qt}),e.triangulate=function(L,V=-1,rt=!0){let ut=P(L),Vt=d(e._Triangulate(ut,V,rt),se=>[se[0],se[1],se[2]]);return F(ut),Vt}};var c=[],l="./this.program",h=(u,d)=>{throw d},p=import.meta.url,f="";function g(u){return e.locateFile?e.locateFile(u,f):f+u}var v,b;if(r){var _=o("node:fs");p.startsWith("file:")&&(f=o("node:path").dirname(o("node:url").fileURLToPath(p))+"/"),b=u=>{u=I(u)?new URL(u):u;var d=_.readFileSync(u);return d},v=async(u,d=!0)=>{u=I(u)?new URL(u):u;var T=_.readFileSync(u,d?void 0:"utf8");return T},process.argv.length>1&&(l=process.argv[1].replace(/\\/g,"/")),c=process.argv.slice(2),h=(u,d)=>{throw process.exitCode=u,d}}else if(n||s){try{f=new URL(".",p).href}catch{}s&&(b=u=>{var d=new XMLHttpRequest;return d.open("GET",u,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),v=async u=>{if(I(u))return new Promise((T,P)=>{var F=new XMLHttpRequest;F.open("GET",u,!0),F.responseType="arraybuffer",F.onload=()=>{if(F.status==200||F.status==0&&F.response){T(F.response);return}P(F.status)},F.onerror=P,F.send(null)});var d=await fetch(u,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw new Error(d.status+" : "+d.url)}}var m=console.log.bind(console),M=console.error.bind(console),C,E=!1,I=u=>u.startsWith("file://"),A,x,w,B,D,k,G,Z,N,J,Q,j,ft=!1;function tt(){var u=To.buffer;w=new Int8Array(u),D=new Int16Array(u),B=new Uint8Array(u),k=new Uint16Array(u),G=new Int32Array(u),Z=new Uint32Array(u),N=new Float32Array(u),J=new Float64Array(u),Q=new BigInt64Array(u),j=new BigUint64Array(u)}function ht(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)dn(e.preRun.shift());Ee(Ye)}function mt(){ft=!0,ds.J()}function Ot(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)Qe(e.postRun.shift());Ee(pe)}function jt(u){e.onAbort?.(u),u="Aborted("+u+")",M(u),E=!0,u+=". Build with -sASSERTIONS for more info.";var d=new WebAssembly.RuntimeError(u);throw x?.(d),d}var ot;function Pt(){return e.locateFile?g("manifold.wasm"):new URL("manifold.wasm",import.meta.url).href}function zt(u){if(u==ot&&C)return new Uint8Array(C);if(b)return b(u);throw"both async and sync fetching of the wasm failed"}async function $t(u){if(!C)try{var d=await v(u);return new Uint8Array(d)}catch{}return zt(u)}async function It(u,d){try{var T=await $t(u),P=await WebAssembly.instantiate(T,d);return P}catch(F){M(`failed to asynchronously prepare wasm: ${F}`),jt(F)}}async function oe(u,d,T){if(!u&&!I(d)&&!r)try{var P=fetch(d,{credentials:"same-origin"}),F=await WebAssembly.instantiateStreaming(P,T);return F}catch(W){M(`wasm streaming compile failed: ${W}`),M("falling back to ArrayBuffer instantiation")}return It(d,T)}function Xe(){var u={a:Xf};return u}async function Qt(){function u(W,X){return ds=W.exports,ds=Yf(ds),Wf(ds),tt(),ds}function d(W){return u(W.instance)}var T=Xe();if(e.instantiateWasm)return new Promise((W,X)=>{e.instantiateWasm(T,(K,lt)=>{W(u(K,lt))})});ot??=Pt();var P=await oe(C,ot,T),F=d(P);return F}class we{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var Ee=u=>{for(;u.length>0;)u.shift()(e)},pe=[],Qe=u=>pe.push(u),Ye=[],dn=u=>Ye.push(u);function me(u,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":return w[u>>>0];case"i8":return w[u>>>0];case"i16":return D[u>>>1>>>0];case"i32":return G[u>>>2>>>0];case"i64":return Q[u>>>3>>>0];case"float":return N[u>>>2>>>0];case"double":return J[u>>>3>>>0];case"*":return Z[u>>>2>>>0];default:jt(`invalid type for getValue: ${d}`)}}var kn=!0;function Ue(u,d,T="i8"){switch(T.endsWith("*")&&(T="*"),T){case"i1":w[u>>>0]=d;break;case"i8":w[u>>>0]=d;break;case"i16":D[u>>>1>>>0]=d;break;case"i32":G[u>>>2>>>0]=d;break;case"i64":Q[u>>>3>>>0]=BigInt(d);break;case"float":N[u>>>2>>>0]=d;break;case"double":J[u>>>3>>>0]=d;break;case"*":Z[u>>>2>>>0]=d;break;default:jt(`invalid type for setValue: ${T}`)}}class wn{constructor(d){this.excPtr=d,this.ptr=d-24}set_type(d){Z[this.ptr+4>>>2>>>0]=d}get_type(){return Z[this.ptr+4>>>2>>>0]}set_destructor(d){Z[this.ptr+8>>>2>>>0]=d}get_destructor(){return Z[this.ptr+8>>>2>>>0]}set_caught(d){d=d?1:0,w[this.ptr+12>>>0]=d}get_caught(){return w[this.ptr+12>>>0]!=0}set_rethrown(d){d=d?1:0,w[this.ptr+13>>>0]=d}get_rethrown(){return w[this.ptr+13>>>0]!=0}init(d,T){this.set_adjusted_ptr(0),this.set_type(d),this.set_destructor(T)}set_adjusted_ptr(d){Z[this.ptr+16>>>2>>>0]=d}get_adjusted_ptr(){return Z[this.ptr+16>>>2>>>0]}}var vn=0,En=0;function H(u,d,T){u>>>=0,d>>>=0,T>>>=0;var P=new wn(u);throw P.init(d,T),vn=u,En++,vn}var Tn=()=>jt(""),Ae={},Ie=u=>{for(;u.length;){var d=u.pop(),T=u.pop();T(d)}};function Tt(u){return this.fromWireType(Z[u>>>2>>>0])}var Ne={},Wt={},te={},R=class extends Error{constructor(d){super(d),this.name="InternalError"}},y=u=>{throw new R(u)},q=(u,d,T)=>{u.forEach(K=>te[K]=d);function P(K){var lt=T(K);lt.length!==u.length&&y("Mismatched type converter count");for(var pt=0;pt<u.length;++pt)nt(u[pt],lt[pt])}var F=new Array(d.length),W=[],X=0;for(let[K,lt]of d.entries())Wt.hasOwnProperty(lt)?F[K]=Wt[lt]:(W.push(lt),Ne.hasOwnProperty(lt)||(Ne[lt]=[]),Ne[lt].push(()=>{F[K]=Wt[lt],++X,X===W.length&&P(F)}));W.length===0&&P(F)},_t=function(u){u>>>=0;var d=Ae[u];delete Ae[u];var T=d.rawConstructor,P=d.rawDestructor,F=d.fields,W=F.map(X=>X.getterReturnType).concat(F.map(X=>X.setterArgumentType));q([u],W,X=>{var K={};for(var[lt,pt]of F.entries()){let xt=X[lt],Ct=pt.getter,Nt=pt.getterContext,Gt=X[lt+F.length],qt=pt.setter,ee=pt.setterContext;K[pt.fieldName]={read:he=>xt.fromWireType(Ct(Nt,he)),write:(he,L)=>{var V=[];qt(ee,he,Gt.toWireType(V,L)),Ie(V)},optional:xt.optional}}return[{name:d.name,fromWireType:xt=>{var Ct={};for(var Nt in K)Ct[Nt]=K[Nt].read(xt);return P(xt),Ct},toWireType:(xt,Ct)=>{for(var Nt in K)if(!(Nt in Ct)&&!K[Nt].optional)throw new TypeError(`Missing field: "${Nt}"`);var Gt=T();for(Nt in K)K[Nt].write(Gt,Ct[Nt]);return xt!==null&&xt.push(P,Gt),Gt},readValueFromPointer:Tt,destructorFunction:P}]})},it=u=>{u>>>=0;for(var d="";;){var T=B[u++>>>0];if(!T)return d;d+=String.fromCharCode(T)}},St=class extends Error{constructor(d){super(d),this.name="BindingError"}},dt=u=>{throw new St(u)};function at(u,d,T={}){var P=d.name;if(u||dt(`type "${P}" must have a positive integer typeid pointer`),Wt.hasOwnProperty(u)){if(T.ignoreDuplicateRegistrations)return;dt(`Cannot register type '${P}' twice`)}if(Wt[u]=d,delete te[u],Ne.hasOwnProperty(u)){var F=Ne[u];delete Ne[u],F.forEach(W=>W())}}function nt(u,d,T={}){return at(u,d,T)}var Et=(u,d,T)=>{switch(d){case 1:return T?P=>w[P>>>0]:P=>B[P>>>0];case 2:return T?P=>D[P>>>1>>>0]:P=>k[P>>>1>>>0];case 4:return T?P=>G[P>>>2>>>0]:P=>Z[P>>>2>>>0];case 8:return T?P=>Q[P>>>3>>>0]:P=>j[P>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${u}`)}},U=function(u,d,T,P,F){u>>>=0,d>>>=0,T>>>=0,d=it(d);let W=P===0n,X=K=>K;if(W){let K=T*8;X=lt=>BigInt.asUintN(K,lt),F=X(F)}nt(u,{name:d,fromWireType:X,toWireType:(K,lt)=>(typeof lt=="number"&&(lt=BigInt(lt)),lt),readValueFromPointer:Et(d,T,!W),destructorFunction:null})};function ct(u,d,T,P){u>>>=0,d>>>=0,d=it(d),nt(u,{name:d,fromWireType:function(F){return!!F},toWireType:function(F,W){return W?T:P},readValueFromPointer:function(F){return this.fromWireType(B[F>>>0])},destructorFunction:null})}var st=u=>({count:u.count,deleteScheduled:u.deleteScheduled,preservePointerOnDelete:u.preservePointerOnDelete,ptr:u.ptr,ptrType:u.ptrType,smartPtr:u.smartPtr,smartPtrType:u.smartPtrType}),Mt=u=>{function d(T){return T.$$.ptrType.registeredClass.name}dt(d(u)+" instance already deleted")},vt=!1,bt=u=>{},Xt=u=>{u.smartPtr?u.smartPtrType.rawDestructor(u.smartPtr):u.ptrType.registeredClass.rawDestructor(u.ptr)},le=u=>{u.count.value-=1;var d=u.count.value===0;d&&Xt(u)},gt=u=>globalThis.FinalizationRegistry?(vt=new FinalizationRegistry(d=>{le(d.$$)}),gt=d=>{var T=d.$$,P=!!T.smartPtr;if(P){var F={$$:T};vt.register(d,F,d)}return d},bt=d=>vt.unregister(d),gt(u)):(gt=d=>d,u),Yt=[],ce=()=>{for(;Yt.length;){var u=Yt.pop();u.$$.deleteScheduled=!1,u.delete()}},Rt,Me=()=>{let u=We.prototype;Object.assign(u,{isAliasOf(T){if(!(this instanceof We)||!(T instanceof We))return!1;var P=this.$$.ptrType.registeredClass,F=this.$$.ptr;T.$$=T.$$;for(var W=T.$$.ptrType.registeredClass,X=T.$$.ptr;P.baseClass;)F=P.upcast(F),P=P.baseClass;for(;W.baseClass;)X=W.upcast(X),W=W.baseClass;return P===W&&F===X},clone(){if(this.$$.ptr||Mt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var T=gt(Object.create(Object.getPrototypeOf(this),{$$:{value:st(this.$$)}}));return T.$$.count.value+=1,T.$$.deleteScheduled=!1,T},delete(){this.$$.ptr||Mt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),bt(this),le(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Mt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),Yt.push(this),Yt.length===1&&Rt&&Rt(ce),this.$$.deleteScheduled=!0,this}});let d=Symbol.dispose;d&&(u[d]=u.delete)};function We(){}var In=(u,d)=>Object.defineProperty(d,"name",{value:u}),yr={},Ls=(u,d,T)=>{if(u[d].overloadTable===void 0){var P=u[d];u[d]=function(...F){return u[d].overloadTable.hasOwnProperty(F.length)||dt(`Function '${T}' called with an invalid number of arguments (${F.length}) - expects one of (${u[d].overloadTable})!`),u[d].overloadTable[F.length].apply(this,F)},u[d].overloadTable=[],u[d].overloadTable[P.argCount]=P}},as=(u,d,T)=>{e.hasOwnProperty(u)?((T===void 0||e[u].overloadTable!==void 0&&e[u].overloadTable[T]!==void 0)&&dt(`Cannot register public name '${u}' twice`),Ls(e,u,u),e[u].overloadTable.hasOwnProperty(T)&&dt(`Cannot register multiple overloads of a function with the same number of arguments (${T})!`),e[u].overloadTable[T]=d):(e[u]=d,e[u].argCount=T)},vo=48,yo=57,xi=u=>{u=u.replace(/[^a-zA-Z0-9_]/g,"$");var d=u.charCodeAt(0);return d>=vo&&d<=yo?`_${u}`:u};function Sr(u,d,T,P,F,W,X,K){this.name=u,this.constructor=d,this.instancePrototype=T,this.rawDestructor=P,this.baseClass=F,this.getActualType=W,this.upcast=X,this.downcast=K,this.pureVirtualFunctions=[]}var Ds=(u,d,T)=>{for(;d!==T;)d.upcast||dt(`Expected null or instance of ${T.name}, got an instance of ${d.name}`),u=d.upcast(u),d=d.baseClass;return u},Ns=u=>{if(u===null)return"null";var d=typeof u;return d==="object"||d==="array"||d==="function"?u.toString():""+u};function Us(u,d){if(d===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;d.$$||dt(`Cannot pass "${Ns(d)}" as a ${this.name}`),d.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`);var T=d.$$.ptrType.registeredClass,P=Ds(d.$$.ptr,T,this.registeredClass);return P}function So(u,d){var T;if(d===null)return this.isReference&&dt(`null is not a valid ${this.name}`),this.isSmartPointer?(T=this.rawConstructor(),u!==null&&u.push(this.rawDestructor,T),T):0;(!d||!d.$$)&&dt(`Cannot pass "${Ns(d)}" as a ${this.name}`),d.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&d.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);var P=d.$$.ptrType.registeredClass;if(T=Ds(d.$$.ptr,P,this.registeredClass),this.isSmartPointer)switch(d.$$.smartPtr===void 0&&dt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:d.$$.smartPtrType===this?T=d.$$.smartPtr:dt(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:T=d.$$.smartPtr;break;case 2:if(d.$$.smartPtrType===this)T=d.$$.smartPtr;else{var F=d.clone();T=this.rawShare(T,Kt.toHandle(()=>F.delete())),u!==null&&u.push(this.rawDestructor,T)}break;default:dt("Unsupported sharing policy")}return T}function Mo(u,d){if(d===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;d.$$||dt(`Cannot pass "${Ns(d)}" as a ${this.name}`),d.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),d.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${d.$$.ptrType.name} to parameter type ${this.name}`);var T=d.$$.ptrType.registeredClass,P=Ds(d.$$.ptr,T,this.registeredClass);return P}var zi=(u,d,T)=>{if(d===T)return u;if(T.baseClass===void 0)return null;var P=zi(u,d,T.baseClass);return P===null?null:T.downcast(P)},Fl={},bo=(u,d)=>{for(d===void 0&&dt("ptr should not be undefined");u.baseClass;)d=u.upcast(d),u=u.baseClass;return d},wo=(u,d)=>(d=bo(u,d),Fl[d]),Fs=(u,d)=>{(!d.ptrType||!d.ptr)&&y("makeClassHandle requires ptr and ptrType");var T=!!d.smartPtrType,P=!!d.smartPtr;return T!==P&&y("Both smartPtrType and smartPtr must be specified"),d.count={value:1},gt(Object.create(u,{$$:{value:d,writable:!0}}))};function Ol(u){var d=this.getPointee(u);if(!d)return this.destructor(u),null;var T=wo(this.registeredClass,d);if(T!==void 0){if(T.$$.count.value===0)return T.$$.ptr=d,T.$$.smartPtr=u,T.clone();var P=T.clone();return this.destructor(u),P}function F(){return this.isSmartPointer?Fs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:d,smartPtrType:this,smartPtr:u}):Fs(this.registeredClass.instancePrototype,{ptrType:this,ptr:u})}var W=this.registeredClass.getActualType(d),X=yr[W];if(!X)return F.call(this);var K;this.isConst?K=X.constPointerType:K=X.pointerType;var lt=zi(d,this.registeredClass,K.registeredClass);return lt===null?F.call(this):this.isSmartPointer?Fs(K.registeredClass.instancePrototype,{ptrType:K,ptr:lt,smartPtrType:this,smartPtr:u}):Fs(K.registeredClass.instancePrototype,{ptrType:K,ptr:lt})}var Bl=()=>{Object.assign(ls.prototype,{getPointee(u){return this.rawGetPointee&&(u=this.rawGetPointee(u)),u},destructor(u){this.rawDestructor?.(u)},readValueFromPointer:Tt,fromWireType:Ol})};function ls(u,d,T,P,F,W,X,K,lt,pt,xt){this.name=u,this.registeredClass=d,this.isReference=T,this.isConst=P,this.isSmartPointer=F,this.pointeeType=W,this.sharingPolicy=X,this.rawGetPointee=K,this.rawConstructor=lt,this.rawShare=pt,this.rawDestructor=xt,!F&&d.baseClass===void 0?P?(this.toWireType=Us,this.destructorFunction=null):(this.toWireType=Mo,this.destructorFunction=null):this.toWireType=So}var S=(u,d,T)=>{e.hasOwnProperty(u)||y("Replacing nonexistent public symbol"),e[u].overloadTable!==void 0&&T!==void 0?e[u].overloadTable[T]=d:(e[u]=d,e[u].argCount=T)},z=u=>Mr.get(u),et=(u,d,T=[],P=!1)=>{var F=z(d),W=F(...T);function X(K){return u[0]=="p"?K>>>0:K}return X(W)},$=(u,d,T=!1)=>(...P)=>et(u,d,P,T),Y=(u,d,T=!1)=>{u=it(u);function P(){if(u.includes("p"))return $(u,d,T);var W=z(d);return W}var F=P();return typeof F!="function"&&dt(`unknown function pointer with signature ${u}: ${d}`),F};class At extends Error{}var Bt=u=>{var d=Rh(u),T=it(d);return yi(d),T},wt=(u,d)=>{var T=[],P={};function F(W){if(!P[W]&&!Wt[W]){if(te[W]){te[W].forEach(F);return}T.push(W),P[W]=!0}}throw d.forEach(F),new At(`${u}: `+T.map(Bt).join([", "]))};function Lt(u,d,T,P,F,W,X,K,lt,pt,xt,Ct,Nt){u>>>=0,d>>>=0,T>>>=0,P>>>=0,F>>>=0,W>>>=0,X>>>=0,K>>>=0,lt>>>=0,pt>>>=0,xt>>>=0,Ct>>>=0,Nt>>>=0,xt=it(xt),W=Y(F,W),K&&=Y(X,K),pt&&=Y(lt,pt),Nt=Y(Ct,Nt);var Gt=xi(xt);as(Gt,function(){wt(`Cannot construct ${xt} due to unbound types`,[P])}),q([u,d,T],P?[P]:[],qt=>{qt=qt[0];var ee,he;P?(ee=qt.registeredClass,he=ee.instancePrototype):he=We.prototype;var L=In(xt,function(...ye){if(Object.getPrototypeOf(this)!==V)throw new St(`Use 'new' to construct ${xt}`);if(rt.constructor_body===void 0)throw new St(`${xt} has no accessible constructor`);var Oe=rt.constructor_body[ye.length];if(Oe===void 0)throw new St(`Tried to invoke ctor of ${xt} with invalid number of parameters (${ye.length}) - expected (${Object.keys(rt.constructor_body).toString()}) parameters instead!`);return Oe.apply(this,ye)}),V=Object.create(he,{constructor:{value:L}});L.prototype=V;var rt=new Sr(xt,L,V,Nt,ee,W,K,pt);rt.baseClass&&(rt.baseClass.__derivedClasses??=[],rt.baseClass.__derivedClasses.push(rt));var ut=new ls(xt,rt,!0,!1,!1),Vt=new ls(xt+"*",rt,!1,!1,!1),se=new ls(xt+" const*",rt,!1,!0,!1);return yr[u]={pointerType:Vt,constPointerType:se},S(Gt,L),[ut,Vt,se]})}var Ht=(u,d)=>{for(var T=[],P=0;P<u;P++)T.push(Z[d+P*4>>>2>>>0]);return T};function ie(u){for(var d=1;d<u.length;++d)if(u[d]!==null&&u[d].destructorFunction===void 0)return!0;return!1}var ge={ftf:function(d,T,P,F,W,X,K){return function(){var lt=P(F),pt=X(lt);return pt}},tffn:function(d,T,P,F,W,X,K){return function(){var lt=K(null,this);P(F,lt)}},ttfn:function(d,T,P,F,W,X,K){return function(){var lt=K(null,this),pt=P(F,lt),xt=X(pt);return xt}},ttfnn:function(d,T,P,F,W,X,K,lt){return function(pt){var xt=K(null,this),Ct=lt(null,pt),Nt=P(F,xt,Ct),Gt=X(Nt);return Gt}},ttfnnn:function(d,T,P,F,W,X,K,lt,pt){return function(xt,Ct){var Nt=K(null,this),Gt=lt(null,xt),qt=pt(null,Ct),ee=P(F,Nt,Gt,qt),he=X(ee);return he}},ttfnntnnn:function(d,T,P,F,W,X,K,lt,pt,xt,Ct,Nt,Gt){return function(qt,ee,he,L,V){var rt=K(null,this),ut=lt(null,qt),Vt=pt(null,ee),se=xt(null,he),ye=Ct(null,L),Oe=Nt(null,V),Le=P(F,rt,ut,Vt,se,ye,Oe);Gt(Vt);var li=X(Le);return li}},tffnt:function(d,T,P,F,W,X,K,lt,pt){return function(xt){var Ct=K(null,this),Nt=lt(null,xt);P(F,Ct,Nt),pt(Nt)}},tffnnt:function(d,T,P,F,W,X,K,lt,pt,xt){return function(Ct,Nt){var Gt=K(null,this),qt=lt(null,Ct),ee=pt(null,Nt);P(F,Gt,qt,ee),xt(ee)}},ttfnnt:function(d,T,P,F,W,X,K,lt,pt,xt){return function(Ct,Nt){var Gt=K(null,this),qt=lt(null,Ct),ee=pt(null,Nt),he=P(F,Gt,qt,ee);xt(ee);var L=X(he);return L}},tffnn:function(d,T,P,F,W,X,K,lt){return function(pt){var xt=K(null,this),Ct=lt(null,pt);P(F,xt,Ct)}},tffnnn:function(d,T,P,F,W,X,K,lt,pt){return function(xt,Ct){var Nt=K(null,this),Gt=lt(null,xt),qt=pt(null,Ct);P(F,Nt,Gt,qt)}},ftfnn:function(d,T,P,F,W,X,K,lt,pt){return function(xt,Ct){var Nt=lt(null,xt),Gt=pt(null,Ct),qt=P(F,Nt,Gt),ee=X(qt);return ee}},ttfnt:function(d,T,P,F,W,X,K,lt,pt){return function(xt){var Ct=K(null,this),Nt=lt(null,xt),Gt=P(F,Ct,Nt);pt(Nt);var qt=X(Gt);return qt}},ttfnnnnn:function(d,T,P,F,W,X,K,lt,pt,xt,Ct){return function(Nt,Gt,qt,ee){var he=K(null,this),L=lt(null,Nt),V=pt(null,Gt),rt=xt(null,qt),ut=Ct(null,ee),Vt=P(F,he,L,V,rt,ut),se=X(Vt);return se}},ftftn:function(d,T,P,F,W,X,K,lt,pt,xt){return function(Ct,Nt){var Gt=lt(null,Ct),qt=pt(null,Nt),ee=P(F,Gt,qt);xt(Gt);var he=X(ee);return he}},ftfn:function(d,T,P,F,W,X,K,lt){return function(pt){var xt=lt(null,pt),Ct=P(F,xt),Nt=X(Ct);return Nt}},fffnn:function(d,T,P,F,W,X,K,lt,pt){return function(xt,Ct){var Nt=lt(null,xt),Gt=pt(null,Ct);P(F,Nt,Gt)}},ttfntn:function(d,T,P,F,W,X,K,lt,pt,xt){return function(Ct,Nt){var Gt=K(null,this),qt=lt(null,Ct),ee=pt(null,Nt),he=P(F,Gt,qt,ee);xt(qt);var L=X(he);return L}},ttfnnnn:function(d,T,P,F,W,X,K,lt,pt,xt){return function(Ct,Nt,Gt){var qt=K(null,this),ee=lt(null,Ct),he=pt(null,Nt),L=xt(null,Gt),V=P(F,qt,ee,he,L),rt=X(V);return rt}},ttfntt:function(d,T,P,F,W,X,K,lt,pt,xt,Ct){return function(Nt,Gt){var qt=K(null,this),ee=lt(null,Nt),he=pt(null,Gt),L=P(F,qt,ee,he);xt(ee),Ct(he);var V=X(L);return V}},ftfnnnnn:function(d,T,P,F,W,X,K,lt,pt,xt,Ct,Nt){return function(Gt,qt,ee,he,L){var V=lt(null,Gt),rt=pt(null,qt),ut=xt(null,ee),Vt=Ct(null,he),se=Nt(null,L),ye=P(F,V,rt,ut,Vt,se),Oe=X(ye);return Oe}},ftfnnnnt:function(d,T,P,F,W,X,K,lt,pt,xt,Ct,Nt,Gt){return function(qt,ee,he,L,V){var rt=lt(null,qt),ut=pt(null,ee),Vt=xt(null,he),se=Ct(null,L),ye=Nt(null,V),Oe=P(F,rt,ut,Vt,se,ye);Gt(ye);var Le=X(Oe);return Le}},ftfnnn:function(d,T,P,F,W,X,K,lt,pt,xt){return function(Ct,Nt,Gt){var qt=lt(null,Ct),ee=pt(null,Nt),he=xt(null,Gt),L=P(F,qt,ee,he),V=X(L);return V}},ftfntnnn:function(d,T,P,F,W,X,K,lt,pt,xt,Ct,Nt,Gt){return function(qt,ee,he,L,V){var rt=lt(null,qt),ut=pt(null,ee),Vt=xt(null,he),se=Ct(null,L),ye=Nt(null,V),Oe=P(F,rt,ut,Vt,se,ye);Gt(ut);var Le=X(Oe);return Le}},fffn:function(d,T,P,F,W,X,K,lt){return function(pt){var xt=lt(null,pt);P(F,xt)}},fff:function(d,T,P,F,W,X,K){return function(){P(F)}}};function kt(u,d,T,P){let F=[d?"t":"f",T?"t":"f",P?"t":"f"];for(let W=d?1:2;W<u.length;++W){let X=u[W],K="";X.destructorFunction===void 0?K="u":X.destructorFunction===null?K="n":K="t",F.push(K)}return F.join("")}function de(u,d,T,P,F,W){var X=d.length;X<2&&dt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var K=d[1]!==null&&T!==null,lt=ie(d),pt=!d[0].isVoid,xt=d[0],Ct=d[1],Nt=[u,dt,P,F,Ie,xt.fromWireType.bind(xt),Ct?.toWireType.bind(Ct)],Gt=2;Gt<X;++Gt){var qt=d[Gt];Nt.push(qt.toWireType.bind(qt))}if(!lt)for(var Gt=K?1:2;Gt<d.length;++Gt)d[Gt].destructorFunction!==null&&Nt.push(d[Gt].destructorFunction);var ee=kt(d,K,pt,W),he=ge[ee](...Nt);return In(u,he)}var qe=function(u,d,T,P,F,W){u>>>=0,T>>>=0,P>>>=0,F>>>=0,W>>>=0;var X=Ht(d,T);F=Y(P,F),q([],[u],K=>{K=K[0];var lt=`constructor ${K.name}`;if(K.registeredClass.constructor_body===void 0&&(K.registeredClass.constructor_body=[]),K.registeredClass.constructor_body[d-1]!==void 0)throw new St(`Cannot register multiple constructors with identical number of parameters (${d-1}) for class '${K.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return K.registeredClass.constructor_body[d-1]=()=>{wt(`Cannot construct ${K.name} due to unbound types`,X)},q([],X,pt=>(pt.splice(1,0,null),K.registeredClass.constructor_body[d-1]=de(lt,pt,null,F,W),[])),[]})},Ce=u=>{u=u.trim();let d=u.indexOf("(");return d===-1?u:u.slice(0,d)},Re=function(u,d,T,P,F,W,X,K,lt,pt){u>>>=0,d>>>=0,P>>>=0,F>>>=0,W>>>=0,X>>>=0;var xt=Ht(T,P);d=it(d),d=Ce(d),W=Y(F,W,lt),q([],[u],Ct=>{Ct=Ct[0];var Nt=`${Ct.name}.${d}`;d.startsWith("@@")&&(d=Symbol[d.substring(2)]),K&&Ct.registeredClass.pureVirtualFunctions.push(d);function Gt(){wt(`Cannot call ${Nt} due to unbound types`,xt)}var qt=Ct.registeredClass.instancePrototype,ee=qt[d];return ee===void 0||ee.overloadTable===void 0&&ee.className!==Ct.name&&ee.argCount===T-2?(Gt.argCount=T-2,Gt.className=Ct.name,qt[d]=Gt):(Ls(qt,d,Nt),qt[d].overloadTable[T-2]=Gt),q([],xt,he=>{var L=de(Nt,he,Ct,W,X,lt);return qt[d].overloadTable===void 0?(L.argCount=T-2,qt[d]=L):qt[d].overloadTable[T-2]=L,[]}),[]})},tn=[],Ft=[0,1,,1,null,1,!0,1,!1,1];function en(u){u>>>=0,u>9&&--Ft[u+1]===0&&(Ft[u]=void 0,tn.push(u))}var Kt={toValue:u=>(u||dt(`Cannot use deleted val. handle = ${u}`),Ft[u]),toHandle:u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let d=tn.pop()||Ft.length;return Ft[d]=u,Ft[d+1]=1,d}}}},oi={name:"emscripten::val",fromWireType:u=>{var d=Kt.toValue(u);return en(u),d},toWireType:(u,d)=>Kt.toHandle(d),readValueFromPointer:Tt,destructorFunction:null};function ln(u){return u>>>=0,nt(u,oi)}var ki=(u,d,T)=>{switch(d){case 1:return T?function(P){return this.fromWireType(w[P>>>0])}:function(P){return this.fromWireType(B[P>>>0])};case 2:return T?function(P){return this.fromWireType(D[P>>>1>>>0])}:function(P){return this.fromWireType(k[P>>>1>>>0])};case 4:return T?function(P){return this.fromWireType(G[P>>>2>>>0])}:function(P){return this.fromWireType(Z[P>>>2>>>0])};default:throw new TypeError(`invalid integer width (${d}): ${u}`)}};function ai(u){return u===0?"object":u===1?"number":"string"}function vi(u,d,T,P,F){u>>>=0,d>>>=0,T>>>=0,d=it(d);let W=ai(F);switch(W){case"object":{let pt=function(){};pt.values={},nt(u,{name:d,constructor:pt,valueType:W,fromWireType:function(xt){return this.constructor.values[xt]},toWireType:(xt,Ct)=>Ct.value,readValueFromPointer:ki(d,T,P),destructorFunction:null}),as(d,pt);break}case"number":{var X={};nt(u,{name:d,keysMap:X,valueType:W,fromWireType:pt=>pt,toWireType:(pt,xt)=>xt,readValueFromPointer:ki(d,T,P),destructorFunction:null}),as(d,X),delete e[d].argCount;break}case"string":{var K={},lt={},X={};nt(u,{name:d,valuesMap:K,reverseMap:lt,keysMap:X,valueType:W,fromWireType:function(xt){return this.reverseMap[xt]},toWireType:function(xt,Ct){return this.valuesMap[Ct]},readValueFromPointer:ki(d,T,P),destructorFunction:null}),as(d,X),delete e[d].argCount;break}}}var ve=(u,d)=>{var T=Wt[u];return T===void 0&&dt(`${d} has unknown type ${Bt(u)}`),T};function nn(u,d,T){u>>>=0,d>>>=0;var P=ve(u,"enum");switch(d=it(d),P.valueType){case"object":{var F=P.constructor,W=Object.create(P.constructor.prototype,{value:{value:T},constructor:{value:In(`${P.name}_${d}`,function(){})}});F.values[T]=W,F[d]=W;break}case"number":{P.keysMap[d]=T;break}case"string":{P.valuesMap[d]=T,P.reverseMap[T]=d,P.keysMap[d]=d;break}}}var Ln=(u,d)=>{switch(d){case 4:return function(T){return this.fromWireType(N[T>>>2>>>0])};case 8:return function(T){return this.fromWireType(J[T>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${u}`)}},Fe=function(u,d,T){u>>>=0,d>>>=0,T>>>=0,d=it(d),nt(u,{name:d,fromWireType:P=>P,toWireType:(P,F)=>F,readValueFromPointer:Ln(d,T),destructorFunction:null})};function Ke(u,d,T,P,F,W,X,K){u>>>=0,T>>>=0,P>>>=0,F>>>=0,W>>>=0;var lt=Ht(d,T);u=it(u),u=Ce(u),F=Y(P,F,X),as(u,function(){wt(`Cannot call ${u} due to unbound types`,lt)},d-1),q([],lt,pt=>{var xt=[pt[0],null].concat(pt.slice(1));return S(u,de(u,xt,null,F,W,X),d-1),[]})}var Yn=function(u,d,T,P,F){u>>>=0,d>>>=0,T>>>=0,d=it(d);let W=P===0,X=lt=>lt;if(W){var K=32-8*T;X=lt=>lt<<K>>>K,F=X(F)}nt(u,{name:d,fromWireType:X,toWireType:(lt,pt)=>pt,readValueFromPointer:Et(d,T,P!==0),destructorFunction:null})},Eo=(u,d,T)=>{let P=(F,W)=>{let X=0;return{next(){if(X>=F)return{done:!0};let K=X;return X++,{value:W(K),done:!1}},[Symbol.iterator](){return this}}};u[Symbol.iterator]||(u[Symbol.iterator]=function(){let F=this[d]();return P(F,W=>this[T](W))})},jd=function(u,d,T,P){u>>>=0,d>>>=0,T>>>=0,P>>>=0,T=it(T),P=it(P),q([],[u,d],F=>{let W=F[0];return Eo(W.registeredClass.instancePrototype,T,P),[]})};function Qd(u,d,T){u>>>=0,T>>>=0;var P=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],F=P[d];function W(X){var K=Z[X>>>2>>>0],lt=Z[X+4>>>2>>>0];return new F(w.buffer,lt,K)}T=it(T),nt(u,{name:T,fromWireType:W,readValueFromPointer:W},{ignoreDuplicateRegistrations:!0})}var tf=Object.assign({optional:!0},oi);function ef(u,d){u>>>=0,d>>>=0,nt(u,tf)}var nf=(u,d,T,P)=>{if(T>>>=0,!(P>0))return 0;for(var F=T,W=T+P-1,X=0;X<u.length;++X){var K=u.codePointAt(X);if(K<=127){if(T>=W)break;d[T++>>>0]=K}else if(K<=2047){if(T+1>=W)break;d[T++>>>0]=192|K>>6,d[T++>>>0]=128|K&63}else if(K<=65535){if(T+2>=W)break;d[T++>>>0]=224|K>>12,d[T++>>>0]=128|K>>6&63,d[T++>>>0]=128|K&63}else{if(T+3>=W)break;d[T++>>>0]=240|K>>18,d[T++>>>0]=128|K>>12&63,d[T++>>>0]=128|K>>6&63,d[T++>>>0]=128|K&63,X++}}return d[T>>>0]=0,T-F},sf=(u,d,T)=>nf(u,B,d,T),rf=u=>{for(var d=0,T=0;T<u.length;++T){var P=u.charCodeAt(T);P<=127?d++:P<=2047?d+=2:P>=55296&&P<=57343?(d+=4,++T):d+=3}return d},bh=globalThis.TextDecoder&&new TextDecoder,wh=(u,d,T,P)=>{var F=d+T;if(P)return F;for(;u[d]&&!(d>=F);)++d;return d},of=(u,d=0,T,P)=>{d>>>=0;var F=wh(u,d,T,P);if(F-d>16&&u.buffer&&bh)return bh.decode(u.subarray(d,F));for(var W="";d<F;){var X=u[d++];if(!(X&128)){W+=String.fromCharCode(X);continue}var K=u[d++]&63;if((X&224)==192){W+=String.fromCharCode((X&31)<<6|K);continue}var lt=u[d++]&63;if((X&240)==224?X=(X&15)<<12|K<<6|lt:X=(X&7)<<18|K<<12|lt<<6|u[d++]&63,X<65536)W+=String.fromCharCode(X);else{var pt=X-65536;W+=String.fromCharCode(55296|pt>>10,56320|pt&1023)}}return W},af=(u,d,T)=>(u>>>=0,u?of(B,u,d,T):"");function lf(u,d){u>>>=0,d>>>=0,d=it(d);var T=!0;nt(u,{name:d,fromWireType(P){var F=Z[P>>>2>>>0],W=P+4,X;if(T)X=af(W,F,!0);else{X="";for(var K=0;K<F;++K)X+=String.fromCharCode(B[W+K>>>0])}return yi(P),X},toWireType(P,F){F instanceof ArrayBuffer&&(F=new Uint8Array(F));var W,X=typeof F=="string";X||ArrayBuffer.isView(F)&&F.BYTES_PER_ELEMENT==1||dt("Cannot pass non-string to std::string"),T&&X?W=rf(F):W=F.length;var K=Hl(4+W+1),lt=K+4;if(Z[K>>>2>>>0]=W,X)if(T)sf(F,lt,W+1);else for(var pt=0;pt<W;++pt){var xt=F.charCodeAt(pt);xt>255&&(yi(K),dt("String has UTF-16 code units that do not fit in 8 bits")),B[lt+pt>>>0]=xt}else B.set(F,lt>>>0);return P!==null&&P.push(yi,K),K},readValueFromPointer:Tt,destructorFunction(P){yi(P)}})}var Eh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,cf=(u,d,T)=>{var P=u>>>1,F=wh(k,P,d/2,T);if(F-P>16&&Eh)return Eh.decode(k.subarray(P>>>0,F>>>0));for(var W="",X=P;X<F;++X){var K=k[X>>>0];W+=String.fromCharCode(K)}return W},hf=(u,d,T)=>{if(T??=2147483647,T<2)return 0;T-=2;for(var P=d,F=T<u.length*2?T/2:u.length,W=0;W<F;++W){var X=u.charCodeAt(W);D[d>>>1>>>0]=X,d+=2}return D[d>>>1>>>0]=0,d-P},uf=u=>u.length*2,df=(u,d,T)=>{for(var P="",F=u>>>2,W=0;!(W>=d/4);W++){var X=Z[F+W>>>0];if(!X&&!T)break;P+=String.fromCodePoint(X)}return P},ff=(u,d,T)=>{if(d>>>=0,T??=2147483647,T<4)return 0;for(var P=d,F=P+T-4,W=0;W<u.length;++W){var X=u.codePointAt(W);if(X>65535&&W++,G[d>>>2>>>0]=X,d+=4,d+4>F)break}return G[d>>>2>>>0]=0,d-P},pf=u=>{for(var d=0,T=0;T<u.length;++T){var P=u.codePointAt(T);P>65535&&T++,d+=4}return d};function mf(u,d,T){u>>>=0,d>>>=0,T>>>=0,T=it(T);var P,F,W;d===2?(P=cf,F=hf,W=uf):(P=df,F=ff,W=pf),nt(u,{name:T,fromWireType:X=>{var K=Z[X>>>2>>>0],lt=P(X+4,K*d,!0);return yi(X),lt},toWireType:(X,K)=>{typeof K!="string"&&dt(`Cannot pass non-string to C++ string type ${T}`);var lt=W(K),pt=Hl(4+lt+d);return Z[pt>>>2>>>0]=lt/d,F(K,pt+4,lt+d),X!==null&&X.push(yi,pt),pt},readValueFromPointer:Tt,destructorFunction(X){yi(X)}})}function gf(u,d,T,P,F,W){u>>>=0,d>>>=0,T>>>=0,P>>>=0,F>>>=0,W>>>=0,Ae[u]={name:it(d),rawConstructor:Y(T,P),rawDestructor:Y(F,W),fields:[]}}function _f(u,d,T,P,F,W,X,K,lt,pt){u>>>=0,d>>>=0,T>>>=0,P>>>=0,F>>>=0,W>>>=0,X>>>=0,K>>>=0,lt>>>=0,pt>>>=0,Ae[u].fields.push({fieldName:it(d),getterReturnType:T,getter:Y(P,F),getterContext:W,setterArgumentType:X,setter:Y(K,lt),setterContext:pt})}var xf=function(u,d){u>>>=0,d>>>=0,d=it(d),nt(u,{isVoid:!0,name:d,fromWireType:()=>{},toWireType:(T,P)=>{}})};function vf(u,d){u>>>=0,d>>>=0,u=Kt.toValue(u),d=Kt.toValue(d),u.set(d)}var zl=[],yf=u=>{var d=zl.length;return zl.push(u),d},Sf=(u,d)=>{for(var T=new Array(u),P=0;P<u;++P)T[P]=ve(Z[d+P*4>>>2>>>0],`parameter ${P}`);return T},Mf=(u,d,T)=>{var P=[],F=u(P,T);return P.length&&(Z[d>>>2>>>0]=Kt.toHandle(P)),F},bf={},Th=u=>{var d=bf[u];return d===void 0?it(u):d},wf=function(u,d,T){d>>>=0;var P=8,[F,...W]=Sf(u,d),X=F.toWireType.bind(F),K=W.map(Ct=>Ct.readValueFromPointer.bind(Ct));u--;var lt=new Array(u),pt=(Ct,Nt,Gt,qt)=>{for(var ee=0,he=0;he<u;++he)lt[he]=K[he](qt+ee),ee+=P;var L;switch(T){case 0:L=Kt.toValue(Ct).apply(null,lt);break;case 2:L=Reflect.construct(Kt.toValue(Ct),lt);break;case 3:L=lt[0];break;case 1:L=Kt.toValue(Ct)[Th(Nt)](...lt);break}return Mf(X,Gt,L)},xt=`methodCaller<(${W.map(Ct=>Ct.name)}) => ${F.name}>`;return yf(In(xt,pt))};function Ef(u,d){return u>>>=0,d>>>=0,u=Kt.toValue(u),d=Kt.toValue(d),u==d}function Tf(u,d){return u>>>=0,d>>>=0,u=Kt.toValue(u),d=Kt.toValue(d),Kt.toHandle(u[d])}function Af(u){u>>>=0,u>9&&(Ft[u+1]+=1)}function Cf(u,d,T,P,F){return u>>>=0,d>>>=0,T>>>=0,P>>>=0,F>>>=0,zl[u](d,T,P,F)}function Rf(u){return u>>>=0,Kt.toHandle(Th(u))}function Pf(){return Kt.toHandle({})}function If(u){u>>>=0;var d=Kt.toValue(u);Ie(d),en(u)}function Lf(u,d,T){u>>>=0,d>>>=0,T>>>=0,u=Kt.toValue(u),d=Kt.toValue(d),T=Kt.toValue(T),u[d]=T}var Df=()=>4294901760,Nf=(u,d)=>Math.ceil(u/d)*d,Uf=u=>{var d=To.buffer.byteLength,T=(u-d+65535)/65536|0;try{return To.grow(T),tt(),1}catch{}};function Ff(u){u>>>=0;var d=B.length,T=Df();if(u>T)return!1;for(var P=1;P<=4;P*=2){var F=d*(1+.2/P);F=Math.min(F,u+100663296);var W=Math.min(T,Nf(Math.max(u,F),65536)),X=Uf(W);if(X)return!0}return!1}var Of=(u,d)=>{if(cs)for(var T=u;T<u+d;T++){var P=z(T);P&&cs.set(P,T)}},cs,Bf=u=>(cs||(cs=new WeakMap,Of(0,Mr.length)),cs.get(u)||0),kl=[],zf=()=>kl.length?kl.pop():Mr.grow(1),Vl=(u,d)=>Mr.set(u,d),Ah=u=>{let d=u.length;return[d%128|128,d>>7,...u]},kf={i:127,p:127,j:126,f:125,d:124,e:111},Ch=u=>Ah(Array.from(u,d=>{var T=kf[d];return T})),Vf=(u,d)=>{var T=Uint8Array.of(0,97,115,109,1,0,0,0,1,...Ah([1,96,...Ch(d.slice(1)),...Ch(d[0]==="v"?"":d[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),P=new WebAssembly.Module(T),F=new WebAssembly.Instance(P,{e:{f:u}}),W=F.exports.f;return W},hs=(u,d)=>{var T=Bf(u);if(T)return T;var P=zf();try{Vl(P,u)}catch(W){if(!(W instanceof TypeError))throw W;var F=Vf(u,d);Vl(P,F)}return cs.set(u,P),P},us=u=>{cs.delete(z(u)),Vl(u,null),kl.push(u)};if(Me(),Bl(),e.noExitRuntime&&(kn=e.noExitRuntime),e.print&&(m=e.print),e.printErr&&(M=e.printErr),e.wasmBinary&&(C=e.wasmBinary),e.arguments&&(c=e.arguments),e.thisProgram&&(l=e.thisProgram),e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.shift()();e.addFunction=hs,e.removeFunction=us;var Rh,Hl,yi,Hf,Gf,To,Mr;function Wf(u){Rh=u.K,Hl=u.M,yi=u.N,Hf=To=u.I,Gf=Mr=u.L}var Xf={l:H,C:Tn,q:_t,z:U,G:ct,j:Lt,i:qe,a:Re,E:ln,x:vi,d:nn,y:Fe,c:Ke,p:Yn,m:jd,h:Qd,n:ef,F:lf,w:mf,r:gf,k:_f,H:xf,u:vf,g:wf,b:en,o:Ef,B:Tf,t:Af,f:Cf,s:Rf,A:Pf,e:If,v:Lf,D:Ff};function Yf(u){u=Object.assign({},u);var d=P=>F=>P(F)>>>0,T=P=>()=>P()>>>0;return u.K=d(u.K),u.M=d(u.M),u._emscripten_stack_alloc=d(u._emscripten_stack_alloc),u.emscripten_stack_get_current=T(u.emscripten_stack_get_current),u}function qf(){ht();function u(){e.calledRun=!0,!E&&(mt(),A?.(e),e.onRuntimeInitialized?.(),Ot())}e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1),u()},1)):u()}var ds;return ds=await Qt(),qf(),ft?t=e:t=new Promise((u,d)=>{A=u,x=d}),t}var kd=$x;var yt=i=>document.getElementById(i),rs,Gn,ii,Wn,Ps,zn,_r,si,ue=wl(),xn=null,an=!1,Bi=[],_o=[],xr=[],ri=[],Vd,$d="little-cad-project-v1",xo=i=>structuredClone(i),Xn=()=>ue.pieces.find(i=>i.id===xn);function vr(i){yt("toast").textContent=i,yt("toast").hidden=!1,clearTimeout(Vd),Vd=setTimeout(()=>yt("toast").hidden=!0,6500)}function os(i){console.error(i),vr(i.message||String(i))}function Ul(){try{localStorage.setItem($d,JSON.stringify(ue)),yt("save-state").textContent="Saved on this browser"}catch{yt("save-state").textContent="Browser storage full \u2014 use Save project"}}function _n(i){let t=xo(ue),e=xn;try{return i(),Oi(ue),_i(),Bi.push(t),Bi.length>20&&Bi.shift(),_o=[],Ul(),yh(),!0}catch(n){return ue=t,xn=e,_i(),os(n),!1}}function yh(){yt("undo").disabled=!Bi.length,yt("redo").disabled=!_o.length}function vh(i){let t=i?Bi:_o,e=i?_o:Bi;t.length&&(e.push(xo(ue)),ue=t.pop(),xn=null,an=!1,_i(),Ul(),yh())}function Hd(i,t,e){let n=URL.createObjectURL(new Blob([i],{type:e})),s=document.createElement("a");s.href=n,s.download=t,document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}var Gd=()=>ue.name.replace(/[^a-z0-9_-]+/gi,"-").replace(/^-|-$/g,"")||"little-cad";function Wd(i){let t=Tl(i),e=new He;return e.setAttribute("position",new xe(t.positions,3)),e.setIndex(t.indices),e.computeVertexNormals(),e}function Zx(){zn.detach(),si?.removeFromParent(),si?.dispose(),si=null;for(let i of xr)i.geometry.dispose(),i.material.dispose();xr=[],_r.clear()}function _i(){if(Zx(),an&&ue.pieces.length){let i=rs.result(ue.pieces);try{let t=new Ut(Wd(i),new rr({flatShading:!0,color:gr[0],roughness:.47,metalness:.06}));_r.add(t),xr.push(t);let e=i.boundingBox(),n=e.max.map((s,r)=>s-e.min[r]);yt("model-stats").textContent=`${n.map(s=>s.toFixed(2)).join(" \xD7 ")} mm \xB7 ${i.volume().toFixed(1)} mm\xB3`}finally{i.delete()}}else{for(let i of ue.pieces){let t=rs.build(i),e;try{e=Wd(t)}finally{t.delete()}e.translate(-i.position[0],-i.position[1],-i.position[2]);let n=new Ut(e,new rr({flatShading:!0,color:i.hole?"#d79783":i.color,transparent:i.hole,opacity:i.hole?.24:1,depthWrite:!i.hole,depthTest:!i.hole,roughness:.5,metalness:.05,side:Cn}));n.position.fromArray(i.position),n.userData.id=i.id,_r.add(n),xr.push(n)}yt("model-stats").textContent=`${ue.pieces.filter(i=>!i.hole).length} solids \xB7 ${ue.pieces.filter(i=>i.hole).length} holes \xB7 mm`}yt("empty-hint").hidden=ue.pieces.length>0,yt("project-name").value=ue.name,yt("edit-mode").classList.toggle("active",!an),yt("preview-mode").classList.toggle("active",an),yt("view-title").textContent=an?"FINISHED RESULT":"BUILD VIEW",yt("status").textContent=an?"All solid pieces joined; all holes subtracted.":"Select a piece to move it. Hole shapes cut through overlapping solids.",Jd(),Kd(),Zd(),yh()}function Zd(){zn.detach(),si?.removeFromParent(),si?.dispose(),si=null;let i=xr.find(t=>t.userData.id===xn);i&&!an&&(zn.attach(i),si=new Jr(i,6065279),si.material.transparent=!0,si.material.opacity=.5,ii.add(si))}function Sh(i){xn=i,Jd(),Kd(),Zd()}function Jd(){yt("pieces").replaceChildren(),yt("piece-count").textContent=ue.pieces.length;for(let i of ue.pieces){let t=document.createElement("button");t.className="piece-row"+(i.id===xn?" active":"");let e=document.createElement("span");e.className="piece-dot",e.style.background=i.hole?"repeating-linear-gradient(45deg,#d6a795,#d6a795 2px,transparent 2px,transparent 4px)":i.color;let n=document.createElement("span");n.className="name",n.textContent=i.name;let s=document.createElement("small");s.textContent=i.hole?"HOLE":"SOLID",t.append(e,n,s),t.onclick=()=>{an&&(an=!1,_i()),Sh(i.id)},yt("pieces").append(t)}}function Kd(){let i=Xn();if(yt("no-selection").hidden=!!i,yt("properties").hidden=!i,!i)return;yt("piece-name").value=i.name,yt("solid-mode").classList.toggle("active",!i.hole),yt("hole-mode").classList.toggle("active",i.hole),yt("hole-note").textContent=i.hole?"Cuts every solid it overlaps in Result preview and STL export.":"Adds material to your finished model.";for(let[e,n,s]of[["dimension-fields","size",["Width X","Depth Y","Height Z"]],["position-fields","position",["X","Y","Bottom Z"]],["rotation-fields","rotation",["X","Y","Z"]]])yt(e).replaceChildren(),s.forEach((r,o)=>{let a=document.createElement("label");a.textContent=r;let c=document.createElement("input");c.type="number",c.step=n==="rotation"?1:.1,c.value=Number(i[n][o].toFixed(4)),c.setAttribute("aria-label",`${n} ${s[o]}`),n==="size"&&(c.min=.01),c.onchange=()=>_n(()=>{let l=Number(c.value);if(c.value===""||!Number.isFinite(l))throw Error("Enter a valid number.");i[n][o]=l}),a.append(c),yt(e).append(a)});yt("colors").replaceChildren(),gr.forEach(e=>{let n=document.createElement("button");n.style.background=e,n.title=`Color ${e}`,n.setAttribute("aria-label",n.title),n.classList.toggle("active",e===i.color),n.onclick=()=>_n(()=>i.color=e),yt("colors").append(n)});let t=yt("stack-target").value;yt("stack-target").replaceChildren();for(let e of ue.pieces.filter(n=>n.id!==i.id&&!n.hole)){let n=document.createElement("option");n.value=e.id,n.textContent=e.name,yt("stack-target").append(n)}[...yt("stack-target").options].some(e=>e.value===t)&&(yt("stack-target").value=t),yt("stack").disabled=!yt("stack-target").options.length}function Is(i="iso"){let t=new jn().setFromObject(_r);t.isEmpty()&&(t.min.set(-15,-15,0),t.max.set(15,15,25));let e=t.getCenter(new O),n=t.getSize(new O),s=oo.degToRad(Wn.fov),r=2*Math.atan(Math.tan(s/2)*Wn.aspect),o=Math.max(n.length()/2,8)/Math.sin(Math.min(s,r)/2)*1.25,a={iso:[1.2,-1.6,1.2],top:[0,0,1],front:[0,-1,0],right:[1,0,0]},c=new O(...a[i]||a.iso).normalize();Wn.up.set(0,i==="top"?1:0,i==="top"?0:1),Wn.position.copy(e).addScaledVector(c,o),Ps.target.copy(e),Ps.update(),document.querySelectorAll("[data-view]").forEach(l=>l.classList.toggle("active",l.dataset.view===i))}function Mh(i){return _n(()=>{an=!1,ue.pieces.push(i),xn=i.id})}function Xd(){let i=Xn();i&&Mh({...xo(i),id:crypto.randomUUID(),name:i.name+" copy",position:[i.position[0]+i.size[0]+2,i.position[1],i.position[2]]})}function Yd(){Xn()&&_n(()=>{ue.pieces=ue.pieces.filter(i=>i.id!==xn),xn=null})}async function qd(i){if(i.length)try{let t=[];for(let e of i){let n=/\.(step|stp)$/i.test(e.name);if(!n&&!/\.stl$/i.test(e.name))throw Error("Choose an STL, STEP, or STP file.");if(e.size>25*1024*1024)throw Error("Please use a file smaller than 25 MB.");let s=e.name.replace(/\.(stl|step|stp)$/i,"");if(n){vr("Converting STEP to a mesh\u2026"),yt("status").textContent="Converting STEP locally\u2026";let r=await Pd(await e.arrayBuffer());t.push(Rd(r,s,rs))}else t.push(rs.importSTL(await e.arrayBuffer(),s))}if(!_n(()=>{an=!1,ue.pieces.push(...t),xn=t.at(-1).id}))return;Is(),vr(`Imported ${t.length} model(s) in millimeters. Use Export STL to download the result.`)}catch(t){os(t),yt("status").textContent="Import failed \u2014 see the message above."}}function Jx(){document.querySelectorAll("[data-shape]").forEach(t=>t.onclick=()=>Mh(mi(t.dataset.shape,{color:gr[ue.pieces.length%gr.length]}))),yt("piece-name").onchange=()=>_n(()=>Xn().name=yt("piece-name").value.trim()||"Piece"),yt("project-name").onchange=()=>_n(()=>ue.name=yt("project-name").value.trim()||"Untitled"),yt("solid-mode").onclick=()=>_n(()=>Xn().hole=!1),yt("hole-mode").onclick=()=>_n(()=>Xn().hole=!0),yt("duplicate").onclick=Xd,yt("delete").onclick=Yd,yt("center").onclick=()=>_n(()=>{Xn().position[0]=0,Xn().position[1]=0}),yt("ground").onclick=()=>_n(()=>Xn().position[2]=0),yt("stack").onclick=()=>_n(()=>{let t=Xn(),e=ue.pieces.find(s=>s.id===yt("stack-target").value);if(!e)throw Error("Choose a piece to stack on.");let n=rs.build(e);try{t.position=[e.position[0],e.position[1],n.boundingBox().max[2]]}finally{n.delete()}}),yt("bake").onclick=()=>_n(()=>{let t=rs.result(ue.pieces);try{let e=t.boundingBox(),n=mi("mesh",{name:"Combined model",mesh:Tl(t),size:e.max.map((s,r)=>s-e.min[r]),position:[(e.min[0]+e.max[0])/2,(e.min[1]+e.max[1])/2,e.min[2]]});ue.pieces=[n],xn=n.id,an=!1}finally{t.delete()}}),yt("edit-mode").onclick=()=>{an=!1,_i()},yt("preview-mode").onclick=()=>{try{an=!0,_i()}catch(t){an=!1,_i(),os(t)}},yt("undo").onclick=()=>vh(!0),yt("redo").onclick=()=>vh(!1),yt("snap").onchange=()=>zn.setTranslationSnap(Number(yt("snap").value)||null),yt("fit").onclick=()=>Is(),document.querySelectorAll("[data-view]").forEach(t=>t.onclick=()=>Is(t.dataset.view)),yt("new").onclick=()=>{ue.pieces.length&&!confirm("Start a new project? Save a project file first if you want a backup. You can also undo this action.")||(_n(()=>{ue={version:1,name:"Untitled",pieces:[]},xn=null,an=!1}),Is())},yt("example").onclick=()=>{ue.pieces.length&&!confirm("Replace the workspace with the capped sleeve example? You can undo this action.")||(_n(()=>{ue=wl(),xn=ue.pieces[0].id,an=!1}),Is())},yt("export").onclick=()=>{try{let t=rs.result(ue.pieces);try{Hd(Cd(t),Gd()+".stl","model/stl"),vr("STL exported in millimeters. Import it into Bambu Studio to slice.")}finally{t.delete()}}catch(t){os(t)}},yt("save").onclick=()=>{Hd(JSON.stringify(ue,null,2),Gd()+".littlecad","application/json"),vr("Editable project saved.")},yt("open").onclick=()=>yt("project-file").click(),yt("project-file").onchange=async t=>{try{let e=t.target.files[0];if(!e)return;if(e.size>50*1024*1024)throw Error("Project file exceeds 50 MB.");let n=Oi(JSON.parse(await e.text()));_n(()=>{ue=n,xn=null,an=!1}),Is()}catch(e){os(e)}finally{t.target.value=""}},yt("import").onclick=()=>yt("stl-file").click(),yt("stl-file").onchange=async t=>{await qd([...t.target.files]),t.target.value=""};let i=yt("viewport");i.ondragover=t=>{t.preventDefault()},i.ondrop=t=>{t.preventDefault(),qd([...t.dataTransfer.files])},yt("help").onclick=()=>yt("help-dialog").showModal(),document.querySelectorAll("[data-close]").forEach(t=>t.onclick=()=>yt(t.dataset.close).close()),document.addEventListener("keydown",t=>{["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName)||document.querySelector("dialog[open]")||((t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="z"?(t.preventDefault(),vh(!t.shiftKey)):(t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="d"?(t.preventDefault(),Xd()):t.key==="Delete"||t.key==="Backspace"?(t.preventDefault(),Yd()):t.key==="Escape"&&Sh(null))}),jx()}function go(){let i=yt("sketch-lines");i.replaceChildren();let t="http://www.w3.org/2000/svg";if(ri.length){let e=document.createElementNS(t,"polygon");e.setAttribute("points",ri.map(([n,s])=>`${200+n*4},${200-s*4}`).join(" ")),e.setAttribute("fill","#79a99844"),e.setAttribute("stroke","#3a8d79"),e.setAttribute("stroke-width","2"),i.append(e)}ri.forEach(([e,n])=>{let s=document.createElementNS(t,"circle");s.setAttribute("cx",200+e*4),s.setAttribute("cy",200-n*4),s.setAttribute("r",3),s.setAttribute("fill","#21796c"),i.append(s)}),yt("profile-info").textContent=`${ri.length} points \xB7 ${ri.length<3?"minimum 3":"closed profile"}`}function Kx(){let i=yt("profile-preset").value,t=Number(yt("profile-width").value),e=Number(yt("profile-depth").value);if(i!=="custom"&&!(!Number.isFinite(t)||t<=0||!Number.isFinite(e)||e<=0)){if(i==="rectangle")ri=[[-t/2,-e/2],[t/2,-e/2],[t/2,e/2],[-t/2,e/2]];else{let n=i==="circle"?128:6;ri=Array.from({length:n},(s,r)=>[Math.cos(r*2*Math.PI/n)*t/2,Math.sin(r*2*Math.PI/n)*t/2])}go()}}function jx(){yt("sketch").onclick=()=>{yt("sketch-dialog").showModal(),go()},yt("sketch-canvas").onclick=i=>{let t=i.currentTarget.getBoundingClientRect(),e=Math.round(((i.clientX-t.left)*400/t.width-200)/4),n=Math.round((200-(i.clientY-t.top)*400/t.height)/4);yt("profile-preset").value="custom",ri.push([e,n]),go()},yt("clear-profile").onclick=()=>{ri=[],yt("profile-preset").value="custom",go()},yt("undo-point").onclick=()=>{ri.pop(),yt("profile-preset").value="custom",go()},["profile-preset","profile-width","profile-depth"].forEach(i=>yt(i).onchange=Kx),yt("extrude").onclick=()=>{try{let i=El(ri),t=Number(yt("profile-height").value);if(t<.01||!Number.isFinite(t))throw Error("Enter a positive extrusion height.");let e=i.map(r=>r[0]),n=i.map(r=>r[1]),s=mi("profile",{name:"Extruded profile",points:xo(i),size:[Math.max(...e)-Math.min(...e),Math.max(...n)-Math.min(...n),t],hole:yt("profile-operation").value==="hole"});Oi({version:1,name:"Profile",pieces:[s]}),Mh(s)&&yt("sketch-dialog").close()}catch(i){os(i)}}}async function Qx(){let i=await kd({locateFile:c=>new URL(c.endsWith(".wasm")?"manifold.wasm":c,location.href).href});i.setup(),rs=new bl(i);try{let c=localStorage.getItem($d);c&&(ue=Oi(JSON.parse(c)))}catch{vr("Could not restore the browser save. Starting with the sleeve example."),ue=wl()}let t=yt("viewport");ii=new Fr,ii.background=new ae("#eef2f3"),Wn=new Sn(35,t.clientWidth/t.clientHeight,.01,1e6),Wn.up.set(0,0,1),Gn=new vl({antialias:!0}),Gn.setPixelRatio(Math.min(devicePixelRatio,2)),Gn.setClearColor("#eef2f3"),t.append(Gn.domElement),ii.add(new Yr(16777215,8952723,2.5));let e=new or(16777215,3);e.position.set(30,-40,80),ii.add(e);let n=new or(14477823,1.5);n.position.set(-50,10,20),ii.add(n);let s=new Zr(200,40,12767953,14279394);s.rotation.x=Math.PI/2,s.position.z=-.02,ii.add(s);let r=new Kr(10);r.position.set(-95,-95,.01),ii.add(r),_r=new Ai,ii.add(_r),Ps=new Cl(Wn,Gn.domElement),Ps.enableDamping=!0,Ps.dampingFactor=.1,zn=new Dl(Wn,Gn.domElement),zn.setMode("translate"),zn.setSize(.8),zn.setTranslationSnap(1),ii.add(zn.getHelper());let o=null;zn.addEventListener("dragging-changed",c=>{if(Ps.enabled=!c.value,c.value)o=xo(ue);else if(o&&Xn()){let l=Xn(),h=zn.object.position.toArray(),p=o;o=null;try{l.position=h,Oi(ue),Bi.push(p),Bi.length>20&&Bi.shift(),_o=[],_i(),Ul()}catch(f){ue=p,_i(),os(f)}}}),zn.addEventListener("objectChange",()=>si?.update());let a;Gn.domElement.addEventListener("pointerdown",c=>a=[c.clientX,c.clientY]),Gn.domElement.addEventListener("pointerup",c=>{if(an||zn.axis||!a||Math.hypot(c.clientX-a[0],c.clientY-a[1])>4)return;let l=Gn.domElement.getBoundingClientRect(),h=new Ss;h.setFromCamera(new Jt((c.clientX-l.left)/l.width*2-1,-(c.clientY-l.top)/l.height*2+1),Wn),Sh(h.intersectObjects(xr)[0]?.object.userData.id||null)}),new ResizeObserver(()=>{let c=t.clientWidth,l=t.clientHeight;Wn.aspect=c/l,Wn.updateProjectionMatrix(),Gn.setSize(c,l)}).observe(t),Jx(),xn=ue.pieces[0]?.id||null,_i(),Is(),Ul(),yt("loading").hidden=!0,Gn.setAnimationLoop(()=>{Ps.update(),Gn.render(ii,Wn)})}Qx().catch(i=>{yt("loading").textContent="Could not start the 3D workbench. Please use a browser with WebGL enabled and launch with Start.command.",os(i)});
/*! For license information please see app.js.LEGAL.txt */
