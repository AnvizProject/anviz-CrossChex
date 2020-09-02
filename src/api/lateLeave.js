import request from '@/utils/request'
// *迟到早退设置*

// 迟到早退设置
export function lateLeave(data) {
  return request({
    url: '/api/check_log/late_early',
    method: 'post',
    data
  })
}
