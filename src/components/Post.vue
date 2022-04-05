<template>
    <div class="post">
        <el-card @click="clickPost">
            <el-row :gutter="20">
                <el-col :span="2">
                    <el-avatar :src="post.avatarURL" :size="50"></el-avatar>
                    <div>{{ post.user }}</div>
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
                        {{ post.time }}
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
    methods: {
        clickPost() {
            this.$route.push({
                name: "post",
                params: { id: this.post.id }
            })
        },
    },
    computed: {
        summary() {
            return this.post.content.substr(0, 100) + "......";
        }
    }
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