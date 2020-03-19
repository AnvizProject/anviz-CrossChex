/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*设备管理*/
import { device_create, device_update, device_delete } from '@/api/device'
import store from '../../..'
const device = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 设备新增
    Device_create({ commit }, Device_create_data) {
      Device_create_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        device_create(Device_create_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 设备新增
    Device_update({ commit }, Device_update_data) {
      Device_update_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        device_update(Device_update_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 设备删除
    Device_delete({ commit }, Device_delete_data) {
      Device_delete_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        device_delete(Device_delete_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default device
