import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, getInfo, removeToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress configuration

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (store.state.user.statusCode === 1 && to.path.substring(0, 11) !== '/registered') {
    next({ path: '/registered' })
  } else {
    if (getToken()) {
      if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
      } else {
        if (JSON.stringify(store.state.user.userInfo) === '{}') {
          if (getInfo()) {
            store.state.user.userInfo = JSON.parse(getInfo())
          } else {
            removeToken()
            next({ path: '/' })
          }
        } else {
          next()
        }
        // console.log(getInfo())
        // if (store.getters.roles.length === 0) {
        //   store.dispatch('GetInfo').then(res => { // 拉取用户信息
        //     next()
        //   }).catch((err) => {
        //     store.dispatch('FedLogOut').then(() => {
        //       Message.error(err || 'Verification failed, please login again')
        //       next({ path: '/' })
        //     })
        //   })
        // } else {
        //   next()
        // }
        next()
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
        NProgress.done()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
