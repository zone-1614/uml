<template>
    <div class="post">
        <!-- <el-card @click.native="clickPost" > 点击整个卡片都能跳转就加上这个click -->  
        <el-card >
            <el-row :gutter="20">
                <el-col :span="2">
                    <el-popover placement="top-start" width="350" trigger="hover">
                        <FloatingDetail :username='post.nickname' :avatar='post.avatar' :like="post.like" :postNumber="20" />
                        <el-avatar slot="reference" :src="post.avatar" :size="50"></el-avatar>
                        <div slot="reference">{{ post.nickname }}</div>
                    </el-popover>
                    
                </el-col>
                <el-col :span="18">
                    <div class="post-title">
                        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
                    </div>

                    <div class="post-content">{{ summary }}</div>
                    <el-tag v-for="tag in post.tag" :key="tag" class="tag">{{ tag }}</el-tag>
                </el-col>
                <el-col :span="4">
                    <div class="post-time">
                        <i class="el-icon-time"></i>
                        {{ post.createTime }}
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import FloatingDetail from "./FloatingDetail.vue";
export default {
    name: "Post",
    props: ["post"],
    components: { FloatingDetail },
    created() {
        console.log(this.post.avatar)
    },
    methods: {
        clickPost() {
            this.$router.push({
                name: "post",
                params: { id: this.post.id }
            });
        },
    },
    computed: {
        summary() {
            return this.post.content.substr(0, 100) + "......";
        }
    },
    components: { FloatingDetail }
}
</script>

<style scoped>

a {
    text-decoration: none;
    color: #262626;
}

.post-title {
    float: inline-start;
    text-align: left;
    padding: 10px;
    font-size: 20px;
}
.post-content {
    float: inline-start;
    text-align: left;
    padding: 10px;
    padding-left: 50px;
    font-size: 15px;
    color: #8a8a8e;
}

.tag {
    margin-top: 10px;
    margin-left: 10px;
}

.post {
    margin: 20px;
}

.post-time {
    position: absolute;
    top: 16px;
    font-size: 15px;
    color: #989898;
    letter-spacing: 1px;
    font-family: din, "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif;
    display: flex;
    align-items: center;
}
</style>