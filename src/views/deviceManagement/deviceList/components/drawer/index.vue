<template>
  <el-drawer
    :visible.sync="drawer"
    :with-header = "false">
    <el-scrollbar style="height:100%">
      <div class="drawer">
        <!-- <pre>{{ val }}</pre> -->
        <div class="header">
          <div :style="{backgroundImage:'url('+coverImage+')'}" class="image">
            <div id="drawer-box" class="name">
              {{ val.device_type_name }}
            </div>
          </div>
          <div class="info">
            <div class="box">
              <div class="department">{{ val.ClientName }}</div>
              <div class="ip">{{ val.ipaddress }}</div>
              <div class="group">{{ val.devicegroupname }}</div>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="classify">
            <div class="title">终端信息</div>
            <div class="main">
              <div class="block">
                <span class="value">{{ terminal_info.user_num }}</span><br>
                <span class="key">员工数</span>
              </div>
              <div class="block">
                <span class="value">{{ terminal_info.template_num }}</span><br>
                <span class="key">模板数</span>
              </div>
              <div class="block">
                <span class="value">{{ terminal_info.password_num }}</span><br>
                <span class="key">密码数</span>
              </div>
              <div class="block">
                <span class="value">{{ terminal_info.card_num }}</span><br>
                <span class="key">卡数</span>
              </div>
              <div class="block">
                <span class="value">{{ terminal_info.new_record_num }}</span><br>
                <span class="key">新记录数</span>
              </div>
              <div class="block">
                <span class="value">{{ terminal_info.all_record_num }}</span><br>
                <span class="key">总记录数</span>
              </div>
              <div class="block">
                <span class="value">{{ terminal_info.serial_number }}</span><br>
                <span class="key">设备序列号</span>
              </div>
              <div class="block">
                <span class="value">{{ terminal_info.firmware }}</span><br>
                <span class="key">固件版本</span>
              </div>
            </div>
          </div>

          <!-- <div class="classify">
            <div class="title">分类</div>
            <div class="main">
              <div class="block">
                <span class="value">{{ val.ipaddress }}</span><br>
                <span class="key">IP</span>
              </div>
              <div class="block">
                <span class="value">255.255.255.255</span><br>
                <span class="key">Mask</span>
              </div>
              <div class="block">
                <span class="value">192.168.60.1</span><br>
                <span class="key">Gate</span>
              </div>
              <div class="block">
                <span class="value">A4:34:F1:87:38:56</span><br>
                <span class="key">Mac</span>
              </div>
              <div class="block">
                <span class="value">192.168.30.24</span><br>
                <span class="key">ServerIP</span>
              </div>
              <div class="block">
                <span class="value">{{ val.CommPort }}</span><br>
                <span class="key">Port</span>
              </div>
            </div>
          </div> -->

          <!-- <div class="classify">
            <div class="title">分类</div>
            <div class="main">
              <div class="block">
                <span class="value">V 4.2</span><br>
                <span class="key">固件版本</span>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </el-scrollbar>
  </el-drawer>
</template>

<script>
export default {
  props: {
    terminal_info: {
      type: Object,
      default: () => {}
    },
    val: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      drawer: false,
      coverImage: require('../images/c2slim.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .drawer {
    padding: 0 12px;
    .header{
      padding: 25px 0;
      border-bottom: 1px #ddd solid;
      display: flex;
      >div{
        width: 50%;
        &.image{
          text-align: center;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          height: 150px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          .name{
            padding: 0px 10px;
            font-size: 18px;
            background: rgba(14, 164, 139,0.8);
            color: #FFF;
          }
        }
        &.info{
          color: #58585A;
          font-size: 16px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          .box{
            width: 100%;
            .department{
              font-size: 20px;
              margin-bottom: 12px;
            }
            .ip,.group{
              line-height: 20px;
            }
          }
        }
      }
    }
    .main{
      padding: 16px 0;
      .classify{
        margin-bottom: 30px;
        .title{
          color: #0EA58A;
          font-size: 20px;
        }
        .main{
          padding: 8px 19px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .block{
            width: 48%;
            line-height: 25px;
            border-bottom: 1px solid #E7E4E7;
            margin: 8px 0;
            .value{
              font-size: 18px;
            }
            .key{
              font-size: 14px;
              color: #C8C5C8;
            }
          }
        }
      }
    }
  }
</style>

<style>
.el-drawer{
  margin-right: -17px;
}
.el-scrollbar__wrap{
  overflow-x: hidden;
  margin-bottom: 0 !important;
}
</style>
