<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-avatar :src="user.avatar" :size="100"></el-avatar>
            </el-col>
            <el-col :span="16">
                <div class="floating-name">{{ user.nickname }}</div>
                <div class="floating-name">发帖数: {{ user.nickname }}</div>
                <div class="floating-name">被点赞: {{ user.nickname }}</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "FloatingDetail",
    props: ['user']
}
</script>

<style scoped>
.floating-name {
    font-size: 24sp;
    background-color: aqua;
}
</style>