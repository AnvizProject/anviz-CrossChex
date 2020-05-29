<template >
  <div class="forget main-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>清除条件</span>
        <el-button type="primary" size="small" style="float: right;" @click="clear">清除</el-button>
      </div>
      <div class="text item">
        <div class="content-part">
          <el-form class="data-selection" auto-complete="on" label-position="left" label-width="35%">
            <el-form-item label="选择要清除数据的截止日期">
              <el-date-picker
                v-model="clear_time"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clear_time: ''
    }
  },
  methods: {
    // 清除数据
    clear() {
      this.$store.dispatch('interactive/Data_manage', { clear_time: this.clear_time }).then(response => {
        console.log(response)
        this.$message({
          message: '清除成功',
          type: 'success'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .forget{
    .content-part{
      padding: 20px 0px;
      margin-bottom: 1em;
    }
    .el-form{
      max-width: 900px;
      margin: 0 auto;
      &.data-selection{
        .el-form-item{
          width: 60%;
          margin: 10px auto;
        }
      }
    }
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 100%;
  }
  .el-date-editor{
    &.el-input{
      width: 100% !important;
    }
  }
</style>
