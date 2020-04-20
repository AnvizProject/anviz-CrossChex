<template>
  <div class="attendance">
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
  mounted: function() {
    this.statistics_list()
  },
  methods: {
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
      this.socketApi.sendSock(JSON.parse('{"cmd":"stat_analysis", "data": {"ts":"' + timestamp + '","deptid": "' + this.clientid + '"}}'), this.getConfigResult)
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

</style>
