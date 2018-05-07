webpackJsonp([6],{515:function(e,t,n){"use strict";function r(e){i||n(544)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(525),o=n(545),i=!1,a=n(178),l=r,p=a(s.a,o.a,!1,l,null,null);p.options.__file="src\\views\\login.vue",t.default=p.exports},525:function(e,t,n){"use strict";var r=n(71);t.a={computed:Object.assign({},Object(r.b)({})),data:function(){return{formInline:{phone:"",password:""},maxLength:11,ruleInline:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{type:"string",min:11,max:11,message:"请输入11位手机号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码不小于6位",trigger:"blur"}]}}},created:function(){this.$store.dispatch("changeMenuStatus",!1)},mounted:function(){},methods:{handleSubmit:function(e){this.$router.push("/product/list")}}}},544:function(e,t){},545:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"login_bg"},[n("Form",{ref:"formInline",staticClass:"login_form",attrs:{model:e.formInline,rules:e.ruleInline}},[n("FormItem",[n("div",{staticClass:"welcome_txt"})]),e._v(" "),n("FormItem",{staticStyle:{"margin-top":"50px"},attrs:{prop:"phone"}},[n("Input",{attrs:{type:"text",placeholder:"手机号",maxlength:e.maxLength},model:{value:e.formInline.phone,callback:function(t){e.$set(e.formInline,"phone",t)},expression:"formInline.phone"}},[n("Icon",{attrs:{slot:"prepend",type:"android-phone-portrait"},slot:"prepend"})],1)],1),e._v(" "),n("FormItem",{staticStyle:{"margin-top":"30px"},attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),e._v(" "),n("FormItem",{staticStyle:{"margin-top":"100px"}},[n("Button",{attrs:{type:"success",size:"large",long:""},on:{click:function(t){e.handleSubmit("formInline")}}},[e._v("登录")])],1)],1)],1)])},s=[];r._withStripped=!0;var o={render:r,staticRenderFns:s};t.a=o}});