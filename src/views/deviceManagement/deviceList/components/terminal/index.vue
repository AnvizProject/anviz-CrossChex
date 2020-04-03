<template>
  <div class="device-dialog">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="60%"
      center>
      <div slot="title" class="dialog-header ">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <div>终端参数</div>
        <el-button type="primary" @click="add_device">确 定</el-button>
      </div>
      <div class="parameter">
        <span class="parameter-item">
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>比对精度</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value4" v-model="form.precision"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>记录报警阈值（0-5000）</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.record_alarm_value"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>用户独立时段限制</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value5" v-model="form.user_period_limit"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>工作码提示功能</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value6" v-model="form.workcode_prompt"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>实时监控功能</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value7" v-model="form.realtime_monitor"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>打铃功能</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value8" v-model="form.ring"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>智能更新指纹模板</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value9" v-model="form.update_fingerprint"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>韦根模式</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value10" v-model="form.wiegand_mode"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>固定韦根区号</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.wiegand_area_code"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>继电器延时（0-15秒）</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.relay_time"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>门磁报警延时（0-250)</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.door_alarm_delay"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>韦根输入卡号模式</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value11" v-model="form.card_mode"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>反潜回</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value12" v-model="form.anti_passback"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>韦根选项（M7）</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value13" v-model="form.wiegand_option"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>保存无效卡记录</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value14" v-model="form.save_invalid_record"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>读取卡号模式</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value15" v-model="form.read_card_mode"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div>
              <div>重复考勤的时间间隔（0-250分钟）</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.repeat_clock_time"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
          </div>
        </span>
        <span class="parameter-item">
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>管理密码（0-999999）</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.pwd"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>休眠时间（0-250分钟）</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.sleep_time"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>音量（0-5）</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.volume"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>日期显示格式</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value16" v-model="form.date_format"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div>
              <div>时间显示格式</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <selectbox :options="device_options.value17" v-model="form.time_format"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>公司名称</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.company_name"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>公司地址</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.address"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div>
              <div>公司传真</div>
              <div class="net-input-item">
                <span class="icon-size icon-advanced"/>
                <span>
                  <el-input
                    v-model="form.fax"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
      <div slot="footer">
        <el-row>
          <el-button size="small" type="primary">清除考勤记录</el-button>
          <el-button size="small" type="primary">初始化设备</el-button>
          <el-button size="small" type="primary">显示默认设置</el-button>
        </el-row>
      </div>
    </el-dialog>
  </div>
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
    device_list: {
      type: Array,
      default: () => {}
    },
    de_data: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      Prohibit: false,
      form: {
        precision: 1,
        record_alarm_value: '1000',
        repeat_clock_time: 0,
        workcode_prompt: 0,
        realtime_monitor: 0,
        ring: 0,
        update_fingerprint: 0,
        wiegand_mode: 1,
        wiegand_area_code: null,
        relay_time: 5,
        door_alarm_delay: 0,
        card_mode: null,
        anti_passback: null,
        wiegand_option: null,
        save_invalid_record: null,
        read_card_mode: null,
        user_period_limit: null,
        pwd: 12345,
        sleep_time: 10,
        volume: 3,
        date_format: 0,
        time_format: 0,
        company_name: null,
        address: null,
        fax: null

      }
    }
  },
  methods: {
    add_device() {
      console.log(this.form)
      if (this.de_data === 1) {
        this.$store.dispatch('interactive/Device_create', this.form).then(response => {
          this.$message({
            type: 'success',
            message: '新增成功!'
          })
          this.centerDialogVisible = false
          this.$emit('Terminal_list')
        }).catch((error) => {
          console.log(error)
          this.$message.error('新增失败')
        })
      } else if (this.de_data === 0) {
        console.log(this.form)
        this.$store.dispatch('interactive/Device_update', this.form).then(response => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.centerDialogVisible = false
        }).catch((error) => {
          console.log(error)
          this.$message.error('修改失败')
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .device-dialog .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-button{
      padding: 6px 10px;
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
    padding: 15px 10px 10px;
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
    .icon-size{
      color:#47a369;
      width: 12%;
      flex-shrink: 0;
      flex-basis: 12%;
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
  .el-row{
    background: #fff;
    padding: 8px 0;
  }
</style>
