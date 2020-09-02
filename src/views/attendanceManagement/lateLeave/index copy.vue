<template>
  <div class="lateLeave main-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>迟到早退设置</span>
        <el-button style="float: right;" size="small" type="primary">确定</el-button>
      </div>
      <div class="text item">
        <el-row :gutter="10">
          <el-col :span="12">
            <div class="grid-content bg-purple lateLeave-item">
              <div class="lateLeave-item-top">类型设置</div>
              <div class="lateLeave-item-bot">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-divider content-position="left">处理类型</el-divider>
                  <el-form-item>
                    <el-radio v-model="radio" :label="1">集体迟到</el-radio>
                    <el-radio v-model="radio" :label="2">集体早退</el-radio>
                  </el-form-item>
                  <el-divider content-position="left">忽略签到记录</el-divider>
                  <el-form-item label="从">
                    <el-col :span="10">
                      <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
                    </el-col>
                    <el-col :span="1" class="line">-</el-col>
                    <el-col :span="10">
                      <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;"/>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="到">
                    <el-col :span="10">
                      <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
                    </el-col>
                    <el-col :span="1" class="line">-</el-col>
                    <el-col :span="10">
                      <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;"/>
                    </el-col>
                  </el-form-item>
                  <el-divider content-position="left">修改后的签到时间</el-divider>
                  <el-form-item>
                    <el-col :span="10">
                      <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
                    </el-col>
                    <el-col :span="1" class="line">-</el-col>
                    <el-col :span="10">
                      <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;"/>
                    </el-col>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light lateLeave-item">
              <Container :total="total" @per_page="getData" @page="getData">
                <div slot="header" class="header-item">
                  <span>人员列表</span>
                  <span class="select-wrap">
                    <span><selectInput :placeholder="dept_point" :size="size" @DeptRow="people_list"/></span>
                    <span><selectbox :options="shiftList" v-model="Schid" :placeholder="shift_point" :size="size"/></span>
                  </span>
                </div>
                <div slot="main" class="main-item">
                  <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                      type="selection"
                      width="55"/>
                    <el-table-column
                      prop="userid"
                      label="考勤号"/>
                    <el-table-column
                      prop="Name"
                      label="姓名"/>
                  </el-table>
                </div>
              </Container>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>

</template>
<script>
import Container from '@/components/container'
import selectInput from '@/components/selectInput/selectTree'
import selectbox from '@/components/select'
export default {
  components: {
    Container,
    selectInput,
    selectbox
  },
  data() {
    return {
      radio: 1,
      form: {
        date1: '',
        date2: ''
      },
      option: [],
      dept_point: '部门检索',
      shift_point: '班次检索',
      size: 'mini',
      defaultProps: {
        value: 'Deptid',
        children: 'SubDept',
        label: 'DeptName'
      },
      shiftList: [],
      Deptid: null,
      Schid: null,
      total: null,
      id: null,
      per_page: {
        page: 1,
        perPage: 15
      },
      tableData: []
    }
  },
  watch: {
    Schid: function(val) {
      this.people_list({ Schid: val })
    }
  },
  mounted() {
    this.people_list()
    this.timelist()
  },
  methods: {
    getData(data) {
      console.log(1)
      console.log(data, '123')
      if (data !== undefined) {
        this.page_num = data
      }
      data.per_page = data.perPage
      data.Deptid = this.Deptid
      data.Schid = this.Schid
      this.people_list(data)
      console.log(data, '234')
    },
    // 人员列表
    people_list(data, num) {
      if (data !== undefined) {
        if (this.Deptid === null) {
          data.Deptid = data.Deptid
          this.Deptid = data.Deptid
        }
      }
      console.log(data)
      this.$store.dispatch('interactive/userList', data).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 班次列表
    timelist() {
      this.$store.dispatch('interactive/Shiftlist').then(response => {
        console.log(response)
        response.Schedule.forEach((v, k) => {
          this.shiftList.push({ value: v.Schid, label: v.Schname })
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .box-card{
    height: 100%;
    overflow: hidden;
    .grid-content{
      background: #fff;
    }
    .el-row{
      display: flex;
    }
    .lateLeave-item{
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 3px 3px 0px 0px;
      height: 100%;
      .lateLeave-item-top{
        width: 100%;
        line-height: 31px;
        background: #f4f4f4;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0 15px;
      }
      .header-item{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:first-child{
          margin-right: 10px;
        }
      }
      .select-wrap{
        display: flex;
        align-items: center;
      }
    }
    .line{
      text-align: center;
    }
    .el-radio-wrap{
      margin-bottom: 22px;
      span{
        display: inline-block;
      }
    }
  }
</style>
<style lang="scss">
  .lateLeave{
    .el-card__header{
      position: relative;
      z-index: 1;
    }
    .el-card__body{
      height: calc(100vh - 132px);
      overflow: auto;
    }
    .main-body{
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      box-shadow: none;
    }
  }
</style>
