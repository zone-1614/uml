<template>
    <el-row>
        <!-- 左边的用户列表，选择来进行聊天 -->
        <el-col :span="6">
            <UserList :users="chatUsers"></UserList>
        </el-col>
        <el-col :span="18">
            <ChatWith :user="chatId"></ChatWith>
        </el-col>
    </el-row>
</template>

<script>
import ChatWith from "@/components/message/ChatWith.vue";
import UserList from "@/components/message/UserList.vue";
export default {
    name: "ChatRoom",
    components: {
        ChatWith, UserList
    },
    data() {
        return {
            // 第一个用户的Id
            chatId: 1,
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

</style>
