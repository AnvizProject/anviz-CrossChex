/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { timeList, addTime, deleteTime } from '@/api/workforce'
import store from '../../..'
const workforce = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 时间段列表
    Time_list({ commit }) {
      return new Promise((resolve, reject) => {
        timeList({ access_token: store.getters.token }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 新增时间段
    Add_time({ commit }, addtimedata) {
      console.log(addtimedata)
      addtimedata.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        addTime(addtimedata).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 时间段删除
    delete_time({ commit }, Timeid) {
      return new Promise((resolve, reject) => {
        deleteTime({ access_token: store.getters.token, Timeid: Timeid }).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default workforce

