<template>
  <div class="attendancestatus main-content">
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <p class="add-button"><el-button size="mini" icon="el-icon-plus" @click="add_group">Device Group</el-button></p>
          <ul>
            <li v-for="(item, index) in group_list" :key="index" :class="{bg:index==isactive}" @click="myclick(index)"><span>{{ item.devicegroupname }}</span><span class="el-icon-arrow-right"/></li>
          </ul>
          <div v-show="showPrise" class="foot">
            <el-button type="primary" size="mini" @click="modify">修改</el-button>
            <el-button type="danger" size="mini" @click="group_del">删除</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ group_title }}</span>
            </div>
            <div class="text item">
              <el-carousel :loop="false" :autoplay="false" height="200px" indicator-position="none" arrow="always">
                <el-carousel-item v-for="item in 5" :key="item">
                  <div class="device-list">
                    <p class="el-icon-alarm-clock"/>
                    <p>{{ item }}</p>
                  </div>
                  <div class="device-list">
                    <p class="device-icon el-icon-alarm-clock"/>
                    <p>{{ item }}</p>
                  </div>
                  <div class="device-list">
                    <p class="el-icon-alarm-clock"/>
                    <p>{{ item }}</p>
                  </div>
                  <div class="device-list">
                    <p class="el-icon-alarm-clock"/>
                    <p>{{ item }}</p>
                  </div>
                  <div class="device-list">
                    <p class="el-icon-alarm-clock"/>
                    <p>{{ item }}</p>
                  </div>
                  <div class="device-list">
                    <p class="el-icon-alarm-clock"/>
                    <p>{{ item }}</p>
                  </div>
                </el-carousel-item>
              </el-carousel>
              <p><el-button type="primary" size="mini" @click="update_status">更新考勤状态到终端设备</el-button></p>
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
          </el-card>
        </div>
      </el-col>
    </el-row>
    <Dialog ref="Dialog" :de_data="de_data" :devicegroupid="devicegroupid"/>
  </div>
</template>
<script>
import Dialog from './components/Dialog/groupEdit'
export default {
  components: {
    Dialog
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
    this.All_groups_list()
    this.status_index()
  },
  methods: {
    // 所有组列表
    All_groups_list() {
      this.$store.dispatch('interactive/All_groups_list', {}).then(response => {
        this.group_list = response.DeviceGroup
        this.group_title = response.DeviceGroup[0].devicegroupname
      }).catch(error => {
        console.log(error)
      })
    },
    // 所有组列表点击
    myclick(index) {
      this.showPrise = true
      this.devicegroupid = this.group_list[index].devicegroupid
      this.group_title = this.group_list[index].devicegroupname
      this.isactive = index
    },
    // 组增加
    add_group() {
      this.$refs.Dialog.dialogVisible = true
      this.$refs.Dialog.dialogtitle = '新增组名'
      this.de_data = 1
    },
    // 组名修改
    modify() {
      this.$refs.Dialog.dialogVisible = true
      this.$refs.Dialog.dialogtitle = '修改组名'
      this.$refs.Dialog.form.devicegroupname = this.group_title
      this.de_data = 0
    },
    // 所有组删除
    group_del() {
      this.$confirm('是否确定删除此组名?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('interactive/Delete_groups_list', { devicegroupid: this.devicegroupid }).then(response => {
          this.All_groups_list()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch((error) => {
          console.log(error)
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    status_index() {
      this.$store.dispatch('interactive/Status_index', {}).then(response => {
        this.tableData = response.Status
      }).catch(error => {
        console.log(error)
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
