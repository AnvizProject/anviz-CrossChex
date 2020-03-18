<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :show-close="showClo"
    width="50%"
    center>
    <span slot="title" class="dialog-header">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <div>{{ dialogtitle }}</div>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="组名称">
        <el-input v-model="form.devicegroupname" placeholder="请输入组名称"/>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    devicegroupid: {
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
      dialogtitle: '新增组名',
      form: {
        devicegroupname: '',
        devicegroupid: null
      }
    }
  },
  methods: {
    // 部门新增、修改
    submit() {
      if (this.de_data === 1) {
        this.$store.dispatch('interactive/Add_groups_list', this.form).then(response => {
          this.dialogVisible = false
          this.form.devicegroupname = ''
          this.$parent.All_groups_list()
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      } else if (this.de_data === 0) {
        this.form.devicegroupid = this.devicegroupid
        console.log(this.form)
        this.$store.dispatch('interactive/Update_groups_list', this.form).then(response => {
          this.dialogVisible = false
          this.$parent.All_groups_list()
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
    .el-button{
      padding: 6px 10px;
    }
  }
  .el-form{
    margin: 50px 0;
    .el-form-item{
      width: 60%;
      margin: 0 auto;
    }
  }
</style>
