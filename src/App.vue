<template>
  <div id="app" class="app">
    <el-container v-loading="$store.state.loading">
      <el-header>
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <LayoutBody></LayoutBody>
      </el-main>
      <!-- <el-footer>
        <LayoutFooter></LayoutFooter>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>
import LayoutHeader from './components/layout/LayoutHeader.vue'
import LayoutBody from './components/layout/LayoutBody.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutBody,
    LayoutFooter
  }
}

</script>

<style>
.app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #b3c0d1;
  text-align: start;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
