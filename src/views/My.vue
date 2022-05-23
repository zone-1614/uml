<template>
    <el-main>
        <el-row :gutter="10">
            <el-col :span="6" :offset="2">
                <el-card v-animate-css="'fadeInLeft'">
                    <el-avatar v-if="!editProfile" :size="150" :src="user.avatar" v-animate-css="'fadeInLeftBig'"></el-avatar>
                    <el-upload v-else
                        class="avatar-uploader"
                        action="http://localhost:8080/api/file/image"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        name="image">
                        <el-avatar :size="150" :src="user.avatar"></el-avatar>
                    </el-upload>
                    <div v-if="!editProfile">
                        <span>
                            <el-link :underline="false" @click="routeToFollow"><i class="el-icon-user"></i>关注数: 100 </el-link>&emsp;&emsp;
                        </span>
                        <span>
                            <el-link :underline="false" @click="routeToFollowing"><i class="el-icon-star-off"></i>粉丝数: 20 </el-link>
                        </span>
                        <el-descriptions :column="1" title="个人信息">
                            <el-descriptions-item label="用户名">{{ user.nickname }}</el-descriptions-item>
                            <el-descriptions-item label="手机号">{{ user.phone }}</el-descriptions-item>
                            <el-descriptions-item label="居住地">{{ user.locale }}</el-descriptions-item>
                            <el-descriptions-item label="性别">{{ gender }}</el-descriptions-item>
                        </el-descriptions>
                        <el-button type="primary" @click="toggleEditProfile">修改个人信息</el-button>
                    </div>
                    <div v-else>
                        <h5>个人信息</h5>
                        <el-form ref="profileForm" :model="profileForm" label-width="80px">
                            <el-form-item label="用户名">
                                <el-input v-model="profileForm.nickname"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号">
                                <el-input v-model="profileForm.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="居住地">
                                <el-input v-model="profileForm.locale"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-radio-group v-model="profileForm.gender" size="mini">
                                    <el-radio-button label="0">女</el-radio-button>
                                    <el-radio-button label="1">男</el-radio-button>
                                    <el-radio-button label="2">保密</el-radio-button>
                                </el-radio-group>
                            </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="saveProfile">保存</el-button>
                        <el-button @click="toggleEditProfile">取消</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="14">
                <el-card v-animate-css="'fadeInDownBig'">
                    <el-tabs v-model="activeName" v-animate-css="'fadeInDownBig'">
                        <el-tab-pane label="我的贴子" name="first">
                            <el-card class="my-post" v-for="(post, index) in posts" :key="index" v-animate-css="'fadeInDownBig'"  v-loading="$store.state.loading">{{ post.title }}</el-card>
                        </el-tab-pane>
                        <el-tab-pane label="其他" name="second">其他</el-tab-pane>
                        <el-tab-pane label="其他" name="third">其他</el-tab-pane>
                        <el-tab-pane label="其他" name="fourth">其他</el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import Post from "@/components/Post.vue"
import api from "@/api/index"
export default {
    name: 'My',
    components: { Post },
    created() {
        this.$store.commit("loading");
        api.post.getMyPosts().then((data) => {
            this.posts = data.data.res;
            this.$store.commit("finishLoad");
        })
    },
    data() {
        return {
            user: {},
            editProfile: false,
            profileForm: {
                gender: 0,
                nickname: "",
                phone: "",
                locale: ""
            },
            activeName: "first",
            posts: []
        }
    },
    mounted() {
        this.user = this.$store.state.user;
        this.user.locale = "广州";
        this.user.phone = "34720110";
        this.profileForm.nickname = this.user.nickname;
        this.profileForm.gender = this.user.gender;
        this.profileForm.phone = this.user.phone;
        this.profileForm.locale = this.user.locale;
    },
    methods: {
        toggleEditProfile() {
            this.editProfile = !this.editProfile;
        },
        handleAvatarSuccess(res, file) {
            this.user.avatar = URL.createObjectURL(file.raw);
        },
        saveProfile() {
            this.editProfile = !this.editProfile;
            this.user.nickname = this.profileForm.nickname;
            this.user.gender = this.profileForm.gender;
            this.user.phone = this.profileForm.phone;
            this.user.locale = this.profileForm.locale;
        },
        routeToFollow() {
            this.$router.push('/follow');
        },
        routeToFollowing() {
            this.$router.push('/following');
        }
    },
    computed: {
        gender() {
            console.log(this.user.gender);
            if (this.user.gender == 0) {
                return '女'
            } else if (this.user.gender == 1) {
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
    margin: 20px;
}
.el-card {
    border-radius: 15px;
}
.el-tabs {
    margin-left: 15px;
    margin-right: 15px;
}

.avatar-uploader {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border: 1px dashed #d9d9d9;
    border-radius: 75px;
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
    line-height: 150px;
    text-align: center;
}
</style>