(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rNYC:function(n,e,t){"use strict";t.r(e),t.d(e,"PresentationsModule",function(){return ln});var i=t("ofXK"),c=t("tyNb"),b=t("fXoL"),a=t("kWWo");const o=function(){return["/","presentations","2020-02"]};let r=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=b.Bb({type:n,selectors:[["app-presentations"]],decls:4,vars:2,consts:[["fragment","0",3,"routerLink"]],template:function(n,e){1&n&&(b.Ib(0,"app-navbar"),b.Nb(1,"h1"),b.Nb(2,"a",0),b.jc(3,"2020-02"),b.Mb(),b.Mb()),2&n&&(b.yb(2),b.Zb("routerLink",b.ac(1,o)))},directives:[a.a,c.c],styles:[""]}),n})(),s=(()=>{class n{constructor(n,e){this.router=n,this.route=e}get totalSlides(){return this._totalSlides}set totalSlides(n){this._totalSlides=n-1}getIncrementSlideNumber(){return this._totalSlides+=1,this._totalSlides}isFullScreen(){return!document.fullscreenElement}toggleFullScreen(){this.isFullScreen()?document.documentElement.requestFullscreen():null!=document.exitFullscreen&&document.exitFullscreen().catch(console.error)}ngOnInit(){this.route.fragment.subscribe(n=>this.currentSlide=null==n?0:parseInt(n,10))}navigate(){const n=this.router.parseUrl(this.router.url);n.fragment=this.currentSlide.toString(),this.router.navigateByUrl(n).catch(console.error)}prev(){this.currentSlide<1||(this.currentSlide--,this.navigate())}next(){this.totalSlides!==this.currentSlide&&(this.currentSlide++,this.navigate())}keyEvent(n){if(!(null!=this.noKeyBindSlides&&this.noKeyBindSlides.indexOf(this.currentSlide)>-1))switch(n.key){case"Down":case"ArrowDown":case"Right":case"ArrowRight":return this.next();case"Up":case"ArrowUp":case"Left":case"ArrowLeft":return this.prev();case"f":return this.toggleFullScreen()}}}return n.\u0275fac=function(e){return new(e||n)(b.Hb(c.b),b.Hb(c.a))},n.\u0275cmp=b.Bb({type:n,selectors:[["app-slides"]],hostBindings:function(n,e){1&n&&b.Ub("keyup",function(n){return e.keyEvent(n)},!1,b.dc)},decls:2,vars:0,template:function(n,e){1&n&&(b.Nb(0,"p"),b.jc(1,"slides works!"),b.Mb())},styles:[""]}),n})();var l=t("XiUz"),d=t("M9y9"),u=t("znSr");function g(n,e){1&n&&(b.Nb(0,"div",14),b.Nb(1,"h3"),b.jc(2,"Feb 2020 presentation"),b.Mb(),b.Nb(3,"p"),b.jc(4,"Samuel Marks, for Offscale.io"),b.Mb(),b.Mb())}function h(n,e){1&n&&b.Ib(0,"img",15)}function f(n,e){if(1&n&&(b.Nb(0,"div",14),b.Nb(1,"h3"),b.jc(2),b.Mb(),b.Nb(3,"ul",16),b.Nb(4,"li"),b.jc(5,"API client"),b.Mb(),b.Nb(6,"li"),b.jc(7,"Models"),b.Mb(),b.Nb(8,"li"),b.jc(9,"Validation"),b.Mb(),b.Nb(10,"li"),b.jc(11,"Views"),b.Mb(),b.Nb(12,"li"),b.jc(13,"Docs"),b.Mb(),b.Nb(14,"li"),b.jc(15,"Tests"),b.Mb(),b.Nb(16,"li"),b.jc(17,"Mocks"),b.Mb(),b.Mb(),b.Mb()),2&n){const n=b.Wb().$implicit;b.yb(2),b.kc(n)}}function M(n,e){if(1&n&&(b.Lb(0),b.hc(1,f,18,1,"div",1),b.Kb()),2&n){const n=e.index;b.yb(1),b.Zb("ngSwitchCase",n+2)}}function N(n,e){1&n&&(b.Nb(0,"div",14),b.Nb(1,"h3"),b.jc(2,"REST API"),b.Mb(),b.Nb(3,"ul",16),b.Nb(4,"li"),b.jc(5,"API server"),b.Mb(),b.Nb(6,"li"),b.jc(7,"Models"),b.Mb(),b.Nb(8,"li"),b.jc(9,"Validation"),b.Mb(),b.Nb(10,"li"),b.jc(11,"Docs"),b.Mb(),b.Nb(12,"li"),b.jc(13,"Tests"),b.Mb(),b.Nb(14,"li"),b.jc(15,"Mocks"),b.Mb(),b.Mb(),b.Mb())}function p(n,e){1&n&&(b.Nb(0,"div",14),b.Nb(1,"h3"),b.jc(2,"Duplication in 4 or 5 languages"),b.Mb(),b.Nb(3,"p"),b.jc(4,"Maintaining this orthogonality is straightforward\u2026 albeit error prone."),b.Mb(),b.Mb())}function m(n,e){1&n&&(b.Nb(0,"h3"),b.jc(1,"Solution 0"),b.Mb(),b.Nb(2,"p"),b.jc(3,"Write in one language and framework."),b.Mb())}function v(n,e){1&n&&b.Jb(0)}function j(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,v,1,0,"ng-container",17),b.Nb(2,"p"),b.jc(3,"Examples: older PHP frameworks, Rails, Django."),b.Mb(),b.Nb(4,"div",18),b.Nb(5,"a",19),b.jc(6,"Advantages"),b.Mb(),b.Nb(7,"a",20),b.jc(8,"Disadvantages"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(8);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function S(n,e){1&n&&b.Jb(0)}function y(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,S,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Advantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"One codebase (very DRY)"),b.Mb(),b.Nb(7,"li"),b.jc(8,"One language (or at least, language injection into HTML templates)"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Testing of backend and frontend can be done once, and without mocks"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(8);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function w(n,e){1&n&&b.Jb(0)}function k(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,w,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Disadvantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"Templates cannot generally be deployed onto the CDN"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Offline mode is generally not available"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Scalability is negatively affected"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(8);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function C(n,e){1&n&&(b.Nb(0,"h3"),b.jc(1,"Solution 1"),b.Mb(),b.Nb(2,"p"),b.jc(3,"Two codebases (frontend, backend), but one "),b.Nb(4,"em"),b.jc(5,"lingua-franca"),b.Mb(),b.jc(6," language."),b.Mb())}function x(n,e){1&n&&b.Jb(0)}function O(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,x,1,0,"ng-container",17),b.Nb(2,"p"),b.jc(3,"Examples:"),b.Mb(),b.Nb(4,"ul",16),b.Nb(5,"li"),b.jc(6,"C#: Xamarin with ASP.NET Web API;"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Dart: Flutter and "),b.Nb(9,"code"),b.jc(10,"dart::io"),b.Mb(),b.jc(11,";"),b.Mb(),b.Nb(12,"li"),b.jc(13,"Java: Google Web Toolkit (GWT) and Spring"),b.Mb(),b.Nb(14,"li"),b.jc(15,"PHP: PHP templates and Laravel"),b.Mb(),b.Nb(16,"li"),b.jc(17,"JavaScript (and/or compile-to-JavaScript): [frameworks: Angular, React, Vue] HTML and Node.js"),b.Mb(),b.Mb(),b.Nb(18,"div",18),b.Nb(19,"a",21),b.jc(20,"Advantages"),b.Mb(),b.Nb(21,"a",22),b.jc(22,"Disadvantages"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(13);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function D(n,e){1&n&&b.Jb(0)}function Z(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,D,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Advantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"One language, so can share knowledge, libraries, and developer tooling"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Testing can [sometimes] be done without mocks"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Removes quirks around language differences, e.g., regular expressions"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(13);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function T(n,e){1&n&&b.Jb(0)}function A(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,T,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Disadvantages"),b.Mb(),b.Nb(4,"ul",23),b.Nb(5,"li"),b.jc(6,"Non-standard (not using vendor-recommended approach)"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Debugging is more difficult"),b.Nb(9,"sup"),b.jc(10,"\u2020"),b.Mb(),b.Mb(),b.Nb(11,"li"),b.jc(12,"Offline mode and performance are impacted"),b.Nb(13,"sup"),b.jc(14,"\u2020"),b.Mb(),b.jc(15," with performance impact for web-native languages when packages as native app "),b.Mb(),b.Mb(),b.Nb(16,"p",24),b.Nb(17,"sup"),b.jc(18,"\u2020"),b.Mb(),b.Nb(19,"em"),b.jc(20,"for non web-native languages"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(13);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function P(n,e){1&n&&(b.Nb(0,"h3"),b.jc(1,"Solution 2"),b.Mb(),b.Nb(2,"p"),b.jc(3,"Vendor-specific languages for each frontend and decoupled backend, but shared library for API, models, and validation."),b.Mb())}function F(n,e){1&n&&b.Jb(0)}function J(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,F,1,0,"ng-container",17),b.Nb(2,"p"),b.jc(3,"Examples:"),b.Mb(),b.Nb(4,"ul",16),b.Nb(5,"li"),b.jc(6,"Protocol Buffers and FlatBuffers from Google;"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Cap\u2019n Proto;"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Thrift and Arvo from Apache;"),b.Mb(),b.Nb(11,"li"),b.jc(12,"WSDL and SOAP standard complying implementations (Microsoft & others)"),b.Mb(),b.Nb(13,"li"),b.jc(14,"FFI"),b.Mb(),b.Mb(),b.Nb(15,"div",18),b.Nb(16,"a",25),b.jc(17,"Advantages"),b.Mb(),b.Nb(18,"a",26),b.jc(19,"Disadvantages"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(18);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function W(n,e){1&n&&(b.Nb(0,"a",27),b.Ib(1,"img",28),b.Mb()),2&n&&(b.yb(1),b.Zb("title","Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit."))}function L(n,e){1&n&&b.Jb(0)}function I(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,L,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Advantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"Single source of truth (SSOT)"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Dynamism (can be setup so that when SSOT changes, all frontends and backends change)"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Compression, pipelining and other efficiency gains"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(18);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function _(n,e){1&n&&b.Jb(0)}function E(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,_,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Disadvantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"Non-standard, non-vendor recommended (or each vendor recommends a different one)\u2026 impacting team training also "),b.Mb(),b.Nb(7,"li"),b.jc(8,"Difficult to debug"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Difficult to test"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(18);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function U(n,e){1&n&&(b.Nb(0,"h3"),b.jc(1,"Solution 3"),b.Mb(),b.Nb(2,"p"),b.jc(3,"Vendor-specific languages for each frontend and decoupled backend."),b.Mb())}function B(n,e){1&n&&b.Jb(0)}function R(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,B,1,0,"ng-container",17),b.Nb(2,"p"),b.jc(3,"Examples:"),b.Mb(),b.Nb(4,"ul",16),b.Nb(5,"li"),b.jc(6,"C++ for desktop;"),b.Mb(),b.Nb(7,"li"),b.jc(8,"JavaScript for web;"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Rust for backend;"),b.Mb(),b.Nb(11,"li"),b.jc(12,"Swift for iOS"),b.Mb(),b.Nb(13,"li"),b.jc(14,"Java for Android"),b.Mb(),b.Mb(),b.Nb(15,"div",18),b.Nb(16,"a",25),b.jc(17,"Advantages"),b.Mb(),b.Nb(18,"a",26),b.jc(19,"Disadvantages"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(24);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function H(n,e){1&n&&b.Jb(0)}function K(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,H,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Advantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"Right tool for right job: standard vendor-specific language. E.g., hire any Android dev and they will know how to write the app in Java. "),b.Mb(),b.Nb(7,"li"),b.jc(8,"Performance"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Granularity of features, e.g., peripheral devices, offline mode, compression &etc."),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(24);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function V(n,e){1&n&&b.Jb(0)}function z(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,V,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Disadvantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"Duplication"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Time and complexity of maintaining duplication"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Language and toolchain knowledge requirement and transition effort"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(24);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function G(n,e){1&n&&(b.Nb(0,"div",14),b.Nb(1,"h1"),b.jc(2,"Compiler Driven Development (CDD)"),b.Mb(),b.Mb())}function X(n,e){1&n&&(b.Nb(0,"div",14),b.Nb(1,"h4"),b.jc(2,"What is CDD?"),b.Mb(),b.Nb(3,"p"),b.jc(4,"A series of compilers\u2014and methodology for creating new compilers\u2014that traverses the Abstract Syntax Tree (AST) of each language, and translates across:"),b.Mb(),b.Nb(5,"ul",16),b.Nb(6,"li"),b.jc(7,"API client|server"),b.Mb(),b.Nb(8,"li"),b.jc(9,"models"),b.Mb(),b.Nb(10,"li"),b.jc(11,"validation"),b.Mb(),b.Nb(12,"li"),b.jc(13,"docs"),b.Mb(),b.Nb(14,"li"),b.jc(15,"tests and mocks"),b.Mb(),b.Mb(),b.Mb())}function q(n,e){1&n&&(b.Nb(0,"h3"),b.jc(1,"Compiler Driven Development (CDD)"),b.Mb(),b.Nb(2,"p"),b.jc(3,"Automated changes for vendor-specific languages for each frontend and decoupled backend."),b.Mb())}function Y(n,e){1&n&&b.Jb(0)}function $(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,Y,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Advantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"Conceivable to maintain "),b.Nb(7,"strong"),b.jc(8,"100% test coverage"),b.Mb(),b.Mb(),b.Nb(9,"li"),b.jc(10,"Speedup making changes across language boundaries (e.g., adding a property to a model is "),b.Nb(11,"strong"),b.jc(12,"36\xd7 faster"),b.Mb(),b.jc(13,") "),b.Mb(),b.Nb(14,"li"),b.jc(15,"All the advantages of native development (e.g., see "),b.Nb(16,"a",29),b.jc(17,"slide 19"),b.Mb(),b.jc(18,")"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(31);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function Q(n,e){1&n&&b.Jb(0)}function nn(n,e){if(1&n&&(b.Nb(0,"div",14),b.hc(1,Q,1,0,"ng-container",17),b.Nb(2,"h4"),b.jc(3,"Disadvantages"),b.Mb(),b.Nb(4,"ul"),b.Nb(5,"li"),b.jc(6,"Time to write each compiler"),b.Mb(),b.Nb(7,"li"),b.jc(8,"Time to develop for each design pattern, paradigm, and directory structure"),b.Mb(),b.Nb(9,"li"),b.jc(10,"Institutional inertia"),b.Mb(),b.Mb(),b.Mb()),2&n){b.Wb();const n=b.cc(31);b.yb(1),b.Zb("ngTemplateOutlet",n)}}function en(n,e){1&n&&(b.Nb(0,"div",14),b.Nb(1,"h3"),b.jc(2,"CDD demo"),b.Mb(),b.Nb(3,"code"),b.jc(4,"TODO: Embed web IDE here"),b.Mb(),b.Mb())}const tn=function(){return["iOS: Swift","Android: Java","Android: Kotlin","web: TypeScript"]};let cn=(()=>{class n extends s{ngAfterContentInit(){this.totalSlides=30}}return n.\u0275fac=function(e){return bn(e||n)},n.\u0275cmp=b.Bb({type:n,selectors:[["app-feb2020-1"]],features:[b.vb],decls:42,vars:26,consts:[[3,"ngSwitch"],["class","slide",4,"ngSwitchCase"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram",4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["solution0",""],["solution1",""],["solution2",""],["href","https://xkcd.com/927/","target","_blank",4,"ngSwitchCase"],["solution3",""],["solution4",""],["fxLayout","row","fxLayoutGap","20px",2,"width","80px","background","transparent","border","none"],["fxFlex","",1,"trans-button",2,"font-size","20px",3,"click"],["fxFlex","",1,"trans-button",2,"height","5px","width","5px",3,"click"],[2,"height","5px","width","5px",3,"src"],[1,"slide"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram"],["ngStyle.lt-lg","column-count: 1","ngStyle.gt-sm","column-count: 3"],[4,"ngTemplateOutlet"],["fxLayout","row"],["routerLink",".","fragment","9","fxFlex",""],["routerLink",".","fragment","10","fxFlex",""],["routerLink",".","fragment","12","fxFlex",""],["routerLink",".","fragment","13","fxFlex",""],[2,"margin-bottom","0"],[2,"margin-top","0"],["routerLink",".","fragment","16","fxFlex",""],["routerLink",".","fragment","17","fxFlex",""],["href","https://xkcd.com/927/","target","_blank"],["src","//imgs.xkcd.com/comics/standards.png","alt","Standards",2,"width","50%",3,"title"],["routerLink",".","fragment","19"]],template:function(n,e){1&n&&(b.Ib(0,"app-navbar"),b.Lb(1,0),b.hc(2,g,5,0,"div",1),b.hc(3,h,1,0,"img",2),b.hc(4,M,2,1,"ng-container",3),b.hc(5,N,16,0,"div",1),b.hc(6,p,5,0,"div",1),b.hc(7,m,4,0,"ng-template",null,4,b.ic),b.hc(9,j,9,1,"div",1),b.hc(10,y,11,1,"div",1),b.hc(11,k,11,1,"div",1),b.hc(12,C,7,0,"ng-template",null,5,b.ic),b.hc(14,O,23,1,"div",1),b.hc(15,Z,11,1,"div",1),b.hc(16,A,21,1,"div",1),b.hc(17,P,4,0,"ng-template",null,6,b.ic),b.hc(19,J,20,1,"div",1),b.hc(20,W,2,1,"a",7),b.hc(21,I,11,1,"div",1),b.hc(22,E,11,1,"div",1),b.hc(23,U,4,0,"ng-template",null,8,b.ic),b.hc(25,R,20,1,"div",1),b.hc(26,K,11,1,"div",1),b.hc(27,z,11,1,"div",1),b.hc(28,G,3,0,"div",1),b.hc(29,X,16,0,"div",1),b.hc(30,q,4,0,"ng-template",null,9,b.ic),b.hc(32,$,19,1,"div",1),b.hc(33,nn,11,1,"div",1),b.hc(34,en,5,0,"div",1),b.Kb(),b.Nb(35,"div",10),b.Nb(36,"button",11),b.Ub("click",function(){return e.prev()}),b.jc(37," \u2190 "),b.Mb(),b.Nb(38,"button",11),b.Ub("click",function(){return e.next()}),b.jc(39," \u2192 "),b.Mb(),b.Nb(40,"button",12),b.Ub("click",function(){return e.toggleFullScreen()}),b.Ib(41,"app-svg-viewer",13),b.Mb(),b.Mb()),2&n&&(b.yb(1),b.Zb("ngSwitch",e.currentSlide),b.yb(1),b.Zb("ngSwitchCase",0),b.yb(1),b.Zb("ngSwitchCase",1),b.yb(1),b.Zb("ngForOf",b.ac(25,tn)),b.yb(1),b.Zb("ngSwitchCase",6),b.yb(1),b.Zb("ngSwitchCase",7),b.yb(3),b.Zb("ngSwitchCase",8),b.yb(1),b.Zb("ngSwitchCase",9),b.yb(1),b.Zb("ngSwitchCase",10),b.yb(3),b.Zb("ngSwitchCase",11),b.yb(1),b.Zb("ngSwitchCase",12),b.yb(1),b.Zb("ngSwitchCase",13),b.yb(3),b.Zb("ngSwitchCase",14),b.yb(1),b.Zb("ngSwitchCase",15),b.yb(1),b.Zb("ngSwitchCase",16),b.yb(1),b.Zb("ngSwitchCase",17),b.yb(3),b.Zb("ngSwitchCase",18),b.yb(1),b.Zb("ngSwitchCase",19),b.yb(1),b.Zb("ngSwitchCase",20),b.yb(1),b.Zb("ngSwitchCase",21),b.yb(1),b.Zb("ngSwitchCase",22),b.yb(3),b.Zb("ngSwitchCase",23),b.yb(1),b.Zb("ngSwitchCase",24),b.yb(1),b.Zb("ngSwitchCase",25),b.yb(7),b.Zb("src",e.isFullScreen()?"/assets/fullscreen-24px.svg":"/assets/fullscreen_exit-24px.svg"))},directives:[a.a,i.l,i.m,i.i,l.d,l.e,l.b,d.a,u.b,i.n,c.c],styles:["div[_ngcontent-%COMP%]{padding:20px}ul.div[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;padding-top:0}.slide[_ngcontent-%COMP%]{font-size:300%}.trans-button[_ngcontent-%COMP%]{background:transparent;border:none}"]}),n})();const bn=b.Ob(cn),an=[{path:"",component:r},{path:"2020-02",component:cn}];var on=t("/NTo"),rn=t("hXKo"),sn=t("YUcS");let ln=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=b.Fb({type:n}),n.\u0275inj=b.Eb({imports:[[i.b,c.d.forChild(an),on.a,rn.a,sn.a]]}),n})()}}]);