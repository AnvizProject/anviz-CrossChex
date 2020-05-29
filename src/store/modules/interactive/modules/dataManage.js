/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*数据管理*/
import { data_manage } from '@/api/dataManage'
import store from '../../..'
const dataManage = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 基本参数详情
    Data_manage({ commit }, Data_manage_data) {
      Data_manage_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        data_manage(Data_manage_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default dataManage
