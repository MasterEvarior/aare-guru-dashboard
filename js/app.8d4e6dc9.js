(function(t){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},t._l(t.cities,(function(t){return r("v-flex",{key:t.city,attrs:{xs12:"",sm6:"",md6:"",lg4:"",xl3:""}},[r("InfoCard",{attrs:{cityUrl:t.today}})],1)})),1)],1)],1),r("v-footer",[r("v-btn",{attrs:{href:"https://aare.guru",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Alli Date si vo aare.guru")]),r("v-icon",[t._v("mdi-open-in-new")])],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/MasterEvarior/aare-guru-dashboard",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Lueg ds projekt uf GitHub a")]),r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)},o=[],i=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-4",attrs:{flat:"",color:this.$randomColor({luminosity:"dark",hue:"random"})}},[r("v-card-title",[t._v(t._s(t.response.name))]),r("v-card-text",[t._v(" D Temperatur isch "+t._s(t.response.aare_prec)+"°C "),r("br"),t._v(" Üses Fazit: "+t._s(t.response.text)+" ")]),r("v-card-actions",[r("v-btn",{attrs:{outlined:"",href:t.infoUrl,target:"_blank"}},[t._v(" Meh Infos ")])],1)],1)}),s=[],u=(r("b0c0"),{name:"InfoCard",props:{cityUrl:{type:String,required:!0}},data:function(){return{response:{}}},mounted:function(){var t=this,e=this.cityUrl+"&app="+this.$appName+"&version="+this.$appVersion;fetch(e).then((function(t){return t.json()})).then((function(e){t.response=e}))},computed:{infoUrl:function(){return"https://aare.guru/#"+this.response.name}}}),c=u,p=r("2877"),l=r("6544"),f=r.n(l),d=r("8336"),v=r("b0af"),h=r("99d9"),b=Object(p["a"])(c,i,s,!1,null,"53623497",null),m=b.exports;f()(b,{VBtn:d["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"]});var y={name:"App",components:{InfoCard:m},data:function(){return{cities:{}}},mounted:function(){var t=this,e=this.$apiBaseUrl+"/cities";fetch(e).then((function(t){return t.json()})).then((function(e){return t.cities=e}))}},_=y,g=r("7496"),x=r("a523"),w=r("0e8f"),V=r("553a"),j=r("132d"),C=r("a722"),O=r("f6c4"),k=r("2fa4"),$=Object(p["a"])(_,a,o,!1,null,null,null),M=$.exports;f()($,{VApp:g["a"],VBtn:d["a"],VContainer:x["a"],VFlex:w["a"],VFooter:V["a"],VIcon:j["a"],VLayout:C["a"],VMain:O["a"],VSpacer:k["a"]});var P=r("f309");n["a"].use(P["a"]);var S=new P["a"]({theme:{dark:!0}}),U=r("5b80");n["a"].use(U["a"]),n["a"].config.productionTip=!1,n["a"].prototype.$appName="aare-guru-dashboard",n["a"].prototype.$appVersion="1.0.0",n["a"].prototype.$apiBaseUrl="https://aareguru.existenz.ch/v2018",new n["a"]({vuetify:S,render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.8d4e6dc9.js.map