<template>
  <div v-show="flag" class="register">
    <el-button size="mini" class="closed" icon="el-icon-close" circle @click="closed"/>
    <el-container>
      <el-header>
        <el-steps :active="active" finish-status="success">
          <el-step title="注册"/>
          <el-step title="数据库"/>
          <el-step title="部门"/>
          <el-step title="员工"/>
          <el-step title="考勤"/>
          <el-step title="排班"/>
          <el-step title="设备"/>
        </el-steps>
      </el-header>
      <el-main>
        <div class="main-item">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>注册信息带 * 必填</span>
            </div>
            <div class="text item">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="70px" class="demo-ruleForm">
                      <el-form-item label="联系人" prop="name">
                        <el-input v-model="ruleForm.name"/>
                      </el-form-item>
                      <el-form-item label="公司" prop="company">
                        <el-input v-model="ruleForm.company"/>
                      </el-form-item>
                      <el-form-item label="国家" prop="country">
                        <el-input v-model="ruleForm.country"/>
                      </el-form-item>
                      <el-form-item label="邮箱" prop="mail">
                        <el-input v-model="ruleForm.mail"/>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">
                    <el-form :model="ruleForm" label-width="70px" class="demo-ruleForm">
                      <el-form-item label="电话">
                        <el-input v-model="ruleForm.phone"/>
                      </el-form-item>
                      <el-form-item label="网站">
                        <el-input v-model="ruleForm.web"/>
                      </el-form-item>
                      <el-form-item label="地址">
                        <el-input v-model="ruleForm.address" type="textarea"/>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
              </el-row>
            </div>
            <ul class="point">
              <li>1、该软件为免费版软件，为了保证能更好的获得服务，请注册后使用</li>
              <li>2、我们注册信息通过加密传输,请放心使用</li>
              <li>3、该信息仅使用于我们提供技术服务支持使用</li>
              <li>4、软件注册需要Internet连接。如果未连接到Internet,注册信息将会保存在本地 ，待连接将会自动注册。</li>
            </ul>
          </el-card>
        </div>
      </el-main>
      <el-footer>
        <el-button style="margin-top: 12px;" size="small " @click="previous">上一步</el-button>
        <el-button style="margin-top: 12px;" size="small " @click="next()">下一步</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      flag: true,
      ruleForm: {
        name: '',
        company: '',
        country: '',
        mail: '',
        phone: '',
        web: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入公司', trigger: 'blur' }
        ],
        country: [
          { required: true, message: '请输入国家', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]

      }
    }
  },

  methods: {
    closed() {
      this.flag = false
      console.log(this.flag)
    },
    previous() {
      if (this.active-- < 0) this.active = 6
    },
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.active++ > 6) this.active = 0
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .closed{
    position: absolute;
    right:15px;
    top:15px
  }
  .flag{
    display: none;
  }
  .register{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    // background: #fff;
    background: linear-gradient(213deg, #13547a 0%, #80d0c7 100%);
    z-index: 99999999;
    .el-container{
      width: 50%;
      height: auto;
      margin: 0 auto;
      padding: 20px 0;
    }
    .el-footer{
      text-align: right;
    }
    .point{
      li{
        margin-bottom: 10px;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
</style>
<style lang="scss">
  .register{
    .el-card__header{
      padding: 10px;
    }
    .el-form-item__label{
      text-align: center;
    }
    .el-textarea__inner{
      min-height: 102px !important;
    }
  }
</style>
