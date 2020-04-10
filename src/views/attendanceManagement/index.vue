<template>
  <el-container class="attendance">
    <el-header height="auto">
      <div class="top">
        <div class="top-item">
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
          <span>
            <el-button type="primary" icon="el-icon-search" @click="query">查询</el-button>
            <el-button type="info" icon="el-icon-refresh" @click="reset">重置</el-button>
          </span>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane label="考勤记录分析">
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
            </span>
          </div>
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
        Deptid: '',
        date2: ''
      },
      tableData: [],
      multipleSelection: [],
      total: 10,
      currentPage: 1,
      rowdata: {},
      checked: true
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
  .el-select{
    height:28px;
  }
  .el-tabs--border-card {
    background: #FFF;
    border: none;
    box-shadow: none;
    height: 100%;
  }
  .main-slide{
    display: flex;
    width: 100%;
    height: 100%;
    .main-slide-left{
      width: calc(100vw - 470px);
      flex-basis: calc(100vw - 470px);
      flex-shrink: 0;
      overflow-x: auto;
    }
    .main-slide-right{
      width: auto;
      max-width: 200px;
      height: 100%;
      flex-shrink: 0;
      border-left:1px solid rgba(0,0,0,0.1);
      padding: 0 10px;
      .filter{
        padding: 0 10px;
      }
      .el-checkbox{
        margin: 5px 0;
      }
      .el-button{
        width: 100%;
        margin: 5px 0;
      }
    }

  }
  .footer{
    display: flex;
    justify-content:space-between;
  }
</style>

