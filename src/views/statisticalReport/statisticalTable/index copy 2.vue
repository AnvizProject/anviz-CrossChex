<template>
  <div class="organization">
    <search ref="search" :search="search" @search="people_list"/>
    <Container :total="total" @per_page="people_list" @page="people_list">
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini" @click="Adduser">增加</el-button>
          <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'danger':'info'" size="mini" @click="deleteList">删除</el-button>
          <el-dropdown>
            <el-button :disabled="multipleSelection.length<=0" type="info" size="mini">更多操作<i class="el-icon-arrow-down el-icon--right"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>调动部门</el-dropdown-item>
              <el-dropdown-item>人员离职</el-dropdown-item>
              <el-dropdown-item>设置权限</el-dropdown-item>
              <el-dropdown-item>复制权限</el-dropdown-item>
              <el-dropdown-item @click="import_personnel">导入人员</el-dropdown-item>
              <el-dropdown-item @click="export_personnel">导出人员</el-dropdown-item>
              <el-dropdown-item @click="update_status">下载人员</el-dropdown-item>
              <el-dropdown-item @click="upload_user">上传人员</el-dropdown-item>
              <el-dropdown-item @click="download_template">下载模板</el-dropdown-item>
              <el-dropdown-item @click="upload_template">上传模板</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-item">
          <Devicegroup ref="DeviceGroup" @Terminal_list="people_list"/>
          <Departmentgroup ref="DeptGroup" @Dept_list="people_list"/>
        </div>
      </div>
      <div slot="main" class="main-item">
        <el-tabs type="border-card">
          <el-tab-pane label="考勤记录分析">
            <el-row>
              <el-col :span="20">
                <div class="grid-content bg-purple">
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
                  </el-table>
                </div>
              </el-col>
              <el-col :span="4" class="main-slide-right">
                <div class="grid-content bg-purple-light">
                  <el-divider content-position="left">过滤记录</el-divider>
                  <div class="filter">
                    <el-checkbox v-model="checked">上班记录</el-checkbox>
                    <el-checkbox v-model="checked">下班记录</el-checkbox>
                    <el-checkbox v-model="checked">其他状态记录</el-checkbox>
                    <el-checkbox v-model="checked">正常记录</el-checkbox>
                    <el-checkbox v-model="checked">异常记录</el-checkbox>
                  </div>
                  <el-divider content-position="left">修正记录</el-divider>
                  <div class="filter">
                    <el-button type="primary" size="mini">修改考勤状态</el-button>
                    <el-button type="primary" size="mini">删除选择的记录</el-button>
                    <el-button type="primary" size="mini">取消本记录的处理</el-button>
                    <el-button type="primary" size="mini">执行处理方法</el-button>
                  </div>
                  <el-divider content-position="left">管理记录</el-divider>
                  <div class="filter">
                    <el-button type="primary" size="mini">数据列</el-button>
                    <el-button type="primary" size="mini">显示全部数据列</el-button>
                    <el-button type="primary" size="mini">导出记录</el-button>
                    <el-button type="primary" size="mini">打印预览</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="排班记录分析">
            <div class="main-slide">
              <span class="main-slide-left">
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
                </el-table>
              </span>
              <span class="main-slide-right">
                <el-divider content-position="left">过滤记录</el-divider>
                <div class="filter">
                  <el-checkbox v-model="checked">正常记录</el-checkbox>
                  <el-checkbox v-model="checked">迟到记录</el-checkbox>
                  <el-checkbox v-model="checked">早退记录</el-checkbox>
                  <el-checkbox v-model="checked">加班记录</el-checkbox>
                  <el-checkbox v-model="checked">旷工记录</el-checkbox>
                  <el-checkbox v-model="checked">请假记录</el-checkbox>
                  <el-checkbox v-model="checked">未签到记录</el-checkbox>
                  <el-checkbox v-model="checked">未签退记录</el-checkbox>
                </div>
                <el-divider content-position="left">修正记录</el-divider>
                <div class="filter">
                  <el-button type="primary" size="mini">修改为正常数据</el-button>
                </div>
                <el-divider content-position="left">管理记录</el-divider>
                <div class="filter">
                  <el-button type="primary" size="mini">数据列</el-button>
                  <el-button type="primary" size="mini">显示全部数据列</el-button>
                  <el-button type="primary" size="mini">导出记录</el-button>
                  <el-button type="primary" size="mini">打印预览</el-button>
                </div>
              </span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="外出/请假分析">
            <div class="main-slide">
              <span class="main-slide-left">
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
                </el-table>
              </span>
              <span class="main-slide-right">
                <el-divider content-position="left">管理记录</el-divider>
                <div class="filter">
                  <el-button type="primary" size="mini">数据列</el-button>
                  <el-button type="primary" size="mini">显示全部数据列</el-button>
                  <el-button type="primary" size="mini">导出记录</el-button>
                  <el-button type="primary" size="mini">打印预览</el-button>
                </div>
              </span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="考勤统计结果">
            <div class="main-slide">
              <span class="main-slide-left">
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
                </el-table>
              </span>
              <span class="main-slide-right">
                <el-divider content-position="left">管理记录</el-divider>
                <div class="filter">
                  <el-button type="primary" size="mini">数据列</el-button>
                  <el-button type="primary" size="mini">显示全部数据列</el-button>
                  <el-button type="primary" size="mini">导出记录</el-button>
                  <el-button type="primary" size="mini">打印预览</el-button>
                </div>
              </span>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </Container>
  </div>
</template>
<script>
import Search from '@/components/search'
import Container from '@/components/container'
import Departmentgroup from '@/components/Departmentgroup'
import Devicegroup from '@/components/Devicegroup'
function check() {
  if (document.getElementById('check1').checked === true) {
    return true
  } else {
    return false
  }
}
export default {
  components: {
    Search,
    Container,
    Departmentgroup,
    Devicegroup
  },
  data() {
    return {
      search: '输入日期',
      group_list: [],
      tableData: [],
      rowdata: {},
      total: null,
      per_page: {
        page: 1,
        perPage: 15
      },
      user_id: [],
      checked: true,
      multipleSelection: []
    }
  },
  computed: {
    user_id_list() {
      const userid = []
      this.multipleSelection.forEach(item => {
        userid.push(item.userid)
      })
      return userid
    }
  },
  mounted: function() {
    this.people_list()
  },
  methods: {
    // 增加人员
    Adduser() {
      this.$refs.editDialog.Adduser()
    },
    // 人员列表
    people_list(per_page) {
      // console.log(this.$refs.search.input)
      // console.log(this.$refs.DeviceGroup.Clientid, '10')
      // console.log(this.$refs.DeptGroup.Deptid, '11')
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      this.$store.dispatch('interactive/userList', { per_page: this.per_page.perPage, Deptid: this.$refs.DeptGroup.Deptid, page: this.per_page.page, ClientNumber: this.$refs.DeviceGroup.Clientid, search_key: this.$refs.search.input }).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 修改人员
    handleEdit(index, row) {
      setTimeout(() => {
        this.$refs.editDialog.handleEdit()
      }, 0)
      this.rowdata = Object.assign({}, row)
    },

    handleDelete(index, rows) {
      this.user_id = []
      console.log(index, rows)
      this.user_id.push(rows.userid)
      this.Delete()
    },
    deleteList() {
      this.user_id = []
      console.log(this.multipleSelection)
      this.multipleSelection.forEach((v, k) => {
        this.user_id.push(v.userid)
      })
      console.log(this.user_id)
      this.Delete()
    },
    // 删除人员
    Delete() {
      this.$confirm('<div>123</div><div><input id="check1" type="checkbox" checked="checked" value="">456</div>', '提示', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(check())
        this.$store.dispatch('interactive/userDelete', { userid: this.user_id.join(',') }).then(response => {
          this.people_list()
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
    // 表格数据
    handleSelectionChange(val) {
      console.log(val, 'table')
      this.multipleSelection = val
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
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-header{
    .con-item{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-dropdown {
        vertical-align: top;
        margin-left: 10px;
      }
    }
  }
  .el-main{
    .operating{
      height: 28px;
      display: flex;
      .el-button{
        padding: 0px;
      }
    }
    .elTable td{
      height: 50px;
    }
    .mini-icon{
      font-size: 20px;
    }
    .main-item{
      height: 100%;
      .el-table{
        height: 100%;
      }
    }
  }
  .main-slide-right{
    border-left:1px solid rgba(0,0,0,0.1);
    .filter{
      padding: 0 10px;
    }
    .el-checkbox{
      width: 100%;
      margin: 5px 0;
    }
    .el-button{
      width: 100%;
      margin: 5px 0;
    }
  }

</style>
