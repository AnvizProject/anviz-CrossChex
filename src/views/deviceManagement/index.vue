<template>
  <div class="app-container devicelist">
    <div class="top">
      <div class="top-item">
        <el-form ref="form" :model="form">
          <el-form-item label="Start Date">
            <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;"/>
          </el-form-item>
          <el-form-item label="End Date">
            <el-date-picker v-model="form.date2" type="date" placeholder="Pick a date" style="width: 100%;"/>
          </el-form-item>
        </el-form>
      </div>
      <div class="top-item">
        <el-button type="primary" @click="Adddevice"><i class="icon-offline el-icon--left icon-size"/>Add</el-button>
        <el-button type="primary"><i class="icon-trashcan el-icon--left icon-size"/>Delete</el-button>
      </div>
    </div>
    <el-table
      ref="filterTable"
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"/>
      <el-table-column
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
        label="日期"
        column-key="date">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"/>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleSee(scope.$index, scope.row)"><i class="icon-biometric el-icon--left icon-size"/>查看</el-button>
          <el-button @click="handleEdit(scope.$index, scope.row)"><i class="icon-modify el-icon--left icon-size"/>编辑</el-button>
          <el-button @click="handleDelete(scope.$index, tableData)"><i class="icon-trashcan el-icon--left icon-size"/>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <section>
      <el-button icon="icon icon-nav-signout icon-size5" @click="list">{{ $t("Sign-Out") }}</el-button>
    </section> -->
    <el-pagination
      :total="total"
      background
      layout="prev, pager, next"
      @current-change="current_change"/>
    <Drawer ref="Drawer"/>
    <addDialog ref="addDialog"/>
    <modifyDialog ref="modifyDialog"/>
    <pre>{{ multipleSelection }}</pre>
  </div>
</template>
<style scoped src="@/styles/deviceList.scss"></style>
<script>
import Drawer from '@/components/drawer'
import addDialog from './components/Dialog/add'
import modifyDialog from './components/Dialog/modify'
export default {
  name: 'DeviceManagement',
  components: {
    Drawer,
    addDialog,
    modifyDialog
  },
  data() {
    return {
      form: {
        date1: '',
        date2: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      total: 100,
      pagesize: 10,
      currentPage: 1
    }
  },
  mounted: function() {
    console.log(this.tableData.length)
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.filterTable.toggleRowSelection(row)
          console.log(rows)
        })
      } else {
        this.$refs.filterTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    handleDelete(index, rows) {
      rows.splice(index, 1)
    },
    handleSee(index, row) {
      this.$refs.Drawer.drawer = true
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage
    },
    // 添加设备
    Adddevice() {
      this.$refs.addDialog.centerDialogVisible = true
    },
    // 修改设备
    handleEdit() {
      this.$refs.modifyDialog.centerDialogVisible = true
    },
    list() {
      this.$store.dispatch('UserList').then(response => {
      }).catch(() => {
        console.log(111)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .devicelist{
    .el-table{
      .el-button{
        padding: 5px;
        border:none;
        background: none;
      }
    }
    .el-pagination{
      text-align: center;
      margin-top: 20px;
    }
  }
</style>
