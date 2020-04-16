import request from '@/utils/request'

// *假类设置*

// 所有工种列表
export function getHolidayList(params) {
  return request({
    url: '/api/holiday/index',
    method: 'get',
    params
  })
}

// 工种新增
export function createHoliday(data) {
  return request({
    url: '/api/holiday/create',
    method: 'POST',
    data
  })
}

// 工种删除
export function delHoliday(data) {
  return request({
    url: '/api/holiday/delete',
    method: 'POST',
    data
  })
}

// 工种修改
export function update(data) {
  return request({
    url: 'api/holiday/update',
    method: 'POST',
    data
  })
}
