// 提供主页接口数据
import request from '@/utils/request'
// 获取品牌
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
// 获取轮播图banner
export const findBanner = () => {
  return request('/home/banner', 'get')
}
