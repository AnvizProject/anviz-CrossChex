import request from '@/utils/request'

// *假类设置*

// 所有工种列表
export function getJobList(params) {
  return request({
    url: '/api/work_code/index',
    method: 'get',
    params
  })
}

// 工种新增
export function createJob(data) {
  return request({
    url: '/api/work_code/create',
    method: 'POST',
    data
  })
}

// 工种删除
export function delJob(data) {
  return request({
    url: '/api/work_code/delete',
    method: 'POST',
    data
  })
}

// 工种修改
export function update(data) {
  return request({
    url: 'api/work_code/update',
    method: 'POST',
    data
  })
}
