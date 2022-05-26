<template>
    <el-main v-animate-css="'fadeInDown'">
        <el-row :gutter="30">
            <el-col :span="16" :offset="4">
                <el-tabs tab-position="left" >
                    <el-tab-pane label="回复我的">
                        <ReplyMe :messages="messages"></ReplyMe>
                    </el-tab-pane>
                    <el-tab-pane label="系统通知">
                        <SystemNotice :notices="notices"></SystemNotice>
                    </el-tab-pane>
                    <el-tab-pane label="我的消息" lazy>
                        <ChatRoom></ChatRoom>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import ReplyMe from "@/components/message/ReplyMe.vue"
import SystemNotice from "@/components/message/SystemNotice.vue"
import ChatRoom from "@/components/message/ChatRoom.vue"

export default {
    name: "Message",
    components: {
        ReplyMe, SystemNotice, ChatRoom
    },
    data() {
        return {
            messages: [
                {
                    content: '芜湖起飞',
                    time: '2022/4/5  18:32',
                    username: '猴子'
                },
                {
                    content: '真的假的',
                    time: '2022/4/5  18:12',
                    username: '用户名'
                },
                {
                    content: '我不信',
                    time: '2022/4/5  16:32',
                    username: '隔壁的'
                }
            ],
            notices: [
                {
                    content: "测试系统消息",
                    time: "2022/4/5  18:32"
                },
                {
                    content: "你好，欢迎使用",
                    time: "2022/5/20  18:32"
                },
                {
                    content: "明天放假",
                    time: "2022/5/20  18:32"
                },
                {
                    content: "明天实验课",
                    time: "2022/5/20  18:32"
                },
                {
                    content: "一条系统消息",
                    time: "2022/5/20  18:32"
                }
            ]
        }
    },
    methods:{
        onClick:(e)=>{
            console.log(e);
            // this.$refs.bottomAnchor.scrollIntoView();
        }
    }
}
</script>

<style scoped>
.el-card {
    border-radius: 15px;
    margin: 15px;
}
</style>