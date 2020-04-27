<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :show-close="showClo"
    width="50%"
    center>
    <span slot="title" class="dialog-header">
      <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
      <div>{{ dialogtitle }}</div>
      <el-button type="primary" siae="mini" @click="submit">确 定</el-button>
    </span>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="部门名称">
        <el-input v-model="form.DeptName"/>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    SupDeptid: {
      type: Number,
      default: null
    },
    row_data: {
      type: Object,
      default: function() {
        return {}
      }
    },
    de_data: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      dialogVisible: false,
      showClo: false,
      dialogtitle: '新增部门',
      form: {
        DeptName: '',
        SupDeptid: ''
      }
    }
  },
  methods: {
    // 部门新增、修改
    submit() {
      this.form.SupDeptid = this.SupDeptid
      if (this.de_data === 1) {
        this.$store.dispatch('interactive/Depart_create', this.form).then(response => {
          this.dialogVisible = false
          this.row_data.children.push({ label: this.form.DeptName, children: [], SupDeptid: response.dept.Deptid })
          this.form.DeptName = ''
        }).catch(error => {
          console.log(error)
        })
      } else if (this.de_data === 0) {
        this.form.Deptid = this.SupDeptid
        this.$store.dispatch('interactive/Depart_update', this.form).then(response => {
          this.dialogVisible = false
          this.$emit('form', this.form)
        }).catch(error => {
          console.log(error)
        })
      }
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
