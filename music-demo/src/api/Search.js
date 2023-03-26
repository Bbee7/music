// 封装要发起的请求
import request from '@/utils/request.js'

// 封装网络请求方法

// 热搜关键字
export const hotSearch = params => request({
  url: '/search/hot',
  params
})

// 搜索
export const search = params => request({
  url: '/cloudsearch',
  params
})
