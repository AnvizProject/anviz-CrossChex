import request from '@/utils/request'

export function forget_check(data) {
  return request({
    url: '/api/check_log/forget',
    method: 'post',
    data
  })
}

