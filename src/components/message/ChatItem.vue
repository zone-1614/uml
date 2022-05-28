<template>
  <el-row v-if="item.from.userId == my.userId" type="flex" justify="end">
    <el-card class="msg-my">
      {{item.content}}
    </el-card>
    <el-col :span="2">
      <el-avatar :src="item.from.avatar"></el-avatar>
      <div>{{item.from.nickname}}</div>
    </el-col>
  </el-row>
  <el-row v-else type="flex" justify="start">
    <el-col :span="2">
      <el-avatar :src="item.from.avatar"></el-avatar>
      <div>{{item.from.nickname}}</div>
    </el-col>
    <el-card class="msg">
      {{item.content}}
    </el-card>
  </el-row>
</template>

<script>
export default {
  name: "ChatItem",
  props: ["item"],
  data() {
    return {
      my: {}
    }
  },
  created() {
    this.my = this.$store.state.user;
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 10px;
}
.el-card {
  border-radius: 10px;
}
.msg-my {
  margin-right: 10px;
  text-align: start;
}

.msg {
  margin-left: 10px;
  text-align: start;
  max-width: max-content-100px;
}
</style>