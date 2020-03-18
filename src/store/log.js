import { getDebug } from '@/utils/auth'
import router from '@/router'

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = 'default') {
  let color = ''
  switch (type) {
    case 'info': color = '#35495E'; break
    case 'debug': color = '#3488ff'; break
    case 'success': color = '#43B883'; break
    case 'warning': color = '#e6a23c'; break
    case 'error': color = '#f56c6c'; break
    default: break
  }
  return color
}

const log = {
  namespaced: true,
  state: {
    showDebugWindow: false,
    showDebugCount: 0,
    showDebugTO: null,
    logContent: [],
    level: getDebug(),
    dtStr: function() {
      var date = new Date()
      var year = date.getFullYear()
      /* 在日期格式中，月份是从0开始的，因此要加0
    	 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
    	 * */
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      // 拼接
      return year.toString() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    },
    showEggCount: 0,
    showEggTO: null
  },
  mutations: {
    showDebugWindow(state) {
      state.showDebugCount++
      if (state.showDebugTO) {
        clearTimeout(state.showDebugTO)
      }

      if (state.showDebugCount === 5) {
        state.showDebugWindow = true
        state.showDebugTO = setTimeout(function() {
          state.showDebugCount = 0
        }, 2000)
      } else {
        state.showDebugTO = setTimeout(function() {
          state.showDebugWindow = false
          state.showDebugCount = 0
        }, 2000)
      }
    },
    closeDebugWindow(state) {
      if (state.showDebugCount >= 5) { return false }
      state.showDebugWindow = false
      state.showDebugCount = 0
    },
    addDebugWindow(state, { type, msg }) {
      if (!msg) { return false }
      if (!state.showDebugWindow) { return false }

      const date = state.dtStr()
      var msgStr = date + '  ' + type + '-->'
      if (typeof msg === 'object') {
        state.logContent.unshift(msgStr)
        state.logContent.unshift(msg)
      } else {
        msgStr += msg
        state.logContent.unshift(msg)
      }
    },
    write(state, { type, msg }) {
      if (state.level <= 0) {
        return false
      }
      if (type === 'info' && state.level > 3) {
        return false
      } else if (type === 'debug' && state.level > 2) {
        return false
      } else if (type === 'warning' && state.level > 2) {
        return false
      } else if (type === 'error' && state.level > 1) {
        return false
      }

      const date = state.dtStr()
      console.log(
        `%c ${type} %c  ${date}`,
        'background:' + typeColor(type) + '; padding: 1px; border-radius:3px; color: #fff;',
        `background:transparent; color: ${typeColor(type)};`
      )

      console.log(msg)
    },
    showEggWindow(state) {
      state.showEggCount++
      if (state.showEggTO) {
        clearTimeout(state.showEggTO)
      }

      if (state.showEggCount >= 5) {
        router.push({ path: '/test' })
        state.showEggTO = setTimeout(function() {
          state.showEggCount = 0
        }, 2000)
      }
    }
  },
  actions: {
    capsule({ state, commit }, data) {

    },
    info({ state, commit }, msg) {
      var type = 'info'
      commit('write', { type: type, msg: msg })
      commit('addDebugWindow', { type: type, msg: msg })
    },
    debug({ commit, state }, msg) {
      var type = 'debug'

      commit('write', { type: type, msg: msg })
      commit('addDebugWindow', { type: type, msg: msg })
    },
    warning({ commit, state }, msg) {
      var type = 'warning'

      commit('write', { type: type, msg: msg })
      commit('addDebugWindow', { type: type, msg: msg })
    },
    error({ state, commit }, msg) {
      var type = 'error'

      commit('write', { type: type, msg: msg })
      commit('addDebugWindow', { type: type, msg: msg })
    }
  }
}

export default log
