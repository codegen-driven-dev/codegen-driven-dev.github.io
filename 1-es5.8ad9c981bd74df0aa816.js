!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(s,arguments,i)}else n=s.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,s=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return n}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{M9y9:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("fXoL"),o=n("tk/3"),s=function(){var e=function(){function e(t,n){c(this,e),this.elementRef=t,this.http=n}return h(e,[{key:"ngOnInit",value:function(){this.fetchAndInlineSvgContent(this.src)}},{key:"inlineSvgContent",value:function(e){if(this.elementRef.nativeElement.innerHTML=e,this.scaleToContainer){var t=this.elementRef.nativeElement.querySelector("svg");t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet")}}},{key:"fetchAndInlineSvgContent",value:function(e){var t,n=this,r=(t=e).slice(t.indexOf("assets/")-1);this.http.get(r,{responseType:"text"}).subscribe((function(e){n.inlineSvgContent(e)}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Gb(r.l),r.Gb(o.a))},e.\u0275cmp=r.Ab({type:e,selectors:[["app-svg-viewer"]],inputs:{src:"src",scaleToContainer:"scaleToContainer"},decls:1,vars:0,consts:[["aria-hidden","true",1,"docs-svg-viewer"]],template:function(e,t){1&e&&r.Hb(0,"span",0)},styles:[""]}),e}()},hXKo:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ofXK"),o=n("tk/3"),s=n("fXoL"),i=function(){var e=function e(){c(this,e)};return e.\u0275mod=s.Eb({type:e}),e.\u0275inj=s.Db({factory:function(t){return new(t||e)},imports:[[r.b,o.b]]}),e}()},kWWo:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("fXoL"),o=n("XiUz"),s=n("znSr"),i=n("tyNb"),a=["*"],u=function(){var e=function(){function e(){c(this,e)}return h(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ab({type:e,selectors:[["app-navbar"]],ngContentSelectors:a,decls:16,vars:0,consts:[["fxLayout","column",1,"hero"],["fxFlex","","fxLayout","row","ngStyle.gt-sm","padding-top: 20px","ngStyle.lt-md","padding-top: 0"],["fxFlex.gt-md","50","routerLink","/"],["src","/assets/cdd-logo.svg","alt","Compiler Driven Development","height","100px","ngStyle.lt-md","width: 95%",2,"width","100%"],["fxFlex.gt-md","50","fxHide.lt-md","","fxLayout","row","fxLayoutGap","20px",1,"center"],["href","#","fxFlex",""],["routerLink","/presentations","fxFlex",""],["fxFlex","","href","https://github.com/offscale"],["src","/assets/github-white.svg","alt","GitHub repos for Compiler Driven Development","height","50px"]],template:function(e,t){1&e&&(r.Xb(),r.Mb(0,"section",0),r.Mb(1,"div",1),r.Mb(2,"a",2),r.Hb(3,"img",3),r.Lb(),r.Mb(4,"nav",4),r.Mb(5,"a",5),r.ic(6,"about"),r.Lb(),r.Mb(7,"a",6),r.ic(8,"presentations"),r.Lb(),r.Mb(9,"a",5),r.ic(10,"docs"),r.Lb(),r.Mb(11,"a",5),r.ic(12,"download"),r.Lb(),r.Mb(13,"a",7),r.Hb(14,"img",8),r.Lb(),r.Lb(),r.Lb(),r.Wb(15,0,["fxFlex",""]),r.Lb())},directives:[o.d,o.b,s.b,i.c,s.a,o.e],styles:[".hero[_ngcontent-%COMP%]{background:#460665 url(/assets/bg.jpg);background-position:50%;background-repeat:no-repeat;background-size:cover;color:#fff;font-weight:700}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{color:#fff;text-decoration:none;font-weight:400;line-height:80px;font-size:20px}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{color:#fff}"]}),e}()},"tk/3":function(t,r,o){"use strict";o.d(r,"a",(function(){return R})),o.d(r,"b",(function(){return W}));var a=o("fXoL"),u=o("LRne"),l=o("HDdC"),f=o("bOdf"),d=o("pLZG"),p=o("lJxs"),y=o("ofXK"),v=function e(){c(this,e)},b=function e(){c(this,e)},m=function(){function e(t){var n=this;c(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){n.headers=new Map,t.split("\n").forEach((function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),o=r.toLowerCase(),s=e.slice(t+1).trim();n.maybeSetNormalizedName(r,o),n.headers.has(o)?n.headers.get(o).push(s):n.headers.set(o,[s])}}))}:function(){n.headers=new Map,Object.keys(t).forEach((function(e){var r=t[e],o=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(n.headers.set(o,r),n.maybeSetNormalizedName(e,o))}))}:this.headers=new Map}return h(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach((function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))}))}},{key:"clone",value:function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,i(n)),this.headers.set(t,r);break;case"d":var o=e.value;if(o){var s=this.headers.get(t);if(!s)return;0===(s=s.filter((function(e){return-1===o.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(n){return e(t.normalizedNames.get(n),t.headers.get(n))}))}}]),e}(),g=function(){function e(){c(this,e)}return h(e,[{key:"encodeKey",value:function(e){return w(e)}},{key:"encodeValue",value:function(e){return w(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function w(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var k=function(){function e(){var t,n,r,o=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(c(this,e),this.updates=null,this.cloneFrom=null,this.encoder=i.encoder||new g,i.fromString){if(i.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=i.fromString,n=this.encoder,r=new Map,t.length>0&&t.split("&").forEach((function(e){var t=e.indexOf("="),o=s(-1==t?[n.decodeKey(e),""]:[n.decodeKey(e.slice(0,t)),n.decodeValue(e.slice(t+1))],2),i=o[0],a=o[1],u=r.get(i)||[];u.push(a),r.set(i,u)})),r)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach((function(e){var t=i.fromObject[e];o.map.set(e,Array.isArray(t)?t:[t])}))):this.map=null}return h(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map((function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return n+"="+e.encoder.encodeValue(t)})).join("&")})).filter((function(e){return""!==e})).join("&")}},{key:"clone",value:function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],o=r.indexOf(t.value);-1!==o&&r.splice(o,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function x(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function T(e){return"undefined"!=typeof Blob&&e instanceof Blob}function C(e){return"undefined"!=typeof FormData&&e instanceof FormData}var O=function(){function e(t,n,r,o){var s;if(c(this,e),this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,s=o):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.params&&(this.params=s.params)),this.headers||(this.headers=new m),this.params){var i=this.params.toString();if(0===i.length)this.urlWithParams=n;else{var a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+i}}else this.params=new k,this.urlWithParams=n}return h(e,[{key:"serializeBody",value:function(){return null===this.body?null:x(this.body)||T(this.body)||C(this.body)||"string"==typeof this.body?this.body:this.body instanceof k?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||C(this.body)?null:T(this.body)?this.body.type||null:x(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof k?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,c=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((function(e,n){return e.set(n,t.setHeaders[n])}),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((function(e,n){return e.set(n,t.setParams[n])}),c)),new e(n,r,s,{params:c,headers:u,reportProgress:a,responseType:o,withCredentials:i})}}]),e}(),E=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),P=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";c(this,e),this.headers=t.headers||new m,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},S=function(t){e(o,t);var r=n(o);function o(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(this,o),(e=r.call(this,t)).type=E.ResponseHeader,e}return h(o,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new o({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),o}(P),j=function(t){e(o,t);var r=n(o);function o(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(this,o),(e=r.call(this,t)).type=E.Response,e.body=void 0!==t.body?t.body:null,e}return h(o,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new o({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),o}(P),A=function(t){e(o,t);var r=n(o);function o(e){var t;return c(this,o),(t=r.call(this,e,0,"Unknown Error")).name="HttpErrorResponse",t.ok=!1,t.message=t.status>=200&&t.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):"Http failure response for ".concat(e.url||"(unknown url)",": ").concat(e.status," ").concat(e.statusText),t.error=e.error||null,t}return o}(P);function L(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var R=function(){var e=function(){function e(t){c(this,e),this.handler=t}return h(e,[{key:"request",value:function(e,t){var n,r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof O)n=e;else{var s=void 0;s=o.headers instanceof m?o.headers:new m(o.headers);var i=void 0;o.params&&(i=o.params instanceof k?o.params:new k({fromObject:o.params})),n=new O(e,t,void 0!==o.body?o.body:null,{headers:s,params:i,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}var a=Object(u.a)(n).pipe(Object(f.a)((function(e){return r.handler.handle(e)})));if(e instanceof O||"events"===o.observe)return a;var c=a.pipe(Object(d.a)((function(e){return e instanceof j})));switch(o.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return c.pipe(Object(p.a)((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return c.pipe(Object(p.a)((function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return c.pipe(Object(p.a)((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));case"json":default:return c.pipe(Object(p.a)((function(e){return e.body})))}case"response":return c;default:throw new Error("Unreachable: unhandled observe type ".concat(o.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new k).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,L(n,t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,L(n,t))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,L(n,t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Pb(v))},e.\u0275prov=a.Cb({token:e,factory:e.\u0275fac}),e}(),N=function(){function e(t,n){c(this,e),this.next=t,this.interceptor=n}return h(e,[{key:"handle",value:function(e){return this.interceptor.intercept(e,this.next)}}]),e}(),z=new a.q("HTTP_INTERCEPTORS"),H=function(){var e=function(){function e(){c(this,e)}return h(e,[{key:"intercept",value:function(e,t){return t.handle(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Cb({token:e,factory:e.\u0275fac}),e}(),M=/^\)\]\}',?\n/,F=function e(){c(this,e)},U=function(){var e=function(){function e(){c(this,e)}return h(e,[{key:"build",value:function(){return new XMLHttpRequest}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Cb({token:e,factory:e.\u0275fac}),e}(),I=function(){var e=function(){function e(t){c(this,e),this.xhrFactory=t}return h(e,[{key:"handle",value:function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new l.a((function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((function(e,t){return r.setRequestHeader(e,t.join(","))})),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&r.setRequestHeader("Content-Type",o)}if(e.responseType){var s=e.responseType.toLowerCase();r.responseType="json"!==s?s:"text"}var i=e.serializeBody(),a=null,u=function(){if(null!==a)return a;var t=1223===r.status?204:r.status,n=r.statusText||"OK",o=new m(r.getAllResponseHeaders()),s=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return a=new S({headers:o,status:t,statusText:n,url:s})},c=function(){var t=u(),o=t.headers,s=t.status,i=t.statusText,a=t.url,c=null;204!==s&&(c=void 0===r.response?r.responseText:r.response),0===s&&(s=c?200:0);var l=s>=200&&s<300;if("json"===e.responseType&&"string"==typeof c){var h=c;c=c.replace(M,"");try{c=""!==c?JSON.parse(c):null}catch(f){c=h,l&&(l=!1,c={error:f,text:c})}}l?(n.next(new j({body:c,headers:o,status:s,statusText:i,url:a||void 0})),n.complete()):n.error(new A({error:c,headers:o,status:s,statusText:i,url:a||void 0}))},l=function(e){var t=u().url,o=new A({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error",url:t||void 0});n.error(o)},h=!1,f=function(t){h||(n.next(u()),h=!0);var o={type:E.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&r.responseText&&(o.partialText=r.responseText),n.next(o)},d=function(e){var t={type:E.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",c),r.addEventListener("error",l),e.reportProgress&&(r.addEventListener("progress",f),null!==i&&r.upload&&r.upload.addEventListener("progress",d)),r.send(i),n.next({type:E.Sent}),function(){r.removeEventListener("error",l),r.removeEventListener("load",c),e.reportProgress&&(r.removeEventListener("progress",f),null!==i&&r.upload&&r.upload.removeEventListener("progress",d)),r.readyState!==r.DONE&&r.abort()}}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Pb(F))},e.\u0275prov=a.Cb({token:e,factory:e.\u0275fac}),e}(),D=new a.q("XSRF_COOKIE_NAME"),q=new a.q("XSRF_HEADER_NAME"),X=function e(){c(this,e)},_=function(){var e=function(){function e(t,n,r){c(this,e),this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return h(e,[{key:"getToken",value:function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(y.w)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Pb(y.c),a.Pb(a.B),a.Pb(D))},e.\u0275prov=a.Cb({token:e,factory:e.\u0275fac}),e}(),K=function(){var e=function(){function e(t,n){c(this,e),this.tokenService=t,this.headerName=n}return h(e,[{key:"intercept",value:function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Pb(X),a.Pb(q))},e.\u0275prov=a.Cb({token:e,factory:e.\u0275fac}),e}(),B=function(){var e=function(){function e(t,n){c(this,e),this.backend=t,this.injector=n,this.chain=null}return h(e,[{key:"handle",value:function(e){if(null===this.chain){var t=this.injector.get(z,[]);this.chain=t.reduceRight((function(e,t){return new N(e,t)}),this.backend)}return this.chain.handle(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Pb(b),a.Pb(a.r))},e.\u0275prov=a.Cb({token:e,factory:e.\u0275fac}),e}(),J=function(){var e=function(){function e(){c(this,e)}return h(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:K,useClass:H}]}}},{key:"withOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:D,useValue:t.cookieName}:[],t.headerName?{provide:q,useValue:t.headerName}:[]]}}}]),e}();return e.\u0275mod=a.Eb({type:e}),e.\u0275inj=a.Db({factory:function(t){return new(t||e)},providers:[K,{provide:z,useExisting:K,multi:!0},{provide:X,useClass:_},{provide:D,useValue:"XSRF-TOKEN"},{provide:q,useValue:"X-XSRF-TOKEN"}]}),e}(),W=function(){var e=function e(){c(this,e)};return e.\u0275mod=a.Eb({type:e}),e.\u0275inj=a.Db({factory:function(t){return new(t||e)},providers:[R,{provide:v,useClass:B},I,{provide:b,useExisting:I},U,{provide:F,useExisting:U}],imports:[[J.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e}()}}])}();