<template>
    <div>
        <PostContent :post="post"></PostContent>
        <PostComment v-for="(comment, key) in comments" :key="key" :comment="comment"></PostComment>
    </div>
</template>

<script>
import PostContent from "@/components/postdetail/PostContent.vue"
import PostComment from "@/components/postdetail/PostComment.vue"
import api from "@/api/index"
export default {
    name: "PostDetail",
    components: {
        PostContent, PostComment
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