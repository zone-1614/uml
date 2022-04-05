<template>
    <div class="header">
        <i class="el-icon-eleme header-left">UML小组作业</i>
        <!-- 左边的 首页 热门 等等 -->
        <div class="header-left">
            <el-link type="primary" href="/home">
                <i class="el-icon-s-home">首页</i>
            </el-link>
        </div>

        <div class="header-left">
            <el-link type="primary" href="/hot">
                <i class="el-icon-sunny">热门</i>
            </el-link>
        </div>

        <div class="header-right">
            <el-button type="primary" @click="toggleIsLogin">
                点击切换isLogin(测试按钮)
            </el-button>
        </div>
        <!-- 右边的 头像 / 注册登录 -->
        <div v-if="$store.state.isLogin" class="header-right">
            <el-popover 
                placement="bottom"
                trigger="hover">
                <div><el-link href="/my">我的</el-link></div>
                <div><el-link href="/logout">退出登录</el-link></div>
                <el-avatar slot="reference" :src="$store.state.user.avatarURL" :size="40"></el-avatar>
            </el-popover>
        </div>
        <div v-else class="header-right">
            <el-button type="primary" @click="routeToLoginOrRegister">
                注册 / 登录
            </el-button>
        </div>
        
        <!-- 消息 -->
        <div v-if="$store.state.isLogin" class="header-right">
            <el-badge :max="99" :value="messageNumber" :hidden="messageNumber==0" >
                <el-button @click="routeToMessage">消息</el-button>
            </el-badge>
        </div>
       

    </div>
</template>

<script>
export default {
    name: "LayoutHeader",
    data() {
        return {
            messageNumber: 15, // 右上角消息数量
        }
    },
    computed: {
    },
    methods: {
        // 点击左上角的 注册登录 按钮之后，跳转路由
        routeToLoginOrRegister() {
            this.$router.push('login')
        },
        // 点击右上角的消息后，跳转到消息页
        routeToMessage() {
            this.$router.push('/message')
        },
        toggleIsLogin() {
            this.$store.commit('changeIsLogin', !this.$store.state.isLogin)
        }
    }
}
</script>

<style scoped>
.header {
    padding-left: 10%;
    padding-right: 10%;
}
.el-link {
    font-size: 20px;
}
.header-left {
    float: left;
    width: fit-content;
    margin: 10px;
    vertical-align: middle;
}
.header-right {
    float: right;
    width: fit-content;
    margin: 10px;
}
</style>