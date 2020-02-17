function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,s=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){s=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(s)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9SxO":function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),s=n("tyNb"),o=n("YUcS"),a=n("fXoL"),i=n("jhN1"),l=n("kWWo"),c=n("XiUz"),u=n("znSr"),h=n("LRne"),d=n("HDdC"),p=n("bOdf"),f=n("pLZG"),y=n("lJxs"),b=function e(){_classCallCheck(this,e)},v=function e(){_classCallCheck(this,e)},g=function(){function e(t){var n=this;_classCallCheck(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){n.headers=new Map,t.split("\n").forEach((function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),s=r.toLowerCase(),o=e.slice(t+1).trim();n.maybeSetNormalizedName(r,s),n.headers.has(s)?n.headers.get(s).push(o):n.headers.set(s,[o])}}))}:function(){n.headers=new Map,Object.keys(t).forEach((function(e){var r=t[e],s=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(n.headers.set(s,r),n.maybeSetNormalizedName(e,s))}))}:this.headers=new Map}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach((function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))}))}},{key:"clone",value:function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,_toConsumableArray(n)),this.headers.set(t,r);break;case"d":var s=e.value;if(s){var o=this.headers.get(t);if(!o)return;0===(o=o.filter((function(e){return-1===s.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(n){return e(t.normalizedNames.get(n),t.headers.get(n))}))}}]),e}(),m=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"encodeKey",value:function(e){return C(e)}},{key:"encodeValue",value:function(e){return C(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function C(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var x=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new m,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){var n=new Map;return e.length>0&&e.split("&").forEach((function(e){var r=e.indexOf("="),s=_slicedToArray(-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],2),o=s[0],a=s[1],i=n.get(o)||[];i.push(a),n.set(o,i)})),n}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach((function(e){var r=n.fromObject[e];t.map.set(e,Array.isArray(r)?r:[r])}))):this.map=null}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map((function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return n+"="+e.encoder.encodeValue(t)})).join("&")})).filter((function(e){return""!==e})).join("&")}},{key:"clone",value:function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],s=r.indexOf(t.value);-1!==s&&r.splice(s,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function w(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function k(e){return"undefined"!=typeof Blob&&e instanceof Blob}function _(e){return"undefined"!=typeof FormData&&e instanceof FormData}var O=function(){function e(t,n,r,s){var o;if(_classCallCheck(this,e),this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new g),this.params){var a=this.params.toString();if(0===a.length)this.urlWithParams=n;else{var i=n.indexOf("?");this.urlWithParams=n+(-1===i?"?":i<n.length-1?"&":"")+a}}else this.params=new x,this.urlWithParams=n}return _createClass(e,[{key:"serializeBody",value:function(){return null===this.body?null:w(this.body)||k(this.body)||_(this.body)||"string"==typeof this.body?this.body:this.body instanceof x?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body?null:_(this.body)?null:k(this.body)?this.body.type||null:w(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof x?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.method||this.method,r=t.url||this.url,s=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,i=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,l=t.headers||this.headers,c=t.params||this.params;return void 0!==t.setHeaders&&(l=Object.keys(t.setHeaders).reduce((function(e,n){return e.set(n,t.setHeaders[n])}),l)),t.setParams&&(c=Object.keys(t.setParams).reduce((function(e,n){return e.set(n,t.setParams[n])}),c)),new e(n,r,o,{params:c,headers:l,reportProgress:i,responseType:s,withCredentials:a})}}]),e}(),T=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}(),L=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";_classCallCheck(this,e),this.headers=t.headers||new g,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},P=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n))).type=T.ResponseHeader,e}return _inherits(t,e),_createClass(t,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),t}(L),E=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n))).type=T.Response,e.body=void 0!==n.body?n.body:null,e}return _inherits(t,e),_createClass(t,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),t}(L),A=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,0,"Unknown Error"))).name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for ".concat(e.url||"(unknown url)"):"Http failure response for ".concat(e.url||"(unknown url)",": ").concat(e.status," ").concat(e.statusText),n.error=e.error||null,n}return _inherits(t,e),t}(L);function S(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var z,R,j,N,K,M,F,H,I,U,D=((z=function(){function e(t){_classCallCheck(this,e),this.handler=t}return _createClass(e,[{key:"request",value:function(e,t){var n,r=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof O)n=e;else{var o=void 0;o=s.headers instanceof g?s.headers:new g(s.headers);var a=void 0;s.params&&(a=s.params instanceof x?s.params:new x({fromObject:s.params})),n=new O(e,t,void 0!==s.body?s.body:null,{headers:o,params:a,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}var i=Object(h.a)(n).pipe(Object(p.a)((function(e){return r.handler.handle(e)})));if(e instanceof O||"events"===s.observe)return i;var l=i.pipe(Object(f.a)((function(e){return e instanceof E})));switch(s.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return l.pipe(Object(y.a)((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return l.pipe(Object(y.a)((function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return l.pipe(Object(y.a)((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));case"json":default:return l.pipe(Object(y.a)((function(e){return e.body})))}case"response":return l;default:throw new Error("Unreachable: unhandled observe type ".concat(s.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new x).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,S(n,t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,S(n,t))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,S(n,t))}}]),e}()).\u0275fac=function(e){return new(e||z)(a.Ob(b))},z.\u0275prov=a.Eb({token:z,factory:z.\u0275fac}),z),q=function(){function e(t,n){_classCallCheck(this,e),this.next=t,this.interceptor=n}return _createClass(e,[{key:"handle",value:function(e){return this.interceptor.intercept(e,this.next)}}]),e}(),J=new a.q("HTTP_INTERCEPTORS"),X=((R=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"intercept",value:function(e,t){return t.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||R)},R.\u0275prov=a.Eb({token:R,factory:R.\u0275fac}),R),B=/^\)\]\}',?\n/,W=function e(){_classCallCheck(this,e)},G=((N=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"build",value:function(){return new XMLHttpRequest}}]),e}()).\u0275fac=function(e){return new(e||N)},N.\u0275prov=a.Eb({token:N,factory:N.\u0275fac}),N),V=((j=function(){function e(t){_classCallCheck(this,e),this.xhrFactory=t}return _createClass(e,[{key:"handle",value:function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new d.a((function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((function(e,t){return r.setRequestHeader(e,t.join(","))})),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var s=e.detectContentTypeHeader();null!==s&&r.setRequestHeader("Content-Type",s)}if(e.responseType){var o=e.responseType.toLowerCase();r.responseType="json"!==o?o:"text"}var a=e.serializeBody(),i=null,l=function(){if(null!==i)return i;var t=1223===r.status?204:r.status,n=r.statusText||"OK",s=new g(r.getAllResponseHeaders()),o=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return i=new P({headers:s,status:t,statusText:n,url:o})},c=function(){var t=l(),s=t.headers,o=t.status,a=t.statusText,i=t.url,c=null;204!==o&&(c=void 0===r.response?r.responseText:r.response),0===o&&(o=c?200:0);var u=o>=200&&o<300;if("json"===e.responseType&&"string"==typeof c){var h=c;c=c.replace(B,"");try{c=""!==c?JSON.parse(c):null}catch(d){c=h,u&&(u=!1,c={error:d,text:c})}}u?(n.next(new E({body:c,headers:s,status:o,statusText:a,url:i||void 0})),n.complete()):n.error(new A({error:c,headers:s,status:o,statusText:a,url:i||void 0}))},u=function(e){var t=l().url,s=new A({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error",url:t||void 0});n.error(s)},h=!1,d=function(t){h||(n.next(l()),h=!0);var s={type:T.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(s.total=t.total),"text"===e.responseType&&r.responseText&&(s.partialText=r.responseText),n.next(s)},p=function(e){var t={type:T.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",c),r.addEventListener("error",u),e.reportProgress&&(r.addEventListener("progress",d),null!==a&&r.upload&&r.upload.addEventListener("progress",p)),r.send(a),n.next({type:T.Sent}),function(){r.removeEventListener("error",u),r.removeEventListener("load",c),e.reportProgress&&(r.removeEventListener("progress",d),null!==a&&r.upload&&r.upload.removeEventListener("progress",p)),r.abort()}}))}}]),e}()).\u0275fac=function(e){return new(e||j)(a.Ob(W))},j.\u0275prov=a.Eb({token:j,factory:j.\u0275fac}),j),Y=new a.q("XSRF_COOKIE_NAME"),Z=new a.q("XSRF_HEADER_NAME"),$=function e(){_classCallCheck(this,e)},Q=((U=function(){function e(t,n,r){_classCallCheck(this,e),this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return _createClass(e,[{key:"getToken",value:function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(r.s)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}()).\u0275fac=function(e){return new(e||U)(a.Ob(r.c),a.Ob(a.B),a.Ob(Y))},U.\u0275prov=a.Eb({token:U,factory:U.\u0275fac}),U),ee=((I=function(){function e(t,n){_classCallCheck(this,e),this.tokenService=t,this.headerName=n}return _createClass(e,[{key:"intercept",value:function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||I)(a.Ob($),a.Ob(Z))},I.\u0275prov=a.Eb({token:I,factory:I.\u0275fac}),I),te=((H=function(){function e(t,n){_classCallCheck(this,e),this.backend=t,this.injector=n,this.chain=null}return _createClass(e,[{key:"handle",value:function(e){if(null===this.chain){var t=this.injector.get(J,[]);this.chain=t.reduceRight((function(e,t){return new q(e,t)}),this.backend)}return this.chain.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||H)(a.Ob(v),a.Ob(a.r))},H.\u0275prov=a.Eb({token:H,factory:H.\u0275fac}),H),ne=((F=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:ee,useClass:X}]}}},{key:"withOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:Y,useValue:t.cookieName}:[],t.headerName?{provide:Z,useValue:t.headerName}:[]]}}}]),e}()).\u0275mod=a.Gb({type:F}),F.\u0275inj=a.Fb({factory:function(e){return new(e||F)},providers:[ee,{provide:J,useExisting:ee,multi:!0},{provide:$,useClass:Q},{provide:Y,useValue:"XSRF-TOKEN"},{provide:Z,useValue:"X-XSRF-TOKEN"}]}),F),re=((M=function e(){_classCallCheck(this,e)}).\u0275mod=a.Gb({type:M}),M.\u0275inj=a.Fb({factory:function(e){return new(e||M)},providers:[D,{provide:b,useClass:te},V,{provide:v,useExisting:V},G,{provide:W,useExisting:G}],imports:[[ne.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),M),se=((K=function(){function e(t,n){_classCallCheck(this,e),this.elementRef=t,this.http=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.fetchAndInlineSvgContent(this.src)}},{key:"inlineSvgContent",value:function(e){if(this.elementRef.nativeElement.innerHTML=e,this.scaleToContainer){var t=this.elementRef.nativeElement.querySelector("svg");t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet")}}},{key:"fetchAndInlineSvgContent",value:function(e){var t,n=this,r=(t=e).slice(t.indexOf("assets/")-1);this.http.get(r,{responseType:"text"}).subscribe((function(e){n.inlineSvgContent(e)}))}}]),e}()).\u0275fac=function(e){return new(e||K)(a.Ib(a.l),a.Ib(D))},K.\u0275cmp=a.Cb({type:K,selectors:[["app-svg-viewer"]],inputs:{src:"src",scaleToContainer:"scaleToContainer"},decls:1,vars:0,consts:[["aria-hidden","true",1,"docs-svg-viewer"]],template:function(e,t){1&e&&a.Jb(0,"span",0)},styles:[""]}),K);function oe(e,t){if(1&e&&a.Jb(0,"section",25),2&e){var n=a.Ub();a.Xb("innerHtml",n.safeHtml,a.Zb)}}var ae,ie,le=[{path:"",component:(ae=function(){function e(t){_classCallCheck(this,e),this.sanitizer=t,this.videoNumber="287747",this.safeHtml=t.bypassSecurityTrustHtml('<iframe style="width: 100%; height: 500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="https://asciinema.org/a/'+this.videoNumber+'/iframe"></iframe>')}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),ae.\u0275fac=function(e){return new(e||ae)(a.Ib(i.b))},ae.\u0275cmp=a.Cb({type:ae,selectors:[["app-slash"]],decls:59,vars:1,consts:[["fxFlex","","fxLayout","column","fxLayoutGap","20px","fxLayoutAlign","center",2,"padding","20px"],["fxFlex","100",1,"text-size-xl","text-center","m-v-lg"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","20px",1,"text-center",2,"padding-bottom","200px"],["href","#","fxFlex","",1,"btn","btn-primary"],["href","#","fxFlex","",1,"btn","btn-secondary"],["class","hero-image","style","margin-top: -200px",3,"innerHtml",4,"ngIf"],[1,"m-v-lg","text-size-lg"],["fxLayout","row",1,"about","center","m-v-lg"],["fxLayout","row","fxLayout.lt-md","column","fxFlex",""],["fxFlex",""],["src","/assets/dial-36x.svg","alt","exponential speedup"],["src","/assets/dial-heart.svg","alt","open-source"],["src","/assets/dial-gear.svg","alt","AST level"],["fxLayout","row","fxLayoutAlign","center center","fxFlexAlign","center center","fxLayout.lt-md","column",1,"m-v-lg"],["fxFlex","50","src","/assets/cdd-diagram.svg","alt","CDD flow",2,"width","80%"],["fxFlex","45","ngStyle.gt-md","position: relative; transform: translateY(50%)","ngStyle.lt-lg","position: relative; transform: translateY(0)",2,"height","100%","width","100%"],[1,"text-bold","text-size-md"],["fxLayout","column","fxLayoutAlign","center center",1,"case_study","p-v-lg","text-center"],["fxFlex","100",1,"m-v-md","text-size-lg"],["fxFlex","100","href","mailto:samuel@offscale.io",1,"btn","btn-primary","m-v-md"],["fxLayout","row","fxLayoutAlign","center center","ngStyle.lt-md","{'padding': 0 40px}",1,"text-center",2,"padding","40px 0 40px 90px"],["href","https://offscale.io/","fxFlex",""],["fxFlex","","src","/assets/logo-offscale.svg"],["fxFlex","",1,"mobile-hide"],["href","https://offscale.io"],[1,"hero-image",2,"margin-top","-200px",3,"innerHtml"]],template:function(e,t){1&e&&(a.Lb(0,"app-navbar"),a.Lb(1,"section",0),a.Lb(2,"div",1),a.dc(3," Native development. 100% test coverage. 36x faster. "),a.Kb(),a.Lb(4,"div",2),a.Lb(5,"a",3),a.dc(6,"Download"),a.Kb(),a.Lb(7,"a",4),a.dc(8,"Get Started"),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.cc(9,oe,1,1,"section",5),a.Lb(10,"section",6),a.dc(11," Stop using React Native, Flutter, etc. Write in one language; translate to others.\n"),a.Kb(),a.Lb(12,"section",7),a.Lb(13,"div",8),a.Lb(14,"div",9),a.Jb(15,"img",10),a.Lb(16,"h2"),a.dc(17,"36\xd7 faster"),a.Kb(),a.Lb(18,"div"),a.dc(19,"Experience a huge productivity boost."),a.Kb(),a.Kb(),a.Lb(20,"div",9),a.Jb(21,"img",11),a.Lb(22,"h2"),a.dc(23,"100% open source"),a.Kb(),a.Lb(24,"div"),a.dc(25,"(Apache OR MIT) licensed. Totally free."),a.Kb(),a.Kb(),a.Lb(26,"div",9),a.Jb(27,"img",12),a.Lb(28,"h2"),a.dc(29,"AST Driven"),a.Kb(),a.Lb(30,"div"),a.dc(31,"Each language is natively traversed via ast adaptors."),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Lb(32,"section",13),a.Jb(33,"img",14),a.Lb(34,"div",15),a.Lb(35,"div",16),a.dc(36,"AST Driven"),a.Kb(),a.Lb(37,"p"),a.dc(38," The key differentiator in our approach, is that we explicitly and statically traverse the AST of each language, in each language, then code-generate merged changes. "),a.Kb(),a.Lb(39,"div",16),a.dc(40,"Design Patterns"),a.Kb(),a.Lb(41,"p"),a.dc(42," Develop functionally, reactively, imperatively, or following Google / Apple / Dropbox / Facebook standards? - Support your directory layout, paradigm, and frameworks. "),a.Kb(),a.Lb(43,"div",16),a.dc(44,"Open Source"),a.Kb(),a.Lb(45,"p"),a.dc(46," (Apache-2.0 OR MIT) licensed, enabling maximum integration with any of your systems, e.g. IDEs, and version control systems (with CI/CD pipelines). "),a.Kb(),a.Kb(),a.Kb(),a.Lb(47,"section",17),a.Lb(48,"div",18),a.dc(49,"Become our case study!"),a.Kb(),a.Lb(50,"a",19),a.dc(51," get in touch "),a.Kb(),a.Kb(),a.Lb(52,"footer",20),a.Lb(53,"a",21),a.Jb(54,"app-svg-viewer",22),a.Kb(),a.Lb(55,"div",23),a.dc(56," \xa9 2018\u20132019 "),a.Lb(57,"a",24),a.dc(58,"offscale"),a.Kb(),a.Kb(),a.Kb()),2&e&&(a.zb(9),a.Xb("ngIf",t.safeHtml))},directives:[l.a,c.b,c.d,c.e,c.c,r.i,c.a,u.b,se],styles:["footer[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}footer[_ngcontent-%COMP%]{background-color:#ff6a00;color:#fff;line-height:100px}.hero[_ngcontent-%COMP%]{background:#460665 url(/assets/bg.jpg);background-position:50%;background-repeat:no-repeat;background-size:cover;color:#fff;font-weight:700}.case_study[_ngcontent-%COMP%]{background-color:#206;color:#fff}.center[_ngcontent-%COMP%]{text-align:center}.text-size-xl[_ngcontent-%COMP%]{font-weight:700;font-size:48px}@media(max-width:400px){.text-size-xl[_ngcontent-%COMP%]{font-weight:700;font-size:38px}}.text-size-lg[_ngcontent-%COMP%]{font-weight:700;font-size:38px}.text-size-md[_ngcontent-%COMP%]{font-size:18px}.text-bold[_ngcontent-%COMP%]{font-weight:700}.text-center[_ngcontent-%COMP%]{text-align:center}.btn[_ngcontent-%COMP%]{width:100%;border-radius:100px;line-height:70px;max-width:350px;font-size:20px;font-weight:700}.btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited{text-decoration:none;color:#fff}.btn-primary[_ngcontent-%COMP%]{background:#fe3d5d;background:-webkit-gradient(linear,left bottom,left top,from(#fe3d5d),to(#fd973e));background:linear-gradient(0deg,#fe3d5d,#fd973e)}.btn-secondary[_ngcontent-%COMP%]{background-color:#5e5e5e}.p-v-lg[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:50px}.m-v-lg[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px}.m-v-md[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.m-h-sm[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;margin-left:20px;margin-right:20px}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{color:#fff;text-decoration:none;font-weight:400;line-height:80px;font-size:20px}p[_ngcontent-%COMP%]{margin-top:0}h2[_ngcontent-%COMP%]{margin-bottom:10px}"]}),ae)}],ce=((ie=function e(){_classCallCheck(this,e)}).\u0275mod=a.Gb({type:ie}),ie.\u0275inj=a.Fb({factory:function(e){return new(e||ie)},imports:[[r.b,re]]}),ie),ue=n("/NTo");n.d(t,"SlashModule",(function(){return de}));var he,de=((he=function e(){_classCallCheck(this,e)}).\u0275mod=a.Gb({type:he}),he.\u0275inj=a.Fb({factory:function(e){return new(e||he)},imports:[[r.b,s.b,s.b.forChild(le),o.a,ce,ue.a]]}),he)}}]);