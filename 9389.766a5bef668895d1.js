"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9389],{9389:(Ge,D,y)=>{y.r(D),y.d(D,{HomePage:()=>qe});var te=y(5861),p=y(9032),n=y(8256);let ne=(()=>{class o{constructor(){this.maxHeight=500,this.offset=0,this.height=0,this.className="up-relative",this.imageSize=75}onScroll(t){const r=document.documentElement.clientHeight+document.documentElement.clientHeight/2+this.imageSize;this.height=(t.detail.currentY-r)/this.maxHeight,this.height>=0&&this.height<=1?this.className="fixed":this.height<0?(this.height=0,this.className="up-relative"):this.height>1&&(this.height=1,this.className="down-relative")}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["scroll-line"]],inputs:{maxHeight:"maxHeight",offset:"offset"},standalone:!0,features:[n.jDz],decls:6,vars:3,consts:[["id","container"],[3,"className"],[1,"line"],["svgLine",""],["src","../../assets/user.jpeg"],[1,"dotted-line"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"div",2,3)(4,"img",4)(5,"div",5),n.qZA()()),2&t&&(n.xp6(1),n.Q6J("className",r.className),n.xp6(1),n.Udp("transform","scaleY("+r.height+")"))},dependencies:[p.Pc],styles:["[_nghost-%COMP%]{--line-height: 1300px}.line[_ngcontent-%COMP%]{height:var(--line-height);background-color:var(--primary-color);width:4px;margin:0 auto;transform-origin:bottom}.up-relative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;bottom:0}.fixed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:fixed;bottom:50%}.down-relative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;bottom:0}.up-relative[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:fixed;bottom:0}.fixed[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:fixed;bottom:50%}.down-relative[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;bottom:0}img[_ngcontent-%COMP%]{position:absolute;color:#fff;width:75px;height:75px;border-radius:50%;padding:4px;border:4px solid var(--primary-color);bottom:50%}#container[_ngcontent-%COMP%]{position:relative;margin:0 auto;display:flex;flex-direction:column;align-items:center}#container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;flex-direction:column}.dotted-line[_ngcontent-%COMP%]{height:var(--line-height);z-index:-1;width:1px;top:65px;position:absolute!important;bottom:unset!important;background-image:linear-gradient(180deg,transparent,transparent 50%,var(--primary-color) 50%,var(--primary-color) 100%);background-size:2px 8px;background-repeat:repeat-y}"]}),o})();var J=y(7551);let oe=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["project-image"]],inputs:{image:"image"},standalone:!0,features:[n.jDz],decls:3,vars:1,consts:[[1,"project-item"],[3,"src"]],template:function(t,r){1&t&&(n.TgZ(0,"section")(1,"ion-card",0),n._UZ(2,"img",1),n.qZA()()),2&t&&(n.xp6(2),n.Q6J("src",r.image,n.LSH))},dependencies:[p.Pc,p.PM],styles:["section[_ngcontent-%COMP%]{height:300px;display:flex;justify-content:center;align-items:center}.project-item[_ngcontent-%COMP%]{aspect-ratio:16/9;max-height:100%}img[_ngcontent-%COMP%]{width:100%;height:100%}"]}),o})();var v=y(6895);function re(o,e){if(1&o&&n._UZ(0,"ion-icon",6),2&o){const t=n.oxw().$implicit;n.Q6J("name",t.icon)}}function se(o,e){if(1&o&&n._UZ(0,"ion-icon",7),2&o){const t=n.oxw().$implicit;n.Q6J("src",t.asset)}}function ie(o,e){if(1&o&&(n.TgZ(0,"ion-chip"),n.YNc(1,re,1,1,"ion-icon",4),n.YNc(2,se,1,1,"ion-icon",5),n.TgZ(3,"ion-label"),n._uU(4),n.qZA()()),2&o){const t=e.$implicit;n.xp6(1),n.Q6J("ngIf",t.icon),n.xp6(1),n.Q6J("ngIf",!t.icon),n.xp6(2),n.Oqu(t.name)}}function ae(o,e){if(1&o&&(n.TgZ(0,"ion-card",1)(1,"ion-card-header")(2,"ion-card-title"),n._uU(3),n.qZA(),n.TgZ(4,"ion-card-subtitle"),n._uU(5),n.qZA()(),n.TgZ(6,"ion-card-content"),n._uU(7),n.TgZ(8,"div",2),n.YNc(9,ie,5,3,"ion-chip",3),n.qZA()()()),2&o){const t=n.oxw();n.xp6(3),n.Oqu(t.project.name),n.xp6(2),n.Oqu(t.project.year),n.xp6(2),n.hij(" ",t.project.description," "),n.xp6(2),n.Q6J("ngForOf",t.project.frameworks)}}let ce=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["project-info"]],inputs:{project:"project"},standalone:!0,features:[n.jDz],decls:2,vars:1,consts:[["class","project-item",4,"ngIf"],[1,"project-item"],[1,"frameworks"],[4,"ngFor","ngForOf"],[3,"name",4,"ngIf"],["class","svg",3,"src",4,"ngIf"],[3,"name"],[1,"svg",3,"src"]],template:function(t,r){1&t&&(n.TgZ(0,"section"),n.YNc(1,ae,10,4,"ion-card",0),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",r.project))},dependencies:[p.Pc,p.PM,p.FN,p.Zi,p.tO,p.Dq,p.hM,p.gu,p.Q$,v.ez,v.sg,v.O5],styles:["section[_ngcontent-%COMP%]{height:300px;display:flex;justify-content:center;align-items:center}.project-item[_ngcontent-%COMP%]{aspect-ratio:16/9;max-height:100%}ion-card-title[_ngcontent-%COMP%]{color:var(--primary-color)}ion-card-subtitle[_ngcontent-%COMP%]{color:#fff}ion-chip[_ngcontent-%COMP%]{color:var(--primary-color)}ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--primary-color)}.svg[_ngcontent-%COMP%]{fill:var(--primary-color);color:var(--primary-color)}"]}),o})();var le=y(9646),pe=y(9751),de=y(4351),ue=y(9300),j=y(4004);class H{}class N{}class C{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const s=t.slice(0,r),i=s.toLowerCase(),c=t.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(c):this.headers.set(i,[c])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let r=e[t];const s=t.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(s,r),this.maybeSetNormalizedName(t,s))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof C?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new C;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof C?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const s=("a"===e.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const i=e.value;if(i){let c=this.headers.get(t);if(!c)return;c=c.filter(d=>-1===i.indexOf(d)),0===c.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,c)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class he{encodeKey(e){return Z(e)}encodeValue(e){return Z(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const me=/%(\d[a-f0-9])/gi,ge={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Z(o){return encodeURIComponent(o).replace(me,(e,t)=>{var r;return null!==(r=ge[t])&&void 0!==r?r:e})}function M(o){return`${o}`}class x{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new he,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function fe(o,e){const t=new Map;return o.length>0&&o.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[c,d]=-1==i?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],a=t.get(c)||[];a.push(d),t.set(c,a)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t],s=Array.isArray(r)?r.map(M):[M(r)];this.map.set(t,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const s=e[r];Array.isArray(s)?s.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new x({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(M(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const s=r.indexOf(M(e.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class ye{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function U(o){return typeof ArrayBuffer<"u"&&o instanceof ArrayBuffer}function L(o){return typeof Blob<"u"&&o instanceof Blob}function X(o){return typeof FormData<"u"&&o instanceof FormData}class _{constructor(e,t,r,s){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function ve(o){switch(o){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new C),this.context||(this.context=new ye),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=t;else{const d=t.indexOf("?");this.urlWithParams=t+(-1===d?"?":d<t.length-1?"&":"")+c}}else this.params=new x,this.urlWithParams=t}serializeBody(){return null===this.body?null:U(this.body)||L(this.body)||X(this.body)||function Ce(o){return typeof URLSearchParams<"u"&&o instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof x?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||X(this.body)?null:L(this.body)?this.body.type||null:U(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof x?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var t;const r=e.method||this.method,s=e.url||this.url,i=e.responseType||this.responseType,c=void 0!==e.body?e.body:this.body,d=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let m=e.headers||this.headers,E=e.params||this.params;const O=null!==(t=e.context)&&void 0!==t?t:this.context;return void 0!==e.setHeaders&&(m=Object.keys(e.setHeaders).reduce((b,l)=>b.set(l,e.setHeaders[l]),m)),e.setParams&&(E=Object.keys(e.setParams).reduce((b,l)=>b.set(l,e.setParams[l]),E)),new _(r,s,c,{params:E,headers:m,context:O,reportProgress:a,responseType:i,withCredentials:d})}}var h=(()=>((h=h||{})[h.Sent=0]="Sent",h[h.UploadProgress=1]="UploadProgress",h[h.ResponseHeader=2]="ResponseHeader",h[h.DownloadProgress=3]="DownloadProgress",h[h.Response=4]="Response",h[h.User=5]="User",h))();class R{constructor(e,t=200,r="OK"){this.headers=e.headers||new C,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class S extends R{constructor(e={}){super(e),this.type=h.ResponseHeader}clone(e={}){return new S({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class I extends R{constructor(e={}){super(e),this.type=h.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new I({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class z extends R{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function k(o,e){return{body:e,headers:o.headers,context:o.context,observe:o.observe,params:o.params,reportProgress:o.reportProgress,responseType:o.responseType,withCredentials:o.withCredentials}}let q=(()=>{class o{constructor(t){this.handler=t}request(t,r,s={}){let i;if(t instanceof _)i=t;else{let a,m;a=s.headers instanceof C?s.headers:new C(s.headers),s.params&&(m=s.params instanceof x?s.params:new x({fromObject:s.params})),i=new _(t,r,void 0!==s.body?s.body:null,{headers:a,context:s.context,params:m,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const c=(0,le.of)(i).pipe((0,de.b)(a=>this.handler.handle(a)));if(t instanceof _||"events"===s.observe)return c;const d=c.pipe((0,ue.h)(a=>a instanceof I));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe((0,j.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return d.pipe((0,j.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return d.pipe((0,j.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return d.pipe((0,j.U)(a=>a.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new x).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,k(s,r))}post(t,r,s={}){return this.request("POST",t,k(s,r))}put(t,r,s={}){return this.request("PUT",t,k(s,r))}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(H))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();function B(o,e){return e(o)}function be(o,e){return(t,r)=>e.intercept(t,{handle:s=>o(s,r)})}const Ee=new n.OlP("HTTP_INTERCEPTORS"),T=new n.OlP("HTTP_INTERCEPTOR_FNS");function Pe(){let o=null;return(e,t)=>{var r;return null===o&&(o=(null!==(r=(0,n.f3M)(Ee,{optional:!0}))&&void 0!==r?r:[]).reduceRight(be,B)),o(e,t)}}let K=(()=>{class o extends H{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null}handle(t){if(null===this.chain){const r=Array.from(new Set(this.injector.get(T)));this.chain=r.reduceRight((s,i)=>function xe(o,e,t){return(r,s)=>t.runInContext(()=>e(r,i=>o(i,s)))}(s,i,this.injector),B)}return this.chain(t,r=>this.backend.handle(r))}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(N),n.LFG(n.lqb))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();const Oe=/^\)\]\}',?\n/;let V=(()=>{class o{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new pe.y(r=>{const s=this.xhrFactory.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((l,f)=>s.setRequestHeader(l,f.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const l=t.detectContentTypeHeader();null!==l&&s.setRequestHeader("Content-Type",l)}if(t.responseType){const l=t.responseType.toLowerCase();s.responseType="json"!==l?l:"text"}const i=t.serializeBody();let c=null;const d=()=>{if(null!==c)return c;const l=s.statusText||"OK",f=new C(s.getAllResponseHeaders()),w=function je(o){return"responseURL"in o&&o.responseURL?o.responseURL:/^X-Request-URL:/m.test(o.getAllResponseHeaders())?o.getResponseHeader("X-Request-URL"):null}(s)||t.url;return c=new S({headers:f,status:s.status,statusText:l,url:w}),c},a=()=>{let{headers:l,status:f,statusText:w,url:ee}=d(),g=null;204!==f&&(g=typeof s.response>"u"?s.responseText:s.response),0===f&&(f=g?200:0);let F=f>=200&&f<300;if("json"===t.responseType&&"string"==typeof g){const Be=g;g=g.replace(Oe,"");try{g=""!==g?JSON.parse(g):null}catch(Ke){g=Be,F&&(F=!1,g={error:Ke,text:g})}}F?(r.next(new I({body:g,headers:l,status:f,statusText:w,url:ee||void 0})),r.complete()):r.error(new z({error:g,headers:l,status:f,statusText:w,url:ee||void 0}))},m=l=>{const{url:f}=d(),w=new z({error:l,status:s.status||0,statusText:s.statusText||"Unknown Error",url:f||void 0});r.error(w)};let E=!1;const O=l=>{E||(r.next(d()),E=!0);let f={type:h.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(f.total=l.total),"text"===t.responseType&&s.responseText&&(f.partialText=s.responseText),r.next(f)},b=l=>{let f={type:h.UploadProgress,loaded:l.loaded};l.lengthComputable&&(f.total=l.total),r.next(f)};return s.addEventListener("load",a),s.addEventListener("error",m),s.addEventListener("timeout",m),s.addEventListener("abort",m),t.reportProgress&&(s.addEventListener("progress",O),null!==i&&s.upload&&s.upload.addEventListener("progress",b)),s.send(i),r.next({type:h.Sent}),()=>{s.removeEventListener("error",m),s.removeEventListener("abort",m),s.removeEventListener("load",a),s.removeEventListener("timeout",m),t.reportProgress&&(s.removeEventListener("progress",O),null!==i&&s.upload&&s.upload.removeEventListener("progress",b)),s.readyState!==s.DONE&&s.abort()}})}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(v.JF))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();const A=new n.OlP("XSRF_ENABLED"),Y=new n.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),$=new n.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class Q{}let Ie=(()=>{class o{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,v.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(v.K0),n.LFG(n.Lbi),n.LFG(Y))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();function Ne(o,e){const t=o.url.toLowerCase();if(!(0,n.f3M)(A)||"GET"===o.method||"HEAD"===o.method||t.startsWith("http://")||t.startsWith("https://"))return e(o);const r=(0,n.f3M)(Q).getToken(),s=(0,n.f3M)($);return null!=r&&!o.headers.has(s)&&(o=o.clone({headers:o.headers.set(s,r)})),e(o)}var u=(()=>((u=u||{})[u.Interceptors=0]="Interceptors",u[u.LegacyInterceptors=1]="LegacyInterceptors",u[u.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",u[u.NoXsrfProtection=3]="NoXsrfProtection",u[u.JsonpSupport=4]="JsonpSupport",u[u.RequestsMadeViaParent=5]="RequestsMadeViaParent",u))();function P(o,e){return{\u0275kind:o,\u0275providers:e}}function Re(...o){const e=[q,V,K,{provide:H,useExisting:K},{provide:N,useExisting:V},{provide:T,useValue:Ne,multi:!0},{provide:A,useValue:!0},{provide:Q,useClass:Ie}];for(const t of o)e.push(...t.\u0275providers);return(0,n.MR2)(e)}const W=new n.OlP("LEGACY_INTERCEPTOR_FN");let ke=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[Re(P(u.LegacyInterceptors,[{provide:W,useFactory:Pe},{provide:T,useExisting:W,multi:!0}]))]}),o})();var Ae=y(6805);let De=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["experience"]],standalone:!0,features:[n.jDz],decls:3,vars:0,consts:[[1,"container"]],template:function(t,r){1&t&&(n.TgZ(0,"section",0)(1,"h1"),n._uU(2,"Experience"),n.qZA()())},styles:[".container[_ngcontent-%COMP%]{justify-content:start}"]}),o})(),Je=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["contact"]],standalone:!0,features:[n.jDz],decls:3,vars:0,consts:[[1,"container"]],template:function(t,r){1&t&&(n.TgZ(0,"section",0)(1,"h1"),n._uU(2,"Contact"),n.qZA()())},styles:[".container[_ngcontent-%COMP%]{justify-content:start}"]}),o})();function Ze(o,e){1&o&&n._UZ(0,"project-image",29),2&o&&n.Q6J("image",e.$implicit.image)}function Ue(o,e){if(1&o&&(n.TgZ(0,"div",27),n.YNc(1,Ze,1,1,"project-image",28),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.projects)}}function Le(o,e){1&o&&n._UZ(0,"project-info",32),2&o&&n.Q6J("project",e.$implicit)}function Xe(o,e){if(1&o&&(n.TgZ(0,"div",30),n.YNc(1,Le,1,1,"project-info",31),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.projects)}}const ze=function(){return["/"]};let qe=(()=>{class o{constructor(t){this.http=t,this.lineHeight=1300,this.offset=1100,this.lineInitialPosition=document.documentElement.clientHeight/2+100}ngOnInit(){this.importProjectsJson()}importProjectsJson(){var t=this;return(0,te.Z)(function*(){t.projects=yield function Fe(o,e){const t="object"==typeof e;return new Promise((r,s)=>{let c,i=!1;o.subscribe({next:d=>{c=d,i=!0},error:s,complete:()=>{i?r(c):t?r(e.defaultValue):s(new Ae.K)}})})}(t.http.get("assets/projects.json")),console.log(t.projects)})()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(q))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-home"]],standalone:!0,features:[n.jDz],decls:64,vars:8,consts:[[3,"scrollEvents","fullscreen","ionScroll"],["side","end","contentId","main-content",1,"mobile-header","ion-no-border"],["mode","md"],["slot","end"],[1,"ion-padding"],["id","main-content",1,"ion-page"],["slot","start"],["src","../../assets/icon/favicon.png",2,"width","25px"],["mode","md",1,"default-header","ion-no-border"],[3,"routerLink"],[1,"container"],["id","main-text"],[1,"big-heading"],[1,"arrow","bounce"],["name","chevron-down","size","large"],["id","projects"],["id","left-projects","class","flex-center-column project-column",4,"ngIf"],[3,"maxHeight","offset"],["scrollLine",""],["id","right-projects","class","flex-center-column project-column",4,"ngIf"],["collapse","fade"],["id","links"],["target","_blank","href","https://github.com/byMagg/"],["name","logo-github"],["target","_blank","href","https://www.linkedin.com/in/daniel-barroso-urrutia/"],["name","logo-linkedin"],[1,"line"],["id","left-projects",1,"flex-center-column","project-column"],[3,"image",4,"ngFor","ngForOf"],[3,"image"],["id","right-projects",1,"flex-center-column","project-column"],[3,"project",4,"ngFor","ngForOf"],[3,"project"]],template:function(t,r){if(1&t){const s=n.EpF();n.TgZ(0,"ion-content",0),n.NdJ("ionScroll",function(c){n.CHM(s);const d=n.MAs(51);return n.KtG(d.onScroll(c))}),n.TgZ(1,"ion-menu",1)(2,"ion-header",2)(3,"ion-toolbar")(4,"ion-buttons",3)(5,"ion-button"),n._uU(6,"CERRAR"),n.qZA()()()(),n.TgZ(7,"ion-content",4)(8,"div")(9,"a"),n._uU(10," 1. About "),n.qZA(),n.TgZ(11,"a"),n._uU(12," 2. Experience "),n.qZA(),n.TgZ(13,"a"),n._uU(14," 3. Contact "),n.qZA()()()(),n.TgZ(15,"div",5)(16,"ion-header",2)(17,"ion-toolbar")(18,"ion-buttons",6)(19,"ion-button"),n._UZ(20,"ion-img",7),n.qZA()(),n.TgZ(21,"ion-buttons",3),n._UZ(22,"ion-menu-button"),n.qZA()()()(),n.TgZ(23,"ion-header",8)(24,"ion-toolbar")(25,"ion-buttons",6)(26,"ion-button",9),n._UZ(27,"ion-img",7),n.qZA()(),n.TgZ(28,"ion-buttons",3)(29,"a"),n._uU(30," 01. About "),n.qZA(),n.TgZ(31,"a"),n._uU(32," 02. Experience "),n.qZA(),n.TgZ(33,"a"),n._uU(34," 03. Contact "),n.qZA()()()(),n.TgZ(35,"div",10)(36,"div",11)(37,"h3"),n._uU(38,"Hi, my name is"),n.qZA(),n.TgZ(39,"h1",12),n._uU(40,"Daniel Barroso."),n.qZA(),n.TgZ(41,"h2"),n._uU(42,"Computer Engineer."),n.qZA(),n.TgZ(43,"p"),n._uU(44,"I've always been passionate about Computer Science, experience as a Web Developer. Developed a Multiplatform App based on Flutter dedicated to visualize cryptocurrency markets for my Final Degree Project. I've got advanced knowledgement in Linux and Docker microservices. Focused in developing my career as a Full Stack Developer and DevOps, due to I consider my self as a person that has knowledge in many fields in Computer Systems and Infraestructure. "),n.qZA()(),n.TgZ(45,"div",13),n._UZ(46,"ion-icon",14),n.qZA()(),n._UZ(47,"experience"),n.TgZ(48,"div",15),n.YNc(49,Ue,2,1,"div",16),n._UZ(50,"scroll-line",17,18),n.YNc(52,Xe,2,1,"div",19),n.qZA(),n._UZ(53,"contact"),n.TgZ(54,"ion-footer",20)(55,"ion-toolbar")(56,"ion-title"),n._uU(57,"Footer"),n.qZA()()()(),n.TgZ(58,"div",21)(59,"a",22),n._UZ(60,"ion-icon",23),n.qZA(),n.TgZ(61,"a",24),n._UZ(62,"ion-icon",25),n.qZA(),n._UZ(63,"div",26),n.qZA()}2&t&&(n.Q6J("scrollEvents",!0)("fullscreen",!0),n.xp6(26),n.Q6J("routerLink",n.DdM(7,ze)),n.xp6(23),n.Q6J("ngIf",r.projects),n.xp6(1),n.Q6J("maxHeight",r.lineHeight)("offset",r.offset),n.xp6(2),n.Q6J("ngIf",r.projects))},dependencies:[p.Pc,p.YG,p.Sm,p.W2,p.fr,p.Gu,p.gu,p.Xz,p.z0,p.fG,p.wd,p.sr,p.YI,ne,J.Bz,J.rH,oe,ce,ke,v.ez,v.sg,v.O5,De,Je],styles:[".flex-center-column{display:flex;flex-direction:column;align-items:center}.project-column{margin-top:100px;gap:200px}.project-column ion-card{background-color:var(--background-light-color)}ion-header{position:absolute}ion-header ion-buttons{display:flex;margin:0 40px;gap:20px}#main-text{width:62%}#links{position:absolute;bottom:0;display:flex;flex-direction:column;align-items:center;gap:40px;margin:0 40px}.line{height:100px;background-color:var(--primary-color);width:1px}#projects{display:grid;grid-template-columns:45% 10% 45%;margin:0 75px}#left-projects,#right-projects{margin-top:200px}#left-projects{align-items:end}#right-projects{align-items:start}.arrow{position:absolute;bottom:0;margin:20px;color:var(--primary-color)}.bounce{animation:bounce 5s 4}#main-content{display:none}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@media (max-width: 768px){#main-text{width:75%}#main-content{position:absolute;z-index:11;display:block;height:50px}#links{margin:0 15px}ion-menu>ion-content>div{display:flex;flex-direction:column;margin-top:100px;align-items:center;gap:20px}.default-header{display:none}#container p{width:100%}}\n"],encapsulation:2}),o})()}}]);