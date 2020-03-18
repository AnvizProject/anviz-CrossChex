/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /*系统设置->公用*/
import { depart_list, depart_create, depart_update, depart_delete } from '@/api/department'
import store from '../../..'
const department = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 部门列表
    Depart_list({ commit }, Depart_list_data) {
      Depart_list_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        depart_list(Depart_list_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 部门新增
    Depart_create({ commit }, Depart_create_data) {
      Depart_create_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        depart_create(Depart_create_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 部门修改
    Depart_update({ commit }, Depart_update_data) {
      Depart_update_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        depart_update(Depart_update_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 部门删除
    Depart_delete({ commit }, Depart_delete_data) {
      Depart_delete_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        depart_delete(Depart_delete_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default department
