<template>
  <div class="device-dialog">
    <el-dialog
      :visible.sync="DialogVisible"
      :show-close="showClo"
      width="40%"
      center>
      <span slot="title" class="dialog-header ">
        <el-button size="mini" @click="DialogVisible = false">取 消</el-button>
        <div>{{ dialogtitle }}</div>
        <el-button size="mini" type="primary" @click="save">确 定</el-button>
      </span>
      <div v-loading="loading" class="parameter">
        <span class="parameter-item">
          <h4>请假参数</h4>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>请假原因</div>
              <div class="net-input-item">
                <span class="icon-size icon-network"/>
                <span>
                  <el-input
                    v-model="form.Whys"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>请假类型</div>
              <div class="net-input-item">
                <span class="icon-size icon-network"/>
                <span>
                  <selectbox :options="leaveClass" v-model="form.LeaveClassid"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>所在部门</div>
              <div class="net-input-item">
                <span class="icon-size icon-network"/>
                <span>
                  <selectInput :options="dep_list" :default-props="defaultProps" :deptid="Deptid" @DeptRow="Dept_list"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>员工姓名</div>
              <div class="net-input-item">
                <span class="icon-size icon-network"/>
                <span>
                  <selectbox :options="personnel" v-model="form.userid"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>开始时间</div>
              <div class="net-input-item">
                <span class="icon-size icon-network"/>
                <span>
                  <el-date-picker
                    v-model="form.BeginTime"
                    type="datetime"
                    format="yyyy-MM-dd HH:mm"
                    value-format="yyyy-MM-dd HH:mm"
                    placeholder="选择开始时间"
                    @change="time"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>结束时间</div>
              <div class="net-input-item">
                <span class="icon-size icon-network"/>
                <span>
                  <el-date-picker
                    v-model="form.EndTime"
                    type="datetime"
                    format="yyyy-MM-dd HH:mm"
                    value-format="yyyy-MM-dd HH:mm"
                    placeholder="选择结束时间"/>
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import selectbox from '@/components/select'
import options from '@/components/mixin/device'
import selectInput from '@/components/selectInput/selectTree'
export default {
  components: {
    selectbox,
    selectInput
  },
  mixins: [options],
  props: {
    rowdata: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      DialogVisible: false,
      showClo: false,
      dialogtitle: '添加请假',
      loading: false,
      form: {
        Whys: '',
        BeginTime: '',
        EndTime: '',
        LeaveClassid: '',
        userid: '0'
      },
      leaveClass: [],
      dep_list: [],
      Deptid: 1,
      defaultProps: {
        id: 'Deptid',
        children: 'SubDept',
        label: 'DeptName'
      },
      personnel: [],
      type: null
    }
  },
  mounted() {
    this.getNowTime()
    this.fake_list()
    this.depart_list()
  },
  methods: {
    // 时间显示
    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() // 得到年份
      var month = now.getMonth() // 得到月份
      var date = now.getDate() // 得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate1 = `${year}-${month}-${date} 08:00`
      var defaultDate2 = `${year}-${month}-${date} 18:00`
      this.$set(this.form, 'BeginTime', defaultDate1)
      this.$set(this.form, 'EndTime', defaultDate2)
    },
    time(val) {
      console.log(val)
    },
    // 假类列表
    fake_list() {
      this.$store.dispatch('interactive/FakeList').then(response => {
        response.LeaveClass.forEach((v, k) => {
          this.leaveClass.push({ value: v.Classid, label: v.Classname })
        })
      }).catch(error => {
        console.log(error)
      })
    },
    // 部门列表
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        this.dep_list = response.dept_tree
        this.Dept_list(1)
      }).catch(error => {
        console.log(error)
      })
    },
    // 人员列表
    Dept_list(data) {
      this.personnel = []
      this.$store.dispatch('interactive/userList', { Deptid: data.id }).then(response => {
        this.personnel.unshift({ value: '0', label: '全部人员' })
        response.userinfo_list.data.forEach((v, k) => {
          this.personnel.push({ value: v.userid, label: v.Name })
        })
      }).catch(error => {
        console.log(error)
      })
    },
    // 请假新增
    addleave() {
      this.DialogVisible = true
      this.type = 1
      this.form = {
        Whys: '',
        BeginTime: '',
        EndTime: '',
        LeaveClassid: '',
        userid: '0'
      }
    },
    // 请假修改
    modifyleave() {
      this.DialogVisible = true
      this.type = 0
      this.form = Object.assign({}, this.form, this.rowdata)
    },

    // 确定
    save() {
      console.log(this.form)
      let action = ''
      if (this.type === 1) {
        action = 'interactive/AddLeave'
      } else {
        action = 'interactive/UpdateLeave'
      }
      this.$store.dispatch(action, this.form).then(response => {
        if (this.type === 1) {
          this.$message({
            message: '新增成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }
        this.DialogVisible = false
        this.$parent.leave_list()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .device-dialog .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .parameter{
    display: flex;
  }
  .parameter-item{
    background:#fff;
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
    border-radius:5px;
    width: 100%;
    padding: 0 10px 10px;
    h4{
      border-bottom:1px solid #bdbdbd;
      margin: 0 0 20px 0;
      padding: 12px 0;
      color:#47a369;
    }
  }
  .net-input{
    margin: 0 20px;
    }
    .net-input-item{
      width: 100%;
      height: 46px;
      display: flex;
      align-items: center;
      border-bottom:1px solid #999;
      margin-top: 14px;
      &:last-child{
        margin-bottom: 30px;
      }
    .icon-size{
      color:#47a369;
      width: 12%;
      flex-shrink: 0;
      flex-basis: 12%;
    }
    span:last-child{
      width: 88%;
      flex-basis: 88%;
      flex-shrink: 0;
    }
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

</style>
