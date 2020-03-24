/* eslint-disable no-undef */
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="logo">
      <!-- <span class="icon-number" @click="openside"/> -->
      <span class="icon-crosschex-logo"/>
      <span>CrossChex</span>
    </div>
    <el-menu
      :show-timeout="200"
      :default-active="'/'+$route.path.split('/')[1]"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="horizontal "
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <span class="user-avatar">yaobo</span>
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item >
          <span class="icon icon-modify icon-size" @click="editPassword">{{ $t("Modify-Password") }}</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span class="icon icon-nav-signout icon-size" @click="logout">{{ $t("Sign-Out") }}</span>
        </el-dropdown-item>
        <el-dropdown-item >
          <span class="icon icon-modify icon-size" @click="changeLanguage('en')">{{ $t("English") }}</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span class="icon icon-nav-signout icon-size" @click="changeLanguage('zh')">{{ $t("Chinese") }}</span>
        </el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
    <Dialog ref="Dialog"/>
  </el-scrollbar>
</template>
<script>
import variables from '@/styles/variables.scss'
import { setup } from '@/utils/locales'
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Dialog from '../Dialog/editPwd'
export default {
  components: { SidebarItem, Dialog },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      console.log(this.$router.options.routes)
      return this.$router.options.routes
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    logout() {
      this.$confirm('是否确认要登出', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(response => {
          this.$router.push({ name: 'login' })
        })
        // document.cookie = 'Admin-Token' + '=;expires=' + (new Date(0)).toGMTString()
      }).catch(() => {
      })
    },
    // 左边导航栏开关
    openside() {
      this.$store.commit('leftmenu')
    },
    editPassword() {
      this.$refs.Dialog.dialogFormVisible = true
    },
    // 语言切换
    changeLanguage(lang) {
      this.$i18n.locale = lang
      setup(lang)
      location.reload() // 为了重新实例化vue-router对象，避免一些bug
    }
  }
}
</script>
