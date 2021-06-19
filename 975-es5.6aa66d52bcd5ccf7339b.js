!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkscientific_sydney=self.webpackChunkscientific_sydney||[]).push([[975],{1975:function(e,o,s){"use strict";s.r(o),s.d(o,{GettingStartedModule:function(){return B}});var t=s(1116),i=s(2006),a=s(5366),d=s(8971);function r(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Though this guide is for the Ubuntu linux; it should be easy to retrofit to others. "),a.qZA())}function c(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Though this guide has been tested on macOS High Sierra; it will probably work on older versions. "),a.qZA())}function u(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Follow this guide on Windows 7+. "),a.qZA())}function p(n,e){1&n&&(a.ynx(0),a._uU(1,"Command Prompt (cmd.exe)"),a.BQk())}function l(n,e){1&n&&(a.ynx(0),a._uU(1,"Terminal"),a.BQk())}function g(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,"\n    sudo apt update\n    sudo apt install build-essential git-core tcl\n  "),a.qZA(),a.qZA())}function Z(n,e){1&n&&(a.TgZ(0,"a",23),a._uU(1,"Latest XCode and Command Line Tools"),a.qZA())}function f(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,'\n    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n    brew update\n    brew install git\n  '),a.qZA(),a.qZA())}function h(n,e){1&n&&(a.TgZ(0,"section",24),a._uU(1,' Ensure you check "Add to PATH" whenever asked: '),a.TgZ(2,"ol"),a.TgZ(3,"li"),a.TgZ(4,"a",25),a._uU(5," Build Tools for Visual Studio 2017 "),a.qZA(),a.qZA(),a.TgZ(6,"li"),a.TgZ(7,"a",26),a._uU(8,"git"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"p",9),a._uU(10,"Test that it installed correctly with:"),a.qZA(),a.TgZ(11,"pre",10),a.TgZ(12,"code",11),a._uU(13,"\n      git --version\n      cl /?\n    "),a.qZA(),a.qZA(),a.qZA())}function T(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,"\n    curl -L https://git.io/n-install | bash -s -- -y lts\n  "),a.qZA(),a.qZA())}function _(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Download and setup from latest: "),a.TgZ(2,"a",27),a._uU(3,"'Windows Installer (.msi)' [LTS]"),a.qZA(),a._uU(4,". "),a.qZA())}function A(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,"\n    # Alternatively build from source. Quick guide: https://askubuntu.com/a/868862\n    sudo add-apt-repository ppa:chris-lea/redis-server\n    sudo apt update\n    sudo apt install redis-server\n  "),a.qZA(),a.qZA())}function m(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,"\n    brew install redis\n    brew services start redis\n  "),a.qZA(),a.qZA())}function S(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Download and install the "),a.TgZ(2,"a",28),a._uU(3,"latest .msi"),a.qZA(),a._uU(4,". "),a.qZA())}function q(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Follow "),a.TgZ(2,"a",29),a._uU(3,"their official guide"),a.qZA(),a._uU(4,". I prefer using latest version from their apt repository. "),a.qZA())}function U(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Follow "),a.TgZ(2,"a",30),a._uU(3,"their official guide"),a.qZA(),a._uU(4,". I prefer the "),a.TgZ(5,"a",31),a._uU(6,"EnterpriseDB package"),a.qZA(),a._uU(7,". "),a.qZA())}function w(n,e){1&n&&(a.TgZ(0,"p",9),a._uU(1," Run this in an Administrator Command Prompt ("),a.TgZ(2,"a",32),a._uU(3,"how-to"),a.qZA(),a._uU(4,"): "),a.qZA())}function E(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,'\n    POSTGRES_DB_USER=\'REPLACE_ME\'\n    REST_PASS=\'REPLACE_ME\' # recommend using `read -s REST_PASS`\n    POSTGRES_DB_NAME=\'REPLACE_ME\'\n\n    createuser --superuser "$POSTGRES_DB_USER"\n    psql -c "CREATE USER $POSTGRES_DB_USER WITH LOGIN PASSWORD \'$REST_PASS\';"\n    createdb "$POSTGRES_DB_NAME" --owner "$POSTGRES_DB_USER"\n    export RDBMS_URI="postgres://$POSTGRES_DB_USER:$REST_PASS@localhost/$POSTGRES_DB_NAME"\n    # ^Recommend adding this `export` line to your ~/.bash_profile\n  '),a.qZA(),a.qZA())}function k(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",33),a._uU(2,'\n    set POSTGRES_DB_USER="REPLACE_ME"\n    set REST_PASS="REPLACE_ME"\n    set POSTGRES_DB_NAME="REPLACE_ME"\n\n    createuser --superuser "%POSTGRES_DB_USER%"\n    psql -c "CREATE USER %POSTGRES_DB_USER% WITH LOGIN PASSWORD \'%REST_PASS%\';"\n    createdb "%POSTGRES_DB_NAME%" --owner "%POSTGRES_DB_USER%"\n\n    setx RDBMS_URI "postgres://%POSTGRES_DB_USER%:%REST_PASS%@localhost/%POSTGRES_DB_NAME%"\n    :: This last line will add RDBMS_URI to your environment\n  '),a.qZA(),a.qZA())}function R(n,e){1&n&&(a.TgZ(0,"p"),a._uU(1," Alternatively use "),a.TgZ(2,"a",34),a._uU(3,"my script"),a.qZA(),a._uU(4,". "),a.qZA())}function b(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,"\n    psql \"$RDBMS_URI\" -c 'SELECT 1'\n  "),a.qZA(),a.qZA())}function x(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2,'\n    psql "%RDBMS_URI%" -c "SELECT 1"\n  '),a.qZA(),a.qZA())}function I(n,e){1&n&&(a.TgZ(0,"span"),a.TgZ(1,"a",35),a.TgZ(2,"code"),a._uU(3,"sed"),a.qZA(),a.qZA(),a._uU(4," and "),a.qZA())}function y(n,e){1&n&&(a.TgZ(0,"code"),a._uU(1,"brew install hub"),a.qZA())}function N(n,e){1&n&&(a.TgZ(0,"span"),a.TgZ(1,"a",36),a._uU(2,"latest package"),a.qZA(),a._uU(3," for your platform."),a.qZA())}function P(n,e){1&n&&(a.TgZ(0,"pre",10),a.TgZ(1,"code",11),a._uU(2),a.qZA(),a.qZA()),2&n&&(a.xp6(2),a.AsE('\n    hub create organisation/"$',"{","PWD##*/","}","\" -d 'Description here'\n  "))}var O,D,v=[{path:"",component:(O=function e(o){n(this,e),this.platformPickerService=o,this.os=o.is.bind(o)},O.\u0275fac=function(n){return new(n||O)(a.Y36(d.P))},O.\u0275cmp=a.Xpm({type:O,selectors:[["app-getting-started"]],decls:105,vars:29,consts:[[1,"docs-markdown","pad"],[1,"docs-markdown-h5"],["class","docs-markdown-p",4,"ngIf"],[4,"ngIf"],["id","step-0-install-build-dependencies",1,"docs-header-link","docs-markdown-h3"],["class","docs-markdown-pre",4,"ngIf"],["href","https://developer.apple.com/downloads",4,"ngIf"],["class","docs-guide-content",4,"ngIf"],["id","step-1-install-nodejs",1,"docs-header-link","docs-markdown-h3"],[1,"docs-markdown-p"],[1,"docs-markdown-pre"],[1,"lang-bash","docs-markdown-code"],["id","step-2-install-redis",1,"docs-header-link","docs-markdown-h3"],["id","step-3-install-postgres",1,"docs-header-link","docs-markdown-h3"],["id","step-4-install-android",1,"docs-header-link","docs-markdown-h3"],["href","https://developer.android.com/studio/install.html",1,"docs-markdown-a"],["id","step-5-install-global-nodejs-packages",1,"docs-header-link","docs-markdown-h3"],["id","step-6-development-backend",1,"docs-header-link","docs-markdown-h3"],["id","step-7-angular-frontend",1,"docs-header-link","docs-markdown-h3"],["id","step-8-android",1,"docs-header-link","docs-markdown-h3"],["id","step-9-rebranding",1,"docs-header-link","docs-markdown-h3"],["href","https://github.com/sharkdp/fd"],["href","https://hub.github.com"],["href","https://developer.apple.com/downloads"],[1,"docs-guide-content"],["href","https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15",1,"docs-markdown-a"],["href","https://git-scm.com/download/win",1,"docs-markdown-a"],["href","https://nodejs.org/en/download/",1,"docs-markdown-a"],["href","https://github.com/MicrosoftArchive/redis/releases",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/linux/ubuntu/",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/macosx/",1,"docs-markdown-a"],[1,"http://www.enterprisedb.com/products/pgdownload.do#macosx"],["href","https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx",1,"docs-markdown-a"],[1,"lang-batch","docs-markdown-code"],["href","https://github.com/offscale/offsh-postgres",1,"docs-markdown-a"],["href","https://chocolatey.org/packages/sed"],["href","https://github.com/github/hub/releases"]],template:function(n,e){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"h5",1),a._uU(2," This guides you to setting up your computer to run all my scaffolds. "),a.qZA(),a.YNc(3,r,2,0,"p",2),a.YNc(4,c,2,0,"p",2),a.YNc(5,u,2,0,"p",2),a.TgZ(6,"em"),a._uU(7," All grey background assumes you are running in an active "),a.YNc(8,p,2,0,"ng-container",3),a.YNc(9,l,2,0,"ng-container",3),a._uU(10," session "),a.qZA(),a.TgZ(11,"h3",4),a._uU(12," Step 0: Install build dependencies "),a.qZA(),a.YNc(13,g,3,0,"pre",5),a.YNc(14,Z,2,0,"a",6),a.YNc(15,f,3,0,"pre",5),a.YNc(16,h,14,0,"section",7),a.TgZ(17,"h3",8),a._uU(18," Step 1: Install Node.js "),a.qZA(),a.YNc(19,T,3,0,"pre",5),a.YNc(20,_,5,0,"p",2),a.TgZ(21,"p",9),a._uU(22,"Test that it installed correctly with:"),a.qZA(),a.TgZ(23,"pre",10),a.TgZ(24,"code",11),a._uU(25,"\n    node --version\n    npm --version\n  "),a.qZA(),a.qZA(),a.TgZ(26,"h3",12),a._uU(27," Step 2: Install Redis "),a.qZA(),a.YNc(28,A,3,0,"pre",5),a.YNc(29,m,3,0,"pre",5),a.YNc(30,S,5,0,"p",2),a.TgZ(31,"p",9),a._uU(32,"You can test it's installed and running with:"),a.qZA(),a.TgZ(33,"pre",10),a.TgZ(34,"code",11),a._uU(35,"\n    redis-cli ping\n  "),a.qZA(),a.qZA(),a.TgZ(36,"p",9),a._uU(37,"If that failed, open a new session and run this, then try the ping again:"),a.qZA(),a.TgZ(38,"pre",10),a.TgZ(39,"code",11),a._uU(40,"\n    redis-server\n  "),a.qZA(),a.qZA(),a.TgZ(41,"h3",13),a._uU(42," Step 3: Install and configure Postgres "),a.qZA(),a.YNc(43,q,5,0,"p",2),a.YNc(44,U,8,0,"p",2),a.YNc(45,w,5,0,"p",2),a.YNc(46,E,3,0,"pre",5),a.YNc(47,k,3,0,"pre",5),a.YNc(48,R,5,0,"p",3),a.TgZ(49,"p",9),a._uU(50,"You can test it's installed and running with:"),a.qZA(),a.YNc(51,b,3,0,"pre",5),a.YNc(52,x,3,0,"pre",5),a.TgZ(53,"h3",14),a._uU(54," Step 4: Install Android dependencies and IDE "),a.qZA(),a.TgZ(55,"p",9),a._uU(56," See "),a.TgZ(57,"a",15),a._uU(58,"official install guide"),a.qZA(),a._uU(59,". "),a.qZA(),a.TgZ(60,"h3",16),a._uU(61," Step 5: Install global Node.js packages "),a.qZA(),a.TgZ(62,"pre",10),a.TgZ(63,"code",11),a._uU(64,"\n    npm i -g bunyan typings typescript @angular/cli\n  "),a.qZA(),a.qZA(),a.TgZ(65,"h3",17),a._uU(66," Step 6: Development backend (Node.js) "),a.qZA(),a.TgZ(67,"pre",10),a.TgZ(68,"code",11),a._uU(69,"\n    git clone https://github.com/SamuelMarks/restify-orm-scaffold\n    cd restify-orm-scaffold\n    typings i\n    tsc\n    npm start\n  "),a.qZA(),a.qZA(),a.TgZ(70,"h3",18),a._uU(71," Step 7: Angular frontend (web) "),a.qZA(),a.TgZ(72,"pre",10),a.TgZ(73,"code",11),a._uU(74,"\n    git clone https://github.com/SamuelMarks/ng-material-scaffold\n    cd ng-material-scaffold\n    npm i\n    npm start\n  "),a.qZA(),a.qZA(),a.TgZ(75,"h3",19),a._uU(76," Step 8: Android "),a.qZA(),a.TgZ(77,"pre",10),a.TgZ(78,"code",11),a._uU(79,"\n    git clone https://github.com/SamuelMarks/android-auth-scaffold\n  "),a.qZA(),a.qZA(),a.TgZ(80,"p",9),a._uU(81," Now open that in Android Studio; build and run it. "),a.qZA(),a.TgZ(82,"h3",20),a._uU(83," Step 9: Branding "),a.qZA(),a.TgZ(84,"p",9),a._uU(85,"Now is a good time to rename everything. Close all open windows, and let's begin."),a.qZA(),a.TgZ(86,"p",9),a._uU(87,"Install "),a.YNc(88,I,5,0,"span",3),a.TgZ(89,"a",21),a.TgZ(90,"code"),a._uU(91,"fd"),a.qZA(),a.qZA(),a._uU(92,". Then within each of the repo directories, or from a parent directory, run:"),a.qZA(),a.TgZ(93,"pre",10),a.TgZ(94,"code",11),a._uU(95),a.qZA(),a.qZA(),a.TgZ(96,"p",9),a._uU(97,"You will need likely want to update descriptions and add DVCS repositories also. Install "),a.TgZ(98,"a",22),a.TgZ(99,"code"),a._uU(100,"hub"),a.qZA(),a.qZA(),a._uU(101," with "),a.YNc(102,y,2,0,"code",3),a.YNc(103,N,4,0,"span",3),a.qZA(),a.YNc(104,P,3,2,"pre",5),a.qZA()),2&n&&(a.xp6(3),a.Q6J("ngIf",e.os("Linux")),a.xp6(1),a.Q6J("ngIf",e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Windows")),a.xp6(3),a.Q6J("ngIf",e.os("Windows")),a.xp6(1),a.Q6J("ngIf",e.os("macOS")||e.os("Linux")),a.xp6(4),a.Q6J("ngIf",e.os("Linux")),a.xp6(1),a.Q6J("ngIf",e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Windows")),a.xp6(3),a.Q6J("ngIf",e.os("Linux")||e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Windows")),a.xp6(8),a.Q6J("ngIf",e.os("Linux")),a.xp6(1),a.Q6J("ngIf",e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Windows")),a.xp6(13),a.Q6J("ngIf",e.os("Linux")),a.xp6(1),a.Q6J("ngIf",e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Windows")),a.xp6(1),a.Q6J("ngIf",e.os("Linux")||e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Windows")),a.xp6(1),a.Q6J("ngIf",e.os("Linux")||e.os("macOS")),a.xp6(3),a.Q6J("ngIf",e.os("Linux")||e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Windows")),a.xp6(36),a.Q6J("ngIf",e.os("Windows")),a.xp6(7),a.lnq("\n    fd -t f -exec sed -i 's/ng-material-scaffold/projectname/g' ","{}"," \\;\n    fd -t f -exec sed -i 's/NgMaterialScaffold/projectname/g' ","{}"," \\;\n\n    fd -t f -exec sed -i 's/restify-orm-scaffold/projectname/g' ","{}"," \\;\n  "),a.xp6(7),a.Q6J("ngIf",e.os("macOS")),a.xp6(1),a.Q6J("ngIf",e.os("Linux")),a.xp6(1),a.Q6J("ngIf",e.os("Linux")||e.os("macOS")))},directives:[t.O5],styles:[".pad[_ngcontent-%COMP%]{padding:0 3em}"]}),O)}],B=((D=function e(){n(this,e)}).\u0275fac=function(n){return new(n||D)},D.\u0275mod=a.oAB({type:D}),D.\u0275inj=a.cJS({imports:[[t.ez,i.Bz,i.Bz.forChild(v)]]}),D)}}])}();