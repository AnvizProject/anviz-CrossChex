<template >
  <div class="workforce main-content">
    <el-tabs type="border-card">
      <el-tab-pane label="时间段设置">
        <el-row :gutter="20" class="time-slot">
          <el-col :span="12">
            <div class="grid-content bg-purple day">
              <div class="day-top">时间段设置</div>
              <div class="day-bot day-list">
                <el-form ref="form" :model="form" label-width="110px" size="mini">
                  <el-form-item label="时间段名称">
                    <el-input v-model="form.Timename"/>
                  </el-form-item>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item label="上班时间">
                        <el-time-picker v-model="form.Intime" type="date" placeholder="请选择" style="width: 100%;"/>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="下班时间">
                        <el-time-picker v-model="form.Outtime" type="date" placeholder="请选择" style="width: 100%;"/>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item label="开始签到时间">
                        <el-time-picker v-model="form.BIntime" type="date" placeholder="请选择" style="width: 100%;"/>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="结束签到时间">
                        <el-time-picker v-model="form.EIntime" type="date" placeholder="请选择" style="width: 100%;"/>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item label="开始签退时间">
                        <el-time-picker v-model="form.BOuttime" type="date" placeholder="请选择" style="width: 100%;"/>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="结束签退时间">
                        <el-time-picker v-model="form.EOuttime" type="date" placeholder="请选择" style="width: 100%;"/>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-row :gutter="10">
                        <el-col :span="18">
                          <el-form-item label="记迟到时间">
                            <el-input v-model="form.Latetime"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6" class="minute">分钟</el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="12">
                      <el-row :gutter="10">
                        <el-col :span="19">
                          <el-form-item label="记早退时间">
                            <el-input v-model="form.Leavetime"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5" class="minute">分钟</el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-row :gutter="10">
                        <el-col :span="18">
                          <el-form-item label="记多少工作日">
                            <el-input v-model="form.WorkDays"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5" class="minute"/>
                      </el-row>
                    </el-col>
                    <el-col :span="12">
                      <el-row :gutter="10">
                        <el-col :span="19">
                          <el-form-item label="记工作时长">
                            <el-input v-model="form.Longtime"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5" class="minute">分钟</el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
              <div class="day-foot">
                <el-form ref="form" :model="form">
                  <el-form-item>
                    <el-checkbox v-model="form.MustIn" true-label="1" false-label="0" label="必须签到" name="type"/>
                    <el-checkbox v-model="form.MustOut" true-label="1" false-label="0" label="必须签退" name="type"/>
                  </el-form-item>
                  <el-form-item>
                    <el-checkbox v-model="form.IsFreeTime" true-label="1" false-label="0" label="浮动时段" name="type"/>
                    <el-checkbox v-model="form.IsOverTime" true-label="1" false-label="0" label="加班时段" name="type"/>
                  </el-form-item>
                </el-form>
              </div>
              <div class="edit-button"><el-button type="primary" size="mini" @click="newlyAdded">新增</el-button></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <div class="table-title">时间段列表</div>
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
                  prop="Timename"
                  label="时间段名称"/>
                <el-table-column
                  prop="Intime"
                  label="上班时间"/>
                <el-table-column
                  prop="Outtime"
                  label="下班时间"
                  show-overflow-tooltip/>
                <el-table-column
                  label="操作">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      @click.native.prevent="deleteRow(scope.$index, scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="班次设置">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple-light day">
              <div class="day-top">
                <span>班次信息</span>
                <span><el-button type="primary" size="mini" @click="addShift">新增班次</el-button></span>
              </div>
              <div class="day-bot day-list">
                <el-form ref="form" :model="form" label-width="110px" size="mini" class="shifts-name">
                  <el-form-item label="班次名称">
                    <el-input v-model="form.time1"/>
                  </el-form-item>
                </el-form>
                <el-form :inline="true" :model="form" class="demo-form-inline">
                  <el-form-item label="周期数">
                    <el-input-number :min="1" :max="10" v-model="num" controls-position="right" @change="handleChange" />
                  </el-form-item>
                  <el-form-item label="周期单位">
                    <el-select v-model="form.time1" placeholder="周">
                      <el-option label="天" value="tian"/>
                      <el-option label="周" value="zhou"/>
                      <el-option label="月" value="yue"/>
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>
              <div class="day-foot">
                <div class="day-foot-top">
                  <el-checkbox v-model="checked">作为新员工默认班次</el-checkbox>
                </div>
                <el-row>
                  <el-button type="primary" size="mini">新增时间段</el-button>
                  <el-button type="primary" size="mini">删除时间段</el-button>
                  <el-button type="primary" size="mini">清除时间段</el-button>
                </el-row>
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
                    prop="Timename"
                    label="时间段名称"/>
                  <el-table-column
                    prop="Intime"
                    label="上班时间"/>
                  <el-table-column
                    prop="Outtime"
                    label="下班时间"
                    show-overflow-tooltip/>
                  <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                      <el-button
                        type="text"
                        @click.native.prevent="deleteRow(scope.$index, tableData)">
                        删除
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <div class="table-title">时间段列表</div>
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
                  label="时间段名称">
                  <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                  label="操作">
                  <template slot-scope="scope">
                    <el-button
                      type ="text"
                      @click.native.prevent="deleteRow(scope.$index, tableData)">修改</el-button>
                    <el-button
                      type="text"
                      @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="人员排班">
        <el-form ref="form" :model="form" label-width="110px" size="mini">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="人员编号">
                <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="人员姓名">
                <el-time-picker v-model="form.date2" type="date" placeholder="请选择" style="width: 100%;"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-button type="info" plain size="mini">查询</el-button>
                <el-button type="info" plain size="mini">全部选择</el-button>
                <el-button type="info" plain size="mini">取消选择</el-button>
                <el-button type="info" plain size="mini" @click="setShift">排班计划</el-button>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
        <el-row class="time-slot">
          <el-col :span="6">
            <div class="grid-content bg-purple-light day">
              <div class="day-top top-title">部门列表</div>
              <div class="day-bot day-list">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"/>
              </div>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple day">
              <div class="day-top top-title">人员列表</div>
              <div class="day-bot day-list">
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
                    label="考勤号">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"/>
                  <el-table-column
                    prop="address"
                    label="部门"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="address"
                    label="班次"
                    show-overflow-tooltip/>
                  <el-table-column
                    prop="address"
                    label="人员编号"
                    show-overflow-tooltip/>
                </el-table>
              </div>
            </div>
          </el-col>
        </el-row>
        <p>选择日期范围，查看人员排班情况或进行临时排班。</p>
        <el-form ref="form" :model="form" label-width="30px" size="mini">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="从">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="到">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-button type="info" plain size="mini">查询</el-button>
                <el-button type="info" plain size="mini">全部选择</el-button>
                <el-button type="info" plain size="mini">取消选择</el-button>
                <el-button type="info" plain size="mini">排班计划123</el-button>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
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
            label="考勤号">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"/>
          <el-table-column
            prop="address"
            label="部门"
            show-overflow-tooltip/>
          <el-table-column
            prop="address"
            label="班次"
            show-overflow-tooltip/>
          <el-table-column
            prop="address"
            label="人员编号"
            show-overflow-tooltip/>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <addshiftDialog ref="addshiftDialog"/>
    <setshiftDialog ref="setshiftDialog"/>
  </div>
</template>
<script>
import addshiftDialog from './components/Dialog/addshift'
import setshiftDialog from './components/Dialog/setshift'
export default {
  components: {
    addshiftDialog,
    setshiftDialog
  },
  data() {
    return {
      form: {
        Timename: '',
        Intime: '',
        Outtime: '',
        BIntime: '',
        EIntime: '',
        BOuttime: '',
        EOuttime: '',
        Latetime: '',
        Leavetime: '',
        WorkDays: '',
        Longtime: '',
        MustIn: '',
        MustOut: '',
        IsFreeTime: '',
        IsOverTime: ''
      },
      value1: '',
      num: 1,
      checked: true,
      tableData: [],
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      multipleSelection: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted: function() {
    this.timelist()
  },
  methods: {
    // 时间段列表
    timelist() {
      this.$store.dispatch('interactive/Time_list').then(response => {
        this.tableData = response.TimeTable
      }).catch(error => {
        console.log(error)
      })
    },
    // 时间段新增
    newlyAdded() {
      this.$store.dispatch('interactive/Add_time', this.form).then(response => {
        this.timelist()
      }).catch(error => {
        console.log(error)
      })
    },
    // 时间段删除
    deleteRow(index, rows) {
      console.log(rows.Timeid)
      this.$store.dispatch('interactive/delete_time', rows.Timeid).then(response => {
        this.timelist()
      }).catch(error => {
        console.log(error)
      })
    },
    // 新增班次
    addShift() {
      this.$refs.addshiftDialog.centerDialogVisible = true
    },
    // 排班计划
    setShift() {
      console.log(123)
      this.$refs.setshiftDialog.centerDialogVisible = true
    },
    onSubmit() {
      console.log('submit!')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleChange(value) {
      console.log(value)
    },
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.time-slot{
  display: flex;
}
.day{
    border:1px solid rgba(0,0,0,0.1);
    border-radius:3px 3px 0px 0px;
    height: 100%;
    .day-top{
      width: 100%;
      height:31px;
      background:rgba(244,244,244,1);
      border-bottom:1px solid rgba(0,0,0,0.1);
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &.top-title{
        text-align: center;
        justify-content: center;
      }
    }
    .day-bot.day-list{
      padding: 0 15px;
      margin: 15px 0;
    }
  }
  .line{
    text-align: center;
  }
  .minute{
    line-height: 28px;
  }
  .day-foot{
    margin: 0 10px;
    border-top: 1px solid #eee;
    .el-form-item{
      margin-bottom: 0;
    }
    .day-foot-top{
      padding: 15px 10px 0;
    }
    .el-row{
      margin: 20px 0;
    }
  }
  .edit-button{
    display: flex;
    padding: 0 30px;
    margin-top: 60px;
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-end;
  }
  .table-title{
    height: 50px;
    display: flex;
    align-items: center;
  }
  .shifts-name{
    max-width: 40%;
  }
</style>
