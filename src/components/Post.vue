<template>
    <div>
        <el-card>
            <div class="post-title">帖子标题:{{postTitle}}</div>
            <div class="post-user">发帖人:{{postUser}}</div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["postTitle", "postUser", "postHot", "postDescription"]
}
</script>

<style scoped>
.post-title {
    float: inline-start;
    width: 200px;
    background: pink;
    padding: 10px;
    font-size: 20px;
}
.post-user {
    float: inline-start;
    width: 100px;
    background: aquamarine;
    padding: 10px;
    font-size: 15px;
}
</style>