import request from '@/utils/request'
// **门禁管理**

// 标签管理
export function access_control(data) {
  return request({
    url: '/api/access_time/tag',
    method: 'post',
    data
  })
}

// 门禁时间段列表
export function access_time(params) {
  return request({
    url: '/api/access_time/index',
    method: 'get',
    params
  })
}
// 门禁时间段新增
export function access_add(data) {
  return request({
    url: '/api/access_time/create',
    method: 'post',
    data
  })
}
// 门禁时间段修改
export function access_update(data) {
  return request({
    url: '/api/access_time/update',
    method: 'post',
    data
  })
}

// 门禁组列表
export function access_group(params) {
  return request({
    url: '/api/access_group/index',
    method: 'get',
    params
  })
}

// 门禁组新增
export function access_group_add(data) {
  return request({
    url: '/api/access_group/create',
    method: 'post',
    data
  })
}
// 门禁组修改
export function access_group_update(data) {
  return request({
    url: '/api/access_group/update',
    method: 'post',
    data
  })
}
