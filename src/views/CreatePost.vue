<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-input v-model="newPost.title" placeholder="请输入帖子标题"></el-input>
                        </div>
                        <el-row>
                            <el-input
                                type="textarea"
                                rows="10"
                                placeholder="请输入内容"
                                v-model="newPost.content"
                                :autosize="{minRows: 5, maxRows: 20}"
                                resize="none"
                            ></el-input>
                        </el-row>
                        <el-row class="util">
                            <el-col :span="20" style="text-align: start;">
                                占位
                            </el-col>
                            <el-col :span="4">
                                <el-button type="primary">发表</el-button>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "CreatePost",
    data() {
        return {
            newPost: {
                title: '',
                content: '',
                time: '',
            }
        }
    }
}
</script>

<style scoped>
.util {
    margin-top: 20px;
}
</style>