(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-040d"],{"3rO+":function(e,t,l){"use strict";l.r(t);var a={components:{selectbox:l("ThUY").a},mixins:[{data:function(){return{basic_options:{time1:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],time2:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"}],time3:[{value:200,label:"200"},{value:250,label:"250"},{value:300,label:"300"},{value:350,label:"350"},{value:400,label:"400"},{value:450,label:"450"},{value:500,label:"500"}],time4:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"}],time5:[{value:1,label:"yyyy-mm-dd hh:mm:ss"},{value:2,label:"yyyymmddhhmmss"},{value:3,label:"dd-mm-yyyy hh:mm:ss"},{value:4,label:"ddmmyyyyhhmmss"}],time6:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}],time7:[{value:1,label:" "},{value:2,label:","},{value:3,label:";"},{value:4,label:"_"},{value:5,label:"/"},{value:6,label:"-"}]}}}}],data:function(){this.$createElement;return{field:{word:""},form:{cmd:"",comport_delaytime:0,network_delaytime:0,rs485_delaytime:0,ip_port:0,facepass_port:0,timezone:0},timing:{date1:"",date2:""},data:[],value:[],delete_all_num:1,hasCheckedWHLeftData:[],checked:!0,checked1:!1,checked2:!1,renderFunc:function(e,t){return e("span",[t.label])}}},mounted:function(){this.base_para_details(),this.comm_use("get_config")},methods:{add_word:function(){var e=this;""!==this.form.word?(console.log(this.form.word),this.$store.dispatch("interactive/Add_fields",this.field.word).then(function(t){e.base_para_details(),e.field.word=""}).catch(function(){console.log("error")})):this.$message.error("字段名称为空！")},base_para_details:function(){var e=this;this.data=[],this.$store.dispatch("interactive/Base_para_details",{}).then(function(t){t.BasePara.CustomField.forEach(function(t,l){e.$set(e.data,l,{key:l,label:t})})}).catch(function(){console.log("error")})},delete_all:function(e,t){var l=this;this.$store.dispatch("interactive/Delete_fields",{field_name:t,delete_all:e}).then(function(e){l.base_para_details()}).catch(function(){console.log("error")})},handleWHLeftChange:function(e,t){this.hasCheckedWHLeftData=[];for(var l=0;l<e.length;l++)for(var a=0;a<this.data.length;a++)e[l]===this.data[a].key&&this.hasCheckedWHLeftData.push(this.data[a].label)},comm_use:function(e){var t=this;this.form.cmd=e,this.$store.dispatch("interactive/Communication",this.form).then(function(e){t.form=e.config}).catch(function(){console.log("error")})},timing_download_but:function(e){var t=this;this.$store.dispatch("interactive/Timing_download",this.form).then(function(e){t.form=e.config}).catch(function(){console.log("error")})}}},o=(l("67SO"),l("KHd+")),s=Object(o.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"basic app-container"},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:11}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("自定义字段设置")])]),e._v(" "),l("div",[l("el-form",{staticClass:"demo-form-inline word-name",attrs:{inline:!0,model:e.field}},[l("el-form-item",{staticClass:"word-box",attrs:{label:"字段名称"}},[l("el-input",{model:{value:e.field.word,callback:function(t){e.$set(e.field,"word",t)},expression:"field.word"}})],1),e._v(" "),l("el-form-item",{staticClass:"word-but"},[l("el-button",{attrs:{type:"primary"},on:{click:e.add_word}},[e._v("新增")])],1)],1)],1),e._v(" "),l("div",{staticStyle:{"text-align":"center"}},[l("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{"render-content":e.renderFunc,titles:["字段列表"],data:e.data,filterable:""},on:{"left-check-change":e.handleWHLeftChange},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.option;return l("span",{},[e._v(e._s(a.label))])}}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[l("el-button",{staticClass:"transfer-footer",attrs:{slot:"left-footer",size:"small"},on:{click:function(t){e.delete_all(1)}},slot:"left-footer"},[e._v("清除所有字段")]),e._v(" "),l("el-button",{staticClass:"transfer-footer",attrs:{slot:"left-footer",icon:"el-icon-delete",size:"small"},on:{click:function(t){e.delete_all("",e.hasCheckedWHLeftData)}},slot:"left-footer"})],1)],1)])],1)]),e._v(" "),l("el-col",{attrs:{span:13}},[l("div",{staticClass:"grid-content bg-purple-light communication"},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("通讯参数")]),e._v(" "),l("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"primary"},on:{click:function(t){e.comm_use("update_config")}}},[e._v("应用")])],1),e._v(" "),l("div",{staticClass:"text item"},[l("el-form",{attrs:{"label-width":"300px","label-position":"left"}},[l("el-form-item",{attrs:{label:"串口通讯超过时间(单位：秒)"}},[l("selectbox",{attrs:{options:e.basic_options.time1},model:{value:e.form.comport_delaytime,callback:function(t){e.$set(e.form,"comport_delaytime",t)},expression:"form.comport_delaytime"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"网络通讯超过时间 (单位：秒)"}},[l("selectbox",{attrs:{options:e.basic_options.time2},model:{value:e.form.network_delaytime,callback:function(t){e.$set(e.form,"network_delaytime",t)},expression:"form.network_delaytime\t"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"RS485通讯超过时间 (单位：毫秒)"}},[l("selectbox",{attrs:{options:e.basic_options.time3},model:{value:e.form.rs485_delaytime,callback:function(t){e.$set(e.form,"rs485_delaytime",t)},expression:"form.rs485_delaytime"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"网络通讯端口"}},[l("el-input",{attrs:{placeholder:"请填写"},model:{value:e.form.ip_port,callback:function(t){e.$set(e.form,"ip_port",t)},expression:"form.ip_port"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"人脸端口"}},[l("el-input",{attrs:{placeholder:"请填写"},model:{value:e.form.facepass_port,callback:function(t){e.$set(e.form,"facepass_port",t)},expression:"form.facepass_port"}})],1)],1),e._v(" "),l("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.form.timezone,callback:function(t){e.$set(e.form,"timezone",t)},expression:"form.timezone"}},[e._v("启用时区")])],1)])],1)])],1),e._v(" "),l("el-row",[l("el-col",{staticClass:"download-record",attrs:{span:24}},[l("div",{staticClass:"grid-content bg-purple-dark"},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("定时下载记录")]),e._v(" "),l("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"primary"},on:{click:e.timing_download_but}},[e._v("应用")])],1),e._v(" "),l("div",{staticClass:"text item"},[l("el-row",{attrs:{gutter:30}},[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bg-purple"},[l("div",{staticClass:"check-box"},[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("下载完成自动导出到文本文件")])],1),e._v(" "),l("el-form",{ref:"form",attrs:{model:e.timing,"label-width":"110px"}},[l("el-form-item",{attrs:{label:"定时下载时间"}},[l("el-row",[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.timing.date1,callback:function(t){e.$set(e.timing,"date1",t)},expression:"timing.date1"}})],1),e._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.timing.date2,callback:function(t){e.$set(e.timing,"date2",t)},expression:"timing.date2"}})],1)],1)],1)],1),e._v(" "),l("el-form",{staticClass:"file-selection export",attrs:{"auto-complete":"on","label-position":"left","label-width":"110px"}},[l("span",[l("el-form-item",{attrs:{label:"导出路径"}},[l("el-input",{model:{value:e.timing.date1,callback:function(t){e.$set(e.timing,"date1",t)},expression:"timing.date1"}})],1)],1),e._v(" "),l("span",[l("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/",accept:".mdb"}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("...")])],1)],1)]),e._v(" "),l("div",{staticClass:"check-box"},[l("el-checkbox",{model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("关闭时软件最小化到系统托盘")])],1),e._v(" "),l("div",[l("el-checkbox",{model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v("退出程序时，自动备份数据库")])],1)],1)]),e._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bg-purple-light"},[l("p",[e._v("导出字段格式设置")]),e._v(" "),l("div",{staticClass:"export-word"},[l("span",[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("考勤号")])],1),e._v(" "),l("span",[l("el-form",{attrs:{"label-width":"50px","label-position":"left"}},[l("el-form-item",{attrs:{label:"位数"}},[l("selectbox",{attrs:{options:e.basic_options.time4},model:{value:e.form.time1,callback:function(t){e.$set(e.form,"time1",t)},expression:"form.time1"}})],1)],1)],1)]),e._v(" "),l("div",{staticClass:"export-word"},[l("span",[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("时间")])],1),e._v(" "),l("span",[l("el-form",{attrs:{"label-width":"50px","label-position":"left"}},[l("el-form-item",{attrs:{label:"格式"}},[l("selectbox",{attrs:{options:e.basic_options.time5},model:{value:e.form.time1,callback:function(t){e.$set(e.form,"time1",t)},expression:"form.time1"}})],1)],1)],1)]),e._v(" "),l("div",{staticClass:"export-word"},[l("span",[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("状态")])],1),e._v(" "),l("span",[l("el-form",{attrs:{"label-width":"50px","label-position":"left"}},[l("el-form-item",{attrs:{label:"位数"}},[l("selectbox",{attrs:{options:e.basic_options.time6},model:{value:e.form.time1,callback:function(t){e.$set(e.form,"time1",t)},expression:"form.time1"}})],1)],1)],1)]),e._v(" "),l("div",{staticClass:"export-word"},[l("span",[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("终端编号")])],1),e._v(" "),l("span",[l("el-form",{attrs:{"label-width":"50px","label-position":"left"}},[l("el-form-item",{attrs:{label:"位数"}},[l("selectbox",{attrs:{options:e.basic_options.time1},model:{value:e.form.time1,callback:function(t){e.$set(e.form,"time1",t)},expression:"form.time1"}})],1)],1)],1)]),e._v(" "),l("div",{staticClass:"export-word separator"},[l("span"),e._v(" "),l("span",[l("el-form",{attrs:{"label-width":"60px","label-position":"left"}},[l("el-form-item",{attrs:{label:"分隔符"}},[l("selectbox",{attrs:{options:e.basic_options.time7},model:{value:e.form.time1,callback:function(t){e.$set(e.form,"time1",t)},expression:"form.time1"}})],1)],1)],1)])])])],1)],1)])],1)])],1)],1)},[],!1,null,"3a94a820",null);s.options.__file="index.vue";t.default=s.exports},"67SO":function(e,t,l){"use strict";var a=l("fW1P");l.n(a).a},BYLh:function(e,t,l){"use strict";var a=l("eoyC");l.n(a).a},ThUY:function(e,t,l){"use strict";var a={model:{prop:"changeval",event:"up"},props:{options:{type:Array,default:function(){}},changeval:{type:Number,default:null}},data:function(){return{value:""}},methods:{change:function(e){this.$emit("up",e)}}},o=(l("BYLh"),l("KHd+")),s=Object(o.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("el-select",{attrs:{value:this.changeval,placeholder:"请选择"},on:{change:this.change}},this._l(this.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},[],!1,null,"5d1897b2",null);s.options.__file="index.vue";t.a=s.exports},eoyC:function(e,t,l){},fW1P:function(e,t,l){}}]);