<template>
    <el-container>
        <el-main>
            <el-row type="flex" justify="center">
                <el-col :span="6">
                        <el-card v-animate-css="'fadeInDown'">
                            <i class="el-icon-eleme icon">校园助手</i>
                            <el-tabs v-model="loginOrRegister">
                                <!-- 登录 -->
                                <el-tab-pane label="登录" name="login">
                                    <el-form
                                        ref="loginForm"
                                        :model="loginForm"
                                        label-width="80px"
                                    >
                                        <el-form-item label="用户名">
                                            <el-input
                                                v-model="loginForm.nickname"
                                                placeholder="请输入用户名"
                                                clearable
                                            ></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码">
                                            <el-input
                                                v-model="loginForm.password"
                                                placeholder="请输入密码"
                                                show-password
                                            ></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button
                                                type="primary"
                                                @click="onLoginClick"
                                                >登录</el-button
                                            >
                                        </el-form-item>
                                    </el-form>
                                </el-tab-pane>

                                <!-- 注册 -->
                                <el-tab-pane label="注册" name="register" 
                                        >
                                    <el-form
                                        ref="registerForm"
                                        :model="registerForm"
                                        label-width="80px"
                                    >
                                        <el-form-item label="用户名">
                                            <el-input
                                                v-model="registerForm.nickname"
                                                placeholder="请输入用户名"
                                                clearable
                                            ></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码">
                                            <el-input
                                                v-model="registerForm.password"
                                                placeholder="请输入密码"
                                                show-password
                                            ></el-input>
                                        </el-form-item>
                                        <el-form-item label="再次确定">
                                            <el-input
                                                v-model="
                                                    registerForm.againPassword
                                                "
                                                placeholder="请输入密码"
                                                show-password
                                            ></el-input>
                                            <el-alert
                                                v-if="alertShow"
                                                title="两次输入的密码不一致"
                                                type="error"
                                            ></el-alert>
                                        </el-form-item>
                                        <el-form-item label="性别">
                                            <el-radio-group
                                                v-model="registerForm.gender"
                                            >
                                                <el-radio :label="0"
                                                    >女</el-radio
                                                >
                                                <el-radio :label="1"
                                                    >男</el-radio
                                                >
                                                <el-radio :label="2"
                                                    >保密</el-radio
                                                >
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button
                                                type="primary"
                                                @click="onCheckRegisterForm"
                                                >检查</el-button
                                            >
                                            <el-button
                                                type="primary"
                                                @click="onRegisterClick"
                                                :disabled="registerDisabled"
                                                >注册</el-button
                                            >
                                        </el-form-item>
                                    </el-form>
                                </el-tab-pane>
                            </el-tabs>
                        </el-card>
                    </transition>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import api from "../api";

export default {
    name: "Login",
    data() {
        return {
            loginOrRegister: "login",
            loginForm: {
                nickname: "",
                password: "",
            },
            registerForm: {
                nickname: "",
                password: "",
                againPassword: "",
                gender: 2,
            },
            alertShow: false,
            registerDisabled: true
        };
    },
    created() {
        this.showCard = true; //动画
    },
    methods: {
        onLoginClick() {
            var vue = this;
            api.user
                .login(this.loginForm)
                .then((data) => {
                    if (data.status === 200) {
                        console.log(data.data.res);
                        vue.$store.commit("login", data.data.res);
                        vue.$router.push("/home"); // 登陆成功跳转首页
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        onRegisterClick() {
            if (
                this.registerForm.password !== this.registerForm.againPassword
            ) {
                this.alertShow = true;
                return;
            }
            var vue = this;
            api.user
                .register(this.registerForm)
                .then((data) => {
                    if (data.status === 200) {
                        vue.$store.commit("login", data.data.res);
                        vue.$router.push("/home"); // 登陆成功跳转首页
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        onCheckRegisterForm() {
            // 检查
            this.registerDisabled = false;
        },
    },
};
</script>

<style scoped>
.el-card {
    border-radius: 15px;
}
.icon {
    font-size: 40px;
    margin: 20px;
    color: #409eff;
}

.el-tab-pane {
    margin-top: 20px;
}
</style>
