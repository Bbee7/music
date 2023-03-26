<template>
  <div>
    <!-- 搜索框 -->
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" shape="round" />

    <!-- 热门搜索标题 -->
    <div class="search_wrap" v-if="searchValue === ''">
      <p class="hot_title">热门搜索</p>

      <!-- 热门搜索关键字 -->
      <!-- 搜索框为空时显示热搜关键字 -->
      <ul class="hot_name_wrap">
        <li class="hot_item" v-for="(item, index) in hotSearchList" :key="index" @click="btn(item.first)">
          {{ item.first }}
        </li>
      </ul>
    </div>

    <!-- 搜索结果 -->
    <!-- 搜索框为空时显示热搜关键字,否则显示搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 关键字 -->
      <p class="hot_title">最佳匹配</p>
      <SongItem v-for="obj in resultList" :key="obj.id" :name="obj.name" :author="obj.ar[0].name" :id="obj.id">
      </SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchAPI } from '@/api'
import SongItem from '@/components/songItem.vue'
export default {
  components: {
    SongItem
  },
  data() {
    return {
      searchValue: '',
      hotSearchList: [], // 热搜关键词
      searchList: [], // 搜索列表
      resultList: [], // 搜索结果
      timer: null // 用于保存定时器
    }
  },
  async created() {
    const hotSearch = await hotSearchAPI()
    // console.log(hotSearch.data.result.hots)
    this.hotSearchList = hotSearch.data.result.hots
  },
  methods: {
    btn(str) {
      this.searchValue = str // 点击关键字，将关键字赋给搜索框并显示
    }
  },
  watch: {
    async searchValue() {
      if (this.searchValue !== '') { // 搜索框不为空时才执行
        // 搜索框里的值改变，立刻执行
        // console.log(this.searchValue)
        const searchRes = await searchAPI({
          type: 1,
          keywords: this.searchValue
        })
        // console.log(searchRes.data.result.songs)
        this.resultList = searchRes.data.result.songs
      }
    }
  }
  // 节流：间隔 n 秒，执行一次
  // 防抖：n 秒内，最后执行一次，（函数在 n 秒内，再次执行，“重新计时”）

  // // 防抖：n 秒内，最后执行一次，（函数在 n 秒内，再次执行，“重新计时”）
  // watch: {
  //   async searchValue() {
  //     clearTimeout(this.timer)

  //     if (this.searchValue !== '') { // 搜索框不为空时才执行
  //       this.timer = setTimeout(() => {
  //         // 搜索框里的值改变，立刻执行
  //         // console.log(this.searchValue)
  //         const searchRes = await searchAPI({
  //           type: 1,
  //           keywords: this.searchValue
  //         })
  //         // console.log(searchRes.data.result.songs)
  //         this.resultList = searchRes.data.result.songs
  //       }, 500)
  //     }
  //   }
  // }

}
</script>

<style lang="less" scoped>
/deep/.van-field__control {
  font-size: 14px;
}

/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-left: 0.213333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

// 播放图标样式
.search-icon {
  font-size: 23px;
  line-height: inherit;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
