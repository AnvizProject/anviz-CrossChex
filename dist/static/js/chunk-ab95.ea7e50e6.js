(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ab95"],{"4QzO":function(t,e,a){},k81d:function(t,e,a){"use strict";var l=a("4QzO");a.n(l).a},mMj9:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{radio:"1",form:{input1:""}}},methods:{getConfigResult:function(t){console.log(t)},websocketToLogin:function(){this.socketApi.sendSock(JSON.parse('{"cmd":"ping"}'),this.getConfigResult)}}},o=(a("k81d"),a("KHd+")),i=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-base main-content"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("数据库设置")]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"primary"},on:{click:t.websocketToLogin}},[t._v("应用")])],1),t._v(" "),a("div",{staticClass:"text item"},[a("div",{staticClass:"content-part"},[a("div",{staticClass:"file-selection-wrap"},[a("el-form",{staticClass:"file-selection",attrs:{"auto-complete":"on","label-position":"left","label-width":"100px"}},[a("span",[a("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("Access文件")])],1),t._v(" "),a("span",[a("el-input",{model:{value:t.form.input1,callback:function(e){t.$set(t.form,"input1",e)},expression:"form.input1"}})],1),t._v(" "),a("span",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/",accept:".mdb"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("...")])],1)],1)])],1),t._v(" "),a("el-form",{staticClass:"data-selection",attrs:{"auto-complete":"on","label-position":"left","label-width":"25%"}},[a("div",{staticClass:"data-base-selection"},[a("span",[a("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("Sql Sever")])],1),t._v(" "),a("span",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)]),t._v(" "),a("el-form-item",{attrs:{label:"服务器IP"}},[a("el-input",{model:{value:t.form.input1,callback:function(e){t.$set(t.form,"input1",e)},expression:"form.input1"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户名称"}},[a("el-input",{model:{value:t.form.input1,callback:function(e){t.$set(t.form,"input1",e)},expression:"form.input1"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户密码"}},[a("el-input",{model:{value:t.form.input1,callback:function(e){t.$set(t.form,"input1",e)},expression:"form.input1"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数据库名"}},[a("el-input",{model:{value:t.form.input1,callback:function(e){t.$set(t.form,"input1",e)},expression:"form.input1"}})],1)],1)],1)])])],1)},[],!1,null,"3c34dce4",null);i.options.__file="index.vue";e.default=i.exports}}]);