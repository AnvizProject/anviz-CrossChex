<template>
  <el-container class="device-manage  main-content">
    <el-header height="auto">
      <div class="top">
        <div class="top-item">
          <span>
            <span class="search-title">开始时间</span>
            <span class="net-input-item">
              <el-date-picker
                v-model="form.value1"
                type="date"
                size="mini"
                placeholder="选择日期"/>
            </span>
          </span>
          <span>
            <span class="search-title">结束时间</span>
            <span class="net-input-item">
              <el-date-picker
                v-model="form.value2"
                type="date"
                size="mini"
                placeholder="选择日期"/>
            </span>
          </span>
          <span>
            <span class="search-title">考勤号</span>
            <span class="net-input-item">
              <el-input
                v-model="form.Deptid"
                placeholder="请输入"
                size="mini"
                clearable
                class="input-box"/>
            </span>
          </span>
          <span>
            <el-button type="primary" size="mini" icon="el-icon-search" @click="query">读取指定记录</el-button>
            <el-button type="info" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
          </span>
        </div>
      </div>
      <div class="fun-button">
        <el-button type="primary" size="mini" @click="Adddevice">增加终端</el-button>
        <el-button type="primary" size="mini" @click="editdevice">修改终端</el-button>
        <el-button type="primary" size="mini" @click="deletedevice">删除终端</el-button>
        <el-button type="primary" size="mini" @click="sync_time">同步时间</el-button>
        <el-button type="primary" size="mini">终端参数</el-button>
        <el-button type="primary" size="mini">打铃设置</el-button>
        <el-button type="primary" size="mini" @click="read_new_record">读取新记录</el-button>
        <el-button type="primary" size="mini" @click="read_all_record">读取全部记录</el-button>
        <el-button type="primary" size="mini">备份人员</el-button>
        <el-button type="primary" size="mini">启用实时</el-button>
        <el-button type="primary" size="mini">禁用实时</el-button>
      </div>

    </el-header>
    <el-main>
      <div class="main-slide">
        <div class="main-slide-top">
          <el-row :gutter="5">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <ul>
                  <li v-for="(item, index) in group_list" :key="index" :class="{bg:index==isactive}" @click="myclick(index)"><span>{{ item.devicegroupname }}</span><span class="el-icon-arrow-right"/></li>
                </ul>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <el-carousel :loop="false" :autoplay="false" height="100%" indicator-position="none" arrow="always">
                  <el-carousel-item>
                    <div v-for="(item,index) in terminal_list" :key = "index" :class="{terminal_border:index==terminal_active}" class="device-list" @click="terminal(index)">
                      <p class="device-icon el-icon-alarm-clock"/>
                      <p>{{ item.ClientName }}</p>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <Dialog ref="Dialog" :device_list="device_list" :de_data="de_data" @Terminal_list="Terminal_list"/>
    </el-main>
  </el-container>
</template>
<style scoped src="@/styles/list-top.scss"></style>
<script>
import Dialog from '../components/Dialog/edit'
// const id = 1000
var timestamp = Date.parse(new Date()) / 1000
export default {
  name: 'DeviceManagement',
  components: {
    Dialog
  },
  data() {
    return {
      form: {
        value1: '',
        value2: '',
        Deptid: ''
      },
      details: {},
      ClientNumbers: null,
      de_data: null,
      group_list: [],
      device_list: [],
      isactive: 0,
      devicegroupid: null,
      terminal_active: 0,
      terminal_list: [],
      clientid: null,
      Deptid: null
    }
  },
  computed: {
    // 部门列表计算
    treeData() {
      const treeData = []
      this.list.forEach((v, k) => {
        treeData.push({ label: v.DeptName, children: [], Deptid: v.Deptid, SupDeptid: v.SupDeptid })
      })
      return treeData
    }
  },
  mounted: function() {
    this.All_groups_list()
  },
  methods: {
    getConfigResult(res) {
      // 接收回调函数返回数据的方法
      console.log(res.ret)
      if (res.ret === '0') {
        this.$message({
          message: '连接成功',
          type: 'warning'
        })
        this.userlist()
        this.depart_list()
        this.All_groups_list()
        return
      } else {
        this.$message({
          message: '连接失败',
          type: 'warning'
        })
      }
      console.log(res)
    },
    // 同步时间
    sync_time() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"sync_time", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 读取新记录
    read_new_record() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"read_new_record", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    read_all_record() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"read_all_record", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 重置
    reset() {
      this.form = {}
    },
    // 所有组列表
    All_groups_list() {
      this.$store.dispatch('interactive/All_groups_list', {}).then(response => {
        this.group_list = response.DeviceGroup
        this.devicegroupid = response.DeviceGroup[0].devicegroupid
        this.Terminal_list()
        this.group_list.forEach((v, k) => {
          this.device_list.push({ value: v.devicegroupid, label: '' + v.devicegroupname + '' })
        })
      }).catch(() => {
        console.log('error')
      })
    },
    // 所有组列表点击
    myclick(index) {
      this.showPrise = true
      this.devicegroupid = this.group_list[index].devicegroupid
      this.group_title = this.group_list[index].devicegroupname
      this.isactive = index
      this.Terminal_list()
    },
    // 终端列表
    Terminal_list() {
      this.$store.dispatch('interactive/Terminal_list', { Floorid: this.devicegroupid }).then(response => {
        this.terminal_list = response.FingerClient
        this.clientid = response.FingerClient[0].Clientid
        this.details = response.FingerClient[0]
        this.ClientNumbers = response.FingerClient[0].ClientNumber
      }).catch(() => {
        console.log('error')
      })
    },
    // 终端列表点击
    terminal(index) {
      this.terminal_active = index
      this.clientid = this.terminal_list[index].Clientid
      this.details = this.terminal_list[index]
      this.ClientNumbers = this.terminal_list[index].ClientNumber
    },
    // 新增终端
    Adddevice() {
      this.$refs.Dialog.centerDialogVisible = true
      this.$refs.Dialog.dialogtitle = '新增终端'
      this.de_data = 1
    },
    // 修改终端
    editdevice() {
      this.$refs.Dialog.centerDialogVisible = true
      this.de_data = 0
      this.$refs.Dialog.dialogtitle = '修改终端'
      this.$refs.Dialog.form = this.details
      this.$refs.Dialog.Prohibit = true
    },
    // 删除终端
    deletedevice() {
      this.$confirm('是否确定删除此部门?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.ClientNumbers)
        this.$store.dispatch('interactive/Device_delete', { ClientNumbers: this.ClientNumbers }).then(response => {
          this.Terminal_list()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch((error) => {
          console.log(error)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 读取指定记录
    query() {
      this.$store.dispatch('interactive/userList', this.form).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
      }).catch(() => {
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-tree{
    height: 100%;
  }
  .main-slide-top{
    margin-bottom: 5px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .el-row{
    display: flex;
    height: 100%;
    .grid-content{
      height: 100%;
      background: #fff;
      -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.13);
      box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.13);
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      overflow-y: scroll;
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
  }
  .el-carousel{
    height: 100%;
  }
  .el-carousel__item{
    height: 100%;
    display: flex;
    border-bottom: 1px solid #EBEBEBFF;
    .device-list{
      width: 14%;
      max-width: 128px;
      height: 160px;
      margin-top: 15px;
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
    .terminal_border{
      border:1px solid #47a369
    }
  }
  .main-slide{
    width: 100%;
    height: 100%;
  }
</style>
