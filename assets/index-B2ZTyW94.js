const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/midi-scheduler-Ccx57CZv.js","assets/midi-port-j4yEQXsd.js","assets/midi-gesture-Bi9mBb5j.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const sd="modulepreload",ad=function(i){return"/Cartofreq/"+i},ll={},oi=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let c=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=c(e.map(l=>{if(l=ad(l),l in ll)return;ll[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":sd,h||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),h)return new Promise((m,g)=>{u.addEventListener("load",m),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};const To="187",In={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,cl=1,ld=2,us=1,cd=2,hr=3,gi=0,Ze=1,rn=2,Gi=0,_r=1,ya=2,ul=3,dl=4,ud=5,Bi=100,dd=101,hd=102,fd=103,pd=104,md=200,gd=201,_d=202,vd=203,Fc=204,Oc=205,xd=206,Sd=207,Md=208,yd=209,Ed=210,bd=211,Td=212,wd=213,Ad=214,Ea=0,ba=1,Ta=2,Sr=3,wa=4,Aa=5,Ra=6,Ca=7,Bc=0,Rd=1,Cd=2,Nn=0,zc=1,kc=2,Hc=3,Gc=4,Vc=5,Wc=6,Xc=7,qc=300,Yi=301,Mr=302,Bs=303,zs=304,Pa=1e3,Dn=1001,La=1002,Ue=1003,Pd=1004,Cr=1005,$e=1006,ks=1007,qn=1008,tn=1009,Yc=1010,Kc=1011,yr=1012,wo=1013,En=1014,xn=1015,bn=1016,Ao=1017,Ro=1018,Ki=1020,$c=35902,Zc=35899,Jc=1021,Qc=1022,Sn=1023,Zn=1026,Yn=1027,jc=1028,Co=1029,_i=1030,Po=1031,Lo=1033,ds=33776,hs=33777,fs=33778,ps=33779,Da=35840,Ia=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,Ss=37490,Ha=37491,Ga=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Ka=37814,$a=37815,Za=37816,Ja=37817,Qa=37818,ja=37819,to=37820,eo=37821,no=36492,io=36494,ro=36495,so=36283,ao=36284,Ms=36285,oo=36286,Ld=3200,lo=0,Dd=1,Xn="",qe="srgb",ys="srgb-linear",Es="linear",ie="srgb",Hs=7680,Id=519,Nd=512,Ud=513,Fd=514,tu=515,Od=516,Bd=517,eu=518,nu=519,iu=35044,hl="300 es",hn=2e3,Er=2001;function zd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kd(){const i=bs("canvas");return i.style.display="block",i}const fl={};function Ts(...i){const t="THREE."+i.shift();console.log(t,...i)}function ru(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=ru(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=ru(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ms(...i){const t=i.join(" ");t in fl||(fl[t]=!0,Ot(...i))}function Hd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Gd={[Ea]:Ea,[Ta]:Ra,[wa]:wa,[Sr]:Aa,[ba]:ba,[Ra]:Ta,[Ca]:Ca,[Aa]:Sr};class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const Vi=Math.PI/180,br=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function Do(i,t){return(i%t+t)%t}function Vd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Wd(i,t,e){return i!==t?(e-i)/(t-i):0}function vr(i,t,e){return(1-e)*i+e*t}function Xd(i,t,e,n){return vr(i,t,1-Math.exp(-e*n))}function qd(i,t=1){return t-Math.abs(Do(i,t*2)-t)}function Yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $d(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zd(i,t){return i+Math.random()*(t-i)}function Jd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(pl=i);let t=pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jd(i){return i*Vi}function th(i){return i*br}function eh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function nh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function su(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ih(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*h,o*l);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ls(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Io(i,t){if(t.constructor===Float32Array)return i;const e=Ls(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function No(i,t){if(t.constructor===Float32Array)return i;const e=Ls(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const au={DEG2RAD:Vi,RAD2DEG:br,generateUUID:ni,clamp:Ht,euclideanModulo:Do,mapLinear:Vd,inverseLerp:Wd,lerp:vr,damp:Xd,pingpong:qd,smoothstep:Yd,smootherstep:Kd,randInt:$d,randFloat:Zd,randFloatSpread:Jd,seededRandom:Qd,degToRad:jd,radToDeg:th,isPowerOfTwo:eh,ceilPowerOfTwo:nh,floorPowerOfTwo:su,setQuaternionFromProperEuler:ih,normalize:No,denormalize:Io},Yo=class Yo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yo.prototype.isVector2=!0;let Ft=Yo;class Jn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],m=s[a+1],g=s[a+2],S=s[a+3];if(d!==S||c!==u||l!==m||h!==g){let f=c*u+l*m+h*g+d*S;f<0&&(u=-u,m=-m,g=-g,S=-S,f=-f);let p=1-o;if(f<.9995){const b=Math.acos(f),R=Math.sin(b);p=Math.sin(p*b)/R,o=Math.sin(o*b)/R,c=c*p+u*o,l=l*p+m*o,h=h*p+g*o,d=d*p+S*o}else{c=c*p+u*o,l=l*p+m*o,h=h*p+g*o,d=d*p+S*o;const b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*d+c*m-l*u,t[e+1]=c*g+h*u+l*d-o*m,t[e+2]=l*g+h*m+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),u=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ko=class Ko{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ko.prototype.isVector3=!0;let k=Ko;const Gs=new k,ml=new Jn,$o=class $o{constructor(t,e,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],S=r[0],f=r[3],p=r[6],b=r[1],R=r[4],M=r[7],E=r[2],C=r[5],_=r[8];return s[0]=a*S+o*b+c*E,s[3]=a*f+o*R+c*C,s[6]=a*p+o*M+c*_,s[1]=l*S+h*b+d*E,s[4]=l*f+h*R+d*C,s[7]=l*p+h*M+d*_,s[2]=u*S+m*b+g*E,s[5]=u*f+m*R+g*C,s[8]=u*p+m*M+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,m=l*s-a*c,g=e*d+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=d*S,t[1]=(r*l-h*n)*S,t[2]=(o*n-r*a)*S,t[3]=u*S,t[4]=(h*e-r*c)*S,t[5]=(r*s-o*e)*S,t[6]=m*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vs.makeScale(t,e)),this}rotate(t){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vs.makeRotation(-t)),this}translate(t,e){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$o.prototype.isMatrix3=!0;let zt=$o;const Vs=new zt,gl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rh(){const i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ie&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?Es:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:t,whitePoint:n,transfer:Es,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}const Jt=rh();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class sh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Si===void 0&&(Si=bs("canvas")),Si.width=t.width,Si.height=t.height;const r=Si.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Si}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Un(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ah=0;class Uo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ws(r[a].image)):s.push(Ws(r[a]))}else s=Ws(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let oh=0;const Xs=new k;class ke extends ei{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Dn,r=Dn,s=$e,a=qn,o=Sn,c=tn,l=ke.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ni(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xs).x}get height(){return this.source.getSize(Xs).y}get depth(){return this.source.getSize(Xs).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=qc;ke.DEFAULT_ANISOTROPY=1;const Zo=class Zo{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],S=c[2],f=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(l+1)/2,M=(m+1)/2,E=(p+1)/2,C=(h+u)/4,_=(d+S)/4,T=(g+f)/4;return R>M&&R>E?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=C/n,s=_/n):M>E?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=T/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=_/s,r=T/s),this.set(n,r,s,e),this}let b=Math.sqrt((f-g)*(f-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(d-S)/b,this.z=(u-h)/b,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zo.prototype.isVector4=!0;let se=Zo;class lh extends ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new ke({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Uo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends lh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ch extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ps=class Ps{constructor(t,e,n,r,s,a,o,c,l,h,d,u,m,g,S,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,d,u,m,g,S,f)}set(t,e,n,r,s,a,o,c,l,h,d,u,m,g,S,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=S,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ps().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Mi.setFromMatrixColumn(t,0).length(),s=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,m=a*d,g=o*h,S=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=u-S*l,e[9]=-o*c,e[2]=S-u*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,m=c*d,g=l*h,S=l*d;e[0]=u+S*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=S+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,m=c*d,g=l*h,S=l*d;e[0]=u-S*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,m=a*d,g=o*h,S=o*d;e[0]=c*h,e[4]=g*l-m,e[8]=u*l+S,e[1]=c*d,e[5]=S*l+u,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,m=a*l,g=o*c,S=o*l;e[0]=c*h,e[4]=S-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-S*d}else if(t.order==="XZY"){const u=a*c,m=a*l,g=o*c,S=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+S,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=S*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uh,t,dh)}lookAt(t,e,n){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),zn.crossVectors(n,Qe),zn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),zn.crossVectors(n,Qe)),zn.normalize(),Pr.crossVectors(Qe,zn),r[0]=zn.x,r[4]=Pr.x,r[8]=Qe.x,r[1]=zn.y,r[5]=Pr.y,r[9]=Qe.y,r[2]=zn.z,r[6]=Pr.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],S=n[6],f=n[10],p=n[14],b=n[3],R=n[7],M=n[11],E=n[15],C=r[0],_=r[4],T=r[8],V=r[12],U=r[1],G=r[5],J=r[9],P=r[13],y=r[2],I=r[6],B=r[10],L=r[14],W=r[3],F=r[7],X=r[11],tt=r[15];return s[0]=a*C+o*U+c*y+l*W,s[4]=a*_+o*G+c*I+l*F,s[8]=a*T+o*J+c*B+l*X,s[12]=a*V+o*P+c*L+l*tt,s[1]=h*C+d*U+u*y+m*W,s[5]=h*_+d*G+u*I+m*F,s[9]=h*T+d*J+u*B+m*X,s[13]=h*V+d*P+u*L+m*tt,s[2]=g*C+S*U+f*y+p*W,s[6]=g*_+S*G+f*I+p*F,s[10]=g*T+S*J+f*B+p*X,s[14]=g*V+S*P+f*L+p*tt,s[3]=b*C+R*U+M*y+E*W,s[7]=b*_+R*G+M*I+E*F,s[11]=b*T+R*J+M*B+E*X,s[15]=b*V+R*P+M*L+E*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],S=t[7],f=t[11],p=t[15],b=c*m-l*u,R=o*m-l*d,M=o*u-c*d,E=a*m-l*h,C=a*u-c*h,_=a*d-o*h;return e*(S*b-f*R+p*M)-n*(g*b-f*E+p*C)+r*(g*R-S*E+p*_)-s*(g*M-S*C+f*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(s*h-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],S=t[13],f=t[14],p=t[15],b=e*o-n*a,R=e*c-r*a,M=e*l-s*a,E=n*c-r*o,C=n*l-s*o,_=r*l-s*c,T=h*S-d*g,V=h*f-u*g,U=h*p-m*g,G=d*f-u*S,J=d*p-m*S,P=u*p-m*f,y=b*P-R*J+M*G+E*U-C*V+_*T;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/y;return t[0]=(o*P-c*J+l*G)*I,t[1]=(r*J-n*P-s*G)*I,t[2]=(S*_-f*C+p*E)*I,t[3]=(u*C-d*_-m*E)*I,t[4]=(c*U-a*P-l*V)*I,t[5]=(e*P-r*U+s*V)*I,t[6]=(f*M-g*_-p*R)*I,t[7]=(h*_-u*M+m*R)*I,t[8]=(a*J-o*U+l*T)*I,t[9]=(n*U-e*J-s*T)*I,t[10]=(g*C-S*M+p*b)*I,t[11]=(d*M-h*C-m*b)*I,t[12]=(o*V-a*G-c*T)*I,t[13]=(e*G-n*V+r*T)*I,t[14]=(S*R-g*E-f*b)*I,t[15]=(h*E-d*R+u*b)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,m=s*h,g=s*d,S=a*h,f=a*d,p=o*d,b=c*l,R=c*h,M=c*d,E=n.x,C=n.y,_=n.z;return r[0]=(1-(S+p))*E,r[1]=(m+M)*E,r[2]=(g-R)*E,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(u+p))*C,r[6]=(f+b)*C,r[7]=0,r[8]=(g+R)*_,r[9]=(f-b)*_,r[10]=(1-(u+S))*_,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Mi.set(r[0],r[1],r[2]).length();const o=Mi.set(r[4],r[5],r[6]).length(),c=Mi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),on.copy(this);const l=1/a,h=1/o,d=1/c;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=hn,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(n-r),u=(e+t)/(e-t),m=(n+r)/(n-r);let g,S;if(c)g=s/(a-s),S=a*s/(a-s);else if(o===hn)g=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Er)g=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=hn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-r),u=-(e+t)/(e-t),m=-(n+r)/(n-r);let g,S;if(c)g=1/(a-s),S=a/(a-s);else if(o===hn)g=-2/(a-s),S=-(a+s)/(a-s);else if(o===Er)g=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ps.prototype.isMatrix4=!0;let le=Ps;const Mi=new k,on=new le,uh=new k(0,0,0),dh=new k(1,1,1),zn=new k,Pr=new k,Qe=new k,vl=new le,xl=new Jn;class Qn{constructor(t=0,e=0,n=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hh=0;const Sl=new k,yi=new Jn,An=new le,Lr=new k,nr=new k,fh=new k,ph=new Jn,Ml=new k(1,0,0),yl=new k(0,1,0),El=new k(0,0,1),bl={type:"added"},mh={type:"removed"},Ei={type:"childadded",child:null},qs={type:"childremoved",child:null};class Me extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new k,e=new Qn,n=new Jn,r=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(Ml,t)}rotateY(t){return this.rotateOnAxis(yl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ml,t)}translateY(t){return this.translateOnAxis(yl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(nr,Lr,this.up):An.lookAt(Lr,nr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(An),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mh),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,fh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Me.DEFAULT_UP=new k(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gh={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const f=e.getJointPose(S,n),p=this._getHandJoint(l,S);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ks(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=Do(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ks(a,s,t+1/3),this.g=Ks(a,s,t),this.b=Ks(a,s,t-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(t,e=qe){function n(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Jt.workingToColorSpace(ze.copy(this),t),Math.round(Ht(ze.r*255,0,255))*65536+Math.round(Ht(ze.g*255,0,255))*256+Math.round(Ht(ze.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(ze.copy(this),e);const n=ze.r,r=ze.g,s=ze.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=qe){Jt.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,r=ze.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Dr);const n=vr(kn.h,Dr.h,e),r=vr(kn.s,Dr.s,e),s=vr(kn.l,Dr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Vt;Vt.NAMES=lu;class _h extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new k,Rn=new k,$s=new k,Cn=new k,bi=new k,Ti=new k,Tl=new k,Zs=new k,Js=new k,Qs=new k,js=new se,ta=new se,ea=new se;class en{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ln.subVectors(r,e),Rn.subVectors(n,e),$s.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(Rn),c=ln.dot($s),l=Rn.dot(Rn),h=Rn.dot($s),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,m=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return js.setScalar(0),ta.setScalar(0),ea.setScalar(0),js.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(js,s.x),a.addScaledVector(ta,s.y),a.addScaledVector(ea,s.z),a}static isFrontFacing(t,e,n,r){return ln.subVectors(n,e),Rn.subVectors(t,e),ln.cross(Rn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return en.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;bi.subVectors(r,n),Ti.subVectors(s,n),Zs.subVectors(t,n);const c=bi.dot(Zs),l=Ti.dot(Zs);if(c<=0&&l<=0)return e.copy(n);Js.subVectors(t,r);const h=bi.dot(Js),d=Ti.dot(Js);if(h>=0&&d<=h)return e.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(bi,a);Qs.subVectors(t,s);const m=bi.dot(Qs),g=Ti.dot(Qs);if(g>=0&&m<=g)return e.copy(s);const S=m*l-c*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ti,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Tl.subVectors(s,r),o=(d-h)/(d-h+(m-g)),e.copy(r).addScaledVector(Tl,o);const p=1/(f+S+u);return a=S*p,o=u*p,e.copy(n).addScaledVector(bi,a).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ii{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Nr.subVectors(this.max,ir),wi.subVectors(t.a,ir),Ai.subVectors(t.b,ir),Ri.subVectors(t.c,ir),Hn.subVectors(Ai,wi),Gn.subVectors(Ri,Ai),li.subVectors(wi,Ri);let e=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-li.z,li.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,li.z,0,-li.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-li.y,li.x,0];return!na(e,wi,Ai,Ri,Nr)||(e=[1,0,0,0,1,0,0,0,1],!na(e,wi,Ai,Ri,Nr))?!1:(Ur.crossVectors(Hn,Gn),e=[Ur.x,Ur.y,Ur.z],na(e,wi,Ai,Ri,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new k,new k,new k,new k,new k,new k,new k,new k],cn=new k,Ir=new ii,wi=new k,Ai=new k,Ri=new k,Hn=new k,Gn=new k,li=new k,ir=new k,Nr=new k,Ur=new k,ci=new k;function na(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ci.fromArray(i,s);const o=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const _e=new k,Fr=new Ft;let vh=0;class Kn extends ei{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=t!==void 0?Ls(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Io(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):No(t,this.array)}}class cu extends Kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uu extends Kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends Kn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const xh=new ii,rr=new k,ia=new k;class Ji{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(rr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(ia)),this.expandByPoint(rr.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Sh=0;const nn=new le,ra=new Me,Ci=new k,je=new ii,sr=new ii,we=new k;class Je extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zd(t)?uu:cu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(je.min,sr.min),je.expandByPoint(we),we.addVectors(je.max,sr.max),je.expandByPoint(we)):(je.expandByPoint(sr.min),je.expandByPoint(sr.max))}je.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)we.fromBufferAttribute(o,l),c&&(Ci.fromBufferAttribute(t,l),we.add(Ci)),r=Math.max(r,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let V=0;V<n.count;V++)o[V]=new k,c[V]=new k;const h=new k,d=new k,u=new k,m=new Ft,g=new Ft,S=new Ft,f=new k,p=new k;function b(V,U,G){l[V]=l[U]=l[G]=1,h.fromBufferAttribute(n,V),d.fromBufferAttribute(n,U),u.fromBufferAttribute(n,G),m.fromBufferAttribute(s,V),g.fromBufferAttribute(s,U),S.fromBufferAttribute(s,G),d.sub(h),u.sub(h),g.sub(m),S.sub(m);const J=1/(g.x*S.y-S.x*g.y);isFinite(J)&&(f.copy(d).multiplyScalar(S.y).addScaledVector(u,-g.y).multiplyScalar(J),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-S.x).multiplyScalar(J),o[V].add(f),o[U].add(f),o[G].add(f),c[V].add(p),c[U].add(p),c[G].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let V=0,U=R.length;V<U;++V){const G=R[V],J=G.start,P=G.count;for(let y=J,I=J+P;y<I;y+=3)b(t.getX(y+0),t.getX(y+1),t.getX(y+2))}const M=new k,E=new k,C=new k,_=new k;function T(V){C.fromBufferAttribute(r,V),_.copy(C);const U=o[V];M.copy(U),M.sub(C.multiplyScalar(C.dot(U))).normalize(),E.crossVectors(_,U);const J=E.dot(c[V])<0?-1:1;a.setXYZW(V,M.x,M.y,M.z,J)}for(let V=0,U=n.count;V<U;++V)l[V]&&T(V);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,h=new k,d=new k;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),S=t.getX(u+1),f=t.getX(u+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,f),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let S=0,f=c.length;S<f;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let p=0;p<h;p++)u[g++]=l[m++]}return new Kn(u,h,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class du{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=iu,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=wl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=wl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function wl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ni()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Ge=new k;class Mn{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r,this._normalizationScale=t!==void 0?Ls(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ts("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Kn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ts("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Io(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):No(t,this.data.array)}}const sa=new k,Mh=new k,yh=new zt;class un{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=sa.subVectors(n,e).cross(Mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(sa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yh.getNormalMatrix(t),r=this.coplanarPoint(sa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Eh=0;class xi extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=_r,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Oc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hu extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pi;const ar=new k,Li=new k,Di=new k,Ii=new Ft,or=new Ft,fu=new le,Or=new k,lr=new k,Br=new k,Al=new Ft,aa=new Ft,Rl=new Ft;class bh extends Me{constructor(t=new hu){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new du(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Mn(n,3,0,!1)),Pi.setAttribute("uv",new Mn(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new Ft(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;zr(Or.set(-.5,-.5,0),Di,a,Li,r,s),zr(lr.set(.5,-.5,0),Di,a,Li,r,s),zr(Br.set(.5,.5,0),Di,a,Li,r,s),Al.set(0,0),aa.set(1,0),Rl.set(1,1);let o=t.ray.intersectTriangle(Or,lr,Br,!1,ar);if(o===null&&(zr(lr.set(-.5,.5,0),Di,a,Li,r,s),aa.set(0,1),o=t.ray.intersectTriangle(Or,Br,lr,!1,ar),o===null))return;const c=t.ray.origin.distanceTo(ar);c<t.near||c>t.far||e.push({distance:c,point:ar.clone(),uv:en.getInterpolation(ar,Or,lr,Br,Al,aa,Rl,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function zr(i,t,e,n,r,s){Ii.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(or.x=s*Ii.x-r*Ii.y,or.y=r*Ii.x+s*Ii.y):or.copy(Ii),i.copy(t),i.x+=or.x,i.y+=or.y,i.applyMatrix4(fu)}const Ln=new k,oa=new k,kr=new k,Hr=new k;class Ds{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){oa.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Hr.copy(this.origin).sub(oa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(kr),o=Hr.dot(this.direction),c=-Hr.dot(kr),l=Hr.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const S=1/h;d*=S,u*=S,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(oa).addScaledVector(kr,u),m}intersectSphere(t,e){if(t.radius<0)return null;Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,S=e.y-a.y,f=e.z-a.z,p=n.x-a.x,b=n.y-a.y,R=n.z-a.z,M=Math.abs(c),E=Math.abs(l),C=Math.abs(h);let _,T,V,U,G,J,P,y,I,B,L,W;if(M>=E&&M>=C?(V=c,J=d,I=g,W=p,c>=0?(_=l,T=h,U=u,G=m,P=S,y=f,B=b,L=R):(_=h,T=l,U=m,G=u,P=f,y=S,B=R,L=b)):E>=C?(V=l,J=u,I=S,W=b,l>=0?(_=h,T=c,U=m,G=d,P=f,y=g,B=R,L=p):(_=c,T=h,U=d,G=m,P=g,y=f,B=p,L=R)):(V=h,J=m,I=f,W=R,h>=0?(_=c,T=l,U=d,G=u,P=g,y=S,B=p,L=b):(_=l,T=c,U=u,G=d,P=S,y=g,B=b,L=p)),V===0)return null;const F=_/V,X=T/V,tt=1/V,ot=U-F*J,Rt=G-X*J,Q=P-F*I,ht=y-X*I,_t=B-F*W,bt=L-X*W,pt=_t*ht-bt*Q,z=ot*bt-Rt*_t,w=Q*Rt-ht*ot;if(r){if(pt<0||z<0||w<0)return null}else if((pt<0||z<0||w<0)&&(pt>0||z>0||w>0))return null;const D=pt+z+w;if(D===0)return null;const $=tt*(pt*J+z*I+w*W);return(D>0?$<0:$>0)?null:this.at($/D,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cl=new le,ui=new Ds,Gr=new Ji,Pl=new k,Vr=new k,Wr=new k,Xr=new k,la=new k,qr=new k,Ll=new k,Yr=new k;class Re extends Me{constructor(t=new Je,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(la.fromBufferAttribute(d,t),a?qr.addScaledVector(la,h):qr.addScaledVector(la.sub(e),h))}e.add(qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(Gr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Gr,Pl)===null||ui.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Cl.copy(s).invert(),ui.copy(t.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const f=u[g],p=a[f.materialIndex],b=Math.max(f.start,m.start),R=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=b,E=R;M<E;M+=3){const C=o.getX(M),_=o.getX(M+1),T=o.getX(M+2);r=Kr(this,p,t,n,l,h,d,C,_,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let f=g,p=S;f<p;f+=3){const b=o.getX(f),R=o.getX(f+1),M=o.getX(f+2);r=Kr(this,a,t,n,l,h,d,b,R,M),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const f=u[g],p=a[f.materialIndex],b=Math.max(f.start,m.start),R=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let M=b,E=R;M<E;M+=3){const C=M,_=M+1,T=M+2;r=Kr(this,p,t,n,l,h,d,C,_,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let f=g,p=S;f<p;f+=3){const b=f,R=f+1,M=f+2;r=Kr(this,a,t,n,l,h,d,b,R,M),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Th(i,t,e,n,r,s,a,o){let c;if(t.side===Ze?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===gi,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Yr);return l<e.near||l>e.far?null:{distance:l,point:Yr.clone(),object:i}}function Kr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Vr),i.getVertexPosition(c,Wr),i.getVertexPosition(l,Xr);const h=Th(i,t,e,n,Vr,Wr,Xr,Ll);if(h){const d=new k;en.getBarycoord(Ll,Vr,Wr,Xr,d),r&&(h.uv=en.getInterpolatedAttribute(r,o,c,l,d,new Ft)),s&&(h.uv1=en.getInterpolatedAttribute(s,o,c,l,d,new Ft)),a&&(h.normal=en.getInterpolatedAttribute(a,o,c,l,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new k,materialIndex:0};en.getNormal(Vr,Wr,Xr,u.normal),h.face=u,h.barycoord=d}return h}class wh extends ke{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ue,h=Ue,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const di=new Ji,Ah=new Ft(.5,.5),$r=new k;class Tr{constructor(t=new un,e=new un,n=new un,r=new un,s=new un,a=new un){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],m=s[7],g=s[8],S=s[9],f=s[10],p=s[11],b=s[12],R=s[13],M=s[14],E=s[15];if(r[0].setComponents(l-a,m-h,p-g,E-b).normalize(),r[1].setComponents(l+a,m+h,p+g,E+b).normalize(),r[2].setComponents(l+o,m+d,p+S,E+R).normalize(),r[3].setComponents(l-o,m-d,p-S,E-R).normalize(),n)r[4].setComponents(c,u,f,M).normalize(),r[5].setComponents(l-c,m-u,p-f,E-M).normalize();else if(r[4].setComponents(l-c,m-u,p-f,E-M).normalize(),e===hn)r[5].setComponents(l+c,m+u,p+f,E+M).normalize();else if(e===Er)r[5].setComponents(c,u,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){di.center.set(0,0,0);const e=Ah.distanceTo(t.center);return di.radius=.7071067811865476+e,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if($r.x=r.normal.x>0?t.max.x:t.min.x,$r.y=r.normal.y>0?t.max.y:t.min.y,$r.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Dl=new le;class Oo{constructor(){this.coordinateSystem=hn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let r=0;r<e.length;r++){const s=e[r];Dl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Tr),n[r].setFromProjectionMatrix(Dl,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let r=0;r<t._count;r++)e[r]===void 0&&(e[r]=new Tr),e[r].copy(n[r]);return this._count=t._count,this}clone(){return new Oo().copy(this)}}class co extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ws=new k,As=new k,Il=new le,cr=new Ds,Zr=new Ji,ca=new k,Nl=new k;class Rh extends Me{constructor(t=new Je,e=new co){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ws.fromBufferAttribute(e,r-1),As.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ws.distanceTo(As);t.setAttribute("lineDistance",new ve(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,t.ray.intersectsSphere(Zr)===!1)return;Il.copy(r).invert(),cr.copy(t.ray).applyMatrix4(Il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=m,f=g-1;S<f;S+=l){const p=h.getX(S),b=h.getX(S+1),R=Jr(this,t,cr,c,p,b,S);R&&e.push(R)}if(this.isLineLoop){const S=h.getX(g-1),f=h.getX(m),p=Jr(this,t,cr,c,S,f,g-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=m,f=g-1;S<f;S+=l){const p=Jr(this,t,cr,c,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){const S=Jr(this,t,cr,c,g-1,m,g-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jr(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(ws.fromBufferAttribute(o,r),As.fromBufferAttribute(o,s),e.distanceSqToSegment(ws,As,ca,Nl)>n)return;ca.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ca);if(!(l<t.near||l>t.far))return{distance:l,point:Nl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ul=new k,Fl=new k;class Ol extends Rh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Ul.fromBufferAttribute(e,r),Fl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ul.distanceTo(Fl);t.setAttribute("lineDistance",new ve(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pu extends ke{constructor(t=[],e=Yi,n,r,s,a,o,c,l,h){super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ch extends ke{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $i extends ke{constructor(t,e,n=En,r,s,a,o=Ue,c=Ue,l,h=Zn,d=1){if(h!==Zn&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class mu extends $i{constructor(t,e=En,n=Yi,r,s,a=Ue,o=Ue,c,l=Zn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gu extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class jn extends Je{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2));function g(S,f,p,b,R,M,E,C,_,T,V){const U=M/_,G=E/T,J=M/2,P=E/2,y=C/2,I=_+1,B=T+1;let L=0,W=0;const F=new k;for(let X=0;X<B;X++){const tt=X*G-P;for(let ot=0;ot<I;ot++){const Rt=ot*U-J;F[S]=Rt*b,F[f]=tt*R,F[p]=y,l.push(F.x,F.y,F.z),F[S]=0,F[f]=0,F[p]=C>0?1:-1,h.push(F.x,F.y,F.z),d.push(ot/_),d.push(1-X/T),L+=1}}for(let X=0;X<T;X++)for(let tt=0;tt<_;tt++){const ot=u+tt+I*X,Rt=u+tt+I*(X+1),Q=u+(tt+1)+I*(X+1),ht=u+(tt+1)+I*X;c.push(ot,Rt,ht),c.push(Rt,Q,ht),W+=6}o.addGroup(m,W,V),m+=W,u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Qr=new k,jr=new k,ua=new k,ts=new en;class Ph extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Vi*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:S,b:f,c:p}=ts;if(S.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),ts.getNormal(ua),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const R=(b+1)%3,M=d[b],E=d[R],C=ts[h[b]],_=ts[h[R]],T=`${M}_${E}`,V=`${E}_${M}`,U=u.get(V);U?(ua.dot(U.normal)<=s&&(m.push(C.x,C.y,C.z),m.push(_.x,_.y,_.z)),u.set(V,null)):u.has(T)||u.set(T,{index0:l[b],index1:l[R],normal:ua.clone()})}}for(const g of u.values())if(g){const{index0:S,index1:f}=g;Qr.fromBufferAttribute(o,S),jr.fromBufferAttribute(o,f),m.push(Qr.x,Qr.y,Qr.z),m.push(jr.x,jr.y,jr.z)}this.setAttribute("position",new ve(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class vi extends Je{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=t/o,u=e/c,m=[],g=[],S=[],f=[];for(let p=0;p<h;p++){const b=p*u-a;for(let R=0;R<l;R++){const M=R*d-s;g.push(M,-b,0),S.push(0,0,1),f.push(R/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const R=b+l*p,M=b+l*(p+1),E=b+1+l*(p+1),C=b+1+l*p;m.push(R,M,C),m.push(M,E,C)}this.setIndex(m),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qi extends Je{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new k,u=new k,m=[],g=[],S=[],f=[];for(let p=0;p<=n;p++){const b=[],R=p/n,M=a+R*o,E=t*Math.cos(M),C=Math.sqrt(t*t-E*E);let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const V=T/e,U=r+V*s;d.x=-C*Math.cos(U),d.y=E,d.z=C*Math.sin(U),g.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),f.push(V+_,1-R),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const R=h[p][b+1],M=h[p][b],E=h[p+1][b],C=h[p+1][b+1];(p!==0||a>0)&&m.push(R,M,C),(p!==n-1||c<Math.PI)&&m.push(M,E,C)}this.setIndex(m),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lh extends Je{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,r=new k,s=new k;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const d=c[l],u=d.start,m=d.count;for(let g=u,S=u+m;g<S;g+=3)for(let f=0;f<3;f++){const p=o.getX(g+f),b=o.getX(g+(f+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,b),Bl(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,d=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Bl(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Bl(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(zl(r))r.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(zl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const r in n)t[r]=n[r]}return t}function zl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _u(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Bo={clone:Zi,merge:Ve};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Dh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(r.value);break;case"v3":this.uniforms[n].value=new k().fromArray(r.value);break;case"v4":this.uniforms[n].value=new se().fromArray(r.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new le().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Uh extends ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vu extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fh extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Oh extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xu extends Me{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Bh extends xu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const da=new le,kl=new k,Hl=new k;class zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(da,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===Er||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const es=new k,ns=new Jn,pn=new k;class Su extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(es,ns,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(es,ns,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(es,ns,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(es,ns,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new k,Gl=new Ft,Vl=new Ft;class dn extends Su{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Vl),e.subVectors(Vl,Gl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Mu extends Su{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kh extends zh{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends xu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new kh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Hh extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Ni=-90,Ui=1;class uo extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Ni,Ui,t,e);r.layers=this.layers,this.add(r);const s=new dn(Ni,Ui,t,e);s.layers=this.layers,this.add(s);const a=new dn(Ni,Ui,t,e);a.layers=this.layers,this.add(a);const o=new dn(Ni,Ui,t,e);o.layers=this.layers,this.add(o);const c=new dn(Ni,Ui,t,e);c.layers=this.layers,this.add(c);const l=new dn(Ni,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gh extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class ho extends du{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Xl=new le;class Vh{constructor(t,e,n=0,r=1/0){this.ray=new Ds(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(t,e=!0,n=[]){return fo(t,this,n,e),n.sort(ql),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)fo(t[r],this,n,e);return n.sort(ql),n}}function ql(i,t){return i.distance-t.distance}function fo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)fo(s[a],t,e,!0)}}class Yl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ht(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kl=new k,is=new k,Fi=new k,Oi=new k,ha=new k,Wh=new k,Xh=new k;class qh{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Kl.subVectors(t,this.start),is.subVectors(this.end,this.start);const n=is.dot(is);if(n===0)return 0;let s=is.dot(Kl)/n;return e&&(s=Ht(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Wh,n=Xh){const r=10000000000000001e-32;let s,a;const o=this.start,c=t.start,l=this.end,h=t.end;Fi.subVectors(l,o),Oi.subVectors(h,c),ha.subVectors(o,c);const d=Fi.dot(Fi),u=Oi.dot(Oi),m=Oi.dot(ha);if(d<=r&&u<=r)return e.copy(o),n.copy(c),e.distanceToSquared(n);if(d<=r)s=0,a=m/u,a=Ht(a,0,1);else{const g=Fi.dot(ha);if(u<=r)a=0,s=Ht(-g/d,0,1);else{const S=Fi.dot(Oi),f=d*u-S*S;f!==0?s=Ht((S*m-g*u)/f,0,1):s=0,a=(S*s+m)/u,a<0?(a=0,s=Ht(-g/d,0,1)):a>1&&(a=1,s=Ht((S-g)/d,0,1))}}return e.copy(o).addScaledVector(Fi,s),n.copy(c).addScaledVector(Oi,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Yh extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $l(i,t,e,n){const r=Kh(n);switch(e){case Jc:return i*t;case jc:return i*t/r.components*r.byteLength;case Co:return i*t/r.components*r.byteLength;case _i:return i*t*2/r.components*r.byteLength;case Po:return i*t*2/r.components*r.byteLength;case Qc:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case Lo:return i*t*4/r.components*r.byteLength;case ds:case hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Ss:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case no:case io:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*16;case so:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ms:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kh(i){switch(i){case tn:case Yc:return{byteLength:1,components:1};case yr:case Kc:case bn:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case En:case wo:case xn:return{byteLength:4,components:1};case $c:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);function yu(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function $h(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){const g=d[u],S=d[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){const S=d[m];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jh=`#ifdef USE_ALPHAHASH
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
#endif`,Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,Mf=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
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
#endif`,Kf=`uniform sampler2D dfgLUT;
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
}`,$f=`
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
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
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform float backgroundBlurriness;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
}`,rm=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
}`,hm=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,Em=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Zh,alphahash_pars_fragment:Jh,alphamap_fragment:Qh,alphamap_pars_fragment:jh,alphatest_fragment:tf,alphatest_pars_fragment:ef,aomap_fragment:nf,aomap_pars_fragment:rf,batching_pars_vertex:sf,batching_vertex:af,begin_vertex:of,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:hf,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:vf,color_vertex:xf,common:Sf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:yf,displacementmap_vertex:Ef,emissivemap_fragment:bf,emissivemap_pars_fragment:Tf,colorspace_fragment:wf,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Gf,envmap_vertex:Df,fog_vertex:If,fog_pars_vertex:Nf,fog_fragment:Uf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:kf,lights_pars_begin:Hf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:Kf,lights_fragment_begin:$f,lights_fragment_maps:Zf,lights_fragment_end:Jf,lightprobes_pars_fragment:Qf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:rp,map_particle_fragment:sp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:hp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ep,opaque_fragment:bp,packing:Tp,premultiplied_alpha_fragment:wp,project_vertex:Ap,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Np,shadowmask_pars_fragment:Up,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Hp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Vp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:Kp,worldpos_vertex:$p,background_vert:Zp,background_frag:Jp,backgroundCube_vert:Qp,backgroundCube_frag:jp,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distance_vert:rm,distance_frag:sm,equirect_vert:am,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:hm,meshlambert_frag:fm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:xm,meshphysical_vert:Sm,meshphysical_frag:Mm,meshtoon_vert:ym,meshtoon_frag:Em,points_vert:bm,points_frag:Tm,shadow_vert:wm,shadow_frag:Am,sprite_vert:Rm,sprite_frag:Cm},Et={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ye={basic:{uniforms:Ve([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ve([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ve([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ve([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ve([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ve([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ve([Et.points,Et.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ve([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ve([Et.common,Et.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ve([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ve([Et.sprite,Et.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ve([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ve([Et.lights,Et.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Ye.physical={uniforms:Ve([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const rs={r:0,b:0,g:0},Pm=new le,Eu=new zt;Eu.set(-1,0,0,0,1,0,0,0,1);function Lm(i,t,e,n,r,s){const a=new Vt(0);let o=r===!0?0:1,c,l,h=null,d=0,u=null;function m(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const M=b.backgroundBlurriness>0;R=t.get(R,M)}return R}function g(b){let R=!1;const M=m(b);M===null?f(a,o):M&&M.isColor&&(f(M,1),R=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,R){const M=m(R);M&&M.isCubeTexture?(l===void 0&&(l=new Re(new jn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Zi(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Eu),l.material.toneMapped=Jt.getTransfer(M.colorSpace)!==ie,(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Re(new vi(2,2),new ti({name:"BackgroundMaterial",uniforms:Zi(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(M.colorSpace)!==ie,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,R){b.getRGB(rs,_u(i)),e.buffers.color.setClear(rs.r,rs.g,rs.b,R,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,f(a,o)},render:g,addToRenderList:S,dispose:p}}function Dm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(G,J,P,y,I){let B=!1;const L=d(G,y,P,J);s!==L&&(s=L,l(s.object)),B=m(G,y,P,I),B&&g(G,y,P,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(G,J,P,y),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function d(G,J,P,y){const I=y.wireframe===!0;let B=n[J.id];B===void 0&&(B={},n[J.id]=B);const L=G.isInstancedMesh===!0?G.id:0;let W=B[L];W===void 0&&(W={},B[L]=W);let F=W[P.id];F===void 0&&(F={},W[P.id]=F);let X=F[I];return X===void 0&&(X=u(c()),F[I]=X),X}function u(G){const J=[],P=[],y=[];for(let I=0;I<e;I++)J[I]=0,P[I]=0,y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:P,attributeDivisors:y,object:G,attributes:{},index:null}}function m(G,J,P,y){const I=s.attributes,B=J.attributes;let L=0;const W=P.getAttributes();for(const F in W)if(W[F].location>=0){const tt=I[F];let ot=B[F];if(ot===void 0&&(F==="instanceMatrix"&&G.instanceMatrix&&(ot=G.instanceMatrix),F==="instanceColor"&&G.instanceColor&&(ot=G.instanceColor)),tt===void 0||tt.attribute!==ot||ot&&tt.data!==ot.data)return!0;L++}return s.attributesNum!==L||s.index!==y}function g(G,J,P,y){const I={},B=J.attributes;let L=0;const W=P.getAttributes();for(const F in W)if(W[F].location>=0){let tt=B[F];tt===void 0&&(F==="instanceMatrix"&&G.instanceMatrix&&(tt=G.instanceMatrix),F==="instanceColor"&&G.instanceColor&&(tt=G.instanceColor));const ot={};ot.attribute=tt,tt&&tt.data&&(ot.data=tt.data),I[F]=ot,L++}s.attributes=I,s.attributesNum=L,s.index=y}function S(){const G=s.newAttributes;for(let J=0,P=G.length;J<P;J++)G[J]=0}function f(G){p(G,0)}function p(G,J){const P=s.newAttributes,y=s.enabledAttributes,I=s.attributeDivisors;P[G]=1,y[G]===0&&(i.enableVertexAttribArray(G),y[G]=1),I[G]!==J&&(i.vertexAttribDivisor(G,J),I[G]=J)}function b(){const G=s.newAttributes,J=s.enabledAttributes;for(let P=0,y=J.length;P<y;P++)J[P]!==G[P]&&(i.disableVertexAttribArray(P),J[P]=0)}function R(G,J,P,y,I,B,L){L===!0?i.vertexAttribIPointer(G,J,P,I,B):i.vertexAttribPointer(G,J,P,y,I,B)}function M(G,J,P,y){S();const I=y.attributes,B=P.getAttributes(),L=J.defaultAttributeValues;for(const W in B){const F=B[W];if(F.location>=0){let X=I[W];if(X===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(X=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(X=G.instanceColor)),X!==void 0){const tt=X.normalized,ot=X.itemSize,Rt=t.get(X);if(Rt===void 0)continue;const Q=Rt.buffer,ht=Rt.type,_t=Rt.bytesPerElement,bt=ht===i.INT||ht===i.UNSIGNED_INT||X.gpuType===wo;if(X.isInterleavedBufferAttribute){const pt=X.data,z=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,w=X.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let D=0;D<F.locationSize;D++)p(F.location+D,pt.meshPerAttribute);G.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let D=0;D<F.locationSize;D++)f(F.location+D);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let D=0;D<F.locationSize;D++)R(F.location+D,ot/F.locationSize,ht,tt,z*_t,(w+ot/F.locationSize*D)*_t,bt)}else{if(X.isInstancedBufferAttribute){for(let pt=0;pt<F.locationSize;pt++)p(F.location+pt,X.meshPerAttribute);G.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let pt=0;pt<F.locationSize;pt++)f(F.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let pt=0;pt<F.locationSize;pt++)R(F.location+pt,ot/F.locationSize,ht,tt,ot*_t,ot/F.locationSize*pt*_t,bt)}}else if(L!==void 0){const tt=L[W];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(F.location,tt);break;case 3:i.vertexAttrib3fv(F.location,tt);break;case 4:i.vertexAttrib4fv(F.location,tt);break;default:i.vertexAttrib1fv(F.location,tt)}}}}b()}function E(){V();for(const G in n){const J=n[G];for(const P in J){const y=J[P];for(const I in y){const B=y[I];for(const L in B)h(B[L].object),delete B[L];delete y[I]}}delete n[G]}}function C(G){if(n[G.id]===void 0)return;const J=n[G.id];for(const P in J){const y=J[P];for(const I in y){const B=y[I];for(const L in B)h(B[L].object),delete B[L];delete y[I]}}delete n[G.id]}function _(G){for(const J in n){const P=n[J];for(const y in P){const I=P[y];if(I[G.id]===void 0)continue;const B=I[G.id];for(const L in B)h(B[L].object),delete B[L];delete I[G.id]}}}function T(G){for(const J in n){const P=n[J],y=G.isInstancedMesh===!0?G.id:0,I=P[y];if(I!==void 0){for(const B in I){const L=I[B];for(const W in L)h(L[W].object),delete L[W];delete I[B]}delete P[y],Object.keys(P).length===0&&delete n[J]}}}function V(){U(),a=!0,s!==r&&(s=r,l(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:V,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:f,disableUnusedAttributes:b}}function Im(i,t,e){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];e.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Nm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==Sn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const T=_===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==tn&&_!==xn&&!T&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:E,samples:C}}function Um(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new un,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||r;return r=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,S=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{const b=s?0:n,R=b*4;let M=p.clippingState||null;c.value=M,M=h(g,u,R,m);for(let E=0;E!==R;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const S=d!==null?d.length:0;let f=null;if(S!==0){if(f=c.value,g!==!0||f===null){const p=m+S*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let R=0,M=m;R!==S;++R,M+=4)a.copy(d[R]).applyMatrix4(b,o),a.normal.toArray(f,M),f[M+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,f}}class zo extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new pu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jn(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Gi});s.uniforms.tEquirect.value=e;const a=new Re(r,s),o=e.minFilter;return e.minFilter===qn&&(e.minFilter=$e),new uo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Zl=256,Fm=3,Om=20,bu=256,Tu=16,Bm=3,zm=new k,km=new Vt;class Rs{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new Re(new jn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=zm}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,S=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(t.background=c.getClearColor(km));const f=new uo(n,r,h);return f.position.copy(o),f.update(c,t),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=g,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Zl,su(t))}_fromTexture(t,e){t.mapping===Yi||t.mapping===Mr?this._setSize(t.image.length===0?Zl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Jl(t,!1,!1),n=Math.log2(t)-Fm;for(let r=0;r<=n;r++)e.texture.mipmaps.push({width:t>>r,height:t>>r});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Jl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=t,s.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,r),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Yi||t.mapping===Mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ql()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Hm(),this._integrationMaterial=Gm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Tu);for(let a=0;a<=n;a++){const o=Rs.lodToRoughness(a,n);if(a>n-Bm)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const c=o>0?Math.log2(e)+.5*Math.log2(6/(bu*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Vm());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(t,0,n),r.envMap.value=t.texture,this._renderCube(s,0,n)}}function Jl(i,t,e){return new zo(i,{minFilter:qn,generateMipmaps:t,type:bn,colorSpace:ys,depthBuffer:e})}function wr(i,t,e){return new ti({name:i,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:Ze,blending:Gi,depthTest:!1,depthWrite:!1})}function Hm(){return wr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bu}u

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
	`)}function Gm(){return wr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tu}},`

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
	`)}function Vm(){return wr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Om}
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
	`)}function Ql(){return wr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function jl(){return wr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wm(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Bs||m===zs)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new zo(g.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const m=u.mapping,g=m===Bs||m===zs,S=m===Yi||m===Mr;if(g||S){let f=e.get(u);const p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Rs(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{const b=u.image;return g&&b&&b.height>0||S&&b&&c(b)?(n===null&&(n=new Rs(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Bs?u.mapping=Yi:m===zs&&(u.mapping=Mr),u}function c(u){let m=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&m++;return m===g}function l(u){const m=u.target;m.removeEventListener("dispose",l);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ms("WebGLRenderer: "+n+" extension not supported."),r}}}function qm(i,t,e,n){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(const f in g.attributes)t.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const S=s.get(g);S&&(t.remove(S),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(g){const S=g.attributes;for(const f in S)t.update(S[f],i.ARRAY_BUFFER)}function d(g){const S=g.index,f=g.attributes.position;let p=0;if(f===void 0)return;const b=S!==null?S.array.length:f.array.length/3-1,R=f.count>=65535?uu:cu,M=new R(Math.ceil(b/3)*6,1),E=M.array;if(S!==null){const _=S.array;p=S.version;for(let T=0,V=0;T<b;T+=3){const U=_[T+0],G=_[T+1],J=_[T+2];E[V++]=U,E[V++]=G,E[V++]=G,E[V++]=J,E[V++]=J,E[V++]=U}}else{p=f.version;for(let _=0,T=0;_<b;_+=3){const V=_+0,U=_+1,G=_+2;E[T++]=V,E[T++]=U,E[T++]=U,E[T++]=G,E[T++]=G,E[T++]=V}}M.version=p;const C=s.get(g);C&&t.remove(C),s.set(g,M)}function u(g){const S=s.get(g);if(S){const f=g.index;f!==null&&S.version<f.version&&d(g)}else d(g);return s.get(g)}function m(){for(const g in r){const S=r[g].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:u,dispose:m}}function Ym(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,s,d*a),e.update(u,n,1)}function l(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,d*a,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,m);let S=0;for(let f=0;f<m;f++)S+=u[f];e.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Km(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function $m(i,t,e){const n=new WeakMap,r=new se;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let V=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",V)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),g===!0&&(R=2),S===!0&&(R=3);let M=o.attributes.position.count*R,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*E*4*d),_=new ou(C,M,E,d);_.type=xn,_.needsUpdate=!0;const T=R*4;for(let U=0;U<d;U++){const G=f[U],J=p[U],P=b[U],y=M*E*4*U;for(let I=0;I<G.count;I++){const B=I*T;m===!0&&(r.fromBufferAttribute(G,I),C[y+B+0]=r.x,C[y+B+1]=r.y,C[y+B+2]=r.z,C[y+B+3]=0),g===!0&&(r.fromBufferAttribute(J,I),C[y+B+4]=r.x,C[y+B+5]=r.y,C[y+B+6]=r.z,C[y+B+7]=0),S===!0&&(r.fromBufferAttribute(P,I),C[y+B+8]=r.x,C[y+B+9]=r.y,C[y+B+10]=r.z,C[y+B+11]=P.itemSize===4?r.w:1)}}u={count:d,texture:_,size:new Ft(M,E)},n.set(o,u),o.addEventListener("dispose",V)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Zm(i,t,e,n,r){let s=new WeakMap;function a(l){const h=r.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Jm={[zc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Hc]:"CINEON_TONE_MAPPING",[Gc]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[Xc]:"NEUTRAL_TONE_MAPPING",[Vc]:"CUSTOM_TONE_MAPPING"};function Qm(i,t,e,n,r,s){const a=new yn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new Je;h.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ve([0,2,0,0,2,0],2));const d=new Uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Re(h,d),m=new Mu(-1,1,1,-1,0,1);let g=null,S=null,f=!1,p,b=null,R=[],M=!1;this.setSize=function(E,C){a.setSize(E,C),o!==null&&o.setSize(E,C),c!==null&&c.setSize(E,C);for(let _=0;_<R.length;_++){const T=R[_];T.setSize&&T.setSize(E,C)}},this.setEffects=function(E){R=E,M=R.length>0&&R[0].isRenderPass===!0;const C=a.width,_=a.height;R.length>0&&o===null&&(o=new yn(C,_,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new yn(C,_,{type:bn,depthBuffer:!1,stencilBuffer:!1}));const T=r===!0&&R.some(V=>V.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&l===null&&(l=new $i(C,_),s===!0&&(l.format=Yn,l.type=Ki)),a.dispose(),a.depthTexture=T?l:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let V=0;V<R.length;V++){const U=R[V];U.setSize&&U.setSize(C,_),T&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(l)}},this.begin=function(E,C){if(f||E.toneMapping===Nn&&R.length===0)return!1;if(b=C,C!==null){const _=C.width,T=C.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return M===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Nn,!0},this.hasRenderPass=function(){return M},this.end=function(E,C){E.toneMapping=p,f=!0;let _=a,T=o;for(let V=0;V<R.length;V++){const U=R[V];U.enabled!==!1&&(U.render(E,T,_,C),U.needsSwap!==!1&&(_=T,T=T===o?c:o))}if(g!==E.outputColorSpace||S!==E.toneMapping){g=E.outputColorSpace,S=E.toneMapping,d.defines={},Jt.getTransfer(g)===ie&&(d.defines.SRGB_TRANSFER="");const V=Jm[S];V&&(d.defines[V]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(b),E.render(u,m),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}const wu=new ke,Au=new $i(1,1),Ru=new mu(1),Cu=new ou,Pu=new ch,Lu=new pu,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Is(i,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),Ee(e,n)}}function rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),Ee(e,n)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),Ee(e,n)}}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Ns(i){return i.version===0&&(i.compareFunction=nu,i.needsUpdate=!0),i}function pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Ns(Au):s=wu,e.setTexture2D(t||s,r)}function mg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Pu,r)}function gg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Ns(Ru):s=Lu,e.setTextureCube(t||s,r)}function _g(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Cu,r)}function vg(i){switch(i){case 5126:return jm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return dg;case 36295:return hg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function xg(i,t){i.uniform1fv(this.addr,t)}function Sg(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function yg(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tg(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Ag(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Pg(i,t){i.uniform1uiv(this.addr,t)}function Lg(i,t){i.uniform2uiv(this.addr,t)}function Dg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Ng(i,t,e){const n=this.cache,r=t.length,s=Is(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ns(Au):a=wu;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Ug(i,t,e){const n=this.cache,r=t.length,s=Is(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Pu,s[a])}function Fg(i,t,e){const n=this.cache,r=t.length,s=Is(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ns(Ru):a=Lu;for(let o=0;o!==r;++o)e.setTextureCube(t[o]||a,s[o])}function Og(i,t,e){const n=this.cache,r=t.length,s=Is(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Cu,s[a])}function Bg(i){switch(i){case 5126:return xg;case 35664:return Sg;case 35665:return Mg;case 35666:return yg;case 35674:return Eg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Lg;case 36295:return Dg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vg(e.type)}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bg(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function sc(i,t){i.seq.push(t),i.map[t.id]=t}function Gg(i,t,e){const n=i.name,r=n.length;for(fa.lastIndex=0;;){const s=fa.exec(n),a=fa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){sc(e,l===void 0?new zg(o,i,t):new kg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Hg(o),sc(e,d)),e=d}}}class gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Gg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vg=37297;let Wg=0;function Xg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const oc=new zt;function qg(i){Jt._getMatrix(oc,Jt.workingColorSpace,i);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Es:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Xg(i.getShaderSource(t),o)}else return s}function Yg(i,t){const e=qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Kg={[zc]:"Linear",[kc]:"Reinhard",[Hc]:"Cineon",[Gc]:"ACESFilmic",[Wc]:"AgX",[Xc]:"Neutral",[Vc]:"Custom"};function $g(i,t){const e=Kg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ss=new k;function Zg(){Jt.getLuminanceCoefficients(ss);const i=ss.x.toFixed(4),t=ss.y.toFixed(4),e=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Qg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(i){return i.replace(t_,e_)}function e_(i,t){const e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return po(e)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(n_,i_)}function i_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const r_={[us]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function s_(i){return r_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a_={[Mr]:"ENVMAP_MODE_REFRACTION"};function o_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l_={[Bc]:"ENVMAP_BLENDING_MULTIPLY",[Rd]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function c_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l_[i.combine]||"ENVMAP_BLENDING_NONE"}function u_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=s_(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=o_(e),d=c_(e),u=Jg(e),m=Qg(s),g=r.createProgram();let S,f,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fr).join(`
`),S.length>0&&(S+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fr).join(`
`),f.length>0&&(f+=`
`)):(S=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),f=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=po(a),a=cc(a,e),a=uc(a,e),o=po(o),o=cc(o,e),o=uc(o,e),a=dc(a),o=dc(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,f=["#define varying in",e.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=p+S+a,R=p+f+o,M=ac(r,r.VERTEX_SHADER,b),E=ac(r,r.FRAGMENT_SHADER,R);r.attachShader(g,M),r.attachShader(g,E),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(U){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(g)||"",J=r.getShaderInfoLog(M)||"",P=r.getShaderInfoLog(E)||"",y=G.trim(),I=J.trim(),B=P.trim();let L=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,M,E);else{const F=lc(r,M,"vertex"),X=lc(r,E,"fragment");jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+y+`
`+F+`
`+X)}else y!==""?Ot("WebGLProgram: Program Info Log:",y):(I===""||B==="")&&(W=!1);W&&(U.diagnostics={runnable:L,programLog:y,vertexShader:{log:I,prefix:S},fragmentShader:{log:B,prefix:f}})}r.deleteShader(M),r.deleteShader(E),_=new gs(r,g),T=jg(r,g)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(g,Vg)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let d_=0;class h_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f_(t),e.set(t,n)),n}}class f_{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}}function p_(i){return i===_i||i===Ss||i===Ms}function m_(i,t,e,n,r,s){const a=new Fo,o=new h_,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,T,V,U,G,J){const P=U.fog,y=G.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,L=t.get(_.envMap||I,B),W=u[_.type];let F=n.precision;_.precision!==null&&(F=n.getMaxPrecision(_.precision),F!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",F,"instead."));const X=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,tt=X!==void 0?X.length:0;let ot=0;y.morphAttributes.position!==void 0&&(ot=1),y.morphAttributes.normal!==void 0&&(ot=2),y.morphAttributes.color!==void 0&&(ot=3);let Rt,Q,ht,_t;if(W){const Tt=Ye[W];Rt=Tt.vertexShader,Q=Tt.fragmentShader}else{Rt=_.vertexShader,Q=_.fragmentShader;const Tt=o.getVertexShaderStage(_),ne=o.getFragmentShaderStage(_);o.update(_,Tt,ne),ht=Tt.id,_t=ne.id}const bt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),z=G.isInstancedMesh===!0,w=G.isBatchedMesh===!0,D=!!_.map,$=!!_.matcap,it=!!L,lt=it&&L.isPMREMTexture===!0,ct=!!_.aoMap,Pt=!!_.lightMap,Wt=!!_.bumpMap&&_.wireframe===!1,Kt=!!_.normalMap,me=!!_.displacementMap,de=!!_.emissiveMap,pe=!!_.metalnessMap,xe=!!_.roughnessMap,Ce=_.anisotropy>0,H=_.clearcoat>0,We=_.diffuseRoughness>0,ae=_.dispersion>0,ce=_.retroreflectivity>0,q=_.iridescence>0,Gt=_.sheen>0,At=_.transmission>0,Bt=Ce&&!!_.anisotropyMap,A=H&&!!_.clearcoatMap,v=H&&!!_.clearcoatNormalMap,K=H&&!!_.clearcoatRoughnessMap,ut=We&&!!_.diffuseRoughnessMap,at=q&&!!_.iridescenceMap,mt=q&&!!_.iridescenceThicknessMap,Mt=Gt&&!!_.sheenColorMap,nt=Gt&&!!_.sheenRoughnessMap,rt=!!_.specularMap,vt=!!_.specularColorMap,N=!!_.specularIntensityMap,st=At&&!!_.transmissionMap,et=At&&!!_.thicknessMap,xt=!!_.gradientMap,ft=!!_.alphaMap,gt=_.alphaTest>0,Nt=!!_.alphaHash,qt=!!_.extensions;let dt=Nn;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Ut=lt?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,Xt={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:Rt,fragmentShader:Q,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:F,batching:w,batchingColor:w&&G._colorsTexture!==null,instancing:z,instancingColor:z&&G.instanceColor!==null,instancingMorph:z&&G.morphTexture!==null,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:D,matcap:$,envMap:it,envMapMode:it&&L.mapping,envMapPMREM:lt,envMapMaxLod:lt?Ut.length-1:null,envMapSize:lt?Ut[0].width:null,aoMap:ct,lightMap:Pt,bumpMap:Wt,normalMap:Kt,displacementMap:me,emissiveMap:de,normalMapObjectSpace:Kt&&_.normalMapType===Dd,normalMapTangentSpace:Kt&&_.normalMapType===lo,packedNormalMap:Kt&&_.normalMapType===lo&&p_(_.normalMap.format),metalnessMap:pe,roughnessMap:xe,anisotropy:Ce,anisotropyMap:Bt,clearcoat:H,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:K,diffuseRoughness:We,diffuseRoughnessMap:ut,dispersion:ae,retroreflection:ce,iridescence:q,iridescenceMap:at,iridescenceThicknessMap:mt,sheen:Gt,sheenColorMap:Mt,sheenRoughnessMap:nt,specularMap:rt,specularColorMap:vt,specularIntensityMap:N,transmission:At,transmissionMap:st,thicknessMap:et,gradientMap:xt,opaque:_.transparent===!1&&_.blending===_r&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:gt,alphaHash:Nt,combine:_.combine,mapUv:D&&m(_.map.channel),aoMapUv:ct&&m(_.aoMap.channel),lightMapUv:Pt&&m(_.lightMap.channel),bumpMapUv:Wt&&m(_.bumpMap.channel),normalMapUv:Kt&&m(_.normalMap.channel),displacementMapUv:me&&m(_.displacementMap.channel),emissiveMapUv:de&&m(_.emissiveMap.channel),metalnessMapUv:pe&&m(_.metalnessMap.channel),roughnessMapUv:xe&&m(_.roughnessMap.channel),anisotropyMapUv:Bt&&m(_.anisotropyMap.channel),clearcoatMapUv:A&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:at&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:nt&&m(_.sheenRoughnessMap.channel),specularMapUv:rt&&m(_.specularMap.channel),specularColorMapUv:vt&&m(_.specularColorMap.channel),specularIntensityMapUv:N&&m(_.specularIntensityMap.channel),transmissionMapUv:st&&m(_.transmissionMap.channel),thicknessMapUv:et&&m(_.thicknessMap.channel),alphaMapUv:ft&&m(_.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(Kt||Ce),vertexNormals:!!y.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!y.attributes.uv&&(D||ft),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||y.attributes.normal===void 0&&Kt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ot,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:J.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:D&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:de&&_.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===rn,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&_.extensions.multiDraw===!0||w)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function S(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const V in _.defines)T.push(V),T.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(f(T,_),p(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function p(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){const T=u[_.type];let V;if(T){const U=Ye[T];V=Bo.clone(U.uniforms)}else V=_.uniforms;return V}function R(_,T){let V=h.get(T);return V!==void 0?++V.usedTimes:(V=new u_(i,T,_,r),l.push(V),h.set(T,V)),V}function M(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:g,getProgramCacheKey:S,getUniforms:b,acquireProgram:R,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:C}}function g_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,S,f,p){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:f,group:p},i[t]=b):(b.id=u.id,b.object=u,b.geometry=m,b.material=g,b.materialVariant=a(u),b.groupOrder=S,b.renderOrder=u.renderOrder,b.z=f,b.group=p),t++,b}function c(u,m,g,S,f,p,b){b.reversedDepth===!0&&(f=-f);const R=o(u,m,g,S,f,p);g.transmission>0?n.push(R):g.transparent===!0?r.push(R):e.push(R)}function l(u,m,g,S,f,p){const b=o(u,m,g,S,f,p);g.transmission>0?n.unshift(b):g.transparent===!0?r.unshift(b):e.unshift(b)}function h(u,m){e.length>1&&e.sort(u||__),n.length>1&&n.sort(m||fc),r.length>1&&r.sort(m||fc)}function d(){for(let u=t,m=i.length;u<m;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:h}}function v_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new pc,i.set(n,[a])):r>=s.length?(a=new pc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function x_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Vt};break;case"SpotLight":e={position:new k,direction:new k,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let M_=0;function y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E_(i){const t=new x_,e=S_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const r=new k,s=new le,a=new le;function o(l){let h=0,d=0,u=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let m=0,g=0,S=0,f=0,p=0,b=0,R=0,M=0,E=0,C=0,_=0,T=0,V=0,U=0;l.sort(y_);for(let J=0,P=l.length;J<P;J++){const y=l[J],I=y.color,B=y.intensity,L=y.distance;let W=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===_i?W=y.shadow.map.texture:W=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)h+=I.r*B,d+=I.g*B,u+=I.b*B;else if(y.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(y.sh.coefficients[F],B);U++}else if(y.isSunLight){const F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const X=y.shadow,tt=e.get(y);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=W;const ot=X.getViewportCount();for(let Rt=0;Rt<ot;Rt++)n.sunShadowMatrix[S+Rt]=X.getMatrix(Rt),n.sunShadowCascade[S+Rt]=X._cascadeData[Rt];S+=ot,g++}n.sun[m]=F,m++}else if(y.isDirectionalLight){const F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const X=y.shadow,tt=e.get(y);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,n.directionalShadow[f]=tt,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=y.shadow.matrix,E++}n.directional[f]=F,f++}else if(y.isSpotLight){const F=t.get(y);F.position.setFromMatrixPosition(y.matrixWorld),F.color.copy(I).multiplyScalar(B),F.distance=L,F.coneCos=Math.cos(y.angle),F.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),F.decay=y.decay,n.spot[b]=F;const X=y.shadow;if(y.map&&(n.spotLightMap[T]=y.map,T++,X.updateMatrices(y),y.castShadow&&V++),n.spotLightMatrix[b]=X.matrix,y.castShadow){const tt=e.get(y);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,n.spotShadow[b]=tt,n.spotShadowMap[b]=W,_++}b++}else if(y.isRectAreaLight){const F=t.get(y);F.color.copy(I).multiplyScalar(B),F.halfWidth.set(y.width*.5,0,0),F.halfHeight.set(0,y.height*.5,0),n.rectArea[R]=F,R++}else if(y.isPointLight){const F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),F.distance=y.distance,F.decay=y.decay,y.castShadow){const X=y.shadow,tt=e.get(y);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,tt.shadowCameraNear=X.camera.near,tt.shadowCameraFar=X.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=y.shadow.matrix,C++}n.point[p]=F,p++}else if(y.isHemisphereLight){const F=t.get(y);F.skyColor.copy(y.color).multiplyScalar(B),F.groundColor.copy(y.groundColor).multiplyScalar(B),n.hemi[M]=F,M++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const G=n.hash;(G.sunLength!==m||G.directionalLength!==f||G.pointLength!==p||G.spotLength!==b||G.rectAreaLength!==R||G.hemiLength!==M||G.numSunShadows!==g||G.numDirectionalShadows!==E||G.numPointShadows!==C||G.numSpotShadows!==_||G.numSpotMaps!==T||G.numLightProbes!==U)&&(n.sun.length=m,n.directional.length=f,n.spot.length=b,n.rectArea.length=R,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+T-V,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=U,G.sunLength=m,G.directionalLength=f,G.pointLength=p,G.spotLength=b,G.rectAreaLength=R,G.hemiLength=M,G.numSunShadows=g,G.numDirectionalShadows=E,G.numPointShadows=C,G.numSpotShadows=_,G.numSpotMaps=T,G.numLightProbes=U,n.version=M_++)}function c(l,h){let d=0,u=0,m=0,g=0,S=0,f=0;const p=h.matrixWorldInverse;for(let b=0,R=l.length;b<R;b++){const M=l[b];if(M.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(M.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const E=n.rectArea[S];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const E=n.hemi[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),f++}}}return{setup:o,setupView:c,state:n}}function mc(i){const t=new E_(i),e=[],n=[],r=[];function s(d){h.camera=d,e.length=0,n.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):e.push(d)}function o(d){n.push(d)}function c(){t.setup(e),r.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function b_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new mc(i),t.set(r,[o])):s>=a.length?(o=new mc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`,A_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],R_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],gc=new le,ur=new k,pa=new k;function C_(i,t,e){let n=new Tr;const r=new Ft,s=new Ft,a=new se,o=new Fh,c=new Oh,l={},h=e.maxTextureSize,d={[gi]:Ze,[Ze]:gi,[rn]:rn},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:T_,fragmentShader:w_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Re(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let p=this.type;this.render=function(C,_,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;this.type===cd&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);const V=i.getRenderTarget(),U=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Gi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const P=p!==this.type;P&&_.traverse(function(y){y.material&&(Array.isArray(y.material)?y.material.forEach(I=>I.needsUpdate=!0):y.material.needsUpdate=!0)});for(let y=0,I=C.length;y<I;y++){const B=C[y],L=B.shadow;if(L===void 0){Ot("WebGLShadowMap:",B,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();r.multiply(W),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,L.mapSize.y=s.y));const F=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=F,L.map===null||P===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===hr){if(B.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new yn(r.x,r.y,{format:_i,type:bn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),L.map.texture.name=B.name+".shadowMap",L.map.depthTexture=new $i(r.x,r.y,xn),L.map.depthTexture.name=B.name+".shadowMapDepth",L.map.depthTexture.format=Zn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ue,L.map.depthTexture.magFilter=Ue}else B.isPointLight?(L.map=new zo(r.x),L.map.depthTexture=new mu(r.x,En)):(L.map=new yn(r.x,r.y),L.map.depthTexture=new $i(r.x,r.y,En)),L.map.depthTexture.name=B.name+".shadowMap",L.map.depthTexture.format=Zn,this.type===us?(L.map.depthTexture.compareFunction=F?eu:tu,L.map.depthTexture.minFilter=$e,L.map.depthTexture.magFilter=$e):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ue,L.map.depthTexture.magFilter=Ue);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==r.x||L.map.height!==r.y)&&L.map.setSize(r.x,r.y);const X=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();B.isPointLight!==!0&&L.updateMatrices(B,T);const tt=(L.camera.layers.mask&4294967294)!==0?L.camera.layers:T.layers;for(let ot=0;ot<X;ot++){const Rt=L.getCamera(ot);if(B.isPointLight){const Q=L.camera,ht=L.matrix,_t=B.distance||Q.far;_t!==Q.far&&(Q.far=_t,Q.updateProjectionMatrix()),ur.setFromMatrixPosition(B.matrixWorld),Q.position.copy(ur),pa.copy(Q.position),pa.add(A_[ot]),Q.up.copy(R_[ot]),Q.lookAt(pa),Q.updateMatrixWorld(),ht.makeTranslation(-ur.x,-ur.y,-ur.z),gc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),L._frustum.setFromProjectionMatrix(gc,Q.coordinateSystem,Q.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(L.map),i.clear());const Q=L.getViewport(ot);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),J.viewport(a)}n=L.getFrustum(ot),M(_,T,Rt,B,tt,this.type)}L.isPointLightShadow!==!0&&this.type===hr&&b(L,T),L.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(V,U,G)};function b(C,_){const T=t.update(S);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new yn(r.x,r.y,{format:_i,type:bn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(_,null,T,u,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(_,null,T,m,S,null)}function R(C,_,T,V){let U=null;const G=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)U=G;else if(U=T.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const J=U.uuid,P=_.uuid;let y=l[J];y===void 0&&(y={},l[J]=y);let I=y[P];I===void 0&&(I=U.clone(),y[P]=I,_.addEventListener("dispose",E)),U=I}if(U.visible=_.visible,U.wireframe=_.wireframe,V===hr?U.side=_.shadowSide!==null?_.shadowSide:_.side:U.side=_.shadowSide!==null?_.shadowSide:d[_.side],U.alphaMap=_.alphaMap,U.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,U.map=_.map,U.clipShadows=_.clipShadows,U.clippingPlanes=_.clippingPlanes,U.clipIntersection=_.clipIntersection,U.displacementMap=_.displacementMap,U.displacementScale=_.displacementScale,U.displacementBias=_.displacementBias,U.wireframeLinewidth=_.wireframeLinewidth,U.linewidth=_.linewidth,T.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const J=i.properties.get(U);J.light=T}return U}function M(C,_,T,V,U,G){if(C.visible===!1)return;if(C.layers.test(U)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&G===hr)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const y=t.update(C),I=C.material;if(Array.isArray(I)){const B=y.groups;for(let L=0,W=B.length;L<W;L++){const F=B[L],X=I[F.materialIndex];if(X&&X.visible){const tt=R(C,X,V,G);C.onBeforeShadow(i,C,_,T,y,tt,F),i.renderBufferDirect(T,null,y,tt,C,F),C.onAfterShadow(i,C,_,T,y,tt,F)}}}else if(I.visible){const B=R(C,I,V,G);C.onBeforeShadow(i,C,_,T,y,B,null),i.renderBufferDirect(T,null,y,B,C,null),C.onAfterShadow(i,C,_,T,y,B,null)}}const P=C.children;for(let y=0,I=P.length;y<I;y++)M(P[y],_,T,V,U,G)}function E(C){C.target.removeEventListener("dispose",E);for(const T in l){const V=l[T],U=C.target.uuid;U in V&&(V[U].dispose(),delete V[U])}}}function P_(i,t){function e(){let N=!1;const st=new se;let et=null;const xt=new se(0,0,0,0);return{setMask:function(ft){et!==ft&&!N&&(i.colorMask(ft,ft,ft,ft),et=ft)},setLocked:function(ft){N=ft},setClear:function(ft,gt,Nt,qt,dt){dt===!0&&(ft*=qt,gt*=qt,Nt*=qt),st.set(ft,gt,Nt,qt),xt.equals(st)===!1&&(i.clearColor(ft,gt,Nt,qt),xt.copy(st))},reset:function(){N=!1,et=null,xt.set(-1,0,0,0)}}}function n(){let N=!1,st=!1,et=null,xt=null,ft=null;return{setReversed:function(gt){if(st!==gt){const Nt=t.get("EXT_clip_control");gt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),st=gt;const qt=ft;ft=null,this.setClear(qt)}},getReversed:function(){return st},setTest:function(gt){gt?pt(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(gt){et!==gt&&!N&&(i.depthMask(gt),et=gt)},setFunc:function(gt){if(st&&(gt=Gd[gt]),xt!==gt){switch(gt){case Ea:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=gt}},setLocked:function(gt){N=gt},setClear:function(gt){ft!==gt&&(ft=gt,st&&(gt=1-gt),i.clearDepth(gt))},reset:function(){N=!1,et=null,xt=null,ft=null,st=!1}}}function r(){let N=!1,st=null,et=null,xt=null,ft=null,gt=null,Nt=null,qt=null,dt=null;return{setTest:function(Ut){N||(Ut?pt(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(Ut){st!==Ut&&!N&&(i.stencilMask(Ut),st=Ut)},setFunc:function(Ut,Xt,Tt){(et!==Ut||xt!==Xt||ft!==Tt)&&(i.stencilFunc(Ut,Xt,Tt),et=Ut,xt=Xt,ft=Tt)},setOp:function(Ut,Xt,Tt){(gt!==Ut||Nt!==Xt||qt!==Tt)&&(i.stencilOp(Ut,Xt,Tt),gt=Ut,Nt=Xt,qt=Tt)},setLocked:function(Ut){N=Ut},setClear:function(Ut){dt!==Ut&&(i.clearStencil(Ut),dt=Ut)},reset:function(){N=!1,st=null,et=null,xt=null,ft=null,gt=null,Nt=null,qt=null,dt=null}}}const s=new e,a=new n,o=new r;let c={};const l=new WeakMap;let h={},d={},u={},m=new WeakMap,g=[],S=null,f=!1,p=null,b=null,R=null,M=null,E=null,C=null,_=null,T=new Vt(0,0,0),V=0,U=!1,G=null,J=null,P=null,y=null,I=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,W=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),L=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),L=W>=2);let X=null,tt={};const ot=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Q=new se().fromArray(ot),ht=new se().fromArray(Rt);function _t(N,st,et,xt){const ft=new Uint8Array(4),gt=i.createTexture();i.bindTexture(N,gt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<et;Nt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(st+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return gt}const bt={};bt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(Sr),Wt(!1),Kt(cl),pt(i.CULL_FACE),ct(Gi);function pt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function z(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function w(N,st){return u[N]!==st?(i.bindFramebuffer(N,st),u[N]=st,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function D(N,st){let et=g,xt=!1;if(N){et=m.get(st),et===void 0&&(et=[],m.set(st,et));const ft=N.textures;if(et.length!==ft.length||et[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Nt=ft.length;gt<Nt;gt++)et[gt]=i.COLOR_ATTACHMENT0+gt;et.length=ft.length,xt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,xt=!0);xt&&i.drawBuffers(et)}function $(N){return S!==N?(i.useProgram(N),S=N,!0):!1}const it={[Bi]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};it[fd]=i.MIN,it[pd]=i.MAX;const lt={[md]:i.ZERO,[gd]:i.ONE,[_d]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[xd]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[Oc]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(N,st,et,xt,ft,gt,Nt,qt,dt,Ut){if(N===Gi){f===!0&&(z(i.BLEND),f=!1);return}if(f===!1&&(pt(i.BLEND),f=!0),N!==ud){if(N!==p||Ut!==U){if((b!==Bi||E!==Bi)&&(i.blendEquation(i.FUNC_ADD),b=Bi,E=Bi),Ut)switch(N){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ya:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",N);break}else switch(N){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ul:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",N);break}R=null,M=null,C=null,_=null,T.set(0,0,0),V=0,p=N,U=Ut}return}ft=ft||st,gt=gt||et,Nt=Nt||xt,(st!==b||ft!==E)&&(i.blendEquationSeparate(it[st],it[ft]),b=st,E=ft),(et!==R||xt!==M||gt!==C||Nt!==_)&&(i.blendFuncSeparate(lt[et],lt[xt],lt[gt],lt[Nt]),R=et,M=xt,C=gt,_=Nt),(qt.equals(T)===!1||dt!==V)&&(i.blendColor(qt.r,qt.g,qt.b,dt),T.copy(qt),V=dt),p=N,U=!1}function Pt(N,st){N.side===rn?z(i.CULL_FACE):pt(i.CULL_FACE);let et=N.side===Ze;st&&(et=!et),Wt(et),N.blending===_r&&N.transparent===!1?ct(Gi):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const xt=N.stencilWrite;o.setTest(xt),xt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),de(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){G!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),G=N)}function Kt(N){N!==od?(pt(i.CULL_FACE),N!==J&&(N===cl?i.cullFace(i.BACK):N===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),J=N}function me(N){N!==P&&(L&&i.lineWidth(N),P=N)}function de(N,st,et){N?(pt(i.POLYGON_OFFSET_FILL),(y!==st||I!==et)&&(y=st,I=et,a.getReversed()&&(st=-st,et=-et),i.polygonOffset(st,et))):z(i.POLYGON_OFFSET_FILL)}function pe(N){N?pt(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function xe(N){N===void 0&&(N=i.TEXTURE0+B-1),X!==N&&(i.activeTexture(N),X=N)}function Ce(N,st,et){et===void 0&&(X===null?et=i.TEXTURE0+B-1:et=X);let xt=tt[et];xt===void 0&&(xt={type:void 0,texture:void 0},tt[et]=xt),(xt.type!==N||xt.texture!==st)&&(X!==et&&(i.activeTexture(et),X=et),i.bindTexture(N,st||bt[N]),xt.type=N,xt.texture=st)}function H(){const N=tt[X];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function ae(){try{i.compressedTexImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function ce(){try{i.texSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function q(){try{i.texSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function Gt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function Bt(){try{i.texStorage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function A(){try{i.texStorage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function v(){try{i.texImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function K(){try{i.texImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function ut(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function at(N,st){d[N]!==st&&(i.pixelStorei(N,st),d[N]=st)}function mt(N){Q.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function Mt(N){ht.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ht.copy(N))}function nt(N,st){let et=l.get(st);et===void 0&&(et=new WeakMap,l.set(st,et));let xt=et.get(N);xt===void 0&&(xt=i.getUniformBlockIndex(st,N.name),i.uniformBlockBinding(st,xt,xt),et.set(N,xt))}function rt(N,st,et){const ft=l.get(st).get(N);c[ft]!==et&&(i.bindBufferBase(i.UNIFORM_BUFFER,ft,et),c[ft]=et)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,tt={},u={},c={},m=new WeakMap,g=[],S=null,f=!1,p=null,b=null,R=null,M=null,E=null,C=null,_=null,T=new Vt(0,0,0),V=0,U=!1,G=null,J=null,P=null,y=null,I=null,Q.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pt,disable:z,bindFramebuffer:w,drawBuffers:D,useProgram:$,setBlending:ct,setMaterial:Pt,setFlipSided:Wt,setCullFace:Kt,setLineWidth:me,setPolygonOffset:de,setScissorTest:pe,activeTexture:xe,bindTexture:Ce,unbindTexture:H,compressedTexImage2D:We,compressedTexImage3D:ae,texImage2D:v,texImage3D:K,pixelStorei:at,getParameter:ut,updateUBOMapping:nt,uniformBlockBinding:rt,texStorage2D:Bt,texStorage3D:A,texSubImage2D:ce,texSubImage3D:q,compressedTexSubImage2D:Gt,compressedTexSubImage3D:At,scissor:mt,viewport:Mt,reset:vt}}function L_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,h=new WeakMap,d=new Set;let u;const m=new WeakMap,g=new Set,S=new FinalizationRegistry(A=>g.delete(A));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return f?new OffscreenCanvas(A,v):bs("canvas")}function b(A,v,K){let ut=1;const at=Bt(A);if((at.width>K||at.height>K)&&(ut=K/Math.max(at.width,at.height)),ut<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const mt=Math.floor(ut*at.width),Mt=Math.floor(ut*at.height);u===void 0&&(u=p(mt,Mt));const nt=v?p(mt,Mt):u;return nt.width=mt,nt.height=Mt,nt.getContext("2d").drawImage(A,0,0,mt,Mt),Ot("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+mt+"x"+Mt+")."),nt}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function R(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(A,v,K,ut,at,mt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Mt;ut&&(Mt=t.get("EXT_texture_norm16"),Mt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=v;if(v===i.RED&&(K===i.FLOAT&&(nt=i.R32F),K===i.HALF_FLOAT&&(nt=i.R16F),K===i.UNSIGNED_BYTE&&(nt=i.R8),K===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.R16_EXT),K===i.SHORT&&Mt&&(nt=Mt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.R8UI),K===i.UNSIGNED_SHORT&&(nt=i.R16UI),K===i.UNSIGNED_INT&&(nt=i.R32UI),K===i.BYTE&&(nt=i.R8I),K===i.SHORT&&(nt=i.R16I),K===i.INT&&(nt=i.R32I)),v===i.RG&&(K===i.FLOAT&&(nt=i.RG32F),K===i.HALF_FLOAT&&(nt=i.RG16F),K===i.UNSIGNED_BYTE&&(nt=i.RG8),K===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RG16_EXT),K===i.SHORT&&Mt&&(nt=Mt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.RG8UI),K===i.UNSIGNED_SHORT&&(nt=i.RG16UI),K===i.UNSIGNED_INT&&(nt=i.RG32UI),K===i.BYTE&&(nt=i.RG8I),K===i.SHORT&&(nt=i.RG16I),K===i.INT&&(nt=i.RG32I)),v===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),K===i.UNSIGNED_INT&&(nt=i.RGB32UI),K===i.BYTE&&(nt=i.RGB8I),K===i.SHORT&&(nt=i.RGB16I),K===i.INT&&(nt=i.RGB32I)),v===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),K===i.UNSIGNED_INT&&(nt=i.RGBA32UI),K===i.BYTE&&(nt=i.RGBA8I),K===i.SHORT&&(nt=i.RGBA16I),K===i.INT&&(nt=i.RGBA32I)),v===i.RGB&&(K===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGB16_EXT),K===i.SHORT&&Mt&&(nt=Mt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),v===i.RGBA){const rt=mt?Es:Jt.getTransfer(at);K===i.FLOAT&&(nt=i.RGBA32F),K===i.HALF_FLOAT&&(nt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(nt=rt===ie?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGBA16_EXT),K===i.SHORT&&Mt&&(nt=Mt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(A,v){let K;return A?v===null||v===En||v===Ki?K=i.DEPTH24_STENCIL8:v===xn?K=i.DEPTH32F_STENCIL8:v===yr&&(K=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===Ki?K=i.DEPTH_COMPONENT24:v===xn?K=i.DEPTH_COMPONENT32F:v===yr&&(K=i.DEPTH_COMPONENT16),K}function T(A,v){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ue&&A.minFilter!==$e?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function V(A){const v=new WeakRef(A);n.get(A).__ref=v,g.add(v),S.register(A,v,v)}function U(A){const v=n.get(A).__ref;v!==void 0&&(g.delete(v),S.unregister(v))}function G(A){P(A.target)}function J(A){y(A.target)}function P(A){A.removeEventListener("dispose",G),U(A),B(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function y(A){A.removeEventListener("dispose",J),U(A),W(A)}function I(){for(const A of g){const v=A.deref();v!==void 0&&(v.isRenderTarget===!0?y(v):P(v))}g.clear(),d.clear()}function B(A){const v=n.get(A);if(v.__webglInit===void 0)return;const K=A.source,ut=m.get(K);if(ut){const at=ut[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&L(A),Object.keys(ut).length===0&&m.delete(K)}n.remove(A)}function L(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const K=A.source,ut=m.get(K);delete ut[v.__cacheKey],a.memory.textures--}function W(A){const v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();const K=A.depthTexture;if(K&&K.renderTarget===A&&P(K),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(v.__webglFramebuffer[at]))for(let mt=0;mt<v.__webglFramebuffer[at].length;mt++)i.deleteFramebuffer(v.__webglFramebuffer[at][mt]);else i.deleteFramebuffer(v.__webglFramebuffer[at]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[at])}else{if(Array.isArray(v.__webglFramebuffer))for(let at=0;at<v.__webglFramebuffer.length;at++)i.deleteFramebuffer(v.__webglFramebuffer[at]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let at=0;at<v.__webglColorRenderbuffer.length;at++)v.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[at]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ut=A.textures;for(let at=0,mt=ut.length;at<mt;at++){const Mt=n.get(ut[at]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(ut[at])}n.remove(A)}let F=0;function X(){F=0}function tt(){return F}function ot(A){F=A}function Rt(){const A=F;return A>=r.maxTextures&&Ot("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function Q(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ht(A,v){const K=n.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&K.__version!==A.version){const ut=A.image;if(ut===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(K,A,v);return}}else A.isExternalTexture&&(K.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+v)}function _t(A,v){const K=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){Pt(K,A,v);return}else A.isExternalTexture&&(K.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+v)}function bt(A,v){const K=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){Pt(K,A,v);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+v)}function pt(A,v){const K=n.get(A);if(A.version>0&&K.__version!==A.version){Wt(K,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+v)}const z={[Pa]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},w={[Ue]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},D={[Nd]:i.NEVER,[nu]:i.ALWAYS,[Ud]:i.LESS,[tu]:i.LEQUAL,[Fd]:i.EQUAL,[eu]:i.GEQUAL,[Od]:i.GREATER,[Bd]:i.NOTEQUAL};function $(A,v){if(v.type===xn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===$e||v.magFilter===ks||v.magFilter===Cr||v.magFilter===qn||v.minFilter===$e||v.minFilter===ks||v.minFilter===Cr||v.minFilter===qn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,z[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,z[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,z[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,w[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,w[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,D[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ue||v.minFilter!==Cr&&v.minFilter!==qn||v.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function it(A,v){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",G),V(v));const ut=v.source;let at=m.get(ut);at===void 0&&(at={},m.set(ut,at));const mt=Q(v);if(mt!==A.__cacheKey){at[mt]===void 0&&(at[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),at[mt].usedTimes++;const Mt=at[A.__cacheKey];Mt!==void 0&&(at[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&L(v)),A.__cacheKey=mt,A.__webglTexture=at[mt].texture}return K}function lt(A,v,K){return Math.floor(Math.floor(A/K)/v)}function ct(A,v,K,ut){const mt=A.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,K,ut,v.data);else{mt.sort((N,st)=>N.start-st.start);let Mt=0;for(let N=1;N<mt.length;N++){const st=mt[Mt],et=mt[N],xt=st.start+st.count,ft=lt(et.start,v.width,4),gt=lt(st.start,v.width,4);et.start<=xt+1&&ft===gt&&lt(et.start+et.count-1,v.width,4)===ft?st.count=Math.max(st.count,et.start+et.count-st.start):(++Mt,mt[Mt]=et)}mt.length=Mt+1;const nt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let N=0,st=mt.length;N<st;N++){const et=mt[N],xt=Math.floor(et.start/4),ft=Math.ceil(et.count/4),gt=xt%v.width,Nt=Math.floor(xt/v.width),qt=ft,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Nt),e.texSubImage2D(i.TEXTURE_2D,0,gt,Nt,qt,dt,K,ut,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function Pt(A,v,K){let ut=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ut=i.TEXTURE_3D);const at=it(A,v),mt=v.source;e.bindTexture(ut,A.__webglTexture,i.TEXTURE0+K);const Mt=n.get(mt);if(mt.version!==Mt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const dt=Jt.getPrimaries(Jt.workingColorSpace),Ut=v.colorSpace===Xn?null:Jt.getPrimaries(v.colorSpace),Xt=v.colorSpace===Xn||dt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let rt=b(v.image,!1,r.maxTextureSize);rt=At(v,rt);const vt=s.convert(v.format,v.colorSpace),N=s.convert(v.type);let st=C(v.internalFormat,vt,N,v.normalized,v.colorSpace,v.isVideoTexture);$(ut,v);let et;const xt=v.mipmaps,ft=v.isVideoTexture!==!0,gt=Mt.__version===void 0||at===!0,Nt=mt.dataReady,qt=T(v,rt);if(v.isDepthTexture)st=_(v.format===Yn,v.type),gt&&(ft?e.texStorage2D(i.TEXTURE_2D,1,st,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,st,rt.width,rt.height,0,vt,N,null));else if(v.isDataTexture)if(xt.length>0){ft&&gt&&e.texStorage2D(i.TEXTURE_2D,qt,st,xt[0].width,xt[0].height);for(let dt=0,Ut=xt.length;dt<Ut;dt++)et=xt[dt],ft?Nt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,et.width,et.height,vt,N,et.data):e.texImage2D(i.TEXTURE_2D,dt,st,et.width,et.height,0,vt,N,et.data);v.generateMipmaps=!1}else ft?(gt&&e.texStorage2D(i.TEXTURE_2D,qt,st,rt.width,rt.height),Nt&&ct(v,rt,vt,N)):e.texImage2D(i.TEXTURE_2D,0,st,rt.width,rt.height,0,vt,N,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ft&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,st,xt[0].width,xt[0].height,rt.depth);for(let dt=0,Ut=xt.length;dt<Ut;dt++)if(et=xt[dt],v.format!==Sn)if(vt!==null)if(ft){if(Nt)if(v.layerUpdates.size>0){const Xt=$l(et.width,et.height,v.format,v.type);for(const Tt of v.layerUpdates){const ne=et.data.subarray(Tt*Xt/et.data.BYTES_PER_ELEMENT,(Tt+1)*Xt/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Tt,et.width,et.height,1,vt,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,et.width,et.height,rt.depth,vt,et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,st,et.width,et.height,rt.depth,0,et.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,et.width,et.height,rt.depth,vt,N,et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,st,et.width,et.height,rt.depth,0,vt,N,et.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ft&&gt&&e.texStorage2D(i.TEXTURE_2D,qt,st,xt[0].width,xt[0].height);for(let dt=0,Ut=xt.length;dt<Ut;dt++)et=xt[dt],v.format!==Sn?vt!==null?ft?Nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,et.width,et.height,vt,et.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,st,et.width,et.height,0,et.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Nt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,et.width,et.height,vt,N,et.data):e.texImage2D(i.TEXTURE_2D,dt,st,et.width,et.height,0,vt,N,et.data)}else if(v.isDataArrayTexture)if(ft){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,st,rt.width,rt.height,rt.depth),Nt)if(v.layerUpdates.size>0){const dt=$l(rt.width,rt.height,v.format,v.type);for(const Ut of v.layerUpdates){const Xt=rt.data.subarray(Ut*dt/rt.data.BYTES_PER_ELEMENT,(Ut+1)*dt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,rt.width,rt.height,1,vt,N,Xt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,N,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,rt.width,rt.height,rt.depth,0,vt,N,rt.data);else if(v.isData3DTexture)ft?(gt&&e.texStorage3D(i.TEXTURE_3D,qt,st,rt.width,rt.height,rt.depth),Nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,N,rt.data)):e.texImage3D(i.TEXTURE_3D,0,st,rt.width,rt.height,rt.depth,0,vt,N,rt.data);else if(v.isFramebufferTexture){if(gt)if(ft)e.texStorage2D(i.TEXTURE_2D,qt,st,rt.width,rt.height);else{let dt=rt.width,Ut=rt.height;for(let Xt=0;Xt<qt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,st,dt,Ut,0,vt,N,null),dt>>=1,Ut>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),rt.parentNode!==dt){dt.appendChild(rt),d.add(v),dt.onpaint=Ut=>{const Xt=Ut.changedElements;for(const Tt of d)Xt.includes(Tt.image)&&(Tt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{const Xt=i.RGBA,Tt=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,Tt,ne,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(ft&&gt){const dt=Bt(xt[0]);e.texStorage2D(i.TEXTURE_2D,qt,st,dt.width,dt.height)}for(let dt=0,Ut=xt.length;dt<Ut;dt++)et=xt[dt],ft?Nt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,vt,N,et):e.texImage2D(i.TEXTURE_2D,dt,st,vt,N,et);v.generateMipmaps=!1}else if(ft){if(gt){const dt=Bt(rt);e.texStorage2D(i.TEXTURE_2D,qt,st,dt.width,dt.height)}Nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,N,rt)}else e.texImage2D(i.TEXTURE_2D,0,st,vt,N,rt);R(v)&&v.mipmapsAutoUpdate===!0&&M(ut),Mt.__version=mt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Wt(A,v,K){if(v.image.length!==6)return;const ut=it(A,v),at=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+K);const mt=n.get(at);if(at.version!==mt.__version||ut===!0){e.activeTexture(i.TEXTURE0+K);const Mt=Jt.getPrimaries(Jt.workingColorSpace),nt=v.colorSpace===Xn?null:Jt.getPrimaries(v.colorSpace),rt=v.colorSpace===Xn||Mt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const vt=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,st=[];for(let Tt=0;Tt<6;Tt++)!vt&&!N?st[Tt]=b(v.image[Tt],!0,r.maxCubemapSize):st[Tt]=N?v.image[Tt].image:v.image[Tt],st[Tt]=At(v,st[Tt]);const et=st[0],xt=s.convert(v.format,v.colorSpace),ft=s.convert(v.type);let gt=C(v.internalFormat,xt,ft,v.normalized,v.colorSpace);const Nt=v.isVideoTexture!==!0,qt=mt.__version===void 0||ut===!0,dt=at.dataReady;let Ut=T(v,et);$(i.TEXTURE_CUBE_MAP,v);let Xt;if(v.isDepthTexture){if(gt=_(v.format===Yn,v.type),qt)if(Nt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,gt,et.width,et.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,et.width,et.height,0,xt,ft,null)}else if(vt){Nt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,gt,et.width,et.height);for(let Tt=0;Tt<6;Tt++){Xt=st[Tt].mipmaps;for(let ne=0;ne<Xt.length;ne++){const be=Xt[ne];v.format!==Sn?xt!==null?Nt?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne,0,0,be.width,be.height,xt,be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne,gt,be.width,be.height,0,be.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne,0,0,be.width,be.height,xt,ft,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne,gt,be.width,be.height,0,xt,ft,be.data)}}}else{if(Xt=v.mipmaps,Nt&&qt){Xt.length>0&&Ut++;const Tt=Bt(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,gt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(N){Nt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,st[Tt].width,st[Tt].height,xt,ft,st[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,st[Tt].width,st[Tt].height,0,xt,ft,st[Tt].data);for(let ne=0;ne<Xt.length;ne++){const On=Xt[ne].image[Tt].image;Nt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne+1,0,0,On.width,On.height,xt,ft,On.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne+1,gt,On.width,On.height,0,xt,ft,On.data)}}else{Nt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,xt,ft,st[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,xt,ft,st[Tt]);for(let ne=0;ne<Xt.length;ne++){const be=Xt[ne];Nt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne+1,0,0,xt,ft,be.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ne+1,gt,xt,ft,be.image[Tt])}}}R(v)&&v.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),mt.__version=at.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Kt(A,v,K,ut,at,mt){const Mt=s.convert(K.format,K.colorSpace),nt=s.convert(K.type),rt=C(K.internalFormat,Mt,nt,K.normalized,K.colorSpace),vt=n.get(v),N=n.get(K);if(N.__renderTarget=v,!vt.__hasExternalTextures){const st=Math.max(1,v.width>>mt),et=Math.max(1,v.height>>mt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,mt,rt,st,et,v.depth,0,Mt,nt,null):e.texImage2D(at,mt,rt,st,et,0,Mt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),q(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,at,N.__webglTexture,0,ce(v)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,at,N.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(A,v,K){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const ut=v.depthTexture,at=ut&&ut.isDepthTexture?ut.type:null,mt=_(v.stencilBuffer,at),Mt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;q(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(v),mt,v.width,v.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(v),mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,mt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{const ut=v.textures;for(let at=0;at<ut.length;at++){const mt=ut[at],Mt=s.convert(mt.format,mt.colorSpace),nt=s.convert(mt.type),rt=C(mt.internalFormat,Mt,nt,mt.normalized,mt.colorSpace);q(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(v),rt,v.width,v.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(v),rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,rt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(A,v,K){const ut=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(v.depthTexture);at.__renderTarget=v;const mt=ut?v.depthTexture.image[0]:v.depthTexture.image;(!at.__webglTexture||mt.width!==v.width||mt.height!==v.height)&&(mt.width=v.width,mt.height=v.height,v.depthTexture.needsUpdate=!0),ut?pt(v.depthTexture,0):ht(v.depthTexture,0);const Mt=at.__webglTexture,nt=ce(v),rt=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,vt=v.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zn)q(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,rt,Mt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,rt,Mt,0);else if(v.depthTexture.format===Yn)q(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,rt,Mt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,rt,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(A){const v=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const ut=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ut){const at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ut.removeEventListener("dispose",at)};ut.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=ut}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(K)for(let ut=0;ut<6;ut++)de(v.__webglFramebuffer[ut],A,ut);else A.texture.mipmaps.length>0?de(v.__webglFramebuffer[0],A,0):de(v.__webglFramebuffer,A,0);else if(K){v.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ut]),v.__webglDepthbuffer[ut]===void 0)v.__webglDepthbuffer[ut]=i.createRenderbuffer(),me(v.__webglDepthbuffer[ut],A,!1);else{const at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,mt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),me(v.__webglDepthbuffer,A,!1);else{const at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(A,v,K){const ut=n.get(A);v!==void 0&&Kt(ut.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&pe(A)}function Ce(A){const v=A.texture,K=n.get(A),ut=n.get(v);A.addEventListener("dispose",J),V(A);const at=A.textures,mt=A.isWebGLCubeRenderTarget===!0,Mt=at.length>1;if(Mt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=v.version,a.memory.textures++),mt){K.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(v.mipmaps.length>0){K.__webglFramebuffer[nt]=[];for(let rt=0;rt<v.mipmaps.length;rt++)K.__webglFramebuffer[nt][rt]=i.createFramebuffer()}else K.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(v.mipmaps.length>0){K.__webglFramebuffer=[];for(let nt=0;nt<v.mipmaps.length;nt++)K.__webglFramebuffer[nt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let nt=0,rt=at.length;nt<rt;nt++){const vt=n.get(at[nt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&q(A)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let nt=0;nt<at.length;nt++){const rt=at[nt];K.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[nt]);const vt=s.convert(rt.format,rt.colorSpace),N=s.convert(rt.type),st=C(rt.internalFormat,vt,N,rt.normalized,rt.colorSpace,A.isXRRenderTarget===!0),et=ce(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,st,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,K.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),me(K.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),$(i.TEXTURE_CUBE_MAP,v);for(let nt=0;nt<6;nt++)if(v.mipmaps.length>0)for(let rt=0;rt<v.mipmaps.length;rt++)Kt(K.__webglFramebuffer[nt][rt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else Kt(K.__webglFramebuffer[nt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);R(v)?M(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let nt=0,rt=at.length;nt<rt;nt++){const vt=at[nt],N=n.get(vt);let st=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,N.__webglTexture),$(st,vt),Kt(K.__webglFramebuffer,A,vt,i.COLOR_ATTACHMENT0+nt,st,0),R(vt)&&M(st)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,ut.__webglTexture),$(nt,v),v.mipmaps.length>0)for(let rt=0;rt<v.mipmaps.length;rt++)Kt(K.__webglFramebuffer[rt],A,v,i.COLOR_ATTACHMENT0,nt,rt);else Kt(K.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,nt,0);R(v)?M(nt):v.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&pe(A)}function H(A){const v=A.textures;for(let K=0,ut=v.length;K<ut;K++){const at=v[K];if(R(at)&&at.mipmapsAutoUpdate===!0){const mt=E(A),Mt=n.get(at).__webglTexture;e.bindTexture(mt,Mt),M(mt),e.unbindTexture()}}}const We=[];function ae(A){if(A.samples>0){if(q(A)===!1){const v=A.textures,K=A.width,ut=A.height;let at=i.COLOR_BUFFER_BIT;const mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),nt=v.length>1;if(nt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const N=n.get(v[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,K,ut,0,0,K,ut,at,i.NEAREST),c===!0&&(We.length=0,We.push(i.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&We.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const N=n.get(v[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ce(A){return Math.min(r.maxSamples,A.samples)}function q(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Gt(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function At(A,v){const K=A.colorSpace,ut=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||K!==ys&&K!==Xn&&(Jt.getTransfer(K)===ie?(ut!==Sn||at!==tn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",K)),v}function Bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Rt,this.resetTextureUnits=X,this.getTextureUnits=tt,this.setTextureUnits=ot,this.setTexture2D=ht,this.setTexture2DArray=_t,this.setTexture3D=bt,this.setTextureCube=pt,this.rebindTextures=xe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=q,this.dispose=I}function D_(i,t){function e(n,r=Xn){let s;const a=Jt.getTransfer(r);if(n===tn)return i.UNSIGNED_BYTE;if(n===Ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===wo)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===ds||n===hs||n===fs||n===ps)if(a===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ia||n===Na||n===Ua)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ss||n===Ha)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fa||n===Oa)return a===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return s.COMPRESSED_R11_EAC;if(n===ka)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ss)return s.COMPRESSED_RG11_EAC;if(n===Ha)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===ja||n===to||n===eo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===io||n===ro)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===no)return a===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===so||n===ao||n===Ms||n===oo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===so)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ms)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ti({vertexShader:I_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends ei{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,g=null;const S=typeof XRWebGLBinding<"u",f=new U_,p={},b=e.getContextAttributes();let R=null,M=null;const E=[],C=[],_=new Ft;let T=null,V=null;const U=new dn;U.viewport=new se;const G=new dn;G.viewport=new se;const J=[U,G],P=new Gh;let y=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ht=E[Q];return ht===void 0&&(ht=new Ys,E[Q]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Q){let ht=E[Q];return ht===void 0&&(ht=new Ys,E[Q]=ht),ht.getGripSpace()},this.getHand=function(Q){let ht=E[Q];return ht===void 0&&(ht=new Ys,E[Q]=ht),ht.getHandSpace()};function B(Q){const ht=C.indexOf(Q.inputSource);if(ht===-1)return;const _t=E[ht];_t!==void 0&&(_t.update(Q.inputSource,Q.frame,l||a),_t.dispatchEvent({type:Q.type,data:Q.inputSource}))}function L(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",W);for(let Q=0;Q<E.length;Q++){const ht=C[Q];ht!==null&&(C[Q]=null,E[Q].disconnect(ht))}y=null,I=null,f.reset();for(const Q in p)delete p[Q];if(t.setRenderTarget(R),m=null,u=null,d=null,r=null,M=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),V!==null){const Q=V.camera;Q.fov=V.fov,Q.zoom=V.zoom,Q.updateProjectionMatrix(),V=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(R=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",L),r.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,bt=null,pt=null;b.depth&&(pt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=b.stencil?Yn:Zn,bt=b.stencil?Ki:En);const z={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(z),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new yn(u.textureWidth,u.textureHeight,{format:Sn,type:tn,depthTexture:new $i(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,_t),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new yn(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Rt.setContext(r),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function W(Q){for(let ht=0;ht<Q.removed.length;ht++){const _t=Q.removed[ht],bt=C.indexOf(_t);bt>=0&&(C[bt]=null,E[bt].disconnect(_t))}for(let ht=0;ht<Q.added.length;ht++){const _t=Q.added[ht];let bt=C.indexOf(_t);if(bt===-1){for(let z=0;z<E.length;z++)if(z>=C.length){C.push(_t),bt=z;break}else if(C[z]===null){C[z]=_t,bt=z;break}if(bt===-1)break}const pt=E[bt];pt&&pt.connect(_t)}}function F(Q,ht){ht===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ht.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ht=Q.near,_t=Q.far;f.texture!==null&&(f.depthNear>0&&(ht=f.depthNear),f.depthFar>0&&(_t=f.depthFar)),P.near=G.near=U.near=ht,P.far=G.far=U.far=_t,(y!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),y=P.near,I=P.far),P.layers.mask=Q.layers.mask|6,U.layers.mask=P.layers.mask&-5,G.layers.mask=P.layers.mask&-3;const bt=Q.parent,pt=P.cameras;F(P,bt);for(let z=0;z<pt.length;z++)F(pt[z],bt);P.projectionMatrix.copy(U.projectionMatrix),P.projectionMatrixInverse.copy(U.projectionMatrixInverse),V===null&&Q.isPerspectiveCamera&&(V={camera:Q,fov:Q.fov,zoom:Q.zoom}),X(Q,P,bt)};function X(Q,ht,_t){_t===null?Q.matrix.copy(ht.matrixWorld):(Q.matrix.copy(_t.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ht.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ht.projectionMatrix),Q.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=br*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(P)},this.getCameraTexture=function(Q){return p[Q]};let tt=null;function ot(Q,ht){if(h=ht.getViewerPose(l||a),g=ht,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let bt=!1;_t.length!==P.cameras.length&&(P.cameras.length=0,bt=!0);for(let D=0;D<_t.length;D++){const $=_t[D];let it=null;if(m!==null)it=m.getViewport($);else{const ct=d.getViewSubImage(u,$);it=ct.viewport,D===0&&(t.setRenderTargetTextures(M,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(M))}let lt=J[D];lt===void 0&&(lt=new dn,lt.layers.enable(D),lt.viewport=new se,J[D]=lt),lt.matrix.fromArray($.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray($.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(it.x,it.y,it.width,it.height),D===0&&(P.matrix.copy(lt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),bt===!0&&P.cameras.push(lt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const D=d.getDepthInformation(_t[0]);D&&D.isValid&&D.texture&&f.init(D,r.renderState)}if(pt&&pt.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let D=0;D<_t.length;D++){const $=_t[D].camera;if($){let it=p[$];it||(it=new gu,p[$]=it);const lt=d.getCameraImage($);it.sourceTexture=lt}}}}for(let _t=0;_t<E.length;_t++){const bt=C[_t],pt=E[_t];bt!==null&&pt!==void 0&&pt.update(bt,ht,l||a)}tt&&tt(Q,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const Rt=new yu;Rt.setAnimationLoop(ot),this.setAnimationLoop=function(Q){tt=Q},this.dispose=function(){}}}const O_=new le,Du=new zt;Du.set(-1,0,0,0,1,0,0,0,1);function B_(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,_u(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,b,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(f,p):p.isMeshLambertMaterial?(s(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(f,p),d(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),S(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,b,R):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ze&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ze&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=t.get(p),R=b.envMap,M=b.envMapRotation;R&&(f.envMap.value=R,f.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Du),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,b,R){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=R*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,b){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function S(f,p){const b=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function z_(i,t,e,n){let r={},s={};function a(b,R){const M=R.program;n.uniformBlockBinding(b,M,r[b.id])}function o(b,R){let M=r[b.id];M===void 0&&(g(b),M=c(b),r[b.id]=M,b.addEventListener("dispose",f));const E=R.program;n.updateUBOMapping(b,E);const C=t.render.frame;s[b.id]!==C&&(l(b),s[b.id]=C)}function c(b){const R=i.createBuffer(),M=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function l(b){const R=r[b.id],M=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let C=0,_=M.length;C<_;C++){const T=M[C];if(Array.isArray(T))for(let V=0,U=T.length;V<U;V++)h(T[V],C,V,E);else h(T,C,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,R,M,E){if(u(b,R,M,E)===!0){const C=b.__offset,_=b.value;if(Array.isArray(_)){let T=0;for(let V=0;V<_.length;V++){const U=_[V],G=S(U,!0);d(U,b.__data,T),T+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}function d(b,R,M){typeof b=="number"||typeof b=="boolean"?R[M]=b:b.isMatrix3?(R[M]=b.elements[0],R[M+1]=b.elements[1],R[M+2]=b.elements[2],R[M+3]=0,R[M+4]=b.elements[3],R[M+5]=b.elements[4],R[M+6]=b.elements[5],R[M+7]=0,R[M+8]=b.elements[6],R[M+9]=b.elements[7],R[M+10]=b.elements[8],R[M+11]=0):ArrayBuffer.isView(b)?R.set(b.subarray(0,R.length-M),M):b.toArray(R,M)}function u(b,R,M,E){const C=b.value,_=R+"_"+M;if(Array.isArray(C)){E[_]===void 0&&(E[_]=[]);const T=E[_];let V=!1;for(let U=0;U<C.length;U++)m(C[U],T,U)===!0&&(V=!0);return V}return m(C,E,_)}function m(b,R,M){if(R[M]===void 0)return typeof b=="number"||typeof b=="boolean"?R[M]=b:ArrayBuffer.isView(b)?R[M]=b.slice():R[M]=b.clone(),!0;{const E=R[M];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return R[M]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function g(b){const R=b.uniforms;let M=0;const E=16;for(let _=0,T=R.length;_<T;_++){const V=Array.isArray(R[_])?R[_]:[R[_]];for(let U=0,G=V.length;U<G;U++){const J=V[U],P=Array.isArray(J.value)?J.value:[J.value],y=Array.isArray(R[_])||Array.isArray(J.value);let I=M;for(let L=0,W=P.length;L<W;L++){const F=P[L],X=S(F,y),tt=M%E,ot=tt%X.boundary,Rt=tt+ot;M+=ot,Rt!==0&&E-Rt<X.storage&&(M+=E-Rt),L===0&&(I=M),M+=X.storage}const B=J.type==="int"?Int32Array:J.type==="uint"?Uint32Array:Float32Array;J.__data=new B((M-I)/Float32Array.BYTES_PER_ELEMENT),J.__offset=I}}const C=M%E;return C>0&&(M+=E-C),b.__size=M,b.__cache={},this}function S(b,R){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=16,M.storage=48):b.isMatrix4?(M.boundary=16,M.storage=64):b.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",b),R===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function f(b){const R=b.target;R.removeEventListener("dispose",f),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);r={},s={}}return{bind:a,update:o,dispose:p}}const k_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function H_(){return mn===null&&(mn=new wh(k_,16,16,_i,bn),mn.name="DFG_LUT",mn.minFilter=$e,mn.magFilter=$e,mn.wrapS=Dn,mn.wrapT=Dn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class G_{constructor(t={}){const{canvas:e=kd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=m,f=new Set([Lo,Po,Co]),p=new Set([tn,En,yr,Ki,Ao,Ro]),b=new Uint32Array(4),R=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,C=null;const _=[],T=[];let V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1,J=null,P=null,y=null,I=null;this._outputColorSpace=qe;let B=0,L=0,W=null,F=-1,X=null;const tt=new se,ot=new se;let Rt=null;const Q=new Vt(0);let ht=0,_t=e.width,bt=e.height,pt=1,z=null,w=null;const D=new se(0,0,_t,bt),$=new se(0,0,_t,bt);let it=!1;const lt=new Tr,ct=new Oo;let Pt=!1,Wt=!1;const Kt=new le,me=new k,de=new se,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Ce(){return W===null?pt:1}let H=n;function We(x,O){return e.getContext(x,O)}let ae,ce,q,Gt,At,Bt,A,v,K,ut,at,mt,Mt,nt,rt,vt,N,st,et,xt,ft,gt,Nt;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),H===null){const O="webgl2";if(H=We(O,x),H===null)throw We(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(x){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),jt("WebGLRenderer: "+x.message),x}function qt(){ae=new Xm(H),ae.init(),ft=new D_(H,ae),ce=new Nm(H,ae,t,ft),q=new P_(H,ae),ce.reversedDepthBuffer&&u&&q.buffers.depth.setReversed(!0),P=H.createFramebuffer(),y=H.createFramebuffer(),I=H.createFramebuffer(),Gt=new Km(H),At=new g_,Bt=new L_(H,ae,q,At,ce,ft,Gt),A=new Wm(U),v=new $h(H),gt=new Dm(H,v),K=new qm(H,v,Gt,gt),ut=new Zm(H,K,v,gt,Gt),st=new $m(H,ce,Bt),rt=new Um(At),at=new m_(U,A,ae,ce,gt,rt),mt=new B_(U,At),Mt=new v_,nt=new b_(ae),N=new Lm(U,A,q,ut,g,c),vt=new C_(U,ut,ce),Nt=new z_(H,Gt,ce,q),et=new Im(H,ae,Gt),xt=new Ym(H,ae,Gt),Gt.programs=at.programs,U.capabilities=ce,U.extensions=ae,U.properties=At,U.renderLists=Mt,U.shadowMap=vt,U.state=q,U.info=Gt}S!==tn&&(V=new Qm(S,e.width,e.height,o,r,s));const dt=new F_(U,H);this.xr=dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const x=ae.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ae.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(x){x!==void 0&&(pt=x,this.setSize(_t,bt,!1))},this.getSize=function(x){return x.set(_t,bt)},this.setSize=function(x,O,j=!0){if(dt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=x,bt=O,e.width=Math.floor(x*pt),e.height=Math.floor(O*pt),j===!0&&(e.style.width=x+"px",e.style.height=O+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(_t*pt,bt*pt).floor()},this.setDrawingBufferSize=function(x,O,j){_t=x,bt=O,pt=j,e.width=Math.floor(x*j),e.height=Math.floor(O*j),this.setViewport(0,0,x,O)},this.setEffects=function(x){if(S===tn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let O=0;O<x.length;O++)if(x[O].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(tt)},this.getViewport=function(x){return x.copy(D)},this.setViewport=function(x,O,j,Y){x.isVector4?D.set(x.x,x.y,x.z,x.w):D.set(x,O,j,Y),q.viewport(tt.copy(D).multiplyScalar(Ce()).round())},this.getScissor=function(x){return x.copy($)},this.setScissor=function(x,O,j,Y){x.isVector4?$.set(x.x,x.y,x.z,x.w):$.set(x,O,j,Y),q.scissor(ot.copy($).multiplyScalar(Ce()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(x){q.setScissorTest(it=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){w=x},this.getClearColor=function(x){return x.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,j=!0){let Y=0;if(x){let Z=!1;if(W!==null){const yt=W.texture.format;Z=f.has(yt)}if(Z){const yt=W.texture.type,Ct=p.has(yt),St=N.getClearColor(),wt=N.getClearAlpha(),It=St.r,kt=St.g,$t=St.b;Ct?(b[0]=It,b[1]=kt,b[2]=$t,b[3]=wt,H.clearBufferuiv(H.COLOR,0,b)):(R[0]=It,R[1]=kt,R[2]=$t,R[3]=wt,H.clearBufferiv(H.COLOR,0,R))}else Y|=H.COLOR_BUFFER_BIT}O&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),J=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),N.dispose(),Mt.dispose(),nt.dispose(),Bt.dispose(),At.dispose(),A.dispose(),ut.dispose(),K.dispose(),gt.dispose(),Nt.dispose(),at.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Qo),dt.removeEventListener("sessionend",jo),ri.stop()};function Ut(x){x.preventDefault(),Ts("WebGLRenderer: Context Lost."),G=!0}function Xt(){Ts("WebGLRenderer: Context Restored."),G=!1;const x=Gt.autoReset,O=vt.enabled,j=vt.autoUpdate,Y=vt.needsUpdate,Z=vt.type;qt(),Gt.autoReset=x,vt.enabled=O,vt.autoUpdate=j,vt.needsUpdate=Y,vt.type=Z}function Tt(x){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ne(x){const O=x.target;O.removeEventListener("dispose",ne),be(O)}function be(x){On(x),At.remove(x)}function On(x){const O=At.get(x).programs;O!==void 0&&(O.forEach(function(j){at.releaseProgram(j)}),x.isShaderMaterial&&at.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,j,Y,Z,yt){O===null&&(O=pe);const Ct=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,St=nd(x,O,j,Y,Z);q.setMaterial(Y,Ct);let wt=j.index,It=1;if(Y.wireframe===!0){if(wt=K.getWireframeAttribute(j),wt===void 0)return;It=2}const kt=j.drawRange,$t=j.attributes.position;let Lt=kt.start*It,Zt=(kt.start+kt.count)*It;yt!==null&&(Lt=Math.max(Lt,yt.start*It),Zt=Math.min(Zt,(yt.start+yt.count)*It)),wt!==null?(Lt=Math.max(Lt,0),Zt=Math.min(Zt,wt.count)):$t!=null&&(Lt=Math.max(Lt,0),Zt=Math.min(Zt,$t.count));const ge=Zt-Lt;if(ge<0||ge===1/0)return;gt.setup(Z,Y,St,j,wt);let ue,oe=et;if(wt!==null&&(ue=v.get(wt),oe=xt,oe.setIndex(ue)),Z.isMesh)Y.wireframe===!0?(q.setLineWidth(Y.wireframeLinewidth*Ce()),oe.setMode(H.LINES)):oe.setMode(H.TRIANGLES);else if(Z.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),q.setLineWidth(Fe*Ce()),Z.isLineSegments?oe.setMode(H.LINES):Z.isLineLoop?oe.setMode(H.LINE_LOOP):oe.setMode(H.LINE_STRIP)}else Z.isPoints?oe.setMode(H.POINTS):Z.isSprite&&oe.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))oe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Fe=Z._multiDrawStarts,Dt=Z._multiDrawCounts,He=Z._multiDrawCount,te=wt?v.get(wt).bytesPerElement:1,si=At.get(Y).currentProgram.getUniforms();for(let Oe=0;Oe<He;Oe++)si.setValue(H,"_gl_DrawID",Oe),oe.render(Fe[Oe]/te,Dt[Oe])}else if(Z.isInstancedMesh)oe.renderInstances(Lt,ge,Z.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Dt=Math.min(j.instanceCount,Fe);oe.renderInstances(Lt,ge,Dt)}else oe.render(Lt,ge)};function Jo(x,O,j,Y){J!==null&&x.isNodeMaterial&&J.setObject(Y,x),Pt===!0&&rt.setState(x,j,!1),x.transparent===!0&&x.side===rn&&x.forceSinglePass===!1?(x.side=Ze,x.needsUpdate=!0,er(x,O,Y),x.side=gi,x.needsUpdate=!0,er(x,O,Y),x.side=rn):er(x,O,Y)}this.compile=function(x,O,j=null){j===null&&(j=x),J!==null&&J.renderStart(x,O,j),C=nt.get(j),C.init(O),T.push(C),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),x!==j&&x.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),C.setupLights(),J!==null&&J.updateLights(C.state.lightsArray),Wt=this.localClippingEnabled,Pt=rt.init(this.clippingPlanes,Wt),Pt===!0&&rt.setGlobalState(this.clippingPlanes,O),J!==null&&vt.render(C.state.shadowsArray,j,O);const Y=new Set;return x.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const St=yt[Ct];Jo(St,j,O,Z),Y.add(St)}else Jo(yt,j,O,Z),Y.add(yt)}),C=T.pop(),J!==null&&J.renderEnd(),Y},this.compileAsync=function(x,O,j=null){const Y=this.compile(x,O,j);return new Promise(Z=>{function yt(){if(Y.forEach(function(Ct){const wt=At.get(Ct).currentProgram;(wt===void 0||wt.isReady())&&Y.delete(Ct)}),Y.size===0){Z(x);return}setTimeout(yt,10)}ae.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Fs=null;function td(x){Fs&&Fs(x)}function Qo(){ri.stop()}function jo(){ri.start()}const ri=new yu;ri.setAnimationLoop(td),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(x){Fs=x,dt.setAnimationLoop(x),x===null?ri.stop():ri.start()},dt.addEventListener("sessionstart",Qo),dt.addEventListener("sessionend",jo),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;J!==null&&J.renderStart(x,O);const j=dt.enabled===!0&&dt.isPresenting===!0,Y=V!==null&&(W===null||j)&&V.begin(U,W);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(O),O=dt.getCamera()),x.isScene===!0&&x.onBeforeRender(U,x,O,W),C=nt.get(x,T.length),C.init(O),C.state.textureUnits=Bt.getTextureUnits(),T.push(C),Kt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ct.setFromArrayCamera(O):lt.setFromProjectionMatrix(Kt,hn,O.reversedDepth),Wt=this.localClippingEnabled,Pt=rt.init(this.clippingPlanes,Wt),E=Mt.get(x,_.length),E.init(),_.push(E),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){const Ct=U.xr.getDepthSensingMesh();Ct!==null&&Os(Ct,O,-1/0,U.sortObjects)}Os(x,O,0,U.sortObjects),E.finish(),J!==null&&J.updateLights(C.state.lightsArray),U.sortObjects===!0&&E.sort(z,w),xe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,xe&&N.addToRenderList(E,x),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&rt.beginShadows();const Z=C.state.shadowsArray;if(vt.render(Z,x,O),Pt===!0&&rt.endShadows(),(Y&&V.hasRenderPass())===!1){const Ct=E.opaque,St=E.transmissive;if(C.setupLights(),O.isArrayCamera){const wt=O.cameras;if(St.length>0)for(let It=0,kt=wt.length;It<kt;It++){const $t=wt[It];el(Ct,St,x,$t)}xe&&N.render(x);for(let It=0,kt=wt.length;It<kt;It++){const $t=wt[It];tl(E,x,$t,$t.viewport)}}else St.length>0&&el(Ct,St,x,O),xe&&N.render(x),tl(E,x,O)}W!==null&&L===0&&(Bt.updateMultisampleRenderTarget(W),Bt.updateRenderTargetMipmap(W)),Y&&V.end(U),x.isScene===!0&&x.onAfterRender(U,x,O),gt.resetDefaultState(),F=-1,X=null,T.pop(),T.length>0?(C=T[T.length-1],Bt.setTextureUnits(C.state.textureUnits),Pt===!0&&rt.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,J!==null&&J.renderEnd()};function Os(x,O,j,Y){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)j=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLight)C.pushLight(x),x.castShadow&&C.pushShadow(x);else if(x.isSprite){const Ct=O.isArrayCamera?ct:lt;if(!x.frustumCulled||x.intersectsFrustum(Ct)){Y&&de.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Kt);const St=ut.update(x),wt=x.material;wt.visible&&E.push(x,St,wt,j,de.z,null,O)}}else if(x.isMesh||x.isLine||x.isPoints){const Ct=O.isArrayCamera?ct:lt;if(!x.frustumCulled||x.intersectsFrustum(Ct)){const St=ut.update(x),wt=x.material;if(Y&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),de.copy(x.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),de.copy(St.boundingSphere.center)),de.applyMatrix4(x.matrixWorld).applyMatrix4(Kt)),Array.isArray(wt)){const It=St.groups;for(let kt=0,$t=It.length;kt<$t;kt++){const Lt=It[kt],Zt=wt[Lt.materialIndex];Zt&&Zt.visible&&E.push(x,St,Zt,j,de.z,Lt,O)}}else wt.visible&&E.push(x,St,wt,j,de.z,null,O)}}}const yt=x.children;for(let Ct=0,St=yt.length;Ct<St;Ct++)Os(yt[Ct],O,j,Y)}function tl(x,O,j,Y){const{opaque:Z,transmissive:yt,transparent:Ct}=x;C.setupLightsView(j),Pt===!0&&rt.setGlobalState(U.clippingPlanes,j),Y&&q.viewport(tt.copy(Y)),Z.length>0&&Ar(Z,O,j),yt.length>0&&Ar(yt,O,j),Ct.length>0&&Ar(Ct,O,j),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function el(x,O,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Y.id]===void 0){const Lt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Y.id]=new yn(1,1,{generateMipmaps:!0,type:Lt?bn:tn,minFilter:qn,samples:Math.max(4,ce.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const yt=C.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||tt;yt.setSize(Ct.z*U.transmissionResolutionScale,Ct.w*U.transmissionResolutionScale);const St=U.getRenderTarget(),wt=U.getActiveCubeFace(),It=U.getActiveMipmapLevel();U.setRenderTarget(yt),U.getClearColor(Q),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),xe&&N.render(j);const kt=U.toneMapping;U.toneMapping=Nn;const $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),C.setupLightsView(Y),Pt===!0&&rt.setGlobalState(U.clippingPlanes,Y),Ar(x,j,Y),Bt.updateMultisampleRenderTarget(yt),Bt.updateRenderTargetMipmap(yt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Zt=0,ge=O.length;Zt<ge;Zt++){const ue=O[Zt],{object:oe,geometry:Fe,material:Dt,group:He}=ue;if(Dt.side===rn&&oe.layers.test(Y.layers)){const te=Dt.side;Dt.side=Ze,Dt.needsUpdate=!0,nl(oe,j,Y,Fe,Dt,He),Dt.side=te,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Bt.updateMultisampleRenderTarget(yt),Bt.updateRenderTargetMipmap(yt))}U.setRenderTarget(St,wt,It),U.setClearColor(Q,ht),$t!==void 0&&(Y.viewport=$t),U.toneMapping=kt}function Ar(x,O,j){const Y=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,yt=x.length;Z<yt;Z++){const Ct=x[Z],{object:St,geometry:wt,group:It}=Ct;let kt=Ct.material;kt.allowOverride===!0&&Y!==null&&(kt=Y),St.layers.test(j.layers)&&nl(St,O,j,wt,kt,It)}}function nl(x,O,j,Y,Z,yt){J!==null&&Z.isNodeMaterial&&J.setObject(x,Z),x.onBeforeRender(U,O,j,Y,Z,yt),x.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),Z.onBeforeRender(U,O,j,Y,x,yt),Z.transparent===!0&&Z.side===rn&&Z.forceSinglePass===!1?(Z.side=Ze,Z.needsUpdate=!0,U.renderBufferDirect(j,O,Y,Z,x,yt),Z.side=gi,Z.needsUpdate=!0,U.renderBufferDirect(j,O,Y,Z,x,yt),Z.side=rn):U.renderBufferDirect(j,O,Y,Z,x,yt),x.onAfterRender(U,O,j,Y,Z,yt)}function il(x){let O=0;for(const j of x)j.texture!==null&&O++;return O}function er(x,O,j){O.isScene!==!0&&(O=pe);const Y=At.get(x),Z=C.state.lights,yt=C.state.shadowsArray,Ct=Z.state.version,St=at.getParameters(x,Z.state,yt,O,j,C.state.lightProbeGridArray),wt=at.getProgramCacheKey(St);let It=Y.programs;Y.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;const kt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;Y.envMap=A.get(x.envMap||Y.environment,kt),Y.envMapRotation=Y.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,It===void 0&&(x.addEventListener("dispose",ne),It=new Map,Y.programs=It,Y.programVariants=new Map);let $t=It.get(wt);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===Ct)return sl(x,St),$t}else St.uniforms=at.getUniforms(x),J!==null&&x.isNodeMaterial&&J.build(x,j,St),x.onBeforeCompile(St,U),$t=at.acquireProgram(St,wt),It.set(wt,$t),Y.uniforms=St.uniforms;const Lt=Y.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),sl(x,St),Y.needsLights=rd(x),Y.lightsStateVersion=Ct,Y.needsLights&&(Lt.ambientLightColor.value=Z.state.ambient,Lt.lightProbe.value=Z.state.probe,Lt.sunLights.value=Z.state.sun,Lt.sunLightShadows.value=Z.state.sunShadow,Lt.directionalLights.value=Z.state.directional,Lt.directionalLightShadows.value=Z.state.directionalShadow,Lt.spotLights.value=Z.state.spot,Lt.spotLightShadows.value=Z.state.spotShadow,Lt.rectAreaLights.value=Z.state.rectArea,Lt.ltc_1.value=Z.state.rectAreaLTC1,Lt.ltc_2.value=Z.state.rectAreaLTC2,Lt.pointLights.value=Z.state.point,Lt.pointLightShadows.value=Z.state.pointShadow,Lt.hemisphereLights.value=Z.state.hemi,Lt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Lt.sunShadowCascade.value=Z.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Z.state.spotLightMatrix,Lt.spotLightMap.value=Z.state.spotLightMap,Lt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=il(C.state.lightProbeGridArray),Y.currentProgram=$t,Y.uniformsList=null,$t}function ed(x,O,j,Y,Z){const yt=At.get(x),Ct=yt.currentProgram.id+","+Y+","+Z;let St=yt.programVariants.get(Ct);return St===void 0?(St=er(x,O,j),yt.programVariants.set(Ct,St)):(yt.currentProgram=St,yt.uniformsList=null,yt.outputColorSpace=Y,yt.toneMapping=Z),St}function rl(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=gs.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function sl(x,O){const j=At.get(x);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function nd(x,O,j,Y,Z){O.isScene!==!0&&(O=pe),Bt.resetTextureUnits();const yt=O.fog,Ct=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,St=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Jt.workingColorSpace,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,It=A.get(Y.envMap||Ct,wt),kt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$t=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!j.morphAttributes.position,Zt=!!j.morphAttributes.normal,ge=!!j.morphAttributes.color;let ue=Nn;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ue=U.toneMapping);const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=oe!==void 0?oe.length:0,Dt=At.get(Y),He=C.state.lights;if(Pt===!0&&(Wt===!0||x!==X)){const fe=x===X&&Y.id===F;rt.setState(Y,x,fe)}let te=!1,si=!1;Y.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==He.state.version||Z.isBatchedMesh&&Dt.batching===!1||!Z.isBatchedMesh&&Dt.batching===!0||Z.isBatchedMesh&&Dt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Dt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Dt.instancing===!1||!Z.isInstancedMesh&&Dt.instancing===!0||Z.isSkinnedMesh&&Dt.skinning===!1||!Z.isSkinnedMesh&&Dt.skinning===!0||Z.isInstancedMesh&&Dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Dt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Dt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Dt.instancingMorph===!1&&Z.morphTexture!==null||Dt.envMap!==It||Y.fog===!0&&Dt.fog!==yt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==kt||Dt.vertexTangents!==$t||Dt.morphTargets!==Lt||Dt.morphNormals!==Zt||Dt.morphColors!==ge||Dt.morphTargetsCount!==Fe||Dt.numLightProbeGrids!==il(C.state.lightProbeGridArray)?te=!0:(Dt.outputColorSpace!==St||Dt.toneMapping!==ue)&&(si=!0):(te=!0,Dt.__version=Y.version);let Oe=Dt.currentProgram;(te===!0||si===!0)&&(Oe=si===!0?ed(Y,O,Z,St,ue):er(Y,O,Z),J&&Y.isNodeMaterial&&J.onUpdateProgram(Y,Oe,Dt));let Rr=!1,Bn=!1,ai=!1;const Qt=Oe.getUniforms(),Pe=Dt.uniforms;if(q.useProgram(Oe.program)&&(Rr=!0,Bn=!0,ai=!0),Y.id!==F&&(F=Y.id,Bn=!0),Rr||X!==x){q.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Qt.setValue(H,"projectionMatrix",x.projectionMatrix),Qt.setValue(H,"viewMatrix",x.matrixWorldInverse);const Te=Qt.map.cameraPosition;Te!==void 0&&Te.setValue(H,me.setFromMatrixPosition(x.matrixWorld)),ce.logarithmicDepthBuffer&&Qt.setValue(H,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Qt.setValue(H,"isOrthographic",x.isOrthographicCamera===!0),X!==x&&(X=x,Bn=!0,ai=!0)}if(Dt.needsLights&&(He.state.sunShadowMap.length>0&&Qt.setValue(H,"sunShadowMap",He.state.sunShadowMap,Bt),He.state.directionalShadowMap.length>0&&Qt.setValue(H,"directionalShadowMap",He.state.directionalShadowMap,Bt),He.state.spotShadowMap.length>0&&Qt.setValue(H,"spotShadowMap",He.state.spotShadowMap,Bt),He.state.pointShadowMap.length>0&&Qt.setValue(H,"pointShadowMap",He.state.pointShadowMap,Bt)),Z.isSkinnedMesh){Qt.setOptional(H,Z,"bindMatrix"),Qt.setOptional(H,Z,"bindMatrixInverse");const fe=Z.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),Qt.setValue(H,"boneTexture",fe.boneTexture,Bt))}Z.isBatchedMesh&&(Qt.setOptional(H,Z,"batchingTexture"),Qt.setValue(H,"batchingTexture",Z._matricesTexture,Bt),Qt.setOptional(H,Z,"batchingIdTexture"),Qt.setValue(H,"batchingIdTexture",Z._indirectTexture,Bt),Qt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Qt.setValue(H,"batchingColorTexture",Z._colorsTexture,Bt));const an=j.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&st.update(Z,j,Oe),(Bn||Dt.receiveShadow!==Z.receiveShadow)&&(Dt.receiveShadow=Z.receiveShadow,Qt.setValue(H,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Pe.envMapIntensity.value=O.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=H_()),Bn){if(Qt.setValue(H,"toneMappingExposure",U.toneMappingExposure),Dt.needsLights&&id(Pe,ai),yt&&Y.fog===!0&&mt.refreshFogUniforms(Pe,yt),mt.refreshMaterialUniforms(Pe,Y,pt,bt,C.state.transmissionRenderTarget[x.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){const fe=M;let Te=0;for(const wn of C.state.lightProbeGridArray)wn.texture!==null&&(fe.textures[Te]=wn.texture,fe.min[Te]=wn.boundingBox.min,fe.max[Te]=wn.boundingBox.max,fe.resolution[Te]=wn.resolution,Te++);for(const wn in fe)fe[wn].length=Te;Pe.probesSH.value=fe.textures,Pe.probesMin.value=fe.min,Pe.probesMax.value=fe.max,Pe.probesResolution.value=fe.resolution}gs.upload(H,rl(Dt),Pe,Bt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(gs.upload(H,rl(Dt),Pe,Bt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Qt.setValue(H,"center",Z.center),Qt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Qt.setValue(H,"normalMatrix",Z.normalMatrix),Qt.setValue(H,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const fe=Y.uniformsGroups;for(let Te=0,wn=fe.length;Te<wn;Te++){const ol=fe[Te];Nt.update(ol,Oe),Nt.bind(ol,Oe)}}return Oe}function id(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.sunLights.needsUpdate=O,x.sunLightShadows.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function rd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(x,O,j){const Y=At.get(x);Y.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),At.get(x.texture).__webglTexture=O,At.get(x.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){const j=At.get(x);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(x,O=0,j=0){W=x,B=O,L=j;let Y=null,Z=!1,yt=!1;if(x){const St=At.get(x);if(St.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(H.FRAMEBUFFER,St.__webglFramebuffer),tt.copy(x.viewport),ot.copy(x.scissor),Rt=x.scissorTest,q.viewport(tt),q.scissor(ot),q.setScissorTest(Rt),F=-1;return}else if(St.__webglFramebuffer===void 0)Bt.setupRenderTarget(x);else if(St.__hasExternalTextures)Bt.rebindTextures(x,At.get(x.texture).__webglTexture,At.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const kt=x.depthTexture;if(St.__boundDepthTexture!==kt){if(kt!==null&&At.has(kt)&&(x.width!==kt.image.width||x.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(x)}}const wt=x.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(yt=!0);const It=At.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(It[O])?Y=It[O][j]:Y=It[O],Z=!0):x.samples>0&&Bt.useMultisampledRTT(x)===!1?Y=At.get(x).__webglMultisampledFramebuffer:Array.isArray(It)?Y=It[j]:Y=It,tt.copy(x.viewport),ot.copy(x.scissor),Rt=x.scissorTest}else tt.copy(D).multiplyScalar(pt).floor(),ot.copy($).multiplyScalar(pt).floor(),Rt=it;if(j!==0&&(Y=P),q.bindFramebuffer(H.FRAMEBUFFER,Y)&&q.drawBuffers(x,Y),q.viewport(tt),q.scissor(ot),q.setScissorTest(Rt),Z){const St=At.get(x.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,St.__webglTexture,j)}else if(yt){const St=O;for(let wt=0;wt<x.textures.length;wt++){const It=At.get(x.textures[wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+wt,It.__webglTexture,j,St)}}else if(x!==null&&j!==0){const St=At.get(x.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,St.__webglTexture,j)}F=-1};function al(x){const O=At.get(x);return(O.__readFormat!==x.format||O.__readType!==x.type)&&(O.__readFormat=x.format,O.__readType=x.type,O.__formatReadable=ce.textureFormatReadable(x.format),O.__typeReadable=ce.textureTypeReadable(x.type)),O}this.readRenderTargetPixels=function(x,O,j,Y,Z,yt,Ct,St=0){if(!(x&&x.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=At.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt){q.bindFramebuffer(H.FRAMEBUFFER,wt);try{const It=x.textures[St],kt=It.format,$t=It.type;x.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St);const Lt=al(It);if(Lt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-Y&&j>=0&&j<=x.height-Z&&H.readPixels(O,j,Y,Z,ft.convert(kt),ft.convert($t),yt)}finally{const It=W!==null?At.get(W).__webglFramebuffer:null;q.bindFramebuffer(H.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(x,O,j,Y,Z,yt,Ct,St=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=At.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt)if(O>=0&&O<=x.width-Y&&j>=0&&j<=x.height-Z){q.bindFramebuffer(H.FRAMEBUFFER,wt);const It=x.textures[St],kt=It.format,$t=It.type;x.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St);const Lt=al(It);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Zt),H.bufferData(H.PIXEL_PACK_BUFFER,yt.byteLength,H.STREAM_READ),H.readPixels(O,j,Y,Z,ft.convert(kt),ft.convert($t),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const ge=W!==null?At.get(W).__webglFramebuffer:null;q.bindFramebuffer(H.FRAMEBUFFER,ge);const ue=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Hd(H,ue,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Zt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,yt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Zt),H.deleteSync(ue),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,O=null,j=0){const Y=Math.pow(2,-j),Z=Math.floor(x.image.width*Y),yt=Math.floor(x.image.height*Y),Ct=O!==null?O.x:0,St=O!==null?O.y:0;Bt.setTexture2D(x,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,Ct,St,Z,yt),q.unbindTexture()},this.copyTextureToTexture=function(x,O,j=null,Y=null,Z=0,yt=0){let Ct,St,wt,It,kt,$t,Lt,Zt,ge;const ue=x.isCompressedTexture?x.mipmaps[yt]:x.image;if(j!==null)Ct=j.max.x-j.min.x,St=j.max.y-j.min.y,wt=j.isBox3?j.max.z-j.min.z:1,It=j.min.x,kt=j.min.y,$t=j.isBox3?j.min.z:0;else{const Qt=Math.pow(2,-Z);Ct=Math.floor(ue.width*Qt),St=Math.floor(ue.height*Qt),x.isDataArrayTexture?wt=ue.depth:x.isData3DTexture?wt=Math.floor(ue.depth*Qt):wt=1,It=0,kt=0,$t=0}Y!==null?(Lt=Y.x,Zt=Y.y,ge=Y.z):(Lt=0,Zt=0,ge=0);const oe=ft.convert(O.format),Fe=ft.convert(O.type);let Dt;O.isData3DTexture?(Bt.setTexture3D(O,0),Dt=H.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Bt.setTexture2DArray(O,0),Dt=H.TEXTURE_2D_ARRAY):(Bt.setTexture2D(O,0),Dt=H.TEXTURE_2D),q.activeTexture(H.TEXTURE0),q.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),q.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),q.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);const He=q.getParameter(H.UNPACK_ROW_LENGTH),te=q.getParameter(H.UNPACK_IMAGE_HEIGHT),si=q.getParameter(H.UNPACK_SKIP_PIXELS),Oe=q.getParameter(H.UNPACK_SKIP_ROWS),Rr=q.getParameter(H.UNPACK_SKIP_IMAGES);q.pixelStorei(H.UNPACK_ROW_LENGTH,ue.width),q.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ue.height),q.pixelStorei(H.UNPACK_SKIP_PIXELS,It),q.pixelStorei(H.UNPACK_SKIP_ROWS,kt),q.pixelStorei(H.UNPACK_SKIP_IMAGES,$t);const Bn=x.isDataArrayTexture||x.isData3DTexture,ai=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const Qt=At.get(x),Pe=At.get(O),an=At.get(Qt.__renderTarget),fe=At.get(Pe.__renderTarget);q.bindFramebuffer(H.READ_FRAMEBUFFER,an.__webglFramebuffer),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Te=0;Te<wt;Te++)Bn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,At.get(x).__webglTexture,Z,$t+Te),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,At.get(O).__webglTexture,yt,ge+Te)),H.blitFramebuffer(It,kt,It+Ct,kt+St,Lt,Zt,Lt+Ct,Zt+St,H.DEPTH_BUFFER_BIT,H.NEAREST);q.bindFramebuffer(H.READ_FRAMEBUFFER,null),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||x.isRenderTargetTexture||At.has(x)){const Qt=At.get(x),Pe=At.get(O);q.bindFramebuffer(H.READ_FRAMEBUFFER,y),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,I);for(let an=0;an<wt;an++)Bn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qt.__webglTexture,Z,$t+an):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qt.__webglTexture,Z),ai?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pe.__webglTexture,yt,ge+an):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,yt),Z!==0?H.blitFramebuffer(It,kt,It+Ct,kt+St,Lt,Zt,Lt+Ct,Zt+St,H.COLOR_BUFFER_BIT,H.NEAREST):ai?H.copyTexSubImage3D(Dt,yt,Lt,Zt,ge+an,It,kt,Ct,St):H.copyTexSubImage2D(Dt,yt,Lt,Zt,It,kt,Ct,St);q.bindFramebuffer(H.READ_FRAMEBUFFER,null),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ai?x.isDataTexture||x.isData3DTexture?H.texSubImage3D(Dt,yt,Lt,Zt,ge,Ct,St,wt,oe,Fe,ue.data):O.isCompressedArrayTexture?H.compressedTexSubImage3D(Dt,yt,Lt,Zt,ge,Ct,St,wt,oe,ue.data):H.texSubImage3D(Dt,yt,Lt,Zt,ge,Ct,St,wt,oe,Fe,ue):x.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,yt,Lt,Zt,Ct,St,oe,Fe,ue.data):x.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,yt,Lt,Zt,ue.width,ue.height,oe,ue.data):H.texSubImage2D(H.TEXTURE_2D,yt,Lt,Zt,Ct,St,oe,Fe,ue);q.pixelStorei(H.UNPACK_ROW_LENGTH,He),q.pixelStorei(H.UNPACK_IMAGE_HEIGHT,te),q.pixelStorei(H.UNPACK_SKIP_PIXELS,si),q.pixelStorei(H.UNPACK_SKIP_ROWS,Oe),q.pixelStorei(H.UNPACK_SKIP_IMAGES,Rr),yt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&H.generateMipmap(Dt),q.unbindTexture()},this.initRenderTarget=function(x){At.get(x).__webglFramebuffer===void 0&&Bt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Bt.setTextureCube(x,0):x.isData3DTexture?Bt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Bt.setTexture2DArray(x,0):Bt.setTexture2D(x,0),q.unbindTexture()},this.resetState=function(){B=0,L=0,W=null,q.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const sn=55,Tn=1760,Iu=Math.log2(Tn/sn),Ne=16,Ae=15,Ke=5,pr=.72,_s=Ke*pr,pi=4,mo=4,ko=pi*mo,go=40,_o=240,Nu=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function re(i,t,e){return Math.min(e,Math.max(t,i))}function xr(i){return ko*(60/i)}function Ho(i){const t=Math.max(i,1e-6);return Math.log2(t/sn)/Iu*Ae}function V_(i){const t=i/Ae*Iu;return sn*2**t}function vs(){const i=[];for(let t=33;t<=93;t++){const e=440*2**((t-69)/12),n=Nu[t%12],r=Math.floor(t/12)-1;i.push({freq:e,y:Ho(e),label:`${n}${r}`,natural:!n.includes("#"),octaveAnchor:n==="A"})}return i}function vo(i){if(!Number.isFinite(i)||i<=0)return"—";const t=69+12*Math.log2(i/440),e=Math.round(t),n=Math.round((t-e)*100),r=Nu[(e%12+12)%12],s=Math.floor(e/12)-1,a=`${r}${s}`;return n===0?a:`${a} ${n>0?`+${n}`:n}¢`}function Uu(i){return`${i.toFixed(2)} Hz`}function W_(i){const t=ko*4;let e=Math.round(re(i,0,1)*t);return e>=t&&(e=0),e/t}function Go(i){const t=re(i,0,.999999)*ko,e=Math.floor(t/mo)+1,n=t%mo+1;return`bar ${e} · beat ${n.toFixed(2)}`}function mr(i){return{x:i.x*Ne,y:Ho(i.y),z:i.z*Ke}}function zi(i){const t=re(i.y,0,Ae);return{x:re(i.x/Ne,0,1),y:re(V_(t),sn,Tn),z:re(i.z/Ke,0,1)}}function tr(i,t){return t<i?t+1-i:t-i}function Av(i,t,e){return Math.max(.05,tr(i,t)*xr(e))}function Rv(i,t,e){const n=t<i,r=tr(i,t);if(r<=1e-6)return null;let s=e-i;return n&&s<0&&(s+=1),s<=1e-4||s>=r-.001?null:s/r}function X_(i,t,e,n){const r=re(e,0,1);if(n==="linear")return i+(t-i)*r;const s=Math.max(i,1e-4),a=Math.max(t,1e-4);return s*(a/s)**r}const Fu=.05;function xo(i,t,e,n=64){const r=tr(i.x,t.x),s=[];for(let a=0;a<=n;a++){const o=a/n;let c=i.x+r*o;c>1&&(c-=1);const l=X_(i.y,t.y,o,e),h=i.z+(t.z-i.z)*o;s.push({x:c*Ne,y:Ho(l),z:h*Ke})}return s}const $n=pi,_c=1/pi;function xs(i){if(!(i<1))return 0;const t=Math.floor(re(i,0,1)*$n);return t>=$n?$n-1:t}function Ou(i){return i/$n}function vc(i){return(i+.5)/$n}function Bu(i){return`bar ${i+1}`}function q_(i,t,e){const n=[...i],r=new Map(n.map(d=>[d.id,d])),s=new Set;for(const d of t){const u=r.get(d.fromPointId),m=r.get(d.toPointId);!u||!m||xs(m.x)===e&&xs(u.x)!==e&&s.add(m.id)}const a=n.filter(d=>xs(d.x)===e&&!s.has(d.id)),o=Ou(e),c=new Map(a.map((d,u)=>[d.id,u])),l=a.map(d=>({dx:re(d.x>=1?0:d.x-o,0,_c-1e-6),y:d.y,z:d.z,velocity:d.velocity,waveType:d.waveType})),h=[];for(const d of t){const u=c.get(d.fromPointId),m=c.get(d.toPointId);if(u===void 0||m===void 0)continue;const g=a[u],S=a[m];!g||!S||tr(g.x,S.x)>_c+1e-6||h.push({from:u,to:m,curveType:d.curveType})}return{points:l,bends:h}}const zu=8192;function Y_(i){return i<=1?2:48}function K_(i){return 440*2**((i-69)/12)}function xc(i,t,e){const r=(t-zu)/8192*Y_(e),s=K_(i)*2**(r/12);return Math.min(Tn,Math.max(sn,s))}function $_(i){const t=new Map,e=new Map;return n=>{if(n.length<2)return;const r=n[0]??0;if(r>=240)return;const s=r&240,a=(r&15)+1,o=n[1]??0,c=n[2]??0;if(s===144&&c>0){const l=`${a}:${o}`;e.set(a,{note:o,id:l}),i.press(l,xc(o,t.get(a)??zu,a));return}if(s===128||s===144&&c===0){const l=`${a}:${o}`;e.get(a)?.note===o&&e.delete(a),i.release(l);return}if(s===224&&n.length>=3){const l=(c&127)<<7|o&127;t.set(a,l);const h=e.get(a);if(!h)return;i.retune(h.id,xc(h.note,l,a));return}if(s===176&&o===74){const l=e.get(a);if(!l)return;i.brighten(l.id,c/127)}}}function Z_(i){let t=null,e=null;const n=r=>{r.data&&i(Array.from(r.data))};return{async request(){if(!navigator.requestMIDIAccess)return[];t=await navigator.requestMIDIAccess({sysex:!1});const r=[];for(const s of t.inputs.values())r.push({id:s.id,name:s.name||"MIDI input"});return r},select(r){if(e&&(e.onmidimessage=null),e=null,!t||!r)return;const s=t.inputs.get(r);s&&(e=s,e.onmidimessage=n)}}}const ma=10,J_=5,Q_=440,j_=20,t0=5e3,Xi=.75,e0=.1,gr=4,Sc={KeyA:0,KeyW:1,KeyS:2,KeyE:3,KeyD:4,KeyF:5,KeyT:6,KeyG:7,KeyY:8,KeyH:9,KeyU:10,KeyJ:11,KeyK:12,KeyO:13,KeyL:14,KeyP:15},n0=[0,2,4,5,7,9,11,12,14],i0=.04,r0=e0+.18;function ku(i,t){return 440*2**(((i+1)*12+t-69)/12)}function Mc(i){return n0.every(t=>{const e=ku(i,t);return e>=sn&&e<=Tn})}function s0(){let i=gr,t=gr;for(let e=gr;e>=-2&&Mc(e);e-=1)i=e;for(let e=gr;e<=9&&Mc(e);e+=1)t=e;return{min:i,max:t}}function a0(i){const{store:t,audio:e,scheduler:n}=i,r=s0();let s=!1,a=gr,o=null,c=null;const l=new Set;function h(y){a=Math.min(r.max,Math.max(r.min,a+y))}function d(y){const I=Sc[y];if(I===void 0)return null;const B=ku(a,I);return B<sn-.05||B>Tn+.05?null:B}function u(y,I,B=pr){let L="";const W=n.playhead();return t.batch(()=>{L=t.addPoint({x:W,y,z:B,velocity:Xi,waveType:t.waveType}),I&&t.points.has(I)&&t.addBend(I,L)}),n.suppressUntilNextLoop(L),{id:L,x:t.points.get(L)?.x??W}}function m(y,I){e.beginGesture(I,pr,Xi);const B=u(I,null);o={keys:new Set([y]),tailKey:y,tailId:B.id,tailX:B.x,tailFreq:I,z:pr,startX:B.x,primed:!1}}function g(y,I){const B=o;if(!B)return;B.keys.add(y),B.tailKey=y,e.gestureLive()?e.glideGesture(I,t.bendCurve):e.beginGesture(I,pr,Xi);const L=t.points.has(B.tailId)?B.tailId:null,W=u(I,L,B.z);B.tailId=W.id,B.tailX=W.x,B.tailFreq=I}function S(y,I){return tr(y,I)*xr(t.bpm)>=i0}function f(){const y=o;if(o=null,!y)return;const I=n.playhead();t.points.has(y.tailId)&&S(y.tailX,I)&&u(y.tailFreq,y.tailId,y.z),e.releaseGesture()}function p(){o=null,l.clear(),e.releaseGesture()}function b(y){const I=n.playhead();let B=y-I;return B<=1e-4&&(B+=1),B*xr(t.bpm)}function R(){const y=o;if(!y||!n.isPlaying)return;const I=xr(t.bpm),B=b(y.startX);if(B<=r0){f();return}if(y.primed&&B>I*.75){f();return}B<I*.5&&(y.primed=!0)}function M(){return n.isPlaying&&e.context.state==="running"?Promise.resolve():(c||(c=(async()=>{await e.ensureRunning(),n.isPlaying||await n.play()})().finally(()=>{c=null})),c)}function E(y){return y>=sn-.05&&y<=Tn+.05}async function C(y,I,B){if(!(n.isPlaying&&e.context.state==="running")){try{await M()}catch(L){console.warn(L),l.delete(y);return}if(B&&!s)return;if(!l.has(y)){if(o)return;m(y,I),f();return}}B&&!s||!l.has(y)||(o?g(y,I):m(y,I))}function _(y,I){!E(I)||l.has(y)||(l.add(y),C(y,I,!1))}function T(y){l.delete(y);const I=o;I?.keys.has(y)&&(I.keys.delete(y),I.keys.size===0&&f())}function V(y,I){const B=o;!B||B.tailKey!==y||!E(I)||(B.tailFreq=I,e.gestureLive()&&e.glideGesture(I,t.bendCurve))}function U(y,I){const B=o;if(!B||B.tailKey!==y)return;const L=Math.min(1,Math.max(0,I));B.z=L,t.points.has(B.tailId)&&t.updatePoint(B.tailId,{z:L}),e.setGestureBrightness?.(L)}function G(y){if(!s||y.repeat||y.ctrlKey||y.metaKey||y.altKey)return!1;const I=y.code;if(I==="KeyZ"||I==="KeyX")return h(I==="KeyX"?1:-1),!0;if(!(I in Sc))return!1;const B=d(I);return B===null||l.has(I)||(l.add(I),C(I,B,!0)),!0}function J(y){T(y.code)}const P=()=>{l.clear(),f()};return window.addEventListener("blur",P),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&P()}),{get enabled(){return s},get octaveLabel(){return`C${a}`},setEnabled(y){if(s!==y&&(s=y,!y))for(const I of[...l])I.startsWith("Key")&&T(I)},keyDown:G,keyUp:J,press:_,release:T,retune:V,brighten:U,tick:R,finish:f,cancel:p}}function o0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ga,yc;function l0(){if(yc)return ga;yc=1;var i={VERSION:"3.2.1",HEADER_CHUNK_TYPE:[77,84,104,100],HEADER_CHUNK_LENGTH:[0,0,0,6],HEADER_CHUNK_FORMAT0:[0,0],HEADER_CHUNK_FORMAT1:[0,1],HEADER_CHUNK_DIVISION:[0,128],TRACK_CHUNK_TYPE:[77,84,114,107],META_EVENT_ID:255,META_SMTPE_OFFSET:84},t=(z,w)=>Array(Math.abs(w)+1).join(z);function e(z){return z!==null&&typeof z=="object"&&typeof z.name=="string"}function n(z){return z!==null&&typeof z=="object"&&typeof z.step=="number"&&typeof z.alt=="number"}var r=[0,2,4,-1,1,3,5],s=r.map(z=>Math.floor(z*7/12));function a(z){const{step:w,alt:D,oct:$,dir:it=1}=z,lt=r[w]+7*D;if($===void 0)return[it*lt];const ct=$-s[w]-4*D;return[it*lt,it*ct]}var o={empty:!0,name:"",pc:"",acc:""},c=new Map,l=z=>"CDEFGAB".charAt(z),h=z=>z<0?t("b",-z):t("#",z),d=z=>z[0]==="b"?-z.length:z.length;function u(z){const w=JSON.stringify(z),D=c.get(w);if(D)return D;const $=typeof z=="string"?p(z):n(z)?u(b(z)):e(z)?u(z.name):o;return c.set(w,$),$}var m=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function g(z){const w=m.exec(z);return[w[1].toUpperCase(),w[2].replace(/x/g,"##"),w[3],w[4]]}var S=(z,w)=>(z%w+w)%w,f=[0,2,4,5,7,9,11];function p(z){const w=g(z);if(w[0]===""||w[3]!=="")return o;const D=w[0],$=w[1],it=w[2],lt=(D.charCodeAt(0)+3)%7,ct=d($),Pt=it.length?+it:void 0,Wt=a({step:lt,alt:ct,oct:Pt}),Kt=D+$+it,me=D+$,de=(f[lt]+ct+120)%12,pe=Pt===void 0?S(f[lt]+ct,12)-1188:f[lt]+ct+12*(Pt+1),xe=pe>=0&&pe<=127?pe:null,Ce=Pt===void 0?null:Math.pow(2,(pe-69)/12)*440;return{empty:!1,acc:$,alt:ct,chroma:de,coord:Wt,freq:Ce,height:pe,letter:D,midi:xe,name:Kt,oct:Pt,pc:me,step:lt}}function b(z){const{step:w,alt:D,oct:$}=z,it=l(w);if(!it)return"";const lt=it+h(D);return $||$===0?lt+$:lt}function R(z){return+z>=0&&+z<=127}function M(z){if(R(z))return+z;const w=u(z);return w.empty?null:w.midi}var E=(function(){function z(){}return z.version=function(){return"3.2.0"},z.stringToBytes=function(w){return w.split("").map(function(D){return D.charCodeAt(0)})},z.isNumeric=function(w){return!isNaN(parseFloat(w))&&isFinite(w)},z.getPitch=function(w,D){return D===void 0&&(D="C4"),60-M(D)+M(w)},z.numberToVariableLength=function(w){w=Math.round(w);for(var D=w&127;w=w>>7;)D<<=8,D|=w&127|128;for(var $=[];$.push(D&255),D&128;)D>>=8;return $},z.stringByteCount=function(w){return encodeURI(w).split(/%..|./).length-1},z.numberFromBytes=function(w){var D="",$;return w.forEach(function(it){$=it.toString(16),$.length==1&&($="0"+$),D+=$}),parseInt(D,16)},z.numberToBytes=function(w,D){D=D||1;var $=w.toString(16);$.length&1&&($="0"+$);var it=$.match(/.{2}/g),lt=it.map(function(ct){return parseInt(ct,16)});if(lt.length<D)for(;D-lt.length>0;)lt.unshift(0);return lt},z.toArray=function(w){return Array.isArray(w)?w:[w]},z.convertVelocity=function(w){return w=w>100?100:w,Math.round(w/100*127)},z.getTickDuration=function(w,D){if(D===void 0&&(D=128),Array.isArray(w))return w.map(function(lt){return z.getTickDuration(lt,D)}).reduce(function(lt,ct){return lt+ct},0);if(w=w.toString(),w.toLowerCase().charAt(0)==="t"){var $=parseInt(w.substring(1));if(isNaN($)||$<0)throw new Error(w+" is not a valid duration.");return $}var it=D*z.getDurationMultiplier(w);return z.getRoundedIfClose(it)},z.getRoundedIfClose=function(w){var D=Math.round(w);return Math.abs(D-w)<1e-6?D:w},z.getPrecisionLoss=function(w){var D=Math.round(w);return D-w},z.getDurationMultiplier=function(w){if(w==="0")return 0;var D=w.match(/^(?<dotted>d+)?(?<base>\d+)(?:t(?<tuplet>\d*))?/);if(D){var $=Number(D.groups.base),it=$===1||($&$-1)===0;if(it){var lt=$/4,ct=1/lt,Pt=D.groups,Wt=Pt.dotted,Kt=Pt.tuplet;if(Wt){var me=Wt.length,de=Math.pow(2,me);ct=ct+ct*((de-1)/de)}if(typeof Kt=="string"){var pe=ct*2,xe=Number(Kt||"3");ct=pe/xe}return ct}}throw new Error(w+" is not a valid duration.")},z})(),C=(function(){function z(w){this.channel=w.channel-1||0,this.controllerValue=w.controllerValue,this.controllerNumber=w.controllerNumber,this.delta=w.delta||0,this.name="ControllerChangeEvent",this.status=176,this.data=E.numberToVariableLength(w.delta).concat(this.status|this.channel,this.controllerNumber,this.controllerValue)}return z})(),_=(function(){function z(w){this.delta=w.delta||0,this.name="CopyrightEvent",this.text=w.text,this.type=2;var D=E.stringToBytes(this.text);this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type,E.numberToVariableLength(D.length),D)}return z})(),T=(function(){function z(w){this.delta=w.delta||0,this.name="CuePointEvent",this.text=w.text,this.type=7;var D=E.stringToBytes(this.text);this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type,E.numberToVariableLength(D.length),D)}return z})(),V=(function(){function z(w){this.delta=w?.delta||0,this.name="EndTrackEvent",this.type=[47,0],this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type)}return z})(),U=(function(){function z(w){this.delta=w.delta||0,this.name="InstrumentNameEvent",this.text=w.text,this.type=4;var D=E.stringToBytes(this.text);this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type,E.numberToVariableLength(D.length),D)}return z})(),G=(function(){function z(w,D){this.name="KeySignatureEvent",this.type=89;var $=D||0;if(w=w||0,typeof D>"u"){var it=[["Cb","Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#"],["ab","eb","bb","f","c","g","d","a","e","b","f#","c#","g#","d#","a#"]],lt=w.length,ct=w||"C";if(w[0]===w[0].toLowerCase()&&($=1),lt>1)switch(w.charAt(lt-1)){case"m":$=1,ct=w.charAt(0).toLowerCase(),ct=ct.concat(w.substring(1,lt-1));break;case"-":$=1,ct=w.charAt(0).toLowerCase(),ct=ct.concat(w.substring(1,lt-1));break;case"M":$=0,ct=w.charAt(0).toUpperCase(),ct=ct.concat(w.substring(1,lt-1));break;case"+":$=0,ct=w.charAt(0).toUpperCase(),ct=ct.concat(w.substring(1,lt-1));break}var Pt=it[$].indexOf(ct);w=Pt===-1?0:Pt-7}this.data=E.numberToVariableLength(0).concat(i.META_EVENT_ID,this.type,[2],E.numberToBytes(w,1),E.numberToBytes($,1))}return z})(),J=(function(){function z(w){this.delta=w.delta||0,this.name="LyricEvent",this.text=w.text,this.type=5;var D=E.stringToBytes(this.text);this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type,E.numberToVariableLength(D.length),D)}return z})(),P=(function(){function z(w){this.delta=w.delta||0,this.name="MarkerEvent",this.text=w.text,this.type=6;var D=E.stringToBytes(this.text);this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type,E.numberToVariableLength(D.length),D)}return z})(),y=(function(){function z(w){this.name="NoteOnEvent",this.channel=w.channel||1,this.pitch=w.pitch,this.wait=w.wait||0,this.velocity=w.velocity||50,this.tick=w.tick||null,this.delta=null,this.data=w.data,this.status=144}return z.prototype.buildData=function(w,D,$){$===void 0&&($={}),this.data=[];var it=$.ticksPerBeat||128;return this.tick?(this.tick=E.getRoundedIfClose(this.tick),w.tickPointer==0&&(this.delta=this.tick)):(this.delta=E.getTickDuration(this.wait,it),this.tick=E.getRoundedIfClose(w.tickPointer+this.delta)),this.deltaWithPrecisionCorrection=E.getRoundedIfClose(this.delta-D),this.data=E.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.status|this.channel-1,E.getPitch(this.pitch,$.middleC),E.convertVelocity(this.velocity)),this},z})(),I=(function(){function z(w){this.name="NoteOffEvent",this.channel=w.channel||1,this.pitch=w.pitch,this.velocity=w.velocity||50,this.tick=w.tick||null,this.data=w.data,this.delta=w.delta!==void 0?w.delta:E.getTickDuration(w.duration),this.status=128}return z.prototype.buildData=function(w,D,$){return $===void 0&&($={}),this.tick===null&&(this.tick=E.getRoundedIfClose(this.delta+w.tickPointer)),this.deltaWithPrecisionCorrection=E.getRoundedIfClose(this.delta-D),this.data=E.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.status|this.channel-1,E.getPitch(this.pitch,$.middleC),E.convertVelocity(this.velocity)),this},z})(),B=(function(){function z(w){this.data=[],this.name="NoteEvent",this.pitch=E.toArray(w.pitch),this.channel=w.channel||1,this.duration=w.duration||"4",this.grace=w.grace,this.repeat=w.repeat||1,this.sequential=w.sequential||!1,this.tick=w.startTick||w.tick||null,this.velocity=w.velocity||50,this.wait=w.wait||0,this.tickDuration=E.getTickDuration(this.duration),this.restDuration=E.getTickDuration(this.wait),this.events=[]}return z.prototype.buildData=function(w){var D=this;w===void 0&&(w={}),this.data=[],this.events=[];var $=w.ticksPerBeat||128;if(this.grace){var it=1;this.grace=E.toArray(this.grace),this.grace.forEach(function(){var ct,Pt=new z({pitch:D.grace,duration:"T"+it});(ct=D.data).push.apply(ct,Pt.data)})}if(this.sequential)for(var lt=0;lt<this.repeat;lt++)this.pitch.forEach(function(Pt,Wt){var Kt=new y({channel:D.channel,wait:Wt>0?0:D.wait,delta:Wt>0?0:E.getTickDuration(D.wait,$),velocity:D.velocity,pitch:Pt,tick:D.tick}),me=new I({channel:D.channel,duration:D.duration,delta:E.getTickDuration(D.duration,$),velocity:D.velocity,pitch:Pt});D.events.push(Kt,me)});else for(var lt=0;lt<this.repeat;lt++)this.pitch.forEach(function(ct,Pt){var Wt;Pt==0?Wt=new y({channel:D.channel,wait:D.wait,delta:E.getTickDuration(D.wait,$),velocity:D.velocity,pitch:ct,tick:D.tick}):Wt=new y({channel:D.channel,wait:0,velocity:D.velocity,pitch:ct,tick:D.tick}),D.events.push(Wt)}),this.pitch.forEach(function(ct,Pt){var Wt;Pt==0?Wt=new I({channel:D.channel,duration:D.duration,delta:E.getTickDuration(D.duration,$),velocity:D.velocity,pitch:ct,tick:D.tick!==null?E.getTickDuration(D.duration,$)+D.tick:null}):Wt=new I({channel:D.channel,duration:0,delta:0,velocity:D.velocity,pitch:ct,tick:D.tick!==null?E.getTickDuration(D.duration,$)+D.tick:null}),D.events.push(Wt)});return this},z})(),L=(function(){function z(w){this.channel=w.channel||0,this.delta=w.delta||0,this.name="PitchBendEvent",this.status=224;var D=this.scale14bits(w.bend),$=D&127,it=D>>7&127;this.data=E.numberToVariableLength(this.delta).concat(this.status|this.channel,$,it)}return z.prototype.scale14bits=function(w){return w<=0?Math.floor(16384*(w+1)/2):Math.floor(16383*(w+1)/2)},z})(),W=(function(){function z(w){this.channel=w.channel||0,this.delta=w.delta||0,this.instrument=w.instrument,this.status=192,this.name="ProgramChangeEvent",this.data=E.numberToVariableLength(this.delta).concat(this.status|this.channel,this.instrument)}return z})(),F=(function(){function z(w){this.bpm=w.bpm,this.delta=w.delta||0,this.tick=w.tick,this.name="TempoEvent",this.type=81;var D=Math.round(6e7/this.bpm);this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type,[3],E.numberToBytes(D,3))}return z})(),X=(function(){function z(w){this.delta=w.delta||0,this.text=w.text,this.name="TextEvent",this.type=1;var D=E.stringToBytes(this.text);this.data=E.numberToVariableLength(w.delta).concat(i.META_EVENT_ID,this.type,E.numberToVariableLength(D.length),D)}return z})(),tt=(function(){function z(w,D,$,it){this.name="TimeSignatureEvent",this.type=88,this.data=E.numberToVariableLength(0).concat(i.META_EVENT_ID,this.type,[4],E.numberToBytes(w,1),E.numberToBytes(Math.log2(D),1),E.numberToBytes($||24,1),E.numberToBytes(it||8,1))}return z})(),ot=(function(){function z(w){this.delta=w.delta||0,this.name="TrackNameEvent",this.text=w.text,this.type=3;var D=E.stringToBytes(this.text);this.data=E.numberToVariableLength(this.delta).concat(i.META_EVENT_ID,this.type,E.numberToVariableLength(D.length),D)}return z})(),Rt=(function(){function z(){this.type=i.TRACK_CHUNK_TYPE,this.data=[],this.size=[],this.events=[],this.explicitTickEvents=[],this.tickPointer=0}return z.prototype.addEvent=function(w,D){var $=this;return E.toArray(w).forEach(function(it,lt){if(it instanceof B){if(typeof D=="function"){var ct=D(lt,it);typeof ct=="object"&&Object.assign(it,ct)}it.tick!==null?$.explicitTickEvents.push(it):$.events.push(it)}else $.events.push(it)}),this},z.prototype.buildData=function(w){var D,$=this;w===void 0&&(w={}),this.data=[],this.size=[],this.tickPointer=0;var it=[];this.events.forEach(function(ct){ct instanceof B&&ct.tick===null?ct.buildData(w).events.forEach(function(Pt){return it.push(Pt)}):it.push(ct)}),this.events=it;var lt=0;return this.events.forEach(function(ct){var Pt,Wt,Kt;if(ct instanceof y||ct instanceof I){var me=ct.buildData($,lt,w);lt=E.getPrecisionLoss(ct.deltaWithPrecisionCorrection||0),(Pt=$.data).push.apply(Pt,me.data),$.tickPointer=E.getRoundedIfClose(ct.tick)}else ct instanceof F?($.tickPointer=E.getRoundedIfClose(ct.tick),(Wt=$.data).push.apply(Wt,ct.data)):(ct.tick=$.tickPointer,(Kt=$.data).push.apply(Kt,ct.data))}),this.mergeExplicitTickEvents(w),(!this.events.length||!(this.events[this.events.length-1]instanceof V))&&(D=this.data).push.apply(D,new V().data),this.size=E.numberToBytes(this.data.length,4),this},z.prototype.mergeExplicitTickEvents=function(w){var D=this;w===void 0&&(w={}),this.explicitTickEvents.length&&(this.explicitTickEvents.sort(function($,it){return $.tick-it.tick}),this.explicitTickEvents.forEach(function($){$.buildData(w).events.forEach(function(it){return it.buildData(D,0,w)}),$.events.forEach(function(it){return D.mergeSingleEvent(it)})}),this.explicitTickEvents=[],this.buildData(w))},z.prototype.mergeTrack=function(w){var D=this;return this.buildData(),w.buildData().events.forEach(function($){return D.mergeSingleEvent($)}),this},z.prototype.mergeSingleEvent=function(w){if(!this.events.length)return this.addEvent(w),this;for(var D,$=0;$<this.events.length&&!(this.events[$].tick>w.tick);$++)D=$;if(D===void 0)w.delta=w.tick,this.events.splice(0,0,w),this.events.length>1&&(this.events[1].delta=this.events[1].tick-w.tick);else{var it=D+1;w.delta=w.tick-this.events[D].tick,this.events.splice(it,0,w);for(var $=it+1;$<this.events.length;$++)this.events[$].delta=this.events[$].tick-this.events[$-1].tick}return this},z.prototype.removeEventsByName=function(w){return this.events=this.events.filter(function(D){return D.name!==w}),this},z.prototype.setTempo=function(w,D){return D===void 0&&(D=0),this.addEvent(new F({bpm:w,tick:D}))},z.prototype.setTimeSignature=function(w,D,$,it){return this.addEvent(new tt(w,D,$,it))},z.prototype.setKeySignature=function(w,D){return this.addEvent(new G(w,D))},z.prototype.addText=function(w){return this.addEvent(new X({text:w}))},z.prototype.addCopyright=function(w){return this.addEvent(new _({text:w}))},z.prototype.addTrackName=function(w){return this.addEvent(new ot({text:w}))},z.prototype.addInstrumentName=function(w){return this.addEvent(new U({text:w}))},z.prototype.addMarker=function(w){return this.addEvent(new P({text:w}))},z.prototype.addCuePoint=function(w){return this.addEvent(new T({text:w}))},z.prototype.addLyric=function(w){return this.addEvent(new J({text:w}))},z.prototype.polyModeOn=function(){var w=new y({data:[0,176,126,0]});return this.addEvent(w)},z.prototype.setPitchBend=function(w){return this.addEvent(new L({bend:w}))},z.prototype.controllerChange=function(w,D,$,it){return this.addEvent(new C({controllerNumber:w,controllerValue:D,channel:$,delta:it}))},z})(),Q=(function(){function z(){}return z.prototype.trackFromVoice=function(w,D){var $=this;D===void 0&&(D={addRenderedAccidentals:!1});var it=new Rt,lt=[];return w.tickables.forEach(function(ct){ct.noteType==="n"?(it.addEvent(new B({pitch:ct.keys.map(function(Pt,Wt){return $.convertPitch(Pt,Wt,ct,D.addRenderedAccidentals)}),duration:$.convertDuration(ct),wait:lt})),lt=[]):ct.noteType==="r"&&lt.push($.convertDuration(ct))}),lt.length>0&&it.addEvent(new B({pitch:"[c4]",duration:"0",wait:lt,velocity:"0"})),it},z.prototype.convertPitch=function(w,D,$,it){var lt;it===void 0&&(it=!1);var ct=w.split("/"),Pt=ct[0].substring(1).replace("n","");return it&&((lt=$.getAccidentals())===null||lt===void 0||lt.forEach(function(Wt){Wt.index===D&&(Wt.type==="n"?Pt="":Pt+=Wt.type)})),ct[0][0]+Pt+ct[1]},z.prototype.convertDuration=function(w){var D=this.countDots(w);return"d".repeat(D)+this.convertBaseDuration(w.duration)+(w.tuplet?"t"+w.tuplet.num_notes:"")},z.prototype.countDots=function(w){return typeof w.getModifiersByType=="function"?w.getModifiersByType("Dot").length:Array.isArray(w.modifiers)?w.modifiers.filter(function(D){var $,it;return(($=D.getCategory)===null||$===void 0?void 0:$.call(D))==="dots"||((it=D.attrs)===null||it===void 0?void 0:it.type)==="Dot"}).length:w.dots||0},z.prototype.convertBaseDuration=function(w){switch(w){case"w":return"1";case"h":return"2";case"q":return"4";default:return w}},z})();function ht(z,w,D){if(arguments.length===2)for(var $=0,it=w.length,lt;$<it;$++)(lt||!($ in w))&&(lt||(lt=Array.prototype.slice.call(w,0,$)),lt[$]=w[$]);return z.concat(lt||Array.prototype.slice.call(w))}var _t=(function(){function z(w,D){D===void 0&&(D=128),this.type=i.HEADER_CHUNK_TYPE;var $=w>1?i.HEADER_CHUNK_FORMAT1:i.HEADER_CHUNK_FORMAT0;this.data=$.concat(E.numberToBytes(w,2),E.numberToBytes(D,2)),this.size=[0,0,0,this.data.length]}return z})(),bt=(function(){function z(w,D){D===void 0&&(D={}),this.tracks=E.toArray(w),this.options=D}return z.prototype.buildData=function(){var w=this,D=[],$=this.options.ticksPerBeat||128;return D.push(new _t(this.tracks.length,$)),this.tracks.forEach(function(it){D.push(it.buildData(w.options))}),D},z.prototype.buildFile=function(){var w=[];return this.buildData().forEach(function(D){return w.push.apply(w,ht(ht(ht([],D.type,!1),D.size,!1),D.data,!1))}),new Uint8Array(w)},z.prototype.base64=function(){if(typeof btoa=="function"){for(var w=this.buildFile(),D=w.byteLength,$=new Array(D),it=0;it<D;it++)$[it]=String.fromCharCode(w[it]);return btoa($.join(""))}return Buffer.from(this.buildFile()).toString("base64")},z.prototype.dataUri=function(){return"data:audio/midi;base64,"+this.base64()},z.prototype.setOption=function(w,D){return this.options[w]=D,this},z.prototype.stdout=function(){return process.stdout.write(Buffer.from(this.buildFile()))},z})(),pt={Constants:i,ControllerChangeEvent:C,CopyrightEvent:_,CuePointEvent:T,EndTrackEvent:V,InstrumentNameEvent:U,KeySignatureEvent:G,LyricEvent:J,MarkerEvent:P,NoteOnEvent:y,NoteOffEvent:I,NoteEvent:B,PitchBendEvent:L,ProgramChangeEvent:W,TempoEvent:F,TextEvent:X,TimeSignatureEvent:tt,Track:Rt,TrackNameEvent:ot,Utils:E,VexFlow:Q,Writer:bt};return ga=pt,ga}var c0=l0();const ki=o0(c0),u0=48;function Hu(i){const t=i>0?i:1e-6;return 69+12*Math.log2(t/440)}function Gu(i){const t=Hu(i),e=Math.round(t),n=re(e,0,127);return{note:n,offsetSemitones:t-n}}function d0(i){return re(i/u0,-1,1)}function Ec(i){return Math.round(re(i,0,1)*127)}function Vu(i,t,e,n){const r=re(e,0,1);return n==="exponential"&&i>0&&t>0?i*(t/i)**r:i+(t-i)*r}const qi=480,_a=2,So=16,h0=50,f0=4,p0=8,m0=74,g0=11,_0=100;function Mo(i){const t=typeof i=="number"&&Number.isFinite(i)?i:Xi;return re(t,0,1)}function v0(i){return re(Math.round(Mo(i)*127),1,127)*100/127}function x0(i){return re(Math.round(re(i,0,1)*127),0,127)}function yo(i,t){const e=Wu(t),n=re(i,0,1)*xr(e),r=qi*(e/60);return Math.round(n*r)}function S0(i){const t=Wu(i.bpm),e=E0(M0(i.points,i.bends,t)),n=new Map;let r=0;const s=(o,c)=>{const l=n.get(o)??[];l.push(c),n.set(o,l)};for(const o of e){const c=Gu(o.source.y).note;for(const l of T0(o,t))s(o.channel,{tick:l.tick,seq:r++,kind:"bend",bend:l.bend});for(const l of w0(o,t))s(o.channel,{tick:l.tick,seq:r++,kind:"cc",controller:m0,value:l.value});for(const l of A0(o,t))s(o.channel,{tick:l.tick,seq:r++,kind:"cc",controller:g0,value:l.value});s(o.channel,{tick:o.startTick,seq:r++,kind:"on",note:c,velocity:v0(o.source.velocity)}),s(o.channel,{tick:o.endTick,seq:r++,kind:"off",note:c})}const a=[...n.keys()].sort((o,c)=>o-c).map(o=>P0(t,o,n.get(o)??[]));if(a.length===0){const o=new ki.Track;o.setTempo(t,0),a.push(o)}return L0(a)}function Wu(i){const t=Math.round(Number.isFinite(i)?i:120);return Math.max(1,t)}function M0(i,t,e){const n=new Set(t.map(a=>a.toPointId)),r=[...i.values()].sort((a,o)=>a.x-o.x||(a.id<o.id?-1:a.id>o.id?1:0)),s=[];for(const a of r){const o=t.filter(l=>l.fromPointId===a.id);if(o.length>0){for(const l of o){const h=i.get(l.toPointId);if(!h||h.id===a.id)continue;const d=yo(a.x,e);s.push({source:a,target:h,curve:l.curveType,startTick:d,endTick:d+y0(a.x,h.x,e),channel:0})}continue}if(n.has(a.id))continue;const c=yo(a.x,e);s.push({source:a,target:null,curve:"linear",startTick:c,endTick:c+qi,channel:0})}return s}function y0(i,t,e){const n=tr(i,t);return n<=0?0:Math.max(1,yo(n,e))}function E0(i){const t=new Array(So+1).fill(0);return i.map(e=>{const n=b0(t,e.startTick);return t[n]=Math.max(t[n],e.endTick),{...e,channel:n}})}function b0(i,t){for(let n=_a;n<=So;n++)if(i[n]<=t)return n;let e=_a;for(let n=_a+1;n<=So;n++)i[n]<i[e]&&(e=n);return e}function T0(i,t){const e=Gu(i.source.y).note;return Wo(i.startTick,i.endTick,Xu(i,t)).map(n=>({tick:n,bend:d0(Hu(C0(i,n))-e)}))}function w0(i,t){const e=Ec(i.source.z),n=i.target?Ec(i.target.z):e;return Wo(i.startTick,i.endTick,R0(i,t)).map(r=>{const s=Vo(i,r);return{tick:r,value:re(Math.round(e+(n-e)*s),0,127)}})}function A0(i,t){const e=Mo(i.source.velocity),n=i.target?Mo(i.target.velocity):e,r=i.target?Xu(i,t):0;return Wo(i.startTick,i.endTick,r).map(s=>({tick:s,value:x0(Vu(e,n,Vo(i,s),i.curve))}))}function Xu(i,t){if(!i.target)return 0;const e=qu(i.endTick-i.startTick,t);return Math.max(1,Math.round(e*h0))}function R0(i,t){if(!i.target)return 0;const e=qu(i.endTick-i.startTick,t);return Math.min(p0,Math.max(1,Math.round(e*f0)))}function qu(i,t){return i/(qi*(t/60))}function C0(i,t){return i.target?Vu(i.source.y,i.target.y,Vo(i,t),i.curve):i.source.y}function Vo(i,t){const e=i.endTick-i.startTick;return e<=0?0:re((t-i.startTick)/e,0,1)}function Wo(i,t,e){if(e<=0||t<=i)return[i];const n=[],r=new Set;for(let s=0;s<=e;s++){const a=i+Math.round((t-i)*(s/e));r.has(a)||(r.add(a),n.push(a))}return n}function P0(i,t,e){const n=new ki.Track;n.setTempo(i,0);const r=[...e].sort((a,o)=>a.tick-o.tick||a.seq-o.seq);let s=0;for(const a of r){const o=a.tick-s;a.kind==="bend"?n.addEvent(new ki.PitchBendEvent({bend:a.bend,channel:t-1,delta:o})):a.kind==="cc"?n.addEvent(new ki.ControllerChangeEvent({controllerNumber:a.controller,controllerValue:a.value,channel:t,delta:o})):a.kind==="on"?n.addEvent(new ki.NoteOnEvent({pitch:a.note,channel:t,velocity:a.velocity,wait:`T${o}`})):n.addEvent(new ki.NoteOffEvent({pitch:a.note,channel:t,velocity:_0,duration:`T${o}`,delta:o})),s=a.tick}return n}function L0(i){const t=i.map(a=>a.buildData({ticksPerBeat:qi})),e=[[77,84,104,100,0,0,0,6,0,1,t.length>>8&255,t.length&255,qi>>8&255,qi&255]];for(const a of t)e.push(a.type,a.size,a.data);const n=e.reduce((a,o)=>a+o.length,0),r=new Uint8Array(n);let s=0;for(const a of e)r.set(a,s),s+=a.length;return r}let dr=null;function D0(i,t=!1){if(dr){dr.querySelector("[data-download]")?.focus();return}const e=document.createElement("div");e.className="mpe-modal",e.innerHTML=`
    <div class="mpe-dialog" role="dialog" aria-modal="true" aria-labelledby="mpe-export-title">
      <h2 id="mpe-export-title">Export as MPE</h2>
      <p class="mpe-lead">${t?"This writes the sequence to an MPE file for another instrument. The desktop app can also play a loaded sample, and can send the same performance out the virtual MIDI port.":"This exports your sequence as an MPE (MIDI Polyphonic Expression) file. Pitch, glissando, and brightness (Z-axis) are preserved."}</p>
      <ul>
        <li>Pitch: Microtonal offsets are carried via per-note pitch bend.</li>
        <li>Glissando: Bend connections become pitch bend automation curves.</li>
        <li>Brightness: Z-axis maps to CC74 (timbre).</li>
        <li>Velocity is the note-on velocity. Changes along a bend are carried on CC11 (expression).</li>
        ${t?"":"<li>Wave type is not exported. The receiving instrument determines the sound.</li>"}
      </ul>
      <p class="mpe-requirement">Requirement: You must use an MPE-compatible instrument. Set its member-channel pitch bend range to ±48 semitones (the MPE default). Without this, microtonal pitches will be incorrect.</p>
      <p>Bends longer than ±48 semitones saturate. The file is one track per member channel (format 1).</p>
      <div class="row mpe-actions">
        <button type="button" class="primary" data-download>Download .mid</button>
        <button type="button" data-close>Close</button>
      </div>
    </div>
  `,document.body.append(e),document.body.setAttribute("data-modal-open",""),dr=e;const n=e.querySelector(".mpe-dialog"),r=e.querySelector("[data-download]"),s=e.querySelector("[data-close]"),a=document.activeElement instanceof HTMLElement?document.activeElement:null,o=()=>{window.removeEventListener("keydown",c,!0),e.remove(),document.body.removeAttribute("data-modal-open"),dr===e&&(dr=null),a?.focus()},c=l=>{l.code==="Escape"&&(l.preventDefault(),l.stopPropagation(),o())};r.addEventListener("click",()=>{const l=S0(i()),h=new ArrayBuffer(l.byteLength);new Uint8Array(h).set(l);const d=new Blob([h],{type:"audio/midi"}),u=URL.createObjectURL(d),m=document.createElement("a");m.href=u,m.download=`cartofreq-${Date.now()}.mid`,m.click(),window.setTimeout(()=>URL.revokeObjectURL(u),1500)}),s.addEventListener("click",o),e.addEventListener("click",l=>{l.target===e&&o()}),n.addEventListener("click",l=>l.stopPropagation()),window.addEventListener("keydown",c,!0),r.focus()}const Yu="— · — Hz · bar — · beat — · intensity —",I0="G#6 +50¢ · 1670.42 Hz · bar 4 · beat 4.00 · intensity 100";function N0(i){const{store:t,audio:e,engine:n,scheduler:r,recorder:s,platform:a}=i,o=a==="electron",c=document.createElement("section");c.className="panel info",c.innerHTML=`
    <header class="brand">
      <h1>cartofreq</h1>
      <svg class="wave" viewBox="0 0 118 12" width="118" height="12" aria-hidden="true" focusable="false">
        <path d="M3 6 Q6.5 1 10 6 T17 6 T24 6 T31 6 T38 6 T45 6 T52 6 T59 6 T66 6 T73 6 T80 6 T87 6 T94 6 T101 6 T108 6 T115 6" fill="none" stroke="currentColor" stroke-width="1"/>
        <circle cx="3" cy="6" r="1.5" fill="currentColor"/>
        <circle cx="115" cy="6" r="1.5" fill="currentColor"/>
      </svg>
      <span class="coord">x time · y pitch · z brightness</span>
    </header>
    <p class="tagline">Four bars in free pitch</p>
    <div class="meta"><span data-counts></span></div>
    <details class="instructions">
      <summary></summary>
      <ul class="help">
        <li>Click plane to place a note. Drag empty space to orbit.</li>
        <li>Drag a note: time, pitch, intensity. Shift locks intensity.</li>
        <li>Right-drag or Control-drag to bend into a new note. Scroll to zoom.</li>
        <li>${o?"Double-click edits a note. Delete removes selection.":"Double-click edits a note. Wave type applies in oscillator mode."}</li>
        <li>${o?"Space plays. Ctrl+S stops.":"Space plays. Ctrl+S stops. Ctrl+R records."}</li>
        <li>${o?"Load a sample. Audio Out plays it. MIDI Out sends MPE. Both does each.":"Sampler pitch-shifts one loaded clip and keeps its length."}</li>
        <li>Keyboard toggle plays A–L. Z and X shift the octave. MIDI in does the same.</li>
        <li>Quantize snaps every note to the nearest 1/4 beat.</li>
        <li>The ball above each bar opens that column: clear, copy, or paste.</li>
      </ul>
    </details>
  `;const l=document.createElement("p");l.className="panel hover-readout",l.dataset.hover="";const h=document.createElement("span");h.className="hover-sizer",h.setAttribute("aria-hidden","true"),h.textContent=I0;const d=document.createElement("span");d.className="hover-value",d.textContent=Yu,l.append(h,d);const u=document.createElement("section");u.className="panel transport",u.innerHTML=`
    <div class="row icon-row">
      <button type="button" class="primary icon-btn" data-play aria-label="Play" aria-pressed="false"></button>
      <button type="button" class="icon-btn" data-stop aria-label="Stop"></button>
      <button type="button" class="icon-btn" data-record aria-label="Record"></button>
      <button type="button" class="icon-btn" data-keyboard aria-label="Keyboard" aria-pressed="false"></button>
      <span class="octave" data-octave hidden></span>
      <button type="button" class="icon-btn" data-quantize aria-label="Quantize to 1/4 beat" title="Quantize to 1/4 beat"></button>
      <button type="button" class="icon-btn" data-clear aria-label="Clear"></button>
      <button type="button" class="icon-btn" data-demo aria-label="Random sequence"></button>
      <button type="button" class="icon-btn" data-mpe aria-label="Export MPE"></button>
    </div>
    <div class="row transport-mix">
      <label class="field">BPM
        <input data-bpm-range type="range" min="${go}" max="${_o}" step="1" />
        <input data-bpm type="number" min="${go}" max="${_o}" step="1" />
      </label>
      <label class="field" data-volume-field title="${o?"Scales what this app sends to its output device.":""}">${o?"monitor":"volume"}
        <input data-volume type="range" min="0" max="1" step="0.01" value="0.5" />
      </label>
    </div>
    <div class="row transport-curve">
      <label class="field">new bends
        <select data-curve>
          <option value="exponential">exponential</option>
          <option value="linear">linear</option>
        </select>
      </label>
      ${o?"":`<label class="field" data-wave-field>wave
        <select data-wave>
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="sawtooth">sawtooth</option>
          <option value="square">square</option>
        </select>
      </label>`}
      <p class="readout" data-readout>bar 1 · beat 1.00</p>
    </div>
    ${o?"":`<div class="row transport-sound">
      <div class="segment" role="group" aria-label="Sound source">
        <button type="button" class="text-btn" data-mode="oscillator" aria-pressed="true">Oscillator</button>
        <button type="button" class="text-btn" data-mode="sampler" aria-pressed="false">Sampler</button>
      </div>
    </div>`}
    <div class="row transport-sample" data-sample-row>
      <label class="text-btn file-btn">Load sample
        <input data-sample type="file" accept="audio/*" />
      </label>
      <span class="sample-name" data-sample-name>No sample</span>
      <label class="field">base Hz
        <input data-base type="number" min="20" max="5000" step="0.01" value="440" />
      </label>
      <label class="check" title="Repeats the recording so a bend can outlast it. Clips under 5 seconds start on. The four bars loop either way."><input data-loop type="checkbox" /> loop sample</label>
    </div>
    <div class="row transport-io">
      ${o?`<label class="field">output
        <select data-output>
          <option value="audio">Audio Out</option>
          <option value="midi">MIDI Out</option>
          <option value="both">Both</option>
        </select>
      </label>
      <button type="button" class="text-btn" data-midi-rescan>Rescan MIDI</button>`:`<label class="field">MIDI in
        <select data-midi-in>
          <option value="">Off</option>
        </select>
      </label>`}
    </div>
    <p class="hint" data-midi-in-status hidden></p>
    <p class="hint" data-midi-out hidden></p>
    <p class="hint" data-audio-out hidden></p>
    <p class="status" data-status></p>
  `,document.body.append(c,u,l);const m=d,g=c.querySelector("[data-counts]"),S=u.querySelector("[data-play]"),f=u.querySelector("[data-stop]"),p=u.querySelector("[data-record]"),b=u.querySelector("[data-keyboard]"),R=u.querySelector("[data-octave]"),M=u.querySelector("[data-quantize]"),E=u.querySelector("[data-clear]"),C=u.querySelector("[data-demo]"),_=u.querySelector("[data-mpe]");Wn(f,"stop"),Wn(p,"record"),Wn(b,"keyboard"),Wn(M,"quantize"),Wn(E,"clear"),Wn(C,"demo"),Wn(_,"mpe");const T=u.querySelector("[data-bpm-range]"),V=u.querySelector("[data-bpm]"),U=u.querySelector("[data-volume]"),G=u.querySelector("[data-curve]"),J=u.querySelector("[data-wave-field]"),P=u.querySelector("[data-wave]"),y=u.querySelector("[data-readout]"),I=u.querySelector("[data-status]"),B=u.querySelector("[data-sample-row]"),L=u.querySelector("[data-sample]"),W=u.querySelector("[data-sample-name]"),F=u.querySelector("[data-base]"),X=u.querySelector("[data-loop]"),tt=u.querySelector("[data-output]"),ot=u.querySelector("[data-midi-in]"),Rt=u.querySelector("[data-midi-rescan]"),Q=u.querySelector("[data-midi-in-status]"),ht=u.querySelector("[data-midi-out]"),_t=u.querySelector("[data-audio-out]");o||!s?(p.hidden=!0,p.disabled=!0,p.title="Recording stays in the browser. Desktop audio goes to the DAW."):(p.disabled=!s.supported,s.supported||(p.title="Recording is unavailable in this browser"));const bt=a0({store:t,audio:e,scheduler:r}),pt=$_(bt);let z=null,w=null,D="";const $=()=>{const q=bt.enabled;b.setAttribute("aria-pressed",q?"true":"false"),R.hidden=!q,q&&R.textContent!==bt.octaveLabel&&(R.textContent=bt.octaveLabel)},it=q=>{I.textContent=q},lt=()=>{if(!ht)return;const q=t.outputRoute!=="audio";ht.hidden=!q||D.length===0,ht.textContent=q?D:""},ct=()=>{g.textContent=`${t.points.size} notes · ${t.bends.length} bends`,document.activeElement!==T&&(T.value=String(t.bpm)),document.activeElement!==V&&(V.value=String(t.bpm)),document.activeElement!==G&&(G.value=t.bendCurve),P&&document.activeElement!==P&&(P.value=t.waveType==="custom"?"sine":t.waveType),J&&(J.hidden=t.soundMode!=="oscillator"),B.hidden=t.soundMode!=="sampler",W.textContent=t.sampleName||"No sample",W.title=t.sampleName,document.activeElement!==F&&(F.value=String(t.sampleBaseHz)),document.activeElement!==X&&(X.checked=t.sampleLoop),tt&&document.activeElement!==tt&&(tt.value=t.outputRoute);for(const q of u.querySelectorAll("[data-mode]"))q.setAttribute("aria-pressed",q.dataset.mode===t.soundMode?"true":"false");lt()},Pt=()=>{bt.tick(),$();const q=r.isPlaying;Wn(S,q?"pause":"play"),S.setAttribute("aria-label",q?"Pause":"Play"),S.classList.toggle("primary",!q),S.setAttribute("aria-pressed",q?"true":"false"),p.classList.toggle("recording",s?.recording??!1);const Gt=Go(r.playhead());y.textContent!==Gt&&(y.textContent=Gt)},Wt=async()=>{try{r.isPlaying?(bt.finish(),r.pause()):await r.play()}catch(q){console.warn(q),it("Audio could not start. Click Play again.")}Pt()};S.addEventListener("click",()=>{Wt()}),f.addEventListener("click",()=>{bt.finish(),r.stop(),Pt()}),p.addEventListener("click",()=>{Ce()}),b.addEventListener("click",()=>{bt.setEnabled(!bt.enabled),$()}),M.addEventListener("click",()=>{bt.cancel(),r.isPlaying&&r.pause(),t.quantize(),Pt()}),E.addEventListener("click",()=>{bt.cancel(),r.stop(),t.clear(),it(""),Pt()}),C.addEventListener("click",()=>{bt.cancel(),r.stop(),t.loadRandom(),it(""),Pt()}),_.addEventListener("click",()=>{D0(()=>({bpm:t.bpm,points:t.points,bends:t.bends}),o)});const Kt=q=>{r.setBpm(q),ct()};T.addEventListener("input",()=>Kt(Number(T.value))),V.addEventListener("change",()=>Kt(Number(V.value))),U?.addEventListener("input",()=>e.setVolume?.(Number(U.value))),G.addEventListener("change",()=>t.setBendCurve(G.value)),P?.addEventListener("change",()=>t.setWaveType(P.value));for(const q of u.querySelectorAll("[data-mode]"))q.addEventListener("click",()=>{const Gt=q.dataset.mode;Gt!=="oscillator"&&Gt!=="sampler"||me(Gt)});async function me(q){if(q===t.soundMode)return;const Gt=t.soundMode;bt.finish(),t.setSoundMode(q);try{await n.applySoundMode(q),q==="sampler"&&!n.hasSample()?it("Sampler is silent until a sample is loaded."):n.workletError?it(n.workletError):it("")}catch(At){console.warn(At),t.setSoundMode(Gt),it("Sampler could not start. Staying on the oscillator.")}ct()}L.addEventListener("change",()=>{const q=L.files?.[0];L.value="",q&&pe(q)}),F.addEventListener("change",()=>{t.setSampleBaseHz(Number(F.value)),ct()}),X.addEventListener("change",()=>{t.setSampleLoop(X.checked)}),tt?.addEventListener("change",()=>{const q=tt.value;q!=="audio"&&q!=="midi"&&q!=="both"||de(q)});async function de(q){if(q===t.outputRoute)return;const Gt=r.isPlaying;if(bt.finish(),Gt&&r.pause(),t.setOutputRoute(q),lt(),!Gt){Pt();return}try{await r.play()}catch(At){console.warn(At),it("Output could not restart. Click Play again.")}Pt()}async function pe(q){if(q.size>4e7){it(`That file is too large. Samples must be ${ma} seconds or shorter.`);return}try{const Gt=await q.arrayBuffer(),At=await n.context.decodeAudioData(Gt.slice(0));if(At.duration>ma+.001){it(`Sample is ${At.duration.toFixed(1)}s. The limit is ${ma}s.`);return}const Bt=At.duration<J_;n.loadSample(At),t.setSample({name:q.name,seconds:At.duration,loop:Bt}),it(Bt?`${q.name} loaded. Short clips loop through a long bend.`:`${q.name} loaded.`)}catch(Gt){console.warn(Gt),it("Could not decode that audio file.")}}async function xe(){ot&&(w||(w=(async()=>{z=Z_(pt);try{const q=await z.request(),Gt=ot.value;ot.replaceChildren(new Option("Off",""));for(const At of q)ot.add(new Option(At.name,At.id));[...ot.options].some(At=>At.value===Gt)&&(ot.value=Gt),q.length===0&&it("No MIDI inputs found.")}catch(q){console.warn(q),it("MIDI input is unavailable in this browser.")}})()),await w)}ot?.addEventListener("pointerdown",()=>{xe()}),ot?.addEventListener("focus",()=>{xe()}),ot?.addEventListener("change",()=>{z?.select(ot.value||null),it(ot.value?"MIDI in on.":"")});async function Ce(){if(!(!s?.supported||o)){try{s.recording?(s.stop(),it("Recording saved.")):(await e.ensureRunning(),r.isPlaying||await r.play(),s.start(),it(s?.recording?"Recording the live output…":"Recording failed to start."))}catch(q){console.warn(q),it("Recording failed.")}Pt()}}window.addEventListener("keydown",q=>{if(q.repeat||document.body.hasAttribute("data-modal-open"))return;const Gt=F0(q.target);if((q.ctrlKey||q.metaKey)&&q.code==="KeyS"){q.preventDefault(),bt.finish(),r.stop(),Pt();return}if((q.ctrlKey||q.metaKey)&&q.code==="KeyR"){q.preventDefault(),Ce();return}if(!Gt&&q.code==="Space"){q.preventDefault(),Wt();return}Gt||!bt.enabled||bt.keyDown(q)&&(q.preventDefault(),$())}),window.addEventListener("keyup",q=>{bt.keyUp(q)}),o&&window.cartofreq&&(window.cartofreq.onMidiInput(pt),Rt?.addEventListener("click",()=>{We()}),H());async function H(){if(!window.cartofreq)return;const[q,Gt,At]=await Promise.all([window.cartofreq.midiInputs(),window.cartofreq.audioStatus(),window.cartofreq.midiStatus()]);ae(q.ports),ce(Gt),D=At.ok?`MIDI out: ${At.port}. Set the instrument bend range to ±48 semitones.`:`MIDI out unavailable. ${At.error??"The virtual port did not open."}`,lt(),n.workletError&&it(`Sampler unavailable. ${n.workletError}`)}async function We(){if(window.cartofreq)try{const q=await window.cartofreq.refreshMidiInputs();ae(q.ports)}catch(q){console.warn(q),it("MIDI input rescan failed.")}}function ae(q){Q&&(Q.hidden=!1,Q.textContent=q.length>0?`MIDI in: ${q.join(", ")}`:"MIDI in: none")}function ce(q){_t&&(_t.hidden=!1,_t.textContent=q.ok?`Audio out: ${q.sink} → ${q.source}. ${q.detail}`:`Audio out unavailable. ${q.detail}`)}return t.subscribe(ct),ct(),Pt(),{tick:Pt,setHover(q){m.textContent=q},setStatus:it}}const U0={play:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8.2 4.6v14.8L19.4 12 8.2 4.6z"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6 4.6h4.2v14.8H6zm7.8 0H18v14.8h-4.2z"/></svg>',stop:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="5.5" y="5.5" width="13" height="13" rx="1.6" fill="currentColor"/></svg>',record:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="6.6" fill="currentColor"/></svg>',keyboard:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="M3 6.8h18v10.4H3V6.8zm1.7 1.7h2.1v1.9H4.7V8.5zm3.1 0h2.1v1.9H7.8V8.5zm3.1 0h2.1v1.9h-2.1V8.5zm3.1 0h2.1v1.9h-2.1V8.5zm3.1 0h2.1v1.9h-2.1V8.5zM4.7 11.4h2.1v1.9H4.7v-1.9zm3.1 0h2.1v1.9H7.8v-1.9zm3.1 0h8.3v1.9h-8.3v-1.9z"/></svg>',quantize:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4 4.2h2.2v15.6H4V4.2zm6.9 0h2.2v15.6h-2.2V4.2zm6.9 0H20v15.6h-2.2V4.2z"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>',clear:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="M9 3.4h6l.9 1.8h4.3v1.7H3.8V5.2h4.3L9 3.4zM6.5 8.5h11v9.8c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V8.5zm3.1 1.6v7.4h1.4v-7.4H9.6zm3.4 0v7.4h1.4v-7.4h-1.4z"/></svg>',demo:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2.2 13.5 8.4 19.8 10 13.5 11.6 12 17.8 10.5 11.6 4.2 10 10.5 8.4 12 2.2zm6.2 12.1.75 2.35 2.35.75-2.35.75L18.2 20.5l-.75-2.35-2.35-.75 2.35-.75.75-2.35z"/></svg>',mpe:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M11.1 3.2h1.8v8.3l2.55-2.55 1.27 1.27L12 15.04 7.28 10.22l1.27-1.27L11.1 11.5V3.2zM4.8 18.1h14.4V20H4.8v-1.9z"/></svg>'};function Wn(i,t){i.dataset.glyph!==t&&(i.dataset.glyph=t,i.innerHTML=U0[t])}function F0(i){if(!(i instanceof HTMLElement))return!1;const t=i.tagName;return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||i.isContentEditable}const O0=12,bc=.04;function B0(i){const{view:t,store:e,editor:n,columns:r,ui:s}=i,a=t.canvas,o=new Vh,c=new Ft,l=new k;let h=null,d=null,u=null,m=!1;const g=P=>{h=P,t.setSelected(P)};e.subscribe(()=>{h&&!e.points.has(h)&&g(null)});const S=(P,y)=>{t.clientToNDC(P,y,c),o.setFromCamera(c,t.camera)},f=()=>{const y=o.intersectObjects(t.columnsGroup.children,!1)[0]?.object;return y?t.pickColumn(y):null},p=()=>{const P=o.intersectObjects(t.pointsGroup.children,!0);for(const y of P){const I=t.pickPointId(y.object);if(I)return I}return null},b=()=>o.intersectObject(t.plane,!1)[0]?.point.clone()??null,R=new k,M=(P,y,I)=>(R.set(P.x,P.y,P.z),R.applyMatrix4(t.camera.matrixWorldInverse),R.z>=0?null:(R.set(P.x,P.y,P.z).project(t.camera),{x:(R.x*.5+.5)*y,y:(-R.y*.5+.5)*I})),E=(P,y)=>{const I=a.getBoundingClientRect();if(I.width<=0||I.height<=0)return null;const B=P-I.left,L=y-I.top;t.camera.updateMatrixWorld();let W=O0,F=null;for(const X of e.bends){const tt=e.points.get(X.fromPointId),ot=e.points.get(X.toPointId);if(!tt||!ot)continue;const Rt=xo(tt,ot,X.curveType),Q=Rt.length-1;if(Q<=0)continue;const ht=Rt.map(_t=>M(_t,I.width,I.height));for(let _t=0;_t<Q;_t++){if(Rt[_t+1].x<Rt[_t].x-Fu)continue;const bt=ht[_t],pt=ht[_t+1];if(!bt||!pt)continue;const z=z0(B,L,bt.x,bt.y,pt.x,pt.y);if(z>W)continue;const w=(B-bt.x)**2+(L-bt.y)**2,D=(B-pt.x)**2+(L-pt.y)**2,$=w<=D?_t:_t+1;W=z,F={bendId:X.id,t:$/Q,sample:Rt[$]}}}return F},C=P=>{if(P.t<=bc||P.t>=1-bc)return;const y=e.bends.find(Rt=>Rt.id===P.bendId);if(!y)return;const I=e.points.get(y.fromPointId),B=e.points.get(y.toPointId);if(!I||!B)return;const L=zi(P.sample),W=I.velocity+(B.velocity-I.velocity)*P.t,F=y.fromPointId,X=y.toPointId,tt=y.curveType;let ot="";e.batch(()=>{ot=e.addPoint({x:L.x,y:L.y,z:L.z,velocity:W,waveType:I.waveType}),e.removeBend(y.id),e.addBend(F,ot,tt),e.addBend(ot,X,tt)}),g(ot)},_=P=>{const y=new k;return t.camera.getWorldDirection(y),new un().setFromNormalAndCoplanarPoint(y,P)},T=P=>o.ray.intersectPlane(P,l)?l:null,V=(P,y,I)=>I?new un(new k(0,0,1),-y):P,U=P=>{s.setHover(`${vo(P.y)} · ${Uu(P.y)} · ${Go(P.x)} · intensity ${Math.round(P.z*100)}`)},G=P=>{t.setPreview(null,null,e.bendCurve),d=null;const y=P.end,I=e.points.get(P.fromId);if(!y||!I)return;const B=mr(I),L=B.x-y.x,W=B.y-y.y,F=B.z-y.z;if(L*L+W*W+F*F<.35*.35)return;const X=zi(y),tt=e.addPoint({...X,waveType:e.waveType});e.addBend(P.fromId,tt,e.bendCurve),g(tt)};a.addEventListener("pointerdown",P=>{if(P.button!==0&&P.button!==2)return;m=!1,S(P.clientX,P.clientY);const y=f(),I=n.interceptPointer()||r.interceptPointer();if(y!=null&&P.button===0){m=!0,P.preventDefault(),P.stopPropagation(),n.close(),r.open(y,P.clientX,P.clientY),a.style.cursor="pointer";return}if(I)return;const B=p();if(B&&(P.button===0||P.button===2)&&(m=!0,P.preventDefault(),P.stopPropagation()),B&&(P.button===2||P.button===0&&P.ctrlKey)){const L=e.points.get(B);if(!L)return;const W=mr(L),F=new k(W.x,W.y,W.z);a.setPointerCapture(P.pointerId),t.controls.enabled=!1,d={kind:"bend",pointerId:P.pointerId,fromId:B,cameraPlane:_(F),lockZ:F.z,end:null},g(B),a.style.cursor="crosshair";return}if(B&&P.button===0&&P.detail<2){const L=e.points.get(B);if(!L)return;const W=mr(L),F=new k(W.x,W.y,W.z);a.setPointerCapture(P.pointerId),t.controls.enabled=!1,d={kind:"move",pointerId:P.pointerId,id:B,cameraPlane:_(F),lockZ:F.z},u=null,g(B),a.style.cursor="grabbing";return}if(!B&&P.button===0&&P.detail<2)if(E(P.clientX,P.clientY))u=null;else{const L=b();L&&(u={pointerId:P.pointerId,sx:P.clientX,sy:P.clientY,world:L})}},!0),a.addEventListener("mousedown",P=>{m&&(P.preventDefault(),P.stopPropagation())},!0),window.addEventListener("pointermove",P=>{if(d&&P.pointerId===d.pointerId){S(P.clientX,P.clientY);const L=V(d.cameraPlane,d.lockZ,P.shiftKey),W=T(L);if(!W)return;const F=zi(W);if(d.kind==="move"){e.updatePoint(d.id,F);const X=e.points.get(d.id);X&&U(X)}else{const X=mr(F);d.end=X;const tt=e.points.get(d.fromId);tt&&t.setPreview(tt,X,e.bendCurve),U(F)}return}if(u&&P.pointerId===u.pointerId){const L=P.clientX-u.sx,W=P.clientY-u.sy;L*L+W*W>36&&(u=null)}if(P.buttons!==0||d||P.target!==a)return;S(P.clientX,P.clientY);const y=f();if(y!=null){t.setHover(null),a.style.cursor="pointer",s.setHover(Bu(y));return}const I=p();if(t.setHover(I),a.style.cursor=I?"grab":"crosshair",I){const L=e.points.get(I);L&&U(L);return}const B=b();if(!B){s.setHover(Yu);return}U(zi(B))});const J=P=>{if(a.hasPointerCapture(P.pointerId)&&a.releasePointerCapture(P.pointerId),d&&d.pointerId===P.pointerId){const y=d;d=null,t.controls.enabled=!0,a.style.cursor="crosshair",y.kind==="bend"&&G(y);return}if(u&&u.pointerId===P.pointerId){const y=P.clientX-u.sx,I=P.clientY-u.sy,B=u.world;if(u=null,y*y+I*I<=36){const L=e.addPoint({...zi(B),waveType:e.waveType});g(L)}}t.controls.enabled=!0};window.addEventListener("pointerup",J),window.addEventListener("pointercancel",P=>{d?.kind==="bend"&&t.setPreview(null,null,e.bendCurve),d=null,u=null,a.hasPointerCapture(P.pointerId)&&a.releasePointerCapture(P.pointerId),t.controls.enabled=!0}),a.addEventListener("dblclick",P=>{if(S(P.clientX,P.clientY),f()!=null)return;const y=p();if(y){r.close(),g(y),n.open(y,P.clientX,P.clientY);return}const I=E(P.clientX,P.clientY);I&&C(I)}),a.addEventListener("contextmenu",P=>P.preventDefault()),window.addEventListener("keydown",P=>{if(document.body.hasAttribute("data-modal-open")||k0(P.target)||P.key!=="Delete"&&P.key!=="Backspace"||!h)return;P.preventDefault();const y=h;g(null),e.removePoint(y)})}function z0(i,t,e,n,r,s){const a=r-e,o=s-n,c=a*a+o*o,l=c>0?Math.min(1,Math.max(0,((i-e)*a+(t-n)*o)/c)):0,h=i-(e+a*l),d=t-(n+o*l);return Math.hypot(h,d)}function k0(i){if(!(i instanceof HTMLElement))return!1;const t=i.tagName;return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||i.isContentEditable}class H0{points=new Map;bends=[];bpm=96;bendCurve="exponential";waveType="sine";soundMode="oscillator";sampleBaseHz=Q_;sampleName="";sampleSeconds=0;sampleLoop=!1;outputRoute="audio";listeners=new Set;hold=0;held=!1;constructor(){this.loadDemo()}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(){if(this.hold>0){this.held=!0;return}this.held=!1;for(const t of[...this.listeners])t()}batch(t){this.hold+=1;try{t()}finally{this.hold-=1,this.hold===0&&this.held&&this.emit()}}addPoint(t){const e=crypto.randomUUID();return this.points.set(e,this.sanitize({...t,id:e})),this.emit(),e}updatePoint(t,e){const n=this.points.get(t);n&&(this.points.set(t,this.sanitize({...n,...e,id:t})),this.emit())}removePoint(t){this.points.delete(t)&&(this.bends=this.bends.filter(e=>e.fromPointId!==t&&e.toPointId!==t),this.emit())}addBend(t,e,n=this.bendCurve){if(t===e||!this.points.has(t)||!this.points.has(e))return null;const r=crypto.randomUUID();return this.bends.push({id:r,fromPointId:t,toPointId:e,curveType:n}),this.emit(),r}removeBend(t){const e=this.bends.filter(n=>n.id!==t);e.length!==this.bends.length&&(this.bends=e,this.emit())}updateBend(t,e){const n=this.bends.find(r=>r.id===t);n&&(e.curveType&&(n.curveType=e.curveType),this.emit())}outgoing(t){return this.bends.filter(e=>e.fromPointId===t)}setBpm(t){const e=re(Math.round(t),go,_o);e!==this.bpm&&(this.bpm=e,this.emit())}setBendCurve(t){t!==this.bendCurve&&(this.bendCurve=t,this.emit())}setWaveType(t){const e=t==="custom"?"sine":t;e!==this.waveType&&(this.waveType=e,this.emit())}setSoundMode(t){t!==this.soundMode&&(this.soundMode=t,this.emit())}setSampleBaseHz(t){if(!Number.isFinite(t))return;const e=re(t,j_,t0);e!==this.sampleBaseHz&&(this.sampleBaseHz=e,this.emit())}setSample(t){this.sampleName=t.name,this.sampleSeconds=t.seconds,this.sampleLoop=t.loop,this.emit()}setSampleLoop(t){t!==this.sampleLoop&&(this.sampleLoop=t,this.emit())}setOutputRoute(t){t!==this.outputRoute&&(this.outputRoute=t,this.emit())}pointsInColumn(t){return[...this.points.values()].filter(e=>xs(e.x)===t)}copyColumn(t){return q_(this.points.values(),this.bends,t)}clearColumn(t){const e=this.pointsInColumn(t).map(n=>n.id);this.batch(()=>{for(const n of e)this.removePoint(n)})}pasteColumn(t,e,n){const r=Ou(t);this.batch(()=>{if(n==="overwrite")for(const a of this.pointsInColumn(t).map(o=>o.id))this.removePoint(a);const s=e.points.map(a=>this.addPoint({x:r+a.dx,y:a.y,z:a.z,velocity:a.velocity,waveType:a.waveType}));for(const a of e.bends){const o=s[a.from],c=s[a.to];o&&c&&this.addBend(o,c,a.curveType)}})}quantize(){this.batch(()=>{for(const t of[...this.points.values()]){const e=W_(t.x);e!==t.x&&this.updatePoint(t.id,{x:e})}})}clear(){this.points.clear(),this.bends=[],this.emit()}loadDemo(){this.points.clear(),this.bends=[],this.bpm=197,this.bendCurve="exponential";const e=[[.06014115486807507,109.69198380689319,.7540878685220249,.75,"triangle"],[.13224524432839976,108.39144993683101,1,.75,"sine"],[.21197882141820126,114.72398977386572,.8267865230969619,.75,"triangle"],[.2763277051782829,145.50185334108136,.709381513214904,.1,"square"],[.3198368767606863,97.21849972979521,.784443018951373,.75,"triangle"],[.3830907735700439,125.42991614394718,.7356439912215436,.75,"square"],[.42717057106035666,141.79500995791173,.8031658513172595,.75,"sine"],[.5160097506087972,145.26431335915163,.7825807536516145,.75,"sine"],[.6495999999999981,195.99771799087463,.72,.75,"square"],[.6861975469335702,167.36530010786484,.704867509105118,.75,"sine"],[.7052798472559898,153.02540231581753,.6907746443992082,.75,"sine"],[.7765812257402378,126.47501428436871,.6642054346671792,.75,"triangle"],[.5564514443281208,169.57610528983838,.82647242431,.75,"sine"],[.2768162277138462,238.75479073534456,.5053996312051542,.75,"sine"],[.3411847476495199,407.66766815918777,.47353191838928615,.75,"sine"],[.6891075690880638,246.7253323511815,.7267454435081031,.75,"sine"],[.5884146222915984,252.51877709020167,.5793636103791212,.75,"sine"],[.40575607443132833,300.4984314647117,.40533420587725216,.75,"sine"],[.8373849829919608,308.26789859099034,.09,.75,"sine"],[.6839341179963736,395.47662256842455,.7199999999999995,.75,"sine"],[.7628776666218653,248.36991231721288,.6876293514534094,.75,"sine"],[.3603430057616309,593.3493623918756,.1376824858043206,.75,"sine"],[.113326798757309,538.0931932905266,0,.75,"sine"],[.32032729277951283,702.3324512635079,.19421262576209414,.75,"sine"],[.5878322043929076,539.1410401369884,0,.75,"sine"],[.70709398997044,603.5203978498721,.1451996912574834,.75,"sine"],[.6667032323819431,808.4866346798027,.2531182370697643,.11,"triangle"],[.42860982636156864,603.0199932871928,.20852342779111482,.75,"sine"],[.18298541117441414,407.26962722235055,.21675305062374975,.75,"sine"],[.678691292588608,265.54628495442455,.5710004256991218,.75,"sine"],[.5401445638317224,177.7198109781509,.5887759930919678,.75,"sine"],[.8497136097963592,191.23305265344518,.7199999999999985,.75,"sine"],[.9124170899802452,196.32577155878315,.72,.75,"sine"],[.7837855836184497,185.165302826394,.7199999999999985,.75,"sine"],[.19485498847920585,178.6116297724202,.72,.75,"sine"]].map(([r,s,a,o,c])=>this.addSilent({x:r,y:s,z:a,velocity:o,waveType:c})),n=[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[8,9],[9,10],[12,8],[13,17],[24,26],[23,27],[29,15],[17,30],[30,29]];for(const[r,s]of n)this.bends.push({id:crypto.randomUUID(),fromPointId:e[r],toPointId:e[s],curveType:"exponential"});this.emit()}loadRandom(){this.points.clear(),this.bends=[];const t=Cs(20,30),e=W0(t),n=V0(t),r=["sine","triangle","square","sawtooth"],s=[];let a=0;for(const o of n){const c=r[Cs(0,r.length-1)],l=o===1?Math.random()<.72?240:520:Math.random()<.45?320:Math.random()<.75?780:1500,h=o===1?58:l<400?70:l<800?160:360;let d=G0(h,l);for(let u=0;u<o;u++){if(u>0){const S=Math.random()<.5?hi(-70,70):hi(-800,800),f=Math.abs(S)<15?S<0?-35:35:S;d=re(d*2**(f/1200),sn,Tn)}const m=o===1?hi(.22,.96):re(hi(.3,.88)+(u-(o-1)/2)*.08,.04,1),g=o===1?hi(.7,1):u===0?hi(.28,.75):hi(.06,.32);s.push(this.addSilent({x:e[a],y:d,z:m,velocity:g,waveType:c})),u>0&&this.bends.push({id:crypto.randomUUID(),fromPointId:s[a-1],toPointId:s[a],curveType:Math.random()<.62?"exponential":"linear"}),a+=1}}this.emit()}addSilent(t){const e=crypto.randomUUID();return this.points.set(e,this.sanitize({...t,id:e})),e}sanitize(t){const e=t.waveType==="custom"?"sine":t.waveType,n=t.velocity,r=typeof n=="number"&&Number.isFinite(n)?n:Xi;return{id:t.id,x:re(t.x,0,1),y:re(t.y,sn,Tn),z:re(t.z,0,1),velocity:re(r,0,1),waveType:e}}}function Cs(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hi(i,t){return i+Math.random()*(t-i)}function G0(i,t){return i*(t/i)**Math.random()}function V0(i){const t=[];let e=i;const n=Math.min(8,Math.max(4,Math.floor(i*.3))),r=i-n;let s=0;for(;e>n&&s<r;){const a=Math.min(4,r-s,e-n);if(a<2)break;const o=Cs(2,a);t.push(o),s+=o,e-=o}for(;e>0;)t.push(1),e-=1;for(let a=t.length-1;a>0;a--){const o=Cs(0,a),c=t[a];t[a]=t[o],t[o]=c}return t}function W0(i){const t=Array.from({length:i},(r,s)=>{const a=(s+.5)/i,o=(Math.random()-.5)*(.55/i);return re(a+o,.012,.988)}).sort((r,s)=>r-s),e=Math.min(.016,.85/i);for(let r=1;r<t.length;r++)t[r]<t[r-1]+e&&(t[r]=t[r-1]+e);const n=t[t.length-1]??1;if(n>.988){const r=.976/n;for(let s=0;s<t.length;s++)t[s]=(t[s]??0)*r}return t}const Tc={type:"change"},Xo={type:"start"},Ku={type:"end"},as=new Ds,wc=new un,X0=Math.cos(70*au.DEG2RAD),Se=new k,Xe=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},va=1e-6;class q0 extends Yh{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Jn,this._lastTargetPosition=new k,this._quat=new Jn().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yl,this._sphericalDelta=new Yl,this._scale=1,this._panOffset=new k,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new k,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K0.bind(this),this._onPointerDown=Y0.bind(this),this._onPointerUp=$0.bind(this),this._onContextMenu=nv.bind(this),this._onMouseWheel=Q0.bind(this),this._onKeyDown=j0.bind(this),this._onTouchStart=tv.bind(this),this._onTouchMove=ev.bind(this),this._onMouseDown=Z0.bind(this),this._onMouseMove=J0.bind(this),this._interceptControlDown=iv.bind(this),this._interceptControlUp=rv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tc),this.update(),this.state=ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Xe:n>Math.PI&&(n-=Xe),r<-Math.PI?r+=Xe:r>Math.PI&&(r-=Xe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Se.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new k(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(as.origin.copy(this.object.position),as.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(as.direction))<X0?this.object.lookAt(this.target):(wc.setFromNormalAndCoplanarPoint(this.object.up,this.target),as.intersectPlane(wc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>va||this._lastTargetPosition.distanceToSquared(this.target)>va?(this.dispatchEvent(Tc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Se.copy(r).sub(this.target);let s=Se.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Y0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function K0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ku),this.state=ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Z0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case In.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case In.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case In.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Xo)}function J0(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Q0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Xo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ku))}function j0(i){this.enabled!==!1&&this._handleKeyDown(i)}function tv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1){this.state=ee.NONE;break}this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1){this.state=ee.NONE;break}this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Xo)}function ev(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function nv(i){this.enabled!==!1&&i.preventDefault()}function iv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ac=new ii,os=new k;class $u extends Hh{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ve(t,3)),this.setAttribute("uv",new ve(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new ho(e,6,1);return this.setAttribute("instanceStart",new Mn(n,3,0)),this.setAttribute("instanceEnd",new Mn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new ho(e,6,1);return this.setAttribute("instanceColorStart",new Mn(n,3,0)),this.setAttribute("instanceColorEnd",new Mn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Lh(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ac.setFromBufferAttribute(e),this.boundingBox.union(Ac))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)os.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(os)),os.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(os));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Et.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ye.line={uniforms:Bo.merge([Et.common,Et.fog,Et.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Us extends ti{constructor(t){super({type:"LineMaterial",uniforms:Bo.clone(Ye.line.uniforms),vertexShader:Ye.line.vertexShader,fragmentShader:Ye.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const xa=new se,Rc=new k,Cc=new k,Le=new se,De=new se,gn=new se,Sa=new k,Ma=new le,Ie=new qh,Pc=new k,ls=new ii,cs=new Ji,_n=new se;let vn,mi;function Lc(i,t,e){return _n.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),_n.multiplyScalar(1/_n.w),_n.x=mi/e.width,_n.y=mi/e.height,_n.applyMatrix4(i.projectionMatrixInverse),_n.multiplyScalar(1/_n.w),Math.abs(Math.max(_n.x,_n.y))}function sv(i,t){const e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,c=a;o<c;o++){Ie.start.fromBufferAttribute(r,o),Ie.end.fromBufferAttribute(s,o),Ie.applyMatrix4(e);const l=new k,h=new k;vn.distanceSqToSegment(Ie.start,Ie.end,h,l),h.distanceTo(l)<mi*.5&&t.push({point:h,pointOnLine:l,distance:vn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function av(i,t,e){const n=t.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),d=-t.near;vn.at(1,gn),gn.w=1,gn.applyMatrix4(t.matrixWorldInverse),gn.applyMatrix4(n),gn.multiplyScalar(1/gn.w),gn.x*=s.x/2,gn.y*=s.y/2,gn.z=0,Sa.copy(gn),Ma.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(Le.fromBufferAttribute(c,u),De.fromBufferAttribute(l,u),Le.w=1,De.w=1,Le.applyMatrix4(Ma),De.applyMatrix4(Ma),Le.z>d&&De.z>d)continue;if(Le.z>d){const R=Le.z-De.z,M=(Le.z-d)/R;Le.lerp(De,M)}else if(De.z>d){const R=De.z-Le.z,M=(De.z-d)/R;De.lerp(Le,M)}Le.applyMatrix4(n),De.applyMatrix4(n),Le.multiplyScalar(1/Le.w),De.multiplyScalar(1/De.w),Le.x*=s.x/2,Le.y*=s.y/2,De.x*=s.x/2,De.y*=s.y/2,Ie.start.copy(Le),Ie.start.z=0,Ie.end.copy(De),Ie.end.z=0;const S=Ie.closestPointToPointParameter(Sa,!0);Ie.at(S,Pc);const f=au.lerp(Le.z,De.z,S),p=f>=-1&&f<=1,b=Sa.distanceTo(Pc)<mi*.5;if(p&&b){Ie.start.fromBufferAttribute(c,u),Ie.end.fromBufferAttribute(l,u),Ie.start.applyMatrix4(a),Ie.end.applyMatrix4(a);const R=new k,M=new k;vn.distanceSqToSegment(Ie.start,Ie.end,M,R),e.push({point:M,pointOnLine:R,distance:vn.origin.distanceTo(M),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}class ov extends Re{constructor(t=new $u,e=new Us({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)Rc.fromBufferAttribute(e,a),Cc.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Rc.distanceTo(Cc);const s=new ho(r,2,1);return t.setAttribute("instanceDistanceStart",new Mn(s,1,0)),t.setAttribute("instanceDistanceEnd",new Mn(s,1,1)),this}raycast(t,e){const n=this.material.worldUnits,r=t.camera;if(r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;vn=t.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;mi=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),cs.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=mi*.5;else{const d=Math.max(r.near,cs.distanceToPoint(vn.origin));l=Lc(r,d,c.resolution)}if(cs.radius+=l,vn.intersectsSphere(cs)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ls.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=mi*.5;else{const d=Math.max(r.near,ls.distanceToPoint(vn.origin));h=Lc(r,d,c.resolution)}ls.expandByScalar(h),vn.intersectsBox(ls)!==!1&&(n?sv(this,e):av(this,r,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(xa),this.material.uniforms.resolution.value.set(xa.z,xa.w))}}class qo extends $u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let r=0;r<e;r++)n[6*r]=t[r].x,n[6*r+1]=t[r].y,n[6*r+2]=t[r].z||0,n[6*r+3]=t[r+1].x,n[6*r+4]=t[r+1].y,n[6*r+5]=t[r+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Eo extends ov{constructor(t=new qo,e=new Us({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const Dc={sine:new Vt("#ffe14a"),square:new Vt("#ff8c1a"),sawtooth:new Vt("#ff3b30"),triangle:new Vt("#3ddc6e"),custom:new Vt("#ffe14a")},lv=8;function Zu(i,t){const e=Dc[t]??Dc.sine;i.color.copy(e),i.emissive.copy(e)}const Ic=.55,cv=1.35;function Ju(i){const t=Number.isFinite(i)?Math.min(1,Math.max(0,i)):Xi;return Ic+(cv-Ic)*t}const Qu=new Qi(.18,28,18),uv=new Qi(.46,10,8),dv=new Qi(.28,18,12),hv=new Fn({transparent:!0,opacity:0,depthWrite:!1}),fv=new Fn({color:16774370,wireframe:!0,transparent:!0,opacity:.9});function pv(i){const t=new _h;t.background=new Vt(1053722);const e=new dn(42,1,.1,250);e.position.set(7.2,16.8,34);let n;try{n=new G_({antialias:!0})}catch(L){throw i.innerHTML='<p class="fatal">WebGL is not available in this browser.</p>',L}n.outputColorSpace=qe,n.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.replaceChildren(n.domElement);const r=new q0(e,n.domElement);r.target.set(9.4,6.6,1.8),r.enableDamping=!0,r.dampingFactor=.08,r.rotateSpeed=.75,r.zoomSpeed=.85,r.screenSpacePanning=!0,r.minDistance=4,r.maxDistance=72,r.minPolarAngle=.12,r.maxPolarAngle=Math.PI-.05,r.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.PAN,RIGHT:In.ROTATE},r.update(),t.add(new Bh(16249318,2371642,.9));const s=new Wl(16774372,1.4);s.position.set(-8,18,12),t.add(s);const a=new Wl(9417983,.4);a.position.set(14,6,-6),t.add(a);const o=new Re(new vi(Ne,Ae),new Fn({color:1714226,transparent:!0,opacity:.72,side:rn,depthWrite:!1}));o.position.set(Ne/2,Ae/2,_s),o.name="interaction-plane",t.add(o);const{guide:c,pitchLineLabels:l,barMaterials:h}=_v();t.add(c);const d=new fn,u=new fn,m=new fn,g=new fn;g.name="columns",t.add(u,d,m,g);const S=new Qi(.26,20,14),f=[];for(let L=0;L<$n;L++){const W=new vu({color:9274484,emissive:2761752,roughness:.45,metalness:.05}),F=new Re(S,W);F.position.set(vc(L)*Ne,Ae+.48,_s),F.userData.columnIndex=L,g.add(F),f.push(F)}const p=new Re(new vi(Ne/$n,Ae),new Fn({color:14918746,transparent:!0,opacity:.2,depthWrite:!1,side:rn}));p.visible=!1,p.raycast=()=>{},p.renderOrder=1,t.add(p);const b=gv();t.add(b);const R=new Re(Qu,new Fn({color:14018303,transparent:!0,opacity:.85}));R.visible=!1,R.raycast=()=>{},t.add(R);const M=new Map,E=[...h];let C=null,_=null,T=new Map,V=window.innerWidth,U=window.innerHeight;function G(L,W,F){const X=new qo,tt=[];for(const Q of L)tt.push(Q.x,Q.y,Q.z);X.setPositions(tt);const ot=new Us({color:W,linewidth:F,transparent:!0,opacity:.95,worldUnits:!1});ot.resolution.set(V,U),E.push(ot);const Rt=new Eo(X,ot);return Rt.computeLineDistances(),Rt.frustumCulled=!1,Rt.raycast=()=>{},Rt}function J(L){if(!(L instanceof Eo))return;L.geometry.dispose();const W=L.material,F=E.indexOf(W);F>=0&&E.splice(F,1),W.dispose()}function P(L,W,F,X,tt){let ot=[];const Rt=()=>{if(ot.length>=2){const Q=G(ot,F,X);tt&&(Q.userData.bendId=tt),L.add(Q)}ot=[]};for(const Q of W){const ht=ot[ot.length-1];ht&&Q.x<ht.x-Fu&&Rt(),ot.push(Q)}Rt()}function y(L){for(const W of[...L.children])L.remove(W),J(W)}function I(){for(const[L,W]of M){const F=T.get(L)??0,X=L===C,tt=L===_,ot=typeof W.userData.velScale=="number"?W.userData.velScale:1,Rt=1+F*.55+(tt&&!X?.1:0);W.scale.setScalar(ot*Rt);const Q=W.getObjectByName("picker");Q&&Q.scale.setScalar(ot>0?1/ot:1);const ht=W.material;ht.emissiveIntensity=.16+F*1.2+(X?.45:0)+(tt?.2:0);const _t=W.getObjectByName("selection");_t&&(_t.visible=X||F>.35)}}function B(){V=window.innerWidth,U=window.innerHeight,e.aspect=V/Math.max(U,1),e.updateProjectionMatrix(),n.setSize(V,U),n.setPixelRatio(Math.min(window.devicePixelRatio,2));for(const L of E)L.resolution.set(V,U)}return B(),window.addEventListener("resize",B),{canvas:n.domElement,camera:e,controls:r,pointsGroup:d,columnsGroup:g,plane:o,setColumn(L){for(let W=0;W<f.length;W++){const F=f[W];if(!F)continue;const X=W===L,tt=F.material;tt.color.setHex(X?15782820:9274484),tt.emissive.setHex(X?9069104:2761752),F.scale.setScalar(X?1.45:1)}if(L==null){p.visible=!1;return}p.visible=!0,p.position.set(vc(L)*Ne,Ae/2,_s+.06)},pickColumn(L){let W=L;for(;W;){const F=W.userData.columnIndex;if(typeof F=="number")return F;W=W.parent}return null},sync(L){const W=new Set;for(const F of L.points.values()){W.add(F.id);let X=M.get(F.id);const tt=L.soundMode==="sampler";X||(X=mv(F,tt),M.set(F.id,X),d.add(X));const ot=mr(F);X.position.set(ot.x,ot.y,ot.z),X.userData.velScale=Ju(F.velocity),Zu(X.material,tt?"sine":F.waveType)}for(const[F,X]of M)W.has(F)||(d.remove(X),X.material.dispose(),M.delete(F));y(u);for(const F of L.bends){const X=L.points.get(F.fromPointId),tt=L.points.get(F.toPointId);if(!X||!tt)continue;const ot=F.curveType==="exponential"?15770462:7124937;P(u,xo(X,tt,F.curveType),ot,3,F.id)}I()},setPlayhead(L){b.position.x=Math.min(1,Math.max(0,L))*Ne},setHighlights(L){T=L,I()},setSelected(L){C=L,I()},setHover(L){_=L,I()},setPreview(L,W,F){if(y(m),!L||!W){R.visible=!1;return}const X=zi(W);P(m,xo(L,X,F),14083327,2),R.position.set(W.x,W.y,W.z),R.visible=!0},pickPointId(L){let W=L;for(;W;){const F=W.userData.pointId;if(typeof F=="string")return F;W=W.parent}return null},clientToNDC(L,W,F){const X=n.domElement.getBoundingClientRect();F.x=(L-X.left)/X.width*2-1,F.y=-((W-X.top)/X.height)*2+1},start(L){const W=()=>{requestAnimationFrame(W),r.update();const F=e.position.distanceTo(r.target);l.visible=F<lv,L(),n.render(t,e)};requestAnimationFrame(W)}}}function mv(i,t){const e=new vu({emissiveIntensity:.16,roughness:.38,metalness:.08});Zu(e,t?"sine":i.waveType);const n=new Re(Qu,e);n.userData.pointId=i.id,n.userData.velScale=Ju(i.velocity);const r=new Re(uv,hv);r.name="picker",r.userData.pointId=i.id,n.add(r);const s=new Re(dv,fv);return s.name="selection",s.visible=!1,s.raycast=()=>{},n.add(s),n}function gv(){const i=new fn,t=new Re(new vi(Ke,Ae),new Fn({color:16769720,transparent:!0,opacity:.2,side:rn,depthWrite:!1,blending:ya}));t.rotation.y=Math.PI/2,t.position.set(0,Ae/2,Ke/2),t.raycast=()=>{};const e=new Re(new jn(.032,Ae,.032),new Fn({color:16774884}));e.position.set(0,Ae/2,Ke),e.raycast=()=>{};const n=new Re(new jn(.26,.016,.016),new Fn({color:16774884}));return n.position.set(0,0,Ke),n.raycast=()=>{},i.add(t,e,n),i}function _v(){const i=new fn,t=[],e=[],n=[],r=(g,S,f,p,b,R,M)=>{const E=new Vt(M);t.push(g,S,f,p,b,R),e.push(E.r,E.g,E.b,E.r,E.g,E.b)},s=_s+.03;for(let g=0;g<=16;g++){const S=g/16*Ne,f=g%4===0;if(f){const b=new qo;b.setPositions([S,0,s,S,Ae,s]);const R=new Us({color:13939850,linewidth:2,transparent:!0,opacity:.95,worldUnits:!1});R.resolution.set(window.innerWidth,window.innerHeight),n.push(R);const M=new Eo(b,R);M.computeLineDistances(),M.frustumCulled=!1,M.raycast=()=>{},i.add(M)}else r(S,0,s,S,Ae,s,2372154);r(S,-(f?.26:.12),s,S,0,s,f?14725242:4873320)}for(const g of vs())if(g.octaveAnchor)for(let S=0;S<=pi;S++){const f=S/pi*Ne;r(f-.14,g.y,s+.02,f+.14,g.y,s+.02,15782820)}for(const g of vs())if(g.natural){const S=g.octaveAnchor?7180164:g.label.startsWith("C")?5073528:2899016;r(0,g.y,s,Ne,g.y,s,S),r(-.28,g.y,s,0,g.y,s,g.octaveAnchor?15782820:9347246)}else r(-.12,g.y,s,0,g.y,s,4017754);r(0,0,s,Ne,0,s,14725242),r(0,0,s,0,Ae,s,9425094),r(0,0,0,0,0,Ke,13794182);for(const g of[0,.5,1])r(0,0,g*Ke,.4,0,g*Ke,13794182);const a=new Je;a.setAttribute("position",new ve(t,3)),a.setAttribute("color",new ve(e,3));const o=new Ol(a,new co({vertexColors:!0,transparent:!0,opacity:.95}));o.raycast=()=>{},i.add(o);const c=new Ol(new Ph(new jn(Ne,Ae,Ke)),new co({color:4282472,transparent:!0,opacity:.85}));c.position.set(Ne/2,Ae/2,Ke/2),c.raycast=()=>{},i.add(c);for(const g of vs()){if(!g.natural)continue;const S=fi(g.label,g.octaveAnchor?"#f0d3a4":"#a9b6c3");S.position.set(-1.55,g.y,s),S.scale.set(g.octaveAnchor?1.05:.82,g.octaveAnchor?.36:.28,1),i.add(S)}const l=xv(s);i.add(l);for(let g=1;g<=pi;g++){const S=fi(String(g),"#d7c4a4");S.position.set((g-.5)/pi*Ne,-.7,s),S.scale.set(.7,.34,1),i.add(S)}const h=fi("time","#e0b07a");h.position.set(Ne+1.1,-.15,s),h.scale.set(1.3,.42,1);const d=fi("pitch","#8fd0c6");d.position.set(-1.15,Ae+.55,s),d.scale.set(1.35,.42,1);const u=fi("loud","#d27b86");u.position.set(1.15,-.55,Ke),u.scale.set(1.15,.4,1);const m=fi("soft","#d27b86");return m.position.set(1.15,-.55,.05),m.scale.set(1.15,.4,1),i.add(h,d,u,m),{guide:i,pitchLineLabels:l,barMaterials:n}}const vv=[2.5,6.5,10.5,14.5];function xv(i){const t=new fn;t.name="pitch-line-labels",t.visible=!1,t.raycast=()=>{};for(const e of vs()){if(!e.natural)continue;const n=e.octaveAnchor,r=n?"#f0d3a4":"#a9b6c3",s=n?.78:.6,a=n?.26:.2;for(const o of vv){const c=fi(e.label,r);c.position.set(o,e.y+a*.42,i+.06),c.scale.set(s,a,1),t.add(c)}}return t}const Nc=new Map;function fi(i,t){const e=`${t}\0${i}`;let n=Nc.get(e);if(!n){const s=document.createElement("canvas");s.width=256,s.height=128;const a=s.getContext("2d");if(!a)throw new Error("2D canvas is unavailable");a.clearRect(0,0,s.width,s.height),a.font="600 64px ui-monospace, Menlo, Consolas, monospace",a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.fillText(i,s.width/2,s.height/2);const o=new Ch(s);o.colorSpace=qe,n=new hu({map:o,transparent:!0,depthTest:!1}),Nc.set(e,n)}const r=new bh(n);return r.renderOrder=6,r.raycast=()=>{},r}function Sv(i,t){const e=document.createElement("div");e.className="editor column-editor",e.hidden=!0,e.innerHTML=`
    <header>
      <h2>Column</h2>
      <button type="button" class="icon" data-close aria-label="Close">×</button>
    </header>
    <div class="stack">
      <p class="readout" data-where></p>
      <p class="readout" data-counts></p>
      <p class="readout" data-status></p>
      <button type="button" data-clear>Clear column</button>
      <button type="button" data-copy>Copy column</button>
      <button type="button" data-paste>Paste column</button>
      <div class="choice" data-choice hidden>
        <p class="readout">Overwrite or addition</p>
        <button type="button" data-overwrite>Overwrite</button>
        <button type="button" data-addition>Addition</button>
      </div>
    </div>
  `,document.body.appendChild(e);const n=e.querySelector("[data-where]"),r=e.querySelector("[data-counts]"),s=e.querySelector("[data-status]"),a=e.querySelector("[data-paste]"),o=e.querySelector("[data-choice]");let c=null,l=null,h=!1;const d=f=>f===1?"1 note":`${f} notes`,u=f=>f===1?"1 bend":`${f} bends`,m=()=>{if(c==null)return;n.textContent=Bu(c);const f=i.pointsInColumn(c).length;r.textContent=d(f),a.disabled=l==null,a.title=l==null?"Copy a column first":`Paste ${d(l.points.length)}`},g=()=>{c!=null&&(c=null,o.hidden=!0,e.hidden=!0,t(null))},S=f=>{if(c==null||!l)return;const p=c;i.pasteColumn(p,l,f),o.hidden=!0,s.textContent=f==="overwrite"?"Pasted over this column.":"Added to this column.",s.hidden=!1,m()};return e.querySelector("[data-close]").addEventListener("click",g),e.querySelector("[data-clear]").addEventListener("click",()=>{c!=null&&(i.clearColumn(c),o.hidden=!0,s.textContent="Cleared.",s.hidden=!1,m())}),e.querySelector("[data-copy]").addEventListener("click",()=>{c!=null&&(l=i.copyColumn(c),o.hidden=!0,s.textContent=`Copied ${d(l.points.length)}, ${u(l.bends.length)}.`,s.hidden=!1,m())}),a.addEventListener("click",()=>{l&&(o.hidden=!1,s.textContent="",s.hidden=!0)}),e.querySelector("[data-overwrite]").addEventListener("click",()=>S("overwrite")),e.querySelector("[data-addition]").addEventListener("click",()=>S("addition")),i.subscribe(()=>{c!=null&&m()}),document.addEventListener("pointerdown",f=>{if(c==null||e.contains(f.target))return;const p=f.target;g(),p instanceof HTMLCanvasElement&&(h=!0)},!0),window.addEventListener("keydown",f=>{f.key==="Escape"&&c!=null&&g()}),{open(f,p,b){if(f<0||f>=$n)return;c=f,o.hidden=!0,s.textContent=l?`Clipboard holds ${d(l.points.length)}.`:"",s.hidden=s.textContent==="",e.hidden=!1,e.style.left=`${p+14}px`,e.style.top=`${b+14}px`,m(),t(f);const R=e.getBoundingClientRect();R.right>window.innerWidth-8&&(e.style.left=`${Math.max(8,window.innerWidth-R.width-8)}px`),R.bottom>window.innerHeight-8&&(e.style.top=`${Math.max(8,window.innerHeight-R.height-8)}px`)},close:g,interceptPointer(){const f=h;return h=!1,f}}}const Uc=200,Mv=8e3;function yv(i){return Uc*(Mv/Uc)**i}function Ev(i){return .5+i*2.5}function Cv(i){return .4+i*.6}const bv=["sine","triangle","sawtooth","square"];function Tv(i){const t=document.createElement("div");t.className="editor",t.hidden=!0,t.innerHTML=`
    <header>
      <h2 data-title>Note</h2>
      <button type="button" class="icon" data-close aria-label="Close">×</button>
    </header>
    <div class="stack">
      <p class="readout" data-meta></p>
      <p class="readout" data-ratio hidden></p>
      <label>Frequency
        <input data-freq type="number" min="${sn}" max="${Tn}" step="0.01" />
      </label>
      <label>Intensity
        <input data-gain type="range" min="0" max="1" step="0.01" />
      </label>
      <p class="readout" data-cutoff></p>
      <p class="readout" data-q></p>
      <label>Velocity
        <input data-velocity type="range" min="0" max="1" step="0.01" />
        <span class="velocity-caption"><span>smooth</span><span>hit</span></span>
      </label>
      <label data-wave-field>Wave
        <select data-wave>
          ${bv.map(M=>`<option value="${M}">${M}</option>`).join("")}
        </select>
      </label>
      <div data-bends></div>
      <button type="button" class="danger" data-delete>Remove point</button>
    </div>
  `,document.body.append(t);const e=t.querySelector("[data-title]"),n=t.querySelector("[data-meta]"),r=t.querySelector("[data-ratio]"),s=t.querySelector("[data-freq]"),a=t.querySelector("[data-gain]"),o=t.querySelector("[data-velocity]"),c=t.querySelector("[data-cutoff]"),l=t.querySelector("[data-q]"),h=t.querySelector("[data-wave-field]"),d=t.querySelector("[data-wave]"),u=t.querySelector("[data-bends]");let m=null,g="",S=!1;const f=()=>m?i.points.get(m):void 0,p=()=>{const M=f();if(!M||!m)return;e.textContent=vo(M.y),n.textContent=`${Uu(M.y)} · ${Go(M.x)}`,document.activeElement!==s&&(s.value=M.y.toFixed(2)),document.activeElement!==a&&(a.value=String(M.z)),document.activeElement!==o&&(o.value=String(M.velocity)),c.textContent=`Cutoff: ${yv(M.z).toFixed(0)} Hz`,l.textContent=`Q: ${Ev(M.z).toFixed(2)}`;const E=i.soundMode==="sampler";if(h.hidden=E,r.hidden=!E,E){const _=i.sampleBaseHz>0?i.sampleBaseHz:440;r.textContent=`Pitch ×${(M.y/_).toFixed(3)}`}!E&&document.activeElement!==d&&(d.value=M.waveType);const C=i.outgoing(m).map(_=>`${_.id}:${_.curveType}`).join("|");C!==g&&(g=C,b(m))},b=M=>{const E=i.outgoing(M);if(u.replaceChildren(),E.length===0){const C=document.createElement("p");C.className="tagline",C.textContent="Right-drag this note to bend into a new one.",u.append(C);return}for(const C of E){const _=i.points.get(C.toPointId),T=document.createElement("label");T.className="bend-row",T.textContent=_?`Bend to ${vo(_.y)}`:"Bend";const V=document.createElement("select");V.innerHTML='<option value="exponential">exponential</option><option value="linear">linear</option>',V.value=C.curveType,V.addEventListener("change",()=>{i.updateBend(C.id,{curveType:V.value})}),T.append(V),u.append(T)}},R=()=>{m=null,g="",t.hidden=!0};return t.querySelector("[data-close]").addEventListener("click",R),t.querySelector("[data-delete]").addEventListener("click",()=>{if(!m)return;const M=m;R(),i.removePoint(M)}),s.addEventListener("input",()=>{if(!m)return;const M=Number(s.value);!Number.isFinite(M)||M<sn||M>Tn||i.updatePoint(m,{y:M})}),a.addEventListener("input",()=>{m&&i.updatePoint(m,{z:Number(a.value)})}),o.addEventListener("input",()=>{m&&i.updatePoint(m,{velocity:Number(o.value)})}),d?.addEventListener("change",()=>{!m||!d||i.updatePoint(m,{waveType:d.value})}),i.subscribe(()=>{if(m){if(!i.points.has(m)){R();return}p()}}),document.addEventListener("pointerdown",M=>{if(!m||t.contains(M.target))return;const E=M.target;R(),E instanceof HTMLCanvasElement&&(S=!0)},!0),window.addEventListener("keydown",M=>{M.key==="Escape"&&m&&R()}),{open(M,E,C){if(!i.points.has(M))return;m=M,g="",t.hidden=!1,t.style.left=`${E+14}px`,t.style.top=`${C+14}px`,p();const _=t.getBoundingClientRect();_.right>window.innerWidth-8&&(t.style.left=`${Math.max(8,window.innerWidth-_.width-8)}px`),_.bottom>window.innerHeight-8&&(t.style.top=`${Math.max(8,window.innerHeight-_.height-8)}px`)},close:R,interceptPointer(){const M=S;return S=!1,M}}}const ju=document.querySelector("#app");if(!ju)throw new Error("Missing #app");const bo=window.cartofreq?.platform==="electron",he=new H0;bo&&(he.setSoundMode("sampler"),he.setOutputRoute("audio"));window.__cartofreqScore=()=>({bpm:he.bpm,bendCurve:he.bendCurve,waveType:he.waveType,soundMode:he.soundMode,sampleBaseHz:he.sampleBaseHz,points:[...he.points.values()].map(i=>({id:i.id,x:i.x,y:i.y,z:i.z,velocity:i.velocity,waveType:i.waveType})),bends:he.bends.map(i=>({id:i.id,fromPointId:i.fromPointId,toPointId:i.toPointId,curveType:i.curveType}))});async function wv(){const i=pv(ju),t=Tv(he),e=Sv(he,l=>i.setColumn(l));let n,r,s=null;const{createAudioEngine:a}=await oi(async()=>{const{createAudioEngine:l}=await import("./synth-BmT1K5P1.js");return{createAudioEngine:l}},[]),o=await a({initialMode:he.soundMode,baseHz:()=>he.sampleBaseHz,loop:()=>he.sampleLoop});if(bo){const{MidiScheduler:l}=await oi(async()=>{const{MidiScheduler:f}=await import("./midi-scheduler-Ccx57CZv.js");return{MidiScheduler:f}},__vite__mapDeps([0,1])),{createMidiGesture:h}=await oi(async()=>{const{createMidiGesture:f}=await import("./midi-gesture-Bi9mBb5j.js");return{createMidiGesture:f}},__vite__mapDeps([2,1])),{Scheduler:d}=await oi(async()=>{const{Scheduler:f}=await import("./scheduler-DLTV3PnK.js");return{Scheduler:f}},[]),{createOutputTransport:u,createRoutedGesture:m}=await oi(async()=>{const{createOutputTransport:f,createRoutedGesture:p}=await import("./output-transport-3doNPWXb.js");return{createOutputTransport:f,createRoutedGesture:p}},[]),g=new d(o,he),S=new l(he);n=u({audio:g,midi:S,route:()=>he.outputRoute}),r=m(o,h(),()=>he.outputRoute)}else{const{Scheduler:l}=await oi(async()=>{const{Scheduler:d}=await import("./scheduler-DLTV3PnK.js");return{Scheduler:d}},[]),{createRecorder:h}=await oi(async()=>{const{createRecorder:d}=await import("./recording-DOfmoQQR.js");return{createRecorder:d}},[]);n=new l(o,he),r=o,s=h(o)}const c=N0({store:he,audio:r,engine:o,scheduler:n,recorder:s,platform:bo?"electron":"web"});he.subscribe(()=>i.sync(he)),i.sync(he),B0({view:i,store:he,editor:t,columns:e,ui:c}),i.start(()=>{i.setPlayhead(n.playhead()),i.setHighlights(n.highlights()),c.tick()})}wv();export{Uc as C,Xi as D,pr as P,e0 as S,yv as a,Cv as b,Vu as c,Rv as d,re as e,Hu as f,Av as g,Gu as h,Ec as i,X_ as j,d0 as o,xr as t,Ev as z};
