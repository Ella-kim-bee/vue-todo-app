(function(){"use strict";var t={761:function(t,e,o){var s=o(144),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TodoSelectbox",{on:{selectedState:t.selectedState}}),o("TodoInput",{on:{addList:t.addList}}),o("MyList",{attrs:{title:"To do",type:"todo",list:t.todoItems},on:{removed:t.onRemoved}}),o("MyList",{attrs:{title:"Doing",type:"doing",list:t.doingItems},on:{removed:t.onRemoved}}),o("MyList",{attrs:{title:"Done",type:"done",list:t.doneItems},on:{removed:t.onRemoved}}),o("TodoFooter",{on:{removeAll:t.clearAll}})],1)},a=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("TODO it!")])])}],i={},d=i,c=o(1),u=(0,c.Z)(d,r,l,!1,null,"49b04524",null),m=u.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"selectBox shadow"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?o:o[0]},function(e){return t.selectedState()}]}},[o("option",{attrs:{value:"todo"}},[t._v("To Do")]),o("option",{attrs:{value:"doing"}},[t._v("Doing")]),o("option",{attrs:{value:"done"}},[t._v("Done")])])])},f=[],p={data(){return{selected:"todo"}},methods:{selectedState(){this.$emit("selectedState",this.selected)}}},v=p,g=(0,c.Z)(v,h,f,!1,null,null,null),I=g.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inputBox shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",placeholder:"Type what you have to do"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addList.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("span",{staticClass:"addContainer",on:{click:t.addList}},[o("i",{staticClass:"addBtn fas fa-plus",attrs:{"aria-hidden":"true"}})]),t.showModal?o("modal",{attrs:{show:t.showModal},on:{close:function(e){t.showModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고")]),o("span",{attrs:{slot:"body"},slot:"body"},[t._v("내용이 없습니다.")]),o("span",{attrs:{slot:"footer"},on:{click:function(e){t.showModal=!1}},slot:"footer"},[t._v(" 할 일을 입력하세요. "),o("i",{staticClass:"closeModalBtn fas fa-times",attrs:{"aria-hidden":"true"}})])]):t._e()],1)},_=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Transition",{attrs:{name:"modal"}},[t.show?o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v("default header")]}))],2),o("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v("default body")]}))],2),o("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),o("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("OK")])]}))],2)])])]):t._e()])},T=[],b={props:{show:Boolean}},S=b,C=(0,c.Z)(S,w,T,!1,null,null,null),k=C.exports,O={props:["propsdata"],data(){return{newTodoItem:"",showModal:!1}},methods:{addList(){if(""!==this.newTodoItem){const t=this.newTodoItem&&this.newTodoItem.trim();this.$emit("addList",t),this.clearInput()}else this.showModal=!this.showModal},clearInput(){this.newTodoItem=""},selectedState(t){this.selected=t}},components:{Modal:k}},x=O,$=(0,c.Z)(x,y,_,!1,null,null,null),M=$.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h4",[t._v(t._s(t.title))]),o("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.list,(function(e,s){return o("li",{key:e,staticClass:"shadow"},[o("i",{staticClass:"checkBtn fas fa-check",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(e)+" "),o("span",{staticClass:"removeBtn",attrs:{type:"button"},on:{click:function(e){return t.removeItem(s)}}},[o("i",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"}})])])})),0)],1)},L=[],A={data(){return{}},props:{title:String,list:Array,type:String},methods:{removeItem(t){this.list.splice(t,1),this.$emit("removed",this.list,this.type)}}},Z=A,B=(0,c.Z)(Z,E,L,!1,null,"19167a60",null),N=B.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearAllContainer"},[o("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])},j=[],D={methods:{clearTodo(){this.$emit("removeAll")}}},P=D,R=(0,c.Z)(P,J,j,!1,null,null,null),F=R.exports;const H={getItem(t){return new Promise(((e,o)=>{const s=localStorage.getItem(t);s&&setTimeout((()=>{try{e(JSON.parse(s))}catch(t){console.error("Error on parse Json.\n message : ",t.message),o(t)}e(s)}),300)}))},setItem(t,e){"string"===typeof e?localStorage.setItem(t,e):localStorage.setItem(t,JSON.stringify(e))}};var K=H,q={data(){return{todoItems:[],doingItems:[],doneItems:[],selected:"todo"}},async created(){let t=[];t.push(K.getItem("todo")),t.push(K.getItem("doing")),t.push(K.getItem("done"));let[e,o,s]=await Promise.allSettled(t);this.todoItems=e.value,this.doingItems=o.value,this.doneItems=s.value},methods:{addList(t){let e=this.selected;switch(e){case"todo":this.todoItems.push(t),localStorage.setItem(e,JSON.stringify(this.todoItems));break;case"doing":this.doingItems.push(t),localStorage.setItem(e,JSON.stringify(this.doingItems));break;case"done":this.doneItems.push(t),localStorage.setItem(e,JSON.stringify(this.doneItems));break}},clearAll(){localStorage.clear(),this.todoItems=[],this.doingItems=[],this.doneItems=[]},onRemoved(t,e){localStorage.setItem(e,JSON.stringify(t))},selectedState(t){this.selected=t}},components:{TodoHeader:m,TodoSelectbox:I,TodoInput:M,MyList:N,TodoFooter:F}},z=q,G=(0,c.Z)(z,n,a,!1,null,null,null),Q=G.exports;s.Z.config.productionTip=!1,new s.Z({render(t){return t(Q)}}).$mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,a){if(!s){var r=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],a=t[c][2];for(var l=!0,i=0;i<s.length;i++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[i])}))?s.splice(i--,1):(l=!1,a<r&&(r=a));if(l){t.splice(c--,1);var d=n();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[s,n,a]}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,r=s[0],l=s[1],i=s[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var c=i(o)}for(e&&e(s);d<r.length;d++)a=r[d],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},s=self["webpackChunktodo"]=self["webpackChunktodo"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(761)}));s=o.O(s)})();
//# sourceMappingURL=app-legacy.fb0535d9.js.map