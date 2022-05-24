<template>
    <div>
        <el-scrollbar class="chatroom">
            <el-container>
                <el-main>
                    <el-row>
                        <el-col span="24" style="background: #e6fcf5">
                            
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-scrollbar>
        <el-row class="input-row">
            <el-col span="20">
                <el-input resize="none" type="textarea" :rows="5" maxlength="100" show-word-limit v-model="input" placeholder="请输入内容">
                    
                </el-input>
            </el-col>
            <el-col span="4">
                <el-button type="primary" icon="el-icon-chat-square">
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
    },
    data() {
        return {
            user: {},
            input: "",
        };
    },
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
