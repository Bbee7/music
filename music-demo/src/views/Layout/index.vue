<template>
  <div>
    <van-nav-bar :title="activeTitle" :fixed="true" />

    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title // 导航标题：拿到当前路由所在信息对象里 meta 里的 title
    }
  },
  watch: {
    $route() {
      // 直接侦听组件对象身上的任意属性
      // 路由改变时
      this.activeTitle = this.$route.meta.title
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
