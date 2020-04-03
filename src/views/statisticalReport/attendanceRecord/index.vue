<template>
  <el-container class="record">
    <el-header height="auto">
      <div class="top">
        <div class="top-slide">
          <span>
            <span>
              <span class="search-title">部门</span>
              <span class="net-input-item">
                <el-cascader :options="department_options" :props="{ expandTrigger: 'hover' }" :show-all-levels="false" v-model="form.date1" size="mini" clearable/>
              </span>
            </span>
            <span>
              <span class="search-title">人员</span>
              <span class="net-input-item">
                <selectbox :options="staff_options" v-model="form.date2"/>
              </span>
            </span>
            <span>
              <span class="search-title">记录<br>标识</span>
              <span class="net-input-item">
                <selectbox :options="options.record_identifier" v-model="form.date3"/>
              </span>
            </span>
            <span>
              <span class="search-title">机器<br>号</span>
              <span class="net-input-item">
                <el-cascader :options="department_options" :props="{ expandTrigger: 'hover' }" :show-all-levels="false" v-model="form.date1" size="mini" clearable/>
              </span>
            </span>
            <span>
              <span class="search-title">开始<br>日期</span>
              <span class="net-input-item">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  size="mini"
                  placeholder="请选择"/>
              </span>
            </span>
            <span>
              <span class="search-title">结束 <br> 日期</span>
              <span class="net-input-item">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  size="mini"
                  placeholder="请选择"/>
              </span>
            </span>
          </span>
          <span>
            <div>
              <el-button type="primary" icon="el-icon-search" @click="query">查询</el-button>
            </div>
            <div>
              <el-button type="info" icon="el-icon-refresh" @click="reset">重置</el-button>
            </div>
          </span>
        </div>
        <div class="top-slide">
          <span>
            <span>
              <span class="search-title">部门</span>
              <span class="net-input-item">
                <el-cascader :options="department_options" :props="{ expandTrigger: 'hover' }" :show-all-levels="false" v-model="form.date1" size="mini" clearable/>
              </span>
            </span>
            <span>
              <span class="search-title">人员</span>
              <span class="net-input-item">
                <selectbox :options="staff_options" v-model="form.date2"/>
              </span>
            </span>
            <span>
              <span class="search-title">记录<br>标识</span>
              <span class="net-input-item">
                <selectbox :options="options.record_identifier" v-model="form.date3"/>
              </span>
            </span>
            <span>
              <span class="search-title">机器<br>号</span>
              <span class="net-input-item">
                <el-cascader :options="department_options" :props="{ expandTrigger: 'hover' }" :show-all-levels="false" v-model="form.date1" size="mini" clearable/>
              </span>
            </span>
            <span>
              <span class="search-title">开始<br>日期</span>
              <span class="net-input-item">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  size="mini"
                  placeholder="请选择"/>
              </span>
            </span>
            <span>
              <span class="search-title">结束 <br> 日期</span>
              <span class="net-input-item">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  size="mini"
                  placeholder="请选择"/>
              </span>
            </span>
          </span>
          <span>
            <div>
              <el-button type="primary" icon="el-icon-search" @click="query">导出记录</el-button>
            </div>
            <div>
              <el-button type="info" icon="el-icon-refresh" @click="reset">清除记录</el-button>
            </div>
          </span>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="main-slide">
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
    </el-main>
    <el-footer height="auto" class="footer">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[15, 30, 50]"
        :page-size="15"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="current_change"/>
    </el-footer>
  </el-container>
</template>
<style scoped src="@/styles/list-top.scss"></style>
<script>
import selectbox from '@/components/select'
import staff from '@/components/mixin/staff'
import department from '@/components/mixin/department'
import options from '@/components/mixin/Options'
export default {
  components: {
    selectbox
  },
  mixins: [department, staff, options],
  data() {
    return {
      form: {
        Nmae: '',
        UserCode: '',
        Deptid: ''
      },
      tableData: [],
      multipleSelection: [],
      total: 10,
      currentPage: 1,
      rowdata: {}
    }
  },
  mounted: function() {
    this.userlist(1)
  },
  methods: {
    userlist(page) {
      this.$store.dispatch('interactive/userList', { page }).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
      }).catch(() => {
      })
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.filterTable.toggleRowSelection(row)
          console.log(rows)
        })
      } else {
        this.$refs.filterTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    // 人员查询
    query() {
      this.$store.dispatch('interactive/userList', this.form).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
      }).catch(() => {
      })
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
    // 重置
    reset() {
      this.form = {}
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage
      this.form.page = currentPage
      this.userlist(currentPage)
    }
  }
}
</script>
<style lang="scss" scoped>
.top{
  .top-slide{
    display: flex;
    width: 47.5%;
    justify-content: space-between;
    &:first-child{
      padding-right: 2.5%;
      border-right:1px solid rgba(0,0,0,0.1)
    }
    &:nth-child(2){
      margin-left: 2.5%;
    }
    >span:first-child{
      display: flex;
      flex-wrap: wrap;
      margin: 10px 5px 5px 0;
      >span{
        display: flex;
        width: 32%;
        align-items: center;
        margin-bottom: 5px;
        margin-right: 2%;
        &:nth-child(3n){
          margin-right: 0;
        }
        .el-date-editor.el-input{
          width: auto;
        }
      }
      .search-title{
        white-space: nowrap;
        margin-right: 2%;
      }
    }
    >span:nth-child(2){
      div{
        margin:10px 0;
      }
    }
  }
}
  .el-select{
    height:28px;
  }
  .main-slide{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .footer{
    display: flex;
    justify-content:space-between;
  }
</style>

