<template>
    <div>
        <el-scrollbar class="chatroom">
            <el-container>
                <el-main>
                    <el-row>
                        <el-col span="24" style="background: #e6fcf5">
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}
                            {{ user }}
                            {{ user }}{{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}{{ user }}{{ user }}{{ user
                            }}{{ user }}{{ user }}{{ user }}{{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}{{ user }}{{ user }}{{ user
                            }}{{ user }}{{ user }}{{ user }}{{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}{{ user }}{{ user }}{{ user
                            }}{{ user }}{{ user }}{{ user }}{{ user }}{{ user }}
                            {{ user }}
                            {{ user }}{{ user }}{{ user }}{{ user }}{{ user
                            }}{{ user }}{{ user }}{{ user }}
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-scrollbar>
        <el-row>
            <el-col span="24">
                <el-scrollbar class="input">
                    <el-container>
                        <el-main>
                            <!-- 按钮在后面，单行信息 -->
                            <el-input resize="none" maxlength="100" show-word-limit v-model="input" placeholder="请输入内容">
                                <el-button slot="append" type="primary" icon="el-icon-search">
                                    发送
                                </el-button>
                            </el-input>
                        </el-main>
                    </el-container>
                </el-scrollbar>
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
</style>
