import request from '@/utils/request'
// 人员添加
export function adduser(data) {
  return request({
    url: '/api/userinfo/create',
    method: 'post',
    data
  })
}
// 人员列表
export function userlist(data) {
  return request({
    url: '/api/userinfo/search',
    method: 'get',
    params: data
  })
}
// 人员修改
export function useredit(data) {
  return request({
    url: '/api/userinfo/update',
    method: 'post',
    data
  })
}

// 人员删除
export function userdelete(data) {
  return request({
    url: '/api/userinfo/delete',
    method: 'post',
    data
  })
}

// 部门列表
export function deptlist(data) {
  return request({
    url: '/api/dept/index',
    method: 'get',
    params: data
  })
}

