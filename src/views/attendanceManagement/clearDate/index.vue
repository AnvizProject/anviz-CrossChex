<template>
  <div class="cleardate main-content">
    <el-container>
      <el-header>
        <div class="con-item">
          <div class="header-item"><el-button type="info" size="mini" disabled>清除</el-button></div>
        </div>
      </el-header>
      <el-main>
        <div class="main-item">
          <el-form ref="form" :model="form" label-width="250px">
            <el-form-item label="请选择要清除数据的截止日期">
              <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
            </el-form-item>
          </el-form>
        </div>

      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        date1: ''
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .main-item{
    max-width: 50%;
    margin: 0 auto;
  }
</style>
