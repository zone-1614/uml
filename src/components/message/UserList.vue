<template>
    <el-scrollbar class="chatroom">
        <el-container>
            <el-main>
                <el-menu default-active="1">
                    <el-menu-item v-for="(user, idx) in users" :key="idx" @click="chatWith(user)">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{user.nickname}}</span>
                    </el-menu-item>
                </el-menu>
            </el-main>
        </el-container>
    </el-scrollbar>
</template>

<script>
export default {
    name: "UserList",
    props: ["users"],
    methods: {
        chatWith(user) {
            console.log(user.userId);
            this.$emit("chatWith", user.userId);
        }
    }
}
</script>

<style scoped>
.chatroom {
    width: 100%;
    height: 80vh;
}
.card {
    border-radius: 15px;
}
</style>