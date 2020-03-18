<template>
  <div>
    <el-dialog :visible.sync="dialogFormVisible" :append-to-body = "true" title="修改密码">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="新密码" >
          <el-input v-model="form.NewOPPwd"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="确认密码">
          <el-input v-model="form.RepeatNewOPPwd"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { modifyPassword } from '@/api/login'
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        NewOPPwd: '',
        RepeatNewOPPwd: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    save() {
      const user = JSON.parse(localStorage.getItem('user') || '[]')
      const OPName = user.OPName
      const OPPwd = user.OPPwd
      const access_token = this.$store.state.user.token
      return new Promise((resolve, reject) => {
        console.log(this.form)
        modifyPassword({ OPName: OPName, OPPwd: OPPwd, NewOPPwd: this.form.NewOPPwd, RepeatNewOPPwd: this.form.RepeatNewOPPwd, access_token: access_token }).then(response => {
          document.cookie = 'Admin-Token' + '=;expires=' + (new Date(0)).toGMTString()
          this.$router.push({ name: '/' })
          this.dialogFormVisible = true
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>
