// import Vue from 'vue'
// import Vuex from 'vuex'
// import app from './modules/app'
// import user from './modules/user'
// import getters from './getters'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     app,
//     user
//   },
//   getters
// })

// export default store

import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import sidebar from './modules/sidebar'
import getters from './getters'
import interactive from './modules/interactive'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    interactive,
    app,
    user,
    sidebar
  },
  getters
})
// console.log(interactive)

