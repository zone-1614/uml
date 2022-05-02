<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="4">
                    <el-popover placement="top-start" width="350" trigger="hover">
                        <FloatingDetail :user='post.user'/>
                        <el-avatar slot="reference" :src="post.user.avatar" :size="50"></el-avatar>
                        <div slot="reference">{{ post.user.nickname }}</div>
                    </el-popover>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import api from "@/api"
export default {
    name: "PostDetail",
    created() {
        var params = this.$route.params;
        this.post = api.getPostDetailByPostId(params.id)
    },
    data() {
        return {
            post: {},
        }
    }

}
</script>

<style scoped>

</style>