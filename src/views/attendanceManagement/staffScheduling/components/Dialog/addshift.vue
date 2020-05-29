<template>
  <el-dialog
    :visible.sync="centerDialogVisible"
    :show-close="showClo"
    title="时间段设置"
    width="45%"
    center
    class="addtime">
    <span slot="title" class="dialog-header">
      <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
      <div>增加班次时间段</div>
      <el-button size="mini" type="primary" @click="save">确 定</el-button>
    </span>
    <el-row :gutter="15">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <p>选择要增加的时间段</p>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            border
            highlight-current-row>
            <el-table-column label="选择" width="65">
              <template slot-scope="scope">
                <el-radio :label="scope.row.Timeid" v-model="radio" @change.native="getCurrentRow(scope.row)">&nbsp;</el-radio>
              </template>
            </el-table-column>
            <el-table-column
              label="时间段名称">
              <template slot-scope="scope">{{ scope.row.Timename }}</template>
            </el-table-column>
            <el-table-column
              prop="Intime"
              label="上班时间"/>
            <el-table-column
              prop="Outtime"
              label="下班时间"
              show-overflow-tooltip/>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <p class="date-list">
            <span>选择增加该时间段的日期</span>
            <span>
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            </span>
          </p>
          <el-checkbox-group v-model="checkeddate" @change="handleCheckedChange">
            <el-checkbox v-for="(v,k) in datelist" :label="v.WorkDate" :key="k">
              <span>{{ v.WorkDate.substring(5,10) }}</span>
              <span v-if="v.week==0">星期日</span>
              <span v-if="v.week==1">星期一</span>
              <span v-if="v.week==2">星期二</span>
              <span v-if="v.week==3">星期三</span>
              <span v-if="v.week==4">星期四</span>
              <span v-if="v.week==5">星期五</span>
              <span v-if="v.week==6">星期六</span>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
export default {
  props: {
    datelist: {
      type: Array,
      default: function() {
        return {}
      }
    },
    addshift_data: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      radio: null,
      showClo: false,
      checkAll: false,
      checkeddate: [],
      isIndeterminate: true,
      centerDialogVisible: false,
      tableData: [],
      multipleSelection: [],
      temp_json: [],
      BeginDay: []
    }
  },
  mounted() {
    this.period()
  },
  methods: {
    // 时间段列表
    period() {
      this.$store.dispatch('interactive/Time_list').then(response => {
        this.tableData = response.TimeTable
        this.radio = response.TimeTable[0].Timeid
        this.multipleSelection.Timeid = response.TimeTable[0].Timeid
      }).catch(error => {
        console.log(error)
      })
    },
    // 时间段列表单选
    getCurrentRow(row) {
      this.multipleSelection = row
    },
    // 日期全选
    handleCheckAllChange(val) {
      if (val) {
        this.datelist.forEach((v, k) => {
          this.checkeddate.push(v.WorkDate)
        })
      } else {
        this.checkeddate = []
      }

      this.isIndeterminate = false
      this.BeginDay = this.checkeddate
    },
    // 日期单个选择
    handleCheckedChange(value) {
      this.BeginDay = value
      const checkedCount = value.length
      this.checkAll = checkedCount === this.datelist.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.datelist.length
    },
    save() {
      this.BeginDay.forEach((item, v) => {
        this.temp_json.push({ WorkDate: item, Timeid: this.multipleSelection.Timeid })
      })
      this.addshift_data.temp_json = JSON.stringify(this.temp_json)
      this.$store.dispatch('interactive/Tem_shift_add', (this.addshift_data)).then(response => {
        this.$message({
          message: '临时排班成功',
          type: 'success'
        })
        this.centerDialogVisible = false
        this.$parent.date()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .date-list{
    display: flex;
    justify-content: space-between;
  }
</style>
<style lang="scss">
    .addtime{
      .el-table .cell{
        text-align: center;
      }
      .el-radio__label{
        padding-left: 0;
      }
      .el-radio__inner{
        border-radius: 0%;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        &::after{
          content: "\2713";
          width: auto;
          height: auto;
          color:#fff;
          background-color: transparent;
        }
      }
    }
</style>
