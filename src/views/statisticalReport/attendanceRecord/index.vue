<template>
  <div class="record">
    <Container :total="total">
      <el-header slot="header" class="top">
        <div class="top-slide">
          <span>
            <span>
              <span class="search-title">部门</span>
              <span class="net-input-item">
                <deptGroup ref="DeptGroup" @Dept_list="Dept_list"/>
              </span>
            </span>
            <span>
              <span class="search-title">人员</span>
              <span class="net-input-item">
                <!-- <selectbox :options="personnel" v-model="form.date2"/> -->
                <el-select v-model="searchForm.userid" size="mini" placeholder="人员">
                  <el-option
                    v-for="item in personnel"
                    :key="item.userid"
                    :label="item.Name"
                    :value="item.userid"/>
                </el-select>
              </span>
            </span>
            <span>
              <span class="search-title">记录<br>标识</span>
              <span class="net-input-item">
                <selectbox :options="options.record_identifier" v-model="searchForm.logflag"/>
              </span>
            </span>
            <span>
              <span class="search-title">机器<br>号</span>
              <span class="net-input-item">
                <el-input v-model="searchForm.Sensorid" type="text"/>
              </span>
            </span>
            <span>
              <span class="search-title">开始<br>日期</span>
              <span class="net-input-item">
                <el-date-picker
                  v-model="searchForm.beginTime"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date"
                  size="mini"
                  placeholder="请选择"/>
              </span>
            </span>
            <span>
              <span class="search-title">结束 <br> 日期</span>
              <span class="net-input-item">
                <el-date-picker
                  v-model="searchForm.endTime"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  type="date"
                  size="mini"
                  placeholder="请选择"/>
              </span>
            </span>
          </span>
          <span>
            <div>
              <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
            </div>
            <div>
              <el-button type="info" icon="el-icon-refresh" @click="reset">重置</el-button>
            </div>
          </span>
        </div>
        <div class="top-slide">
          <span>
            <span>
              <span class="search-title">导出格式</span>
              <span class="net-input-item">
                <selectbox :options="options.Attendance.exportFormat" v-model="exportForm.export_type"/>
              </span>
            </span>
            <span>
              <span class="search-title">导出字段</span>
              <span class="net-input-item">
                <selectbox :multiple="true" :collapse-tags="true" :options="options.Attendance.exportField" v-model="exportForm.titles"/>
              </span>
            </span>
            <span>
              <span class="search-title">时间格式</span>
              <span class="net-input-item">
                <selectbox :options="options.Attendance.timeFormat" v-model="exportForm.time_type"/>
              </span>
            </span>
            <span>
              <span class="search-title">人员编号位数</span>
              <span class="net-input-item">
                <el-input v-model="exportForm.UserCodeNum" type="text"/>
              </span>
            </span>
            <span>
              <span class="search-title">间隔符号</span>
              <span class="net-input-item">
                <selectbox :options="options.Attendance.spacer" v-model="exportForm.Spacer"/>
              </span>
            </span>
            <span>
              <span class="search-title">间隔符号位数</span>
              <span class="net-input-item">
                <el-input v-model="exportForm.SpacerNum" type="text"/>
              </span>
            </span>
          </span>
          <span>
            <div>
              <el-button type="primary" icon="el-icon-search" @click="exportData">导出记录</el-button>
            </div>
            <div>
              <el-button type="info" icon="el-icon-refresh" @click="clear">清除记录</el-button>
            </div>
          </span>
        </div>
      </el-header>
      <!-- <el-main slot="main"> -->
      <div slot="main" class="main-slide">
        <el-table
          ref="filterTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%">
          <el-table-column
            prop="UserCode"
            align="center"
            label="人员编号"/>
          <el-table-column
            prop="userid"
            align="center"
            label="考勤号"/>
          <el-table-column
            prop="Name"
            align="center"
            label="姓名"
            show-overflow-tooltip/>
          <el-table-column
            prop="CheckTime"
            align="center"
            label="日期/时间"
            width="150"
            show-overflow-tooltip/>
          <el-table-column
            prop="CheckType"
            align="center"
            label="状态"
            show-overflow-tooltip/>
          <el-table-column
            prop="CheckTypeName"
            align="center"
            label="状态说明"
            show-overflow-tooltip/>
          <el-table-column
            prop="Sensorid"
            align="center"
            label="机器号"
            show-overflow-tooltip/>
          <el-table-column
            prop="ClientNumber"
            align="center"
            width="100px"
            label="机器序列号"
            show-overflow-tooltip/>
          <el-table-column
            prop="ClientName"
            label="机器名称"
            align="center"
            show-overflow-tooltip/>
          <el-table-column
            prop="DeptName"
            align="center"
            label="部门"
            show-overflow-tooltip/>
          <el-table-column
            prop="Duty"
            align="center"
            label="职务"
            show-overflow-tooltip/>
          <el-table-column
            prop="WorkType"
            align="center"
            label="工作码"
            show-overflow-tooltip/>
          <el-table-column
            prop="AttFlag"
            align="center"
            width="120px"
            label="验证方式编码"
            show-overflow-tooltip/>
          <el-table-column
            prop="AttFlagName"
            align="center"
            label="验证方式"
            show-overflow-tooltip/>
          <el-table-column label="是否开门" align="center">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.OpenDoorFlag" :true-label="1" :false-label="0" disabled/>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- </el-main> -->
    </Container>
  </div>
</template>
<style scoped src="@/styles/list-top.scss"></style>
<script>
import selectbox from '@/components/select'
import staff from '@/components/mixin/staff'
import department from '@/components/mixin/department'
import options from '@/components/mixin/Options'
import Container from '@/components/container'
import deptGroup from '@/components/Departmentgroup'
export default {
  components: {
    selectbox,
    deptGroup,
    Container
  },
  mixins: [department, staff, options],
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      total: 10,
      currentPage: 1,
      rowdata: {},
      personnel: [],
      searchForm: {
        export: 0,
        Deptid: 0,
        userid: '0',
        logflag: 0,
        Sensorid: '',
        beginTime: '',
        endTime: ''
      },
      exportForm: {
        export: 1,
        export_type: 'xls',
        titles: [],
        time_type: 1,
        UserCodeNum: 0,
        Spacer: 1,
        SpacerNum: 1
      }
    }
  },
  mounted: function() {
    this.personnel.unshift({ userid: '0', Name: '所有人员' })
    this.$confirm('确定要进行考勤统计分析吗?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '完成分析'
      })
      this.getData({})
    }).catch((error) => {
      console.log(error)
      this.$message({
        type: 'info',
        message: '已取消'
      })
    })
  },
  methods: {
    getData(data) {
      this.$store.dispatch('interactive/checkinout', data).then(response => {
        if (data.export === 1) {
          // window.location = response.export_url
          // window.open(response.export_url)
          window.open(process.env.BASE_API + response.export_url)
          return
        }
        this.tableData = response.Checkinout
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 人员列表
    Dept_list() {
      this.searchForm.userid = '0'
      this.$store.dispatch('interactive/userList', { Deptid: this.$refs.DeptGroup.Deptid }).then(response => {
        this.searchForm.Deptid = this.$refs.DeptGroup.Deptid
        this.personnel = response.userinfo_list.data
        console.log(response)
        this.personnel.unshift({ userid: '0', Name: '全部人员' })
      }).catch(error => {
        console.log(error)
      })
    },
    // 查询
    search() {
      this.searchForm.export = 0
      this.getData(this.searchForm)
    },
    // 重置查询
    reset() {
      this.searchForm = {
        export: 0,
        Deptid: 0,
        userid: '0',
        recordType: 1,
        Sensorid: '',
        beginTime: '',
        endTime: ''
      }
      this.$refs.DeptGroup.value = '部门组'
    },
    // 导出
    exportData() {
      this.exportForm.export = 1
      this.getData(this.exportForm)
    },
    clear() {
      this.exportForm = {
        export: 1,
        export_type: 'xls',
        titles: [],
        time_type: 1,
        UserCodeNum: 0,
        Spacer: 1,
        SpacerNum: 1
      }
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

<style lang="scss">
  .record{
    .main-body{
      height:calc(100vh - 80px) !important;
    }
    .main-body .el-header{
      height: unset !important;
    }
    .el-header .filter-box .filter-con{
      right: unset;
      left: 0;
    }
    .el-select__tags{
      flex-wrap: nowrap;
      overflow: hidden;
    }
  }
</style>
