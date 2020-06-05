import request from '@/utils/request'
// *公出请假*

// 请假列表
export function leaveList(data) {
  return request({
    url: '/api/user_leave/search',
    method: 'post',
    data
  })
}

// 假类列表
export function fakeList(params) {
  return request({
    url: '/api/leave_class/index',
    method: 'get',
    params
  })
}

// 新增请假
export function addLeave(data) {
  return request({
    url: '/api/user_leave/create',
    method: 'post',
    data
  })
}

// 请假修改
export function updateLeave(data) {
  return request({
    url: '/api/user_leave/update',
    method: 'post',
    data
  })
}

// 请假删除
export function delLeave(data) {
  return request({
    url: '/api/user_leave/delete',
    method: 'post',
    data
  })
}