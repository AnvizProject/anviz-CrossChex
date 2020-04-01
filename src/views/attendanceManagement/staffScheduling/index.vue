<template >
  <div class="workforce main-content pd15">
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
    <el-row :gutter="10" class="time-slot">
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
    <p class="mg15-up-down">选择日期范围，查看人员排班情况或进行临时排班。</p>
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
      }).catch(() => {
      })
    },
    // 时间段新增
    newlyAdded() {
      this.$store.dispatch('interactive/Add_time', this.form).then(response => {
        this.timelist()
      }).catch(() => {
        console.log(0)
      })
    },
    // 时间段删除
    deleteRow(index, rows) {
      console.log(rows.Timeid)
      this.$store.dispatch('interactive/delete_time', rows.Timeid).then(response => {
        this.timelist()
      }).catch(() => {
        console.log(0)
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
