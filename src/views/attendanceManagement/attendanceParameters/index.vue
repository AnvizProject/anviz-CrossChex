<template >
  <div class="attendance main-content">
    <el-tabs type="border-card">
      <el-tab-pane label="考勤">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-button type="primary" style="float: right" @click="attendance_btn">应用</el-button>
          </div>
          <div class="text item">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple day">
                  <div class="day-top">时段跨两日时</div>
                  <div class="day-bot day-list">
                    <el-radio-group v-model="form.TwoDay">
                      <div><el-radio :label="0">计为第一日</el-radio></div>
                      <div><el-radio :label="1">计为第二日</el-radio></div>
                    </el-radio-group>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light day">
                  <div class="day-top">休息日</div>
                  <div class="day-bot day-list">
                    <div><el-checkbox v-model="week.MON" :true-label="1" :false-label="0">星期一</el-checkbox></div>
                    <div><el-checkbox v-model="week.TUE" :true-label="2" :false-label="0">星期二</el-checkbox></div>
                    <div><el-checkbox v-model="week.WED" :true-label="4" :false-label="0">星期三</el-checkbox></div>
                    <div><el-checkbox v-model="week.THU" :true-label="8" :false-label="0">星期四</el-checkbox></div>
                    <div><el-checkbox v-model="week.FIR" :true-label="16" :false-label="0">星期五</el-checkbox></div>
                    <div><el-checkbox v-model="week.SAT" :true-label="32" :false-label="0">星期六</el-checkbox></div>
                    <div><el-checkbox v-model="week.SUN" :true-label="64" :false-label="0">星期日</el-checkbox></div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <div class="count">
                    <span>一个工作日计为</span>
                    <span>
                      <el-input-number v-model="form.WorkDayLong" :min="60" :max="1200" :step="30" controls-position="right"/>
                    </span>
                    <span>分钟</span>
                  </div>
                  <div class="count">
                    <span>最短的有效工作时间长度</span>
                    <span>
                      <el-input-number v-model="form.MinWorkLong" :min="1" :max="480" :step="1" controls-position="right"/>
                    </span>
                    <span>分钟</span>
                  </div>
                  <div class="count">
                    <span>最长的有效工作时间长度</span>
                    <span>
                      <el-input-number v-model="form.MaxWorkLong" :min="60" :max="1440" :step="1" controls-position="right"/>
                    </span>
                    <span>分钟</span>
                  </div>
                  <div class="count">
                    <span><el-checkbox v-model="form.NoClockIn" :true-label="1" false-label="0">上班无签到计为迟到</el-checkbox></span>
                    <span>
                      <el-input-number v-model="form.LateTime" :min="1" :max="480" :step="1" controls-position="right"/>
                    </span>
                    <span>分钟</span>
                  </div>
                  <div class="count">
                    <span><el-checkbox v-model="form.NoClockOut" :true-label="1" false-label="0">下班无签退计为早退</el-checkbox></span>
                    <span>
                      <el-input-number v-model="form.LeaveTime" :min="1" :max="480" :step="1" controls-position="right"/>
                    </span>
                    <span>分钟</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div class="statistics">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>考勤统计项目</span>
                    <el-button type="primary" style="float: right" @click="statistics_btn">应用</el-button>
                  </div>
                  <div class="text item">
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <div class="grid-content bg-purple-light day">
                          <div class="day-top">统计项目</div>
                          <div class="day-bot day-list">
                            <el-radio-group v-model="radio">
                              <div><el-radio :label="1">正常</el-radio></div>
                              <div><el-radio :label="2">迟到</el-radio></div>
                              <div><el-radio :label="3">早退</el-radio></div>
                              <div><el-radio :label="4">公出</el-radio></div>
                              <div><el-radio :label="5">请假</el-radio></div>
                              <div><el-radio :label="6">旷工</el-radio></div>
                              <div><el-radio :label="7">外出</el-radio></div>
                              <div><el-radio :label="8">加班</el-radio></div>
                              <div><el-radio :label="9">自由加班</el-radio></div>
                            </el-radio-group>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="18">
                        <div class="grid-content bg-purple-light day">
                          <div class="day-top">统计规则</div>
                          <div class="day-down">
                            <h5>单位设定</h5>
                            <el-form :inline="true" :model="statItem" class="demo-form-inline">
                              <el-form-item label="最小单位数">
                                <el-input v-model="statItem.MinUnit" placeholder="请填写"/>
                              </el-form-item>
                              <el-form-item label="单位名称">
                                <el-select v-model="statItem.Units" placeholder="请选择">
                                  <el-option :value="0" label="工作日"/>
                                  <el-option :value="1" label="小时"/>
                                  <el-option :value="2" label="分钟"/>
                                </el-select>
                              </el-form-item>
                            </el-form>
                            <el-divider/>
                            <h5>舍入控制</h5>
                            <el-radio-group v-model="statItem.SRControl">
                              <el-radio :label="0">向下舍弃</el-radio>
                              <el-radio :label="1">向上进入</el-radio>
                              <el-radio :label="2">四舍五入</el-radio>
                            </el-radio-group>
                            <div class="rounding-off-box">
                              <el-checkbox v-model="statItem.IsAddup" :true-label="1" :false-label="0">累计后进行舍入</el-checkbox>
                              <el-checkbox v-model="statItem.IsTimes" :true-label="1" :false-label="0">按次数进行计算</el-checkbox>
                            </div>
                            <el-form ref="form" :model="statItem" label-position="left" label-width="150px">
                              <el-form-item class="character" label="在报表中表示字符">
                                <el-input v-model="statItem.Showas"/>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="加班">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <el-button type="primary" style="float: right" @click="overtime_btn">应用</el-button>
                </div>
                <div class="text item">
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content bg-purple">
                        <div class="count">
                          <span><el-checkbox v-model="overtime.IsovertimeIn" :true-label="1" :false-label="0">上班</el-checkbox></span>
                          <span>
                            <el-input-number v-model="overtime.OvertimeIn" :min="1" :max="1200" :step="1" controls-position="right"/>
                          </span>
                          <span>分钟前签到计为加班</span>
                        </div>
                        <div class="count">
                          <span><el-checkbox v-model="overtime.DeductIn" :true-label="1" :false-label="0">上班前计算加班扣除休息时间</el-checkbox></span>
                        </div>
                        <div class="count">
                          <span><el-checkbox v-model="overtime.ISOverTime" :true-label="1" :false-label="0">下班</el-checkbox></span>
                          <span>
                            <el-input-number v-model="overtime.OverTime" :min="1" :max="1200" :step="1" controls-position="right"/>
                          </span>
                          <span>分钟后签退计为加班</span>
                        </div>
                        <div class="count">
                          <span><el-checkbox v-model="overtime.DeductOut" :true-label="1" :false-label="0">下班后计算加班扣除休息时间</el-checkbox></span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-divider/>
                  <el-row>
                    <el-col :span="15">
                      <div class="grid-content bg-purple day">
                        <div class="day-top">加班级别</div>
                        <div class="day-bot">
                          <div class="middle">
                            <span/>
                            <span>加班1（<= 小时）</span>
                            <span>加班2（<= 小时）</span>
                            <span>加班3（<= 小时）</span>
                          </div>
                          <div class="middle">
                            <span>工作日</span>
                            <span>
                              <el-input
                                v-model="overtime.gw_leave1"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.gw_leave2"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.gw_leave3"
                                placeholder="请输入"
                                clearable/>
                            </span>
                          </div>
                          <div class="middle">
                            <span>休息日</span>
                            <span>
                              <el-input
                                v-model="overtime.gr_leave1"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.gr_leave2"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.gr_leave3"
                                placeholder="请输入"
                                clearable/>
                            </span>
                          </div>
                          <div class="middle">
                            <span>节假日</span>
                            <span>
                              <el-input
                                v-model="overtime.gh_leave1"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.gh_leave2"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.gh_leave3"
                                placeholder="请输入"
                                clearable/>
                            </span>
                          </div>
                          <p class="notes">* 设成 0 表示不启动该级别</p>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="15">
                      <div class="grid-content bg-purple day">
                        <div class="day-top">加班倍率</div>
                        <div class="day-bot overtim-level">
                          <div class="middle">
                            <span>工作日加班</span>
                            <span>休息日加班</span>
                            <span>节假日加班</span>
                          </div>
                          <div class="middle">
                            <span>
                              <el-input
                                v-model="overtime.WOverTime"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.HOverTime"
                                placeholder="请输入"
                                clearable/>
                            </span>
                            <span>
                              <el-input
                                v-model="overtime.FOverTime"
                                placeholder="请输入"
                                clearable/>
                            </span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 1,
      input: '',
      week: {
        MON: 0,
        TUE: 0,
        WED: 0,
        THU: 0,
        FIR: 0,
        SAT: 0,
        SUN: 0
      },
      form: {
        WorkDayLong: '',
        MaxWorkLong: '',
        MinWorkLong: '',
        TwoDay: 0,
        NoClockIn: '',
        NoClockOut: '',
        LateTime: '',
        LeaveTime: '',
        RestDays: ''
      },
      statItem: {
        newItemid: null,
        Units: '',
        MinUnit: '',
        SRControl: '',
        IsAddup: '',
        IsTimes: '',
        Showas: ''
      },
      statistics: [],
      overtime: {
        DeductIn: '',
        DeductOut: '',
        IsovertimeIn: '',
        OvertimeIn: '',
        ISOverTime: '',
        OverTime: '',
        WOverTime: '',
        HOverTime: '',
        FOverTime: '',
        gw_leave1: '',
        gw_leave2: '',
        gw_leave3: '',
        gr_leave1: '',
        gr_leave2: '',
        gr_leave3: '',
        gh_leave1: '',
        gh_leave2: '',
        gh_leave3: ''
      }
    }
  },
  watch: {
    radio(newItemid, oldItemid) {
      this.statItem = this.statistics[ newItemid - 1 ]
    }
  },
  mounted() {
    this.attendance_data()
    this.attendance_statistics()
  },
  methods: {
    // 考勤参数
    attendance_data() {
      this.$store.dispatch('interactive/Base_para_details', {}).then(response => {
        this.form = response.BasePara
        this.week = response.BasePara.RestDaysConfig
        this.overtime = response.BasePara
        console.log(response)
      }).catch(() => {
        console.log('error')
      })
    },
    // 考勤参数修改
    attendance_btn() {
      this.form.RestDays = Number(this.week.MON) + Number(this.week.TUE) + Number(this.week.WED) + Number(this.week.THU) + Number(this.week.FIR) + Number(this.week.SAT) + Number(this.week.SUN)
      this.$store.dispatch('interactive/Attendance_para', this.form).then(response => {
        // console.log(response)
      }).catch(() => {
        console.log('error')
      })
    },
    // 考勤统计项目
    attendance_statistics() {
      this.$store.dispatch('interactive/Stat_items', {}).then(response => {
        this.statistics = response.StatItems
        this.statItem = response.StatItems[0]
      }).catch(() => {
        console.log('error')
      })
    },
    // 考勤统计项目修改
    statistics_btn() {
      this.statItem.newItemid = this.radio
      this.$store.dispatch('interactive/Update_stat_items', this.statItem).then(response => {
        // console.log(response)
      }).catch(() => {
        console.log('error')
      })
    },
    // 加班数据修改
    overtime_btn() {
      this.$store.dispatch('interactive/Attendance_para', this.overtime).then(response => {
        console.log(response)
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>
<style lang="scss" scoped>

.el-tabs{
  padding-bottom: 30px;
  .el-card.is-always-shadow{
    box-shadow: none;
  }
}
  .day{
    border:1px solid rgba(0,0,0,0.1);
    border-radius:3px 3px 0px 0px;
    height: 100%;
    .day-top{
      width: 100%;
      height:31px;
      line-height: 31px;
      background:rgba(244,244,244,1);
      border-bottom:1px solid rgba(0,0,0,0.1);
      padding: 0 15px;
    }
    .day-bot.day-list{
      padding: 0 15px;
      div{
        margin: 15px 0;
      }
    }
  }
  .count{
    max-width: 80%;
    margin: 10px auto;
    span:first-child{
      display: inline-block;
      width: 38%;
    }
  }
  .statistics{
    margin: 20px 20px 0;
    border-radius:4px;
    border:1px solid rgba(0,0,0,0.1);
    .day-down{
      padding: 0 15px;
    }
    .rounding-off-box{
      margin: 15px 0;
    }
    .el-form-item{
      margin-right: 30px;
    }
    .character{
      width: 45%;
    }
  }
  .middle{
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 10px 0;
    span{
      width: 20%;
      margin-right: 5%;
      text-align: center;
    }
  }
  .notes{
    width: 100%;
    color:#E02020;
    text-align: right;
    padding: 0 15px;
    margin-top: 70px;
    font-size: 14px;
  }
  .overtim-level{
    margin-top: 30px;
    .middle{
      width: 75%;
      margin: 10px auto;
      span{
        width: 30%;
        margin-right: 5%;
        text-align: left;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
</style>

<style lang="scss">
.attendance.main-content{
  .el-card__header{
    box-shadow: none;
  }
}
</style>
