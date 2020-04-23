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
// 人员详情
export function userdetail(data) {
  return request({
    url: '/api/userinfo/detail',
    method: 'get',
    params: data
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
// 调动部门
export function transfer(data) {
  return request({
    url: '/api/userinfo/transfer',
    method: 'post',
    data
  })
}
// 人员权限
export function copyAuthority(data) {
  return request({
    url: '/api/userinfo/user_power',
    method: 'get',
    params: data
  })
}
// 人员导入
export function userimport(data) {
  return request({
    url: '/api/userinfo/import',
    method: 'post',
    data
  })
}
// 人员导出
export function userexport(data) {
  return request({
    url: '/api/userinfo/export',
    method: 'post',
    data
  })
}

// 统计报表-> 统计记录
export function checkinout(params) {
  return request({
    url: '/api/checkinout/search',
    method: 'GET',
    params
  })
}
