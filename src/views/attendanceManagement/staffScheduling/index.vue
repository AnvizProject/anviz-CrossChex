<template>
  <div class="people-shift">
    <search ref="search" :search="search" @search="people_list"/>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <container :total="total" @per_page="people_list" @page="people_list">
            <div slot="header" class="con-item">
              <div class="header-item">
                <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'primary':'info'" size="mini" @click="setShift">排班设置</el-button>
              </div>
              <div class="header-item">
                <Departmentgroup ref="DeptGroup" @Dept_list="people_list"/>
              </div>
            </div>
            <div slot="main" class="main">
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
                  prop="Name"
                  label="姓名"
                  align="center"
                  width="120"/>
                <el-table-column
                  prop="userid"
                  label="考勤号"
                  align="center"
                  show-overflow-tooltip/>
                <el-table-column
                  prop="DeptName"
                  label="部门"
                  align="center"
                  show-overflow-tooltip/>
                <el-table-column
                  label="班次"
                  align="center"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <div v-if="scope.row.ClassFlag===1">{{ scope.row.Schname }}</div>
                    <div v-if="scope.row.ClassFlag===0">不排班</div>
                    <div v-if="scope.row.ClassFlag===2">智能排班</div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </container>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light people-shift-item" >
          <el-container>
            <el-header>
              <el-row class="header-item-top">
                <el-col :span="16">
                  <div class="grid-content bg-purple">
                    <el-row class="header-item-left">
                      <el-col :span="4">日期选择</el-col>
                      <el-col :span="8">
                        <el-date-picker v-model="form.beginTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" size="mini" placeholder="开始日期" style="width: 100%;" @change="date"/>
                      </el-col>
                      <el-col :span="1" class="line">-</el-col>
                      <el-col :span="8">
                        <el-date-picker v-model="form.endTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" size="mini" placeholder="结束日期" style="width: 100%;" @change="date"/>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple-light">
                    <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'primary':'info'" size="mini" @click="Tem_shift">临时排班</el-button>
                    <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'primary':'info'" size="mini" @click="cancel_shift">取消临时排班</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-header>
            <el-main>
              <div class="day-foot-top">
                <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'primary':'info'" size="mini" @click="deltime">删除时间段</el-button>
                <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'primary':'info'" size="mini" @click="cleartime">清除时间段</el-button>
              </div>
              <div class="shift-list">
                <div class="shift-list-slide">
                  <el-row>
                    <el-col :span="24">
                      <el-row>
                        <el-col :span="4"><div class="grid-content bg-purple date-head">日期</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple date-head">上班时段一</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple date-head">上班时段二</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple date-head">上班时段三</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple date-head">上班时段四</div></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="4">
                      <div v-for="(v,k) in datelist" :key="k" class="grid-content bg-purple">
                        <div class="date-list">
                          <span>{{ v.WorkDate.substring(5,10) }}</span>
                          <span v-if="v.week==0">星期日</span>
                          <span v-if="v.week==1">星期一</span>
                          <span v-if="v.week==2">星期二</span>
                          <span v-if="v.week==3">星期三</span>
                          <span v-if="v.week==4">星期四</span>
                          <span v-if="v.week==5">星期五</span>
                          <span v-if="v.week==6">星期六</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="grid-content bg-purple-light">
                        <el-row>
                          <el-col v-for="(v,k) in time_list" :key="k" :span="6">
                            <div v-for="(m,n) in v" :key="n">
                              <div v-if="m.Timename!==''" :class="{'active':currentSort===(k)+'-'+(n)}" style="cursor: pointer;" class="grid-content bg-purple date-data" @click="time((k)+'-'+(n),k,n)">{{ m.Timename }}</div>
                              <div v-else class="grid-content bg-purple date-data">&nbsp;</div>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-main>
          </el-container>
        </div>
      </el-col>
    </el-row>
    <!-- <progress-self ref="progress"/>进度条 -->
    <setshiftDialog ref="setshiftDialog" :userids="user_id" :type="type"/>
    <addshiftDialog ref="addshiftDialog" :datelist = "datelist" :addshift_data="form"/>
  </div>
</template>
<script>
import Search from '@/components/search'
import container from '@/components/container'
import Departmentgroup from '@/components/Departmentgroup'
import setshiftDialog from './components/Dialog/setshift'
import addshiftDialog from './components/Dialog/addshift'
export default {
  components: { Search, container, Departmentgroup, setshiftDialog, addshiftDialog },
  data() {
    return {
      search: ' 人员编号、姓名',
      total: null,
      tableData: [],
      multipleSelection: [],
      type: '',
      per_page: {
        page: 1,
        perPage: 15
      },
      datelist: [],
      time_list: [],
      currentSort: 0,
      k: 0,
      n: 0,
      form: {
        userid: '',
        beginTime: '',
        endTime: ''
      },
      temp_json: [],
      Selected: []
    }
  },
  computed: {
    user_id() {
      const userid = []
      this.multipleSelection.forEach(item => {
        userid.push(item.userid)
      })
      return userid
    }
  },
  mounted: function() {
    this.people_list()
    this.getNowTime()
    this.date()
  },
  methods: {
    // 表格默认选中第一个
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // 人员列表
    people_list(per_page) {
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      console.log(this.per_page)
      this.$store.dispatch('interactive/userList', { user_shift: 1, per_page: this.per_page.perPage, Deptid: this.$refs.DeptGroup.Deptid, page: this.per_page.page, search_key: this.$refs.search.input }).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
        this.$nextTick(() => {
          this.toggleSelection([this.tableData[0]])
        })
      }).catch(error => {
        console.log(error)
      })
    },
    // 表格数据
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.date()
    },
    // 排班计划
    setShift() {
      this.$refs.setshiftDialog.centerDialogVisible = true
      this.$refs.setshiftDialog.form.type = String(this.multipleSelection[0].ClassFlag)
      this.$refs.setshiftDialog.Current_record()
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
      this.form.beginTime = defaultDate
      this.form.endTime = defaultDate
    },
    // 临时排班数据
    date() {
      if (this.multipleSelection.length === 0) {
        this.form.userid = ''
      } else {
        this.form.userid = this.multipleSelection[0].userid
      }
      this.$store.dispatch('interactive/Temporary_shift', this.form).then(response => {
        this.datelist = response.WorkDates
        this.time_list = response.UserTempShiftByArr
      }).catch(error => {
        console.log(error)
      })
    },
    // 清除时间段
    cleartime() {
      this.form.Timeid = -1
      this.$store.dispatch('interactive/Tem_shift_del', this.form).then(response => {
        this.$message({
          message: '时间段清除成功',
          type: 'success'
        })
        this.date()
      }).catch(error => {
        console.log(error)
      })
    },
    // 时间段点击
    time(index, k, n) {
      this.currentSort = index
      this.k = k
      this.n = n
    },
    // 删除时间段
    deltime() {
      console.log(this.time_list)
      for (var key in this.time_list) {
        var obj = this.time_list[key]
        if (key === this.k) {
          for (var k in obj) {
            if (k === this.n) {
              this.$store.dispatch('interactive/Tem_shift_del', { userid: this.form.userid, Timeid: obj[k].Timeid, WorkDate: obj[k].WorkDate }).then(response => {
                this.$message({
                  message: '时间段删除成功',
                  type: 'success'
                })
                this.date()
              }).catch(error => {
                console.log(error)
              })
            }
          }
        }
      }
    },
    // 临时排班新建
    Tem_shift() {
      console.log(this.time_list)
      for (var key in this.time_list) {
        var obj = this.time_list[key]
        for (var k in obj) {
          console.log(obj[k])
          this.temp_json.push({ WorkDate: obj[k].WorkDate, Timeid: obj[k].Timeid })
        }
      }
      this.form.temp_json = JSON.stringify(this.temp_json)
      this.$store.dispatch('interactive/Tem_shift_newset', { temp_json: JSON.stringify(this.temp_json), userid: this.form.userid, beginTime: this.form.beginTime, endTime: this.form.endTime }).then(response => {
        this.$refs.addshiftDialog.centerDialogVisible = true
        this.$refs.addshiftDialog.checkAll = false
        this.$refs.addshiftDialog.checkeddate = []
      }).catch(error => {
        console.log(error)
      })
    },
    // 撤销临时排班
    cancel_shift() {
      this.$store.dispatch('interactive/Tem_shift_cancel', this.form).then(response => {
        this.$message({
          message: '临时排班取消成功',
          type: 'success'
        })
        this.date()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .people-shift-item{
    .el-container{
      width: auto;
      height: calc(100vh - 112px) !important;
      margin: 10px 10px 10px 5px;
      box-shadow: 0px 2px 7px 0px rgba(65, 48, 48, 0.13);
      border-radius: 5px;
      overflow: auto;
      background: #FFF;
    }
    .el-header{
      background-color: #ffffff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      height: 40px !important;
      padding: 0 15px;
    }
    .el-main{
      padding: 15px;
    }
    .day-foot-top{
      padding-bottom: 15px;
    }
    .shift-list-slide{
      border: 1px solid #eee;
    }
    .date-head{
      border-right: 1px solid #eee;
    }
    .date-list,.date-data{
      border-top: 1px solid #eee;
      border-right: 1px solid #eee;
    }
    .active{
      border:1px solid #47a369 !important;
      border-top:1px solid #47a369 !important;
      border-right:1px solid #47a369 !important;
    }
  }
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
  .secondary{
    display: flex;
    .sec-title{
      white-space: nowrap;
      margin-right: 15px;
    }
  }
  .header-item-top{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bg-purple-light{
      display: flex;
      justify-content: flex-end;
    }
  }
  .header-item-left{
    display: flex;
    align-items: center;
  }
  .line{
    text-align: center;
  }
</style>
<style lang="scss" scoped>
.people-shift{
  .main-body{
    width: auto !important;
    margin: 10px 5px 10px 10px !important;
  }
}

</style>
