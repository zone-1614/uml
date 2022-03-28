<template>
    <div>
        <el-row style="background: pink;" align="bottom">
            <el-col :span="2" :offset="6">
                <el-avatar :size="100" :src="user.avatarURL"></el-avatar>
            </el-col>
            <el-col :span="2">
                <h3 style="height:min-content">{{$store.state.user.username}}</h3>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'My',
    data() {
        return {
            user: { }
        }
    },
    mounted() {
        this.user = this.$store.state.user;
        console.log(this.user)
    }
}
</script>

<style scoped>
</style>