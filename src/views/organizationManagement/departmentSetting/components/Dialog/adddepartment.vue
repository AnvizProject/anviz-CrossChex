<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :show-close="showClo"
    width="50%"
    center>
    <span slot="title" class="dialog-header">
      <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
      <div>{{ dialogtitle }}</div>
      <el-button type="primary" size="mini" @click="submit">确 定</el-button>
    </span>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="部门名称">
        <div style="display: flex">
          <span><selectTree :options = "dept" :node-key="nodeKey" :deptid="form.SupDeptid" multiple @DeptRow="getDeptRow"/></span>
          <span style="width: 100%"><el-input v-model="form.DeptName" type="text" size="small"/></span>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import selectTree from '@/components/selectInput/selectTree'
export default {
  components: { selectTree },
  props: {
    de_data: {
      type: Number,
      default: null
    },
    dept: {
      type: Array,
      default: () => {}
    },
    Deptid: {
      type: Number,
      default: null
    },
    rowData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dialogVisible: false,
      showClo: false,
      dialogtitle: '新增部门',
      form: {
        DeptName: '',
        SupDeptid: 1
      },
      deptRow: {}, // tree选中数据
      // defaultProps: {
      //   children: 'SubDept',
      //   label: 'DeptName'
      // },
      nodeKey: 'Deptid',
      tempID: ''
    }
  },
  watch: {
    Deptid(val) {
      this.tempID = val
      this.form.SupDeptid = val
    },
    rowData(val) {
      this.deptRow = val
    },
    dialogVisible(val) {
      if (val === false) {
        this.form.SupDeptid = -1
      } else {
        this.form.SupDeptid = this.tempID
      }
    }
  },
  methods: {
    // 部门新增、修改
    submit() {
      if (this.de_data === 1) {
        this.$store.dispatch('interactive/Depart_create', this.form).then(response => {
          this.dialogVisible = false
          this.$emit('addRow', { row: this.deptRow, addRow: response.dept })
          this.form.DeptName = ''
        }).catch(error => {
          console.log(error)
        })
      } else if (this.de_data === 0) {
        this.form.Deptid = this.form.SupDeptid
        this.$store.dispatch('interactive/Depart_update', this.form).then(response => {
          this.dialogVisible = false
          this.$emit('edit', this.form)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    getDeptRow(dept) {
      this.form.SupDeptid = dept.id
      this.deptRow = dept.row
    }
  }
}
</script>
<style lang="scss" scoped>
  .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-form{
    margin: 50px 0;
    .el-form-item{
      width: 60%;
      margin: 0 auto;
    }
  }
</style>
