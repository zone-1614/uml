<template>
    <el-row>
        <!-- 左边的用户列表，选择来进行聊天 -->
        <el-col :span="6">
            <UserList :users="chatUsers" @chatWith="chatWithUser"></UserList>
        </el-col>
        <el-col :span="18">
            <ChatWith :user="chatUsers[chatIndex]"></ChatWith>
        </el-col>
    </el-row>
</template>

<script>
import ChatWith from "@/components/message/ChatWith.vue";
import UserList from "@/components/message/UserList.vue";
import api from "@/api/index";
export default {
    name: "ChatRoom",
    components: {
        ChatWith, UserList
    },
    created() {
        api.user.getChatUsers().then((data) => {
            this.chatUsers = data.data.res;
        })
        .catch((err) => {
            console.log(err);
        })
    },
    data() {
        return {
            chatIndex: 0,
            // 与你聊天的用户列表
            chatUsers: [],
        };
    },
    methods: {
        chatWithUser(idx) {
            console.log(idx);
            this.chatIndex = idx;
        }
    }
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
