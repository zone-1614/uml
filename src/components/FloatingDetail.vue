<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-avatar :src="user.avatar" :size="100"></el-avatar>
            </el-col>
            <el-col :span="16">
                <el-descriptions :title="user.nickname" :column="1" :size="mini">
                    <el-descriptions-item label="被点赞">{{user.like}}</el-descriptions-item>
                    <el-descriptions-item label="发帖数">{{user.postNumber}}</el-descriptions-item>
                </el-descriptions>
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