<template >
  <div class="holiday app-container">
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <ul>
            <li>
              <div class="vacation">
                <span class="vacation-left">
                  <p class="num">7</p>
                  <p class="word">天</p>
                </span>
                <span class="vacation-right">
                  <p class="title">国庆节</p>
                  <p class="word">2018/10/01-2018/10/07</p>
                </span>
              </div>
            </li>
            <li>123</li>
            <li>123</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>工种设置</span>
            </div>
            <div class="text item">
              <p class="fun-btn">
                <el-button type="primary" size="mini">新增</el-button>
                <el-button type="primary" size="mini">修改</el-button>
                <el-button type="danger" size="mini">删除</el-button>
              </p>
              <div class="day">
                <div class="day-top">工种信息</div>
                <div class="day-list">
                  <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="工种编号">
                      <el-input v-model="form.num"/>
                    </el-form-item>
                    <el-form-item label="开始日期">
                      <el-date-picker
                        v-model="form.value1"
                        type="date"
                        placeholder="选择日期"/>
                    </el-form-item>
                    <el-form-item label="结束日期">
                      <el-date-picker
                        v-model="form.value2"
                        type="date"
                        placeholder="选择日期"/>
                    </el-form-item>
                    <el-form-item label="天数">
                      <el-input-number :min="1" :max="365" v-model="form.num" controls-position="right" @change="handleChange" />
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
  .vacation{
    display: flex;
    p{
      margin: 0;
    }
    .vacation-left{
      width: 20%;
      flex-basis: 20%;
      border-right: 1px solid #E6E6E6;
      margin-right: 5%;
      text-align: center;
    }
    .vacation-right{
      width: 75%;
      flex-basis: 75%;
      .title{
        height: 65%;
        display: flex;
        align-items: center;
      }
    }
    .num{
      font-size: 24px;
      color:#4A4A4A;
    }
    .word{
      font-size: 12px;
      color:#B0B0B0;
    }
  }
  .el-row{
    display: flex;
  }
  .el-form{
    max-width: 40%;
    padding-left: 50px;
  }
  .el-form-item{
    margin-bottom: 16px;
  }
  .grid-content{
    height: 100%;
    background: #fff;
    border-radius: 4px;
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      border-bottom: 1px solid rgba(221,221,221,0.3);
      padding: 15px 10px;
      &:hover{
        background: rgba(123,192,181,0.2);
      }
    }
  }
  .fun-btn{
    text-align: right;
  }
  .day{
    border:1px solid rgba(0,0,0,0.1);
    border-radius:3px 3px 0px 0px;
    height: 100%;
    .day-top{
      width: 100%;
      height:31px;
      background:rgba(244,244,244,1);
      border-bottom:1px solid rgba(0,0,0,0.1);
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .day-list{
      padding: 0 15px;
      margin: 15px 0;
      .el-date-editor.el-input{
        width: 100%;
      }
      .el-input-number{
        width: 100%;
      }
    }
  }
</style>
<script>
export default {
  data() {
    return {
      form: {
        num: 1,
        value1: '',
        value2: ''
      },
      radio: '1',
      checked: true
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>
