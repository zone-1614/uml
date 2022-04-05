<template>
    <el-container>
        <el-main>
            <el-row :gutter="30">
                <el-col :span="16" :offset="4">
                    <el-tabs tab-position="left">
                        <el-tab-pane label="回复我的">
                            <el-card>回复我的</el-card>
                            <el-card v-if="messages.length === 0">并没有消息</el-card>
                            <el-card v-else>
                                <div class="message" v-for="m in messages" :key="m">
                                    <el-row :gutter="20" type="flex" justify="start">
                                        <el-col :span="4" style="text-align: start;">
                                            <i class="el-icon-user"></i>
                                            {{ m.username }}
                                        </el-col>
                                        <el-col :span="14" style="text-align: start;">
                                            <i class="el-icon-bell"></i>
                                            {{ m.content }}
                                        </el-col>
                                        <el-col :span="6">
                                            <i class="el-icon-time"></i>
                                            {{ m.time }}
                                        </el-col>
                                    </el-row>
                                    <el-divider v-if="m != messages[messages.length - 1]"></el-divider>
                                </div>
                            </el-card>
                        </el-tab-pane>
                        <el-tab-pane label="系统通知">
                            <el-card>系统消息</el-card>
                        </el-tab-pane>
                        <el-tab-pane label="我的消息">
                            <el-card>我的消息</el-card>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "Message",
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
            ]
        }
    }
}
</script>

<style scoped>
.message {
    margin-bottom: 20px;
}
</style>