import request from '@/utils/request'

// 数据管理
export function data_manage(data) {
  return request({
    url: '/api/data_manage/index',
    method: 'post',
    data
  })
}
