<template>
  <div class="shift">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="50%"
      center>
      <span slot="title" class="dialog-header">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>复制权限</div>
        <el-button size="mini" type="primary" @click="save">确 定</el-button>
      </span>
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="被复制人员的考勤号">
          <el-input v-model="form.num" size="mini" placeholder="请填写"/>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <authority ref="authority" :group_list = "group_list"/>
  </div>
</template>
<script>
import authority from './authority'
export default {
  components: { authority },
  props: {
    group_list: {
      type: Array,
      default: () => {}
    }
  },
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
      this.$store.dispatch('interactive/CopyAuthority', { userid: this.form.num }).then(response => {
        console.log(response)
        this.$refs.authority.centerDialogVisible = true
        this.$refs.authority.disabled = true
        response.UserPower.forEach((v, k) => {
          this.$refs.authority.defaultKey.push(v.ClientNumber)
        })
      }).catch(error => {
        console.log(error)
      })
    },
    save() {
      this.centerDialogVisible = false
      this.$confirm('确定要复制选择人员的功能传限吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('copy_authority', this.form.num)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-form{
    width: 60%;
    margin: 15px 10%;
  }
</style>
