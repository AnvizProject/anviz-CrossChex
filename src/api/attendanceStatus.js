import request from '@/utils/request'

// *考勤状态*

// 所有组列表
export function all_groups_list(params) {
  return request({
    url: '/api/device_group/index',
    method: 'get',
    params
  })
}
// 所有组列表增加
export function add_groups_list(data) {
  return request({
    url: '/api/device_group/create',
    method: 'post',
    data
  })
}
// 所有组列表修改
export function update_groups_list(data) {
  return request({
    url: '/api/device_group/update',
    method: 'post',
    data
  })
}
// 所有组列表删除
export function delete_groups_list(data) {
  return request({
    url: '/api/device_group/delete',
    method: 'post',
    data
  })
}
// 考勤状态列表
export function status_index(params) {
  return request({
    url: '/api/status/index',
    method: 'get',
    params
  })
}
