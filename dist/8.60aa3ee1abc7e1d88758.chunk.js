webpackJsonp([8],{48:function(t,e,a){"use strict";function o(t){s||a(70)}Object.defineProperty(e,"__esModule",{value:!0});var c=a(58),l=a(71),s=!1,n=a(11),i=o,r=n(c.a,l.a,!1,i,"data-v-364c73cf",null);r.options.__file="src\\views\\createProduct.vue",e.default=r.exports},58:function(t,e,a){"use strict";var o=a(10),c=(a(12),new o.a.Store({state:{product:{name:"",scaleDto:[{name:"",price:.1,originPrice:""}],imgurl:"",detailImgs:[],video:"",hasVideo:!0,belongShop:{id:"",name:""}}},mutations:{handleUpload:function(){},saveData:function(){},previewData:function(){},addScale:function(t){t.product.scaleDto.push({name:"",price:.1,originPrice:""})},deleteScale:function(t,e){t.product.scaleDto.splice(e,1)}}}));e.a={computed:Object(o.c)({product:function(t){return t.product}}),store:c,methods:{handleUpload:function(){},saveData:function(){},previewData:function(){},change:function(){},addScale:function(){c.commit("addScale")},deleteScale:function(t,e){c.commit("deleteScale",t)}}}},70:function(t,e){},71:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_outer"},[a("Form",{staticClass:"add_form",attrs:{"label-width":120}},[a("FormItem",{attrs:{label:"商品名称"}},[a("Input",{attrs:{placeholder:"输入商品名称..."},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),t._v(" "),t._l(t.product.scaleDto,function(e,o){return a("div",{staticClass:"scale_item"},[a("FormItem",{attrs:{label:"商品型号"}},[a("Input",{attrs:{placeholder:"输入商品规格/型号..."},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"商品价格"}},[a("InputNumber",{staticStyle:{width:"100%"},attrs:{min:.1,placeholder:"输入规格价格..."},model:{value:e.price,callback:function(a){t.$set(e,"price",a)},expression:"item.price"}})],1),t._v(" "),a("div",{staticClass:"del_icon",on:{click:function(e){t.deleteScale(o,e)}}},[a("Tooltip",{attrs:{content:"删除此规格",placement:"right"}},[0!=o?a("Icon",{attrs:{size:"20",type:"trash-a"}}):t._e()],1),a("br"),a("br")],1)],1)}),t._v(" "),a("FormItem",[a("div",{staticStyle:{cursor:"pointer","font-size":"14px",width:"100px"},on:{click:t.addScale}},[a("span",[t._v("添加规格")]),t._v(" "),a("Icon",{attrs:{type:"plus-round",size:"14"}})],1)]),t._v(" "),a("FormItem",{attrs:{label:"商品封面"}},[a("Upload",{attrs:{"before-upload":t.handleUpload,type:"select",action:"//jsonplaceholder.typicode.com/posts/"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),a("p",[t._v("点击或拖拽即可上传图片")])],1)])],1),t._v(" "),a("FormItem",{attrs:{label:"商品介绍图片"}},[a("Upload",{attrs:{"before-upload":t.handleUpload,type:"select",multiple:"",action:"//jsonplaceholder.typicode.com/posts/"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),a("p",[t._v("点击或拖拽即可上传图片")])],1)])],1),t._v(" "),a("FormItem",{attrs:{label:"商品视频"}},[a("i-switch",{on:{"on-change":t.change},model:{value:t.product.hasImg,callback:function(e){t.$set(t.product,"hasImg",e)},expression:"product.hasImg"}}),t._v(" "),t.product.hasImg?a("Upload",{attrs:{"before-upload":t.handleUpload,multiple:"",type:"select",action:"//jsonplaceholder.typicode.com/posts/"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),a("p",[t._v("点击或拖拽即可上传图片")])],1)]):t._e()],1),t._v(" "),a("FormItem",[a("Button",{staticClass:"btn",attrs:{type:"success"},on:{click:t.saveData}},[t._v("提交")]),t._v(" "),a("Button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.previewData}},[t._v("预览")])],1)],2)],1)},c=[];o._withStripped=!0;var l={render:o,staticRenderFns:c};e.a=l}});