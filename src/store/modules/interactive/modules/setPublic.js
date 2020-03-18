/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->公用*/
import { base_para_details } from '@/api/setPublic'
import store from '../../..'
const setPublic = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 基本参数详情
    Base_para_details({ commit }, base_data) {
      base_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        base_para_details(base_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default setPublic
