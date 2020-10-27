(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rNYC:function(n,e,i){"use strict";i.r(e),i.d(e,"PresentationsModule",(function(){return ln}));var t=i("ofXK"),b=i("tyNb"),c=i("fXoL"),a=i("kWWo");const o=function(){return["/","presentations","2020-02"]};let r=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ab({type:n,selectors:[["app-presentations"]],decls:4,vars:2,consts:[["fragment","0",3,"routerLink"]],template:function(n,e){1&n&&(c.Hb(0,"app-navbar"),c.Mb(1,"h1"),c.Mb(2,"a",0),c.ic(3,"2020-02"),c.Lb(),c.Lb()),2&n&&(c.xb(2),c.Yb("routerLink",c.Zb(1,o)))},directives:[a.a,b.c],styles:[""]}),n})(),s=(()=>{class n{constructor(n,e){this.router=n,this.route=e}get totalSlides(){return this._totalSlides}set totalSlides(n){this._totalSlides=n-1}getIncrementSlideNumber(){return this._totalSlides+=1,this._totalSlides}isFullScreen(){return!document.fullscreenElement}toggleFullScreen(){this.isFullScreen()?document.documentElement.requestFullscreen():null!=document.exitFullscreen&&document.exitFullscreen().catch(console.error)}ngOnInit(){this.route.fragment.subscribe(n=>this.currentSlide=null==n?0:parseInt(n,10))}navigate(){const n=this.router.parseUrl(this.router.url);n.fragment=this.currentSlide.toString(),this.router.navigateByUrl(n).catch(console.error)}prev(){this.currentSlide<1||(this.currentSlide--,this.navigate())}next(){this.totalSlides!==this.currentSlide&&(this.currentSlide++,this.navigate())}keyEvent(n){if(!(null!=this.noKeyBindSlides&&this.noKeyBindSlides.indexOf(this.currentSlide)>-1))switch(n.key){case"Down":case"ArrowDown":case"Right":case"ArrowRight":return this.next();case"Up":case"ArrowUp":case"Left":case"ArrowLeft":return this.prev();case"f":return this.toggleFullScreen()}}}return n.\u0275fac=function(e){return new(e||n)(c.Gb(b.b),c.Gb(b.a))},n.\u0275cmp=c.Ab({type:n,selectors:[["app-slides"]],hostBindings:function(n,e){1&n&&c.Tb("keyup",(function(n){return e.keyEvent(n)}),!1,c.cc)},decls:2,vars:0,template:function(n,e){1&n&&(c.Mb(0,"p"),c.ic(1,"slides works!"),c.Lb())},styles:[""]}),n})();var l=i("XiUz"),g=i("M9y9"),d=i("znSr");function u(n,e){1&n&&(c.Mb(0,"div",14),c.Mb(1,"h3"),c.ic(2,"Feb 2020 presentation"),c.Lb(),c.Mb(3,"p"),c.ic(4,"Samuel Marks, for Offscale.io"),c.Lb(),c.Lb())}function f(n,e){1&n&&c.Hb(0,"img",15)}function M(n,e){if(1&n&&(c.Mb(0,"div",14),c.Mb(1,"h3"),c.ic(2),c.Lb(),c.Mb(3,"ul",16),c.Mb(4,"li"),c.ic(5,"API client"),c.Lb(),c.Mb(6,"li"),c.ic(7,"Models"),c.Lb(),c.Mb(8,"li"),c.ic(9,"Validation"),c.Lb(),c.Mb(10,"li"),c.ic(11,"Views"),c.Lb(),c.Mb(12,"li"),c.ic(13,"Docs"),c.Lb(),c.Mb(14,"li"),c.ic(15,"Tests"),c.Lb(),c.Mb(16,"li"),c.ic(17,"Mocks"),c.Lb(),c.Lb(),c.Lb()),2&n){const n=c.Vb().$implicit;c.xb(2),c.jc(n)}}function L(n,e){if(1&n&&(c.Kb(0),c.gc(1,M,18,1,"div",1),c.Jb()),2&n){const n=e.index;c.xb(1),c.Yb("ngSwitchCase",n+2)}}function p(n,e){1&n&&(c.Mb(0,"div",14),c.Mb(1,"h3"),c.ic(2,"REST API"),c.Lb(),c.Mb(3,"ul",16),c.Mb(4,"li"),c.ic(5,"API server"),c.Lb(),c.Mb(6,"li"),c.ic(7,"Models"),c.Lb(),c.Mb(8,"li"),c.ic(9,"Validation"),c.Lb(),c.Mb(10,"li"),c.ic(11,"Docs"),c.Lb(),c.Mb(12,"li"),c.ic(13,"Tests"),c.Lb(),c.Mb(14,"li"),c.ic(15,"Mocks"),c.Lb(),c.Lb(),c.Lb())}function h(n,e){1&n&&(c.Mb(0,"div",14),c.Mb(1,"h3"),c.ic(2,"Duplication in 4 or 5 languages"),c.Lb(),c.Mb(3,"p"),c.ic(4,"Maintaining this orthogonality is straightforward\u2026 albeit error prone."),c.Lb(),c.Lb())}function m(n,e){1&n&&(c.Mb(0,"h3"),c.ic(1,"Solution 0"),c.Lb(),c.Mb(2,"p"),c.ic(3,"Write in one language and framework."),c.Lb())}function v(n,e){1&n&&c.Ib(0)}function x(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,v,1,0,"ng-container",17),c.Mb(2,"p"),c.ic(3,"Examples: older PHP frameworks, Rails, Django."),c.Lb(),c.Mb(4,"div",18),c.Mb(5,"a",19),c.ic(6,"Advantages"),c.Lb(),c.Mb(7,"a",20),c.ic(8,"Disadvantages"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(8);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function S(n,e){1&n&&c.Ib(0)}function w(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,S,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Advantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"One codebase (very DRY)"),c.Lb(),c.Mb(7,"li"),c.ic(8,"One language (or at least, language injection into HTML templates)"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Testing of backend and frontend can be done once, and without mocks"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(8);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function k(n,e){1&n&&c.Ib(0)}function C(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,k,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Disadvantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"Templates cannot generally be deployed onto the CDN"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Offline mode is generally not available"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Scalability is negatively affected"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(8);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function Y(n,e){1&n&&(c.Mb(0,"h3"),c.ic(1,"Solution 1"),c.Lb(),c.Mb(2,"p"),c.ic(3,"Two codebases (frontend, backend), but one "),c.Mb(4,"em"),c.ic(5,"lingua-franca"),c.Lb(),c.ic(6," language."),c.Lb())}function O(n,e){1&n&&c.Ib(0)}function y(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,O,1,0,"ng-container",17),c.Mb(2,"p"),c.ic(3,"Examples:"),c.Lb(),c.Mb(4,"ul",16),c.Mb(5,"li"),c.ic(6,"C#: Xamarin with ASP.NET Web API;"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Dart: Flutter and "),c.Mb(9,"code"),c.ic(10,"dart::io"),c.Lb(),c.ic(11,";"),c.Lb(),c.Mb(12,"li"),c.ic(13,"Java: Google Web Toolkit (GWT) and Spring"),c.Lb(),c.Mb(14,"li"),c.ic(15,"PHP: PHP templates and Laravel"),c.Lb(),c.Mb(16,"li"),c.ic(17,"JavaScript (and/or compile-to-JavaScript): [frameworks: Angular, React, Vue] HTML and Node.js"),c.Lb(),c.Lb(),c.Mb(18,"div",18),c.Mb(19,"a",21),c.ic(20,"Advantages"),c.Lb(),c.Mb(21,"a",22),c.ic(22,"Disadvantages"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(13);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function D(n,e){1&n&&c.Ib(0)}function T(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,D,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Advantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"One language, so can share knowledge, libraries, and developer tooling"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Testing can [sometimes] be done without mocks"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Removes quirks around language differences, e.g., regular expressions"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(13);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function A(n,e){1&n&&c.Ib(0)}function I(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,A,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Disadvantages"),c.Lb(),c.Mb(4,"ul",23),c.Mb(5,"li"),c.ic(6,"Non-standard (not using vendor-recommended approach)"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Debugging is more difficult"),c.Mb(9,"sup"),c.ic(10,"\u2020"),c.Lb(),c.Lb(),c.Mb(11,"li"),c.ic(12,"Offline mode and performance are impacted"),c.Mb(13,"sup"),c.ic(14,"\u2020"),c.Lb(),c.ic(15," with performance impact for web-native languages when packages as native app "),c.Lb(),c.Lb(),c.Mb(16,"p",24),c.Mb(17,"sup"),c.ic(18,"\u2020"),c.Lb(),c.Mb(19,"em"),c.ic(20,"for non web-native languages"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(13);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function P(n,e){1&n&&(c.Mb(0,"h3"),c.ic(1,"Solution 2"),c.Lb(),c.Mb(2,"p"),c.ic(3,"Vendor-specific languages for each frontend and decoupled backend, but shared library for API, models, and validation."),c.Lb())}function F(n,e){1&n&&c.Ib(0)}function V(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,F,1,0,"ng-container",17),c.Mb(2,"p"),c.ic(3,"Examples:"),c.Lb(),c.Mb(4,"ul",16),c.Mb(5,"li"),c.ic(6,"Protocol Buffers and FlatBuffers from Google;"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Cap\u2019n Proto;"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Thrift and Arvo from Apache;"),c.Lb(),c.Mb(11,"li"),c.ic(12,"WSDL and SOAP standard complying implementations (Microsoft & others)"),c.Lb(),c.Mb(13,"li"),c.ic(14,"FFI"),c.Lb(),c.Lb(),c.Mb(15,"div",18),c.Mb(16,"a",25),c.ic(17,"Advantages"),c.Lb(),c.Mb(18,"a",26),c.ic(19,"Disadvantages"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(18);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function _(n,e){1&n&&(c.Mb(0,"a",27),c.Hb(1,"img",28),c.Lb()),2&n&&(c.xb(1),c.Yb("title","Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit."))}function E(n,e){1&n&&c.Ib(0)}function J(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,E,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Advantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"Single source of truth (SSOT)"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Dynamism (can be setup so that when SSOT changes, all frontends and backends change)"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Compression, pipelining and other efficiency gains"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(18);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function H(n,e){1&n&&c.Ib(0)}function N(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,H,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Disadvantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"Non-standard, non-vendor recommended (or each vendor recommends a different one)\u2026 impacting team training also "),c.Lb(),c.Mb(7,"li"),c.ic(8,"Difficult to debug"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Difficult to test"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(18);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function R(n,e){1&n&&(c.Mb(0,"h3"),c.ic(1,"Solution 3"),c.Lb(),c.Mb(2,"p"),c.ic(3,"Vendor-specific languages for each frontend and decoupled backend."),c.Lb())}function B(n,e){1&n&&c.Ib(0)}function U(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,B,1,0,"ng-container",17),c.Mb(2,"p"),c.ic(3,"Examples:"),c.Lb(),c.Mb(4,"ul",16),c.Mb(5,"li"),c.ic(6,"C++ for desktop;"),c.Lb(),c.Mb(7,"li"),c.ic(8,"JavaScript for web;"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Rust for backend;"),c.Lb(),c.Mb(11,"li"),c.ic(12,"Swift for iOS"),c.Lb(),c.Mb(13,"li"),c.ic(14,"Java for Android"),c.Lb(),c.Lb(),c.Mb(15,"div",18),c.Mb(16,"a",25),c.ic(17,"Advantages"),c.Lb(),c.Mb(18,"a",26),c.ic(19,"Disadvantages"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(24);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function W(n,e){1&n&&c.Ib(0)}function G(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,W,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Advantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"Right tool for right job: standard vendor-specific language. E.g., hire any Android dev and they will know how to write the app in Java. "),c.Lb(),c.Mb(7,"li"),c.ic(8,"Performance"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Granularity of features, e.g., peripheral devices, offline mode, compression &etc."),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(24);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function K(n,e){1&n&&c.Ib(0)}function j(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,K,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Disadvantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"Duplication"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Time and complexity of maintaining duplication"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Language and toolchain knowledge requirement and transition effort"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(24);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function z(n,e){1&n&&(c.Mb(0,"div",14),c.Mb(1,"h1"),c.ic(2,"Compiler Driven Development (CDD)"),c.Lb(),c.Lb())}function X(n,e){1&n&&(c.Mb(0,"div",14),c.Mb(1,"h4"),c.ic(2,"What is CDD?"),c.Lb(),c.Mb(3,"p"),c.ic(4,"A series of compilers\u2014and methodology for creating new compilers\u2014that traverses the Abstract Syntax Tree (AST) of each language, and translates across:"),c.Lb(),c.Mb(5,"ul",16),c.Mb(6,"li"),c.ic(7,"API client|server"),c.Lb(),c.Mb(8,"li"),c.ic(9,"models"),c.Lb(),c.Mb(10,"li"),c.ic(11,"validation"),c.Lb(),c.Mb(12,"li"),c.ic(13,"docs"),c.Lb(),c.Mb(14,"li"),c.ic(15,"tests and mocks"),c.Lb(),c.Lb(),c.Lb())}function q(n,e){1&n&&(c.Mb(0,"h3"),c.ic(1,"Compiler Driven Development (CDD)"),c.Lb(),c.Mb(2,"p"),c.ic(3,"Automated changes for vendor-specific languages for each frontend and decoupled backend."),c.Lb())}function Z(n,e){1&n&&c.Ib(0)}function $(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,Z,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Advantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"Conceivable to maintain "),c.Mb(7,"strong"),c.ic(8,"100% test coverage"),c.Lb(),c.Lb(),c.Mb(9,"li"),c.ic(10,"Speedup making changes across language boundaries (e.g., adding a property to a model is "),c.Mb(11,"strong"),c.ic(12,"36\xd7 faster"),c.Lb(),c.ic(13,") "),c.Lb(),c.Mb(14,"li"),c.ic(15,"All the advantages of native development (e.g., see "),c.Mb(16,"a",29),c.ic(17,"slide 19"),c.Lb(),c.ic(18,")"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(31);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function Q(n,e){1&n&&c.Ib(0)}function nn(n,e){if(1&n&&(c.Mb(0,"div",14),c.gc(1,Q,1,0,"ng-container",17),c.Mb(2,"h4"),c.ic(3,"Disadvantages"),c.Lb(),c.Mb(4,"ul"),c.Mb(5,"li"),c.ic(6,"Time to write each compiler"),c.Lb(),c.Mb(7,"li"),c.ic(8,"Time to develop for each design pattern, paradigm, and directory structure"),c.Lb(),c.Mb(9,"li"),c.ic(10,"Institutional inertia"),c.Lb(),c.Lb(),c.Lb()),2&n){c.Vb();const n=c.bc(31);c.xb(1),c.Yb("ngTemplateOutlet",n)}}function en(n,e){1&n&&(c.Mb(0,"div",14),c.Mb(1,"h3"),c.ic(2,"CDD demo"),c.Lb(),c.Mb(3,"code"),c.ic(4,"TODO: Embed web IDE here"),c.Lb(),c.Lb())}const tn=function(){return["iOS: Swift","Android: Java","Android: Kotlin","web: TypeScript"]};let bn=(()=>{class n extends s{ngAfterContentInit(){this.totalSlides=30}}return n.\u0275fac=function(e){return cn(e||n)},n.\u0275cmp=c.Ab({type:n,selectors:[["app-feb2020-1"]],features:[c.ub],decls:42,vars:26,consts:[[3,"ngSwitch"],["class","slide",4,"ngSwitchCase"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram",4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["solution0",""],["solution1",""],["solution2",""],["href","https://xkcd.com/927/","target","_blank",4,"ngSwitchCase"],["solution3",""],["solution4",""],["fxLayout","row","fxLayoutGap","20px",2,"width","80px","background","transparent","border","none"],["fxFlex","",1,"trans-button",2,"font-size","20px",3,"click"],["fxFlex","",1,"trans-button",2,"height","5px","width","5px",3,"click"],[2,"height","5px","width","5px",3,"src"],[1,"slide"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram"],["ngStyle.lt-lg","column-count: 1","ngStyle.gt-sm","column-count: 3"],[4,"ngTemplateOutlet"],["fxLayout","row"],["routerLink",".","fragment","9","fxFlex",""],["routerLink",".","fragment","10","fxFlex",""],["routerLink",".","fragment","12","fxFlex",""],["routerLink",".","fragment","13","fxFlex",""],[2,"margin-bottom","0"],[2,"margin-top","0"],["routerLink",".","fragment","16","fxFlex",""],["routerLink",".","fragment","17","fxFlex",""],["href","https://xkcd.com/927/","target","_blank"],["src","//imgs.xkcd.com/comics/standards.png","alt","Standards",2,"width","50%",3,"title"],["routerLink",".","fragment","19"]],template:function(n,e){1&n&&(c.Hb(0,"app-navbar"),c.Kb(1,0),c.gc(2,u,5,0,"div",1),c.gc(3,f,1,0,"img",2),c.gc(4,L,2,1,"ng-container",3),c.gc(5,p,16,0,"div",1),c.gc(6,h,5,0,"div",1),c.gc(7,m,4,0,"ng-template",null,4,c.hc),c.gc(9,x,9,1,"div",1),c.gc(10,w,11,1,"div",1),c.gc(11,C,11,1,"div",1),c.gc(12,Y,7,0,"ng-template",null,5,c.hc),c.gc(14,y,23,1,"div",1),c.gc(15,T,11,1,"div",1),c.gc(16,I,21,1,"div",1),c.gc(17,P,4,0,"ng-template",null,6,c.hc),c.gc(19,V,20,1,"div",1),c.gc(20,_,2,1,"a",7),c.gc(21,J,11,1,"div",1),c.gc(22,N,11,1,"div",1),c.gc(23,R,4,0,"ng-template",null,8,c.hc),c.gc(25,U,20,1,"div",1),c.gc(26,G,11,1,"div",1),c.gc(27,j,11,1,"div",1),c.gc(28,z,3,0,"div",1),c.gc(29,X,16,0,"div",1),c.gc(30,q,4,0,"ng-template",null,9,c.hc),c.gc(32,$,19,1,"div",1),c.gc(33,nn,11,1,"div",1),c.gc(34,en,5,0,"div",1),c.Jb(),c.Mb(35,"div",10),c.Mb(36,"button",11),c.Tb("click",(function(){return e.prev()})),c.ic(37," \u2190 "),c.Lb(),c.Mb(38,"button",11),c.Tb("click",(function(){return e.next()})),c.ic(39," \u2192 "),c.Lb(),c.Mb(40,"button",12),c.Tb("click",(function(){return e.toggleFullScreen()})),c.Hb(41,"app-svg-viewer",13),c.Lb(),c.Lb()),2&n&&(c.xb(1),c.Yb("ngSwitch",e.currentSlide),c.xb(1),c.Yb("ngSwitchCase",0),c.xb(1),c.Yb("ngSwitchCase",1),c.xb(1),c.Yb("ngForOf",c.Zb(25,tn)),c.xb(1),c.Yb("ngSwitchCase",6),c.xb(1),c.Yb("ngSwitchCase",7),c.xb(3),c.Yb("ngSwitchCase",8),c.xb(1),c.Yb("ngSwitchCase",9),c.xb(1),c.Yb("ngSwitchCase",10),c.xb(3),c.Yb("ngSwitchCase",11),c.xb(1),c.Yb("ngSwitchCase",12),c.xb(1),c.Yb("ngSwitchCase",13),c.xb(3),c.Yb("ngSwitchCase",14),c.xb(1),c.Yb("ngSwitchCase",15),c.xb(1),c.Yb("ngSwitchCase",16),c.xb(1),c.Yb("ngSwitchCase",17),c.xb(3),c.Yb("ngSwitchCase",18),c.xb(1),c.Yb("ngSwitchCase",19),c.xb(1),c.Yb("ngSwitchCase",20),c.xb(1),c.Yb("ngSwitchCase",21),c.xb(1),c.Yb("ngSwitchCase",22),c.xb(3),c.Yb("ngSwitchCase",23),c.xb(1),c.Yb("ngSwitchCase",24),c.xb(1),c.Yb("ngSwitchCase",25),c.xb(7),c.Yb("src",e.isFullScreen()?"/assets/fullscreen-24px.svg":"/assets/fullscreen_exit-24px.svg"))},directives:[a.a,t.l,t.m,t.i,l.d,l.e,l.b,g.a,d.b,t.n,b.c],styles:["div[_ngcontent-%COMP%]{padding:20px}ul.div[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;padding-top:0}.slide[_ngcontent-%COMP%]{font-size:300%}.trans-button[_ngcontent-%COMP%]{background:transparent;border:none}"]}),n})();const cn=c.Nb(bn),an=[{path:"",component:r},{path:"2020-02",component:bn}];var on=i("/NTo"),rn=i("hXKo"),sn=i("YUcS");let ln=(()=>{class n{}return n.\u0275mod=c.Eb({type:n}),n.\u0275inj=c.Db({factory:function(e){return new(e||n)},imports:[[t.b,b.d.forChild(an),on.a,rn.a,sn.a]]}),n})()}}]);