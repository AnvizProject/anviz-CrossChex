<template >
  <div class="data-base main-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>数据库设置</span>
        <el-button type="primary" size="small" style="float: right;" @click="request">应用</el-button>
      </div>
      <div class="text item">
        <div class="content-part">
          <el-form class="data-selection" auto-complete="on" label-position="left" label-width="25%">
            <el-form-item label="服务器IP">
              <el-input v-model="form.db_host"/>
            </el-form-item>
            <el-form-item label="服务器端口">
              <el-input v-model="form.db_port"/>
            </el-form-item>
            <el-form-item label="用户名称">
              <el-input v-model="form.db_username"/>
            </el-form-item>
            <el-form-item label="用户密码">
              <el-input v-model="form.db_password"/>
            </el-form-item>
            <el-form-item label="数据库名">
              <el-select v-model="form.db_database" placeholder="请选择">
                <el-option v-for="(v,k) in db_name" :key="k" :label="v" :value="v"/>
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
      form: {
        db_host: '',
        db_port: '',
        db_username: '',
        db_password: '',
        db_database: ''
      },
      db_name: []
    }
  },
  mounted() {
    this.get_db({ cmd: 'get_db' })
    setTimeout(() => {
      this.get_db({ cmd: 'databases', db_host: this.form.db_host, db_port: this.form.db_port, db_username: this.form.db_username, db_password: this.form.db_password })
    }, 500)
  },
  methods: {
    // 获取数据库配置
    get_db(cmd) {
      this.$store.dispatch('interactive/Get_db', cmd).then(response => {
        console.log(response)
        if (cmd.cmd === 'get_db') {
          this.form.db_host = response.db_config.db_host
          this.form.db_port = response.db_config.db_port
          this.form.db_username = response.db_config.db_username
          this.form.db_password = response.db_config.db_password
          this.form.db_database = response.db_config.db_database
        } else {
          // console.log(response)
          this.db_name = response.databases
        }
      }).catch(error => {
        console.log(error)
      })
    },
    request() {
      console.log(123)
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
