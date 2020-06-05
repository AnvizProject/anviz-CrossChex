/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*终端列表*/
import { leaveList, fakeList, addLeave, updateLeave, delLeave } from '@/api/leaveBusiness'
import store from '../../..'
const leave_List = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 请假列表
    LeaveList({ commit }, LeaveList_data) {
      return new Promise((resolve, reject) => {
        leaveList(LeaveList_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 假类列表
    FakeList({ commit }, FakeList_data) {
      return new Promise((resolve, reject) => {
        fakeList(FakeList_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 请假新增
    AddLeave({ commit }, AddLeave_data) {
      return new Promise((resolve, reject) => {
        addLeave(AddLeave_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 请假修改
    UpdateLeave({ commit }, UpdateLeave_data) {
      return new Promise((resolve, reject) => {
        updateLeave(UpdateLeave_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 请假删除
    DelLeave({ commit }, DelLeave_data) {
      return new Promise((resolve, reject) => {
        delLeave(DelLeave_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default leave_List
