!function(){function e(n,t){return(e=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(n,t)}function n(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=i(e);if(n){var r=i(this).constructor;a=Reflect.construct(o,arguments,r)}else a=o.apply(this,arguments);return t(this,a)}}function t(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(self.webpackChunkcompilers_www=self.webpackChunkcompilers_www||[]).push([[378],{6378:function(t,i,o){"use strict";o.r(i),o.d(i,{PresentationsModule:function(){return fe}});var u=o(1116),c=o(7200),g=o(7368),l=o(6117),s=function(){return["/","presentations","2020-02"]},Z=function(){var e=function(){function e(){a(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-presentations"]],decls:4,vars:2,consts:[["fragment","0",3,"routerLink"]],template:function(e,n){1&e&&(g._UZ(0,"app-navbar"),g.TgZ(1,"h1"),g.TgZ(2,"a",0),g._uU(3,"2020-02"),g.qZA(),g.qZA()),2&e&&(g.xp6(2),g.Q6J("routerLink",g.DdM(1,s)))},directives:[l.S,c.yS],styles:[""]}),e}(),d=function(){var e=function(){function e(n,t){a(this,e),this.router=n,this.route=t}return r(e,[{key:"totalSlides",get:function(){return this._totalSlides},set:function(e){this._totalSlides=e-1}},{key:"getIncrementSlideNumber",value:function(){return this._totalSlides+=1,this._totalSlides}},{key:"isFullScreen",value:function(){return!document.fullscreenElement}},{key:"toggleFullScreen",value:function(){this.isFullScreen()?document.documentElement.requestFullscreen():null!=document.exitFullscreen&&document.exitFullscreen().catch(console.error)}},{key:"ngOnInit",value:function(){var e=this;this.route.fragment.subscribe(function(n){return e.currentSlide=null==n?0:parseInt(n,10)})}},{key:"navigate",value:function(){var e=this.router.parseUrl(this.router.url);e.fragment=this.currentSlide.toString(),this.router.navigateByUrl(e).catch(console.error)}},{key:"prev",value:function(){this.currentSlide<1||(this.currentSlide--,this.navigate())}},{key:"next",value:function(){this.totalSlides!==this.currentSlide&&(this.currentSlide++,this.navigate())}},{key:"keyEvent",value:function(e){if(!(null!=this.noKeyBindSlides&&this.noKeyBindSlides.indexOf(this.currentSlide)>-1))switch(e.key){case"Down":case"ArrowDown":case"Right":case"ArrowRight":return this.next();case"Up":case"ArrowUp":case"Left":case"ArrowLeft":return this.prev();case"f":return this.toggleFullScreen()}}}]),e}();return e.\u0275fac=function(n){return new(n||e)(g.Y36(c.F0),g.Y36(c.gz))},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-slides"]],hostBindings:function(e,n){1&e&&g.NdJ("keyup",function(e){return n.keyEvent(e)},!1,g.Jf7)},decls:2,vars:0,template:function(e,n){1&e&&(g.TgZ(0,"p"),g._uU(1,"slides works!"),g.qZA())},styles:[""]}),e}(),f=o(6225),p=o(2638),A=o(1293);function T(e,n){1&e&&(g.TgZ(0,"div",14),g.TgZ(1,"h3"),g._uU(2,"Feb 2020 presentation"),g.qZA(),g.TgZ(3,"p"),g._uU(4,"Samuel Marks, for Offscale.io"),g.qZA(),g.qZA())}function h(e,n){1&e&&g._UZ(0,"img",15)}function q(e,n){if(1&e&&(g.TgZ(0,"div",14),g.TgZ(1,"h3"),g._uU(2),g.qZA(),g.TgZ(3,"ul",16),g.TgZ(4,"li"),g._uU(5,"API client"),g.qZA(),g.TgZ(6,"li"),g._uU(7,"Models"),g.qZA(),g.TgZ(8,"li"),g._uU(9,"Validation"),g.qZA(),g.TgZ(10,"li"),g._uU(11,"Views"),g.qZA(),g.TgZ(12,"li"),g._uU(13,"Docs"),g.qZA(),g.TgZ(14,"li"),g._uU(15,"Tests"),g.qZA(),g.TgZ(16,"li"),g._uU(17,"Mocks"),g.qZA(),g.qZA(),g.qZA()),2&e){var t=g.oxw().$implicit;g.xp6(2),g.Oqu(t)}}function v(e,n){if(1&e&&(g.ynx(0),g.YNc(1,q,18,1,"div",1),g.BQk()),2&e){var t=n.index;g.xp6(1),g.Q6J("ngSwitchCase",t+2)}}function _(e,n){1&e&&(g.TgZ(0,"div",14),g.TgZ(1,"h3"),g._uU(2,"REST API"),g.qZA(),g.TgZ(3,"ul",16),g.TgZ(4,"li"),g._uU(5,"API server"),g.qZA(),g.TgZ(6,"li"),g._uU(7,"Models"),g.qZA(),g.TgZ(8,"li"),g._uU(9,"Validation"),g.qZA(),g.TgZ(10,"li"),g._uU(11,"Docs"),g.qZA(),g.TgZ(12,"li"),g._uU(13,"Tests"),g.qZA(),g.TgZ(14,"li"),g._uU(15,"Mocks"),g.qZA(),g.qZA(),g.qZA())}function m(e,n){1&e&&(g.TgZ(0,"div",14),g.TgZ(1,"h3"),g._uU(2,"Duplication in 4 or 5 languages"),g.qZA(),g.TgZ(3,"p"),g._uU(4,"Maintaining this orthogonality is straightforward\u2026 albeit error prone."),g.qZA(),g.qZA())}function U(e,n){1&e&&(g.TgZ(0,"h3"),g._uU(1,"Solution 0"),g.qZA(),g.TgZ(2,"p"),g._uU(3,"Write in one language and framework."),g.qZA())}function x(e,n){1&e&&g.GkF(0)}function w(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,x,1,0,"ng-container",17),g.TgZ(2,"p"),g._uU(3,"Examples: older PHP frameworks, Rails, Django."),g.qZA(),g.TgZ(4,"div",18),g.TgZ(5,"a",19),g._uU(6,"Advantages"),g.qZA(),g.TgZ(7,"a",20),g._uU(8,"Disadvantages"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(8);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function S(e,n){1&e&&g.GkF(0)}function k(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,S,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Advantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"One codebase (very DRY)"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"One language (or at least, language injection into HTML templates)"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Testing of backend and frontend can be done once, and without mocks"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(8);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function y(e,n){1&e&&g.GkF(0)}function b(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,y,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Disadvantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"Templates cannot generally be deployed onto the CDN"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Offline mode is generally not available"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Scalability is negatively affected"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(8);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function O(e,n){1&e&&(g.TgZ(0,"h3"),g._uU(1,"Solution 1"),g.qZA(),g.TgZ(2,"p"),g._uU(3,"Two codebases (frontend, backend), but one "),g.TgZ(4,"em"),g._uU(5,"lingua-franca"),g.qZA(),g._uU(6," language."),g.qZA())}function C(e,n){1&e&&g.GkF(0)}function J(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,C,1,0,"ng-container",17),g.TgZ(2,"p"),g._uU(3,"Examples:"),g.qZA(),g.TgZ(4,"ul",16),g.TgZ(5,"li"),g._uU(6,"C#: Xamarin with ASP.NET Web API;"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Dart: Flutter and "),g.TgZ(9,"code"),g._uU(10,"dart::io"),g.qZA(),g._uU(11,";"),g.qZA(),g.TgZ(12,"li"),g._uU(13,"Java: Google Web Toolkit (GWT) and Spring"),g.qZA(),g.TgZ(14,"li"),g._uU(15,"PHP: PHP templates and Laravel"),g.qZA(),g.TgZ(16,"li"),g._uU(17,"JavaScript (and/or compile-to-JavaScript): [frameworks: Angular, React, Vue] HTML and Node.js"),g.qZA(),g.qZA(),g.TgZ(18,"div",18),g.TgZ(19,"a",21),g._uU(20,"Advantages"),g.qZA(),g.TgZ(21,"a",22),g._uU(22,"Disadvantages"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(13);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function N(e,n){1&e&&g.GkF(0)}function Y(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,N,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Advantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"One language, so can share knowledge, libraries, and developer tooling"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Testing can [sometimes] be done without mocks"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Removes quirks around language differences, e.g., regular expressions"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(13);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function Q(e,n){1&e&&g.GkF(0)}function D(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,Q,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Disadvantages"),g.qZA(),g.TgZ(4,"ul",23),g.TgZ(5,"li"),g._uU(6,"Non-standard (not using vendor-recommended approach)"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Debugging is more difficult"),g.TgZ(9,"sup"),g._uU(10,"\u2020"),g.qZA(),g.qZA(),g.TgZ(11,"li"),g._uU(12,"Offline mode and performance are impacted"),g.TgZ(13,"sup"),g._uU(14,"\u2020"),g.qZA(),g._uU(15," with performance impact for web-native languages when packages as native app "),g.qZA(),g.qZA(),g.TgZ(16,"p",24),g.TgZ(17,"sup"),g._uU(18,"\u2020"),g.qZA(),g.TgZ(19,"em"),g._uU(20,"for non web-native languages"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(13);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function F(e,n){1&e&&(g.TgZ(0,"h3"),g._uU(1,"Solution 2"),g.qZA(),g.TgZ(2,"p"),g._uU(3,"Vendor-specific languages for each frontend and decoupled backend, but shared library for API, models, and validation."),g.qZA())}function M(e,n){1&e&&g.GkF(0)}function P(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,M,1,0,"ng-container",17),g.TgZ(2,"p"),g._uU(3,"Examples:"),g.qZA(),g.TgZ(4,"ul",16),g.TgZ(5,"li"),g._uU(6,"Protocol Buffers and FlatBuffers from Google;"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Cap\u2019n Proto;"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Thrift and Arvo from Apache;"),g.qZA(),g.TgZ(11,"li"),g._uU(12,"WSDL and SOAP standard complying implementations (Microsoft & others)"),g.qZA(),g.TgZ(13,"li"),g._uU(14,"FFI"),g.qZA(),g.qZA(),g.TgZ(15,"div",18),g.TgZ(16,"a",25),g._uU(17,"Advantages"),g.qZA(),g.TgZ(18,"a",26),g._uU(19,"Disadvantages"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(18);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function G(e,n){1&e&&(g.TgZ(0,"a",27),g._UZ(1,"img",28),g.qZA()),2&e&&(g.xp6(1),g.Q6J("title","Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit."))}function L(e,n){1&e&&g.GkF(0)}function E(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,L,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Advantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"Single source of truth (SSOT)"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Dynamism (can be setup so that when SSOT changes, all frontends and backends change)"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Compression, pipelining and other efficiency gains"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(18);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function R(e,n){1&e&&g.GkF(0)}function B(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,R,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Disadvantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"Non-standard, non-vendor recommended (or each vendor recommends a different one)\u2026 impacting team training also "),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Difficult to debug"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Difficult to test"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(18);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function I(e,n){1&e&&(g.TgZ(0,"h3"),g._uU(1,"Solution 3"),g.qZA(),g.TgZ(2,"p"),g._uU(3,"Vendor-specific languages for each frontend and decoupled backend."),g.qZA())}function j(e,n){1&e&&g.GkF(0)}function W(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,j,1,0,"ng-container",17),g.TgZ(2,"p"),g._uU(3,"Examples:"),g.qZA(),g.TgZ(4,"ul",16),g.TgZ(5,"li"),g._uU(6,"C++ for desktop;"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"JavaScript for web;"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Rust for backend;"),g.qZA(),g.TgZ(11,"li"),g._uU(12,"Swift for iOS"),g.qZA(),g.TgZ(13,"li"),g._uU(14,"Java for Android"),g.qZA(),g.qZA(),g.TgZ(15,"div",18),g.TgZ(16,"a",25),g._uU(17,"Advantages"),g.qZA(),g.TgZ(18,"a",26),g._uU(19,"Disadvantages"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(24);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function z(e,n){1&e&&g.GkF(0)}function H(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,z,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Advantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"Right tool for right job: standard vendor-specific language. E.g., hire any Android dev and they will know how to write the app in Java. "),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Performance"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Granularity of features, e.g., peripheral devices, offline mode, compression &etc."),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(24);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function V(e,n){1&e&&g.GkF(0)}function X(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,V,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Disadvantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"Duplication"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Time and complexity of maintaining duplication"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Language and toolchain knowledge requirement and transition effort"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(24);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function K(e,n){1&e&&(g.TgZ(0,"div",14),g.TgZ(1,"h1"),g._uU(2,"Compiler Driven Development (CDD)"),g.qZA(),g.qZA())}function $(e,n){1&e&&(g.TgZ(0,"div",14),g.TgZ(1,"h4"),g._uU(2,"What is CDD?"),g.qZA(),g.TgZ(3,"p"),g._uU(4,"A series of compilers\u2014and methodology for creating new compilers\u2014that traverses the Abstract Syntax Tree (AST) of each language, and translates across:"),g.qZA(),g.TgZ(5,"ul",16),g.TgZ(6,"li"),g._uU(7,"API client|server"),g.qZA(),g.TgZ(8,"li"),g._uU(9,"models"),g.qZA(),g.TgZ(10,"li"),g._uU(11,"validation"),g.qZA(),g.TgZ(12,"li"),g._uU(13,"docs"),g.qZA(),g.TgZ(14,"li"),g._uU(15,"tests and mocks"),g.qZA(),g.qZA(),g.qZA())}function ee(e,n){1&e&&(g.TgZ(0,"h3"),g._uU(1,"Compiler Driven Development (CDD)"),g.qZA(),g.TgZ(2,"p"),g._uU(3,"Automated changes for vendor-specific languages for each frontend and decoupled backend."),g.qZA())}function ne(e,n){1&e&&g.GkF(0)}function te(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,ne,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Advantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"Conceivable to maintain "),g.TgZ(7,"strong"),g._uU(8,"100% test coverage"),g.qZA(),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Speedup making changes across language boundaries (e.g., adding a property to a model is "),g.TgZ(11,"strong"),g._uU(12,"36\xd7 faster"),g.qZA(),g._uU(13,") "),g.qZA(),g.TgZ(14,"li"),g._uU(15,"All the advantages of native development (e.g., see "),g.TgZ(16,"a",29),g._uU(17,"slide 19"),g.qZA(),g._uU(18,")"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(31);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function ie(e,n){1&e&&g.GkF(0)}function ae(e,n){if(1&e&&(g.TgZ(0,"div",14),g.YNc(1,ie,1,0,"ng-container",17),g.TgZ(2,"h4"),g._uU(3,"Disadvantages"),g.qZA(),g.TgZ(4,"ul"),g.TgZ(5,"li"),g._uU(6,"Time to write each compiler"),g.qZA(),g.TgZ(7,"li"),g._uU(8,"Time to develop for each design pattern, paradigm, and directory structure"),g.qZA(),g.TgZ(9,"li"),g._uU(10,"Institutional inertia"),g.qZA(),g.qZA(),g.qZA()),2&e){g.oxw();var t=g.MAs(31);g.xp6(1),g.Q6J("ngTemplateOutlet",t)}}function oe(e,n){1&e&&(g.TgZ(0,"div",14),g.TgZ(1,"h3"),g._uU(2,"CDD demo"),g.qZA(),g.TgZ(3,"code"),g._uU(4,"TODO: Embed web IDE here"),g.qZA(),g.qZA())}var re,ue,ce,ge=function(){return["iOS: Swift","Android: Java","Android: Kotlin","web: TypeScript"]},le=[{path:"",component:Z},{path:"2020-02",component:(ue=function(t){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&e(n,t)}(o,t);var i=n(o);function o(){return a(this,o),i.apply(this,arguments)}return r(o,[{key:"ngAfterContentInit",value:function(){this.totalSlides=30}}]),o}(d),ue.\u0275fac=function(e){return(re||(re=g.n5z(ue)))(e||ue)},ue.\u0275cmp=g.Xpm({type:ue,selectors:[["app-feb2020-1"]],features:[g.qOj],decls:42,vars:26,consts:[[3,"ngSwitch"],["class","slide",4,"ngSwitchCase"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram",4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["solution0",""],["solution1",""],["solution2",""],["href","https://xkcd.com/927/","target","_blank",4,"ngSwitchCase"],["solution3",""],["solution4",""],["fxLayout","row","fxLayoutGap","20px",2,"width","80px","background","transparent","border","none"],["fxFlex","",1,"trans-button",2,"font-size","20px",3,"click"],["fxFlex","",1,"trans-button",2,"height","5px","width","5px",3,"click"],[2,"height","5px","width","5px",3,"src"],[1,"slide"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram"],["ngStyle.lt-lg","column-count: 1","ngStyle.gt-sm","column-count: 3"],[4,"ngTemplateOutlet"],["fxLayout","row"],["routerLink",".","fragment","9","fxFlex",""],["routerLink",".","fragment","10","fxFlex",""],["routerLink",".","fragment","12","fxFlex",""],["routerLink",".","fragment","13","fxFlex",""],[2,"margin-bottom","0"],[2,"margin-top","0"],["routerLink",".","fragment","16","fxFlex",""],["routerLink",".","fragment","17","fxFlex",""],["href","https://xkcd.com/927/","target","_blank"],["src","//imgs.xkcd.com/comics/standards.png","alt","Standards",2,"width","50%",3,"title"],["routerLink",".","fragment","19"]],template:function(e,n){1&e&&(g._UZ(0,"app-navbar"),g.ynx(1,0),g.YNc(2,T,5,0,"div",1),g.YNc(3,h,1,0,"img",2),g.YNc(4,v,2,1,"ng-container",3),g.YNc(5,_,16,0,"div",1),g.YNc(6,m,5,0,"div",1),g.YNc(7,U,4,0,"ng-template",null,4,g.W1O),g.YNc(9,w,9,1,"div",1),g.YNc(10,k,11,1,"div",1),g.YNc(11,b,11,1,"div",1),g.YNc(12,O,7,0,"ng-template",null,5,g.W1O),g.YNc(14,J,23,1,"div",1),g.YNc(15,Y,11,1,"div",1),g.YNc(16,D,21,1,"div",1),g.YNc(17,F,4,0,"ng-template",null,6,g.W1O),g.YNc(19,P,20,1,"div",1),g.YNc(20,G,2,1,"a",7),g.YNc(21,E,11,1,"div",1),g.YNc(22,B,11,1,"div",1),g.YNc(23,I,4,0,"ng-template",null,8,g.W1O),g.YNc(25,W,20,1,"div",1),g.YNc(26,H,11,1,"div",1),g.YNc(27,X,11,1,"div",1),g.YNc(28,K,3,0,"div",1),g.YNc(29,$,16,0,"div",1),g.YNc(30,ee,4,0,"ng-template",null,9,g.W1O),g.YNc(32,te,19,1,"div",1),g.YNc(33,ae,11,1,"div",1),g.YNc(34,oe,5,0,"div",1),g.BQk(),g.TgZ(35,"div",10),g.TgZ(36,"button",11),g.NdJ("click",function(){return n.prev()}),g._uU(37," \u2190 "),g.qZA(),g.TgZ(38,"button",11),g.NdJ("click",function(){return n.next()}),g._uU(39," \u2192 "),g.qZA(),g.TgZ(40,"button",12),g.NdJ("click",function(){return n.toggleFullScreen()}),g._UZ(41,"app-svg-viewer",13),g.qZA(),g.qZA()),2&e&&(g.xp6(1),g.Q6J("ngSwitch",n.currentSlide),g.xp6(1),g.Q6J("ngSwitchCase",0),g.xp6(1),g.Q6J("ngSwitchCase",1),g.xp6(1),g.Q6J("ngForOf",g.DdM(25,ge)),g.xp6(1),g.Q6J("ngSwitchCase",6),g.xp6(1),g.Q6J("ngSwitchCase",7),g.xp6(3),g.Q6J("ngSwitchCase",8),g.xp6(1),g.Q6J("ngSwitchCase",9),g.xp6(1),g.Q6J("ngSwitchCase",10),g.xp6(3),g.Q6J("ngSwitchCase",11),g.xp6(1),g.Q6J("ngSwitchCase",12),g.xp6(1),g.Q6J("ngSwitchCase",13),g.xp6(3),g.Q6J("ngSwitchCase",14),g.xp6(1),g.Q6J("ngSwitchCase",15),g.xp6(1),g.Q6J("ngSwitchCase",16),g.xp6(1),g.Q6J("ngSwitchCase",17),g.xp6(3),g.Q6J("ngSwitchCase",18),g.xp6(1),g.Q6J("ngSwitchCase",19),g.xp6(1),g.Q6J("ngSwitchCase",20),g.xp6(1),g.Q6J("ngSwitchCase",21),g.xp6(1),g.Q6J("ngSwitchCase",22),g.xp6(3),g.Q6J("ngSwitchCase",23),g.xp6(1),g.Q6J("ngSwitchCase",24),g.xp6(1),g.Q6J("ngSwitchCase",25),g.xp6(7),g.Q6J("src",n.isFullScreen()?"/assets/fullscreen-24px.svg":"/assets/fullscreen_exit-24px.svg"))},directives:[l.S,u.RF,u.n9,u.sg,f.xw,f.SQ,f.yH,p.m,A.Zl,u.tP,c.yS],styles:["div[_ngcontent-%COMP%]{padding:20px}ul.div[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;padding-top:0}.slide[_ngcontent-%COMP%]{font-size:300%}.trans-button[_ngcontent-%COMP%]{background:transparent;border:none}"]}),ue)}],se=o(9095),Ze=o(1007),de=o(7154),fe=((ce=function e(){a(this,e)}).\u0275fac=function(e){return new(e||ce)},ce.\u0275mod=g.oAB({type:ce}),ce.\u0275inj=g.cJS({imports:[[u.ez,c.Bz.forChild(le),se.W,Ze.h,de.o9]]}),ce)}}])}();