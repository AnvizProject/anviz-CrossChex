<template>
  <div class="ringing-dialog">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="60%"
      center>
      <span slot="title" class="dialog-header ">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>{{ dialogtitle }}</div>
        <el-button size="mini" type="primary" @click="add_device">确 定</el-button>
      </span>
      <div class="parameter">
        <span class="parameter-item">
          <h4>打铃时间列表</h4>
          <ul>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
            <li>01:00</li>
          </ul>
        </span>
        <span class="parameter-item">
          <h4>详细信息</h4>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="打铃时间">
              <el-col :span="12">
                <el-time-select
                  v-model="value"
                  :picker-options="{
                    start: '06:00',
                    step: '00:10',
                    end: '24:00'
                  }"
                  placeholder="选择时间"/>
              </el-col>
            </el-form-item>
          </el-form>
          <div>
            <el-checkbox v-model="checked">星期一</el-checkbox>
            <el-checkbox v-model="checked">星期二</el-checkbox>
            <el-checkbox v-model="checked">星期三</el-checkbox>
            <el-checkbox v-model="checked">星期四</el-checkbox>
            <el-checkbox v-model="checked">星期五</el-checkbox>
            <el-checkbox v-model="checked">星期六</el-checkbox>
            <el-checkbox v-model="checked">星期天</el-checkbox>
          </div>
        </span>
      </div>
      <div slot="footer">
        <el-row>
          <el-button size="small" type="primary">增加</el-button>
          <el-button size="small" type="danger">删除</el-button>
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
      dialogtitle: '新增终端',
      Prohibit: false,
      value: '',
      checked: false,
      form: {
        DeviceType: null,
        Clientid: null,
        ClientNumber: null,
        ClientName: null,
        Floorid: null,
        RecStatus: null,
        deviceflag: null,
        ipaddress: null,
        CommPort: null,
        Linkmode: 1
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
    padding: 0 10px 10px;
    &:first-child{
      margin-right: 0.5%;
      width: 20%;
    }
    &:last-child{
      margin-left: 0.5%;
      width: 79%;
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
