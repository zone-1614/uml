<template>
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
                            <div style="margin-bottom: 15px;">上传图片(最多三张): </div>
                            <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false"
                                :limit="3"
                                :on-exceed="handleExceed">
                                <i slot="default" class="el-icon-plus"></i>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="start">
                        <el-col :span="16" style="text-align: start;">
                            <el-tag
                                :key="tag"
                                v-for="tag in tags"
                                closable
                                :diable-transitions="false"
                                @close="handleClose(tag)">
                                {{tag}}
                            </el-tag>
                            <el-input class="input-new-tag"
                                v-if="inputVisible"
                                v-model="inputValue"
                                ref="saveTagInput"
                                size="small"
                                @keyup.enter.native="handleInputConfirm"
                                @blur="handleInputConfirm">
                                
                            </el-input>
                            <el-button v-else class="new-tag-button" size="small" @click="showInput">+ New Tag</el-button>
                        </el-col>
                        <el-col :offset="4" :span="4">
                            <el-button type="primary" @click="createPost">发表</el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import api from '../api';

export default {
    name: "CreatePost",
    data() {
        return {
            newPost: {
                title: '',
                content: '',
                time: '',
                img1: '',
                img2: '',
                img3: '',
            },
            tags: ['aa','ss'],
            inputValue: '',
            inputVisible: false
        }
    },
    methods: {
        handleExceed() {
            // 添加超过四个图片
            this.$message.error('最多添加3个图片')
            return false;
        },
        handleClose(tag) {
            // 删除标签
            this.tags.splice(this.tags.indexOf(tag), 1)
        },
        showInput() {
            // 显示tag 输入框
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            // 按enter 或者点击输入框外面，完成tag输入
            let inputValue = this.inputValue;
            // tag 不能多余 5个
            if (this.tags.length >= 5) {
                this.$message.error('最多添加5个标签')
            } else if (inputValue) {
                this.tags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        createPost() {
            // 创建 post
            if (this.newPost.content === '') {
                this.$message.error('内容不能为空')
            } else if (this.newPost.title === '') {
                this.$message.error('标题不能为空')
            }
            api.createPost()
        }
    }
}
</script>

<style scoped>
.el-row {
    margin-top: 20px;
}
.util {
    margin-top: 20px;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}

.new-tag-button {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}

.el-tag + .el-tag {
    margin-left: 10px;
}
</style>