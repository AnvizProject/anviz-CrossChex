<template >
  <div class="holiday main-content">
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <ul>
            <li v-for="(v,k) in holidayList" :key="k" @click="show(k)">
              <div class="vacation">
                <span class="vacation-left">
                  <p class="num">{{ v.Days }}</p>
                  <p class="word">天</p>
                </span>
                <span class="vacation-right">
                  <p class="title">{{ v.Name }}</p>
                  <p class="word">{{ v.BDate }}</p>
                </span>
              </div>
            </li>
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
                <el-button type="primary" size="mini" @click="add">新增</el-button>
                <el-button type="primary" size="mini" @click="edit">修改</el-button>
                <el-button type="danger" size="mini" @click="del">删除</el-button>
              </p>
              <div class="day">
                <div class="day-top">工种信息</div>
                <div class="day-list">
                  <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="名称">
                      <el-input v-model="form.Name"/>
                    </el-form-item>
                    <el-form-item label="开始日期">
                      <el-date-picker
                        v-model="form.BDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"/>
                    </el-form-item>
                    <el-form-item label="天数">
                      <el-input-number :min="1" :max="365" v-model="form.Days" controls-position="right" @change="handleChange" />
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
        Name: '',
        BDate: '',
        Days: 1
      },
      radio: '1',
      checked: true.dispatch,
      holidayList: []
    }
  },
  mounted() {
    this.getHolidayList()
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    show(key) {
      this.form = Object.assign({}, this.holidayList[key])
    },
    getHolidayList() {
      this.$store.dispatch('interactive/getHolidayList', {}).then(response => {
        this.holidayList = response.Holiday
      }).catch(error => {
        console.log(error)
      })
    },
    add() {
      this.$store.dispatch('interactive/createHoliday', this.form).then(response => {
        this.getHolidayList()
      }).catch(error => {
        console.log(error)
      })
    },
    edit() {
      this.$store.dispatch('interactive/updateHoliday', this.form).then(response => {
        this.getHolidayList()
      }).catch(error => {
        console.log(error)
      })
    },
    del() {
      this.$store.dispatch('interactive/delHoliday', this.form).then(response => {
        console.log(response)
        this.form = {}
        this.getHolidayList()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
