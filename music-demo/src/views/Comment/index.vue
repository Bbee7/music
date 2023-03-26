<template>
  <div>
    <van-nav-bar title="评论" :fixed="true" left-arrow @click-left="$router.back()" />
    <div class="main">
      <div>
        <div class="wrap" v-for="(item, index) in commentList" :key="index">
          <div class="user-avatar">
            <img :src="item.user.avatarUrl" alt="" width="20px" height="20px" />
          </div>
          <div class="content_wrap">
            <div class="header_wrap">
              <div class="user-name">
                <p>{{ item.user.nickname }}</p>
                <p>{{ item.timeStr }}</p>
              </div>
              <div class="user-name">{{ item.likedCount }}点赞</div>
            </div>
            <div class="comment-content">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getCommentAPI } from '@/api'
export default {
  data() {
    return {
      commentList: [] // 评论列表
    }
  },
  async created() {
    const res = await getCommentAPI({
      id: this.$route.query.id,
      limit: 20
    })
    console.log(res)
    this.commentList = res.data.comments
  }
}
</script>

<style lang="less" scoped>
/* 用户头像样式 */
.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #ccc;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
}

/* 用户名样式 */
.user-name {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* 评论内容样式 */
.comment-content {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.5;
}
</style>
