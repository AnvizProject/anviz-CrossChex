import request from '@/utils/request'

// 系统设置->*考勤参数*

// 考勤参数修改
export function para_update(data) {
  return request({
    url: '/api/base_para/update',
    method: 'post',
    data
  })
}
// 考勤统计项目
export function stat_items(params) {
  return request({
    url: '/api/base_para/stat_items',
    method: 'get',
    params
  })
}
// 考勤统计项目修改
export function update_stat_items(data) {
  return request({
    url: '/api/base_para/update_stat_items',
    method: 'post',
    data
  })
}
