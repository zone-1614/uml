<template>
    <div>
        <el-container>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="4" :offset="4">
                        <el-card v-animate-css="'fadeInLeft'">
                            <el-avatar
                                :size="150"
                                :src="user.avatar"
                            ></el-avatar>
                            <div>
                                <el-link :underline="false" href="/followers"
                                    ><i class="el-icon-user"></i>关注数: 100 </el-link
                                >&emsp;&emsp;
                            </div>
                            <div>
                                <el-link :underline="false" href="/following"
                                    ><i class="el-icon-star-off"></i>粉丝数: 20
                                </el-link>
                            </div>
                            <el-descriptions :column="1" title="个人信息">
                                <el-descriptions-item label="用户名">{{
                                    user.nickname
                                }}</el-descriptions-item>
                                <el-descriptions-item label="手机号"
                                    >18100000000</el-descriptions-item
                                >
                                <el-descriptions-item label="居住地"
                                    >广州市</el-descriptions-item
                                >
                                <el-descriptions-item label="性别">{{
                                    gender
                                }}</el-descriptions-item>
                            </el-descriptions>
                        </el-card>
                        <!-- <el-card style="margin-top: 20px;">
                            <el-button type="primary" @click="routeToChatRoom">
                                发送信息
                            </el-button>
                        </el-card> -->
                    </el-col>
                    <el-col :span="12" v-animate-css="'fadeInDown'">
                        <el-card>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                            <div>详细</div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import api from "../api/index";
export default {
    name: "UserDetail",
    created() {
        //console.log("user detail page: " + this.$route.params['userid'])
        const userid = this.$route.params["userid"];
        api.user
            .getUserDetail(userid)
            .then((data) => {
                this.user = data.data.res;
                console.log(this.user);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    data() {
        return {
            user: {},
        };
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
    },
    methods: {
        routeToChatRoom() {
            console.log("route to chat room")
        }
    }
};
</script>

<style scoped>
.el-card {
    border-radius: 15px;
}
.el-tabs {
    margin-left: 15px;
    margin-right: 15px;
}
</style>
