<template>
  <div>
    <el-drawer
      :append-to-body="true"
      :visible.sync="drawer"
      title="详情"
      size="700px">
      <div class="details-wrap">
        <div class="details-wrap-item">
          <span class="details-item">
            <h1>T5s</h1>
            <p>Fingerprint & RFID Reader</p>
            <p class="device-name">
              <span class="icon-violence icon-size"/>
              <span>
                <selectbox/>
              </span>
            </p>
            <div class="fun-btn">
              <el-button type="primary"><i class="icon-updating icon-size"/>读取记录</el-button>
              <el-button type="primary"><i class="icon-change icon-size"/>备份人员</el-button>
              <el-button type="primary"><i class="icon-update icon-size"/>恢复人员</el-button>
              <el-button type="primary"><i class="icon-time icon-size"/>时间同步</el-button>
              <el-button type="primary"><i class="icon-away icon-size"/>打铃设置</el-button>
              <el-button type="primary"><i class="icon-locks icon-size"/>设备参数</el-button>
            </div>
          </span>
          <span class="details-item">
            <img src="@/assets/logo/CrossChex.png" alt="">
          </span>
        </div>
        <div class="parameter-wrap">
          <div class="parameter">
            <span class="parameter-item">
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>序号</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>设备类型</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>机器编号</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>序列号</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div class="parameter">
            <span class="parameter-item">
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>IP</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>Mask</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>Gate</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>MAC</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div class="parameter">
            <span class="parameter-item">
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>ServerIp</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>Port</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
              <div class="parameter-item-wrap">
                <div class="parameter-item-center">
                  <div>Module</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
                <div class="parameter-item-center">
                  <div>固件版本</div>
                  <div class="net-input-item">
                    <el-input
                      v-model="input"
                      placeholder="请输入内容"
                      clearable
                      class="input-box"/>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import selectbox from '../select'
export default {
  components: {
    selectbox
  },
  data() {
    return {
      drawer: false,
      radio: '1',
      input: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.details-wrap{
  padding: 0 20px;
}
.details-wrap-item{
  display: flex;
  margin-bottom: 25px;
}
.details-item{
  width: 47.5%;
  flex-basis: 45%;
  flex-shrink: 0;
  &:first-child{
    margin-right: 5%;
  }
  &:last-child{
    margin-left: 5%;
    img{
      width: 100%;
      height: auto;
    }
  }
  h1{
    font-size: 60px;
    margin: 0;
  }
  >p{
    display: flex;
    align-items: center;
    font-size: 24px;
    margin: 0;
    &.device-name{
      background: #dddddd;
      margin-top: 36px;
      margin-bottom: 20px;
    }
    span{
      &:first-child{
        width: 10%;
      }
      &:last-child{
        width: 90%;
      }
    }
  }
  .fun-btn{
    display: flex;
    flex-wrap: wrap;
  }
  .el-button{
    padding: 5px;
    background:linear-gradient(180deg,rgba(226,235,240,1) 0%,rgba(207,217,223,1) 100%) !important;
    border:none !important;
    color:#4A4A4A;
    width: 32%;
    margin-right: 2%;
    margin-left: 0;
    margin-bottom: 10px;
    flex-basis: 32%;
    flex-shrink: 0;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
}
 .device-dialog .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-button{
      padding: 6px 10px;
    }
  }
  .parameter-wrap{
    .parameter{
      display: flex;
      .parameter-item{
        width: 100%;
      }
    }
  }

  .net-input-item{
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    border-bottom:1px solid #999;
  }
  .parameter-item-wrap{
    display: flex;
    align-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
  .parameter-item-center{
    width: 48%;
    &:first-child{
      margin-right: 2%;
    }
    &:last-child{
      margin-left: 2%;
    }
  }
</style>
