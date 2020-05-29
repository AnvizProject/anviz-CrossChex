<template>
  <div class="device-dialog">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="60%"
      center>
      <div slot="title" class="dialog-header ">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>人员排班</div>
        <el-button size="mini" type="primary" @click="save">确 定</el-button>
      </div>
      <el-row>
        <el-col :span="24">
          <p class="no-scheduling"><el-radio v-model="form.type" label="0">不排班</el-radio></p>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="content">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-divider content-position="left"><el-radio v-model="form.type" label="1">正常排班</el-radio></el-divider>
            <div class="normal-scheduling">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="班次名称">
                  <el-select v-model="form.Schid" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.Schid"
                      :label="item.Schname"
                      :value="item.Schid"/>
                  </el-select>
                </el-form-item>
                <el-form-item label="启用日期">
                  <el-date-picker v-model="form.BeginDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
                </el-form-item>
                <el-form-item label="结束日期">
                  <el-date-picker v-model="form.EndDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
                </el-form-item>
                <el-form-item class="fun-btn">
                  <el-button type="primary" size="mini" @click="newAdd">新增</el-button>
                </el-form-item>
              </el-form>
              <div class="shift-record">
                <p>当前排班记录</p>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="Schname"
                    label="班次名称"/>
                  <el-table-column
                    prop="BeginDate"
                    label="启用日期"/>
                  <el-table-column
                    prop="EndDate"
                    label="结束日期"/>
                  <el-table-column label="操作" width="50px">
                    <template slot-scope="scope">
                      <div class="operating">
                        <el-button type="text" class="icon icon-recycle" @click="handleDelete(scope.$index, scope.row)"/>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-divider content-position="left"><el-radio v-model="form.type" label="2">智能排班</el-radio></el-divider>
            <div class="normal-scheduling">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="时段名称">
                  <el-select v-model="form.Timeid" placeholder="请选择">
                    <el-option
                      v-for="item in Period_list"
                      :key="item.Timeid"
                      :label="item.Timename"
                      :value="item.Timeid"/>
                  </el-select>
                </el-form-item>
                <el-form-item class="fun-btn">
                  <el-button type="primary" size="mini" @click="newAdd">新增</el-button>
                </el-form-item>
              </el-form>
              <div class="shift-record">
                <p>当前选择的时间段</p>
                <el-table
                  :data="period"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="Timename"
                    label="时段名称"/>
                  <el-table-column
                    prop="Intime"
                    label="上班时间"/>
                  <el-table-column
                    prop="Outtime"
                    label="下班时间"/>
                  <el-table-column label="操作" width="50px">
                    <template slot-scope="scope">
                      <div class="operating">
                        <el-button type="text" size="mini" class="icon icon-recycle" @click="handleDelete(scope.$index, scope.row)"/>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    userids: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      options: [],
      Period_list: [],
      value: '',
      tableData: [],
      period: [],
      form: {
        Timeid: null,
        type: '1',
        Schid: null,
        BeginDate: null,
        EndDate: null
      },
      multipleSelection: []
    }
  },
  mounted() {
    this.timelist()
    this.Periodlist()
  },
  methods: {
    // 表格数据
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 排班设置
    newAdd() {
      this.form.userids = this.userids.join(',')
      this.$store.dispatch('interactive/Addplan', this.form).then(response => {
        this.$message({
          message: '新增成功',
          type: 'success'
        })
        this.Current_record()
      }).catch(error => {
        console.log(error)
      })
    },
    // 排班计划删除
    handleDelete(index, row) {
      this.$store.dispatch('interactive/Delplan', { type: this.form.type, userid: this.userids[0], BeginDate: row.BeginDate, EndDate: row.EndDate, Schid: row.Schid, Timeid: row.Timeid }).then(response => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.Current_record()
      }).catch(error => {
        console.log(error)
      })
    },
    // 班次列表
    timelist() {
      this.$store.dispatch('interactive/Shiftlist').then(response => {
        this.options = response.Schedule
      }).catch(error => {
        console.log(error)
      })
    },
    // 时段列表
    Periodlist() {
      this.$store.dispatch('interactive/Time_list').then(response => {
        this.Period_list = response.TimeTable
      }).catch(error => {
        console.log(error)
      })
    },
    // 当前排班记录和当前选择的时间段
    Current_record() {
      this.$store.dispatch('interactive/Current_record', { userid: this.userids[0] }).then(response => {
        this.tableData = response.UserShift
        this.period = response.UserAutoClass
      }).catch(error => {
        console.log(error)
      })
    },
    // 保存
    save() {
      this.$store.dispatch('interactive/userEdit', { userid: this.userids[0], ClassFlag: this.form.type }).then(response => {
        this.centerDialogVisible = false
        this.$message({
          message: '排班设置成功',
          type: 'success'
        })
        this.$parent.people_list()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .device-dialog .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-row{
    margin-left:0px !important;
    margin-right: 0px !important;
    background: #fff;
  }
  .content{
    display: flex;
    padding-bottom: 10px;
  }
  .no-scheduling{
    padding-left: 50px;
    padding-top: 10px;
  }
  .el-divider--horizontal{
    margin-bottom: 0;
  }
  .normal-scheduling{
    padding: 15px;
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
    .operating{
      text-align: center;
    }
    p{
      margin-bottom: 10px;
    }
    .icon{
      font-size: 24px;
      &.icon-recycle{
        color:#D0021B;
      }
    }
  }
</style>
