<template>
        <div class="login-container">
            <el-container>
            <el-main>
                <el-row type="flex" justify="center" align="middle">
                    <el-tabs v-model="loginOrRegister">
                        <!-- 登录 -->
                        <el-tab-pane label="登录" name="login">
                            <el-form ref="loginForm" :model="loginForm" label-width="80px">
                                <el-form-item label="用户名">
                                    <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onLoginClick">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>

                        <!-- 注册 -->
                        <el-tab-pane label="注册" name="register">
                            <el-form ref="registerForm" :model="registerForm" label-width="80px">
                                <el-form-item label="用户名">
                                    <el-input v-model="registerForm.username" placeholder="请输入用户名" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input v-model="registerForm.password" placeholder="请输入密码" show-password></el-input>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <el-radio-group @change="onGenderChange" v-model="registerForm.gender">
                                        <el-radio :label="0">女</el-radio>
                                        <el-radio :label="1">男</el-radio>
                                        <el-radio :label="2">保密</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onRegisterClick">注册</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </el-main>
        </el-container>
        </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginOrRegister: "login",
            loginForm: {
                username: "",
                password: "",
                gender: 2
            },
            registerForm: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        onLoginClick() {
            console.log("login")
        },
        onRegisterClick() {
            console.log("register")
        },
        onGenderChange(value) {
            this.loginForm.gender = value
            console.log(this.loginForm.gender)
        }
    }
}
</script>

<style scoped>

</style>