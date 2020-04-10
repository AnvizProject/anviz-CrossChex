<template >
  <div class="data-base main-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>数据库设置</span>
        <el-button type="primary" size="small" style="float: right;" @click="websocketToLogin">应用</el-button>
      </div>
      <div class="text item">
        <div class="content-part">
          <el-form class="data-selection" auto-complete="on" label-position="left" label-width="25%">
            <el-form-item label="服务器IP">
              <el-input v-model="form.input1"/>
            </el-form-item>
            <el-form-item label="用户名称">
              <el-input v-model="form.input1"/>
            </el-form-item>
            <el-form-item label="用户密码">
              <el-input v-model="form.input1"/>
            </el-form-item>
            <el-form-item label="数据库名">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
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
      radio: '1',
      form: {
        input1: ''
      }
    }
  },
  methods: {
    getConfigResult(res) {
      // alert(1)
      // 接收回调函数返回数据的方法
      console.log(res)
    },
    websocketToLogin() {
      // alert(2)
      // 【agentData：发送的参数；this.getConfigResult：回调方法】
      this.socketApi.sendSock(JSON.parse('{"cmd":"ping"}'), this.getConfigResult)
    }
  }
}
</script>
<style lang="scss" scoped>
  .data-base{
    .content-part{
      padding: 20px 0px;
      margin-bottom: 1em;
    }
    .file-selection-wrap{
      max-width: 900px;
      margin: 0 auto;
    }
    .el-form{
      max-width: 900px;
      margin: 0 auto;
      &.file-selection{
        display: flex;
        width: 60%;
        margin: 10px auto;
        align-items: center;
        span:first-child{
          width: 25%;
        }
        span:nth-child(2){
          width: 65%;
        }
        span:last-child{
          width: 10%;
          .el-button{
            width: 100%;
            height: 40px;
            background: #D5DEE4 !important;
            border-color: #D5DEE4 !important;
            border-radius:0;
          }
        }
      }
      &.data-selection{
        .el-form-item{
          width: 60%;
          margin: 10px auto;
        }
      }
      .data-base-selection{
        display: flex;
        width: 60%;
        margin: 10px auto;
        align-items: center;
        span:first-child{
          width: 25%;
        }
        span:last-child{
          width: 75%;
          .el-select{
            width: 100%;
          }
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
</style>
