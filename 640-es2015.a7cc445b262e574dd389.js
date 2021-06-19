(self.webpackChunkscientific_sydney=self.webpackChunkscientific_sydney||[]).push([[640],{9640:function(e,a,n){"use strict";n.r(a),n.d(a,{OpenQuestionsModule:function(){return s}});var t=n(1116),i=n(2006),o=n(5366);const r=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-open-questions"]],decls:117,vars:0,consts:[[1,"main",2,"margin-top","5em"],[1,"mat-h1"],["id","maybe-drink",1,"mat-h1"],["id","approach",1,"mat-h2"],["type","1"],["id","go-further"],["start","5","type","1"],["id","generalise"],["id","deliverables",1,"mat-h2"],["id","data-science-topics",1,"mat-h2"],["id","natural-language-processing-nlp"],["id","web-scraping"],["id","multivariate-regression"],[1,"mat-h2"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"h1",1),o._uU(2,"Fun little project"),o.qZA(),o._uU(3," Or, instead of tackling the 'open questions' which are more relevant to my PhD, could have a bit of fun with: "),o.TgZ(4,"h1",2),o._uU(5,"Maybe drink"),o.qZA(),o.TgZ(6,"p"),o._uU(7,"/What are the chances"),o.qZA(),o.TgZ(8,"h2",3),o._uU(9,"Approach"),o.qZA(),o.TgZ(10,"ol",4),o.TgZ(11,"li"),o._uU(12,"Take a map dataset"),o.qZA(),o.TgZ(13,"li"),o._uU(14,"Look for all coffee shops (or whatever) [and maybe population densities]"),o.qZA(),o.TgZ(15,"li"),o._uU(16,"Remove all coffee shops"),o.qZA(),o.TgZ(17,"li"),o._uU(18,"Based on population densities in zoning rules, infer if there is a coffeeshop"),o.qZA(),o.qZA(),o.TgZ(19,"h3",5),o._uU(20,"Go further"),o.qZA(),o.TgZ(21,"ol",6),o.TgZ(22,"li"),o._uU(23,"Search for coffee"),o.qZA(),o.TgZ(24,"li"),o._uU(25,"Build an app"),o.qZA(),o.TgZ(26,"li"),o._uU(27,"As you\u2019re walking/driving along, it\u2019ll buzz and say \u201cthere probably a coffeeshop within 20 meters. 88.42% coffeeshop; 70% grocery shop\u201d "),o.qZA(),o.qZA(),o.TgZ(28,"h3",7),o._uU(29,"Generalise"),o.qZA(),o.TgZ(30,"p"),o._uU(31,"Actually let\u2019s generalise to specifying a single drink you care about. Now it\u2019s a find-me Lemonade app. Or a find-me Kombucha app."),o.qZA(),o.TgZ(32,"h2",8),o._uU(33,"Deliverables"),o.qZA(),o.TgZ(34,"p"),o._uU(35,"In the course will build:"),o.qZA(),o.TgZ(36,"ol"),o.TgZ(37,"li"),o._uU(38,"Fully functional neural network with a location->amenity dataset"),o.qZA(),o.TgZ(39,"li"),o._uU(40,"Fully functional mobile app"),o.qZA(),o.TgZ(41,"li"),o._uU(42,"Hacked-together scraper to quickly categorise a coffeeshop, but also include a simple NN for this task, to cluster keywords (for later search) "),o.qZA(),o.TgZ(43,"li"),o._uU(44,"Near-realtime integration with the map and the mobile\u2019s GPS"),o.qZA(),o.qZA(),o.TgZ(45,"h2",9),o._uU(46,"Data science topics"),o.qZA(),o.TgZ(47,"h3",10),o._uU(48,"Natural Language Processing (NLP)"),o.qZA(),o.TgZ(49,"ul"),o.TgZ(50,"li"),o._uU(51,"NLP to categorise [disambiguate] drink based on country, e.g.: lemonade in Australia generally doesn\u2019t refer to alcoholic beverages, whereas in America it does. "),o.qZA(),o.qZA(),o.TgZ(52,"h3",11),o._uU(53,"Web scraping"),o.qZA(),o.TgZ(54,"ul"),o.TgZ(55,"li"),o._uU(56,"Given an OSM location, get the homepage, parse out the "),o.TgZ(57,"code"),o._uU(58,"<head>"),o.qZA(),o._uU(59," and keyword search the body "),o.qZA(),o.qZA(),o.TgZ(60,"h3",12),o._uU(61,"Multivariate regression"),o.qZA(),o.TgZ(62,"ul"),o.TgZ(63,"li"),o._uU(64,"Given a group of candidate stores, choose one most likely to have desired beverage"),o.qZA(),o.qZA(),o._UZ(65,"hr"),o.TgZ(66,"h1",1),o._uU(67,"Open questions"),o.qZA(),o.TgZ(68,"p"),o._uU(69,"There are a few machine-learning research questions that I'm trying to solve in the short-term."),o.qZA(),o.TgZ(70,"h2",13),o._uU(71,"Multivariate regression across medical images and patient records"),o.qZA(),o.TgZ(72,"h4"),o._uU(73,"Idea 0"),o.qZA(),o.TgZ(74,"p"),o._uU(75,"I was thinking that have a worker neural network doing the heavy lifting (maybe 3-5 NN all up) would do the trick. To keep epochs manageable, was thinking about the Meta-Learning and One-Shot Learning literature. But maybe that wouldn't work?"),o.qZA(),o.TgZ(76,"p"),o._uU(77,"Here is an excerpt from an email I sent to an AI expert recently:"),o.qZA(),o.TgZ(78,"blockquote"),o.TgZ(79,"p"),o._uU(80,"Hey so was thinking, if you have a secondary neural network for optimising the first neural network, couldn't you encode say image data in one, and patient data in another?"),o.qZA(),o.TgZ(81,"p"),o._uU(82,"Regularly we use multivariate regression\u2014potentially via neural networking\u2014on patient data to infer trends. For the problems I work on, these are risk factors for developing blindness-causing diseases."),o.qZA(),o.TgZ(83,"p"),o._uU(84,"On the image side, I have a bunch of health and unhealthy images, and am currently just working out how to segment the classification correctly (more of the time). But it is longitudinal data, so could always combine it with information helping it say: these are healthy images for a patient that will become unhealthy."),o.qZA(),o.TgZ(85,"p"),o._uU(86,"On the text side, I have general demographic information like gender, age, ethnicity and a few more specific [to glaucoma] metrics."),o.qZA(),o.TgZ(87,"p"),o._uU(88,"How would you combine these two datasets? - Such that given a new person walking off the street, we can emit one number saying their probability of going blind in next k years (assuming no intervention)."),o.qZA(),o.TgZ(89,"em"),o._uU(90,"[multivariate regression over images and numerical patient data]"),o.qZA(),o.qZA(),o.TgZ(91,"h4"),o._uU(92,"Idea 1"),o.qZA(),o.TgZ(93,"p"),o._uU(94,"Or maybe adding an extra channel to a convolutional neural network?"),o.qZA(),o.TgZ(95,"p"),o._uU(96,"Encode the patient data in a hidden channel. Maybe figure out encoding with spatial relevant, or just hack specialised code for that last channel."),o.qZA(),o.TgZ(97,"h4"),o._uU(98,"Idea 2"),o.qZA(),o.TgZ(99,"p"),o._uU(100,"Jiquan Ngiam, Aditya Khosla, Mingyu Kim, Juhan Nam, Honglak Lee, and Andrew Y. Ng. 2011. Multimodal deep learning. In Proceedings of the 28th International Conference on International Conference on Machine Learning (ICML'11), Lise Getoor and Tobias Scheffer (Eds.). Omnipress, USA, 689-696."),o.qZA(),o.TgZ(101,"h2",13),o._uU(102,"Expand existing glaucoma AI"),o.qZA(),o._uU(103," Current Glaucoma CNN works on a non-public dataset (the "),o.TgZ(104,"em"),o._uU(105,"Blue Mountains Eye Study"),o.qZA(),o._uU(106,"). "),o.TgZ(107,"h3"),o._uU(108,"Idea 0: Transfer learning"),o.qZA(),o.TgZ(109,"h3"),o._uU(110,"Idea 1: Incorporate public glaucoma datasets"),o.qZA(),o.TgZ(111,"h3"),o._uU(112,"Idea 2: Incorporate NN for optic disc segmenetation"),o.qZA(),o._uU(113," Sevastopolsky A., Optic disc and cup segmentation methods for glaucoma detection with modification of U-Net convolutional neural network, Pattern Recognition and Image Analysis 27 (2017), no. 3, 618\u2013624. "),o.TgZ(114,"h3"),o._uU(115,"Idea 3: Expand classifications to include Diabetic Retinopathy"),o.qZA(),o._uU(116," See Kaggle competition open-source solutions for concepts + datasets.\n"),o.qZA())},styles:[".main[_ngcontent-%COMP%]{padding:0 3em}@media (max-width:720px){.main[_ngcontent-%COMP%]{padding:0 .5em}}blockquote[_ngcontent-%COMP%]{padding:0 22px;font-size:1.25rem;color:#616161;border-left:2px solid #e0e0e0;margin-bottom:1.143rem;margin:0 0 1rem}"]}),e})()}];let s=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[t.ez,i.Bz,i.Bz.forChild(r)]]}),e})()}}]);