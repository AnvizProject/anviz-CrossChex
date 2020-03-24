<template >
  <div style="padding:30px;">
    <el-alert :closable="false" title="Add User">
      <router-view />
    </el-alert>
    <el-button icon="icon icon-nav-signout icon-size5" @click="logout">{{ $t("Sign-Out") }}</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('UserList').then(response => {
        this.$router.push({ name: 'login' })
      }).catch(() => {
        console.log(111)
      })
    }
  }
}
</script>
