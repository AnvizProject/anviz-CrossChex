<template >
  <div class="forget main-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>忘记考勤设置</span>
        <el-button type="primary" size="small" style="float: right;" @click="add">增加</el-button>
      </div>
      <div class="text item">
        <div class="content-part">
          <el-form class="data-selection" auto-complete="on" label-position="left" label-width="25%">
            <el-form-item label="工作部门">
              <selectInput v-if="dep_list.length !== 0" ref="DeptGroup" :options="dep_list" :default-props="defaultProps" :deptid ="Deptid" @DeptRow="dept_id"/>
            </el-form-item>
            <el-form-item label="员工">
              <el-select v-model="form.userid" placeholder="人员">
                <el-option
                  v-for="item in personnel"
                  :key="item.userid"
                  :label="item.Name"
                  :value="item.userid"/>
              </el-select>
            </el-form-item>
            <el-form-item label="考勤状态">
              <selectbox :options="forget_options.value1" v-model="form.CheckType"/>
            </el-form-item>
            <el-form-item label="工种类型">
              <selectbox :options="forget_options.value2" v-model="form.WorkType"/>
            </el-form-item>
            <el-form-item label="考勤时间">
              <el-date-picker
                v-model="form.CheckTime"
                type="datetime"
                placeholder="选择日期时间"
                value-format="yyyy-MM-dd HH:mm:ss"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import selectInput from '@/components/selectInput/selectTree'
import selectbox from '@/components/select'
export default {
  components: {
    selectbox,
    selectInput
  },
  data() {
    return {
      personnel: [],
      Deptid: 1,
      dep_list: [],
      forget_options: {
        value1: [],
        value2: []
      },
      form: {
        userid: '0',
        CheckTime: '',
        CheckType: 0,
        WorkType: 1
      },
      defaultProps: {
        id: 'Deptid',
        children: 'SubDept',
        label: 'DeptName'
      }
    }
  },
  mounted() {
    this.depart_list()
    this.status_index()
    this.getJobSetting()
    this.Dept_list()
  },
  methods: {
    // 部门id
    dept_id(data) {
      this.Deptid = data.id
      console.log(data)
      this.Dept_list()
    },
    // 部门列表
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        this.dep_list = response.dept_tree
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 人员列表
    Dept_list() {
      this.form.userid = '0'
      this.$store.dispatch('interactive/userList', { Deptid: this.Deptid }).then(response => {
        this.personnel = response.userinfo_list.data
        this.form.userid = response.userinfo_list.data[0].userid
        // this.personnel.unshift({ userid: '0', Name: '全部人员' })
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 考勤状态
    status_index() {
      this.$store.dispatch('interactive/Status_index', {}).then(response => {
        response.Status.forEach((v, k) => {
          this.forget_options.value1.push({ value: v.StatusID, label: v.StatusText })
        })
      }).catch(error => {
        console.log(error)
      })
    },
    // 工种类型
    getJobSetting() {
      this.$store.dispatch('interactive/getJobList', {}).then(response => {
        console.log(response)
        response.WorkCode.forEach((v, k) => {
          this.forget_options.value2.push({ value: v.WorkID, label: v.WorkName })
        })
      }).catch(error => {
        console.log(error)
      })
    },
    // 增加
    add() {
      console.log(this.form)
      this.$store.dispatch('interactive/Forget_check', (this.form)).then(response => {
        console.log(response)
        this.$message({
          message: '设置成功',
          type: 'success'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .forget{
    .content-part{
      padding: 20px 0px;
      margin-bottom: 1em;
    }
    .el-form{
      max-width: 900px;
      margin: 0 auto;
      &.data-selection{
        .el-form-item{
          width: 60%;
          margin: 10px auto;
        }
      }
    }
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 100%;
  }
  .el-date-editor{
    &.el-input{
      width: 100% !important;
    }
  }
</style>
