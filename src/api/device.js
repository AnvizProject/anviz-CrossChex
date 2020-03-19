import request from '@/utils/request'

// 设备管理

// 设备新增
export function device_create(data) {
  return request({
    url: '/api/finger_client/create',
    method: 'post',
    data
  })
}
// 设备修改
export function device_update(data) {
  return request({
    url: '/api/finger_client/update',
    method: 'post',
    data
  })
}
// 设备删除
export function device_delete(data) {
  return request({
    url: '/api/finger_client/delete',
    method: 'post',
    data
  })
}
