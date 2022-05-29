<template>
    <div>
        <PostContent :post="post" @addComment="addComment"></PostContent>
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
    },
    methods: {
        addComment(replyContent) {
            console.log(replyContent);
            var comment = {
                content: replyContent,
                nickname: this.$store.state.user.nickname,
                avatar: this.$store.state.user.avatar,
                createTime: "2022-05-29"
            }
            this.comments.push(comment);
        }
    }
}
</script>

<style scoped>

</style>