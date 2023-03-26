<template>
  <div>
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
      <p class="title">推荐歌单</p>
      <van-row gutter="10">
        <van-col span="8" v-for="obj in recommendMusicList" :key="obj.id">
          <van-image width="100%" height="3rem" fit="cover" :src="obj.picUrl" />
          <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>

      <p class="title">最新音乐</p>
      <SongItem v-for="obj in newMusicList" :key="obj.id" :name="obj.name" :author="obj.song.artists[0].name"
        :id="obj.id">
      </SongItem>
    </van-pull-refresh>
  </div>
</template>

<script>
import { recommendMusicAPI, newMusicAPI } from '@/api'
import SongItem from '@/components/songItem.vue'

export default {
  components: {
    SongItem
  },
  data() {
    return {
      recommendMusicList: [], // 推荐歌单
      newMusicList: [], // 最新音乐

      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 6,
      // 是否正在加载下一页数据，若果 loading 为 true，则不会反复触发 load 事件
      // 每当下一页数据请求回来之后，要把 loading 从 true 改为 false
      loading: true,
      // 所有数据是否加载完毕，如果没有更多数据了，一定要把 finished 改为 true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  methods: {
    async getMusic(isRefresh) {
      const res = await recommendMusicAPI({
        limit: this.limit,
        page: this.page
      })
      const newMusic = await newMusicAPI({ limit: 10 })
      // console.log(newMusic)
      if (isRefresh) {
        // 下拉刷新
        this.isLoading = false
        // this.newMusicList = [...newMusic.data.result, ...this.newMusicList]
      }
      this.recommendMusicList = res.data.result
      this.newMusicList = newMusic.data.result
    },
    // 下拉刷新的处理函数
    onRefresh() {
      // console.log('触发了下拉刷新')
      // 1. 页码值 + 1
      this.page++
      // 2. 重新请求接口获取数据
      this.getMusic(true)
    }
  },
  created() {
    this.getMusic()
  }
}
</script>

<style lang="less" scoped>
// @cell-font-size ='24px'

/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical;
  /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2;
  /** 显示的行数 **/
  overflow: hidden;
  /** 隐藏超出的内容 **/
}

.search-icon {
  font-size: 23px;
  line-height: inherit;
}
</style>
