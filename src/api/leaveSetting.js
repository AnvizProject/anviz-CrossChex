import request from '@/utils/request'

// *假类设置*

// 所有组列表
export function getLeaveList(params) {
  return request({
    url: '/api/leave_class/index',
    method: 'get',
    params
  })
}

export function createLeave(data) {
  return request({
    url: '/api/leave_class/create',
    method: 'post',
    data
  })
}

export function updateLeave(data) {
  return request({
    url: '/api/leave_class/update',
    method: 'post',
    data
  })
}

export function delLeave(data) {
  return request({
    url: '/api/leave_class/delete',
    method: 'post',
    data
  })
}
