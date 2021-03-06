import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import i18n from '@/utils/locales'
import '@/icons' // icon
import '@/permission' // permission control
import '@/assets/font/font.css'
// WebSocket封装方法
import * as socketApi from './utils/socket'
/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.socketApi = socketApi
const startVue = function() {
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
  })
}

const start = async() => {
  await store.dispatch('Register', { cmd: 'check_register' }).then(response => {
  })
}
start().then(() => {
  startVue()
})
