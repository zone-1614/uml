<template>
    <el-row>
        <!-- 左边的用户列表，选择来进行聊天 -->
        <el-col :span="6">
            <UserList :users="chatUsers" @chatWith="chatWithUser"></UserList>
        </el-col>
        <el-col :span="18">
            <ChatWith :user="chatId"></ChatWith>
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
            // 第一个用户的Id
            chatId: 1,
            // 与你聊天的用户列表
            chatUsers: [
                {
                    nickname: "nihao",
                    userId: 1,
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png"
                },
                {
                    nickname: "wwww",
                    userId: 2,
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png"
                },
                {
                    nickname: "qweqwe",
                    userId: 3,
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png"
                },
                {
                    nickname: "ad aacd",
                    userId: 4,
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png"
                },
                {
                    nickname: "hndd",
                    userId: 5,
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png"
                },
                {
                    nickname: "weqqwe",
                    userId: 6,
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png"
                },
                {
                    nickname: "tyuj",
                    userId: 7,
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png"
                },
            ],
        };
    },
    methods: {
        chatWithUser(chatWithId) {
            this.chatId = chatWithId;
            console.log("chat with " + chatWithId);
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
