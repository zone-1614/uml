<template>
    <el-container>
        <el-main>
            <el-row :gutter="10">
                <el-col :span="6" :offset="2">
                    <el-card v-animate-css="'fadeInLeft'">
                        <el-avatar :size="150" :src="user.avatar"></el-avatar>
                        <div v-if="!editProfile">
                            <span>
                                <el-link :underline="false" href="/followers"><i class="el-icon-user"></i>关注数: 100 </el-link>&emsp;&emsp;
                            </span>
                            <span>
                                <el-link :underline="false" href="/following"><i class="el-icon-star-off"></i>粉丝数: 20 </el-link>
                            </span>
                            <el-descriptions :column="1" title="个人信息">
                                <el-descriptions-item label="用户名">{{ user.nickname }}</el-descriptions-item>
                                <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                                <el-descriptions-item label="居住地">广州市</el-descriptions-item>
                                <el-descriptions-item label="性别">{{ gender }}</el-descriptions-item>
                            </el-descriptions>
                            <el-button type="primary" @click="toggleEditProfile">修改个人信息</el-button>
                        </div>
                        <div v-else>
                            <h5>个人信息</h5>
                            <el-form ref="profileForm" :model="profileForm" label-width="80px">
                                <el-form-item label="用户名">
                                    <el-input v-model="profileForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="手机号">
                                    <el-input v-model="profileForm.phone"></el-input>
                                </el-form-item>
                                <el-form-item label="居住地">
                                    <el-input v-model="profileForm.locale"></el-input>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <el-radio-group v-model="profileForm.gender" size="mini">
                                        <el-radio-button label="女"></el-radio-button>
                                        <el-radio-button label="男"></el-radio-button>
                                        <el-radio-button label="保密"></el-radio-button>
                                    </el-radio-group>
                                </el-form-item>
                            </el-form>
                            <el-button type="primary" @click="toggleEditProfile">保存</el-button>
                            <el-button @click="toggleEditProfile">取消</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="14">
                    <el-card v-animate-css="'fadeInDown'">
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="我的贴子" name="first">
                                <el-card class="my-post" v-for="post in posts" :key="id">{{ post.title }}</el-card>
                            </el-tab-pane>
                            <el-tab-pane label="其他" name="second">其他</el-tab-pane>
                            <el-tab-pane label="其他" name="third">其他</el-tab-pane>
                            <el-tab-pane label="其他" name="fourth">其他</el-tab-pane>
                        </el-tabs>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Post from "@/components/Post.vue"
export default {
    name: 'My',
    components: { Post },
    data() {
        return {
            user: {
                
            },
            editProfile: false,
            profileForm: {
                gender: '',
            },
            activeName: "first",
            posts: [
                {
                    id: 2,
                    title: "战士输出高, 烈火刀刀爆",
                    time: "2022-3-31",
                    content: ""
                },
                {
                    id: 3,
                    title: "出讲座票 * 10",
                    time: "2022-4-1",
                    content: ""
                },
            ]
        }
    },
    mounted() {
        this.user = this.$store.state.user;
    },
    methods: {
        toggleEditProfile() {
            this.editProfile = !this.editProfile;
        }
    },
    computed: {
        gender() {
            if (this.user.gender === 0) {
                return '女'
            } else if (this.user.gender === 1) {
                return '男'
            } else {
                return '保密'
            }
        }
    }
}
</script>

<style scoped>
.el-avatar {
    margin-bottom: 10px;
}
.el-descriptions {
    margin-top: 20px;
}
.my-post {
    margin-bottom: 20px;
}
.el-card {
    border-radius: 15px;
}
.el-tabs {
    margin-left: 15px;
    margin-right: 15px;
}
</style>