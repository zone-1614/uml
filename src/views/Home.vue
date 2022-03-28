<template>
  <div class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in carousels" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
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
        'https://gitee.com/zone-1614/my-picgo/raw/master/45ed0be3322b39331e2d705c2bb139eb_5071663937751990709.png',
        'https://gitee.com/zone-1614/my-picgo/raw/master/8073efd5b1dce091871dee8083a46df1_6380545215134914187.jpg',
        'https://gitee.com/zone-1614/my-picgo/raw/master/c23891910bc9751d0df1bfeb300dfee4_3930835232933693425.jpg'
      ]
    }
  }
}
</script>
