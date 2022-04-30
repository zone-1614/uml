<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="2">
                <el-avatar :src="user.avatar" :size="100"></el-avatar>
                <div>{{user.name}}</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "FloatingDetail",
    props: ['user'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>