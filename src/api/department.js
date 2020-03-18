import request from '@/utils/request'

// 系统设置->*部门管理*

// 部门列表
export function depart_list(params) {
  return request({
    url: '/api/dept/index',
    method: 'get',
    params
  })
}
// 部门新增
export function depart_create(data) {
  return request({
    url: '/api/dept/create',
    method: 'post',
    data
  })
}
// 部门修改
export function depart_update(data) {
  return request({
    url: '/api/dept/update',
    method: 'post',
    data
  })
}
// 部门删除
export function depart_delete(data) {
  return request({
    url: '/api/dept/delete',
    method: 'post',
    data
  })
}
