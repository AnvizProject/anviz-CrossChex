<template>
  <div class="organization">
    <search :search="search"/>
    <Container :total="total" @per_page="people_list" @page="people_list">
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini" @click="Adduser">增加</el-button>
          <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'danger':'info'" size="mini" @click="handleDelete">删除</el-button>
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
          <Devicegroup/>
          <Departmentgroup/>
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
                <span class="mini-icon icon-enroll"/>
                <span class="mini-icon icon-face"/>
                <span class="mini-icon icon-see"/>
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
            prop="Cardnum"
            label="考勤号"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="UserCode"
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
    <editDialog ref="editDialog" :rowdata="rowdata"/>
  </div>
</template>

<script>
import Search from '@/components/search'
import Container from '@/components/container'
import Departmentgroup from '@/components/Departmentgroup'
import Devicegroup from '@/components/Devicegroup'
import editDialog from '../components/Dialog/edit'
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
    editDialog
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
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      this.$store.dispatch('interactive/userList', { per_page: this.per_page.perPage, Deptid: this.Deptid, page: this.per_page.page }).then(response => {
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
      this.user_id.push(rows.userid)
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
</style>
