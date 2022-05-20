<template>
    <el-container v-animate-css="'fadeIn'">
        <el-main>
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-carousel indicator-position="outside" trigger="click">
                        <el-carousel-item
                            v-for="item in carousels.length"
                            :key="item"
                        >
                            <router-link :to="`/post/admin/${item}`">
                                <img :src="carousels[item - 1]" />
                            </router-link>
                        </el-carousel-item>
                    </el-carousel>
                    <div v-for="(post, index) in posts" :key="index">
                        <Post :post="post"></Post>
                    </div>
                </el-col>
            </el-row>
            <el-backtop target=".el-main"></el-backtop>
        </el-main>
    </el-container>
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
};
</script>