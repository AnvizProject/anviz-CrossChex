(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-059e"],{"2YOz":function(e,t,i){},BA2k:function(e,t,i){"use strict";i.r(t);var s={components:{selectbox:i("ThUY").a},mixins:[{data:function(){return{device_options:{value1:[{value:0,label:"指纹/卡/Facepass7"},{value:1,label:"Facepass Pro"}],value2:[{value:0,label:"实际状态"},{value:1,label:"上班"},{value:2,label:"下班"}],value3:[{value:0,label:"考勤"},{value:1,label:"门禁"},{value:2,label:"考勤/门禁"}]}}}}],props:{device_list:{type:Array,default:function(){}},de_data:{type:Number,default:null}},data:function(){return{centerDialogVisible:!1,showClo:!1,dialogtitle:"新增终端",Prohibit:!1,form:{DeviceType:null,Clientid:null,ClientNumber:null,ClientName:null,Floorid:null,RecStatus:null,deviceflag:null,ipaddress:null,CommPort:null,Linkmode:1}}},methods:{add_device:function(){var e=this;console.log(this.form),1===this.de_data?this.$store.dispatch("interactive/Device_create",this.form).then(function(t){e.$message({type:"success",message:"新增成功!"}),e.centerDialogVisible=!1,e.$emit("Terminal_list")}).catch(function(t){console.log(t),e.$message.error("新增失败")}):0===this.de_data&&(console.log(this.form),this.$store.dispatch("interactive/Device_update",this.form).then(function(t){e.$message({type:"success",message:"修改成功!"}),e.centerDialogVisible=!1}).catch(function(t){console.log(t),e.$message.error("修改失败")}))}}},a=(i("JYHm"),i("KHd+")),n=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"device-dialog"},[i("el-dialog",{attrs:{visible:e.centerDialogVisible,"show-close":e.showClo,width:"60%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[i("span",{staticClass:"dialog-header ",attrs:{slot:"title"},slot:"title"},[i("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("div",[e._v(e._s(e.dialogtitle))]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.add_device}},[e._v("确 定")])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple-dark"},[i("h4",[e._v("设备类型")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("selectbox",{attrs:{options:e.device_options.value1},model:{value:e.form.DeviceType,callback:function(t){e.$set(e.form,"DeviceType",t)},expression:"form.DeviceType"}})],1)])])])],1),e._v(" "),i("div",{staticClass:"parameter"},[i("span",{staticClass:"parameter-item"},[i("h4",[e._v("通讯方式")]),e._v(" "),i("el-radio-group",{model:{value:e.form.Linkmode,callback:function(t){e.$set(e.form,"Linkmode",t)},expression:"form.Linkmode"}},[i("p",[i("el-radio",{attrs:{label:1}},[e._v("网络设置")])],1),e._v(" "),i("div",{staticClass:"net-input"},[i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.form.ipaddress,callback:function(t){e.$set(e.form,"ipaddress",t)},expression:"form.ipaddress"}})],1)]),e._v(" "),i("div",{staticClass:"port"},[e._v("Port")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.form.CommPort,callback:function(t){e.$set(e.form,"CommPort",t)},expression:"form.CommPort"}})],1)])]),e._v(" "),i("p",[i("el-radio",{attrs:{label:4}},[e._v("网络（客户端/客户端+DNS")])],1)])],1),e._v(" "),i("span",{staticClass:"parameter-item"},[i("h4",[e._v("通讯参数")]),e._v(" "),i("div",{staticClass:"parameter-item-wrap"},[i("div",{staticClass:"parameter-item-center"},[i("div",[e._v("终端编号")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("el-input",{staticClass:"input-box",attrs:{disabled:e.Prohibit,placeholder:"请输入内容",clearable:""},model:{value:e.form.ClientNumber,callback:function(t){e.$set(e.form,"ClientNumber",t)},expression:"form.ClientNumber"}})],1)])]),e._v(" "),i("div",{staticClass:"parameter-item-center"},[i("div",[e._v("机器号")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.form.Clientid,callback:function(t){e.$set(e.form,"Clientid",t)},expression:"form.Clientid"}})],1)])])]),e._v(" "),i("div",{staticClass:"parameter-item-wrap"},[i("div",{staticClass:"parameter-item-center"},[i("div",[e._v("机器名称")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.form.ClientName,callback:function(t){e.$set(e.form,"ClientName",t)},expression:"form.ClientName"}})],1)])]),e._v(" "),i("div",{staticClass:"parameter-item-center"},[i("div",[e._v("设备组")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("selectbox",{attrs:{options:e.device_list},model:{value:e.form.Floorid,callback:function(t){e.$set(e.form,"Floorid",t)},expression:"form.Floorid"}})],1)])])]),e._v(" "),i("div",{staticClass:"parameter-item-wrap"},[i("div",{staticClass:"parameter-item-center"},[i("div",[e._v("考勤状态")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("selectbox",{attrs:{options:e.device_options.value2},model:{value:e.form.RecStatus,callback:function(t){e.$set(e.form,"RecStatus",t)},expression:"form.RecStatus"}})],1)])]),e._v(" "),i("div",{staticClass:"parameter-item-center"},[i("div",[e._v("设备标识")]),e._v(" "),i("div",{staticClass:"net-input-item"},[i("span",{staticClass:"icon-size icon-nav-network"}),e._v(" "),i("span",[i("selectbox",{attrs:{options:e.device_options.value3},model:{value:e.form.deviceflag,callback:function(t){e.$set(e.form,"deviceflag",t)},expression:"form.deviceflag"}})],1)])])])])])],1)],1)},[],!1,null,"46685b58",null);n.options.__file="edit.vue";var l=n.exports,o=Date.parse(new Date)/1e3,r={name:"DeviceManagement",components:{Dialog:l},data:function(){return{form:{value1:"",value2:"",Deptid:""},details:{},ClientNumbers:null,de_data:null,group_list:[],device_list:[],isactive:0,devicegroupid:null,terminal_active:0,terminal_list:[],clientid:null,Deptid:null}},computed:{treeData:function(){var e=[];return this.list.forEach(function(t,i){e.push({label:t.DeptName,children:[],Deptid:t.Deptid,SupDeptid:t.SupDeptid})}),e}},mounted:function(){this.All_groups_list()},methods:{getConfigResult:function(e){if(console.log(e.ret),"0"===e.ret)return this.$message({message:"连接成功",type:"warning"}),this.userlist(),this.depart_list(),void this.All_groups_list();this.$message({message:"连接失败",type:"warning"}),console.log(e)},sync_time:function(){this.socketApi.sendSock(JSON.parse('{"cmd":"sync_time", "data": {"ts":"'+o+'","clientid": "'+this.clientid+'"}}'),this.getConfigResult)},read_new_record:function(){this.socketApi.sendSock(JSON.parse('{"cmd":"read_new_record", "data": {"ts":"'+o+'","clientid": "'+this.clientid+'"}}'),this.getConfigResult)},read_all_record:function(){this.socketApi.sendSock(JSON.parse('{"cmd":"read_all_record", "data": {"ts":"'+o+'","clientid": "'+this.clientid+'"}}'),this.getConfigResult)},reset:function(){this.form={}},All_groups_list:function(){var e=this;this.$store.dispatch("interactive/All_groups_list",{}).then(function(t){e.group_list=t.DeviceGroup,e.devicegroupid=t.DeviceGroup[0].devicegroupid,e.Terminal_list(),e.group_list.forEach(function(t,i){e.device_list.push({value:t.devicegroupid,label:""+t.devicegroupname})})}).catch(function(){console.log("error")})},myclick:function(e){this.showPrise=!0,this.devicegroupid=this.group_list[e].devicegroupid,this.group_title=this.group_list[e].devicegroupname,this.isactive=e,this.Terminal_list()},Terminal_list:function(){var e=this;this.$store.dispatch("interactive/Terminal_list",{Floorid:this.devicegroupid}).then(function(t){e.terminal_list=t.FingerClient,e.clientid=t.FingerClient[0].Clientid,e.details=t.FingerClient[0],e.ClientNumbers=t.FingerClient[0].ClientNumber}).catch(function(){console.log("error")})},terminal:function(e){this.terminal_active=e,this.clientid=this.terminal_list[e].Clientid,this.details=this.terminal_list[e],this.ClientNumbers=this.terminal_list[e].ClientNumber},Adddevice:function(){this.$refs.Dialog.centerDialogVisible=!0,this.$refs.Dialog.dialogtitle="新增终端",this.de_data=1},editdevice:function(){this.$refs.Dialog.centerDialogVisible=!0,this.de_data=0,this.$refs.Dialog.dialogtitle="修改终端",this.$refs.Dialog.form=this.details,this.$refs.Dialog.Prohibit=!0},deletedevice:function(){var e=this;this.$confirm("是否确定删除此部门?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(e.ClientNumbers),e.$store.dispatch("interactive/Device_delete",{ClientNumbers:e.ClientNumbers}).then(function(t){e.Terminal_list(),e.$message({type:"success",message:"删除成功!"})}).catch(function(e){console.log(e)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},query:function(){var e=this;this.$store.dispatch("interactive/userList",this.form).then(function(t){e.tableData=t.userinfo_list.data,e.total=t.userinfo_list.total}).catch(function(){})}}},c=(i("T5sm"),i("bXCE"),Object(a.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{staticClass:"device-manage  app-container"},[i("el-header",{attrs:{height:"auto"}},[i("div",{staticClass:"top"},[i("div",{staticClass:"top-item"},[i("span",[i("span",{staticClass:"search-title"},[e._v("开始时间")]),e._v(" "),i("span",{staticClass:"net-input-item"},[i("el-date-picker",{attrs:{type:"date",size:"mini",placeholder:"选择日期"},model:{value:e.form.value1,callback:function(t){e.$set(e.form,"value1",t)},expression:"form.value1"}})],1)]),e._v(" "),i("span",[i("span",{staticClass:"search-title"},[e._v("结束时间")]),e._v(" "),i("span",{staticClass:"net-input-item"},[i("el-date-picker",{attrs:{type:"date",size:"mini",placeholder:"选择日期"},model:{value:e.form.value2,callback:function(t){e.$set(e.form,"value2",t)},expression:"form.value2"}})],1)]),e._v(" "),i("span",[i("span",{staticClass:"search-title"},[e._v("考勤号")]),e._v(" "),i("span",{staticClass:"net-input-item"},[i("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入",size:"mini",clearable:""},model:{value:e.form.Deptid,callback:function(t){e.$set(e.form,"Deptid",t)},expression:"form.Deptid"}})],1)]),e._v(" "),i("span",[i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.query}},[e._v("读取指定记录")]),e._v(" "),i("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置")])],1)])]),e._v(" "),i("div",{staticClass:"fun-button"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.Adddevice}},[e._v("增加终端")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.editdevice}},[e._v("修改终端")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.deletedevice}},[e._v("删除终端")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.sync_time}},[e._v("同步时间")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("终端参数")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("打铃设置")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.read_new_record}},[e._v("读取新记录")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.read_all_record}},[e._v("读取全部记录")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("备份人员")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("启用实时")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("禁用实时")])],1)]),e._v(" "),i("el-main",[i("div",{staticClass:"main-slide"},[i("div",{staticClass:"main-slide-top"},[i("el-row",{attrs:{gutter:5}},[i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content bg-purple"},[i("ul",e._l(e.group_list,function(t,s){return i("li",{key:s,class:{bg:s==e.isactive},on:{click:function(t){e.myclick(s)}}},[i("span",[e._v(e._s(t.devicegroupname))]),i("span",{staticClass:"el-icon-arrow-right"})])}))])]),e._v(" "),i("el-col",{attrs:{span:20}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-carousel",{attrs:{loop:!1,autoplay:!1,height:"100%","indicator-position":"none",arrow:"always"}},[i("el-carousel-item",e._l(e.terminal_list,function(t,s){return i("div",{key:s,staticClass:"device-list",class:{terminal_border:s==e.terminal_active},on:{click:function(t){e.terminal(s)}}},[i("p",{staticClass:"device-icon el-icon-alarm-clock"}),e._v(" "),i("p",[e._v(e._s(t.ClientName))])])}))],1)],1)])],1)],1)]),e._v(" "),i("Dialog",{ref:"Dialog",attrs:{device_list:e.device_list,de_data:e.de_data},on:{Terminal_list:e.Terminal_list}})],1)],1)},[],!1,null,"177b2a46",null));c.options.__file="index.vue";t.default=c.exports},BYLh:function(e,t,i){"use strict";var s=i("eoyC");i.n(s).a},JYHm:function(e,t,i){"use strict";var s=i("vHPQ");i.n(s).a},T5sm:function(e,t,i){"use strict";var s=i("bWBY");i.n(s).a},ThUY:function(e,t,i){"use strict";var s={model:{prop:"changeval",event:"up"},props:{options:{type:Array,default:function(){}},changeval:{type:Number,default:null}},data:function(){return{value:""}},methods:{change:function(e){this.$emit("up",e)}}},a=(i("BYLh"),i("KHd+")),n=Object(a.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("el-select",{attrs:{value:this.changeval,placeholder:"请选择"},on:{change:this.change}},this._l(this.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},[],!1,null,"5d1897b2",null);n.options.__file="index.vue";t.a=n.exports},bWBY:function(e,t,i){},bXCE:function(e,t,i){"use strict";var s=i("2YOz");i.n(s).a},eoyC:function(e,t,i){},vHPQ:function(e,t,i){}}]);