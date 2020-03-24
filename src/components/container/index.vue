<template>
  <el-container class="main-body">
    <el-header><slot name="header">header</slot></el-header>
    <el-main><slot name="main">mian</slot></el-main>
    <el-footer><slot name="footer">footer</slot></el-footer>
  </el-container>
</template>
<style lang="scss" scoped>
  .main-body{
    width: calc(100vw - 250px) !important;
    height: calc(100vh - 122px) !important;
    margin:0 10px 10px !important;
    box-shadow:0px 2px 7px 0px rgba(65, 48, 48, 0.13);
    border-radius:5px !important;
    overflow: auto !important;
    background: #FFF !important;
    .el-header,.el-footer{
      height: 40px !important;
      display:flex;
      justify-content: space-between;
      text-align: left;
      align-items: center;
    }
  }
</style>
