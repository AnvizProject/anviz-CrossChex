<template>
  <div class="login-container">
    <div class="login-form">
      <div class="logo">
        <img src="@/assets/logo/CrossChex.png" class="logo-img">
      </div>
      <div class="box">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" auto-complete="on" label-position="left">
          <el-form-item prop="OPName" class="group has-icon">
            <span class="icon icon-mine"/>
            <el-input v-model="loginForm.OPName" name="username" type="text" auto-complete="on" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="OPPwd" class="group has-icon has-showpass">
            <span class="icon icon-password"/>
            <el-input
              :type="pwdType"
              v-model="loginForm.OPPwd"
              name="password"
              auto-complete="on"
              placeholder="密码"
              @keyup.enter.native="handleLogin" />
          </el-form-item>
          <el-form-item>
            <el-checkbox :checked="loginForm.check" label="记住登录状态" name="type" @change="remember(loginForm.check)" />
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
              登&nbsp;&nbsp;录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped src="@/styles/login.scss"></style>
<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        OPName: 'Admin',
        OPPwd: '123456',
        check: false
      },
      loginRules: {
        OPName: [{ required: true, trigger: 'blur', validator: validateUsername }],
        OPPwd: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  beforeCreate: function() {
    document.getElementsByTagName('body')[0].className = 'login'
  },
  created() {
    if (localStorage.getItem('user')) {
      this.loginForm = JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    remember(check) {
      this.loginForm.check = !check
    }
  }
}
</script>
