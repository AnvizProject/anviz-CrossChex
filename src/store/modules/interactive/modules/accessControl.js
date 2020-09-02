/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*门禁管理*/
import { access_control, access_time, access_add, access_update, access_group, access_group_add, access_group_update } from '@/api/accessControl'
import store from '../../..'
const accessControl = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 标签管理
    Access_Control({ commit }, access_control_data) {
      return new Promise((resolve, reject) => {
        access_control(access_control_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 门禁时间段列表
    Access_Time({ commit }, access_time_data) {
      return new Promise((resolve, reject) => {
        access_time(access_time_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 门禁时间段新增
    Access_Add({ commit }, access_add_data) {
      return new Promise((resolve, reject) => {
        access_add(access_add_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 门禁时间段修改
    Access_Update({ commit }, access_update_data) {
      return new Promise((resolve, reject) => {
        access_update(access_update_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 门禁组列表
    Access_Group({ commit }, access_group_data) {
      return new Promise((resolve, reject) => {
        access_group(access_group_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 门禁组新增
    Access_Group_Add({ commit }, group_add_data) {
      return new Promise((resolve, reject) => {
        access_group_add(group_add_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 门禁组修改
    Access_Group_Update({ commit }, group_update_data) {
      return new Promise((resolve, reject) => {
        access_group_update(group_update_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default accessControl
