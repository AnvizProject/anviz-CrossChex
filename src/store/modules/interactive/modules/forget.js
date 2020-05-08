/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->公用*/
import { forget_check } from '@/api/forget'
import store from '../../..'
const forget = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 基本参数详情
    Forget_check({ commit }, forget_check_data) {
      forget_check_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        forget_check(forget_check_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default forget
