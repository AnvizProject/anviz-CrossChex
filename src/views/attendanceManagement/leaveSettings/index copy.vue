<template >
  <div class="worksettings main-content">
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <ul>
            <li>
              <span class="color-box"/>
              <span class="vacatin-title">请假</span>
              <span class="el-icon-error"/>
            </li>
            <li v-for="(v,k) in leaveList" :key="k" @click="show(k)">{{ v.Classname }}</li>
            <!-- <li>123</li> -->
          </ul>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>假类设置</span>
            </div>
            <div class="text item">
              <p class="fun-btn mg15-bot">
                <el-button type="primary" size="mini" @click="add">新增</el-button>
                <el-button type="primary" size="mini" @click="edit">修改</el-button>
                <el-button type="danger" size="mini" @click="del">删除</el-button>
              </p>
              <div class="day">
                <div class="day-top">假类信息</div>
                <div class="day-list">
                  <el-form ref="form" :inline="true" :model="form" label-width="80px">
                    <el-form-item label="假类名称">
                      <el-input v-model="form.Classname"/>
                    </el-form-item>
                    <el-form-item label="表示颜色">
                      <el-color-picker
                        v-model="form.ViewColor"
                        :predefine="predefineColors"
                        show-alpha/>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="day">
                <div class="day-top">统计规划</div>
                <div class="day-list">
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <div class="bg-purple rule">
                        <p>单位设定</p>
                        <el-form ref="form" :model="form" label-width="80px">
                          <el-form-item label="单位名称">
                            <el-select v-model="form.Units" placeholder="请选择活动区域">
                              <el-option v-for="(v,k) in units" :key="k" :label="v.label" :value="v.value"/>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="最小单位">
                            <el-input v-model="form.MinUnit"/>
                          </el-form-item>
                        </el-form>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="bg-purple rule">
                        <p>舍入控制</p>
                        <div class="el-form option-wrap">
                          <el-row :gutter="20" class="option">
                            <el-col :span="12">
                              <div v-for="(v, k) in SRControl" :key="k" class="option-but">
                                <el-radio v-model="form.SRControl" :label="v.label">{{ v.value }}</el-radio>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="option-but">
                                <el-checkbox v-model="form.IsTimes" :true-label="1" :false-label="0">累计后进行舍入</el-checkbox>
                              </div>
                              <div class="option-but">
                                <el-checkbox v-model="form.IsAddup" :true-label="1" :false-label="0">按次进行计算</el-checkbox>
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="day-bot">
                    <el-form ref="form" :inline="true" :model="form" label-width="150px">
                      <el-form-item label="在报表中表示字符">
                        <el-input v-model="form.Showas"/>
                      </el-form-item>
                    </el-form>
                    <div class="footer">
                      <el-checkbox v-model="form.IsLeave">计为请假</el-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        ViewColor: '',
        Showas: '',
        Units: 0,
        MinUnit: 0,
        SRControl: 2,
        IsTimes: 1,
        IsAddup: 0,
        IsLeave: 0
      },
      color: '#cf0318',
      predefineColors: [
        '#FF0000',
        '#FF7F00',
        '#FFFF00',
        '#00FF00',
        '#00FFFF',
        '#0000FF',
        '#8B00FF',
        '#47a369',
        '#000000',
        '#999999'
      ],
      units: [
        {
          value: 0,
          label: '分钟'
        },
        {
          value: 1,
          label: '小时'
        },
        {
          value: 2,
          label: '工作日'
        }
      ],
      SRControl: [
        {
          value: '向下舍弃',
          label: 0
        },
        {
          value: '向上进位',
          label: 1
        },
        {
          value: '四舍五入',
          label: 2
        }
      ],
      leaveList: []
    }
  },
  mounted() {
    this.getLeaveList()
  },
  methods: {
    getLeaveList() {
      this.$store.dispatch('interactive/getLeaveList', {}).then(response => {
        console.log(response.LeaveClass)
        this.leaveList = response.LeaveClass
      }).catch(error => {
        console.log(error)
      })
    },
    add() {
      this.$store.dispatch('interactive/createLeave', this.form).then(response => {
        console.log(response)
        this.getLeaveList()
      }).catch(error => {
        console.log(error)
      })
    },
    show(key) {
      console.log(key)
      console.log(this.leaveList[key])
      this.form = Object.assign({}, this.leaveList[key])
    },
    edit() {
      this.$store.dispatch('interactive/updateLeave', this.form).then(response => {
        console.log(response)
        this.getLeaveList()
      }).then(error => {
        console.log(error)
      })
    },
    del() {
      this.$store.dispatch('interactive/delLeave', { Classid: this.form.Classid }).then(response => {
        console.log(response)
        this.show(0)
        this.getLeaveList()
      }).then(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-row{
    display: flex;
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
      padding: 5px 10px;
      display: flex;
      &:hover{
        background: rgba(123,192,181,0.2);
        .el-icon-error{
          display: block;
        }
      }
      .color-box{
        width: 16px;
        height: 16px;
        background: #000;
        margin-right: 6px;
      }
      .el-icon-error{
        margin-left: auto;
        display: none;
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
    margin-bottom: 35px;
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
    }
    .day-bot{
      margin-top: 100px;
    }
  }
  .rule{
    p{
      padding: 0 10px;
    }
    .el-form{
      padding: 22px 26px;
      border:1px solid #E6E6E6;
      border-radius:5px;
      &.option-wrap{
        padding-bottom: 30px;
      }
      .option-but{
        height: 35px;
      }
    }
  }
  .footer{
    margin-bottom: 40px;
  }
</style>
