/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  timeList,
  addTime,
  deleteTime,
  updateTime,
  shiftlist,
  addshift,
  updateshift,
  delshift,
  deltime,
  current_record,
  addplan, delplan,
  temporary_shift,
  tem_shift_add,
  tem_shift_del,
  tem_shift_newset,
  tem_shift_cancel
} from '@/api/workforce'
import store from '../../..'
const workforce = {
  state: {
  },
  mutations: {

  },
  actions: {
    // 时间段列表
    Time_list({ commit, state }) {
      return new Promise((resolve, reject) => {
        timeList().then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 新增时间段
    Add_time({ commit }, addtimedata) {
      console.log(addtimedata)
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
        deleteTime({ Timeid: Timeid }).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 时间段修改
    updateTime({ commit }, data) {
      return new Promise((resolve, reject) => {
        updateTime(data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 班次列表
    Shiftlist({ commit }, Shiftlist_data) {
      return new Promise((resolve, reject) => {
        shiftlist(Shiftlist_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 新增班次
    Addshift({ commit }, Addshift_data) {
      return new Promise((resolve, reject) => {
        addshift(Addshift_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 班次修改
    Updateshift({ commit }, Updateshift_data) {
      return new Promise((resolve, reject) => {
        updateshift(Updateshift_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 班次修改
    Delshift({ commit }, Delshift_data) {
      return new Promise((resolve, reject) => {
        delshift(Delshift_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 班次删除时间段
    Deltime({ commit }, Deltime_data) {
      return new Promise((resolve, reject) => {
        deltime(Deltime_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 当前排班记录
    Current_record({ commit }, current_record_data) {
      return new Promise((resolve, reject) => {
        current_record(current_record_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 排班记录新增
    Addplan({ commit }, Addplan_data) {
      return new Promise((resolve, reject) => {
        addplan(Addplan_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 排班记录删除
    Delplan({ commit }, Delplan_data) {
      return new Promise((resolve, reject) => {
        delplan(Delplan_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 用户临时排班详情
    Temporary_shift({ commit }, Temporary_shift_data) {
      return new Promise((resolve, reject) => {
        temporary_shift(Temporary_shift_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 用户临时排班新增
    Tem_shift_add({ commit }, Tem_shift_add_data) {
      return new Promise((resolve, reject) => {
        tem_shift_add(Tem_shift_add_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 用户临时排班删除时间段
    Tem_shift_del({ commit }, Tem_shift_del_data) {
      return new Promise((resolve, reject) => {
        tem_shift_del(Tem_shift_del_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 用户临时排班新建
    Tem_shift_newset({ commit }, Tem_shift_newset_data) {
      return new Promise((resolve, reject) => {
        tem_shift_newset(Tem_shift_newset_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 撤销临时排班
    Tem_shift_cancel({ commit }, Tem_shift_cancel_data) {
      return new Promise((resolve, reject) => {
        tem_shift_cancel(Tem_shift_cancel_data).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default workforce

