<template>
    <div v-animate-css="'fadeIn'">
        <PostContent :title="post.title" :content="post.content" :avatar="post.avatar" :nickname="post.nickname" :time="post.createTime"></PostContent>
    </div>
</template>

<script>
import PostContent from "@/components/postdetail/PostContent.vue"
import api from "@/api/index"
export default {
    name: "PostDetail",
    components: {
        PostContent, 
    },
    created() {
        const id = this.$route.params["postId"];
        api.post.getPostDetailByPostId(id).then((data) => {
            const res = data.data.res;
            this.post = res.post[0];
            this.comments = res.commentsForPost;
            console.log(this.post);
            console.log(this.comments);
        })
        .catch((err) => {
            console.log(err);
        })
    },
    data() {
        return {
            post: {},
            comments: [],
        }
    }
}
</script>

<style scoped>

</style>