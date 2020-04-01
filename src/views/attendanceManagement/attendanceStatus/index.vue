<template>
  <div class="attendancestatus main-content">
    <el-container>
      <el-header>
        <div class="con-item">
          <div class="header-item"><el-button type="primary" size="mini" @click="update_status">更新考勤状态到终端设备</el-button></div>
          <div class="header-item"><Devicegroup/></div>
        </div>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-table
                ref="multipleTable"
                :data="tableData"
                border
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                  type="selection"/>
                <el-table-column
                  prop="StatusID"
                  label="状态编号"/>
                <el-table-column
                  prop="StatusChar"
                  label="导出时表示字符"/>
                <el-table-column
                  prop="StatusText"
                  label="状态描述说明"
                  show-overflow-tooltip/>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <Dialog ref="Dialog" :de_data="de_data" :devicegroupid="devicegroupid"/>
  </div>
</template>
<script>
import Dialog from './components/Dialog/groupEdit'
import Devicegroup from '@/components/Devicegroup'
export default {
  components: {
    Dialog,
    Devicegroup
  },
  data() {
    return {
      group_list: [],
      showPrise: false,
      de_data: null,
      devicegroupid: null,
      group_title: '',
      isactive: 0,
      tableData: [],
      multipleSelection: []
    }
  },
  mounted() {
    this.status_index()
  },
  methods: {
    // 考勤状态列表
    status_index() {
      this.$store.dispatch('interactive/Status_index', {}).then(response => {
        this.tableData = response.Status
        console.log(response)
      }).catch(() => {
        console.log('error')
      })
    },
    // 更新考勤状态到终端设备
    getConfigResult(res) {
      // alert(1)
      // 接收回调函数返回数据的方法
      console.log(res)
    },
    update_status() {
      // alert(2)
      // 【agentData：发送的参数；this.getConfigResult：回调方法】
      this.socketApi.sendSock(JSON.parse('{"cmd":"update_status"}'), this.getConfigResult)
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-row{
    display: flex;
    height: 100%;
    .grid-content{
      height: 100%;
      background: #fff;
      border-radius: 4px;
      box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
      overflow: auto;
      .add-button{
        margin: 0;
        padding: 28px 0;
        text-align: center;
        .el-button{
          background:linear-gradient(90deg,rgba(77,219,168,1) 0%,rgba(61,188,143,1) 100%);
          box-shadow:0px 0px 12px 0px rgba(168,231,211,0.73);
          border-radius:4px;
          border:none;
          color:#fff;
        }
      }
      .el-card.is-always-shadow{
        height: 100%;
        overflow: auto;
      }
      ul{
        list-style: none;
        padding: 0;
        margin: 0;
        height: calc(100% - 131px);
        overflow: auto;
        &::-webkit-scrollbar {
          display:none
        }
        li{
          border-bottom: 1px solid rgba(221,221,221,0.3);
          padding: 5px 10px;
          display: flex;
          justify-content: space-between;
          &:hover{
            background: rgba(123,192,181,0.2);
          }
        }
        .bg{
          background: rgba(123,192,181,0.2);
        }
      }
      .foot{
        text-align: center;
        padding: 10px 0;
      }
    }
  }
  .el-carousel__item{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EBEBEBFF;
    .device-list{
      width: 14%;
      max-width: 128px;
      height: 160px;
      margin-right: 1%;
      margin-left: 1%;
      border-radius:4px;
      box-shadow: 0 0 10px 1px #dddee1;
      text-align: center;
      vertical-align: middle;
      .device-icon{
        font-size: 60px;
        margin-top:25px;
        margin-bottom: 0;
      }
    }
  }
  .el-card .el-button{
    width: 190px;
  }
</style>
