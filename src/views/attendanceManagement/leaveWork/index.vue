<template>
  <div class="leavework">
    <search ref="search" :search="search" @search="leave_list"/>
    <Container :total="total" @per_page="leave_list" @page="leave_list">
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini" @click="addLeave">增加</el-button>
          <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'danger':'info'" size="mini" @click="deleteList">删除</el-button>
          <el-button type="primary" size="mini">报表</el-button>
        </div>
      </div>
      <div slot="main" class="main-item">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"/>
          <el-table-column
            prop="DeptName"
            label="部门"
            width="180"/>
          <el-table-column
            prop="userid"
            label="考勤号"
            width="180"/>
          <el-table-column
            prop="UserName"
            label="姓名"/>
          <el-table-column
            prop="BeginTime"
            label="开始时间"/>
          <el-table-column
            prop="EndTime"
            label="结束时间"/>
          <el-table-column
            prop="Classname"
            label="假类名称"/>
          <el-table-column
            prop="Whys"
            label="请假原因"/>
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
    <Dialog ref="editDialog" :rowdata="rowdata"/>
  </div>
</template>
<script>
import Search from '@/components/search'
import Container from '@/components/container'
import Dialog from './components/Dialog/edit'
export default {
  components: {
    Search,
    Container,
    Dialog
  },
  data() {
    return {
      search: '考勤号',
      tableData: [],
      multipleSelection: [],
      total: null,
      per_page: {
        page: 1,
        perPage: 15
      },
      rowdata: {},
      Lsh: []
    }
  },
  computed: {
    LshList() {
      const lshArr = []
      this.multipleSelection.forEach(item => {
        lshArr.push(item.Lsh)
      })
      return lshArr
    }
  },
  mounted() {
    this.leave_list()
  },
  methods: {
    // 请假列表
    leave_list(per_page) {
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      console.log(per_page)
      this.$store.dispatch('interactive/LeaveList', { per_page: this.per_page.perPage, page: this.per_page.page, userid: this.$refs.search.input }).then(response => {
        this.tableData = response.UserLeave.data
        this.total = response.UserLeave.total
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 增加请假
    addLeave() {
      this.$refs.editDialog.addleave()
    },
    // 表格数据
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 请假修改
    handleEdit(index, row) {
      console.log(row)
      this.rowdata = Object.assign({}, row)
      setTimeout(() => {
        this.$refs.editDialog.modifyleave()
      }, 0)
    },
    // 行内删除
    handleDelete(index, row) {
      this.Lsh = []
      this.Lsh.push(row.Lsh)
      this.Delete()
    },
    // 批量删除
    deleteList() {
      this.Lsh = []
      this.Lsh = this.LshList
      this.Delete()
    },
    Delete() {
      console.log(this.Lsh.join(','))
      this.$confirm('<div class="del_title">确定删除此条请假数据吗？</div>', '提示', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('interactive/DelLeave', { Lsh: this.Lsh.join(',') }).then(response => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.leave_list()
        }).catch((error) => {
          console.log(error)
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
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
    }
  }
</style>
