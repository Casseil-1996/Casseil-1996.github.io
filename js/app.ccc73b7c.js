(function(t){function e(e){for(var i,r,a=e[0],o=e[1],u=e[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(i=!1)}i&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},c=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"26e1":function(t,e,n){},"43d1":function(t,e,n){},"55bb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],r={name:"app",components:{}},a=r,o=(n("034f"),n("2877")),u=Object(o["a"])(a,s,c,!1,null,null,null),l=u.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"pannel"},[n("div",{staticClass:"abstract"},t._l(t.abstractList,(function(t){return n("re-section",{key:t.tit.des,attrs:{abstract:t}})})),1),n("div",{staticClass:"right"},[n("div",{staticClass:"part"},[n("div",{staticClass:"title"},[t._v("任职经历")]),t._l(t.career,(function(e){return n("div",{key:e.during,staticClass:"career mb10 content"},[n("div",{staticClass:"com"},[t._v(t._s(e.com))]),n("div",{staticClass:"during"},[t._v(t._s(e.during))]),n("div",{staticClass:"duty"},[t._v(t._s(e.duty))])])}))],2),n("div",{staticClass:"part"},[n("div",{staticClass:"title"},[t._v("主要项目经历")]),t._l(t.ProjectList1,(function(e){return n("div",{key:e.title,staticClass:"content"},[n("p",[t._v(t._s(e.title))]),t._l(e.desc,(function(e){return n("p",{key:e},[t._v(t._s(e))])}))],2)}))],2)])]),n("div",{staticClass:"pannel"},[n("div",[n("div",{staticClass:"project"},t._l(t.ProjectList2,(function(e){return n("div",{key:e.title,staticClass:"content"},[n("p",[t._v(t._s(e.title))]),t._l(e.desc,(function(e){return n("p",{key:e},[t._v(t._s(e))])}))],2)})),0),t._l(t.partList,(function(e){return n("div",{key:e.title,staticClass:"project"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"content"},t._l(e.content,(function(e){return n("p",{key:e},[t._v(t._s(e))])})),0)])}))],2)])])},p=[],v=(n("4de4"),n("5530")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ReSection",attrs:{id:"ReSection"}},[n("div",{staticClass:"tit"},[n("div",{staticClass:"icon-warp"},[t.abstract.tit.icon.startsWith("el-icon-")?n("i",{staticClass:"fz18",class:t.abstract.tit.icon}):n("a-icon",{attrs:{theme:t.abstract.tit.theme,type:t.abstract.tit.icon}})],1),n("div",{staticClass:"ml15"},[t._v(t._s(t.abstract.tit.des))])]),n("ul",{staticClass:"content"},t._l(t.abstract.detail,(function(e){return n("li",{key:e.des},[e.icon.startsWith("el-icon-")?n("i",{class:e.icon}):n("a-icon",{attrs:{theme:e.theme,type:e.icon}}),n("span",{staticClass:"ml10"},[t._v(t._s(e.des))])],1)})),0)])},m=[],_={name:"ReSection",props:{abstract:{required:!0,type:Object}},data:function(){return{}},created:function(){this.init()},watch:{},methods:{init:function(){}}},h=_,y=(n("bcc7"),Object(o["a"])(h,b,m,!1,null,"16bbb92c",null)),C=y.exports,g={abstractList:[{tit:{des:"个人信息 Personal",icon:"el-icon-user-solid"},detail:[{icon:"user",des:"姓名 徐郝"},{icon:"info-circle",des:"出生年月 1996/09"},{icon:"bank",des:"就读院校 安顺学院"}]},{tit:{des:"联系我 Contacts",icon:"el-icon-phone"},detail:[{icon:"wechat",des:"EXP-1976"},{icon:"dingding",des:"138 1367 5568"},{theme:"filled",icon:"mobile",des:"与钉钉同号"},{theme:"filled",icon:"mail",des:"xuhao5568@gmail.com"}]},{tit:{des:"职业技能 Skills",icon:"tool",theme:"filled"},detail:[{icon:"github",des:"Git"},{icon:"paper-clip",des:"Vue全家桶"},{icon:"code-sandbox",des:"微信小程序"},{icon:"ant-design",des:"Ant Design of Vue"},{icon:"el-icon-eleme",des:"Element"},{icon:"el-icon-full-screen",des:"多端适配"},{icon:"el-icon-guide",des:"Less, Sass"},{icon:"el-icon-document",des:"jQuery及原生Dom"}]},{tit:{des:"兴趣爱好 Interests",icon:"heart",theme:"filled"},detail:[{icon:"play-circle",des:"电影"},{icon:"book",des:"阅读"},{icon:"team",des:"团体活动"},{icon:"line-chart",des:"金融股票"},{icon:"laptop",des:"电子数码"}]}],partList:[{title:"关于我",content:["现居上海浦东曹路, 从事前端工作3年左右, 全日制本科。目前单身, 抗压能力好, 空余时间充分。期望在上海工作, 机会合适的情况下（能够参与大型项目的核心内容, 或职业成长路线清晰, 考核机制完善等）可以考虑江浙沪闽等临近省市。","代码习惯好, 平时有整理自己经手过项目的习惯（目录结构, 提取公共代码、公共模块等）。服从安排, 确保项目保质保量按时落地执行, 有多个PC端、移动端以及自适应项目经验, 能够独立完成绝大多数项目中的前端部分。","在我工作的这三年里, 一直深耕Vue, 对其执行顺序, 动态数据响应原理, VueRouter, Vuex等多个相关领域拥有丰富的理论知识和经验。喜欢探索新鲜事物, 自学能力强。","计划在2020年底前学会并使用React和Node.js相关知识, 并具有企业级开发能力"]}],career:[{com:"北京昆仑亿发科技股份有限公司",during:"2019年1月-2020年5月",duty:"上海项目组前端工程师，负责与后端对接接口，实现设计图"},{com:"北京昆仑亿发科技股份有限公司",during:"2019年7月-2020年1月",duty:"上海交付组前端工程师，对现有项目进行版本更新与性能优化，根据客户需求定制化开发平台系统中未涉及的功能"},{com:"上海拎客科技有限公司",during:"2019年4月-2019年6月",duty:"前端组组长，带领组中其他伙伴开发项目"},{com:"上海拎客科技有限公司",during:"2018年7月-2019年4月",duty:"前端工程师，完成公司基础的线上项目"}],ProjectList:[{title:"5. 深圳国家会展中心管理后台 2019年1月至今",desc:["技术栈：Vue + VueRouter + Vuex, Antdv, ES6, Sass","a) 具有权限系统、个人中心、工作人员管理后台、制证中心、服务商后台、统计报表等多个模块","b) 参与定义接口，设计权限，功能拆分等工作","c) 独立完成前端部分，并实现pc端浏览器的兼容和移动端的机型适配","d) 产品提出用户界面和用户体验方面的合理建议"]},{title:"4. CEFCO 2020 第十六届中国会展经济国际合作论坛 2019年7月-2020年1月",desc:["技术栈：Vue + VueRouter + Vuex, Element, ES6, Less","a) Vue 自适应项目","b) 借助百度AI，实现了人脸识别功能","c) 使用Vuex管理多语言功能","d) 主要功能模块有问卷调查、证件照上传、资格审核、微信付款"]},{title:"3. 锦江之星酒店服务展 2019年7月-2020年1月",desc:["技术栈：Vue + VueRouter + Vuex, Element, ES6, Less","a) Vue PC端项目","b) 使用Vuex管理项目数据，避免冗余请求","c) 协助后端配置history router模式，优化地址栏显示效果。","d) 完成从展商预约登记，资料中心，展具租赁，付款，凭据打印等主要业务功能","e) 使用导航守卫完成权限功能"]},{title:"2. E展通自定制(约20个项目) 2019年7月-2020年1月",desc:["技术栈：Vue + VueRouter + Vuex","a) 依托公司E展通配置平台通用代码，对客户有自定制需求的功能进行二次开发","b) 开发过程中评估通用平台功能通用性，将经常需要定制的功能点融合进配置平台","c) 持续优化E展通通用平台的代码"]},{title:"1. 天网联盟系列产品 2018年7月-2019年6月",desc:["技术栈：Vue + VueRouter + Vuex, 微信小程序, Element, Less","a) 官网：完整参与了产品讨论、设计研发、项目部署的整个流程，独立完成预约下单功能，并打通与后台管理之间的数据流动。","b) 服务商后台管理：平台服务提供方的后台管理系统，兼具权限管理、电子围栏、开单、下单、司机管理、车辆管理、地址簿、客户簿、营收报表等主要功能。我负责除司机管理、车辆管理、营收报表以外的功能，以及提供项目搭建，","c) 小程序：服务商后台管理的微信小程序版本，接口与服务商后台高度一致, 我负责整个项目的设计、开发、上线","d) 天网后台：平台方管理服务提供方的后台管理系统，主要有服务商管理、营收报表等功能。我负责参与讨论产品设计，开发时间评估，项目搭建，以及其他技术支撑","e) 使用导航守卫完成权限功能"]}]},j={name:"Home",components:{reSection:C},computed:{ProjectList1:function(){return this.ProjectList.filter((function(t,e){return e<2}))},ProjectList2:function(){return this.ProjectList.filter((function(t,e){return e>=2}))}},data:function(){return Object(v["a"])({},g)}},V=j,x=(n("9e17"),Object(o["a"])(V,f,p,!1,null,null,null)),P=x.exports;i["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:P}],O=new d["a"]({routes:w}),S=O,k=n("2f62");i["a"].use(k["a"]);var E=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=(n("1951"),n("450d"),n("eedf")),R=n.n(L);i["a"].use(R.a);var M=n("0c63");i["a"].use(M["a"]);n("26e1");i["a"].config.productionTip=!1,new i["a"]({router:S,store:E,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){},"9e17":function(t,e,n){"use strict";var i=n("55bb"),s=n.n(i);s.a},bcc7:function(t,e,n){"use strict";var i=n("43d1"),s=n.n(i);s.a}});
//# sourceMappingURL=app.ccc73b7c.js.map