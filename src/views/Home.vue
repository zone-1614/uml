<template>
  <div class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in carousels" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <Post postTitle="帖子标题" postUser="发帖人"></Post>
    <Post postTitle="帖子标题" postUser="发帖人"></Post>
    <Post postTitle="帖子标题" postUser="发帖人"></Post>
    <Post postTitle="帖子标题" postUser="发帖人"></Post>
    <Post postTitle="帖子标题" postUser="发帖人"></Post>
  </div>
</template>

<script>
import Post from "../components/Post.vue"
export default {
  name: 'Home',
  components: {
    Post,
  },
  data() {
    return {
      // 轮播图
      carousels: [
        'https://raw.githubusercontent.com/zone-1614/pic/main/img/45ed0be3322b39331e2d705c2bb139eb_5071663937751990709.png',
        'https://raw.githubusercontent.com/zone-1614/pic/main/img/c23891910bc9751d0df1bfeb300dfee4_3930835232933693425.jpg',
        'https://raw.githubusercontent.com/zone-1614/pic/main/img/02d4fa584ba33874c5fe834d07a310bb_5358809731728693638.jpg'
      ]
    }
  }
}
</script>
