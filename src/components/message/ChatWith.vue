<template>
    <div>
        <!-- 聊天信息 -->
        <div id="scroll">
            <el-scrollbar class="chatroom">
                <el-container>
                    <el-main  class="2342" ref="chat">
                        <div v-for="(m, idx) in messages" :key="idx">
                            {{m}}
                        </div>
                        <div ref="bottomAnchor" style="opacity: 0.0;">bottom</div>
                    </el-main>
                </el-container>
            </el-scrollbar>
        </div>
        <!-- 发送信息 -->
        <el-row class="input-row">
            <el-col :span="20">
                <el-input resize="none" type="textarea" :rows="5" maxlength="100" show-word-limit v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-chat-square" @click="add()">
                    发送
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "ChatWith",
    props: ["chatId"],
    created() {
        this.user = {
            nickname: "aaa",
            gender: 2,
            userId: this.chatId,
        };
        this.messages = ["nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh","nihao", "nihao", "hhh"]
       
    },
    data() {
        return {
            user: {},
            input: "",
            messages: [] };
    },
    methods: {
        add(){
            this.messages.push("12315");
            console.log(this.$refs.bottomAnchor)
            this.$refs.bottomAnchor.scrollIntoView(); 
            
            // this.$refs['chat'].$el.scrollTop = this.$refs['chat'].$el.scrollHeight;
            // console.log([this.$refs.chat.$el])
            // console.log(this.$refs['chat'].$el.scrollTop)
            // console.log(this.$refs['chat'].$el.scrollHeight)
        }
    },
    mounted() {
        // 聊天页默认滚到最下
        this.$refs.bottomAnchor.scrollIntoView(); 
    }
};
</script>

<style scoped>
.chatroom {
    width: 100%;
    height: 60vh;
}
.input {
    width: 100%;
    height: 100px;
}
.sendButton {
    margin-top: 30px;
}

.input-row {
    margin-top: 20px;
}
</style>
