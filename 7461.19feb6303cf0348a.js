"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7461],{7461:(Ze,D,y)=>{y.r(D),y.d(D,{HomePage:()=>Je});var te=y(5861),d=y(9032),n=y(8256);let ne=(()=>{class r{constructor(){this.maxHeight=500,this.height=0,this.className="up-relative"}onScroll(t){const o=document.documentElement.clientHeight/2+100;this.height=(t.detail.currentY-o)/this.maxHeight,this.height>=0&&this.height<=1?this.className="fixed":this.height<0?(this.height=0,this.className="up-relative"):this.height>1&&(this.height=1,this.className="down-relative")}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["scroll-line"]],inputs:{maxHeight:"maxHeight"},standalone:!0,features:[n.jDz],decls:6,vars:3,consts:[[1,"container"],[3,"className"],[1,"line"],["svgLine",""],["src","../../assets/user.jpeg"],[1,"dotted-line"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"div",2,3)(4,"img",4)(5,"div",5),n.qZA()()),2&t&&(n.xp6(1),n.Q6J("className",o.className),n.xp6(1),n.Udp("transform","scaleY("+o.height+")"))},dependencies:[d.Pc],styles:["[_nghost-%COMP%]{--line-height: 1300px}.line[_ngcontent-%COMP%]{height:var(--line-height);background-color:var(--primary-color);width:4px;margin:0 auto;transform-origin:bottom}.up-relative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;bottom:0}.fixed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:fixed;bottom:50%}.down-relative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;bottom:0}.up-relative[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:fixed;bottom:0}.fixed[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:fixed;bottom:50%}.down-relative[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;bottom:0}img[_ngcontent-%COMP%]{position:absolute;color:#fff;width:100px;height:100px;border-radius:50%;padding:4px;border:4px solid var(--primary-color);bottom:50%}.container[_ngcontent-%COMP%]{position:relative;margin:0 auto;display:flex;flex-direction:column;align-items:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;flex-direction:column}.dotted-line[_ngcontent-%COMP%]{height:var(--line-height)}.dotted-line[_ngcontent-%COMP%]:after{background:repeating-linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.5) 1px,rgba(255,255,255,0) 1px,rgba(255,255,255,0) 2px)}"]}),r})();var J=y(7551);let re=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["project-image"]],inputs:{image:"image"},standalone:!0,features:[n.jDz],decls:3,vars:1,consts:[[1,"project-item"],[3,"src"]],template:function(t,o){1&t&&(n.TgZ(0,"section")(1,"ion-card",0),n._UZ(2,"img",1),n.qZA()()),2&t&&(n.xp6(2),n.Q6J("src",o.image,n.LSH))},dependencies:[d.Pc,d.PM],styles:["section[_ngcontent-%COMP%]{height:300px;display:flex;justify-content:center;align-items:center}.project-item[_ngcontent-%COMP%]{aspect-ratio:16/9;height:100%}img[_ngcontent-%COMP%]{width:100%;height:100%}"]}),r})();var x=y(6895);function oe(r,e){if(1&r&&(n.TgZ(0,"ion-chip"),n._UZ(1,"ion-icon",4),n.TgZ(2,"ion-label"),n._uU(3),n.qZA()()),2&r){const t=e.$implicit;n.xp6(1),n.Q6J("name",t),n.xp6(2),n.Oqu(t)}}function se(r,e){if(1&r&&(n.TgZ(0,"ion-card",1)(1,"ion-card-header")(2,"ion-card-title"),n._uU(3),n.qZA(),n.TgZ(4,"ion-card-subtitle"),n._uU(5),n.qZA()(),n.TgZ(6,"ion-card-content"),n._uU(7),n.TgZ(8,"div",2),n.YNc(9,oe,4,2,"ion-chip",3),n.qZA()()()),2&r){const t=n.oxw();n.xp6(3),n.Oqu(t.project.name),n.xp6(2),n.Oqu(t.project.year),n.xp6(2),n.hij(" ",t.project.description," "),n.xp6(2),n.Q6J("ngForOf",t.project.frameworks)}}let ie=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["project-info"]],inputs:{project:"project"},standalone:!0,features:[n.jDz],decls:2,vars:1,consts:[["class","project-item",4,"ngIf"],[1,"project-item"],[1,"frameworks"],[4,"ngFor","ngForOf"],[3,"name"]],template:function(t,o){1&t&&(n.TgZ(0,"section"),n.YNc(1,se,10,4,"ion-card",0),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",o.project))},dependencies:[d.Pc,d.PM,d.FN,d.Zi,d.tO,d.Dq,d.hM,d.gu,d.Q$,x.ez,x.sg,x.O5],styles:["section[_ngcontent-%COMP%]{height:300px;display:flex;justify-content:center;align-items:center}.project-item[_ngcontent-%COMP%]{aspect-ratio:16/9;height:100%}ion-card-title[_ngcontent-%COMP%]{color:var(--primary-color)}ion-card-subtitle[_ngcontent-%COMP%]{color:#fff}ion-chip[_ngcontent-%COMP%]{color:var(--primary-color)}ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--primary-color)}"]}),r})();var ae=y(9646),ce=y(9751),le=y(4351),de=y(9300),H=y(4004);class M{}class N{}class v{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const o=t.indexOf(":");if(o>0){const s=t.slice(0,o),i=s.toLowerCase(),c=t.slice(o+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(c):this.headers.set(i,[c])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let o=e[t];const s=t.toLowerCase();"string"==typeof o&&(o=[o]),o.length>0&&(this.headers.set(s,o),this.maybeSetNormalizedName(t,s))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new v;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let o=e.value;if("string"==typeof o&&(o=[o]),0===o.length)return;this.maybeSetNormalizedName(e.name,t);const s=("a"===e.op?this.headers.get(t):void 0)||[];s.push(...o),this.headers.set(t,s);break;case"d":const i=e.value;if(i){let c=this.headers.get(t);if(!c)return;c=c.filter(p=>-1===i.indexOf(p)),0===c.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,c)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class pe{encodeKey(e){return L(e)}encodeValue(e){return L(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const he=/%(\d[a-f0-9])/gi,fe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function L(r){return encodeURIComponent(r).replace(he,(e,t)=>{var o;return null!==(o=fe[t])&&void 0!==o?o:e})}function _(r){return`${r}`}class C{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new pe,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ue(r,e){const t=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[c,p]=-1==i?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],a=t.get(c)||[];a.push(p),t.set(c,a)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const o=e.fromObject[t],s=Array.isArray(o)?o.map(_):[_(o)];this.map.set(t,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(o=>{const s=e[o];Array.isArray(s)?s.forEach(i=>{t.push({param:o,value:i,op:"a"})}):t.push({param:o,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(o=>t+"="+this.encoder.encodeValue(o)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new C({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(_(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let o=this.map.get(e.param)||[];const s=o.indexOf(_(e.value));-1!==s&&o.splice(s,1),o.length>0?this.map.set(e.param,o):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class me{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function U(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function Z(r){return typeof Blob<"u"&&r instanceof Blob}function X(r){return typeof FormData<"u"&&r instanceof FormData}class T{constructor(e,t,o,s){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function ge(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==o?o:null,i=s):i=o,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new v),this.context||(this.context=new me),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=t;else{const p=t.indexOf("?");this.urlWithParams=t+(-1===p?"?":p<t.length-1?"&":"")+c}}else this.params=new C,this.urlWithParams=t}serializeBody(){return null===this.body?null:U(this.body)||Z(this.body)||X(this.body)||function ye(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof C?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||X(this.body)?null:Z(this.body)?this.body.type||null:U(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof C?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var t;const o=e.method||this.method,s=e.url||this.url,i=e.responseType||this.responseType,c=void 0!==e.body?e.body:this.body,p=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let m=e.headers||this.headers,E=e.params||this.params;const j=null!==(t=e.context)&&void 0!==t?t:this.context;return void 0!==e.setHeaders&&(m=Object.keys(e.setHeaders).reduce((b,l)=>b.set(l,e.setHeaders[l]),m)),e.setParams&&(E=Object.keys(e.setParams).reduce((b,l)=>b.set(l,e.setParams[l]),E)),new T(o,s,c,{params:E,headers:m,context:j,reportProgress:a,responseType:i,withCredentials:p})}}var h=(()=>((h=h||{})[h.Sent=0]="Sent",h[h.UploadProgress=1]="UploadProgress",h[h.ResponseHeader=2]="ResponseHeader",h[h.DownloadProgress=3]="DownloadProgress",h[h.Response=4]="Response",h[h.User=5]="User",h))();class I{constructor(e,t=200,o="OK"){this.headers=e.headers||new v,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||o,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class S extends I{constructor(e={}){super(e),this.type=h.ResponseHeader}clone(e={}){return new S({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class R extends I{constructor(e={}){super(e),this.type=h.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new R({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class z extends I{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function A(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials}}let B=(()=>{class r{constructor(t){this.handler=t}request(t,o,s={}){let i;if(t instanceof T)i=t;else{let a,m;a=s.headers instanceof v?s.headers:new v(s.headers),s.params&&(m=s.params instanceof C?s.params:new C({fromObject:s.params})),i=new T(t,o,void 0!==s.body?s.body:null,{headers:a,context:s.context,params:m,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const c=(0,ae.of)(i).pipe((0,le.b)(a=>this.handler.handle(a)));if(t instanceof T||"events"===s.observe)return c;const p=c.pipe((0,de.h)(a=>a instanceof R));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return p.pipe((0,H.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return p.pipe((0,H.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return p.pipe((0,H.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return p.pipe((0,H.U)(a=>a.body))}case"response":return p;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,o={}){return this.request("DELETE",t,o)}get(t,o={}){return this.request("GET",t,o)}head(t,o={}){return this.request("HEAD",t,o)}jsonp(t,o){return this.request("JSONP",t,{params:(new C).append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,o={}){return this.request("OPTIONS",t,o)}patch(t,o,s={}){return this.request("PATCH",t,A(s,o))}post(t,o,s={}){return this.request("POST",t,A(s,o))}put(t,o,s={}){return this.request("PUT",t,A(s,o))}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(M))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})();function q(r,e){return e(r)}function ve(r,e){return(t,o)=>e.intercept(t,{handle:s=>r(s,o)})}const xe=new n.OlP("HTTP_INTERCEPTORS"),O=new n.OlP("HTTP_INTERCEPTOR_FNS");function Ce(){let r=null;return(e,t)=>{var o;return null===r&&(r=(null!==(o=(0,n.f3M)(xe,{optional:!0}))&&void 0!==o?o:[]).reduceRight(ve,q)),r(e,t)}}let K=(()=>{class r extends M{constructor(t,o){super(),this.backend=t,this.injector=o,this.chain=null}handle(t){if(null===this.chain){const o=Array.from(new Set(this.injector.get(O)));this.chain=o.reduceRight((s,i)=>function be(r,e,t){return(o,s)=>t.runInContext(()=>e(o,i=>r(i,s)))}(s,i,this.injector),q)}return this.chain(t,o=>this.backend.handle(o))}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(N),n.LFG(n.lqb))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})();const Te=/^\)\]\}',?\n/;let V=(()=>{class r{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ce.y(o=>{const s=this.xhrFactory.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((l,f)=>s.setRequestHeader(l,f.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const l=t.detectContentTypeHeader();null!==l&&s.setRequestHeader("Content-Type",l)}if(t.responseType){const l=t.responseType.toLowerCase();s.responseType="json"!==l?l:"text"}const i=t.serializeBody();let c=null;const p=()=>{if(null!==c)return c;const l=s.statusText||"OK",f=new v(s.getAllResponseHeaders()),P=function Oe(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}(s)||t.url;return c=new S({headers:f,status:s.status,statusText:l,url:P}),c},a=()=>{let{headers:l,status:f,statusText:P,url:ee}=p(),g=null;204!==f&&(g=typeof s.response>"u"?s.responseText:s.response),0===f&&(f=g?200:0);let F=f>=200&&f<300;if("json"===t.responseType&&"string"==typeof g){const Le=g;g=g.replace(Te,"");try{g=""!==g?JSON.parse(g):null}catch(Ue){g=Le,F&&(F=!1,g={error:Ue,text:g})}}F?(o.next(new R({body:g,headers:l,status:f,statusText:P,url:ee||void 0})),o.complete()):o.error(new z({error:g,headers:l,status:f,statusText:P,url:ee||void 0}))},m=l=>{const{url:f}=p(),P=new z({error:l,status:s.status||0,statusText:s.statusText||"Unknown Error",url:f||void 0});o.error(P)};let E=!1;const j=l=>{E||(o.next(p()),E=!0);let f={type:h.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(f.total=l.total),"text"===t.responseType&&s.responseText&&(f.partialText=s.responseText),o.next(f)},b=l=>{let f={type:h.UploadProgress,loaded:l.loaded};l.lengthComputable&&(f.total=l.total),o.next(f)};return s.addEventListener("load",a),s.addEventListener("error",m),s.addEventListener("timeout",m),s.addEventListener("abort",m),t.reportProgress&&(s.addEventListener("progress",j),null!==i&&s.upload&&s.upload.addEventListener("progress",b)),s.send(i),o.next({type:h.Sent}),()=>{s.removeEventListener("error",m),s.removeEventListener("abort",m),s.removeEventListener("load",a),s.removeEventListener("timeout",m),t.reportProgress&&(s.removeEventListener("progress",j),null!==i&&s.upload&&s.upload.removeEventListener("progress",b)),s.readyState!==s.DONE&&s.abort()}})}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(x.JF))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})();const k=new n.OlP("XSRF_ENABLED"),Y=new n.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),$=new n.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class Q{}let Me=(()=>{class r{constructor(t,o,s){this.doc=t,this.platform=o,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,x.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(x.K0),n.LFG(n.Lbi),n.LFG(Y))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})();function _e(r,e){const t=r.url.toLowerCase();if(!(0,n.f3M)(k)||"GET"===r.method||"HEAD"===r.method||t.startsWith("http://")||t.startsWith("https://"))return e(r);const o=(0,n.f3M)(Q).getToken(),s=(0,n.f3M)($);return null!=o&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,o)})),e(r)}var u=(()=>((u=u||{})[u.Interceptors=0]="Interceptors",u[u.LegacyInterceptors=1]="LegacyInterceptors",u[u.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",u[u.NoXsrfProtection=3]="NoXsrfProtection",u[u.JsonpSupport=4]="JsonpSupport",u[u.RequestsMadeViaParent=5]="RequestsMadeViaParent",u))();function w(r,e){return{\u0275kind:r,\u0275providers:e}}function Re(...r){const e=[B,V,K,{provide:M,useExisting:K},{provide:N,useExisting:V},{provide:O,useValue:_e,multi:!0},{provide:k,useValue:!0},{provide:Q,useClass:Me}];for(const t of r)e.push(...t.\u0275providers);return(0,n.MR2)(e)}const W=new n.OlP("LEGACY_INTERCEPTOR_FN");let Ie=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({providers:[Re(w(u.LegacyInterceptors,[{provide:W,useFactory:Ce},{provide:O,useExisting:W,multi:!0}]))]}),r})();var Se=y(6805);function ke(r,e){if(1&r&&(n.TgZ(0,"div",28),n._UZ(1,"project-image",29)(2,"project-info",30)(3,"project-image",29),n.qZA()),2&r){const t=n.oxw();n.xp6(1),n.Q6J("image",t.projects[0].image),n.xp6(1),n.Q6J("project",t.projects[0]),n.xp6(1),n.Q6J("image",t.projects[0].image)}}function Fe(r,e){if(1&r&&(n.TgZ(0,"div",31),n._UZ(1,"project-info",30)(2,"project-image",29)(3,"project-info",30),n.qZA()),2&r){const t=n.oxw();n.xp6(1),n.Q6J("project",t.projects[0]),n.xp6(1),n.Q6J("image",t.projects[0].image),n.xp6(1),n.Q6J("project",t.projects[0])}}const De=function(){return["/"]};let Je=(()=>{class r{constructor(t){this.http=t,this.lineHeight=1300,this.lineInitialPosition=document.documentElement.clientHeight/2+100}ngOnInit(){this.importProjectsJson()}importProjectsJson(){var t=this;return(0,te.Z)(function*(){t.projects=yield function Ae(r,e){const t="object"==typeof e;return new Promise((o,s)=>{let c,i=!1;r.subscribe({next:p=>{c=p,i=!0},error:s,complete:()=>{i?o(c):t?o(e.defaultValue):s(new Se.K)}})})}(t.http.get("assets/projects.json")),console.log(t.projects)})()}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(B))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-home"]],standalone:!0,features:[n.jDz],decls:63,vars:7,consts:[[3,"scrollEvents","fullscreen","ionScroll"],["side","end","contentId","main-content",1,"mobile-header","ion-no-border"],["mode","md"],["slot","end"],[1,"ion-padding"],["id","main-content",1,"ion-page"],["slot","start"],["src","../../assets/icon/favicon.png",2,"width","25px"],["mode","md",1,"default-header","ion-no-border"],[3,"routerLink"],["id","container"],["id","main-text"],[1,"big-heading"],[1,"arrow","bounce"],["name","chevron-down","size","large"],["id","projects"],["id","left-projects","class","flex-center-column project-column",4,"ngIf"],[3,"maxHeight"],["scrollLine",""],["id","right-projects","class","flex-center-column project-column",4,"ngIf"],[2,"height","1000px"],["collapse","fade"],["id","links"],["target","_blank","href","https://github.com/byMagg/"],["name","logo-github"],["target","_blank","href","https://www.linkedin.com/in/daniel-barroso-urrutia/"],["name","logo-linkedin"],[1,"line"],["id","left-projects",1,"flex-center-column","project-column"],[3,"image"],[3,"project"],["id","right-projects",1,"flex-center-column","project-column"]],template:function(t,o){if(1&t){const s=n.EpF();n.TgZ(0,"ion-content",0),n.NdJ("ionScroll",function(c){n.CHM(s);const p=n.MAs(50);return n.KtG(p.onScroll(c))}),n.TgZ(1,"ion-menu",1)(2,"ion-header",2)(3,"ion-toolbar")(4,"ion-buttons",3)(5,"ion-button"),n._uU(6,"CERRAR"),n.qZA()()()(),n.TgZ(7,"ion-content",4)(8,"div")(9,"a"),n._uU(10," 1. About "),n.qZA(),n.TgZ(11,"a"),n._uU(12," 2. Experience "),n.qZA(),n.TgZ(13,"a"),n._uU(14," 3. Contact "),n.qZA()()()(),n.TgZ(15,"div",5)(16,"ion-header",2)(17,"ion-toolbar")(18,"ion-buttons",6)(19,"ion-button"),n._UZ(20,"ion-img",7),n.qZA()(),n.TgZ(21,"ion-buttons",3),n._UZ(22,"ion-menu-button"),n.qZA()()()(),n.TgZ(23,"ion-header",8)(24,"ion-toolbar")(25,"ion-buttons",6)(26,"ion-button",9),n._UZ(27,"ion-img",7),n.qZA()(),n.TgZ(28,"ion-buttons",3)(29,"a"),n._uU(30," 01. About "),n.qZA(),n.TgZ(31,"a"),n._uU(32," 02. Experience "),n.qZA(),n.TgZ(33,"a"),n._uU(34," 03. Contact "),n.qZA()()()(),n.TgZ(35,"div",10)(36,"div",11)(37,"h1"),n._uU(38,"Hi, my name is"),n.qZA(),n.TgZ(39,"h2",12),n._uU(40,"Daniel Barroso."),n.qZA(),n.TgZ(41,"h3"),n._uU(42,"Computer Engineer."),n.qZA(),n.TgZ(43,"p"),n._uU(44,"I've always been passionate about Computer Science, experience as a Web Developer. Developed a Multiplatform App based on Flutter dedicated to visualize cryptocurrency markets for my Final Degree Project. I've got advanced knowledgement in Linux and Docker microservices. Focused in developing my career as a Full Stack Developer and DevOps, due to I consider my self as a person that has knowledge in many fields in Computer Systems and Infraestructure. "),n.qZA()(),n.TgZ(45,"div",13),n._UZ(46,"ion-icon",14),n.qZA()(),n.TgZ(47,"div",15),n.YNc(48,ke,4,3,"div",16),n._UZ(49,"scroll-line",17,18),n.YNc(51,Fe,4,3,"div",19),n.qZA(),n._UZ(52,"div",20),n.TgZ(53,"ion-footer",21)(54,"ion-toolbar")(55,"ion-title"),n._uU(56,"Footer"),n.qZA()()()(),n.TgZ(57,"div",22)(58,"a",23),n._UZ(59,"ion-icon",24),n.qZA(),n.TgZ(60,"a",25),n._UZ(61,"ion-icon",26),n.qZA(),n._UZ(62,"div",27),n.qZA()}2&t&&(n.Q6J("scrollEvents",!0)("fullscreen",!0),n.xp6(26),n.Q6J("routerLink",n.DdM(6,De)),n.xp6(22),n.Q6J("ngIf",o.projects),n.xp6(1),n.Q6J("maxHeight",o.lineHeight),n.xp6(2),n.Q6J("ngIf",o.projects))},dependencies:[d.Pc,d.YG,d.Sm,d.W2,d.fr,d.Gu,d.gu,d.Xz,d.z0,d.fG,d.wd,d.sr,d.YI,ne,J.Bz,J.rH,re,ie,Ie,x.ez,x.O5],styles:["#container{max-height:100vh;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;color:#fff;width:100%;margin:0 auto}.flex-center-column{display:flex;flex-direction:column;align-items:center}.project-column{margin-top:100px;gap:200px}.project-column ion-card{background-color:var(--background-light-color)}ion-header{position:absolute}ion-header ion-buttons{display:flex;margin:0 40px;gap:20px}a{color:var(--primary-color)}a:hover{color:var(--ion-color-primary)}#main-text{width:50%}.big-heading{font-size:clamp(40px,8vw,80px)}#container h1{font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:400}#container h2{font-weight:700;margin-left:-6px;color:var(--primary-color)}#container h3{font-weight:500;font-size:clamp(40px,8vw,45px)}#container p{font-size:16px;line-height:22px;color:#8c8c8c;margin:0;width:70%}#links{position:absolute;bottom:0;display:flex;flex-direction:column;align-items:center;gap:40px;margin:0 40px}.line{height:100px;background-color:var(--primary-color);width:1px}#projects{display:grid;grid-template-columns:45% 10% 45%}.frameworks{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px}#left-projects,#right-projects{margin-top:200px}#left-projects{align-items:end}#right-projects{align-items:start}.arrow{position:absolute;bottom:0;margin:20px;color:var(--primary-color)}.bounce{animation:bounce 5s 4}#main-content{display:none}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@media (max-width: 768px){#main-text{width:75%}#main-content{position:absolute;z-index:11;display:block;height:50px}#links{margin:0 15px}ion-menu>ion-content>div{display:flex;flex-direction:column;margin-top:100px;align-items:center;gap:20px}.default-header{display:none}#container p{width:100%}}\n"],encapsulation:2}),r})()}}]);