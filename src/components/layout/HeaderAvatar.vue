<template>
    <div>
        <el-popover placement="bottom" trigger="hover">
            <div>
                <el-link href="/my">我的</el-link>
            </div>
            <div>
                <el-link href="/logout">退出登录</el-link>
            </div>
            <el-avatar
                slot="reference"
                :src="$store.state.user.avatar"
                :size="30"
            ></el-avatar>
        </el-popover>
    </div>
</template>

<script>
export default {
    name: "HeaderAvatar",
};
</script>

<style scoped></style>
