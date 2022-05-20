<template>
    <div>
        <el-card>聊天室</el-card>
        <el-card>
            <el-tabs type="card" tab-position="left" style="margin-top: 10px;">
                <el-tab-pane v-for="(u, index) in chatUsers" :key="index" :label="u">
                    {{u}}
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "ChatRoom",
    data() {
        return {
            // 与你聊天的用户列表
            chatUsers: [
                "用户1", "用户2", "用户1", "用户2", "用户1", "用户2", "用户1", "用户2", "用户1", "用户2", "用户1", "用户2", "用户1", "用户2"
            ]
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
