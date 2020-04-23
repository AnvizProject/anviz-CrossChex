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
              <el-dropdown-item @click.native="shift_depart">调动部门</el-dropdown-item>
              <el-dropdown-item @click.native="resignation">人员离职</el-dropdown-item>
              <el-dropdown-item @click.native="set_authority">设置权限</el-dropdown-item>
              <el-dropdown-item @click.native="copyAuthority">复制权限</el-dropdown-item>
              <el-dropdown-item>
                <el-upload
                  :multiple="false"
                  :auto-upload="true"
                  :before-upload="beforeUpload"
                  :limit="1"
                  :http-request="import_personnel"
                  :show-file-list="false"
                  class="image-uploader"
                  list-type="text"
                  action=""
                  accept=".xlsx,.xls">
                  导入人员
                </el-upload>
              </el-dropdown-item>
              <el-dropdown-item @click.native="export_personnel">导出人员</el-dropdown-item>
              <el-dropdown-item @click.native="upload_user">上传人员</el-dropdown-item>
              <el-dropdown-item @click.native="upload_template">上传模板</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-item">
          <Devicegroup ref="DeviceGroup" @Terminal_list="people_list" @groupList="groupList"/>
          <Departmentgroup ref="DeptGroup" @Dept_list="people_list" @dep_list="departList"/>
        </div>
      </div>
      <div slot="main" class="main-item">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          class="elTable"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"/>
          <el-table-column
            prop="UserCode"
            sortable
            fixed
            width="100px"
            align="center"
            label="工号"/>
          <el-table-column
            label="姓名"
            align="center"
            width="120">
            <template slot-scope="scope">
              <div>{{ scope.row.Name }}</div>
              <div>
                <span :class="scope.row.hasFinger===1?'have':''" class="mini-icon icon-enroll"/>
                <span :class="scope.row.hasFace===1?'have':''" class="mini-icon icon-face"/>
                <span :class="scope.row.hasIris===1?'have':''" class="mini-icon icon-see"/>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Sex"
            label="性别"
            align="center"
            width="100px"
            show-overflow-tooltip/>
          <el-table-column
            prop="Duty"
            label="职务"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="Mobile"
            label="联系电话"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="userid"
            label="考勤号"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="Cardnum"
            label="卡号"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="EmployDate"
            label="聘用日期"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="ClientNumbers"
            label="所在机器"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="Birthday"
            label="出生日期"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="Address"
            label="联系地址"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="Pwd"
            label="密码"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="admingroupid"
            label="管理员组"
            align="center"
            show-overflow-tooltip/>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <div class="operating">
                <el-button type="text" size="mini" class="icon icon-edit" @click="handleEdit(scope.$index, scope.row)"/>
                <el-button type="text" size="mini" class="icon icon-recycle" @click="handleDelete(scope.$index, scope.row)"/>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </Container>
    <editDialog ref="editDialog" :rowdata="rowdata" :option="depList" @people_list="people_list" @upload_template="upload_template"/>
    <shift ref="shift" :user_id="user_id_list"/>
    <authority ref="authority" :group_list = "group_data" :checked-list="checkedList" @setting_authority="setting_authority"/>
    <copyAuthority ref="copyAuthority" :group_list = "group_data" @copy_authority="copy_authority"/>
  </div>
</template>

<script>
import Search from '@/components/search'
import Container from '@/components/container'
import Departmentgroup from '@/components/Departmentgroup'
import Devicegroup from '@/components/Devicegroup'
import editDialog from './components/Dialog/edit'
import shift from './components/Dialog/shift'
import authority from './components/Dialog/authority'
import copyAuthority from './components/Dialog/copyauthority'
var timestamp = Date.parse(new Date()) / 1000
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
    Devicegroup,
    editDialog,
    shift,
    authority,
    copyAuthority
  },
  data() {
    return {
      search: '工号、姓名',
      group_list: [],
      tableData: [],
      rowdata: {},
      total: null,
      per_page: {
        page: 1,
        perPage: 15
      },
      user_id: [],
      multipleSelection: [],
      delete_from_device: 1,
      depList: [],
      group_data: [],
      checkedList: {}
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
  mounted() {
    this.people_list()
  },
  methods: {
    // 部门数据列表
    departList(data) {
      this.depList = data
    },
    // 设备列表数据
    groupList(data) {
      this.group_data = data
    },
    // 增加人员
    Adduser() {
      this.$refs.editDialog.Adduser()
    },
    // 人员列表
    people_list(per_page) {
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      this.$store.dispatch('interactive/userList', { per_page: this.per_page.perPage, Deptid: this.$refs.DeptGroup.Deptid, page: this.per_page.page, ClientNumber: this.$refs.DeviceGroup.Clientid, search_key: this.$refs.search.input }).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
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
      this.user_id = []
      this.user_id.push(row.userid)
    },
    // 行内删除
    handleDelete(index, row) {
      this.user_id = []
      this.user_id.push(row.userid)
      this.Delete()
    },
    // 批量删除
    deleteList() {
      this.user_id = this.user_id_list
      this.Delete()
    },
    // 表格数据
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 人员调动部门
    shift_depart() {
      this.$refs.shift.centerDialogVisible = true
    },

    getConfigResult(res) {
      // 接收回调函数返回数据的方法
      if (res.ret === '10000') {
        return
      }
      if (res.ret === '0') {
        this.$message({
          message: '成功',
          type: 'success'
        })
        if (res.cmd === 'delete_from_device') {
          this.people_list()
        }
        if (res.cmd === 'upload_template') {
          this.$refs.editDialog.centerDialogVisible = false
        }
        if (res.cmd === 'set_power') {
          this.$refs.authority.centerDialogVisible = false
          this.$refs.copyAuthority.centerDialogVisible = false
        }
        return
      } else {
        this.$message({
          message: '失败',
          type: 'warning'
        })
      }
    },
    // 删除人员
    Delete() {
      this.$confirm('<div class="del_title">确定要删除选中的员工吗？</div><div><input id="check1" type="checkbox" checked="checked" value="">同时从设备删除该人员</div>', '提示', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(check())
        if (check() === true) {
          this.delete_from_device = 2
        } else {
          this.delete_from_device = 0
        }
        this.socketApi.sendSock(JSON.parse('{"cmd":"delete_from_device", "data": {"ts":"' + timestamp + '","userids": "' + this.user_id.join(',') + '","delete_from_device": "' + this.delete_from_device + '"}}'), this.getConfigResult)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 人员离职
    resignation() {
      this.$confirm('<div class="del_title">确定对该人员做离职处理吗？</div><div><input id="check1" type="checkbox" checked="checked" value="">同时从设备删除该人员</div>', '提示', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(check())
        if (check() === true) {
          this.delete_from_device = 1
        } else {
          this.delete_from_device = 0
        }
        this.socketApi.sendSock(JSON.parse('{"cmd":"user_resign", "data": {"ts":"' + timestamp + '","userids": "' + this.user_id.join(',') + '","delete_from_device": "' + this.delete_from_device + '"}}'), this.getConfigResult)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 设置权限
    set_authority() {
      this.$refs.authority.centerDialogVisible = true
    },
    // 复制权限
    copyAuthority() {
      this.$refs.copyAuthority.centerDialogVisible = true
    },
    // 设置权限
    setting_authority(data) {
      this.socketApi.sendSock(JSON.parse('{"cmd":"set_power", "data": {"ts":"' + timestamp + '","userids": "' + this.user_id_list.join(',') + '","clientids": "' + data.join(',') + '"}}'), this.getConfigResult)
    },
    // 复制权限
    copy_authority(data) {
      this.socketApi.sendSock(JSON.parse('{"cmd":"set_power", "data": {"ts":"' + timestamp + '","userids": "' + this.user_id_list.join(',') + '","copy_userid": "' + data + '"}}'), this.getConfigResult)
    },
    // 上传人员
    upload_user() {
      console.log('{"cmd":"upload_user", "data": {"ts":"' + timestamp + '","userids": "' + this.user_id_list.join(',') + '" }}')
      this.socketApi.sendSock(JSON.parse('{"cmd":"upload_user", "data": {"ts":"' + timestamp + '","userids": "' + this.user_id_list.join(',') + '" }}'), this.getConfigResult)
    },
    // 上传模板
    upload_template() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"upload_template", "data": {"ts":"' + timestamp + '","userids": "' + this.user_id_list.join(',') + '"}}'), this.getConfigResult)
    },
    // 导出人员
    export_personnel() {
      this.$store.dispatch('interactive/Userexport', {}).then(response => {
        this.$message({
          type: 'success',
          message: '导出人员成功'
        })
        window.location.href = process.env.BASE_API + response.export_url
      }).catch(error => {
        console.log(error)
      })
    },

    // 上传文件之前的钩子
    beforeUpload(file) {
    // 判断文件格式
      const hz = file.name.split('.')[1]
      if (hz !== 'xlsx' && hz !== 'xls') {
        this.$message({
          message: '只允许上传xlsx或xls结尾的表格文件',
          type: 'warning'
        })
        return false
      }
    },
    // 导入人员
    import_personnel(item) {
      console.log(item)
      const fileObj = item.file
      const form = new FormData()// FormData 对象
      form.append('file', fileObj)// 文件对象  'upload'是后台接收的参数名
      this.$store.dispatch('interactive/Userimport', form).then(response => {
        this.$message({
          type: 'success',
          message: '导入人员成功'
        })
      }).catch(error => {
        console.log(error)
      })
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
      height: auto;
    }
    .mini-icon{
      font-size: 20px;
    }
    .main-item{
      height: 100%;
    }
  }
  .have{
    color:#47a369;
  }
</style>
