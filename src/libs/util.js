import store from '@/store'

const util = {}

util.import = require('./util.import')

/**
 * @description 获取url参数
 */
util.getUrlKey = function() {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return false
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function(titleText) {
  const processTitle = store.state.information.model || 'Secy365'

  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

export default util
