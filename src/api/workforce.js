import request from '@/utils/request'

export function timeList(params) {
  return request({
    url: '/api/time_table/index',
    method: 'get',
    params
  })
}

// 时间段新增
export function addTime(data) {
  return request({
    url: '/api/time_table/create',
    method: 'post',
    data
  })
}

// 时间段删除
export function deleteTime(data) {
  return request({
    url: '/api/time_table/delete',
    method: 'post',
    data
  })
}

// 时间段修改
export function updateTime(data) {
  return request({
    url: '/api/time_table/update',
    method: 'post',
    data
  })
}
