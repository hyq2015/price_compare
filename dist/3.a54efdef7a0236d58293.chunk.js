webpackJsonp([3],{506:function(t,e,n){"use strict";function s(t){i||n(526)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(516),c=n(527),i=!1,o=n(178),r=s,u=o(a.a,c.a,!1,r,"data-v-21879cae",null);u.options.__file="src\\views\\productList.vue",e.default=u.exports},516:function(t,e,n){"use strict";var s=n(71);n(179);e.a={computed:Object.assign({},Object(s.b)({columns1:"columns1",data1:"data1",count:"count"})),data:function(){return{globalUserName:"瓜牛"}},created:function(){this.$store.dispatch("changeMenuStatus",!0)},methods:{handleStart:function(){this.$Modal.info({title:"Bravo",content:"Now, enjoy the convenience of iView."})},increment:function(){this.$store.dispatch("increment"),console.log(this.$store),this.$store.dispatch("reviseUserName",this.globalUserName)},decrement:function(){this.$store.dispatch("decrement")}}}},526:function(t,e){},527:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{attrs:{columns:t.columns1,data:t.data1}})],1)},a=[];s._withStripped=!0;var c={render:s,staticRenderFns:a};e.a=c}});