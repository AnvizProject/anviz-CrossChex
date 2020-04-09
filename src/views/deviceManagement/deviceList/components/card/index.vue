<template>
  <el-card class="card-select">
    <div :class="val.online_status==='online'?'':'mask'"/>
    <div slot="header" class="header" title="查看详情" @click="drawer">
      <div class="left">
        <div :style="{backgroundImage:'url('+coverImage+')'}" class="image">
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
      <span v-if="close" :class="val.can_open_door===1?'icon-cursor': 'display'" class="icon-psd-lock" @click="open_door(val.can_open_door)"/>
      <span v-else class="icon-cursor icon-psd-open open"/>
      <span class="icon-cursor icon-data-import" @click="read_new_record"/>
      <el-dropdown :hide-on-click="true" @command="handleCommand">
        <span class="el-dropdown-link">
          <span class="icon-cursor icon-setting"/><i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="netSetting">设置网络参数</el-dropdown-item>
          <el-dropdown-item>终端信息</el-dropdown-item>
          <el-dropdown-item>消息管理</el-dropdown-item>
          <el-dropdown-item>设置机器号</el-dropdown-item>
          <el-dropdown-item>自动切换考勤状态设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <drawer ref="drawer" :val="val"/>
    <device-setting ref="setting"/>
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
      close: true
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'netSetting') {
        this.$refs.setting.centerDialogVisible = true
      }
    },
    drawer() {
      this.$refs.drawer.drawer = true
    },
    change() {
      this.$emit('checkbox', { value: this.val, checked: this.selected })
    },
    stop() {
      // 阻止点击单选按钮事件冒泡的空函数
    },
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      console.log(res)
      if (res.ret === '0') {
        this.$message({
          message: '更新成功',
          type: 'success'
        })
        return
      } else {
        this.$message({
          message: '更新失败',
          type: 'warning'
        })
      }
      console.log(res)
    },
    // 开门
    open_door(open) {
      if (open === 1) {
        this.close = false
        setTimeout(() => {
          this.close = true
        }, 10000)
      }
    },
    // 读取新纪录
    read_new_record() {
      // this.$emit('down')
      console.log(this.val.Clientid)
      this.socketApi.sendSock(JSON.parse('{"cmd":"read_new_record", "data": {"ts":"' + timestamp + '","clientid": "' + this.val.Clientid + '"}}'), this.getConfigResult)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-card{
    position: relative;
    .mask{
      width: 100%;
      height: 100%;
      position: absolute;
      top:0;
      left:0%;
      background: rgba(207, 207, 207, 0.5);
      z-index: 1;
      cursor:not-allowed
    }
  }
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
    .icon-cursor, .el-dropdown-link{
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
      cursor:not-allowed
    }
    .open{
      color: #d0021b;
    }
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
      padding: 3px 0;
      background: #F4F4F4;
    }
  }
</style>
