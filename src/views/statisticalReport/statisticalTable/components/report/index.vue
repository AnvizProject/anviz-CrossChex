<template>
  <div class="record">
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="95%">
      <iframe :src="url" class="ifram" frameborder="0"/>
    </el-dialog>
  </div>

</template>
<script>
var timestamp = Date.parse(new Date()) / 1000
export default {
  props: {
    report_type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      url: ''
    }
  },
  watch: {
    report_type(val) {
      this.Report_preview(val)
    }
  },
  methods: {
    getConfigResult(res) {
      // 接收回调函数返回数据的方法
      console.log(res)
      if (res.ret === '0') {
        this.$message({
          message: '成功',
          type: 'success'
        })
        setTimeout(() => {
          if (res.data.report_type === 'records') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
          if (res.data.report_type === 'daily_records') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
          if (res.data.report_type === 'month_symbol') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
          if (res.data.report_type === 'month_detail') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
          if (res.data.report_type === 'month_hours') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
          if (res.data.report_type === 'stat_total') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
          if (res.data.report_type === 'expections') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
          if (res.data.report_type === 'away_leave') {
            this.url = process.env.BASE_API + res.data.url
            this.centerDialogVisible = true
          }
        }, 300)

        return
      } else {
        this.$message({
          message: '失败',
          type: 'warning'
        })
      }
    },
    Report_preview(data) {
      console.log(data)
      const value = JSON.parse('{"cmd":"report_export", "data": {"ts":"' + timestamp + '","report_type":"' + data + '","file_type":"html"}}')
      console.log(value)
      this.socketApi.sendSock(value, this.getConfigResult)
    }
  }
}
</script>
<style lang="scss" scoped>
  .ifram{
    width: 100%;
    height: 100%;
  }
</style>
<style lang="scss">
  .record{
    .el-dialog{
      margin-top: 5vh !important;
      margin-bottom: 5vh;
      height: calc(100% - 10vh);
    }
    .el-dialog__header{
      padding: 0;
    }
    .el-dialog__headerbtn{
      top:10px;
      right:30px;
    }
    .el-dialog__body{
      padding: 10px !important;
      margin: 0 !important;
      overflow: hidden;
      height: 100%;
    }
  }
</style>
