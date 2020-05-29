import request from '@/utils/request'
// 时间段列表
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

// 班次列表
export function shiftlist(params) {
  return request({
    url: '/api/schedule/index',
    method: 'get',
    params
  })
}

// 新增班次
export function addshift(data) {
  return request({
    url: '/api/schedule/create',
    method: 'post',
    data
  })
}

// 班次新增时间段
export function addtime(data) {
  return request({
    url: '/api/schedule/add_time',
    method: 'post',
    data
  })
}

// 班次修改
export function updateshift(data) {
  return request({
    url: '/api/schedule/update',
    method: 'post',
    data
  })
}
// 班次修改
export function delshift(data) {
  return request({
    url: '/api/schedule/delete',
    method: 'post',
    data
  })
}

// 班次删除时间段
export function deltime(data) {
  return request({
    url: '/api/schedule/delete_time',
    method: 'post',
    data
  })
}
// 当前排班记录
export function current_record(params) {
  return request({
    url: '/api/user_shift/index',
    method: 'get',
    params
  })
}

// 排班计划新增
export function addplan(data) {
  return request({
    url: '/api/user_shift/create',
    method: 'post',
    data
  })
}

// 排班计划删除
export function delplan(data) {
  return request({
    url: '/api/user_shift/delete',
    method: 'post',
    data
  })
}
// 用户临时排班详情
export function temporary_shift(params) {
  return request({
    url: '/api/user_temp_shift/index',
    method: 'get',
    params
  })
}
// 临时排班增加
export function tem_shift_add(data) {
  return request({
    url: '/api/user_temp_shift/add',
    method: 'post',
    data
  })
}
// 临时排班删除
export function tem_shift_del(data) {
  return request({
    url: '/api/user_temp_shift/delete',
    method: 'post',
    data
  })
}

// 临时排班新建
export function tem_shift_newset(data) {
  return request({
    url: '/api/user_temp_shift/create',
    method: 'post',
    data
  })
}

// 临时排班撤销
export function tem_shift_cancel(data) {
  return request({
    url: '/api/user_temp_shift/cancel',
    method: 'post',
    data
  })
}
