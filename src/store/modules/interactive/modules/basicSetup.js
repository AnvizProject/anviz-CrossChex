/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->基本设置*/
import { add_fields, delete_fields, communication, timing_download } from '@/api/basicSetup'
import store from '../../..'
const basicSetup = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 添加字段
    Add_fields({ commit }, Add_fields_data) {
      return new Promise((resolve, reject) => {
        add_fields({ access_token: store.getters.token, field_name: Add_fields_data }).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 删除字段
    Delete_fields({ commit }, delete_fields_data) {
      delete_fields_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        delete_fields(delete_fields_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 通讯参数
    Communication({ commit }, Communication_data) {
      Communication_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        communication(Communication_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 定时下载
    Timing_download({ commit }, Timing_download_data) {
      Timing_download_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        timing_download(Communication_data).then(response => {
          console.log(response)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default basicSetup
