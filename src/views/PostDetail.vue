<template>
    <div v-animate-css="'fadeIn'">
        <PostContent :title="post.title" :content="post.content" :avatar="post.avatar"></PostContent>
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
    props: ["post"],
    created() {
        var id = this.$route.params["postId"];
        api.post.getPostDetailByPostId(id).then((data) => {
            console.log(data.data.res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
</script>

<style scoped>

</style>