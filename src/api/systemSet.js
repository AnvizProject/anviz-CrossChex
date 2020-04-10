import request from '@/utils/request'

// *系统设置*

// 数据库设置
// 获取数据库配置
export function get_db(data) {
  return request({
    url: '/api/base_para/register',
    method: 'post',
    data
  })
}

