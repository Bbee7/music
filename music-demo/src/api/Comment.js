// 封装要发起的请求
import request from '@/utils/request.js'

// 封装网络请求方法

// 歌曲评论
export const getComment = params => request({
  url: '/comment/music',
  params
})
