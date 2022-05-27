<template>
  <el-row v-if="item.from.userId == my.userId">
    我发的 {{item}}
  </el-row>
  <el-row v-else>
    他发的
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

</style>