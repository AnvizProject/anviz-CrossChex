<template>
  <div class="report">
    <Container :total="total" @per_page="statistics_list" @page="statistics_list">
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini">统计分析</el-button>
          <el-button size="mini" type="primary">查询结果</el-button>
          <el-button size="mini" type="primary">导出当前数据</el-button>
          <el-button size="mini" type="primary">保存结果</el-button>
          <el-dropdown>
            <el-button :disabled="multipleSelection.length<=0" type="info" size="mini">报表预览<i class="el-icon-arrow-down el-icon--right"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设计报表</el-dropdown-item>
              <el-dropdown-item>流水记录表</el-dropdown-item>
              <el-dropdown-item>每月记录表</el-dropdown-item>
              <el-dropdown-item>月考勤符号表</el-dropdown-item>
              <el-dropdown-item>月考勤明细表</el-dropdown-item>
              <el-dropdown-item>月工时汇总表</el-dropdown-item>
              <el-dropdown-item>考勤统计总表</el-dropdown-item>
              <el-dropdown-item>考勤异常报表</el-dropdown-item>
              <el-dropdown-item>外出/请假报表</el-dropdown-item>
              <el-dropdown-item>当前数据报表</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-item">
          <Devicegroup ref="DeviceGroup" @Terminal_list="statistics_list"/>
          <Departmentgroup ref="DeptGroup" @Dept_list="statistics_list"/>
          <span class="date_select">
            <el-date-picker
              v-model="start_date"
              :clearable="false"
              value-format="yyyy-MM-dd"
              size="mini"
              type="date"
              placeholder="选择日期"/>
            <el-date-picker
              v-model="end_date"
              :clearable="false"
              value-format="yyyy-MM-dd"
              type="date"
              size="mini"
              placeholder="选择日期"/>
          </span>
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
                    :data="z_mem_record"
                    tooltip-effect="dark"
                    style="width: 100%"
                    border
                    @selection-change="handleSelectionChange">
                    <el-table-column
                      prop="Udept"
                      label="部门"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Ucode"
                      label="人员编号"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Uid"
                      label="考勤号"
                      sortable
                      width="90px"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Uname"
                      label="姓名"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Checktime"
                      label="考勤时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Utypename"
                      label="状态"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Disposeplan"
                      label="处理方法"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Errorshow"
                      label="错误描述"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Timename"
                      label="对应时段"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="UAttFlag"
                      width="110px"
                      label="验证方式编码"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="UAttFlagName"
                      label="验证方式"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="UWorktype"
                      label="工作码"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="ULogid"
                      label="机器号"
                      show-overflow-tooltip
                      width="100"/>
                    <el-table-column
                      prop="Checked"
                      label="审核"
                      show-overflow-tooltip
                      width="120"/>
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
                      fixed
                      prop="UserCode"
                      label="部门"
                      show-overflow-tooltip/>
                    <el-table-column
                      fixed
                      prop="UserCode"
                      label="人员编号"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="userid"
                      label="考勤号"
                      sortable
                      width="90px"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Name"
                      label="姓名"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="EmployDate"
                      label="日期"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="对应时段"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="应上班时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="应下班时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="班次时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="签到时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Sex"
                      label="签退时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="chidaoshijian"
                      label="迟到时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Birthday"
                      label="早退时间"
                      show-overflow-tooltip
                      width="100"/>
                    <el-table-column
                      prop="Mobile"
                      label="加班时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Address"
                      label="未签到"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Pwd"
                      label="未签退"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="旷工"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="例外情况"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="浮动"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="加班"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="排定工作日"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="排定时长"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="工作时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="实际时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="工种"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="审核"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="外出时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="排班时间"
                      show-overflow-tooltip/>
                  </el-table>
                </div>
              </el-col>
              <el-col :span="4" class="main-slide-right">
                <div class="grid-content bg-purple-light">
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
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="外出/请假分析">
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
                      prop="UserCode"
                      label="部门"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="UserCode"
                      label="人员编号"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="userid"
                      label="考勤号"
                      sortable
                      width="90px"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Name"
                      label="姓名"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="EmployDate"
                      label="开始时间"
                      show-overflow-tooltip
                      width="100"/>
                    <el-table-column
                      prop="address"
                      label="结束时间"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="异常情况"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="时长"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="排定工作日"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="排定时长"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Sex"
                      label="备注"
                      show-overflow-tooltip/>
                  </el-table>
                </div>
              </el-col>
              <el-col :span="4" class="main-slide-right">
                <div class="grid-content bg-purple-light">
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
          <el-tab-pane label="考勤统计结果">
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
                      prop="UserCode"
                      label="部门"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="UserCode"
                      label="人员编号"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="userid"
                      label="考勤号"
                      sortable
                      width="90px"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Name"
                      label="姓名"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="EmployDate"
                      label="应到[工作日]"
                      show-overflow-tooltip
                      width="100"/>
                    <el-table-column
                      prop="address"
                      label="实到[工作日]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="迟到[分钟]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="早退[分钟]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="旷工[工作日]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="加班[小时]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Sex"
                      label="加班1[小时]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Duty"
                      label="加班2[小时]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Birthday"
                      label="加班3[小时]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Mobile"
                      label="自由加班[小时]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="Address"
                      label="未签到[次]"
                      show-overflow-tooltip
                      width="170"/>
                    <el-table-column
                      prop="Pwd"
                      label="未签退[次]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="外出[分钟]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="公出[工作日]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="请假[工作日]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="工作时间[小时]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="实际时间[小时]"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="出勤率"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="Break Time"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="时间段2"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="早班司机"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="白工"
                      show-overflow-tooltip/>
                    <el-table-column
                      prop="address"
                      label="黑工"
                      show-overflow-tooltip/>

                  </el-table>
                </div>
              </el-col>
              <el-col :span="4" class="main-slide-right">
                <div class="grid-content bg-purple-light">
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
var timestamp = Date.parse(new Date()) / 1000
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
      z_mem_record: [],
      tableData: [],
      rowdata: {},
      total: null,
      per_page: {
        page: 1,
        perPage: 15
      },
      user_id: [],
      checked: true,
      multipleSelection: [],
      deptid: '0',
      userid: '0',
      start_date: '',
      end_date: ''
    }
  },
  mounted: function() {
    this.statistics_list()
  },
  created() {
    this.getCurrentMonthFirst()
    this.getNowTime()
  },
  methods: {
    // 当月第一天
    getCurrentMonthFirst() {
      var date = new Date()
      date.setDate(1)
      var month = parseInt(date.getMonth() + 1)
      var day = date.getDate()
      if (month < 10) month = '0' + month
      if (day < 10) day = '0' + day
      this.start_date = date.getFullYear() + '-' + month + '-' + day
    },
    // 当天
    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() // 得到年份
      var month = now.getMonth() // 得到月份
      var date = now.getDate() // 得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}-${date}`
      this.end_date = defaultDate
    },

    // 表格数据
    handleSelectionChange(val) {
      console.log(val, 'table')
      this.multipleSelection = val
    },
    getConfigResult(res) {
      // 接收回调函数返回数据的方法
      console.log(res)
      if (res.ret === '0') {
        this.$message({
          message: '成功',
          type: 'success'
        })
        if (res.cmd === 'stat_analysis') {
          this.z_mem_record = res.data.z_mem_record
        }
        return
      } else {
        this.$message({
          message: '失败',
          type: 'warning'
        })
      }
    },
    // 考勤记录分析列表
    statistics_list() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"stat_analysis", "data": {"ts":"' + timestamp + '","deptid": "' + this.deptid + '","userid": "' + this.userid + '","start_date":"' + this.start_date + '","end_date":"' + this.end_date + '" }}'), this.getConfigResult)
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
  .el-date-editor{
    &.el-input{
      width: 110px;
    }
  }
</style>
<style lang="scss">
  .el-input--suffix{
    .el-input__inner{
      padding-right: 0;
    }
  }
</style>
