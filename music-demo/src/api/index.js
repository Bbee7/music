// 统一的出口

import { recommendMusic, newMusic } from '@/api/Home.js'
import { hotSearch, search } from '@/api/Search'
import { getSongById, getLyricById } from '@/api/Play'
import { getComment } from '@/api/Comment'

// 推荐歌单
export const recommendMusicAPI = recommendMusic
// 最新歌曲
export const newMusicAPI = newMusic
// 热搜关键词
export const hotSearchAPI = hotSearch
// 搜索
export const searchAPI = search
// 歌曲详情
export const getSongByIdAPI = getSongById
// 歌词
export const getLyricByIdAPI = getLyricById
// 歌曲评论
export const getCommentAPI = getComment
