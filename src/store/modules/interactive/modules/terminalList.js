/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*终端列表*/
import { terminal_list } from '@/api/terminalList'
import store from '../../..'
const terminalList = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 基本参数详情
    Terminal_list({ commit }, Terminal_list_data) {
      Terminal_list_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        terminal_list(Terminal_list_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default terminalList
