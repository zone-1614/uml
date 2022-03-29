<template>
    <el-container>
        <el-main>
            <el-row type="flex" justify="center">
                <el-avatar :size="150" :src="user.avatarURL"></el-avatar>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'My',
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        this.user = this.$store.state.user;
    }
}
</script>

<style scoped>
</style>