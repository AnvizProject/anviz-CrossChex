<template >
  <el-dialog
    :visible.sync="dialogVisible"
    width="80%"
    class="device-access-control">
    <span>
      <el-container>
        <el-main style="padding:0px">
          <el-row class="time-slot">
            <el-col :span="24">
              <div class="grid-content bg-purple-light">
                <el-tabs type="border-card">
                  <el-tab-pane label="门禁时段信息">
                    <el-row v-loading="loading" :gutter="20" class="time-slot">
                      <el-col :span="6">
                        <div class="grid-content bg-purple-light day">
                          <div class="day-top top-title">门禁时段列表</div>
                          <div class="day-bot day-list">
                            <ul class="time-list">
                              <li v-for="(i,k) in defaultList" :key="k" :class="{'active':timeActive==k}" class="time-list-item" @click="timeList_click(k)">{{ i }}</li>
                            </ul>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="18">
                        <div class="grid-content bg-purple-light day">
                          <div class="day-top top-title">
                            <span>门禁时段信息</span>
                            <span>
                              <el-button type="primary" size="mini" @click="time_btn">应用</el-button>
                            </span>
                          </div>
                          <div class="day-bot day-list">
                            <el-form ref="form" :model="form" label-width="150px">
                              <el-form-item label="时段说明">
                                <el-input v-model="form.AccessTimeName" style="padding:0 10px"/>
                              </el-form-item>
                              <el-form-item label="星期一起止时间">
                                <el-col :span="12">
                                  <el-time-picker v-model="form.MONBeginTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="12">
                                  <el-time-picker v-model="form.MONEndTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                              </el-form-item>
                              <el-form-item label="星期二起止时间">
                                <el-col :span="12">
                                  <el-time-picker v-model="form.TUEBeginTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="12">
                                  <el-time-picker v-model="form.TUEEndTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                              </el-form-item>
                              <el-form-item label="星期三起止时间">
                                <el-col :span="12">
                                  <el-time-picker v-model="form.WEDBeginTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="12">
                                  <el-time-picker v-model="form.WEDEndTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                              </el-form-item>
                              <el-form-item label="星期四起止时间">
                                <el-col :span="12">
                                  <el-time-picker v-model="form.THUBeginTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="12">
                                  <el-time-picker v-model="form.THUEndTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                              </el-form-item>
                              <el-form-item label="星期五起止时间">
                                <el-col :span="12">
                                  <el-time-picker v-model="form.FIRBeginTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="12">
                                  <el-time-picker v-model="form.FIREndTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                              </el-form-item>
                              <el-form-item label="星期六起止时间">
                                <el-col :span="12">
                                  <el-time-picker v-model="form.SATBeginTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="12">
                                  <el-time-picker v-model="form.SATEndTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                              </el-form-item>
                              <el-form-item label="星期日起止时间">
                                <el-col :span="12">
                                  <el-time-picker v-model="form.SUNBeginTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="12">
                                  <el-time-picker v-model="form.SUNEndTime" format="HH:mm" value-format="HH:mm" placeholder="请选择" style="width: 100%;"/>
                                </el-col>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="门禁组信息">
                    <el-row v-loading="loading2" :gutter="20" class="time-slot">
                      <el-col :span="6">
                        <div class="grid-content bg-purple-light day">
                          <div class="day-top top-title">门禁组列表</div>
                          <div class="day-bot day-list">
                            <ul class="time-list">
                              <li v-for="(i,k) in defaultGroup" :key="k" :class="{'active':groupActive==k}" class="time-list-item" @click="groupList_click(k)">{{ i }}</li>
                            </ul>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="18">
                        <div class="grid-content bg-purple-light day">
                          <div class="day-top top-title">
                            <span>门禁组信息</span>
                            <span>
                              <el-button type="primary" size="mini" @click="group_btn">应用</el-button>
                            </span>
                          </div>
                          <div class="day-bot accessGroup day-list">
                            <el-form ref="form" :model="form2" label-width="100px">
                              <el-form-item label="门禁组说明">
                                <el-input v-model="form2.AccessGroupName" style="padding:0 10px"/>
                              </el-form-item>
                              <el-form-item label="门禁时段1">
                                <selectbox :options="default_List" v-model="form2.AccessTimeid1"/>
                              </el-form-item>
                              <el-form-item label="门禁时段2">
                                <selectbox :options="default_List" v-model="form2.AccessTimeid2"/>
                              </el-form-item>
                              <el-form-item label="门禁时段3">
                                <selectbox :options="default_List" v-model="form2.AccessTimeid3"/>
                              </el-form-item>
                              <el-form-item label="门禁时段4">
                                <selectbox :options="default_List" v-model="form2.AccessTimeid4"/>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="组成员列表">
                    <div class="header">
                      <span><el-button type="primary" size="mini" @click="update">更新门禁设置到在线终端设备</el-button></span>
                    </div>
                    <el-row class="tableDate">
                      <el-col :span="10">
                        <Container :total="total" @per_page="people_list" @page="people_list">
                          <div slot="main" class="main-item">
                            <el-table
                              ref="selection"
                              :data="data1"
                              border
                              style="width: 100%"
                              @selection-change="checkAll">
                              <el-table-column
                                type="selection"/>
                              <el-table-column
                                prop="userid"
                                sortable
                                label="考勤号"
                                width="100"/>
                              <el-table-column
                                prop="Name"
                                label="姓名"
                                width="100"/>
                              <el-table-column
                                prop="Groupid"
                                sortable
                                label="组号"/>
                              <el-table-column
                                prop="DeptName"
                                label="部门"/>
                            </el-table>
                          </div>
                        </Container>
                      </el-col>
                      <el-col :span="4">
                        <div class="opSetting">
                          <div @click="handelSelect">
                            <el-button :disabled="nowSelectData.length?false:true" :size="buttonSize" icon="el-icon-d-arrow-right" type="primary" />
                          </div>
                          <div class="spacing" @click="handleRemoveSelect">
                            <el-button :disabled="nowSelectRightData.length?false:true" :size="buttonSize" icon="el-icon-d-arrow-left" type="primary"/>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <el-table
                          ref="selection"
                          :data="selectArr"
                          border
                          style="width: 100%"
                          @selection-change="checkRightAll">
                          <el-table-column
                            type="selection"/>
                          <el-table-column
                            prop="userid"
                            label="考勤号"
                            sortable
                            width="100"/>
                          <el-table-column
                            prop="Name"
                            label="姓名"
                            width="100"/>
                          <el-table-column
                            prop="DeptName"
                            label="部门"/>
                        </el-table>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </span>
  </el-dialog>

</template>
<script>
var timestamp = Date.parse(new Date()) / 1000
import selectbox from '@/components/select'
import Container from '@/components/container'
export default {
  components: {
    selectbox,
    Container
  },
  props: {
    clientid: {
      type: String,
      default: ''
    },
    tag_id: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      dialogVisible: false,
      loading: false,
      loading2: true,
      radio: 1,
      checked: true,
      isActive: 0,
      timeActive: 0,
      groupActive: 0,
      showPrise: false,
      de_data: null,
      id: null,
      defaultList: ['1-', '2-', '3-', '4-', '5-', '6-', '7-', '8-', '9-', '10-', '11-', '12-', '13-', '14-', '15-', '16-', '17-', '18-', '19-', '20-', '21-', '22-', '23-', '24-', '25-', '26-', '27-', '28-', '29-', '30-', '31-', '32-'],
      defaultGroup: ['1-常闭组', '2-常开组', '3-', '4-', '5-', '6-', '7-', '8-', '9-', '10-', '11-', '12-', '13-', '14-', '15-', '16-'],
      TimeList: [],
      AccessDate: [],
      GroupList: [],
      GroupDate: [],
      time_name: '',
      form: {
        AccessTimeName: '',
        AccessTimeid: 1,
        FIRBeginTime: '00:00',
        FIREndTime: '00:00',
        MONBeginTime: '00:00',
        MONEndTime: '00:00',
        SATBeginTime: '00:00',
        SATEndTime: '00:00',
        SUNBeginTime: '00:00',
        SUNEndTime: '00:00',
        THUBeginTime: '00:00',
        THUEndTime: '00:00',
        TUEBeginTime: '00:00',
        TUEEndTime: '00:00',
        WEDBeginTime: '00:00',
        WEDEndTime: '00:00',
        tag_id: ''
      },
      form2: {
        AccessGroupid: null,
        AccessGroupName: '',
        AccessTimeid1: 0,
        AccessTimeid2: 0,
        AccessTimeid3: 0,
        AccessTimeid4: 0,
        tag_id: ''
      },
      total: null,
      per_page: {
        page: 1,
        perPage: 15
      },
      selectArr: [], // 右边列表
      buttonSize: 'large',
      options: [],
      value: '',
      data1: [], // 左边列表
      nowSelectData: [], // 左边选中列表数据
      nowSelectRightData: [] // 右边选中列表数据
    }
  },
  computed: {
    default_List() {
      const access_options = []
      this.defaultList.forEach((v, i) => {
        access_options.push({ value: i, label: v })
      })
      return access_options
    },
    group_users() {
      const userList = []
      this.selectArr.forEach((v, k) => {
        userList.push({ accessgroupid: v.Groupid, userids: v.userid })
      })
      return userList
    }
  },
  mounted() {
    this.people_list()
  },
  methods: {
    // 门禁时段列表
    time_list() {
      this.loading = true
      this.defaultList = ['1-', '2-', '3-', '4-', '5-', '6-', '7-', '8-', '9-', '10-', '11-', '12-', '13-', '14-', '15-', '16-', '17-', '18-', '19-', '20-', '21-', '22-', '23-', '24-', '25-', '26-', '27-', '28-', '29-', '30-', '31-', '32-']
      this.socketApi.sendSock({ 'cmd': 'get_accesstime', 'data': { 'ts': timestamp, 'clientid': this.clientid }}, this.getConfigResult)
    },
    // 时间段列表点击
    timeList_click(k) {
      this.form = {
        AccessTimeName: '',
        AccessTimeid: k + 1,
        FIRBeginTime: '00:00',
        FIREndTime: '00:00',
        MONBeginTime: '00:00',
        MONEndTime: '00:00',
        SATBeginTime: '00:00',
        SATEndTime: '00:00',
        SUNBeginTime: '00:00',
        SUNEndTime: '00:00',
        THUBeginTime: '00:00',
        THUEndTime: '00:00',
        TUEBeginTime: '00:00',
        TUEEndTime: '00:00',
        WEDBeginTime: '00:00',
        WEDEndTime: '00:00',
        tag_id: this.tag_id
      }
      this.timeActive = k
      this.AccessDate.forEach((v, i) => {
        if (v.AccessTimeid === k + 1) {
          this.form = v
          console.log(this.form)
          console.log(v.AccessTimeid, k + 1)
        }
      })
    },
    // 门禁时间段应用
    time_btn() {
      this.$store.dispatch('interactive/Access_Update', this.form).then(response => {
        // console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 门禁组列表
    group_list() {
      this.loading2 = true
      this.defaultGroup = ['0-常闭组', '1-常开组', '2-', '3-', '4-', '5-', '6-', '7-', '8-', '9-', '10-', '11-', '12-', '13-', '14-', '15-', '16-']
      this.socketApi.sendSock({ 'cmd': 'get_accessgroup', 'data': { 'ts': timestamp, 'clientid': this.clientid }}, this.getConfigResult)
    },

    // 门禁组列表点击
    groupList_click(k) {
      this.groupActive = k
      this.form2 = {
        AccessGroupid: k,
        AccessGroupName: '',
        AccessTimeid1: null,
        AccessTimeid2: null,
        AccessTimeid3: null,
        AccessTimeid4: null,
        tag_id: this.tag_id
      }
      this.GroupDate.forEach((v, i) => {
        if (v.AccessGroupid === k) {
          this.form2 = v
        }
      })
    },

    // 门禁组应用
    group_btn() {
      this.$store.dispatch('interactive/Access_Group_Update', this.form2).then(response => {
        // this.group_list(this.id)
      }).catch(error => {
        console.log(error)
      })
    },
    // 穿梭框
    // 人员列表
    people_list(per_page) {
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      console.log(per_page)
      this.$store.dispatch('interactive/userList', { per_page: this.per_page.perPage, page: this.per_page.page }).then(response => {
        this.data1 = response.userinfo_list.data
        this.total = response.userinfo_list.total
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    checkAll(val) {
      this.nowSelectData = val
    },
    checkRightAll(val) {
      this.nowSelectRightData = val
    },
    // 向右
    handelSelect() {
      this.selectArr = this.handleConcatArr(this.selectArr, this.nowSelectData)
      this.handleRemoveTabList(this.nowSelectData, this.data1)
      this.nowSelectData = []
    },
    // 向左
    handleRemoveSelect() {
      this.data1 = this.handleConcatArr(this.data1, this.nowSelectRightData)
      this.handleRemoveTabList(this.nowSelectRightData, this.selectArr)
      this.nowSelectRightData = []
    },
    handleConcatArr(selectArr, nowSelectData) {
      let arr = []
      arr = arr.concat(selectArr, nowSelectData)
      return arr
    },
    handleRemoveTabList(isNeedArr, originalArr) {
      if (isNeedArr.length && originalArr.length) {
        for (let i = 0; i < isNeedArr.length; i++) {
          for (let k = 0; k < originalArr.length; k++) {
            /*
             * 代表搜索唯一性
            * */
            if (isNeedArr[i]['date'] === originalArr[k]['date']) {
              originalArr.splice(k, 1)
            }
          }
        }
      }
    },
    // 更新到设备
    update() {
      this.socketApi.sendSock({ 'cmd': 'update_accesstime', 'data': { 'ts': timestamp, 'tag_id': this.tag_id, 'clientids': this.clientid, 'group_users': this.group_users }}, this.getConfigResult)
    },
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      console.log(res)
      if (res.ret === '0') {
        if (res.cmd === 'get_accesstime') {
          this.loading = false
          this.AccessDate = res.data.AccessTime
          this.timeList_click(this.timeActive)
          if (res.data.AccessTime.length !== 0) {
            res.data.AccessTime.forEach((v, i) => {
              this.defaultList.forEach((m, n) => {
                if (v.AccessTimeid === n + 1) {
                  if (v.AccessTimeName === undefined) {
                    this.$set(this.defaultList, n, m + '')
                  } else {
                    this.$set(this.defaultList, n, m + v.AccessTimeName)
                  }
                }
              })
            })
          }
          return false
        }
        if (res.cmd === 'get_accessgroup') {
          this.loading2 = false
          this.GroupDate = res.data.AccessGroup
          this.groupList_click(this.groupActive)
          if (res.data.AccessGroup.length !== 0) {
            res.data.AccessGroup.forEach((v, i) => {
              this.defaultGroup.forEach((m, n) => {
                if (v.AccessGroupid === n) {
                  if (v.AccessGroupName === undefined) {
                    this.$set(this.defaultGroup, n, m + '')
                  } else {
                    this.$set(this.defaultGroup, n, m + v.AccessGroupName)
                  }
                }
              })
            })
          }
          return false
        }
        this.$message({
          message: '更新成功',
          type: 'success'
        })
        this.dialogVisible = false
        return
      } else {
        this.$message({
          message: '失败',
          type: 'warning'
        })
      }
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
   .time-slot{
    display: flex;
    height: 100%;
    .el-form-item{
      margin-bottom: 15px;
    }
  }
  .grid-content{
    height: 100%;
    background: #fff;
  }
  .el-tabs{
    height: 100%;
    overflow: auto;
  }
  .day{
    border:1px solid rgba(0,0,0,0.1);
    border-radius:3px 3px 0px 0px;
    height: 100%;
    background: #fff;
    .day-top{
      width: 100%;
      background:rgba(244,244,244,1);
      border-bottom:1px solid rgba(0,0,0,0.1);
      padding: 5px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .day-bot.day-list{
      overflow-y: auto;
      height: auto;
      .el-form{
        margin-top: 15px;
      }
    }
    .time-list{
      padding: 0;
      margin: 0;
      .time-list-item{
        padding: 10px;
        &:hover{
          background: rgba(#7BC0B5,0.1);
        }
        &.active{
          background: rgba(#7BC0B5,0.2);
        }
      }
    }
  }

  // 穿梭框
  .header{
    padding: 0 0 15px;
    text-align: left;
  }

  .tableDate{
    display: flex;
    height: calc(100vh - 193px);
    overflow: auto;
    .el-table{
      height: 100%;
    }
  }
  .opSetting{
    text-align: center;
    margin-top:30px;
  }
  .spacing{
    margin-top:10px;
  }
</style>
<style lang="scss">
  .device-access-control{
    .accessGroup{
      .el-form{
        .el-input{
          padding: 0 !important;
        }
      }
    }
    .el-dialog__header,.el-dialog__body{
      padding: 0 !important;
      margin: 0 !important;
    }
    .el-dialog__body{
      height: 100%;
    }
    .el-dialog__headerbtn{
      top:5px;
      right:5px;
      z-index: 1;
      .el-dialog__close{
        font-size: 30px;
      }
    }
    .el-container{
      height: 100%;
    }
    .el-tabs__content{
      height: calc(100% - 40px);
      .el-tab-pane{
        height: 100%;
        .day-list{
          height: calc(100% - 40px);
          overflow: auto;
        }
      }
    }
    .main-body{
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      .el-header{
        display: none;
      }
      .el-main{
        padding: 0 !important;
      }
      .el-footer{
        overflow: auto;
      }
    }
  }
</style>
