import request from '@/utils/request'

// *系统设置公用接口*

// 基本参数详情
export function base_para_details(params) {
  return request({
    url: '/api/base_para/index',
    method: 'get',
    params
  })
}

