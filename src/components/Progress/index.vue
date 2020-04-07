<template>
  <div class="progress">
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      top = "40vh"
      width="30%">
      <el-progress
        :percentage="percentage"
        :color="colors"
        :text-inside="true"
        :stroke-width="20"
        type="line"/>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 0,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      dialogVisible: false
    }
  },
  watch: {
    dialogVisible(newVal, oldVal) {
      if (newVal === true) {
        const timer = setInterval(() => {
          if (this.percentage >= 100) {
            clearInterval(timer)
            this.dialogVisible = false
            this.percentage = 0
          } else {
            this.percentage++
          }
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss">
  .progress{
    .el-dialog{
      height: unset;
      max-height: unset;
      .el-dialog__header{
        padding: 0;
      }
      .el-dialog__body{
        padding: 20px;
        overflow-y: unset;
      }
    }
  }
</style>
