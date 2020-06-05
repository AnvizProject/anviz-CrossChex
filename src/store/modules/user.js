/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { login, logout, modifyPassword } from '@/api/login'
import { register } from '@/api/register'
import { getToken, setToken, removeToken, setInfo } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '123',
    userInfo: {},
    statusCode: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_CODE: (state, statusCode) => {
      state.statusCode = statusCode
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const { OPName, OPPwd, check } = userInfo
      return new Promise((resolve, reject) => {
        login({ OPName: OPName.trim(), OPPwd: OPPwd }).then(response => {
          if (check) {
            localStorage.setItem('user', JSON.stringify(userInfo))
          } else {
            localStorage.removeItem('user')
          }
          const data = response
          setToken(data.access_token)
          setInfo(data.opinfo)
          commit('SET_TOKEN', data.access_token)
          commit('SET_INFO', data.opinfo)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout({ access_token: state.token }).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    // 修改密码
    EditPwd({ commit, state }, EditPwd_data) {
      return new Promise((resolve, reject) => {
        modifyPassword(EditPwd_data).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注册
    Register({ commit, state }, Register_data) {
      return new Promise((resolve, reject) => {
        register(Register_data).then(response => {
          commit('SET_CODE', response.error_code)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
