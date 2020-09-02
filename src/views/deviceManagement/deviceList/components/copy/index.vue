<template>
  <div class="copy">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="50%"
      center>
      <span slot="title" class="dialog-header">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>复制门禁权限</div>
        <el-button size="mini" type="primary" @click="save">确 定</el-button>
      </span>
      <el-form ref="form" :model="form" class="copy-wrap" label-width="150px">
        <el-form-item label="被复制机器的机器号">
          <el-input v-model="form.num" placeholder="请输入机器号">
            <el-button slot="append" @click="onSubmit">复制</el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      form: {
        num: null
      },
      visible: false
    }
  },
  mounted() {
  },
  methods: {
    // 查询权限
    onSubmit() {
      console.log('submit!')
    },
    save() {
      this.centerDialogVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .copy-wrap{
    width: 70%;
    margin: 15px 10%;
    display: flex;
    .el-form-item{
      width: 100%;
      margin: 0;
    }
    .el-input{
      width: 100%;
    }
  }
</style>
