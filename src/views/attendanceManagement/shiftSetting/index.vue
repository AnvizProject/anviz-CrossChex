<template >
  <div class="workforce main-content pd15">
    <el-row :gutter="24">
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
