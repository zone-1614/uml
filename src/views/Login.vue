<template>
    <el-main>
        <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-card v-animate-css="'fadeInDown'">
                    <i class="el-icon-eleme icon">校园助手</i>
                    <el-tabs v-model="loginOrRegister">
                        <!-- 登录 -->
                        <el-tab-pane label="登录" name="login">
                            <el-form
                                ref="loginForm"
                                :model="loginForm">
                                <el-form-item>
                                    <el-input
                                        v-model="loginForm.nickname"
                                        placeholder="请输入用户名"
                                        clearable
                                    ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input
                                        v-model="loginForm.password"
                                        placeholder="请输入密码"
                                        show-password
                                    ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onLoginClick">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>

                        <!-- 注册 -->
                        <el-tab-pane label="注册" name="register">
                            <!-- 头像 -->
                            <el-upload
                                class="avatar-uploader"
                                action="http://localhost:8080/api/file/insert"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload"
                                :on-preview="removeFile"
                                name="file">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <el-form
                                ref="registerForm"
                                :model="registerForm">
                                <el-form-item>
                                    <el-input
                                        v-model="registerForm.nickname"
                                        placeholder="请输入用户名"
                                        clearable
                                    ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input
                                        v-model="registerForm.password"
                                        placeholder="请输入密码"
                                        show-password
                                    ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input
                                        v-model="registerForm.againPassword"
                                        placeholder="请输入密码"
                                        show-password
                                    ></el-input>
                                    <el-alert
                                        v-if="alertShow"
                                        title="两次输入的密码不一致"
                                        type="error"
                                        style="margin-top: 20px;"
                                    ></el-alert>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <el-radio-group v-model="registerForm.gender">
                                        <el-radio :label="0">女</el-radio>
                                        <el-radio :label="1">男</el-radio>
                                        <el-radio :label="2">保密</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                    <!-- <el-button type="primary" @click="onCheckRegisterForm">检查</el-button> -->
                                    <el-button  type="primary" @click="onRegisterClick" :disabled="registerDisabled">注册</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import api from "../api/index.js";

export default {
    name: "Login",
    data() {
        return {
            prefix: "../assets/",
            imageUrl: "",
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
            registerDisabled: false,
            disableUpload: false, // 用于上传头像后，再次点击删除
        };
    },
    methods: {
        onLoginClick() {
            var vue = this;
            api.user.login(this.loginForm)
            .then((data) => {
                if (data.status === 200) {
                    console.log(data);
                    vue.$store.commit("login", data.data.res.user);
                    vue.$router.push("/home"); // 登陆成功跳转首页
                }
            })
            .catch((err) => {
                console.log(err);
            });
        },
        onRegisterClick() {
            if (this.registerForm.password !== this.registerForm.againPassword) {
                this.alertShow = true;
                return;
            }
            var vue = this;
            api.user
                .register(this.registerForm)
                .then((data) => {
                    if (data.status === 200) {
                        console.log(data);
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
        handleAvatarSuccess(res, file) {
            console.log(res);
            this.imageUrl = URL.createObjectURL(file.raw);
            console.log(this.imageUrl);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error("头像只能是jpg格式");
            }
            if (!isLt2M) {
                this.$message.error("头像大小不能超过2MB");
            }
            return isJPG && isLt2M;
        },
        removeFile(url) {
            console.log("remove url")
            this.imageUrl = '';
        }
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

.avatar-uploader {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
}
.avatar-uploader:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    vertical-align: middle;
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.avatar {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50px;
}
</style>
