(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c270"],{"82+l":function(t,e,l){},FVPz:function(t,e,l){},Nzmo:function(t,e,l){"use strict";var a=l("82+l");l.n(a).a},O2MI:function(t,e,l){"use strict";var a=l("FVPz");l.n(a).a},ncxK:function(t,e,l){"use strict";l.r(e);var a={data:function(){return{centerDialogVisible:!1,tableData:[{Timename:"早班",Intime:"6:00",Outtime:"13:00"},{Timename:"中班",Intime:"13:00",Outtime:"18:00"},{Timename:"晚班",Intime:"18:00",Outtime:"24:00"}],tableData2:[{week:"星期日"},{week:"星期一"},{week:"星期二"},{week:"星期三"},{week:"星期四"},{week:"星期五"},{week:"星期六"}],multipleSelection:[]}},methods:{handleSelectionChange:function(t){this.multipleSelection=t}}},o=l("KHd+"),i=Object(o.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{visible:t.centerDialogVisible,title:"增加班次时间段",width:"45%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[l("span",[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:16}},[l("div",{staticClass:"grid-content bg-purple"},[l("p",[t._v("选择要增加的时间段")]),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{label:"时间段名称",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Timename))]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"Intime",label:"上班时间",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Outtime",label:"下班时间","show-overflow-tooltip":""}})],1)],1)]),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"grid-content bg-purple-light"},[l("p",[t._v("选择要增加该时间段的日期")]),t._v(" "),l("el-table",{ref:"multipleTable2",staticStyle:{width:"100%"},attrs:{data:t.tableData2,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{prop:"week",label:"单位/日期","show-overflow-tooltip":""}})],1)],1)])],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("确 定")])],1)])},[],!1,null,null,null);i.options.__file="addshift.vue";var s=i.exports,r={data:function(){return{centerDialogVisible:!1,tableData:[{Timename:"早班",Intime:"6:00",Outtime:"13:00"},{Timename:"中班",Intime:"13:00",Outtime:"18:00"},{Timename:"晚班",Intime:"18:00",Outtime:"24:00"}],tableData2:[{week:"星期日"},{week:"星期一"},{week:"星期二"},{week:"星期三"},{week:"星期四"},{week:"星期五"},{week:"星期六"}],tableData3:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],radio:"2",form:{region:""},multipleSelection:[]}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},newAdd:function(){console.log(123)}}},n=(l("Nzmo"),Object(o.a)(r,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{visible:t.centerDialogVisible,title:"人员班次设定",width:"45%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[l("span",[l("el-row",[l("el-col",{attrs:{span:24}},[l("p",{staticClass:"no-scheduling"},[l("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("不排班")])],1)])],1),t._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-divider",{attrs:{"content-position":"left"}},[l("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("正常排班")])],1),t._v(" "),l("div",{staticClass:"normal-scheduling"},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"班次名称"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[l("el-option",{attrs:{label:"早班",value:"zao"}}),t._v(" "),l("el-option",{attrs:{label:"中班",value:"zhong"}}),t._v(" "),l("el-option",{attrs:{label:"晚班",value:"wan"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"启用日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"结束日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),t._v(" "),l("el-form-item",{staticClass:"fun-btn"},[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.newAdd}},[t._v("新增")]),t._v(" "),l("el-button",{attrs:{type:"info",size:"mini"}},[t._v("删除")])],1)],1),t._v(" "),l("div",{staticClass:"shift-record"},[l("p",[t._v("当前排班记录")]),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData3,border:""}},[l("el-table-column",{attrs:{prop:"date",label:"班次名称"}}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"启用日期"}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"结束日期"}})],1)],1)],1)],1)]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-divider",{attrs:{"content-position":"left"}},[l("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("智能排班")])],1),t._v(" "),l("div",{staticClass:"normal-scheduling"},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"班次名称"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[l("el-option",{attrs:{label:"早班",value:"zao"}}),t._v(" "),l("el-option",{attrs:{label:"中班",value:"zhong"}}),t._v(" "),l("el-option",{attrs:{label:"晚班",value:"wan"}})],1)],1),t._v(" "),l("el-form-item",{staticClass:"fun-button"},[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.newAdd}},[t._v("新增")]),t._v(" "),l("el-button",{attrs:{type:"info",size:"mini"}},[t._v("删除")])],1)],1),t._v(" "),l("div",{staticClass:"shift-record"},[l("p",[t._v("当前选择的时间段")]),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData3,border:""}},[l("el-table-column",{attrs:{prop:"date",label:"时段名称"}}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"上班时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"下班时间"}})],1)],1)],1)],1)])],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("确 定")])],1)])},[],!1,null,"6fdb76c8",null));n.options.__file="setshift.vue";var c={components:{addshiftDialog:s,setshiftDialog:n.exports},data:function(){return{form:{Timename:"",Intime:"",Outtime:"",BIntime:"",EIntime:"",BOuttime:"",EOuttime:"",Latetime:"",Leavetime:"",WorkDays:"",Longtime:"",MustIn:"",MustOut:"",IsFreeTime:"",IsOverTime:""},value1:"",num:1,checked:!0,tableData:[],data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],multipleSelection:[],defaultProps:{children:"children",label:"label"}}},mounted:function(){this.timelist()},methods:{timelist:function(){var t=this;this.$store.dispatch("interactive/Time_list").then(function(e){t.tableData=e.TimeTable}).catch(function(){})},newlyAdded:function(){var t=this;this.$store.dispatch("interactive/Add_time",this.form).then(function(e){t.timelist()}).catch(function(){console.log(0)})},deleteRow:function(t,e){var l=this;console.log(e.Timeid),this.$store.dispatch("interactive/delete_time",e.Timeid).then(function(t){l.timelist()}).catch(function(){console.log(0)})},addShift:function(){this.$refs.addshiftDialog.centerDialogVisible=!0},setShift:function(){console.log(123),this.$refs.setshiftDialog.centerDialogVisible=!0},onSubmit:function(){console.log("submit!")},handleSelectionChange:function(t){this.multipleSelection=t},handleChange:function(t){console.log(t)},handleNodeClick:function(t){console.log(t)}}},m=(l("O2MI"),Object(o.a)(c,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"workforce main-content"},[l("el-tabs",{attrs:{type:"border-card"}},[l("el-tab-pane",{attrs:{label:"时间段设置"}},[l("el-row",{staticClass:"time-slot",attrs:{gutter:20}},[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bg-purple day"},[l("div",{staticClass:"day-top"},[t._v("时间段设置")]),t._v(" "),l("div",{staticClass:"day-bot day-list"},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px",size:"mini"}},[l("el-form-item",{attrs:{label:"时间段名称"}},[l("el-input",{model:{value:t.form.Timename,callback:function(e){t.$set(t.form,"Timename",e)},expression:"form.Timename"}})],1),t._v(" "),l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"上班时间"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.Intime,callback:function(e){t.$set(t.form,"Intime",e)},expression:"form.Intime"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"下班时间"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.Outtime,callback:function(e){t.$set(t.form,"Outtime",e)},expression:"form.Outtime"}})],1)],1)],1),t._v(" "),l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"开始签到时间"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.BIntime,callback:function(e){t.$set(t.form,"BIntime",e)},expression:"form.BIntime"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"结束签到时间"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.EIntime,callback:function(e){t.$set(t.form,"EIntime",e)},expression:"form.EIntime"}})],1)],1)],1),t._v(" "),l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"开始签退时间"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.BOuttime,callback:function(e){t.$set(t.form,"BOuttime",e)},expression:"form.BOuttime"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"结束签退时间"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.EOuttime,callback:function(e){t.$set(t.form,"EOuttime",e)},expression:"form.EOuttime"}})],1)],1)],1),t._v(" "),l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:12}},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:18}},[l("el-form-item",{attrs:{label:"记迟到时间"}},[l("el-input",{model:{value:t.form.Latetime,callback:function(e){t.$set(t.form,"Latetime",e)},expression:"form.Latetime"}})],1)],1),t._v(" "),l("el-col",{staticClass:"minute",attrs:{span:6}},[t._v("分钟")])],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:19}},[l("el-form-item",{attrs:{label:"记早退时间"}},[l("el-input",{model:{value:t.form.Leavetime,callback:function(e){t.$set(t.form,"Leavetime",e)},expression:"form.Leavetime"}})],1)],1),t._v(" "),l("el-col",{staticClass:"minute",attrs:{span:5}},[t._v("分钟")])],1)],1)],1),t._v(" "),l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:12}},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:18}},[l("el-form-item",{attrs:{label:"记多少工作日"}},[l("el-input",{model:{value:t.form.WorkDays,callback:function(e){t.$set(t.form,"WorkDays",e)},expression:"form.WorkDays"}})],1)],1),t._v(" "),l("el-col",{staticClass:"minute",attrs:{span:5}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:19}},[l("el-form-item",{attrs:{label:"记工作时长"}},[l("el-input",{model:{value:t.form.Longtime,callback:function(e){t.$set(t.form,"Longtime",e)},expression:"form.Longtime"}})],1)],1),t._v(" "),l("el-col",{staticClass:"minute",attrs:{span:5}},[t._v("分钟")])],1)],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"day-foot"},[l("el-form",{ref:"form",attrs:{model:t.form}},[l("el-form-item",[l("el-checkbox",{attrs:{"true-label":"1","false-label":"0",label:"必须签到",name:"type"},model:{value:t.form.MustIn,callback:function(e){t.$set(t.form,"MustIn",e)},expression:"form.MustIn"}}),t._v(" "),l("el-checkbox",{attrs:{"true-label":"1","false-label":"0",label:"必须签退",name:"type"},model:{value:t.form.MustOut,callback:function(e){t.$set(t.form,"MustOut",e)},expression:"form.MustOut"}})],1),t._v(" "),l("el-form-item",[l("el-checkbox",{attrs:{"true-label":"1","false-label":"0",label:"浮动时段",name:"type"},model:{value:t.form.IsFreeTime,callback:function(e){t.$set(t.form,"IsFreeTime",e)},expression:"form.IsFreeTime"}}),t._v(" "),l("el-checkbox",{attrs:{"true-label":"1","false-label":"0",label:"加班时段",name:"type"},model:{value:t.form.IsOverTime,callback:function(e){t.$set(t.form,"IsOverTime",e)},expression:"form.IsOverTime"}})],1)],1)],1),t._v(" "),l("div",{staticClass:"edit-button"},[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.newlyAdded}},[t._v("新增")])],1)])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bg-purple-light"},[l("div",{staticClass:"table-title"},[t._v("时间段列表")]),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Timename",label:"时间段名称"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Intime",label:"上班时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Outtime",label:"下班时间","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text"},nativeOn:{click:function(l){l.preventDefault(),t.deleteRow(e.$index,e.row)}}},[t._v("\n                    删除\n                  ")])]}}])})],1)],1)])],1)],1),t._v(" "),l("el-tab-pane",{attrs:{label:"班次设置"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:16}},[l("div",{staticClass:"grid-content bg-purple-light day"},[l("div",{staticClass:"day-top"},[l("span",[t._v("班次信息")]),t._v(" "),l("span",[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.addShift}},[t._v("新增班次")])],1)]),t._v(" "),l("div",{staticClass:"day-bot day-list"},[l("el-form",{ref:"form",staticClass:"shifts-name",attrs:{model:t.form,"label-width":"110px",size:"mini"}},[l("el-form-item",{attrs:{label:"班次名称"}},[l("el-input",{model:{value:t.form.time1,callback:function(e){t.$set(t.form,"time1",e)},expression:"form.time1"}})],1)],1),t._v(" "),l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[l("el-form-item",{attrs:{label:"周期数"}},[l("el-input-number",{attrs:{min:1,max:10,"controls-position":"right"},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"周期单位"}},[l("el-select",{attrs:{placeholder:"周"},model:{value:t.form.time1,callback:function(e){t.$set(t.form,"time1",e)},expression:"form.time1"}},[l("el-option",{attrs:{label:"天",value:"tian"}}),t._v(" "),l("el-option",{attrs:{label:"周",value:"zhou"}}),t._v(" "),l("el-option",{attrs:{label:"月",value:"yue"}})],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"day-foot"},[l("div",{staticClass:"day-foot-top"},[l("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("作为新员工默认班次")])],1),t._v(" "),l("el-row",[l("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("新增时间段")]),t._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("删除时间段")]),t._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("清除时间段")])],1),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Timename",label:"时间段名称"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Intime",label:"上班时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Outtime",label:"下班时间","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text"},nativeOn:{click:function(l){l.preventDefault(),t.deleteRow(e.$index,t.tableData)}}},[t._v("\n                      删除\n                    ")])]}}])})],1)],1)])]),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"grid-content bg-purple-light"},[l("div",{staticClass:"table-title"},[t._v("时间段列表")]),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),t._v(" "),l("el-table-column",{attrs:{label:"时间段名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text"},nativeOn:{click:function(l){l.preventDefault(),t.deleteRow(e.$index,t.tableData)}}},[t._v("修改")]),t._v(" "),l("el-button",{attrs:{type:"text"},nativeOn:{click:function(l){l.preventDefault(),t.deleteRow(e.$index,t.tableData)}}},[t._v("删除")])]}}])})],1)],1)])],1)],1),t._v(" "),l("el-tab-pane",{attrs:{label:"人员排班"}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px",size:"mini"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"人员编号"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"人员姓名"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-row",[l("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("查询")]),t._v(" "),l("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("全部选择")]),t._v(" "),l("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("取消选择")]),t._v(" "),l("el-button",{attrs:{type:"info",plain:"",size:"mini"},on:{click:t.setShift}},[t._v("排班计划")])],1)],1)],1)],1),t._v(" "),l("el-row",{staticClass:"time-slot"},[l("el-col",{attrs:{span:6}},[l("div",{staticClass:"grid-content bg-purple-light day"},[l("div",{staticClass:"day-top top-title"},[t._v("部门列表")]),t._v(" "),l("div",{staticClass:"day-bot day-list"},[l("el-tree",{attrs:{data:t.data,props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1)])]),t._v(" "),l("el-col",{attrs:{span:18}},[l("div",{staticClass:"grid-content bg-purple day"},[l("div",{staticClass:"day-top top-title"},[t._v("人员列表")]),t._v(" "),l("div",{staticClass:"day-bot day-list"},[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),t._v(" "),l("el-table-column",{attrs:{label:"考勤号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"部门","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"班次","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"人员编号","show-overflow-tooltip":""}})],1)],1)])])],1),t._v(" "),l("p",[t._v("选择日期范围，查看人员排班情况或进行临时排班。")]),t._v(" "),l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"30px",size:"mini"}},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"从"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"到"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-row",[l("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("查询")]),t._v(" "),l("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("全部选择")]),t._v(" "),l("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("取消选择")]),t._v(" "),l("el-button",{attrs:{type:"info",plain:"",size:"mini"}},[t._v("排班计划123")])],1)],1)],1)],1),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),t._v(" "),l("el-table-column",{attrs:{label:"考勤号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"部门","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"班次","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"人员编号","show-overflow-tooltip":""}})],1)],1)],1),t._v(" "),l("addshiftDialog",{ref:"addshiftDialog"}),t._v(" "),l("setshiftDialog",{ref:"setshiftDialog"})],1)},[],!1,null,"7816451a",null));m.options.__file="index.vue";e.default=m.exports}}]);