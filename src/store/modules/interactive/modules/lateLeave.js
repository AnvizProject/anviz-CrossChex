/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*忘记考勤*/
import { lateLeave } from '@/api/lateLeave'
import store from '../../..'
const Late_Leave = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 基本参数详情
    Late_Leave({ commit }, late_leave_data) {
      return new Promise((resolve, reject) => {
        lateLeave(late_leave_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default Late_Leave
