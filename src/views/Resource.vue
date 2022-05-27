<template>
    <el-main>
        <el-row>
            <div v-for="post, index in posts" :key="index">
                <Post :post="post"></Post>
            </div>
        </el-row>
    </el-main>
</template>

<script>
import Post from '@/components/Post.vue'
import api from '@/api/index'
export default {
    name: "Resource",
    components: { Post },
    created() {
        api.post.getPosts().then((data) => {
            this.posts = data.data.res;
        });
    },
    data() {
        return {
            posts: []
        }
    },

}
</script>

<style scoped>
</style>