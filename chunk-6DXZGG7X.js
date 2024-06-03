import{a as S,b as v}from"./chunk-6EIOC4AH.js";import{b as f,d as u,e as x,f as g,h,i as y,l as E}from"./chunk-FSKGJU3Y.js";import{N as t,O as i,P as o,Z as e,ja as c,m as s,q as d,r as p,xa as m}from"./chunk-CEYUHD4P.js";var w=(()=>{let n=class n{constructor(){}ngOnInit(){}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=d({type:n,selectors:[["app-theory"]],decls:69,vars:0,consts:[[2,"margin","0 15% 0 15%"],["fxLayout","row","fxLayoutAlign","center center","fxFlexAlign","center center","fxLayout.lt-md","column",2,"margin","0 15% 0 15%"],["fxFlex","auto"],["target","_blank","href","https://en.wikipedia.org/wiki/Abstract_syntax_tree"],["target","_blank","href","https://en.wikipedia.org/wiki/OpenAPI_Specification"],["fxFlex","","fxFlex.gt-sm","50","src","/assets/cdd-diagram.svg","alt","CDD flow",2,"width","80%"],["href","https://en.wikipedia.org/wiki/Abstract_data_type","target","_blank"],["target","_blank","href","https://en.wikipedia.org/wiki/Record_(computer_science)"]],template:function(a,A){a&1&&(o(0,"app-navbar"),t(1,"div",0)(2,"h3"),e(3,"Theory"),i(),t(4,"em"),e(5,"Research paper forthcoming."),i()(),t(6,"div",1)(7,"div",2)(8,"h3"),e(9,"Implementation"),i(),t(10,"p"),e(11," Every language in your system does one or more of: "),i(),t(12,"ul")(13,"li"),e(14,"Persist to database / filesystem"),i(),t(15,"li"),e(16,"Validate input"),i(),t(17,"li"),e(18,"De/serialise"),i(),t(19,"li"),e(20,"Test\u2014incl. mock\u2014input and output"),i(),t(21,"li"),e(22,"Document interfaces"),i()(),t(23,"p"),e(24," Different languages\u2014and frameworks\u2014have different strength type systems, but in general one can: "),i(),t(25,"ol")(26,"li"),e(27,"Traverse the "),t(28,"a",3),e(29,"Abstract Syntax Tree (AST)"),i()(),t(30,"li"),e(31,"Extract pertinent information"),i(),t(32,"li"),e(33,"Generate "),t(34,"a",4),e(35,"OpenAPI"),i(),e(36," JSON/YAML "),i()(),t(37,"p"),e(38,"Inversely, one can:"),i(),t(39,"ol")(40,"li"),e(41,"Traverse the OpenAPI hierarchy"),i(),t(42,"li"),e(43,"Extract pertinent information"),i(),t(44,"li"),e(45,"Parse existing source and merge new information (if exists) else generate; to/from the AST"),i()()(),o(46,"img",5),i(),t(47,"div",0)(48,"h4"),e(49,"Type system incompatibilities"),i(),t(50,"p"),e(51,"SQL has really specific types, like "),t(52,"code"),e(53,"VARCHAR(20)"),i(),e(54,"; almost no other language gets as specific."),i(),t(55,"p"),e(56,"Sure, you could use "),t(57,"a",6),e(58,"ADTs"),i(),e(59," (implemented using your "),t(60,"a",7),e(61,"record"),i(),e(62," syntax), but this is nonstandard and usually incurs a runtime overhead."),i(),t(63,"p"),e(64,"To avoid the tradeoff between runtime complexity and type information loss, additional type information\u2014beyond what the target language/framework supports\u2014is "),t(65,"em"),e(66,"added to the docstring"),i(),e(67,"."),i()(),o(68,"app-footer"))},dependencies:[f,g,x,u,y,S]});let r=n;return r})();var b=[{path:"",component:w}];var G=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=p({type:n}),n.\u0275inj=s({imports:[c,m,m.forChild(b),h,E,v]});let r=n;return r})();export{G as TheoryModule};
