<template>
  <div class="main-container-left">
    <el-menu
      :collapse="isCollapse"
      :default-active="index"
      :default-openeds="openeds"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      mode="vertical">
      <template v-if="menuList.length==1">
        <app-link :to="menuList[0].path">
          <el-menu-item :index="menuList[0].path.split('/')[1]">
            <i :class="menuList[0].meta.icon" class="icon"/>
            <item :title="$t(menuList[0].meta.title)" />
          </el-menu-item>
        </app-link>
      </template>
      <!-- <template slot="title">
        <i class="el-icon-location"/>
        <span>{{ $t(parentRputer.meta.title) }}</span>
      </template> -->
      <div v-if="menuList[0].children">
        <div v-for="(v,k) in menuList" :key="k">
          <el-divider content-position="left">{{ $i18n.t(v.meta.title) }}</el-divider>
          <app-link v-for="(v, k) in v.children" :key="k" :to="v.path">
            <!-- <pre>{{ v }}</pre> -->
            <el-tooltip :content="$i18n.t(v.meta.title)" :disabled="!isCollapse" effect="dark" placement="right">
              <el-menu-item :index="v.path.split('/')[2]">
                <!-- <template slot="title"> -->
                <span :class="v.meta.icon" class="icon"/>
                <span v-if="!isCollapse" slot="title">{{ $t(v.meta.title) }}</span>
                <!-- </template> -->
              </el-menu-item>
            </el-tooltip>
          </app-link>
        </div>
      </div>
      <div v-else>
        <app-link v-for="(v, k) in menuList" :key="k" :to="v.path">
          <el-tooltip :content="$i18n.t(v.meta.title)" :disabled="!isCollapse" effect="dark" placement="right">
            <el-menu-item :index="v.path.split('/')[2]">
              <!-- <template slot="title"> -->
              <span :class="v.meta.icon" class="icon"/>
              <span v-if="!isCollapse" slot="title">{{ $t(v.meta.title) }}</span>
              <!-- </template> -->
            </el-menu-item>
          </el-tooltip>
        </app-link>
      </div>
    </el-menu>
  </div>
</template>
<script>
import Item from '../Sidebar/Item'
import AppLink from '../Sidebar/Link'
import { mapGetters } from 'vuex'
export default {
  name: 'Leftmenu',
  components: {
    Item,
    AppLink
  },
  data() {
    return {
      index: this.$route.path.split('/')[this.$route.path.split('/').length - 1],
      openeds: []
    }
  },
  computed: {
    menuList() {
      const route = this.$router.options.routes
      const routeParent = this.$route.path.split('/')[1]
      let menu = []
      route.forEach((v, k) => {
        if (v.children !== undefined) {
          v.children.forEach((val, key) => {
            if (val.children) {
              if (val.name === routeParent) {
                menu.push(val)
              }
            } else {
              if (v.name === routeParent) {
                menu = v.children
              }
            }
          })
        } else {
          return true
        }
      })
      // console.log(menu)
      return menu
    },
    ...mapGetters([
      'isCollapse'
    ])
    // parentRputer() {
    //   const route = this.$router.options.routes
    //   const routeParent = this.$route.path.split('/')[1]
    //   let menu = {}
    //   route.forEach((v, k) => {
    //     if (v.children && v.name === routeParent) {
    //       // menu = v
    //       // console.log(v)
    //       menu = v
    //     }
    //   })
    //   return menu
    // }
  },
  watch: {
    '$route.path': function() {
      this.index = this.$route.path.split('/')[this.$route.path.split('/').length - 1]
    }
  },
  mounted() {
    // 保证左侧导航栏打开
    const routerArr = this.$router.options.routes
    routerArr.forEach((v) => {
      if (v.children && v.path !== '/' && v.children && v.path !== '/deviceManagement1') {
        this.openeds.push(v.path)
      }
    })
    this.openeds.push('1-4-1')
    // console.log(this.openeds)
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
     width: 230px;
    height: calc(100vh - 70px);
  }
</style>
