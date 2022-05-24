<template>
    <el-row class="comment-row">
        <el-col :span="16" :offset="4">
            <el-card v-animate-css="'fadeInUpBig'">
                <!-- 头像 名字 发布时间 -->
                <el-row type="flex" align="middle">
                    <el-col :span="2">
                        <el-avatar :src="comment.avatar" :size="40"></el-avatar>
                    </el-col>
                    <el-col :span="2" class="left-col">
                        <span class="nickname">{{comment.nickname}}</span>
                    </el-col>
                    <el-col :span="4" :offset="16" class="left-col">
                        <span class="time">发表于{{comment.createTime}}</span>
                    </el-col>
                </el-row>
                <!-- 回复内容 -->
                <el-row>
                    <el-col :span="24" class="commennt-col">
                        {{comment.content}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "PostComment",
    props: ["comment"]
}
</script>

<style scoped>
.el-card {
    border-radius: 20px;
}

.comment-row {
    margin-top: 20px;
}

.left-col {
    text-align: start;
}

.nickname {
    padding-left: 20px;
    font-size: 15px;
    color: #8a8383;
}
.time {
    font-size: 10px;
    color: #8a8383;
}

.commennt-col {
    margin-top: 10px;
    padding-left: 20px;
    text-align: start;
    line-height: 25px;
}
</style>