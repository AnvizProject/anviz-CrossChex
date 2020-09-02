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
      <el-form-item label="标签名称">
        <el-input v-model="form.name" placeholder="请输入标签名称"/>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    labelid: {
      type: Number,
      default: null
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
      dialogtitle: '新增标签',
      form: {
        name: '',
        id: null
      }
    }
  },
  methods: {
    // 部门新增、修改
    submit() {
      if (this.de_data === 1) {
        this.form.cmd = 'create'
        this.$store.dispatch('interactive/Access_Control', this.form).then(response => {
          this.dialogVisible = false
          this.form.name = ''
          this.$parent.Label_list()
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      } else if (this.de_data === 0) {
        this.form.id = this.labelid
        this.form.cmd = 'update'
        console.log(this.form)
        this.$store.dispatch('interactive/Access_Control', this.form).then(response => {
          this.dialogVisible = false
          this.$parent.Label_list()
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
