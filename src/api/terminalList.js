import request from '@/utils/request'

// *终端列表*
export function terminal_list(params) {
  return request({
    url: '/api/finger_client/index',
    method: 'get',
    params
  })
}

