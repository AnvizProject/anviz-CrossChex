/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->考勤参数*/
import { getHolidayList, createHoliday, update, delHoliday } from '@/api/holiday'
import store from '../../..'
const attendancePara = {
  name: 'holiday',
  state: {
  },
  mutations: {

  },
  actions: {
    // 节日列表
    getHolidayList({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        getHolidayList(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 节日新增
    createHoliday({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        createHoliday(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 节日删除
    delHoliday({ commit }, data) {
      data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        delHoliday(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 节日修改
    updateHoliday({ commit }, data) {
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
