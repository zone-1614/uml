<template>
    <el-scrollbar class="chatroom">
        <el-container>
            <el-main>
                <el-row>
                    <el-col span="24" style="background: #fbb033">
                        <div v-for="u in users">{{u}}</div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-scrollbar>
</template>

<script>
export default {
    name: "UserList",
    props: ["users"]
}
</script>

<style scoped>
.chatroom {
    width: 100%;
    height: 80vh;
}
</style>