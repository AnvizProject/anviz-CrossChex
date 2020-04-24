import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/opinfo/login',
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: '/api/opinfo/logout',
    method: 'post',
    data
  })
}

export function modifyPassword(data) {
  console.log(data)
  return request({
    url: '/api/opinfo/update_pwd',
    method: 'post',
    data
  })
}

