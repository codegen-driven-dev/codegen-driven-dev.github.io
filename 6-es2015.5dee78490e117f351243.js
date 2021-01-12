(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rNYC:function(n,e,t){"use strict";t.r(e),t.d(e,"PresentationsModule",function(){return ln});var i=t("ofXK"),c=t("tyNb"),b=t("fXoL"),a=t("kWWo");const o=function(){return["/","presentations","2020-02"]};let r=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=b.zb({type:n,selectors:[["app-presentations"]],decls:4,vars:2,consts:[["fragment","0",3,"routerLink"]],template:function(n,e){1&n&&(b.Gb(0,"app-navbar"),b.Lb(1,"h1"),b.Lb(2,"a",0),b.hc(3,"2020-02"),b.Kb(),b.Kb()),2&n&&(b.wb(2),b.Xb("routerLink",b.Yb(1,o)))},directives:[a.a,c.c],styles:[""]}),n})(),s=(()=>{class n{constructor(n,e){this.router=n,this.route=e}get totalSlides(){return this._totalSlides}set totalSlides(n){this._totalSlides=n-1}getIncrementSlideNumber(){return this._totalSlides+=1,this._totalSlides}isFullScreen(){return!document.fullscreenElement}toggleFullScreen(){this.isFullScreen()?document.documentElement.requestFullscreen():null!=document.exitFullscreen&&document.exitFullscreen().catch(console.error)}ngOnInit(){this.route.fragment.subscribe(n=>this.currentSlide=null==n?0:parseInt(n,10))}navigate(){const n=this.router.parseUrl(this.router.url);n.fragment=this.currentSlide.toString(),this.router.navigateByUrl(n).catch(console.error)}prev(){this.currentSlide<1||(this.currentSlide--,this.navigate())}next(){this.totalSlides!==this.currentSlide&&(this.currentSlide++,this.navigate())}keyEvent(n){if(!(null!=this.noKeyBindSlides&&this.noKeyBindSlides.indexOf(this.currentSlide)>-1))switch(n.key){case"Down":case"ArrowDown":case"Right":case"ArrowRight":return this.next();case"Up":case"ArrowUp":case"Left":case"ArrowLeft":return this.prev();case"f":return this.toggleFullScreen()}}}return n.\u0275fac=function(e){return new(e||n)(b.Fb(c.b),b.Fb(c.a))},n.\u0275cmp=b.zb({type:n,selectors:[["app-slides"]],hostBindings:function(n,e){1&n&&b.Sb("keyup",function(n){return e.keyEvent(n)},!1,b.bc)},decls:2,vars:0,template:function(n,e){1&n&&(b.Lb(0,"p"),b.hc(1,"slides works!"),b.Kb())},styles:[""]}),n})();var l=t("XiUz"),h=t("M9y9"),d=t("znSr");function u(n,e){1&n&&(b.Lb(0,"div",14),b.Lb(1,"h3"),b.hc(2,"Feb 2020 presentation"),b.Kb(),b.Lb(3,"p"),b.hc(4,"Samuel Marks, for Offscale.io"),b.Kb(),b.Kb())}function g(n,e){1&n&&b.Gb(0,"img",15)}function f(n,e){if(1&n&&(b.Lb(0,"div",14),b.Lb(1,"h3"),b.hc(2),b.Kb(),b.Lb(3,"ul",16),b.Lb(4,"li"),b.hc(5,"API client"),b.Kb(),b.Lb(6,"li"),b.hc(7,"Models"),b.Kb(),b.Lb(8,"li"),b.hc(9,"Validation"),b.Kb(),b.Lb(10,"li"),b.hc(11,"Views"),b.Kb(),b.Lb(12,"li"),b.hc(13,"Docs"),b.Kb(),b.Lb(14,"li"),b.hc(15,"Tests"),b.Kb(),b.Lb(16,"li"),b.hc(17,"Mocks"),b.Kb(),b.Kb(),b.Kb()),2&n){const n=b.Ub().$implicit;b.wb(2),b.ic(n)}}function L(n,e){if(1&n&&(b.Jb(0),b.fc(1,f,18,1,"div",1),b.Ib()),2&n){const n=e.index;b.wb(1),b.Xb("ngSwitchCase",n+2)}}function p(n,e){1&n&&(b.Lb(0,"div",14),b.Lb(1,"h3"),b.hc(2,"REST API"),b.Kb(),b.Lb(3,"ul",16),b.Lb(4,"li"),b.hc(5,"API server"),b.Kb(),b.Lb(6,"li"),b.hc(7,"Models"),b.Kb(),b.Lb(8,"li"),b.hc(9,"Validation"),b.Kb(),b.Lb(10,"li"),b.hc(11,"Docs"),b.Kb(),b.Lb(12,"li"),b.hc(13,"Tests"),b.Kb(),b.Lb(14,"li"),b.hc(15,"Mocks"),b.Kb(),b.Kb(),b.Kb())}function K(n,e){1&n&&(b.Lb(0,"div",14),b.Lb(1,"h3"),b.hc(2,"Duplication in 4 or 5 languages"),b.Kb(),b.Lb(3,"p"),b.hc(4,"Maintaining this orthogonality is straightforward\u2026 albeit error prone."),b.Kb(),b.Kb())}function m(n,e){1&n&&(b.Lb(0,"h3"),b.hc(1,"Solution 0"),b.Kb(),b.Lb(2,"p"),b.hc(3,"Write in one language and framework."),b.Kb())}function v(n,e){1&n&&b.Hb(0)}function w(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,v,1,0,"ng-container",17),b.Lb(2,"p"),b.hc(3,"Examples: older PHP frameworks, Rails, Django."),b.Kb(),b.Lb(4,"div",18),b.Lb(5,"a",19),b.hc(6,"Advantages"),b.Kb(),b.Lb(7,"a",20),b.hc(8,"Disadvantages"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(8);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function S(n,e){1&n&&b.Hb(0)}function C(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,S,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Advantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"One codebase (very DRY)"),b.Kb(),b.Lb(7,"li"),b.hc(8,"One language (or at least, language injection into HTML templates)"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Testing of backend and frontend can be done once, and without mocks"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(8);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function k(n,e){1&n&&b.Hb(0)}function x(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,k,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Disadvantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"Templates cannot generally be deployed onto the CDN"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Offline mode is generally not available"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Scalability is negatively affected"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(8);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function X(n,e){1&n&&(b.Lb(0,"h3"),b.hc(1,"Solution 1"),b.Kb(),b.Lb(2,"p"),b.hc(3,"Two codebases (frontend, backend), but one "),b.Lb(4,"em"),b.hc(5,"lingua-franca"),b.Kb(),b.hc(6," language."),b.Kb())}function O(n,e){1&n&&b.Hb(0)}function y(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,O,1,0,"ng-container",17),b.Lb(2,"p"),b.hc(3,"Examples:"),b.Kb(),b.Lb(4,"ul",16),b.Lb(5,"li"),b.hc(6,"C#: Xamarin with ASP.NET Web API;"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Dart: Flutter and "),b.Lb(9,"code"),b.hc(10,"dart::io"),b.Kb(),b.hc(11,";"),b.Kb(),b.Lb(12,"li"),b.hc(13,"Java: Google Web Toolkit (GWT) and Spring"),b.Kb(),b.Lb(14,"li"),b.hc(15,"PHP: PHP templates and Laravel"),b.Kb(),b.Lb(16,"li"),b.hc(17,"JavaScript (and/or compile-to-JavaScript): [frameworks: Angular, React, Vue] HTML and Node.js"),b.Kb(),b.Kb(),b.Lb(18,"div",18),b.Lb(19,"a",21),b.hc(20,"Advantages"),b.Kb(),b.Lb(21,"a",22),b.hc(22,"Disadvantages"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(13);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function D(n,e){1&n&&b.Hb(0)}function T(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,D,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Advantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"One language, so can share knowledge, libraries, and developer tooling"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Testing can [sometimes] be done without mocks"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Removes quirks around language differences, e.g., regular expressions"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(13);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function A(n,e){1&n&&b.Hb(0)}function F(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,A,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Disadvantages"),b.Kb(),b.Lb(4,"ul",23),b.Lb(5,"li"),b.hc(6,"Non-standard (not using vendor-recommended approach)"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Debugging is more difficult"),b.Lb(9,"sup"),b.hc(10,"\u2020"),b.Kb(),b.Kb(),b.Lb(11,"li"),b.hc(12,"Offline mode and performance are impacted"),b.Lb(13,"sup"),b.hc(14,"\u2020"),b.Kb(),b.hc(15," with performance impact for web-native languages when packages as native app "),b.Kb(),b.Kb(),b.Lb(16,"p",24),b.Lb(17,"sup"),b.hc(18,"\u2020"),b.Kb(),b.Lb(19,"em"),b.hc(20,"for non web-native languages"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(13);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function P(n,e){1&n&&(b.Lb(0,"h3"),b.hc(1,"Solution 2"),b.Kb(),b.Lb(2,"p"),b.hc(3,"Vendor-specific languages for each frontend and decoupled backend, but shared library for API, models, and validation."),b.Kb())}function U(n,e){1&n&&b.Hb(0)}function M(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,U,1,0,"ng-container",17),b.Lb(2,"p"),b.hc(3,"Examples:"),b.Kb(),b.Lb(4,"ul",16),b.Lb(5,"li"),b.hc(6,"Protocol Buffers and FlatBuffers from Google;"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Cap\u2019n Proto;"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Thrift and Arvo from Apache;"),b.Kb(),b.Lb(11,"li"),b.hc(12,"WSDL and SOAP standard complying implementations (Microsoft & others)"),b.Kb(),b.Lb(13,"li"),b.hc(14,"FFI"),b.Kb(),b.Kb(),b.Lb(15,"div",18),b.Lb(16,"a",25),b.hc(17,"Advantages"),b.Kb(),b.Lb(18,"a",26),b.hc(19,"Disadvantages"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(18);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function H(n,e){1&n&&(b.Lb(0,"a",27),b.Gb(1,"img",28),b.Kb()),2&n&&(b.wb(1),b.Xb("title","Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit."))}function _(n,e){1&n&&b.Hb(0)}function I(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,_,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Advantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"Single source of truth (SSOT)"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Dynamism (can be setup so that when SSOT changes, all frontends and backends change)"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Compression, pipelining and other efficiency gains"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(18);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function E(n,e){1&n&&b.Hb(0)}function J(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,E,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Disadvantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"Non-standard, non-vendor recommended (or each vendor recommends a different one)\u2026 impacting team training also "),b.Kb(),b.Lb(7,"li"),b.hc(8,"Difficult to debug"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Difficult to test"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(18);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function G(n,e){1&n&&(b.Lb(0,"h3"),b.hc(1,"Solution 3"),b.Kb(),b.Lb(2,"p"),b.hc(3,"Vendor-specific languages for each frontend and decoupled backend."),b.Kb())}function N(n,e){1&n&&b.Hb(0)}function R(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,N,1,0,"ng-container",17),b.Lb(2,"p"),b.hc(3,"Examples:"),b.Kb(),b.Lb(4,"ul",16),b.Lb(5,"li"),b.hc(6,"C++ for desktop;"),b.Kb(),b.Lb(7,"li"),b.hc(8,"JavaScript for web;"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Rust for backend;"),b.Kb(),b.Lb(11,"li"),b.hc(12,"Swift for iOS"),b.Kb(),b.Lb(13,"li"),b.hc(14,"Java for Android"),b.Kb(),b.Kb(),b.Lb(15,"div",18),b.Lb(16,"a",25),b.hc(17,"Advantages"),b.Kb(),b.Lb(18,"a",26),b.hc(19,"Disadvantages"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(24);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function z(n,e){1&n&&b.Hb(0)}function B(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,z,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Advantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"Right tool for right job: standard vendor-specific language. E.g., hire any Android dev and they will know how to write the app in Java. "),b.Kb(),b.Lb(7,"li"),b.hc(8,"Performance"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Granularity of features, e.g., peripheral devices, offline mode, compression &etc."),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(24);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function W(n,e){1&n&&b.Hb(0)}function V(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,W,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Disadvantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"Duplication"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Time and complexity of maintaining duplication"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Language and toolchain knowledge requirement and transition effort"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(24);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function j(n,e){1&n&&(b.Lb(0,"div",14),b.Lb(1,"h1"),b.hc(2,"Compiler Driven Development (CDD)"),b.Kb(),b.Kb())}function Y(n,e){1&n&&(b.Lb(0,"div",14),b.Lb(1,"h4"),b.hc(2,"What is CDD?"),b.Kb(),b.Lb(3,"p"),b.hc(4,"A series of compilers\u2014and methodology for creating new compilers\u2014that traverses the Abstract Syntax Tree (AST) of each language, and translates across:"),b.Kb(),b.Lb(5,"ul",16),b.Lb(6,"li"),b.hc(7,"API client|server"),b.Kb(),b.Lb(8,"li"),b.hc(9,"models"),b.Kb(),b.Lb(10,"li"),b.hc(11,"validation"),b.Kb(),b.Lb(12,"li"),b.hc(13,"docs"),b.Kb(),b.Lb(14,"li"),b.hc(15,"tests and mocks"),b.Kb(),b.Kb(),b.Kb())}function q(n,e){1&n&&(b.Lb(0,"h3"),b.hc(1,"Compiler Driven Development (CDD)"),b.Kb(),b.Lb(2,"p"),b.hc(3,"Automated changes for vendor-specific languages for each frontend and decoupled backend."),b.Kb())}function $(n,e){1&n&&b.Hb(0)}function Q(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,$,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Advantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"Conceivable to maintain "),b.Lb(7,"strong"),b.hc(8,"100% test coverage"),b.Kb(),b.Kb(),b.Lb(9,"li"),b.hc(10,"Speedup making changes across language boundaries (e.g., adding a property to a model is "),b.Lb(11,"strong"),b.hc(12,"36\xd7 faster"),b.Kb(),b.hc(13,") "),b.Kb(),b.Lb(14,"li"),b.hc(15,"All the advantages of native development (e.g., see "),b.Lb(16,"a",29),b.hc(17,"slide 19"),b.Kb(),b.hc(18,")"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(31);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function Z(n,e){1&n&&b.Hb(0)}function nn(n,e){if(1&n&&(b.Lb(0,"div",14),b.fc(1,Z,1,0,"ng-container",17),b.Lb(2,"h4"),b.hc(3,"Disadvantages"),b.Kb(),b.Lb(4,"ul"),b.Lb(5,"li"),b.hc(6,"Time to write each compiler"),b.Kb(),b.Lb(7,"li"),b.hc(8,"Time to develop for each design pattern, paradigm, and directory structure"),b.Kb(),b.Lb(9,"li"),b.hc(10,"Institutional inertia"),b.Kb(),b.Kb(),b.Kb()),2&n){b.Ub();const n=b.ac(31);b.wb(1),b.Xb("ngTemplateOutlet",n)}}function en(n,e){1&n&&(b.Lb(0,"div",14),b.Lb(1,"h3"),b.hc(2,"CDD demo"),b.Kb(),b.Lb(3,"code"),b.hc(4,"TODO: Embed web IDE here"),b.Kb(),b.Kb())}const tn=function(){return["iOS: Swift","Android: Java","Android: Kotlin","web: TypeScript"]};let cn=(()=>{class n extends s{ngAfterContentInit(){this.totalSlides=30}}return n.\u0275fac=function(e){return bn(e||n)},n.\u0275cmp=b.zb({type:n,selectors:[["app-feb2020-1"]],features:[b.tb],decls:42,vars:26,consts:[[3,"ngSwitch"],["class","slide",4,"ngSwitchCase"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram",4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["solution0",""],["solution1",""],["solution2",""],["href","https://xkcd.com/927/","target","_blank",4,"ngSwitchCase"],["solution3",""],["solution4",""],["fxLayout","row","fxLayoutGap","20px",2,"width","80px","background","transparent","border","none"],["fxFlex","",1,"trans-button",2,"font-size","20px",3,"click"],["fxFlex","",1,"trans-button",2,"height","5px","width","5px",3,"click"],[2,"height","5px","width","5px",3,"src"],[1,"slide"],["src","../../../assets/cdd-diagram.png","alt","CDD diagram"],["ngStyle.lt-lg","column-count: 1","ngStyle.gt-sm","column-count: 3"],[4,"ngTemplateOutlet"],["fxLayout","row"],["routerLink",".","fragment","9","fxFlex",""],["routerLink",".","fragment","10","fxFlex",""],["routerLink",".","fragment","12","fxFlex",""],["routerLink",".","fragment","13","fxFlex",""],[2,"margin-bottom","0"],[2,"margin-top","0"],["routerLink",".","fragment","16","fxFlex",""],["routerLink",".","fragment","17","fxFlex",""],["href","https://xkcd.com/927/","target","_blank"],["src","//imgs.xkcd.com/comics/standards.png","alt","Standards",2,"width","50%",3,"title"],["routerLink",".","fragment","19"]],template:function(n,e){1&n&&(b.Gb(0,"app-navbar"),b.Jb(1,0),b.fc(2,u,5,0,"div",1),b.fc(3,g,1,0,"img",2),b.fc(4,L,2,1,"ng-container",3),b.fc(5,p,16,0,"div",1),b.fc(6,K,5,0,"div",1),b.fc(7,m,4,0,"ng-template",null,4,b.gc),b.fc(9,w,9,1,"div",1),b.fc(10,C,11,1,"div",1),b.fc(11,x,11,1,"div",1),b.fc(12,X,7,0,"ng-template",null,5,b.gc),b.fc(14,y,23,1,"div",1),b.fc(15,T,11,1,"div",1),b.fc(16,F,21,1,"div",1),b.fc(17,P,4,0,"ng-template",null,6,b.gc),b.fc(19,M,20,1,"div",1),b.fc(20,H,2,1,"a",7),b.fc(21,I,11,1,"div",1),b.fc(22,J,11,1,"div",1),b.fc(23,G,4,0,"ng-template",null,8,b.gc),b.fc(25,R,20,1,"div",1),b.fc(26,B,11,1,"div",1),b.fc(27,V,11,1,"div",1),b.fc(28,j,3,0,"div",1),b.fc(29,Y,16,0,"div",1),b.fc(30,q,4,0,"ng-template",null,9,b.gc),b.fc(32,Q,19,1,"div",1),b.fc(33,nn,11,1,"div",1),b.fc(34,en,5,0,"div",1),b.Ib(),b.Lb(35,"div",10),b.Lb(36,"button",11),b.Sb("click",function(){return e.prev()}),b.hc(37," \u2190 "),b.Kb(),b.Lb(38,"button",11),b.Sb("click",function(){return e.next()}),b.hc(39," \u2192 "),b.Kb(),b.Lb(40,"button",12),b.Sb("click",function(){return e.toggleFullScreen()}),b.Gb(41,"app-svg-viewer",13),b.Kb(),b.Kb()),2&n&&(b.wb(1),b.Xb("ngSwitch",e.currentSlide),b.wb(1),b.Xb("ngSwitchCase",0),b.wb(1),b.Xb("ngSwitchCase",1),b.wb(1),b.Xb("ngForOf",b.Yb(25,tn)),b.wb(1),b.Xb("ngSwitchCase",6),b.wb(1),b.Xb("ngSwitchCase",7),b.wb(3),b.Xb("ngSwitchCase",8),b.wb(1),b.Xb("ngSwitchCase",9),b.wb(1),b.Xb("ngSwitchCase",10),b.wb(3),b.Xb("ngSwitchCase",11),b.wb(1),b.Xb("ngSwitchCase",12),b.wb(1),b.Xb("ngSwitchCase",13),b.wb(3),b.Xb("ngSwitchCase",14),b.wb(1),b.Xb("ngSwitchCase",15),b.wb(1),b.Xb("ngSwitchCase",16),b.wb(1),b.Xb("ngSwitchCase",17),b.wb(3),b.Xb("ngSwitchCase",18),b.wb(1),b.Xb("ngSwitchCase",19),b.wb(1),b.Xb("ngSwitchCase",20),b.wb(1),b.Xb("ngSwitchCase",21),b.wb(1),b.Xb("ngSwitchCase",22),b.wb(3),b.Xb("ngSwitchCase",23),b.wb(1),b.Xb("ngSwitchCase",24),b.wb(1),b.Xb("ngSwitchCase",25),b.wb(7),b.Xb("src",e.isFullScreen()?"/assets/fullscreen-24px.svg":"/assets/fullscreen_exit-24px.svg"))},directives:[a.a,i.l,i.m,i.i,l.d,l.e,l.b,h.a,d.b,i.n,c.c],styles:["div[_ngcontent-%COMP%]{padding:20px}ul.div[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;padding-top:0}.slide[_ngcontent-%COMP%]{font-size:300%}.trans-button[_ngcontent-%COMP%]{background:transparent;border:none}"]}),n})();const bn=b.Mb(cn),an=[{path:"",component:r},{path:"2020-02",component:cn}];var on=t("/NTo"),rn=t("hXKo"),sn=t("YUcS");let ln=(()=>{class n{}return n.\u0275mod=b.Db({type:n}),n.\u0275inj=b.Cb({factory:function(e){return new(e||n)},imports:[[i.b,c.d.forChild(an),on.a,rn.a,sn.a]]}),n})()}}]);