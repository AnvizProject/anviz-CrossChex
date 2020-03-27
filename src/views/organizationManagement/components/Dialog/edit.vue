<template>
  <div class="user-dialog">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="50%"
      center>
      <span slot="title" class="dialog-header">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <div>{{ dialogtitle }}</div>
        <el-button type="primary" @click="save">确 定</el-button>
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
                    <selectbox :options="options.User_option1" v-model="userform.Deptid"/>
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
                    <selectbox :options="options.User_option4" v-model="data"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>管理员组</div>
                  <div class="net-input-item">
                    <selectbox :options="options.User_option5" v-model="userform.admingroupid"/>
                  </div>
                </div>
              </div>
            </span>
            <span class="parameter-item">
              <h4>上传头像</h4>
              <div>头像</div>
            </span>
          </div>
          <div class="attendance">
            <h4>考勤统计相关</h4>
            <div>
              <el-checkbox v-model="userform.IsAtt" :true-label="1" :false-label="0" label="计算考勤"/>
              <el-checkbox v-model="userform.Isovertime" :true-label="1" :false-label="0" label="计算加班"/>
              <el-checkbox v-model="userform.Isrest" :true-label="1" :false-label="0" label="节假日休息"/>
            </div>
          </div>
          <div class="scheduling">
            <h4>新增人员默认排班方式</h4>
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
            <div class="parameter-item-wrap">
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
            </div>
            <div class="parameter-item-wrap">
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
            </div>
            <div class="parameter-item-wrap">
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
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
import selectbox from '@/components/select'
import options from '@/components/mixin/Options'
export default {
  components: {
    selectbox
  },
  mixins: [options],
  props: {
    rowdata: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      activeName: 'first',
      data: null,
      dialogtitle: '增加人员',
      isAdd: true,
      userform: {
        userid: '',
        UserCode: '',
        Name: '',
        Cardnum: '',
        Pwd: '',
        Deptid: null,
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
        EmployDate: ''
      }
    }
  },
  methods: {
    // 新增人员
    Adduser() {
      this.centerDialogVisible = true
      this.dialogtitle = '增加人员'
      this.isAdd = true
      this.userform = {
        userid: '',
        UserCode: '',
        Name: '',
        Cardnum: '',
        Pwd: '',
        Deptid: null,
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
        EmployDate: ''
      }
    },
    // 修改人员
    handleEdit() {
      this.centerDialogVisible = true
      this.dialogtitle = '修改人员'
      this.isAdd = false
      this.userform = Object.assign({}, this.userform, this.rowdata)
      console.log(this.userform)
    },
    save() {
      let action = ''
      if (this.isAdd) {
        action = 'interactive/Adduser'
      } else {
        action = 'interactive/userEdit'
      }
      this.$store.dispatch(action, this.userform).then(response => {
        this.centerDialogVisible = false
        this.$message({
          type: 'success',
          message: '新增成功!'
        })
        this.$emit('people_list')
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
      .user-dialog .dialog-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-button{
          padding: 6px 10px;
        }
      }
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
          border-bottom:1px solid #bdbdbd;
          margin: 0 0 20px 0;
          padding: 12px 0;
          color:#47a369;
        }
      }
      .net-input-item{
            width: 100%;
            height: 46px;
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
      .parameter-item-center{
        width: 48%;
        &:first-child{
          margin-right: 2%;
        }
        &:last-child{
          margin-left: 2%;
        }
        >div:first-child{
          font-weight: 600;
        }
      }
      .attendance,.scheduling{
        width: auto;
        height: auto;
        margin: 0 30px;
      }

</style>
