<template>
  <el-dialog
    :visible.sync="centerDialogVisible"
    :show-close="showClo"
    width="50%"
    center>
    <span slot="title" class="dialog-header ">
      <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
      <div>{{ dialogtitle }}</div>
      <el-button :loading="loading" size="mini" type="primary" @click="save">确 定</el-button>
    </span>
    <div v-loading="loading" class="parameter">
      <span class="parameter-item">
        <h4>终端网络参数</h4>
        <div class="parameter-item-wrap">
          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.IP.checked">IP地址</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.IP.checked" v-model="form.IP.value" type="text"/>
              </span>
            </div>
          </div>
          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.gate.checked">默认网关</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.gate.checked" v-model="form.gate.value" type="text"/>
              </span>
            </div>
          </div>
        </div>

        <div class="parameter-item-wrap">
          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.netMask.checked">子网掩码</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.netMask.checked" v-model="form.netMask.value" type="text"/>
              </span>
            </div>
          </div>

          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.mac.checked">MAC地址</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.mac.checked" v-model="form.mac.value" type="text"/>
              </span>
            </div>
          </div>
        </div>

        <div class="parameter-item-wrap">
          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.port.checked">网络端口</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.port.checked" v-model="form.port.value" type="text"/>
              </span>
            </div>
          </div>

          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.work.checked">工作方式</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <selectbox :disabled="!form.work.checked" :options="device_options.value19" v-model="form.work.value"/>
              </span>
            </div>
          </div>
        </div>

        <div class="parameter-item-wrap">
          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.serverIP.checked">服务器IP</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.serverIP.checked" v-model="form.serverIP.value" type="text"/>
              </span>
            </div>
          </div>

          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.serverURL.checked">Server URL</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.serverURL.checked" v-model="form.serverURL.value" type="text"/>
              </span>
            </div>
          </div>
        </div>

        <div class="parameter-item-wrap">
          <div class="parameter-item-center">
            <div><el-checkbox v-model="form.DNS.checked">DNS</el-checkbox></div>
            <div class="net-input-item">
              <span>
                <el-input :disabled="!form.DNS.checked" v-model="form.DNS.value" type="text"/>
              </span>
            </div>
          </div>
        </div>

      </span>
      <span class="parameter-item">
        <h4>wifi参数</h4>
        <div class="parameter-item-wrap">
          <div class="parameter-item-center">
            <div>名称</div>
            <div class="net-input-item">
              <span>
                <el-input
                  v-model="form.wifiName"
                  :disabled="Prohibit"
                  placeholder="请输入内容"
                  clearable
                  class="input-box"/>
              </span>
            </div>
          </div>
          <div class="parameter-item-center">
            <div>密码</div>
            <div class="net-input-item">
              <span>
                <el-input
                  v-model="form.wifiPwd"
                  placeholder="请输入内容"
                  clearable
                  class="input-box"/>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  </el-dialog>
</template>
<script>
import selectbox from '@/components/select'
import options from '@/components/mixin/device'
export default {
  components: {
    selectbox
  },
  mixins: [options],
  props: {
    net_para: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      dialogtitle: '设置终端网络参数',
      Prohibit: false,
      form: {
        IP: {
          value: '',
          checked: false
        },
        gate: {
          value: '',
          checked: false
        },
        netMask: {
          value: '',
          checked: false
        },
        mac: {
          value: '',
          checked: false
        },
        port: {
          value: null,
          checked: false
        },
        work: {
          value: 0,
          checked: false
        },
        serverIP: {
          value: '',
          checked: false
        },
        serverURL: {
          value: '',
          checked: false
        },
        DNS: {
          value: '',
          checked: false
        },
        wifiName: '',
        wifiPwd: ''
      },
      result: {},
      loading: false
    }
  },
  mounted() {
  },

  methods: {
    // 终端列表
    // 设置终端网络参数
    save() {
      for (const i in this.form) {
        if (this.form[i].constructor === Object) {
          this.result[i] = this.form[i].value
        } else {
          this.result[i] = this.form[i]
        }
      }
      this.$emit('set_net_param', this.result)
    }
  }
}
</script>
<style lang="scss" scoped>
  .device-dialog .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-row{
    background:#fff;
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
    border-radius:5px;
    padding: 0 10px 10px;
    margin-bottom: 10px;
    h4{
      border-bottom:1px solid #bdbdbd;
      margin: 0 0 20px 0;
      padding: 12px 0;
      color:#47a369;
    }
    .net-input-item{
      width: 49%;
    }
  }
  .parameter{
        display: flex;
  }
  .parameter-item{
    background:#fff;
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
    border-radius:5px;
    width: 49.5%;
    padding: 0 10px 10px;
    &:first-child{
      margin-right: 0.5%;
    }
    &:last-child{
      margin-left: 0.5%;
    }
    h4{
      border-bottom:1px solid #bdbdbd;
      margin: 0 0 20px 0;
      padding: 12px 0;
      color:#47a369;
    }
  }
  .el-radio-group{
    width: 100%;
    p{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .el-radio{
      font-weight: 600;
    }
    .port{
      font-size: 16px;
      margin-top:15px;
    }
  }
  .net-input{
    margin: 0 20px;
    }
    .net-input-item{
      width: 100%;
      height: 46px;
      display: flex;
      align-items: center;
      border-bottom:1px solid #999;
      margin-top: 14px;
      &:last-child{
        margin-bottom: 30px;
      }
    span:last-child{
      width: 88%;
      flex-basis: 88%;
      flex-shrink: 0;
    }
  }
  .parameter-item-wrap{
    display: flex;
    align-content: center;
    width: 100%;
    margin-bottom: 10px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  .parameter-item-center{
    width: 48%;
    &:first-child{
      margin-right: 2%;
    }
    &:last-child{
      margin-left: 2%;
    }
    >div:first-child{
      font-weight: 600;
    }
  }
  ul{
    list-style: none;
    padding-left: 0;
  }
  .search-device{
    .seach-list{
      margin: 10px 0;
      padding: 0 10px;
      box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
      background: #fff;
      border-radius:5px;
      .list-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:nth-child(2){
          background: #f2f2f2;
          padding: 5px 10px;
        }
        &:nth-child(4){
          background: #f2f2f2;
          padding: 5px 10px;
        }
        .el-button{
          padding: 8px 11px;
          margin: 4px 0;
        }
        >ul{
          width: 100%;
          >li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom:1px solid #eee;
          }
        }
      }
    }
  }

</style>
