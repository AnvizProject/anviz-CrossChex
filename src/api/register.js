import request from '@/utils/request'

export function register(data) {
  return request({
    url: '/api/base_para/register',
    method: 'post',
    data
  })
}

