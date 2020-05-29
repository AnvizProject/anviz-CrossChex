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
      <el-button size="mini" type="primary">确 定</el-button>
    </span>
    <el-row :gutter="15">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <p>选择要增加的时间段</p>
          <el-table
            ref="multipleTable"
            :data="tableData"
            :header-cell-class-name="cellClass"
            tooltip-effect="dark"
            style="width: 100%"
            border
            @row-click="handleRowClick"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="60"
              style="text-align:center"/>
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
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  props: {
    cycle_num: {
      type: Number,
      default: 1
    },
    unit: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      showClo: false,
      checkAll: true,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      centerDialogVisible: true,
      tableData: [],
      multipleSelection: []
    }
  },
  mounted() {
    this.timelist()
    this.handleCheckAllChange(true)
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
    // 时间段列表单选
    handleSelectionChange(val) {
      if (val.length > 1) {
        this.$refs.multipleTable.clearSelection()
        this.$refs.multipleTable.toggleRowSelection(val.pop())
      } else {
        this.multipleTable = val.pop()
      }
    },
    // 点击表格行选中
    handleRowClick(row, coulmn, event) {
      this.$refs.multipleTable.toggleRowSelection(row)
    },
    // 表格单选设置
    cellClass(row) {
      if (row.columnIndex === 0) {
        return 'disabledCheck'
      }
    },
    // 日期选择
    handleCheckAllChange(val) {
      console.log(val)
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
      console.log(this.checkedCities)
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
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
      /* 去掉全选按钮 */
      .el-table .disabledCheck .cell .el-checkbox__inner{
          display: none !important;
      }

      .el-table .disabledCheck .cell::before{
          content: '选择';
          text-align: center;
          line-height: 37px;
      }
      .el-table .cell{
        text-align: center;
      }
    }
</style>
