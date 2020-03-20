<template>
  <el-dialog
    :visible.sync="centerDialogVisible"
    title="增加班次时间段"
    width="45%"
    center>
    <span>
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <p>选择要增加的时间段</p>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              border
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55"/>
              <el-table-column
                label="时间段名称"
                width="120">
                <template slot-scope="scope">{{ scope.row.Timename }}</template>
              </el-table-column>
              <el-table-column
                prop="Intime"
                label="上班时间"
                width="120"/>
              <el-table-column
                prop="Outtime"
                label="下班时间"
                show-overflow-tooltip/>
            </el-table>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <p>选择要增加该时间段的日期</p>
            <el-table
              ref="multipleTable2"
              :data="tableData2"
              tooltip-effect="dark"
              style="width: 100%"
              border
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55"/>
              <el-table-column
                prop="week"
                label="单位/日期"
                show-overflow-tooltip/>
            </el-table>
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
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
