import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const DebugKey = 'HTTP_X_DEBUG'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setDebug(debug) {
  return Cookies.set(DebugKey, debug)
}

export function getDebug() {
  return Cookies.get(DebugKey)
}

export function getInfo() {
  return Cookies.get('UserInfo')
}

export function setInfo(userinfo) {
  return Cookies.set('UserInfo', userinfo)
}
