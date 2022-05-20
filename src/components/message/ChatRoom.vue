<template>
<!-- 左边选择用户和右边对话框需要不同的container，通信太麻烦，我就不分组件了 -->
<el-row>
    <el-col :span="6">
        <el-scrollbar class="chatroom">
            <el-container>
                <el-main>
                    <el-row>
                        <el-col span="24" style="background: #123321">
                            <div v-for="u in chatUsers">{{u}}</div>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-scrollbar>
    </el-col>
    <el-col :span="18">
        <el-scrollbar class="chatroom">
            <el-container>
                <el-main>
                    <el-row>
                        <el-col span="24" style="background: #123321">
                            <div v-for="u in chatUsers">{{u}}</div>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-scrollbar>
    </el-col>
</el-row>
</template>

<script>
import ChatWith from "@/components/message/ChatWith.vue";
export default {
    name: "ChatRoom",
    components: {
        ChatWith,
    },
    data() {
        return {
            // 与你聊天的用户列表
            chatUsers: [
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
                "用户1",
                "用户2",
            ],
        };
    },
};
</script>

<style scoped>
.el-card {
    border-radius: 15px;
    margin: 15px;
}
.message {
    margin-bottom: 20px;
}
.chatroom {
    width: 100%;
    height: 80vh;
}
</style>
