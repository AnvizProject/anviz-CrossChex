<template>
  <div class="device">
    <search ref="search" :search="search" @search="Terminal_list"/>
    <container :total="total" @per_page="Terminal_list" @page="Terminal_list">
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini" @click="add">增加</el-button>
          <el-button :disabled="!checked" :type="checked?'warning':'info'" size="mini" @click="edit">修改</el-button>
          <el-button :disabled="getSelectedList.length<=0" :type="getSelectedList.length>0?'danger':'info'" size="mini" @click="del">删除</el-button>
          <el-button :disabled="!checked" :type="checked?'primary':'info'" size="mini" @click="clear_admin"><s>清除管理员</s></el-button>
          <el-dropdown>
            <el-button :disabled="!checked" type="info" size="mini">更多操作<i class="el-icon-arrow-down el-icon--right"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item split-button="true" @click.native="sync_time">同步时间</el-dropdown-item>
              <el-dropdown-item @click.native="terminal_para">终端参数</el-dropdown-item>
              <el-dropdown-item @click.native="get_ringing_set">打铃设置</el-dropdown-item>
              <el-dropdown-item @click.native="read_new_record">读取新记录</el-dropdown-item>
              <el-dropdown-item @click.native="read_all_record">读取全部记录</el-dropdown-item>
              <el-dropdown-item @click.native="backup_user">备份人员</el-dropdown-item>
              <el-dropdown-item @click.native="recover_user">恢复人员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-item">
          <Devicegroup ref="groupList" @Terminal_list="Terminal_list" @groupList="groupList" />
        </div>
      </div>
      <div slot="main" class="main">
        <card-select
          v-for="(v, k) in ter_list"
          :key="k"
          :val="v"
          :index="v.key"
          :select="selected"
          :ref="'card_sel' + v.ClientNumber"
          class="card"
          @checkbox="checkbox"
          @read_new_record="read_new_record"
          @down="progressShow"/>
      </div>
    </container>
    <Dialog ref="Dialog" :group_list="group_list" :de_data="de_data" @Terminal_list="Terminal_list"/>
    <Terminal ref="Terminal" @clear="clear" @initialize="initialize"/>
    <progress-self ref="progress"/>
    <Ringing ref="Ringing" :ring_data="ring_data" @ring_set="ring_set"/>

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
import progressSelf from '@/components/Progress'
var timestamp = Date.parse(new Date()) / 1000
export default {
  components: { Search, container, cardSelect, Devicegroup, Dialog, Terminal, Ringing, progressSelf },
  data() {
    return {
      disabled: true,
      type: 'info',
      types: 'info',
      search: ' 机器号、设备名称',
      group_list: [],
      selected: {},
      selectedList: [],
      ter_list: [],
      ter_para: {},
      floorid: 0,
      de_data: null,
      clientid: null,
      ClientNumber: null,
      key: null,
      ring_data: [],
      total: null,
      per_page: {
        page: 1,
        perPage: 15
      }
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
  mounted: function() {
    this.Terminal_list()
  },
  methods: {
    groupList(data) {
      console.log(data)
      data.forEach((v, k) => {
        // v.FingerClient.forEach((val, key) => {
        //   val.devicegroupid = val.Clientid
        //   val.devicegroupname = val.ClientName
        // })
        this.group_list.push({ value: v.devicegroupid, label: v.devicegroupname })
      })
      // this.group_list = data
      // console.log(this.group_list)
    },
    progressShow() {
      this.$refs.progress.dialogVisible = true
    },
    checkbox(data) {
      this.selected[data.value.ClientNumber] = data.checked
      this.selected = Object.assign({}, this.selected)
      this.ter_list.forEach((v, k) => {
        if (v.ClientNumber === Number(this.getSelectedList[0])) {
          this.key = k
          this.clientid = v.Clientid
          this.ClientNumber = v.ClientNumber
        }
      })
      console.log(this.selected)
    },
    // 设备组列表
    // device_group_list(data) {
    //   console.log(data)
    //   this.group_list = data
    // },
    // 终端列表
    Terminal_list(per_page) {
      const floorid = this.$refs.groupList.floorid
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      this.$store.dispatch('interactive/Terminal_list', { per_page: this.per_page.perPage, page: this.per_page.page, Floorid: floorid, search_key: this.$refs.search.input }).then(response => {
        this.ter_list = response.FingerClient
        this.total = response.FingerClientList.total
        console.log(response)
      }).catch(() => {
        console.log('error')
      })
    },
    add() {
      this.$refs.Dialog.form = ''
      this.$refs.Dialog.Prohibit = false
      this.$refs.Dialog.centerDialogVisible = true
      this.$refs.Dialog.dialogtitle = '新增终端'
      this.de_data = 1
    },
    edit() {
      this.$refs.Dialog.centerDialogVisible = true
      this.de_data = 0
      this.$refs.Dialog.dialogtitle = '修改终端'
      this.$refs.Dialog.disabled = false
      this.$refs.Dialog.form_data = this.ter_list[this.key]
      this.$refs.Dialog.loading = false
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
          for (const key of this.getSelectedList) {
            this.$refs['card_sel' + key][0].selected = false
          }
          console.log(this.$refs.card_sel.selected)
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
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      console.log(res)
      if (res.ret === '10000') {
        return
      }
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
          if (res.cmd === 'get_ring_setting') {
            this.$refs.Ringing.centerDialogVisible = true
            this.ring_data = res.data.ring_setting_list
          }
          if (res.cmd === 'ring_setting') {
            this.$refs.Ringing.centerDialogVisible = false
          }
          if (res.cmd === 'get_net_param') {
            this.net_para = res.data
          }
        }, 500)
        return
      } else {
        this.$message({
          message: '失败',
          type: 'warning'
        })
      }
      console.log(res)
    },
    // 清除管理员
    clear_admin() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"clear_manager", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 同步时间
    sync_time() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"sync_time", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 终端参数
    terminal_para() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"get_device_param", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 获取打铃设置
    get_ringing_set() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"get_ring_setting", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 打铃设置
    ring_set(data) {
      this.socketApi.sendSock(JSON.parse('{"cmd":"ring_setting", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '","ring_setting_list": [' + data + ']}}'), this.getConfigResult)
    },
    // 读取新记录
    read_new_record() {
      console.log('{"cmd":"get_net_param", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}')
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
    },
    // 清除考勤记录
    clear() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"clean_record", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // 初始化设备
    initialize() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"init_device", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
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
