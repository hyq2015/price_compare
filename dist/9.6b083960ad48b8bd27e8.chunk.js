webpackJsonp([9],{507:function(t,e,a){"use strict";function o(t){l||a(528)}Object.defineProperty(e,"__esModule",{value:!0});var c=a(517),s=a(529),l=!1,r=a(178),n=o,i=r(c.a,s.a,!1,n,"data-v-236aca37",null);i.options.__file="src\\views\\addlog.vue",e.default=i.exports},517:function(t,e,a){"use strict";var o=a(179);e.a={data:function(){return{product:{name:"",scaleName:"",price:"",date:"",hasImg:!0},files:[],previewImg:""}},methods:{handleUpload:function(t){console.log(t),this.files.push(t);var e=new FileReader,a=this;return e.onload=function(t){a.previewImg=t.target.result},e.readAsDataURL(t),!1},getCode:function(){o.a.ajax({method:"get",url:"http://192.168.31.204:8090/portal/smsCode",params:{phone:"18030638805"}}).then(function(t){console.log(t)}).catch(function(t){console.log(t.message)})},getLog:function(){o.a.ajax({method:"get",url:"http://192.168.31.204:8090/portal/smsLog",params:{page:1,pageSize:10}}).then(function(t){console.log(t)}).catch(function(t){console.log(t.message)})},change:function(t){console.log(t)}}}},528:function(t,e){},529:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_outer"},[a("Form",{staticClass:"add_form",staticStyle:{width:"800px"},attrs:{"label-width":80}},[a("FormItem",{attrs:{label:"日期"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期"}})],1),t._v(" "),a("FormItem",{attrs:{label:"商品名称"}},[a("Input",{attrs:{placeholder:"输入商品名称..."},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"商品型号"}},[a("Input",{attrs:{placeholder:"输入商品规格/型号..."},model:{value:t.product.scaleName,callback:function(e){t.$set(t.product,"scaleName",e)},expression:"product.scaleName"}})],1),t._v(" "),a("FormItem",{attrs:{label:"商品价格"}},[a("Input",{attrs:{placeholder:"输入商品价格..."},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}})],1),t._v(" "),a("FormItem",{attrs:{label:"商品图片"}},[a("i-switch",{on:{"on-change":t.change},model:{value:t.product.hasImg,callback:function(e){t.$set(t.product,"hasImg",e)},expression:"product.hasImg"}}),t._v(" "),t.product.hasImg?a("Upload",{attrs:{"before-upload":t.handleUpload,multiple:"",type:"select",action:"//jsonplaceholder.typicode.com/posts/"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),a("p",[t._v("点击或拖拽即可上传图片")])],1)]):t._e(),t._v(" "),t.product.hasImg?a("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.previewImg}}):t._e()],1),t._v(" "),a("Button",{attrs:{type:"success",long:""},on:{click:t.getCode}},[t._v("提交")]),t._v(" "),a("Button",{attrs:{type:"success",long:""},on:{click:t.getLog}},[t._v("获取日志")])],1)],1)},c=[];o._withStripped=!0;var s={render:o,staticRenderFns:c};e.a=s}});