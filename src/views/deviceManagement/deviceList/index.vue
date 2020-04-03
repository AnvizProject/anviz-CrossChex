<template>
  <div class="device">
    <search :search="search"/>
    <container>
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini" @click="add">增加</el-button>
          <el-button :disabled="!checked" :type="checked?'warning':'info'" size="mini" @click="edit">修改</el-button>
          <el-button :disabled="getSelectedList.length<=0" :type="getSelectedList.length>0?'danger':'info'" size="mini" @click="del">删除</el-button>
          <el-dropdown>
            <el-button :disabled="getSelectedList.length<=0" type="info" size="mini">更多操作<i class="el-icon-arrow-down el-icon--right"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item split-button="true" @click.native="sync_time">同步时间</el-dropdown-item>
              <el-dropdown-item @click.native="terminal_para">终端参数</el-dropdown-item>
              <el-dropdown-item @click.native="ringing_set">打铃设置</el-dropdown-item>
              <el-dropdown-item @click.native="read_new_record">读取新记录</el-dropdown-item>
              <el-dropdown-item @click.native="read_all_record">读取全部记录</el-dropdown-item>
              <el-dropdown-item @click.native="backup_user">备份人员</el-dropdown-item>
              <el-dropdown-item @click.native="recover_user">恢复人员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-item">
          <Devicegroup ref="groupList" @groupList="groupList" />
          <Dialog ref="Dialog" :options = "group_list"/>
        </div>
      </div>
      <div slot="main" class="main">

        <card-select v-for="(v, k) in terminal_list" :key="k" :val="v" :index="v.key" :select="selected" class="card" @checkbox="checkbox"/>
      <!-- <el-button @click="getSelectedList">test</el-button> -->
      </div>
    </container>
    <Dialog ref="Dialog"/>
    <Terminal ref="Terminal"/>
    <Ringing ref="Ringing"/>
  </div>
</template>
<script>
import Search from '@/components/search'
import container from '@/components/container'
import cardSelect from './components/card'
import Terminal from './components/terminal'
import Ringing from './components/ringing'
import Devicegroup from '@/components/Devicegroup'
import Dialog from '../components/Dialog/edit'
var timestamp = Date.parse(new Date()) / 1000
export default {
  components: { Search, container, cardSelect, Devicegroup, Dialog, Terminal, Ringing },
  data() {
    return {
      disabled: true,
      type: 'info',
      types: 'info',
      search: '工号、姓名',
      group_list: [],
      selected: {},
      selectedList: [],
      terminal_list: [],
      ter_para: {},
      floorId: 0,
      clientid: null
    }
  },
  computed: {
    getSelectedList() {
      const selectedList = []
      for (const key in this.selected) {
        if (this.selected[key] === true) {
          selectedList.push(key)
        }
      }
      return selectedList
    },

    checked() {
      if (this.getSelectedList.length === 1) {
        return true
      } else {
        return false
      }
    }
  },
  // watch: {
  //   group_list(newV, oldV) {
  //     this.group_list = newV
  //   }
  // },
  mounted: function() {
    this.Terminal_list(0)
  },
  methods: {
    groupList(data) {
      // console.log(data)
      data.forEach((v, k) => {
        v.FingerClient.forEach((val, key) => {
          val.devicegroupid = val.Clientid
          val.devicegroupname = val.ClientName
        })
      })
      this.group_list = data
    },
    checkbox(data) {
      console.log(data)
      this.clientid = data.key
      this.selected[data.key] = data.checked
      this.selected = Object.assign({}, this.selected)
    },
    // 终端列表
    Terminal_list(floorId) {
      this.floorId = floorId
      this.$store.dispatch('interactive/Terminal_list', { Floorid: floorId }).then(response => {
        this.terminal_list = response.FingerClient
        this.details = response.FingerClient[0]
      }).catch(() => {
        console.log('error')
      })
    },
    add() {
      this.$refs.Dialog.centerDialogVisible = true
      this.$refs.Dialog.dialogtitle = '新增终端'
      this.de_data = 1
    },
    edit() {
      this.$refs.Dialog.centerDialogVisible = true
      this.de_data = 0
      this.$refs.Dialog.dialogtitle = '修改终端'
      this.details = this.terminal_list[0]
      this.$refs.Dialog.form = this.details
      this.$refs.Dialog.Prohibit = true
    },
    del() {
      this.$confirm('是否确定删除此部门?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('interactive/Device_delete', { ClientNumbers: this.getSelectedList.join(',') }).then(response => {
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
    // 打铃设置
    ringing_set() {
      this.$refs.Ringing.centerDialogVisible = true
    },
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      console.log(res)
      if (res.ret === '0') {
        this.$message({
          message: '更新成功',
          type: 'success'
        })
        setTimeout(() => {
          if (res.cmd === 'get_device_param') {
            this.$refs.Terminal.centerDialogVisible = true
            this.$refs.Terminal.form = res.data
          }
        }, 500)

        return
      } else {
        this.$message({
          message: '更新失败',
          type: 'warning'
        })
      }
      console.log(res)
    },
    // 同步时间
    sync_time() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"sync_time", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 终端参数
    terminal_para() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"get_device_param", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 读取新记录
    read_new_record() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"read_new_record", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 读取全部记录
    read_all_record() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"read_all_record", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 备份人员
    backup_user() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"backup_user", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 恢复人员
    recover_user() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"recover_user", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header{
    .con-item{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-dropdown {
        vertical-align: top;
        margin-left: 10px;
      }
    }
    .secondary{
      display: flex;
      .sec-title{
        white-space: nowrap;
        margin-right: 15px;
      }
    }
  }
  .el-main{
    .icon{
      font-size: 24px;
      &.icon-edit{
        color:#FA6400;
      }
      &.icon-recycle{
        color:#D0021B;
      }
    }
  }
.main {
  display: grid;
  // grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat( auto-fill, minmax(330px, 1fr) );
  grid-gap: 10px 10px;
}
</style>

<style>
  .el-drawer__body{
    overflow-y: scroll;
  }
</style>
