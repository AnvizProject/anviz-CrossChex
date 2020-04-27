<template>
  <div class="user-dialog">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="50%"
      center>
      <span slot="title" class="dialog-header">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>{{ dialogtitle }}</div>
        <el-button size="mini" type="primary" @click="save">确 定</el-button>
      </span>
      <el-tabs v-model="activeName">
        <el-tab-pane label="基本资料" name="first">
          <div class="parameter">
            <span class="parameter-item">
              <h4>基本资料</h4>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>考勤号</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="userform.userid"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>编号</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="userform.UserCode"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>姓名</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="userform.Name"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>卡号</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="userform.Cardnum"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>密码</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="userform.Pwd"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>部门</div>
                  <div class="net-input-item">
                    <selectInput :options="option" :default-props="defaultProps" :deptid ="userform.Deptid" @DeptRow="dept_id"/>
                  </div>
                </div>
              </div>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>组号</div>
                  <div class="net-input-item">
                    <selectbox :options="options.User_option2" v-model="userform.Groupid"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>比对方式</div>
                  <div class="net-input-item">
                    <selectbox :options="options.User_option3" v-model="userform.UserFlag"/>
                  </div>
                </div>
              </div>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>用户类型</div>
                  <div class="net-input-item">
                    <selectbox :options="options.User_option4" v-model="usertype"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>管理员组</div>
                  <div class="net-input-item">
                    <selectbox :disabled="usertype!==2?true:false" :options="options.User_option5" v-model="userform.admingroupid"/>
                  </div>
                </div>
              </div>
            </span>
            <span class="parameter-item">
              <h4>上传头像</h4>
              <div class="select" title="点击上传头像">
                <input id="filed" type="file" hidden="" @change="filePreview">
                <p @click="selectImg()">
                  <span v-if="textHide" class="icon el-icon-plus upload_img"/>
                  <img :src="userform.Picture" >
                </p>
              </div>
            </span>
          </div>
          <div class="attendance">
            <h4 class="mg15-up-down">考勤统计相关</h4>
            <div>
              <el-checkbox v-model="userform.IsAtt" :true-label="1" :false-label="0" label="计算考勤"/>
              <el-checkbox v-model="userform.Isovertime" :true-label="1" :false-label="0" label="计算加班"/>
              <el-checkbox v-model="userform.Isrest" :true-label="1" :false-label="0" label="节假日休息"/>
            </div>
          </div>
          <div class="scheduling">
            <h4 class="mg15-up-down">新增人员默认排班方式</h4>
            <div>
              <el-radio-group v-model="userform.ClassFlag">
                <el-radio :label="0">不排班</el-radio>
                <el-radio :label="1">正常排班</el-radio>
                <el-radio :label="2">智能排班</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自定义字段" name="second">
          <div class="custom">
            <h4>自定义字段</h4>
            <div class="box">
              <!-- <div class="parameter-item-wrap"> -->
              <div class="parameter-item-center">
                <div>性别</div>
                <div class="net-input-item">
                  <el-input
                    v-model="userform.Sex"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>工作职务</div>
                <div class="net-input-item">
                  <el-input
                    v-model="userform.Duty"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <!-- </div> -->
              <!-- <div class="parameter-item-wrap"> -->
              <div class="parameter-item-center">
                <div>联系电话</div>
                <div class="net-input-item">
                  <el-input
                    v-model="userform.Mobile"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>出生日期</div>
                <div class="net-input-item">
                  <el-input
                    v-model="userform.Birthday"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <!-- </div> -->
              <!-- <div class="parameter-item-wrap"> -->
              <div class="parameter-item-center">
                <div>聘用日期</div>
                <div class="net-input-item">
                  <el-input
                    v-model="userform.EmployDate"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>联系地址</div>
                <div class="net-input-item">
                  <el-input
                    v-model="userform.Address"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div v-for="(v,k) in CustomField" :key="k" class="parameter-item-center">
                <div>{{ v }}</div>
                <div class="net-input-item">
                  <el-input
                    v-model="userform.OtherInfo[v]"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
            <!-- </div> -->
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="指纹登记" name="third">
          <div
            v-loading="loading"
            :element-loading-text="register_title"
            class="custom"
            element-loading-spinner="el-icon-loading"
            element-loading-background="hsla(0,0%,100%,.9)">
            <div class="register">
              <h4>设备选择</h4>
              <el-form ref="form" :model="userform" label-width="80px">
                <el-form-item label="网络设备">
                  <el-select v-model="userform.net" placeholder="请选择">
                    <el-option v-for="(v,k) in fing" :key="k" :label="v.ClientName" :value="v.Clientid"/>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div class="register">
              <h4>指纹登记</h4>
              <div class="register-item">
                <div class="register-slide">
                  <span>第一枚指纹</span>
                  <span :style="{color:word1_color}">{{ word1 }}</span>
                  <span><el-button size="mini" type="primary" @click="Register(1)">登记</el-button></span>
                </div>
                <div class="register-slide">
                  <span>第二枚指纹</span>
                  <span :style="{color:word2_color}">{{ word2 }}</span>
                  <span><el-button size="mini" type="primary" @click="Register(2)">登记</el-button></span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="人脸登记" name="fourth">
          <div class="custom">
            <div class="register">
              <h4>人脸设备选择</h4>
              <div class="register-item">
                <div class="register-slide">
                  <span>
                    <el-form ref="form" :model="userform" label-width="100px">
                      <el-form-item label="Facepass7">
                        <el-select v-model="userform.face" placeholder="请选择">
                          <el-option label="区域一" value="shanghai"/>
                          <el-option label="区域二" value="beijing"/>
                        </el-select>
                      </el-form-item>
                    </el-form>
                  </span>
                  <span><el-button size="mini" type="primary" class="people-face">登记</el-button></span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
import selectbox from '@/components/select'
import options from '@/components/mixin/Options'
import selectInput from '@/components/selectInput/selectTree'
var timestamp = Date.parse(new Date()) / 1000
export default {
  components: {
    selectbox,
    selectInput
  },
  mixins: [options],
  props: {
    rowdata: {
      type: Object,
      default: function() {
        return {}
      }
    },
    option: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      activeName: 'first',
      usertype: 1,
      dialogtitle: '增加人员',
      isAdd: true,
      textHide: true,
      fing: [],
      humanFace: [],
      word1_color: '#000',
      word1: '未登记',
      word2_color: '#000',
      word2: '未登记',
      fingerid: null,
      two: 1,
      register_title: '登记中...',
      loading: false,
      userform: {
        userid: '',
        UserCode: '',
        Name: '',
        Cardnum: '',
        Pwd: '',
        Deptid: 1,
        Groupid: null,
        UserFlag: null,
        admingroupid: null,
        IsAtt: 1,
        Isovertime: 1,
        Isrest: 1,
        ClassFlag: 1,
        Sex: '',
        Duty: '',
        Mobile: '',
        Address: '',
        Birthday: '',
        EmployDate: '',
        Picture: '',
        net: '1',
        face: null,
        FingerInfo: {},
        OtherInfo: {
          demo: ''
        }
      },
      defaultProps: {
        id: 'Deptid',
        children: 'SubDept',
        label: 'DeptName'
      },
      CustomField: []
    }
  },
  mounted() {
    this.register_list()
    this.getField()
  },
  methods: {
    // 获取自定义字段
    getField() {
      this.$store.dispatch('interactive/Base_para_details', {}).then(response => {
        this.CustomField = response.BasePara.CustomField
      }).catch(() => {
        console.log('error')
      })
    },
    // 新增人员
    Adduser() {
      this.Last()
      this.centerDialogVisible = true
      this.showClo = false
      this.activeName = 'first'
      this.usertype = 1
      this.dialogtitle = '增加人员'
      this.isAdd = true
      this.textHide = true
      this.humanFace = []
      this.word1_color = '#000'
      this.word1 = '未登记'
      this.word2_color = '#000'
      this.word2 = '未登记'
      this.fingerid = null
      this.two = 1
      this.register_title = '登记中...'
      this.loading = false
      this.userform = {
        userid: '',
        UserCode: '',
        Name: '',
        Cardnum: '',
        Pwd: '',
        Deptid: 1,
        Groupid: null,
        UserFlag: null,
        admingroupid: null,
        IsAtt: 1,
        Isovertime: 1,
        Isrest: 1,
        ClassFlag: 1,
        Sex: '',
        Duty: '',
        Mobile: '',
        Address: '',
        Birthday: '',
        EmployDate: '',
        Picture: '',
        net: '1',
        face: null,
        FingerInfo: {},
        OtherInfo: {}
      }
    },
    dept_id(data) {
      this.userform.Deptid = data.id
    },
    // 修改人员
    handleEdit() {
      this.centerDialogVisible = true
      this.dialogtitle = '修改人员'
      this.isAdd = false
      this.userform = Object.assign({}, this.userform, this.rowdata)
      if (this.userform.OtherInfo === null) {
        this.userform.OtherInfo = '{}'
      } else {
        this.userform.OtherInfo = JSON.parse(this.userform.OtherInfo)
      }
      if (this.userform.admingroupid > 0) {
        this.usertype = 2
      }
      this.people_detail()
    },
    // 上传头像
    selectImg: function() {
      document.getElementById('filed').click()
    },
    filePreview(e) {
      const _this = this
      var files = e.target.files[0]
      if (!e || !window.FileReader) return // 判断是否支持FileReader
      const reader = new FileReader()
      reader.readAsDataURL(files) // 文件转换
      reader.onloadend = function() {
        _this.userform.Picture = this.result
        _this.textHide = false
      }
    },
    // 人员详情
    people_detail() {
      this.$store.dispatch('interactive/userDetail', this.userform.userid).then(response => {
        this.userform.Picture = response.userinfo.Picture
        this.textHide = false

        if (response.userinfo.FingerInfo.finger1 !== '') {
          this.word1_color = '#3CA060'
          this.word1 = '已登记'
        }
        if (response.userinfo.FingerInfo.finger2 !== '') {
          this.word2_color = '#3CA060'
          this.word2 = '已登记'
        }
        // console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 指纹人脸登记设备列表
    register_list() {
      this.$store.dispatch('interactive/Terminal_list', { getClientsByType: 1 }).then(response => {
        this.fing = response.FingerClients
        this.humanFace = response.FaceClients
        // console.log(response)
      }).catch(() => {
        console.log('error')
      })
    },
    // 最大id人员
    Last() {
      this.$store.dispatch('interactive/Last', {}).then(response => {
        if (response.last_userinfo.length === 0) {
          this.userform.userid = 1
          this.userform.UserCode = 1
        } else {
          this.userform.userid = Number(response.last_userinfo[0].userid) + 1
          this.userform.UserCode = Number(response.last_userinfo[0].UserCode) + 1
        }
      }).catch(() => {
        console.log('error')
      })
    },
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      // console.log(this.fingerid)
      // console.log(res)
      if (res.ret === '10000') {
        return
      }
      if (res.ret === '0') {
        this.$message({
          message: '成功',
          type: 'success'
        })
        this.loading = false
        if (res.cmd === 'enroll_finger' && this.fingerid === 1) {
          this.userform.FingerInfo.finger1 = res.data.template
          this.word1_color = '#3CA060'
          this.word1 = '已登记'
        } else if (res.cmd === 'enroll_finger' && this.fingerid === 2) {
          this.userform.FingerInfo.finger2 = res.data.template
          this.word2_color = '#3CA060'
          this.word2 = '已登记'
        }
        this.two = 2
        return
      } else {
        this.$message({
          message: '失败',
          type: 'warning'
        })
        this.register_title = '登记失败，请重新登记'
        this.loading = false
      }
    },
    // 登记指纹
    Register(fingid) {
      this.register_title = '登记中...'
      this.fingerid = fingid
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.register_title = '登记超时，请重新登记！'
      }, 30000)
      this.socketApi.sendSock(JSON.parse('{"cmd":"enroll_finger", "data": {"ts":"' + timestamp + '","clientid": "' + Number(this.userform.net) + '","userid":"' + this.userform.userid + '","fingerid": "' + fingid + '"}}'), this.getConfigResult)
    },
    // 确定
    save() {
      let action = ''
      if (this.isAdd) {
        action = 'interactive/Adduser'
      } else {
        action = 'interactive/userEdit'
      }
      this.userform.OtherInfo = JSON.stringify(this.userform.OtherInfo)
      // return
      this.$store.dispatch(action, this.userform).then(response => {
        if (this.two === 1) {
          this.$message({
            type: 'success',
            message: '成功!'
          })
          this.centerDialogVisible = false
        } else {
          this.$confirm('是否将指纹记录上传到设备', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$emit('upload_infor')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            })
          })
        }
        this.$emit('people_list')
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .parameter{
    display: flex;
  }
  .parameter-item{
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
    border-radius:5px;
    padding: 0 10px 10px;
    &:first-child{
      width: 60%;
      margin-right: 1%;
    }
    &:last-child{
      width: 38%;
      margin-left: 1%;
    }
    h4{
      border-bottom:1px solid #bdbdbd;
      margin: 0 0 20px 0;
      padding: 12px 0;
      color:#47a369;
    }
  }

  .custom{
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
    border-radius:5px;
    padding: 0 10px 10px;
    h4{
      width: 100%;
      border-bottom:1px solid #bdbdbd;
      margin: 0 0 20px 0;
      padding: 12px 0;
      color:#47a369;
    }
    .register{
      >.el-form{
        width: 50%;
        margin-left: 20px;
      }
      .register-item{
        width: 50%;
        margin-left:20px;
        .register-slide{
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          >span{
            .el-form-item{
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  .net-input-item{
    width: 100%;
    height: 41px;
    display: flex;
    align-items: center;
    border-bottom:1px solid #999
  }
  .parameter-item-wrap{
    display: flex;
    align-content: center;
    width: 100%;
    margin-bottom: 10px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  .box{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .parameter-item-center{
    width: 48%;
    margin-bottom: 10px;
    // &:first-child{
    //   margin-right: 2%;
    // }
    // &:last-child{
    //   margin-left: 2%;
    // }
    &:nth-child(odd){
      margin-right: 4%
    }
    >div:first-child{
      font-weight: 600;
      margin-bottom: 6px;
    }
  }
  .attendance,.scheduling{
    width: auto;
    height: auto;
    margin: 0 30px;
  }
  .select{
    text-align: center;
    width: 60%;
    margin: 0 auto;
    height: auto;
    .upload_img{
      width: 100px;
      height: 100px;
      line-height: 100px;
      border-radius: 5px;
      border: 1px solid #eee;
      font-size:20px;
    }
    img{
      width: 100%;
      height: auto;
    }
  }
  .people-face{
    text-decoration:line-through
  }
</style>
