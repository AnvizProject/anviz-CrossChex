/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*考勤管理->考勤参数*/
import { getLeaveList, createLeave, updateLeave, delLeave } from '@/api/leaveSetting'
import store from '../../..'
const attendancePara = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 假类列表
    getLeaveList({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        getLeaveList(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 添加假类列表
    createLeave({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        createLeave(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 假类修改
    updateLeave({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        updateLeave(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 假类修改
    delLeave({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        delLeave(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default attendancePara
