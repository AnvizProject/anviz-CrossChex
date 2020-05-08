<template >
  <div class="forget main-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>忘记考勤设置</span>
        <el-button type="primary" size="small" style="float: right;">增加</el-button>
      </div>
      <div class="text item">
        <div class="content-part">
          <el-form class="data-selection" auto-complete="on" label-position="left" label-width="25%">
            <el-form-item label="工作部门">
              <selectInput :options="dep_list" :default-props="defaultProps" :deptid ="Deptid"/>
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
              <el-input v-model="form.CheckType"/>
            </el-form-item>
            <el-form-item label="工作状态">
              <el-input v-model="form.WorkType"/>
            </el-form-item>
            <el-form-item label="考勤时间">
              <el-date-picker
                v-model="form.CheckTime"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import selectInput from '@/components/selectInput/selectTree'
export default {
  components: {
    selectInput
  },
  data() {
    return {
      personnel: [],
      Deptid: 1,
      dep_list: [],
      form: {
        userid: '0',
        CheckTime: '',
        CheckType: null,
        WorkType: null
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
  },
  methods: {
    // 部门列表
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        this.dep_list = response.dept_tree
      }).catch(error => {
        console.log(error)
      })
    }
    // // 人员列表
    // Dept_list() {
    //   this.form.userid = '0'
    //   this.$store.dispatch('interactive/userList', { Deptid: this.$refs.DeptGroup.Deptid }).then(response => {
    //     this.form.Deptid = this.$refs.DeptGroup.Deptid
    //     this.personnel = response.userinfo_list.data
    //     console.log(response)
    //     this.personnel.unshift({ userid: '0', Name: '全部人员' })
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // }
  }
}
</script>
<style lang="scss" scoped>
  .forget{
    .content-part{
      padding: 20px 0px;
      margin-bottom: 1em;
    }
    .file-selection-wrap{
      max-width: 900px;
      margin: 0 auto;
    }
    .el-form{
      max-width: 900px;
      margin: 0 auto;
      &.file-selection{
        display: flex;
        width: 60%;
        margin: 10px auto;
        align-items: center;
        span:first-child{
          width: 25%;
        }
        span:nth-child(2){
          width: 65%;
        }
        span:last-child{
          width: 10%;
          .el-button{
            width: 100%;
            height: 40px;
            background: #D5DEE4 !important;
            border-color: #D5DEE4 !important;
            border-radius:0;
          }
        }
      }
      &.data-selection{
        .el-form-item{
          width: 60%;
          margin: 10px auto;
        }
      }
      .data-base-selection{
        display: flex;
        width: 60%;
        margin: 10px auto;
        align-items: center;
        span:first-child{
          width: 25%;
        }
        span:last-child{
          width: 75%;
          .el-select{
            width: 100%;
          }
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
</style>
