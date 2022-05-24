<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-card>
                this is content;
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "PostContent",
    props: ["title", "content", "avatar"]
}
</script>

<style scoped>
.el-card {
    border-radius: 20px;
}
</style>