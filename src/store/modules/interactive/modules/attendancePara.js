/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->考勤参数*/
import { para_update, stat_items, update_stat_items } from '@/api/attendancePara'
import store from '../../..'
const attendancePara = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 考勤参数修改
    Attendance_para({ commit }, AttendancePara_data) {
      AttendancePara_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        para_update(AttendancePara_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 考勤统计项目
    Stat_items({ commit }, Stat_items_data) {
      Stat_items_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        stat_items(Stat_items_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 考勤统计项目
    Update_stat_items({ commit }, Update_stat_items_data) {
      Update_stat_items_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        update_stat_items(Update_stat_items_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default attendancePara
