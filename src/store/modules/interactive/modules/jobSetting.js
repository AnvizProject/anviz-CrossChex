/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->考勤参数*/
import { getJobList, createJob, delJob, update } from '@/api/jobSetting'
import store from '../../..'
const attendancePara = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 工种列表
    getJobList({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        getJobList(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 工种新增
    createJob({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        createJob(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 工种删除
    delJob({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        delJob(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 工种修改
    update({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        update(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default attendancePara
