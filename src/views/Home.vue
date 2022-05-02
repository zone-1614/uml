<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-carousel indicator-position="outside" trigger="click">
            <el-carousel-item v-for="item in carousels.length" :key="item">
              <router-link :to="`/post/admin/${item}`">
                <img :src="carousels[item - 1]" />
              </router-link>
            </el-carousel-item>
          </el-carousel>
          <div v-for="post, index in posts" :key="index">
            <Post :post="post"></Post>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Post from "../components/Post.vue"
import api from "../api/index.js"
export default {
  name: 'Home',
  components: {
    Post,
  },
  created() {
    api.getPosts().then(data => {
      this.posts = data.data;
    })
    api.getCarousels().then(data => {
      this.carousels = data.data;
    })
  },
  data() {
    return {
      // 轮播图
      carousels: [],
      posts: []
    }
  }
}
</script>