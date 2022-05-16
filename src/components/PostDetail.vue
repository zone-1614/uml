<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="4">
                    <el-avatar :src="user.avatar" :size="100"></el-avatar>
                </el-col>
                <el-col :span="20">
                    {{post.title}}
                    {{user.nickname}}
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
        api.post.getPostDetailByPostId(params.id)
        .then((data) => {
            this.post = data.data.res;
            this.user = {
                nickname: 'll',
                avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502204637.png"
            }
            console.log(this.post)
        })
    },
    data() {
        return {
            post: {},
            user: {
                nickname: '',
                avatar: ''
            }
        }
    }

}
</script>

<style scoped>

</style>