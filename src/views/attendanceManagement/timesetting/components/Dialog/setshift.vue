<template>
  <el-dialog
    :visible.sync="centerDialogVisible"
    title="人员班次设定"
    width="45%"
    center>
    <span>
      <el-row>
        <el-col :span="24">
          <p class="no-scheduling"><el-radio v-model="radio" label="1">不排班</el-radio></p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-divider content-position="left"><el-radio v-model="radio" label="2">正常排班</el-radio></el-divider>
            <div class="normal-scheduling">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="班次名称">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="早班" value="zao"/>
                    <el-option label="中班" value="zhong"/>
                    <el-option label="晚班" value="wan"/>
                  </el-select>
                </el-form-item>
                <el-form-item label="启用日期">
                  <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
                </el-form-item>
                <el-form-item label="结束日期">
                  <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
                </el-form-item>
                <el-form-item class="fun-btn">
                  <el-button type="primary" size="mini" @click="newAdd">新增</el-button>
                  <el-button type="info" size="mini">删除</el-button>
                </el-form-item>
              </el-form>
              <div class="shift-record">
                <p>当前排班记录</p>
                <el-table
                  :data="tableData3"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="班次名称"/>
                  <el-table-column
                    prop="name"
                    label="启用日期"/>
                  <el-table-column
                    prop="address"
                    label="结束日期"/>
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-divider content-position="left"><el-radio v-model="radio" label="2">智能排班</el-radio></el-divider>
            <div class="normal-scheduling">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="班次名称">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="早班" value="zao"/>
                    <el-option label="中班" value="zhong"/>
                    <el-option label="晚班" value="wan"/>
                  </el-select>
                </el-form-item>
                <el-form-item class="fun-button">
                  <el-button type="primary" size="mini" @click="newAdd">新增</el-button>
                  <el-button type="info" size="mini">删除</el-button>
                </el-form-item>
              </el-form>
              <div class="shift-record">
                <p>当前选择的时间段</p>
                <el-table
                  :data="tableData3"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="时段名称"/>
                  <el-table-column
                    prop="name"
                    label="上班时间"/>
                  <el-table-column
                    prop="address"
                    label="下班时间"/>
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" size="mini" @click="centerDialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>
<style lang="scss" scoped>
  .no-scheduling{
    padding-left: 40px;
  }
  .el-divider--horizontal{
    margin-bottom: 0;
  }
  .normal-scheduling{
    padding: 20px;
    border-left:1px solid #DCDFE6;
    border-right:1px solid #DCDFE6;
    border-bottom:1px solid #DCDFE6
  }
  .el-form-item{
    margin-bottom: 10px;
  }
  .fun-btn{
    text-align: right;
  }
  .fun-button{
    margin-top: 110px;
  }
  .shift-record{
    border-top:1px solid #DCDFE6
  }
</style>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      tableData: [{
        Timename: '早班',
        Intime: '6:00',
        Outtime: '13:00'
      }, {
        Timename: '中班',
        Intime: '13:00',
        Outtime: '18:00'
      }, {
        Timename: '晚班',
        Intime: '18:00',
        Outtime: '24:00'
      }],
      tableData2: [{
        week: '星期日'
      }, {
        week: '星期一'
      }, {
        week: '星期二'
      }, {
        week: '星期三'
      }, {
        week: '星期四'
      }, {
        week: '星期五'
      }, {
        week: '星期六'
      }],
      tableData3: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      radio: '2',
      form: {
        region: ''
      },
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    newAdd() {
      console.log(123)
    }
  }
}
</script>
