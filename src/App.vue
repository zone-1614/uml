<template>
  <div id="app">
    <el-container>
      <el-header>
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <LayoutBody></LayoutBody>
      </el-main>
      <el-footer>
        <LayoutFooter></LayoutFooter>
      </el-footer>
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
  .el-header {
    background-color: #B3C0D1;
    text-align: start;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
