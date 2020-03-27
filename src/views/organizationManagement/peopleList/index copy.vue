<template>
  <el-container class="userlist app-container">
    <el-header height="auto">
      <div class="top">
        <div class="top-item">
          <span>
            <span class="search-title">人员编号</span>
            <span class="net-input-item">
              <el-input
                v-model="form.UserCode"
                placeholder="编号"
                size="mini"
                clearable
                class="input-box"/>
            </span>
          </span>
          <span>
            <span class="search-title">人员姓名</span>
            <span class="net-input-item">
              <el-input
                v-model="form.Name"
                placeholder="姓名"
                size="mini"
                clearable
                class="input-box"/>
            </span>
          </span>
          <span>
            <span class="search-title">所在机器</span>
            <span class="net-input-item">
              <el-input
                v-model="form.Deptid"
                placeholder="机器"
                size="mini"
                clearable
                class="input-box"/>
            </span>
          </span>
          <span>
            <el-button type="primary" icon="el-icon-search" @click="query">查询</el-button>
            <el-button type="info" icon="el-icon-refresh" @click="reset">重置</el-button>
          </span>
        </div>
      </div>
      <div class="fun-button">
        <el-button type="primary" @click="Adduser">增加人员</el-button>
        <el-button type="primary" @click="Delete">删除人员</el-button>
        <el-button type="primary">调动部门</el-button>
        <el-button type="primary">人员离职</el-button>
        <el-button type="primary">设置权限</el-button>
        <el-button type="primary">复制权限</el-button>
        <el-button type="primary" @click="update_status">下载人员</el-button>
        <el-button type="primary" @click="download_template">下载模板</el-button>
        <el-button type="primary" @click="upload_user">上传人员</el-button>
        <el-button type="primary" @click="upload_template">上传模板</el-button>
        <el-button type="primary" @click="delete_from_device">从设备删除人员</el-button>
      </div>

    </el-header>
    <el-main>
      <div class="main-slide">
        <div class="main-slide-top">
          <el-row :gutter="5">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <ul>
                  <li v-for="(item, index) in group_list" :key="index" :class="{bg:index==isactive}" @click="myclick(index)"><span>{{ item.devicegroupname }}</span><span class="el-icon-arrow-right"/></li>
                </ul>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <el-carousel :loop="false" :autoplay="false" height="100%" indicator-position="none" arrow="always">
                  <el-carousel-item>
                    <div v-for="(item,index) in terminal_list" :key = "index" :class="{terminal_border:index==terminal_active}" class="device-list" @click="terminal(index)">
                      <p class="device-icon el-icon-alarm-clock"/>
                      <p>{{ item.ClientName }}</p>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="main-slide-bot">
          <el-row :gutter="5">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <el-tree
                  :data="data"
                  :props="defaultProps"
                  :accordion="true"
                  @node-click="handleNodeClick"/>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <el-table
                  ref="filterTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"/>
                  <el-table-column
                    fixed
                    prop="UserCode"
                    label="人员编号"/>
                  <el-table-column
                    prop="userid"
                    label="考勤号"
                    sortable
                    width="90"/>
                  <el-table-column
                    prop="Cardnum"
                    label="卡号"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="Name"
                    label="姓名"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="EmployDate"
                    label="聘用日期"
                    show-overflow-tooltip
                    width="100"/>
                  <el-table-column
                    prop="address"
                    label="所在机器"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="address"
                    label="指纹1"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="address"
                    label="指纹2"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="address"
                    label="面部"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="address"
                    label="虹膜"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="Sex"
                    label="性别"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="Duty"
                    label="职务"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="Birthday"
                    label="出生日期"
                    show-overflow-tooltip
                    width="100"/>
                  <el-table-column
                    prop="Mobile"
                    label="联系电话"
                    show-overflow-tooltip
                    width="120"/>
                  <el-table-column
                    prop="Address"
                    label="联系地址"
                    show-overflow-tooltip
                    width="170"/>
                  <el-table-column
                    prop="Pwd"
                    label="密码"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="address"
                    label="管理员组"
                    show-overflow-tooltip/>
                  <el-table-column label="操作" fixed="right" width="170">
                    <template slot-scope="scope">
                      <el-button @click="handleEdit(scope.$index, scope.row)"><i class="icon-modify el-icon--left icon-size"/>编辑</el-button>
                      <el-button @click="handleDelete(scope.$index, scope.row)"><i class="icon-trashcan el-icon--left icon-size"/>删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <addDialog ref="addDialog" :rowdata="rowdata" @userlist="userlist"/>
    </el-main>
    <el-footer height="auto" class="footer">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[15, 30, 50]"
        :page-size="15"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="current_change"/>
      <div>
        <el-button type="primary" @click="export_personnel">导出人员</el-button>
        <el-button type="primary" @click="import_personnel">导入人员</el-button>
      </div>
    </el-footer>
  </el-container>
</template>
<style scoped src="@/styles/list-top.scss"></style>
<script>
import addDialog from '../components/Dialog/add'
// const id = 1000
var timestamp = Date.parse(new Date()) / 1000
export default {
  name: 'DeviceManagement',
  components: {
    addDialog
  },
  data() {
    return {
      form: {
        Name: '',
        UserCode: '',
        Deptid: ''
      },
      group_list: [],
      isactive: 0,
      devicegroupid: null,
      terminal_active: 0,
      terminal_list: [],
      clientid: null,
      userids: null,
      tableData: [],
      multipleSelection: [],
      total: 10,
      currentPage: 1,
      data: [],
      list: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      Deptid: null,
      rowdata: {}
      // data: JSON.parse(JSON.stringify(dept_data))
    }
  },
  computed: {
    user_id_list() {
      const userid = []
      this.multipleSelection.forEach(item => {
        userid.push(item.userid)
      })
      return userid
    },
    // 部门列表计算
    treeData() {
      const treeData = []
      this.list.forEach((v, k) => {
        treeData.push({ label: v.DeptName, children: [], Deptid: v.Deptid, SupDeptid: v.SupDeptid })
      })
      return treeData
    }
  },
  mounted: function() {
    this.userlist(1)
    this.depart_list()
    this.All_groups_list()
  },
  methods: {
    // 人员列表
    userlist(page) {
      this.$store.dispatch('interactive/userList', { page: this.page, Deptid: this.Deptid }).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
      }).catch(() => {
      })
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.filterTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.filterTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val, 'table')
    },
    Adduser() {
      this.$refs.addDialog.Adduser()
    },
    // 删除人员
    Delete() {
      if (this.user_id_list.length === 0) {
        this.$message({
          message: '请选择人员',
          type: 'warning'
        })
      } else {
        this.$confirm('是否确认要删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('interactive/userDelete', this.user_id_list.join(',')).then(response => {
            this.userlist()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }).catch(() => {
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    // 修改人员
    handleEdit(index, row) {
      setTimeout(() => {
        this.$refs.addDialog.handleEdit()
      }, 0)
      this.rowdata = Object.assign({}, row)
    },
    // 删除人员
    handleDelete(index, rows) {
      this.$confirm('是否确认要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('interactive/userDelete', rows.userid).then(response => {
          this.userlist()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 人员查询
    query() {
      this.$store.dispatch('interactive/userList', this.form).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
      }).catch(() => {
      })
    },
    // 部门列表
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        this.list = response.dept
        this.data = this.Tree(this.treeData, 0)
        this.Deptid = response.dept_tree[0].Deptid
      }).catch(error => {
        console.log(error)
      })
    },
    // 部门列表无限循环
    Tree(data, parentId = '') {
      const tree = []
      let temp
      data.forEach((item, index) => {
        if (data[index].SupDeptid === parentId) {
          const obj = data[index]
          temp = this.Tree(data, data[index].Deptid)
          if (temp.length > 0) {
            obj.children = temp
          }
          tree.push(obj)
        }
      })
      return tree
    },
    // 部门列表点击
    handleNodeClick(data) {
      console.log(data)
      this.Deptid = data.Deptid
      this.userlist()
    },
    getConfigResult(res) {
      // 接收回调函数返回数据的方法
      console.log(res.ret)
      if (res.ret === '0') {
        this.$message({
          message: '连接成功',
          type: 'warning'
        })
        this.userlist()
        this.depart_list()
        this.All_groups_list()
        return
      } else {
        this.$message({
          message: '连接失败',
          type: 'warning'
        })
      }
      console.log(res)
    },
    // 下载人员
    update_status() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"download_user", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 下载模板
    download_template() {
      if (this.user_id_list.length === 0) {
        this.$message({
          message: '请选择人员',
          type: 'warning'
        })
        return
      }
      console.log('{"cmd":"download_template", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '","userids": "' + this.user_id_list.join(',') + '" }}')
      this.socketApi.sendSock(JSON.parse('{"cmd":"download_template", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '","userids": "' + this.user_id_list.join(',') + '" }}'), this.getConfigResult)
    },
    // 上传人员
    upload_user() {
      if (this.user_id_list.length === 0) {
        this.$message({
          message: '请选择人员',
          type: 'warning'
        })
        return
      }
      this.socketApi.sendSock(JSON.parse('{"cmd":"upload_user", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '","userids": "' + this.user_id_list.join(',') + '" }}'), this.getConfigResult)
    },
    // 上传模板
    upload_template() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"upload_template", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 从设备删除人员
    delete_from_device() {
      if (this.user_id_list.length === 0) {
        this.$message({
          message: '请选择人员',
          type: 'warning'
        })
        return
      }
      this.socketApi.sendSock(JSON.parse('{"cmd":"delete_from_device", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '","userids": "' + this.user_id_list.join(',') + '" }}'), this.getConfigResult)
    },
    // 导出人员
    export_personnel() {
      const userid = []
      this.multipleSelection.forEach(item => {
        userid.push(item.userid)
      })
      if (userid.length === 0) {
        this.$message({
          message: '请选择人员',
          type: 'warning'
        })
      }
    },
    // 导入人员
    import_personnel() {
      const userid = []
      this.multipleSelection.forEach(item => {
        userid.push(item.userid)
      })
      if (userid.length === 0) {
        this.$message({
          message: '请选择人员',
          type: 'warning'
        })
      }
    },
    // 重置
    reset() {
      this.form = {}
    },
    // 所有组列表
    All_groups_list() {
      this.$store.dispatch('interactive/All_groups_list', {}).then(response => {
        this.group_list = response.DeviceGroup
        this.devicegroupid = response.DeviceGroup[0].devicegroupid
        this.Terminal_list()
      }).catch(() => {
        console.log('error')
      })
    },
    // 所有组列表点击
    myclick(index) {
      this.showPrise = true
      this.devicegroupid = this.group_list[index].devicegroupid
      this.group_title = this.group_list[index].devicegroupname
      this.isactive = index
    },
    // 终端列表
    Terminal_list() {
      this.$store.dispatch('interactive/Terminal_list', { Floorid: this.devicegroupid }).then(response => {
        this.terminal_list = response.FingerClient
        this.clientid = response.FingerClient[0].Clientid
      }).catch(() => {
        console.log('error')
      })
    },
    // 终端列表点击
    terminal(index) {
      this.terminal_active = index
      this.clientid = this.terminal_list[index].Clientid
    },
    // 页码
    current_change: function(currentPage) {
      this.currentPage = currentPage
      this.form.page = currentPage
      this.userlist(currentPage)
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.label}</span>
        </span>)
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-tree{
    height: 100%;
  }
  .main-slide-top{
    margin-bottom: 5px;
    height: 30%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .main-slide-bot{
    height: 69%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .el-row{
    display: flex;
    height: 100%;
    .grid-content{
      height: 100%;
      background: #fff;
      -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.13);
      box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.13);
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .el-table{
        height: 100%;
      }
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display:none
      }
      li{
        border-bottom: 1px solid rgba(221,221,221,0.3);
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        &:hover{
          background: rgba(123,192,181,0.2);
        }
      }
      .bg{
        background: rgba(123,192,181,0.2);
      }
    }
  }
  .el-carousel{
    height: 100%;
  }
  .el-carousel__item{
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EBEBEBFF;
    .device-list{
      width: 14%;
      max-width: 128px;
      height: 160px;
      margin-right: 1%;
      margin-left: 1%;
      border-radius:4px;
      box-shadow: 0 0 10px 1px #dddee1;
      text-align: center;
      vertical-align: middle;
      .device-icon{
        font-size: 60px;
        margin-top:25px;
        margin-bottom: 0;
      }
    }
    .terminal_border{
      border:1px solid #47a369
    }
  }
  .main-slide{
    width: 100%;
    height: 100%;
  }
  .footer{
    display: flex;
    justify-content:space-between;
  }
</style>
