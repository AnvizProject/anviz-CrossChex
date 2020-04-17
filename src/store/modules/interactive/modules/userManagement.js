/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { adduser, userlist, useredit, userdetail, deptlist, transfer } from '@/api/user'
import store from '../../..'
const userManagement = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 添加人员
    Adduser({ commit }, AdduserInfo) {
      AdduserInfo.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        adduser(AdduserInfo).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 人员列表
    userList({ commit }, search_value) {
      search_value.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        userlist(search_value).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    // 人员修改
    userEdit({ commit }, userEditInfo) {
      userEditInfo.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        useredit(userEditInfo).then(response => {
          resolve()
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    // // 人员删除
    // userDelete({ commit }, userDeleteInfo) {
    //   // userDeleteInfo.access_token = store.getters.token
    //   // userDeleteInfo.userid
    //   return new Promise((resolve, reject) => {
    //     userdelete({ access_token: store.getters.token, userid: userDeleteInfo, delete_from_device: 1 }).then(response => {
    //       resolve()
    //     }).catch(error => {
    //       console.log(error)
    //       reject(error)
    //     })
    //   })
    // },
    // 人员详情
    userDetail({ commit }, userDetailInfo) {
      // userDeleteInfo.access_token = store.getters.token
      // userDeleteInfo.userid
      return new Promise((resolve, reject) => {
        userdetail({ access_token: store.getters.token, userid: userDetailInfo }).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },

    // 部门列表
    deptList({ commit }) {
      return new Promise((resolve, reject) => {
        deptlist({ access_token: store.getters.token }).then(response => {
          resolve(response)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    // 调动部门
    Transfer({ commit }, transfer_data) {
      transfer_data.access_token = store.getters.token
      return new Promise((resolve, reject) => {
        transfer(transfer_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default userManagement
