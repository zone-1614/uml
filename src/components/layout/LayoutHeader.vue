<template>
    <div class="header">
        <div class="header-left">
            <el-link type="primary"  :underline="false" href="/home">
                <i class="el-icon-eleme title" >UML小组作业</i>
            </el-link>
        </div>
        <!-- 左边的 首页 热门 等等 -->
        <div class="header-left">
            <el-link :underline="false" href="/home">
                首页
            </el-link>
        </div>

        <!-- 热门 -->
        <!-- <div class="header-left">
            <el-link :underline="false" href="/hot">
                热门
            </el-link>
        </div> -->

        <!-- 资源 -->
        <div class="header-left">
            <el-link :underline="false" href="/resource">
                资源
            </el-link>
        </div>

        <!-- 右边的 头像 / 注册登录 -->
        <div v-if="$store.state.isLogin" class="header-right">
            <HeaderAvatar></HeaderAvatar>
        </div>
        <div v-else class="header-right">
            <el-link :underline="false" @click="routeToLoginOrRegister">
                注册 / 登录
            </el-link>
        </div>

        <!-- 消息 -->
        <div v-if="$store.state.isLogin" class="header-right">
            <el-button size="mini" type="primary" @click="routeToCreatePost">创建帖子</el-button>
        </div>

        <!-- 消息 -->
        <div v-if="$store.state.isLogin" class="header-right">
            <!-- <el-badge
                :max="99"
                :value="messageNumber"
                :hidden="messageNumber == 0"
            >
                <el-button @click="routeToMessage">消息</el-button>
            </el-badge> -->
        </div>
    </div>
</template>

<script>
import HeaderAvatar from './HeaderAvatar.vue'
export default {
    name: "LayoutHeader",
    components: {
        HeaderAvatar
    },
    data() {
        return {
            messageNumber: 15, // 右上角消息数量
        };
    },
    computed: {},
    methods: {
        // 点击左上角的 注册登录 按钮之后，跳转路由
        routeToLoginOrRegister() {
            this.$router.push("/login");
        },
        // 点击右上角的消息后，跳转到消息页
        routeToMessage() {
            this.$router.push("/message");
        },
        // 点击创建帖子
        routeToCreatePost() {
            this.$router.push("/create");
        },
        toggleIsLogin() {
            this.$store.commit("changeIsLogin", !this.$store.state.isLogin);
        },
    },
};
</script>

<style scoped>
.header {
    padding-left: 0%;
    padding-right: 10%;
}
.title {
    font-size: 25px;
}
.el-link {
    font-size: 14px;
}
.header-left {
    float: left;
    width: fit-content;
    margin: 16px 10px 0px 10px;
    vertical-align: middle;
}
.header-right {
    float: right;
    width: fit-content;
    margin: 16px 10px 0px 10px;
}
</style>
