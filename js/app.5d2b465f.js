(function(n){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=c[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],a=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),n=o(o.s=e[0]))}return n}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=a,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)o.d(e,a,function(t){return n[t]}.bind(null,a));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"262e":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);var a=e("2b0e"),r=e("bb71");e("da64");a["a"].use(r["a"],{iconfont:"md"});var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-app",{attrs:{dark:n.dark}},[a("v-container",{attrs:{"full-height":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",md5:"",lg4:""}},[a("v-layout",{attrs:{"justify-space-between":"","align-center":""}},[a("v-flex",[a("v-avatar",{staticClass:"mr-3",attrs:{size:"125px"}},[a("img",{staticClass:"img-circle elevation-1",attrs:{src:e("915e")}})])],1),a("v-flex",[a("div",{staticClass:"font-weight-light display-3"},[n._v("LUCAS POLLICE")])])],1),a("v-layout",{attrs:{"align-center":"","justify-space-around":""}},[n._l(n.links,function(t){return a("v-btn",{key:t.icon,attrs:{flat:"",icon:"",href:t.url,target:"_blank"}},[a("v-icon",[n._v("fab fa-"+n._s(t.icon))])],1)}),a("v-btn",{attrs:{icon:"",flat:"",href:"https://github.com/Jugbot/jugbot.github.io",target:"_blank"}},[a("div",{staticClass:"title font-weight-black"},[n._v("\n              </>\n            ")])])],2)],1),a("v-flex",{attrs:{xs12:"",md6:"","offset-md1":"",lg7:""}},[a("FakeIDE")],1)],1)],1),a("v-footer",{attrs:{color:"#00000000",fixed:""}},[a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-btn",{attrs:{flat:""},on:{click:function(t){n.dark=!n.dark}}},[n.dark?a("span",{staticClass:"grey--text"},[n._v("Eyeball-searing site")]):a("span",{staticClass:"grey--text"},[n._v("Vampire-accessible site")])])],1)],1)],1)},o=[],s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-card",{staticStyle:{color:"#abb2bf",background:"#282c34"}},[e("v-tabs",[n._l(n.docs,function(t){return e("v-tab-item",{key:t.name},[e("v-card",{staticStyle:{"overflow-y":"auto","overflow-x":"hidden"},attrs:{flat:"",height:"350"}},[e("v-card-text",[e("pre",{staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:n._s(t.content)}},[n._v("              "),n._v("\n            ")])])],1)],1)}),n._l(n.docs,function(t){return e("v-tab",{key:t.name},[n._v("\n        "+n._s(t.name)+"."+n._s(t.type)+"\n      ")])})],2)],1)],1)},c=[];const l='<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!-- Experience --\x3e\n    <title>Lucas Pollice</title>\n  </head>\n  <body>\n    <span><b> Assistant Researcher:</b> NYU Tandon </span>\n    <p> Working with NYU Professor Oded Nov on\n        maintaing webpages for testing UI demand curves.\n    </p>\n    <span><b> Intern:</b> Binger Data Management, LLC </span>\n    <p> Intern Binger Data Management creating UX forms and\n        other miscellaneous tasks such as spreadsheet\n        manipulation and data scalping.\n    </p>\n    <span><b> Intern:</b> The Threat Within, NYU Tandon </span>\n    <p> Worked as the Cyber Threat Analyst in a team acting as\n        Risk Assessment Consultants.\n        Studied the NIST framework and various security practices.\n    </p>\n  </body>\n</html>';var u=l;const p="(function() {\n  return {\n    // Projects\n    'Full-Stack-Web-App': {\n      duration: 'Summer 2018',\n      description: `Vue Frontend with Flask RESTful Backend.\n          Game-like web app in which users doodle competitively.`\n    },\n    'Python-Tank-Game': {\n      duration: 'January 2018',\n      description: `Tank shooter game.\n          Home-brewed hit detection and quad-tree optimization.\n          Generated maze maps.`\n    },\n    'Funkey-Keyboard': {\n      duration: 'HackNYU 2018',\n      description: `Physical piano rythme game trainer.\n          Extensive Raspberry Pi, EE, CAD Work.\n          Worked with others on game logic.`,\n      awards: 'NYU Nick-Russo (entrepreneurial award)'\n    }\n  }\n})()\n";var d=p;const f="/* Skills */\n.node.webpack {\n  frameworks: \"vue\" 1 \"bootstrap\" 1;\n  proficiency: inherit;\n}\n#python {\n  proficiency: '80%';\n  flask: 1;\n  sqlalchemy: 1;\n}\n#java {\n  proficiency: '70%';\n}\ndiv[lang=\"C++\"] {\n  proficiency: '60%';\n}\n.mysql {}\n/* Hobbies */\n#skiing {\n  type: 'alpine';\n}\n#art > .doodle. {\n  platform: 'digital';\n  type: 'line'\n}\n";var v=f,h=e("a70e"),b=e.n(h),g=(e("9f21"),e("8dcb")),m=e.n(g),y=e("4dd1"),k=e.n(y),w=e("ee8c"),_=e.n(w);b.a.registerLanguage("html",m.a),b.a.registerLanguage("js",k.a),b.a.registerLanguage("css",_.a);var x={name:"FakeIDE",data(){return{docs:[{name:"experience",type:"html",content:u},{name:"projects",type:"js",content:d},{name:"skills",type:"css",content:v}]}},mounted(){for(let n of this.docs)n.content=b.a.highlight(n.type,n.content).value}},j=x,C=(e("655f"),e("2877")),T=e("6544"),V=e.n(T),P=e("b0af"),S=e("99d9"),E=e("a523"),O=e("71a3"),I=e("c671"),L=e("fe57"),A=Object(C["a"])(j,s,c,!1,null,null,null);A.options.__file="FakeIDE.vue";var F=A.exports;V()(A,{VCard:P["a"],VCardText:S["a"],VContainer:E["a"],VTab:O["a"],VTabItem:I["a"],VTabs:L["a"]});var D={name:"App",components:{FakeIDE:F},data(){return{dark:!0,links:[{icon:"github",url:"https://github.com/Jugbot"},{icon:"linkedin",url:"https://www.linkedin.com/in/lucas-pollice/"},{icon:"reddit",url:"https://www.reddit.com/user/Jugbot"},{icon:"deviantart",url:"https://www.deviantart.com/jugbotery"},{icon:"discord",url:"https://discordapp.com/users/214328380189966337"}]}}},N=D,U=e("7496"),M=e("8212"),J=e("8336"),W=e("0e8f"),Y=e("553a"),R=e("132d"),B=e("a722"),H=Object(C["a"])(N,i,o,!1,null,null,null);H.options.__file="App.vue";var q=H.exports;V()(H,{VApp:U["a"],VAvatar:M["a"],VBtn:J["a"],VContainer:E["a"],VFlex:W["a"],VFooter:Y["a"],VIcon:R["a"],VLayout:B["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:n=>n(q)}).$mount("#app")},"655f":function(n,t,e){"use strict";var a=e("262e"),r=e.n(a);r.a},"915e":function(n,t,e){n.exports=e.p+"img/avatar.1e65a1bf.jpg"}});
//# sourceMappingURL=app.5d2b465f.js.map