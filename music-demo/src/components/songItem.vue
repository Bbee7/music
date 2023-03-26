<template>
  <van-cell :title="name" :label="author" center @click="$router.push({ path: '/comment', query: { id: id } })">
    <!--@click="$router.push({ path: '/comment', query: { id: id } })"-->
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="play-circle-o" class="search-icon" @touchstart="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String, // 歌名
    author: String, // 作者
    id: Number // 歌曲 id
  },
  methods: {
    playFn() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search-icon {
  font-size: 23px;
  line-height: inherit;
}
</style>
