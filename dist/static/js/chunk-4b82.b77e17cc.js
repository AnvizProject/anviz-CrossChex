(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4b82"],{BYLh:function(e,t,l){"use strict";var a=l("eoyC");l.n(a).a},EbAi:function(e,t,l){"use strict";t.a={data:function(){return{department_options:[{value:1,label:"指南",children:[{value:2,label:"全部",children:[{value:4,label:"一致"},{value:5,label:"反馈"},{value:6,label:"效率"},{value:7,label:"可控"}]},{value:8,label:"导航",children:[{value:9,label:"侧向导航"},{value:10,label:"顶部导航"}]}]},{value:11,label:"组件",children:[{value:12,label:"Basic",children:[{value:13,label:"Layout 布局"},{value:14,label:"Color 色彩"},{value:15,label:"Typography 字体"},{value:16,label:"Icon 图标"},{value:17,label:"Button 按钮"}]}]},{value:18,label:"资源",children:[{value:19,label:"Axure Components"},{value:20,label:"Sketch Templates"},{value:21,label:"组件交互文档"}]}]}}}},LrJK:function(e,t,l){},SK4z:function(e,t,l){"use strict";l.r(t);var a=l("ThUY"),o=l("o6Yu"),s=l("EbAi"),r=l("oMW6"),i={components:{selectbox:a.a},mixins:[s.a,o.a,r.a],data:function(){return{form:{Nmae:"",UserCode:"",Deptid:"",date2:""},tableData:[],multipleSelection:[],total:10,currentPage:1,rowdata:{},checked:!0}},mounted:function(){this.userlist(1)},methods:{userlist:function(e){var t=this;this.$store.dispatch("interactive/userList",{page:e}).then(function(e){t.tableData=e.userinfo_list.data,t.total=e.userinfo_list.total}).catch(function(){})},toggleSelection:function(e){var t=this;e?e.forEach(function(l){t.$refs.filterTable.toggleRowSelection(l),console.log(e)}):this.$refs.filterTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},filterHandler:function(e,t,l){return t[l.property]===e},query:function(){var e=this;this.$store.dispatch("interactive/userList",this.form).then(function(t){e.tableData=t.userinfo_list.data,e.total=t.userinfo_list.total}).catch(function(){})},export_personnel:function(){var e=[];this.multipleSelection.forEach(function(t){e.push(t.userid)}),0===e.length&&this.$message({message:"请选择人员",type:"warning"})},reset:function(){this.form={}},current_change:function(e){this.currentPage=e,this.form.page=e,this.userlist(e)}}},n=(l("nOfy"),l("hdGa"),l("KHd+")),c=Object(n.a)(i,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-container",{staticClass:"attendance"},[l("el-header",{attrs:{height:"auto"}},[l("div",{staticClass:"top"},[l("div",{staticClass:"top-item"},[l("span",[l("span",{staticClass:"search-title"},[e._v("部门")]),e._v(" "),l("span",{staticClass:"net-input-item"},[l("el-cascader",{attrs:{options:e.department_options,props:{expandTrigger:"hover"},"show-all-levels":!1,size:"mini",clearable:""},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)]),e._v(" "),l("span",[l("span",{staticClass:"search-title"},[e._v("人员")]),e._v(" "),l("span",{staticClass:"net-input-item"},[l("selectbox",{attrs:{options:e.staff_options},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)]),e._v(" "),l("span",[l("span",{staticClass:"search-title"},[e._v("开始"),l("br"),e._v("日期")]),e._v(" "),l("span",{staticClass:"net-input-item"},[l("el-date-picker",{attrs:{type:"date",size:"mini",placeholder:"请选择"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)]),e._v(" "),l("span",[l("span",{staticClass:"search-title"},[e._v("结束 "),l("br"),e._v(" 日期")]),e._v(" "),l("span",{staticClass:"net-input-item"},[l("el-date-picker",{attrs:{type:"date",size:"mini",placeholder:"请选择"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)]),e._v(" "),l("span",[l("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.query}},[e._v("查询")]),e._v(" "),l("el-button",{attrs:{type:"info",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置")])],1)])])]),e._v(" "),l("el-main",[l("el-tabs",{attrs:{type:"border-card"}},[l("el-tab-pane",{attrs:{label:"考勤记录分析"}},[l("div",{staticClass:"main-slide"},[l("span",{staticClass:"main-slide-left"},[l("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"",prop:"UserCode",label:"人员编号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userid",label:"考勤号",sortable:"",width:"90"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Cardnum",label:"卡号","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Name",label:"姓名","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"EmployDate",label:"聘用日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"所在机器","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹1","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹2","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"面部","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"虹膜","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Sex",label:"性别","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Duty",label:"职务","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Birthday",label:"出生日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Mobile",label:"联系电话","show-overflow-tooltip":"",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Address",label:"联系地址","show-overflow-tooltip":"",width:"170"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Pwd",label:"密码","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"管理员组","show-overflow-tooltip":""}})],1)],1),e._v(" "),l("span",{staticClass:"main-slide-right"},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("过滤记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("上班记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("下班记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("其他状态记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("正常记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("异常记录")])],1),e._v(" "),l("el-divider",{attrs:{"content-position":"left"}},[e._v("修正记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("修改考勤状态")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("删除选择的记录")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("取消本记录的处理")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("执行处理方法")])],1),e._v(" "),l("el-divider",{attrs:{"content-position":"left"}},[e._v("管理记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("显示全部数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("导出记录")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("打印预览")])],1)],1)])]),e._v(" "),l("el-tab-pane",{attrs:{label:"排班记录分析"}},[l("div",{staticClass:"main-slide"},[l("span",{staticClass:"main-slide-left"},[l("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"",prop:"UserCode",label:"人员编号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userid",label:"考勤号",sortable:"",width:"90"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Cardnum",label:"卡号","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Name",label:"姓名","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"EmployDate",label:"聘用日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"所在机器","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹1","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹2","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"面部","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"虹膜","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Sex",label:"性别","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Duty",label:"职务","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Birthday",label:"出生日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Mobile",label:"联系电话","show-overflow-tooltip":"",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Address",label:"联系地址","show-overflow-tooltip":"",width:"170"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Pwd",label:"密码","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"管理员组","show-overflow-tooltip":""}})],1)],1),e._v(" "),l("span",{staticClass:"main-slide-right"},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("过滤记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("正常记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("迟到记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("早退记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("加班记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("旷工记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("请假记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("未签到记录")]),e._v(" "),l("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("未签退记录")])],1),e._v(" "),l("el-divider",{attrs:{"content-position":"left"}},[e._v("修正记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("修改为正常数据")])],1),e._v(" "),l("el-divider",{attrs:{"content-position":"left"}},[e._v("管理记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("显示全部数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("导出记录")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("打印预览")])],1)],1)])]),e._v(" "),l("el-tab-pane",{attrs:{label:"外出/请假分析"}},[l("div",{staticClass:"main-slide"},[l("span",{staticClass:"main-slide-left"},[l("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"",prop:"UserCode",label:"人员编号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userid",label:"考勤号",sortable:"",width:"90"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Cardnum",label:"卡号","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Name",label:"姓名","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"EmployDate",label:"聘用日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"所在机器","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹1","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹2","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"面部","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"虹膜","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Sex",label:"性别","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Duty",label:"职务","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Birthday",label:"出生日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Mobile",label:"联系电话","show-overflow-tooltip":"",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Address",label:"联系地址","show-overflow-tooltip":"",width:"170"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Pwd",label:"密码","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"管理员组","show-overflow-tooltip":""}})],1)],1),e._v(" "),l("span",{staticClass:"main-slide-right"},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("管理记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("显示全部数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("导出记录")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("打印预览")])],1)],1)])]),e._v(" "),l("el-tab-pane",{attrs:{label:"考勤统计结果"}},[l("div",{staticClass:"main-slide"},[l("span",{staticClass:"main-slide-left"},[l("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"",prop:"UserCode",label:"人员编号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userid",label:"考勤号",sortable:"",width:"90"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Cardnum",label:"卡号","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Name",label:"姓名","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"EmployDate",label:"聘用日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"所在机器","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹1","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"指纹2","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"面部","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"虹膜","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Sex",label:"性别","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Duty",label:"职务","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"Birthday",label:"出生日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Mobile",label:"联系电话","show-overflow-tooltip":"",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Address",label:"联系地址","show-overflow-tooltip":"",width:"170"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Pwd",label:"密码","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"管理员组","show-overflow-tooltip":""}})],1)],1),e._v(" "),l("span",{staticClass:"main-slide-right"},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("管理记录")]),e._v(" "),l("div",{staticClass:"filter"},[l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("显示全部数据列")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("导出记录")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("打印预览")])],1)],1)])])],1)],1),e._v(" "),l("el-footer",{staticClass:"footer",attrs:{height:"auto"}},[l("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,30,50],"page-size":15,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":e.current_change}})],1)],1)},[],!1,null,"138eb198",null);c.options.__file="index.vue";t.default=c.exports},ThUY:function(e,t,l){"use strict";var a={model:{prop:"changeval",event:"up"},props:{options:{type:Array,default:function(){}},changeval:{type:Number,default:null}},data:function(){return{value:""}},methods:{change:function(e){this.$emit("up",e)}}},o=(l("BYLh"),l("KHd+")),s=Object(o.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("el-select",{attrs:{value:this.changeval,placeholder:"请选择"},on:{change:this.change}},this._l(this.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},[],!1,null,"5d1897b2",null);s.options.__file="index.vue";t.a=s.exports},eoyC:function(e,t,l){},h1R7:function(e,t,l){},hdGa:function(e,t,l){"use strict";var a=l("h1R7");l.n(a).a},nOfy:function(e,t,l){"use strict";var a=l("LrJK");l.n(a).a},o6Yu:function(e,t,l){"use strict";t.a={data:function(){return{staff_options:[{value:1,label:"姚波"},{value:2,label:"张三"},{value:3,label:"李四"},{value:4,label:"王晓晓"}]}}}},oMW6:function(e,t,l){"use strict";t.a={data:function(){return{options:{User_option1:[{value:1,label:"市场部"},{value:2,label:"研发部"},{value:3,label:"人事部"},{value:4,label:"财务部"}],User_option2:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],User_option3:[{value:1,label:"独立"},{value:2,label:"卡+指纹"},{value:3,label:"密码+指纹"},{value:4,label:"卡+密码"},{value:5,label:"编号+指纹"},{value:6,label:"卡+密码+指纹"}],User_option4:[{value:1,label:"普通用户"},{value:2,label:"管理员"}],User_option5:[{value:1,label:"0"},{value:2,label:"1"},{value:3,label:"2"},{value:4,label:"3"},{value:5,label:"4"}],record_identifier:[{value:1,label:"全部"},{value:2,label:"考勤"},{value:3,label:"门禁"},{value:4,label:"考勤和门禁"},{value:5,label:"无效记录"}]}}}}}}]);