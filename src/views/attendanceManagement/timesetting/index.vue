<template >
  <div class="workforce main-content">
    <el-container>
      <el-header>
        <div class="con-item">
          <div class="header-item">
            <el-button type="primary" size="mini" @click="addtime">增加</el-button>
            <!-- <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'warning':'info'" size="mini">修改</el-button> -->
            <!-- <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'danger':'info'" size="mini" @click="delList">删除</el-button> -->
          </div>
        </div>
      </el-header>
      <el-main>
        <el-row class="time-slot">
          <el-col :span="24">
            <div class="grid-content bg-purple-light">
              <div class="table-title mg15-bot">时间段列表</div>
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
                    <el-button type="text" size="mini" class="icon icon-edit" @click="handleEdit(scope.$index, scope.row)"/>
                    <el-button type="text" size="mini" class="icon icon-recycle" @click="deleteRow(scope.$index, scope.row)"/>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <addtimeDialog ref="addtimeDialog" :row = "row" @timelist="timelist"/>
  </div>
</template>
<script>
import addtimeDialog from './components/Dialog/addtime'
export default {
  components: {
    addtimeDialog
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      row: {}
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
    // 时间段删除
    deleteRow(index, rows) {
      console.log(rows.Timeid)
      this.$store.dispatch('interactive/delete_time', rows.Timeid).then(response => {
        this.timelist()
      }).catch(() => {
        console.log(0)
      })
    },
    // 新增时间段
    addtime() {
      this.$refs.addtimeDialog.centerDialogVisible = true
      this.$refs.addtimeDialog.action = 'add'
    },
    onSubmit() {
      console.log('submit!')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    handleChange(value) {
      console.log(value)
    },
    handleNodeClick(data) {
      console.log(data)
    },
    handleEdit(index, row) {
      this.$refs.addtimeDialog.centerDialogVisible = true
      this.$refs.addtimeDialog.action = 'edit'
      this.row = row
    }
  }
}
</script>

