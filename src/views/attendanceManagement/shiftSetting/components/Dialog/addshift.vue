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
            <el-checkbox v-for="(v,k) in day_num" v-if="addshift_data.Units===0" :label="k" :key="k">第{{ v+1 }}日</el-checkbox>
            <el-checkbox v-for="(v,k) in week_list" v-if="addshift_data.Units===1" :label="k" :key="k">{{ v }}</el-checkbox>
            <el-checkbox v-for="(v,k) in month_list" v-if="addshift_data.Units===2" :label="k" :key="k">{{ v }}日</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
export default {
  props: {
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
      week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      centerDialogVisible: false,
      tableData: [],
      multipleSelection: [],
      sch_time_json: [],
      BeginDay: []
    }
  },
  computed: {
    day_num() {
      const day_num = []
      for (let i = 0; i < this.addshift_data.Cycles; i++) {
        day_num.push(i)
      }
      return day_num
    },
    week_list() {
      const week_list = []
      for (let i = 1; i <= this.addshift_data.Cycles; i++) {
        for (let j = 0; j < this.week.length; j++) {
          week_list.push(this.week[j])
        }
      }
      return week_list
    },
    month_list() {
      const month_list = []
      for (let i = 1; i <= this.addshift_data.Cycles; i++) {
        for (let j = 0; j < this.month.length; j++) {
          month_list.push(j + 1)
        }
      }
      return month_list
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
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 时间段列表单选
    getCurrentRow(row) {
      this.multipleSelection = row
    },
    // 日期选中
    handleCheckAllChange(val) {
      console.log(val)
      if (this.addshift_data.Units === 0) {
        this.checkeddate = val ? this.day_num : []
        console.log(this.day_num)
      } else if (this.addshift_data.Units === 1) {
        if (val) {
          this.week_list.forEach((v, k) => {
            this.checkeddate.push(k)
          })
        } else {
          this.checkeddate = []
        }

        console.log(this.week_list)
      } else if (this.addshift_data.Units === 2) {
        if (val) {
          this.month_list.forEach((v, k) => {
            this.checkeddate.push(k)
          })
        } else {
          this.checkeddate = []
        }
      }
      this.isIndeterminate = false
      this.BeginDay = this.checkeddate
    },
    // 日期显示
    handleCheckedChange(value) {
      console.log(value)
      this.BeginDay = value
      const checkedCount = value.length
      if (this.addshift_data.Units === 0) {
        this.checkAll = checkedCount === this.day_num.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.day_num.length
      } else if (this.addshift_data.Units === 1) {
        this.checkAll = checkedCount === this.week_list.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.week_list.length
      } else if (this.addshift_data.Units === 2) {
        this.checkAll = checkedCount === this.month_list.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.month_list.length
      }
      console.log(this.checkAll)
      console.log(this.isIndeterminate)
    },
    save() {
      console.log(this.BeginDay)
      this.BeginDay.forEach((item, v) => {
        this.sch_time_json.push({ BeginDay: item, Timeid: this.multipleSelection.Timeid })
      })
      this.addshift_data.sch_time_json = JSON.stringify(this.sch_time_json)
      console.log(this.addshift_data)
      this.$store.dispatch('interactive/Addtime', (this.addshift_data)).then(response => {
        this.centerDialogVisible = false
        this.$parent.timelist()
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
