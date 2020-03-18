/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->考勤状态*/
import { all_groups_list, add_groups_list, update_groups_list, delete_groups_list, status_index } from '@/api/attendanceStatus'
import store from '../../..'
const attendanceStatus = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 所有组列表
    All_groups_list({ commit }, All_groups_list_data) {
      All_groups_list_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        all_groups_list(All_groups_list_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 所有组列表增加
    Add_groups_list({ commit }, Add_groups_list_data) {
      Add_groups_list_data.access_token = store.getters.token
      console.log(Add_groups_list_data)
      return new Promise((resolve, reject) => {
        add_groups_list(Add_groups_list_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 所有组列表修改
    Update_groups_list({ commit }, Update_groups_list_data) {
      Update_groups_list_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        update_groups_list(Update_groups_list_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 所有组列表删除
    Delete_groups_list({ commit }, Delete_groups_list_data) {
      Delete_groups_list_data.access_token = store.getters.token
      console.log(Delete_groups_list_data)
      return new Promise((resolve, reject) => {
        delete_groups_list(Delete_groups_list_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 考勤状态列表
    Status_index({ commit }, Status_index_data) {
      Status_index_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        status_index(Status_index_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default attendanceStatus
