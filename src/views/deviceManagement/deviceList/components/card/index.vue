<template>
  <el-card class="card-select">
    <div slot="header" class="header" title="点击查看终端信息" @click="drawer">
      <div class="left">
        <div :style="{backgroundImage:'url('+coverImage+')'}" :class="val.online_status==='online'?'':'mask'" class="image">
          <!-- <img src="./c2slim.png" alt=""> -->
          <div id="box" class="name">
            {{ val.device_type_name }}
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="box">
          <div class="department" >{{ val.ClientName }}</div>
          <div class="ip" >{{ val.ipaddress }}</div>
          <div class="group" >{{ val.devicegroupname }}</div>
        </div>
      </div>
      <div class="right">
        <div @click.stop="stop">
          <el-checkbox v-model="selected" :label="index" class="radio" @change="change"/>
        </div>
      </div>
    </div>
    <div class="device-icon">
      <span v-if="close" :class="val.can_open_door===1&&val.online_status==='online'?'icon-cursor': 'ban'"><span :class="val.can_open_door===1&&val.online_status==='online'?'icon-cursor': 'display'" title="软件开门" class="icon-psd-lock" @click="open_door(val.can_open_door)"/></span>
      <span v-else class="icon-cursor icon-psd-open open"/>
      <span :class="val.online_status==='online'?'':'mask'" class="icon-cursor icon-data-import" title="读取新纪录" @click="read_new_record"/>
      <el-dropdown :hide-on-click="true" :disabled="val.online_status==='online'?false:true" :class="val.online_status==='online'?'':'mask'" @command="handleCommand">
        <span class="el-dropdown-link">
          <span class="icon-cursor icon-setting"/><i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown" :class="val.online_status==='online'?'':'none'">
          <el-dropdown-item command="netSetting">设置网络参数</el-dropdown-item>
          <el-dropdown-item class="disable">消息管理</el-dropdown-item>
          <el-dropdown-item class="disable">设置机器号</el-dropdown-item>
          <el-dropdown-item class="disable">自动切换考勤状态设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <drawer ref="drawer" :val="val" :terminal_info="terminal_info"/>
    <device-setting ref="setting" @set_net_param="set_net_param"/>
  </el-card>
</template>

<script>
import drawer from '../drawer'
import deviceSetting from '../deviceSetting'
var timestamp = Date.parse(new Date()) / 1000
export default {
  components: { drawer, deviceSetting },
  props: {
    val: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      radio: 1,
      selected: false,
      coverImage: require('../images/c2slim.png'),
      close: true,
      terminal_info: {}
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'netSetting') {
        this.get_net_param()
      }
    },
    change() {
      this.$emit('checkbox', { value: this.val, checked: this.selected })
    },
    stop() {
      // 阻止点击单选按钮事件冒泡的空函数
    },
    // 开门
    open_door(open) {
      if (open === 1) {
        this.close = false
        setTimeout(() => {
          this.close = true
        }, 10000)
      }
      this.open_the_door()
    },
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      console.log(res)
      if (res.ret === '10000') {
        return
      }
      if (res.ret === '0') {
        this.$message({
          message: '成功',
          type: 'success'
        })
        setTimeout(() => {
          if (res.cmd === 'get_net_param') {
            this.$refs.setting.loading = false
            this.$refs.setting.form.IP.value = res.data.ip
            this.$refs.setting.form.gate.value = res.data.gate
            this.$refs.setting.form.netMask.value = res.data.mask
            this.$refs.setting.form.mac.value = res.data.mac
            this.$refs.setting.form.port.value = res.data.port
            this.$refs.setting.form.work.value = Number(res.data.mode)
            this.$refs.setting.form.serverIP.value = res.data.server_ip
            this.$refs.setting.form.serverURL.value = res.data.url
            this.$refs.setting.form.DNS.value = res.data.dns
          }
          if (res.cmd === 'set_net_param') {
            this.$refs.setting.centerDialogVisible = false
          }
          if (res.cmd === 'device_info') {
            this.$refs.drawer.loading = false
            this.terminal_info = res.data
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
    // 终端信息
    drawer() {
      if (this.val.online_status !== 'online') {
        return
      }
      this.$refs.drawer.drawer = true
      this.$refs.drawer.loading = true
      this.socketApi.sendSock(JSON.parse('{"cmd":"device_info", "data": {"ts":"' + timestamp + '","clientid": "' + this.val.Clientid + '"}}'), this.getConfigResult)
    },
    // 读取新纪录
    read_new_record() {
      // this.$emit('down')
      this.socketApi.sendSock(JSON.parse('{"cmd":"read_new_record", "data": {"ts":"' + timestamp + '","clientid": "' + this.val.Clientid + '"}}'), this.getConfigResult)
    },
    // 获取网络参数
    get_net_param() {
      this.$refs.setting.loading = true
      this.$refs.setting.centerDialogVisible = true
      this.socketApi.sendSock(JSON.parse('{"cmd":"get_net_param", "data": {"ts":"' + timestamp + '","clientid": "' + this.val.Clientid + '"}}'), this.getConfigResult)
    },
    // 设置网络参数
    set_net_param(data) {
      this.socketApi.sendSock(JSON.parse('{"cmd":"set_net_param", "data": {"ts":"' + timestamp + '","clientid": "' + this.val.Clientid + '","ip": "' + data.IP + '","mask": "' + data.netMask + '","gate": "' + data.gate + '","mac": "' + data.mac + '","server_ip": "' + data.serverIP + '","port": "' + data.port + '","mode": "' + data.work + '","dns": "' + data.DNS + '","url": "' + data.serverURL + '"}}'), this.getConfigResult)
    },
    // 软件开门
    open_the_door() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"open_door", "data": {"ts":"' + timestamp + '","clientid": "' + this.val.Clientid + '"}}'), this.getConfigResult)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .left{
      width: 30%;
    }
    .right{
      width: 10%;
      >div{
        width: 33px;
        overflow: hidden;
        margin: 0 0 0 auto;
      }
    }
    .left{
      border-right: 1px #F3F3F3 solid;
      .image{
        text-align: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 90px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        .name{
          padding: 0px 10px;
          background: rgba(14, 164, 139,0.8);
          color: #FFF;
        }
      }
    }
    .middle{
      padding: 6px 13px;
      font-size: 12px;
      color: #AAA;
      width: 60%;

      .box{
        .department{
          font-size: 18px;
          color: #58585A;
          margin-bottom: 10px;
        }
        .ip,.group{
          line-height: 15px;
        }
      }
    }
  }
  .device-icon{
    font-size: 32px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .icon-cursor{
      cursor: pointer;
    }
    .el-dropdown-link{
      display: block;
      height: 100%;
      >span{
        font-size: 32px;
      }
    }
    .display{
      color: #dedbdc;
      cursor:not-allowed;
      pointer-events:none
    }
    .open{
      color: #d0021b;
    }
  }
  .ban{
    cursor:not-allowed !important;
  }
  .mask{
    opacity: 0.3;
    cursor:not-allowed !important;
    .icon-cursor{
      cursor:not-allowed !important;
    }
    .el-dropdown-menu{
      display: none !important;
    }
  }
  .disable{
    text-decoration:line-through;
    cursor:not-allowed !important;
  }
  .none{
    display: none;
  }
</style>

<style lang="scss">
  .card-select{
    .el-card__header{
      border-bottom: 1px solid #EBEEF5;
      box-shadow: none;
      padding: 12px;
      line-height: unset;
    }
     .header>.right .el-checkbox__inner{
      width: 25px;
      height: 25px;
      border-radius: 50%;
      &::after{
        left: 8px;
        top:3px;
        height: 11px;
        width: 5px;
      }
    }
    .el-card__body{
      height: 43px;
      padding: 3px 0;
      background: #F4F4F4;
    }
  }
</style>
