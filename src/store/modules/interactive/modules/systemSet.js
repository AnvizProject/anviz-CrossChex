/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*获取数据库配置*/
import { get_db } from '@/api/systemSet'
import store from '../../..'
const systemSet = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 终端列表
    Get_db({ commit }, get_db_data) {
      get_db_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        get_db(get_db_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default systemSet
