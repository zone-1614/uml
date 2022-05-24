<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-card v-animate-css="'fadeInDownBig'">
                <!-- 头像和标题  最后面有关注按钮 -->
                <el-row type="flex" align="middle">
                    <!-- 鼠标悬浮头像 -->
                    <el-col :span="2">
                        <el-popover placement="bottom-start" width="350" trigger="hover" :open-delay="400">
                            <FloatingDetail :nickname="post.nickname" :avatar="post.avatar" :like="post.like" :postNumber="post.postNumber"></FloatingDetail>
                            <el-avatar slot="reference" :src="post.avatar" :size="40"></el-avatar>
                        </el-popover>
                    </el-col>
                    <el-col :span="10" class="title">
                        <b>{{post.title}}</b>
                    </el-col>
                    <el-col :span="2" :offset="10">
                        <el-button type="primary" plain size="mini">
                            关注ta
                        </el-button>
                    </el-col>
                </el-row>
                <!-- 用户名和发表时间 -->
                <el-row>
                    <el-col :span="2" class="left-col">
                        <span class="nickname">{{post.nickname}}</span>
                    </el-col>
                    <el-col :span="5" class="left-col">
                        <span class="time">发表于 {{post.createTime}}</span>
                    </el-col>
                </el-row>
                <!-- 帖子内容 -->
                <el-row>
                    <el-col :span="24" class="content-col">
                        {{post.content}}
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row class="bottom-util">
                    <!-- 帖子分割线下面的“点赞” “收藏” ”分享“ -->
                    <el-col :span="2">
                        <el-button icon="el-icon-thumb" size="mini" circle></el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button v-if="!like" icon="el-icon-star-off" size="mini" circle @click="toggleLike"></el-button>
                        <el-button v-else icon="el-icon-star-on" size="mini" circle @click="toggleLike"></el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button icon="el-icon-share" size="mini" circle></el-button>
                    </el-col>
                    <!-- 参与讨论按钮，点击后切换为“取消”和“发送”两个按钮 -->
                    <el-col :span="2" :offset="16" v-if="!input">
                        <el-button type="primary" plain size="mini" @click="showInput" id="reply">
                            参与讨论
                        </el-button>
                    </el-col>
                    <el-col :span="4" :offset="14" v-else>
                        <el-button type="primary" plain size="mini" @click="cancelInput" id="cancel">
                            取消
                        </el-button>
                        <el-button type="primary" plain size="mini" @click="sendReply">
                            发送
                        </el-button>
                    </el-col>
                </el-row>
                <!-- 点击参与讨论之后出现的输入框 -->
                <el-row v-if="input" class="reply-input">
                    <el-input v-model="replyContent" placeholder="请输入内容"></el-input>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import FloatingDetail from '../FloatingDetail.vue';
export default {
    name: "PostContent",
    props: ["post"],
    data() {
        return {
            like: false,
            input: false,
            replyContent: ""
        };
    },
    methods: {
        toggleLike() {
            this.like = !this.like;
        },
        showInput() {
            this.input = true;
            document.getElementById("reply").blur(); // 使用dom失去焦点
        },
        cancelInput() {
            this.input = false;
            this.replyContent = "";
            document.getElementById("cancel").blur(); // 使用dom失去焦点
        },
        sendReply() {
            this.input = false;
            if (this.$store.state.isLogin) {
                this.$emit("addComment", this.replyContent);
            } else {
                this.$message.warning("请先登录");
            }
            this.replyContent = "";
        }
    },
    components: { FloatingDetail }
}
</script>

<style scoped>
.el-card {
    border-radius: 20px;
}
.title {
    text-align: start;
}

.left-col {
    text-align: start;
}

.nickname {
    padding-left: 20px;
    font-size: 10px;
    color: #8a8383;
}
.time {
    font-size: 10px;
    color: #8a8383;
}
.content-col {
    margin-top: 10px;
    padding-left: 20px;
    text-align: start;
    line-height: 25px;
}

.bottom-util {
    font-size: 15px;
    color: #8a8383;
}
.reply-input {
    margin-top: 20px;
}
</style>