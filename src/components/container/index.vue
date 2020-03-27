<template>
  <el-container class="main-body">
    <el-header><slot name="header">header</slot></el-header>
    <el-main><slot name="main">mian</slot></el-main>
    <el-footer height="auto" class="footer">
      <el-pagination
        :current-page="currentPage1"
        :page-sizes="[15, 30, 50]"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      currentPage1: 1,
      pageSize: 15
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(val, '子组件1')
      this.$emit('per_page', { perPage: val, page: 1 })
    },
    handleCurrentChange(val) {
      console.log(val, '子组件2')
      this.$emit('page', { perPage: this.pageSize, page: val })
    }
  }
}
</script>
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
    }
    .el-main{
      padding: 15px;
    }
    .el-footer{
      padding: 0 15px;
      .el-pagination{
        padding: 5.5px 0;
      }
    }
  }
</style>
