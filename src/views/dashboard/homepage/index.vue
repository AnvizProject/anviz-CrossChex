<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="data-wrap grid-content bg-purple">
          <span class="icon icon-user-group"/>
          <span>
            <p class="title">员工数</p>
            <h3 class="num">{{ user_num }}</h3>
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="data-wrap grid-content bg-purple">
          <span class="icon icon-edit"/>
          <span>
            <p class="title">当天签到数</p>
            <h3 class="num">{{ checkinout_num }}</h3>
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="data-wrap grid-content bg-purple">
          <span class="icon icon-accesses"/>
          <span>
            <p class="title">设备数</p>
            <h3 class="num">{{ finger_client_num }}</h3>
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="data-wrap grid-content bg-purple">
          <span class="icon icon-ad"/>
          <span>
            <p class="title">设备在线数</p>
            <h3 class="num">{{ finger_client_online_num }}</h3>
          </span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="chart grid-content bg-purple-dark">
          <el-row :gutter="20">
            <el-col :span="14">
              <div class="chart-item grid-content bg-purple">
                <ve-line :data="chartData"/>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="chart-item grid-content bg-purple-light">
                <ve-pie :data="chartData"/>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div >
        <el-col :span="24">
          <el-container>
            <el-main>
              <el-table
                :data="tableData"
                border
                empty-text="今日暂无打卡记录"
                style="width: 100%">
                <el-table-column
                  prop="CheckTime"
                  label="签到日期"
                  width="180"/>
                <el-table-column
                  prop="Name"
                  label="姓名"
                  width="180"/>
                <el-table-column
                  prop="ClientName"
                  label="所在机器"/>
              </el-table>
            </el-main>
            <el-footer>
              <el-pagination
                :current-page="page"
                :page-sizes="[15, 20, 50, 100, 200, 500, 1000, 5000]"
                :page-size="per_page"
                :total="Total"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"/>
            </el-footer>
          </el-container>

        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: function() {
    return {
      chartData: {
        columns: ['date', 'checkinout_num'],
        rows: []
      },
      user_num: null,
      checkinout_num: null,
      finger_client_num: null,
      finger_client_online_num: null,
      tableData: [],
      Total: null,
      beginTime: '',
      endTime: '',
      page: 1,
      per_page: 15 // 每页条数
    }
  },
  mounted() {
    this.Statistical_data()
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month < 10) {
      month = '0' + month
    }
    if (strDate < 10) {
      strDate = '0' + strDate
    }
    this.beginTime = year + '-' + month + '-' + strDate
    this.endTime = year + '-' + month + '-' + strDate
    this.getData(this.page, this.per_page)
  },
  methods: {
    Statistical_data() {
      this.$store.dispatch('interactive/Data_manage', { cmd: 'stat' }).then(response => {
        console.log(response)
        this.chartData.rows = response.checkinout_stat
        this.user_num = response.user_num
        this.checkinout_num = response.checkinout_num
        this.finger_client_num = response.finger_client_num
        this.finger_client_online_num = response.finger_client_online_num
      }).catch(error => {
        console.log(error)
      })
    },
    getData(page, per_page) {
      // console.log(page, per_page)
      this.$store.dispatch('interactive/checkinout', {
        beginTime: this.beginTime,
        endTime: this.endTime,
        page: page,
        per_page: per_page }).then(response => {
        this.tableData = response.Checkinout
        this.Total = response.Checkinouts.total
        this.currentPage = response.Checkinouts.current_page
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    handleSizeChange(val) {
      this.per_page = val
      this.getData(this.page, val)
    },
    handleCurrentChange(val) {
      this.page = val
      this.getData(val, this.per_page)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    padding: 15px 50px;
    width: 100%;
    height: 100%;
    overflow: auto;
    .el-row{
      .data-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        padding: 10px 30px;
        border-radius: 6px;
      }
      .icon{
        font-size: 50px;
      }
      .icon-user-group{
        color:#40c9c6;
      }
      .icon-edit{
        color:#36a3f7
      }
      .icon-accesses{
        color:#2c77e5;
      }
      .icon-ad{
        color:#34bfa3
      }
      .title{
        color: rgba(0,0,0,.45);
        margin-bottom: 5px;
        font-weight: 600;
      }
      .num{
        font-weight: 700;
        text-align: center;
      }
      .chart-item{
        background: #fff;
        border-radius: 6px;
        padding: 15px;
        margin: 15px 0;
      }
    }
    .el-container {
      border-radius: 6px;
      background: #fff;
      overflow: hidden;
      .el-main{
        padding: 0;
      }
      .el-footer{
        height: auto !important;
        padding: 0;
      }
    }
  }
}
</style>
