(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c5e0"],{"8GT2":function(e,t,s){},"9nW5":function(e,t,s){"use strict";var i=s("P6yW");s.n(i).a},BYLh:function(e,t,s){"use strict";var i=s("eoyC");s.n(i).a},HgSQ:function(e,t,s){},Jv1e:function(e,t,s){"use strict";s.r(t);var i=s("P2sY"),a=s.n(i),l=s("ThUY"),r=s("oMW6"),o={components:{selectbox:l.a},mixins:[r.a],props:{rowdata:{type:Object,default:function(){return{}}}},data:function(){return{centerDialogVisible:!1,showClo:!1,activeName:"first",data:null,dialogtitle:"增加人员",isAdd:!0,userform:{userid:"",UserCode:"",Name:"",Cardnum:"",Pwd:"",Deptid:null,Groupid:null,UserFlag:null,admingroupid:null,IsAtt:1,Isovertime:1,Isrest:1,ClassFlag:1,Sex:"",Duty:"",Mobile:"",Address:"",Birthday:"",EmployDate:""}}},methods:{Adduser:function(){this.centerDialogVisible=!0,this.dialogtitle="增加人员",this.isAdd=!0,this.userform={userid:"",UserCode:"",Name:"",Cardnum:"",Pwd:"",Deptid:null,Groupid:null,UserFlag:null,admingroupid:null,IsAtt:1,Isovertime:1,Isrest:1,ClassFlag:1,Sex:"",Duty:"",Mobile:"",Address:"",Birthday:"",EmployDate:""}},handleEdit:function(){this.centerDialogVisible=!0,this.dialogtitle="修改人员",this.isAdd=!1,this.userform=a()({},this.userform,this.rowdata),console.log(this.userform)},save:function(){var e=this,t="";t=this.isAdd?"interactive/Adduser":"interactive/userEdit",this.$store.dispatch(t,this.userform).then(function(t){e.centerDialogVisible=!1,e.$emit("userlist")}).catch(function(){console.log("error")})}}},n=(s("WOss"),s("KHd+")),c=Object(n.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-dialog"},[s("el-dialog",{attrs:{visible:e.centerDialogVisible,"show-close":e.showClo,width:"50%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[s("span",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[s("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),s("div",[e._v(e._s(e.dialogtitle))]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1),e._v(" "),s("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"基本资料",name:"first"}},[s("div",{staticClass:"parameter"},[s("span",{staticClass:"parameter-item"},[s("h4",[e._v("基本资料")]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("考勤号")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.userid,callback:function(t){e.$set(e.userform,"userid",t)},expression:"userform.userid"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("编号")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.UserCode,callback:function(t){e.$set(e.userform,"UserCode",t)},expression:"userform.UserCode"}})],1)])]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("姓名")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Name,callback:function(t){e.$set(e.userform,"Name",t)},expression:"userform.Name"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("卡号")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Cardnum,callback:function(t){e.$set(e.userform,"Cardnum",t)},expression:"userform.Cardnum"}})],1)])]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("密码")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Pwd,callback:function(t){e.$set(e.userform,"Pwd",t)},expression:"userform.Pwd"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("部门")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("selectbox",{attrs:{options:e.options.User_option1},model:{value:e.userform.Deptid,callback:function(t){e.$set(e.userform,"Deptid",t)},expression:"userform.Deptid"}})],1)])]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("组号")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("selectbox",{attrs:{options:e.options.User_option2},model:{value:e.userform.Groupid,callback:function(t){e.$set(e.userform,"Groupid",t)},expression:"userform.Groupid"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("比对方式")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("selectbox",{attrs:{options:e.options.User_option3},model:{value:e.userform.UserFlag,callback:function(t){e.$set(e.userform,"UserFlag",t)},expression:"userform.UserFlag"}})],1)])]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("用户类型")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("selectbox",{attrs:{options:e.options.User_option4},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("管理员组")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("selectbox",{attrs:{options:e.options.User_option5},model:{value:e.userform.admingroupid,callback:function(t){e.$set(e.userform,"admingroupid",t)},expression:"userform.admingroupid"}})],1)])])]),e._v(" "),s("span",{staticClass:"parameter-item"},[s("h4",[e._v("上传头像")]),e._v(" "),s("div",[e._v("头像")])])]),e._v(" "),s("div",{staticClass:"attendance"},[s("h4",[e._v("考勤统计相关")]),e._v(" "),s("div",[s("el-checkbox",{attrs:{"true-label":1,"false-label":0,label:"计算考勤"},model:{value:e.userform.IsAtt,callback:function(t){e.$set(e.userform,"IsAtt",t)},expression:"userform.IsAtt"}}),e._v(" "),s("el-checkbox",{attrs:{"true-label":1,"false-label":0,label:"计算加班"},model:{value:e.userform.Isovertime,callback:function(t){e.$set(e.userform,"Isovertime",t)},expression:"userform.Isovertime"}}),e._v(" "),s("el-checkbox",{attrs:{"true-label":1,"false-label":0,label:"节假日休息"},model:{value:e.userform.Isrest,callback:function(t){e.$set(e.userform,"Isrest",t)},expression:"userform.Isrest"}})],1)]),e._v(" "),s("div",{staticClass:"scheduling"},[s("h4",[e._v("新增人员默认排班方式")]),e._v(" "),s("div",[s("el-radio-group",{model:{value:e.userform.ClassFlag,callback:function(t){e.$set(e.userform,"ClassFlag",t)},expression:"userform.ClassFlag"}},[s("el-radio",{attrs:{label:0}},[e._v("不排班")]),e._v(" "),s("el-radio",{attrs:{label:1}},[e._v("正常排班")]),e._v(" "),s("el-radio",{attrs:{label:2}},[e._v("智能排班")])],1)],1)])]),e._v(" "),s("el-tab-pane",{attrs:{label:"自定义字段",name:"second"}},[s("div",{staticClass:"custom"},[s("h4",[e._v("自定义字段")]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("性别")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Sex,callback:function(t){e.$set(e.userform,"Sex",t)},expression:"userform.Sex"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("工作职务")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Duty,callback:function(t){e.$set(e.userform,"Duty",t)},expression:"userform.Duty"}})],1)])]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("联系电话")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Mobile,callback:function(t){e.$set(e.userform,"Mobile",t)},expression:"userform.Mobile"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("出生日期")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Birthday,callback:function(t){e.$set(e.userform,"Birthday",t)},expression:"userform.Birthday"}})],1)])]),e._v(" "),s("div",{staticClass:"parameter-item-wrap"},[s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("聘用日期")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.EmployDate,callback:function(t){e.$set(e.userform,"EmployDate",t)},expression:"userform.EmployDate"}})],1)]),e._v(" "),s("div",{staticClass:"parameter-item-center"},[s("div",[e._v("联系地址")]),e._v(" "),s("div",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.userform.Address,callback:function(t){e.$set(e.userform,"Address",t)},expression:"userform.Address"}})],1)])])])]),e._v(" "),s("el-tab-pane",{attrs:{label:"角色管理",name:"third"}},[e._v("角色管理")]),e._v(" "),s("el-tab-pane",{attrs:{label:"定时任务补偿",name:"fourth"}},[e._v("定时任务补偿")])],1)],1)],1)},[],!1,null,"42a8fe1d",null);c.options.__file="add.vue";var u=c.exports,d=Date.parse(new Date)/1e3,p={name:"DeviceManagement",components:{addDialog:u},data:function(){return{form:{Name:"",UserCode:"",Deptid:""},group_list:[],isactive:0,devicegroupid:null,terminal_active:0,terminal_list:[],clientid:null,userids:null,tableData:[],multipleSelection:[],total:10,currentPage:1,data:[],list:[],defaultProps:{children:"children",label:"label"},Deptid:null,rowdata:{}}},computed:{user_id_list:function(){var e=[];return this.multipleSelection.forEach(function(t){e.push(t.userid)}),e},treeData:function(){var e=[];return this.list.forEach(function(t,s){e.push({label:t.DeptName,children:[],Deptid:t.Deptid,SupDeptid:t.SupDeptid})}),e}},mounted:function(){this.userlist(1),this.depart_list(),this.All_groups_list()},methods:{userlist:function(e){var t=this;this.$store.dispatch("interactive/userList",{page:this.page,Deptid:this.Deptid}).then(function(e){t.tableData=e.userinfo_list.data,t.total=e.userinfo_list.total}).catch(function(){})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.filterTable.toggleRowSelection(e)}):this.$refs.filterTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},Adduser:function(){this.$refs.addDialog.Adduser()},Delete:function(){var e=this;0===this.user_id_list.length?this.$message({message:"请选择人员",type:"warning"}):this.$confirm("是否确认要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$store.dispatch("interactive/userDelete",e.user_id_list.join(",")).then(function(t){e.userlist(),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleEdit:function(e,t){var s=this;setTimeout(function(){s.$refs.addDialog.handleEdit()},0),this.rowdata=a()({},t)},handleDelete:function(e,t){var s=this;this.$confirm("是否确认要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.$store.dispatch("interactive/userDelete",t.userid).then(function(e){s.userlist(),s.$message({type:"success",message:"删除成功!"})}).catch(function(){})}).catch(function(){s.$message({type:"info",message:"已取消删除"})})},query:function(){var e=this;this.$store.dispatch("interactive/userList",this.form).then(function(t){e.tableData=t.userinfo_list.data,e.total=t.userinfo_list.total}).catch(function(){})},depart_list:function(){var e=this;this.$store.dispatch("interactive/Depart_list",{}).then(function(t){e.list=t.dept,e.data=e.Tree(e.treeData,0),e.Deptid=t.dept_tree[0].Deptid}).catch(function(e){console.log(e)})},Tree:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=[],a=void 0;return e.forEach(function(l,r){if(e[r].SupDeptid===s){var o=e[r];(a=t.Tree(e,e[r].Deptid)).length>0&&(o.children=a),i.push(o)}}),i},handleNodeClick:function(e){console.log(e),this.Deptid=e.Deptid,this.userlist()},getConfigResult:function(e){if(console.log(e.ret),"0"===e.ret)return this.$message({message:"连接成功",type:"warning"}),this.userlist(),this.depart_list(),void this.All_groups_list();this.$message({message:"连接失败",type:"warning"}),console.log(e)},update_status:function(){this.socketApi.sendSock(JSON.parse('{"cmd":"download_user", "data": {"ts":"'+d+'","clientid": "'+this.clientid+'"}}'),this.getConfigResult)},download_template:function(){0!==this.user_id_list.length?(console.log('{"cmd":"download_template", "data": {"ts":"'+d+'","clientid": "'+this.clientid+'","userids": "'+this.user_id_list.join(",")+'" }}'),this.socketApi.sendSock(JSON.parse('{"cmd":"download_template", "data": {"ts":"'+d+'","clientid": "'+this.clientid+'","userids": "'+this.user_id_list.join(",")+'" }}'),this.getConfigResult)):this.$message({message:"请选择人员",type:"warning"})},upload_user:function(){0!==this.user_id_list.length?this.socketApi.sendSock(JSON.parse('{"cmd":"upload_user", "data": {"ts":"'+d+'","clientid": "'+this.clientid+'","userids": "'+this.user_id_list.join(",")+'" }}'),this.getConfigResult):this.$message({message:"请选择人员",type:"warning"})},upload_template:function(){this.socketApi.sendSock(JSON.parse('{"cmd":"upload_template", "data": {"ts":"'+d+'","clientid": "'+this.clientid+'"}}'),this.getConfigResult)},delete_from_device:function(){0!==this.user_id_list.length?this.socketApi.sendSock(JSON.parse('{"cmd":"delete_from_device", "data": {"ts":"'+d+'","clientid": "'+this.clientid+'","userids": "'+this.user_id_list.join(",")+'" }}'),this.getConfigResult):this.$message({message:"请选择人员",type:"warning"})},export_personnel:function(){var e=[];this.multipleSelection.forEach(function(t){e.push(t.userid)}),0===e.length&&this.$message({message:"请选择人员",type:"warning"})},import_personnel:function(){var e=[];this.multipleSelection.forEach(function(t){e.push(t.userid)}),0===e.length&&this.$message({message:"请选择人员",type:"warning"})},reset:function(){this.form={}},All_groups_list:function(){var e=this;this.$store.dispatch("interactive/All_groups_list",{}).then(function(t){e.group_list=t.DeviceGroup,e.devicegroupid=t.DeviceGroup[0].devicegroupid,e.Terminal_list()}).catch(function(){console.log("error")})},myclick:function(e){this.showPrise=!0,this.devicegroupid=this.group_list[e].devicegroupid,this.group_title=this.group_list[e].devicegroupname,this.isactive=e},Terminal_list:function(){var e=this;this.$store.dispatch("interactive/Terminal_list",{Floorid:this.devicegroupid}).then(function(t){e.terminal_list=t.FingerClient,e.clientid=t.FingerClient[0].Clientid}).catch(function(){console.log("error")})},terminal:function(e){this.terminal_active=e,this.clientid=this.terminal_list[e].Clientid},current_change:function(e){this.currentPage=e,this.form.page=e,this.userlist(e)},renderContent:function(e,t){var s=t.node;t.data,t.store;return e("span",{class:"custom-tree-node"},[e("span",[s.label])])}}},v=(s("9nW5"),s("ysii"),Object(n.a)(p,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",{staticClass:"userlist app-container"},[s("el-header",{attrs:{height:"auto"}},[s("div",{staticClass:"top"},[s("div",{staticClass:"top-item"},[s("span",[s("span",{staticClass:"search-title"},[e._v("人员编号")]),e._v(" "),s("span",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"编号",size:"mini",clearable:""},model:{value:e.form.UserCode,callback:function(t){e.$set(e.form,"UserCode",t)},expression:"form.UserCode"}})],1)]),e._v(" "),s("span",[s("span",{staticClass:"search-title"},[e._v("人员姓名")]),e._v(" "),s("span",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"姓名",size:"mini",clearable:""},model:{value:e.form.Name,callback:function(t){e.$set(e.form,"Name",t)},expression:"form.Name"}})],1)]),e._v(" "),s("span",[s("span",{staticClass:"search-title"},[e._v("所在机器")]),e._v(" "),s("span",{staticClass:"net-input-item"},[s("el-input",{staticClass:"input-box",attrs:{placeholder:"机器",size:"mini",clearable:""},model:{value:e.form.Deptid,callback:function(t){e.$set(e.form,"Deptid",t)},expression:"form.Deptid"}})],1)]),e._v(" "),s("span",[s("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.query}},[e._v("查询")]),e._v(" "),s("el-button",{attrs:{type:"info",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置")])],1)])]),e._v(" "),s("div",{staticClass:"fun-button"},[s("el-button",{attrs:{type:"primary"},on:{click:e.Adduser}},[e._v("增加人员")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.Delete}},[e._v("删除人员")]),e._v(" "),s("el-button",{attrs:{type:"primary"}},[e._v("调动部门")]),e._v(" "),s("el-button",{attrs:{type:"primary"}},[e._v("人员离职")]),e._v(" "),s("el-button",{attrs:{type:"primary"}},[e._v("设置权限")]),e._v(" "),s("el-button",{attrs:{type:"primary"}},[e._v("复制权限")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.update_status}},[e._v("下载人员")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.download_template}},[e._v("下载模板")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.upload_user}},[e._v("上传人员")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.upload_template}},[e._v("上传模板")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.delete_from_device}},[e._v("从设备删除人员")])],1)]),e._v(" "),s("el-main",[s("div",{staticClass:"main-slide"},[s("div",{staticClass:"main-slide-top"},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[s("ul",e._l(e.group_list,function(t,i){return s("li",{key:i,class:{bg:i==e.isactive},on:{click:function(t){e.myclick(i)}}},[s("span",[e._v(e._s(t.devicegroupname))]),s("span",{staticClass:"el-icon-arrow-right"})])}))])]),e._v(" "),s("el-col",{attrs:{span:20}},[s("div",{staticClass:"grid-content bg-purple-light"},[s("el-carousel",{attrs:{loop:!1,autoplay:!1,height:"100%","indicator-position":"none",arrow:"always"}},[s("el-carousel-item",e._l(e.terminal_list,function(t,i){return s("div",{key:i,staticClass:"device-list",class:{terminal_border:i==e.terminal_active},on:{click:function(t){e.terminal(i)}}},[s("p",{staticClass:"device-icon el-icon-alarm-clock"}),e._v(" "),s("p",[e._v(e._s(t.ClientName))])])}))],1)],1)])],1)],1),e._v(" "),s("div",{staticClass:"main-slide-bot"},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[s("el-tree",{attrs:{data:e.data,props:e.defaultProps,accordion:!0},on:{"node-click":e.handleNodeClick}})],1)]),e._v(" "),s("el-col",{attrs:{span:20}},[s("div",{staticClass:"grid-content bg-purple-light"},[s("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection"}}),e._v(" "),s("el-table-column",{attrs:{fixed:"",prop:"UserCode",label:"人员编号"}}),e._v(" "),s("el-table-column",{attrs:{prop:"userid",label:"考勤号",sortable:"",width:"90"}}),e._v(" "),s("el-table-column",{attrs:{prop:"Cardnum",label:"卡号","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"Name",label:"姓名","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"EmployDate",label:"聘用日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"address",label:"所在机器","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"address",label:"指纹1","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"address",label:"指纹2","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"address",label:"面部","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"address",label:"虹膜","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"Sex",label:"性别","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"Duty",label:"职务","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"Birthday",label:"出生日期","show-overflow-tooltip":"",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"Mobile",label:"联系电话","show-overflow-tooltip":"",width:"120"}}),e._v(" "),s("el-table-column",{attrs:{prop:"Address",label:"联系地址","show-overflow-tooltip":"",width:"170"}}),e._v(" "),s("el-table-column",{attrs:{prop:"Pwd",label:"密码","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"address",label:"管理员组","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{on:{click:function(s){e.handleEdit(t.$index,t.row)}}},[s("i",{staticClass:"icon-modify el-icon--left icon-size"}),e._v("编辑")]),e._v(" "),s("el-button",{on:{click:function(s){e.handleDelete(t.$index,t.row)}}},[s("i",{staticClass:"icon-trashcan el-icon--left icon-size"}),e._v("删除")])]}}])})],1)],1)])],1)],1)]),e._v(" "),s("addDialog",{ref:"addDialog",attrs:{rowdata:e.rowdata},on:{userlist:e.userlist}})],1),e._v(" "),s("el-footer",{staticClass:"footer",attrs:{height:"auto"}},[s("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,30,50],"page-size":15,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":e.current_change}}),e._v(" "),s("div",[s("el-button",{attrs:{type:"primary"},on:{click:e.export_personnel}},[e._v("导出人员")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.import_personnel}},[e._v("导入人员")])],1)],1)],1)},[],!1,null,"669abe82",null));v.options.__file="index.vue";t.default=v.exports},P6yW:function(e,t,s){},ThUY:function(e,t,s){"use strict";var i={model:{prop:"changeval",event:"up"},props:{options:{type:Array,default:function(){}},changeval:{type:Number,default:null}},data:function(){return{value:""}},methods:{change:function(e){this.$emit("up",e)}}},a=(s("BYLh"),s("KHd+")),l=Object(a.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("el-select",{attrs:{value:this.changeval,placeholder:"请选择"},on:{change:this.change}},this._l(this.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},[],!1,null,"5d1897b2",null);l.options.__file="index.vue";t.a=l.exports},WOss:function(e,t,s){"use strict";var i=s("HgSQ");s.n(i).a},eoyC:function(e,t,s){},oMW6:function(e,t,s){"use strict";t.a={data:function(){return{options:{User_option1:[{value:1,label:"市场部"},{value:2,label:"研发部"},{value:3,label:"人事部"},{value:4,label:"财务部"}],User_option2:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],User_option3:[{value:1,label:"独立"},{value:2,label:"卡+指纹"},{value:3,label:"密码+指纹"},{value:4,label:"卡+密码"},{value:5,label:"编号+指纹"},{value:6,label:"卡+密码+指纹"}],User_option4:[{value:1,label:"普通用户"},{value:2,label:"管理员"}],User_option5:[{value:1,label:"0"},{value:2,label:"1"},{value:3,label:"2"},{value:4,label:"3"},{value:5,label:"4"}],record_identifier:[{value:1,label:"全部"},{value:2,label:"考勤"},{value:3,label:"门禁"},{value:4,label:"考勤和门禁"},{value:5,label:"无效记录"}]}}}}},ysii:function(e,t,s){"use strict";var i=s("8GT2");s.n(i).a}}]);