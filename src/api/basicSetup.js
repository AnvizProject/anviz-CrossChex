import request from '@/utils/request'

// 系统设置->*基本设置*

// 添加字段
export function add_fields(data) {
  return request({
    url: '/api/base_para/add_custom_field',
    method: 'post',
    data
  })
}

// 基本参数详情
export function base_para_details(params) {
  return request({
    url: '/api/base_para/index',
    method: 'get',
    params
  })
}

// 字段删除
export function delete_fields(data) {
  return request({
    url: '/api/base_para/delete_custom_field',
    method: 'post',
    data
  })
}

// 通讯参数
export function communication(data) {
  return request({
    url: '/api/base_para/communication',
    method: 'post',
    data
  })
}

// 定时下载记录
export function timing_download(data) {
  return request({
    url: '/api/base_para/timing_download',
    method: 'post',
    data
  })
}

// 考勤参数修改
export function para_update(data) {
  return request({
    url: '/api/base_para/update',
    method: 'post',
    data
  })
}
