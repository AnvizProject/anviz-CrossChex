<template >
  <div class="worksettings main-content">
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <ul>
            <li v-for="(v,k) in jobList" :key="k" @click="show(k)">{{ v.WorkName }}</li>
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
                  <el-form ref="form" :inline="true" :model="form" label-width="80px">
                    <el-form-item label="工种编号">
                      <el-input v-model="form.WorkID"/>
                    </el-form-item>
                    <el-form-item label="工种名称">
                      <el-input v-model="form.WorkName"/>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="day">
                <div class="day-top">工种信息</div>
                <div class="day-list">
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <div class="bg-purple rule">
                        <p>单位设定</p>
                        <el-form ref="form" :model="form" label-width="80px">
                          <el-form-item label="单位名称">
                            <el-select v-model="form.Units" placeholder="请选择活动区域">
                              <el-option label="区域一" value="0"/>
                              <el-option label="区域二" value="1"/>
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
                              <div class="option-but">
                                <el-radio v-model="form.SRControl" :label="0">向下舍弃{{ form.SRControl }}</el-radio>
                              </div>
                              <div class="option-but">
                                <el-radio v-model="form.SRControl" :label="1">向上进位{{ form.SRControl }}</el-radio>
                              </div>
                              <div class="option-but">
                                <el-radio v-model="form.SRControl" :label="2">四舍五入{{ form.SRControl }}</el-radio>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="option-but">
                                <el-checkbox v-model="form.IsAddup">累计后进行舍入</el-checkbox>
                              </div>
                              <div class="option-but">
                                <el-checkbox v-model="form.IsTimes">按次进行计算</el-checkbox>
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
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
        num: '',
        name: '',
        region: ''
      },
      radio: '1',
      checked: true,
      jobList: []
    }
  },
  mounted() {
    this.getJobSetting()
  },
  methods: {
    getJobSetting() {
      this.$store.dispatch('interactive/getJobList', {}).then(response => {
        this.jobList = response.WorkCode
      }).catch(error => {
        console.log(error)
      })
    },
    show(key) {
      this.form = Object.assign({}, this.jobList[key])
    },
    add() {
      this.$store.dispatch('interactive/createJob', this.form).then(response => {
        this.getJobSetting()
      }).catch(error => {
        console.log(error)
      })
    },
    del() {
      this.$store.dispatch('interactive/delJob', this.form).then(response => {
        this.form = {}
        this.getJobSetting()
      }).catch(error => {
        console.log(error)
      })
    },
    edit() {
      this.$store.dispatch('interactive/update', this.form).then(response => {
        console.log(response)
        this.getJobSetting()
      }).catch(error => {
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
</style>
