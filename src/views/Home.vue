<template>
    <el-row v-animate-css="'fadeIn'" class="infinite-list" v-infinite-scroll="loadSomePosts">
        <el-col :span="16" :offset="4" >
            <el-carousel indicator-position="outside" trigger="click">
                <el-carousel-item
                    v-for="item in carousels.length"
                    :key="item">
                    <router-link :to="`/post/admin/${item}`">
                        <img :src="carousels[item - 1]" />
                    </router-link>
                </el-carousel-item>
            </el-carousel>
            <Post v-for="(post, index) in posts" class="infinite-list-item" :key="index" :post="post"></Post>
        </el-col>
        <el-backtop target=".el-row"></el-backtop>
    </el-row>
</template>

<script>
import Post from "../components/Post.vue";
import api from "../api/index.js";
export default {
    name: "Home",
    components: {
        Post,
    },
    created() {
        // 请求10个post
        api.post.getPosts()
        .then((data) => {
            //console.log(data);
            for (let i = 0; i < 10; i++) {
                this.posts.push(data.data.res[i]);
            }
        })
        .catch(err => {
            console.log(err);
        });
        // 得到主页的轮播图
        api.getCarousels()
        .then((data) => {
            //console.log(data);
            this.carousels = data.data.res;
        })
        .catch(err => {
            console.log(err);
        });
    },
    data() {
        return {
            // 轮播图
            carousels: [],
            posts: [],
        };
    },
    methods: {
        // 页面加载进来或者滑到最下面加载10个post
        loadSomePosts() {
            api.post.getPosts()
            .then((data) => {
                //console.log(data);
                for (let i = 0; i < 10; i++) {
                    this.posts.push(data.data.res[i]);
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
};
</script>

<style>
.infinite-list {
    overflow: auto;
    width: 100%;
    height: 85vh;
}
</style>