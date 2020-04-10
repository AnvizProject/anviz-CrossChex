<template>
  <div class="search">
    <el-input v-model="input" :placeholder="search" size="mini">
      <el-button slot="append" size="mini" type="primary" @click="searchKey">查询</el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    searchKey() {
      this.$emit('search')
    }
  }
}
</script>
<style lang="scss" scoped>
  .search{
    width: 100%;
    height: 32px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: rgba(250,250,250,0.9);
    box-shadow:0px 15px 10px -15px #ccc;
    .el-input{
      width: 400px;
      .el-button{
        color:#fff;
        border:1px solid #47a369;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
</style>
