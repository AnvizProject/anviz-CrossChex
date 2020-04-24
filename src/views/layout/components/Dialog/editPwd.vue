<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :show-close="showClo"
    append-to-body
    width="50%"
    center>
    <span slot="title" class="dialog-header">
      <el-button size="mini" @click="resetForm('ruleForm')">取 消</el-button>
      <div>修改密码</div>
      <el-button type="primary" size="mini" @click="submitForm('ruleForm')">确 定</el-button>
    </span>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="旧密码" prop="OPPwd">
        <el-input v-model="ruleForm.OPPwd" type="password" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="新密码" prop="NewOPPwd">
        <el-input v-model="ruleForm.NewOPPwd" type="password" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="确认新密码" prop="RepeatNewOPPwd">
        <el-input v-model="ruleForm.RepeatNewOPPwd" type="password" autocomplete="off"/>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { mapState } from 'vuex'
import { removeToken } from '@/utils/auth'
export default {
  data() {
    var OPPwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'))
      } else {
        callback()
      }
    }
    var validateNewOPPwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (this.ruleForm.RepeatNewOPPwd !== '') {
          this.$refs.ruleForm.validateField('RepeatNewOPPwd')
        }
        callback()
      }
    }
    var validateNewOPPwd2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'))
      } else if (value !== this.ruleForm.NewOPPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      showClo: false,
      ruleForm: {
        OPPwd: '',
        NewOPPwd: '',
        RepeatNewOPPwd: ''
      },
      rules: {
        OPPwd: [
          { validator: OPPwd, trigger: 'blur' }
        ],
        NewOPPwd: [
          { validator: validateNewOPPwd, trigger: 'blur' }
        ],
        RepeatNewOPPwd: [
          { validator: validateNewOPPwd2, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      username: state => state.user.userInfo
    })
  },
  methods: {
    submitForm(formName) {
      this.ruleForm.OPName = this.username.OPName
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('EditPwd', this.ruleForm).then(response => {
            this.dialogVisible = false
            this.$message({
              message: '密码修改成功',
              type: 'success'
            })
            removeToken()
            this.$router.push({ name: '/' })
          }).catch(error => {
            this.$message.error('密码修改失败')
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.dialogVisible = false
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
      margin: 0 auto 30px;
    }
  }
</style>
