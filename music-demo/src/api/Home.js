// 封装要发起的请求
import request from '@/utils/request.js'

// 封装网络请求方法

// 推荐歌单
export const recommendMusic = params => request({
  url: '/personalized',
  params
})

// 最新音乐
export const newMusic = params => request({
  url: '/personalized/newsong',
  params
})
