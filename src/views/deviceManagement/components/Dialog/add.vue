<template>
  <div class="device-dialog">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="60%"
      center>
      <span slot="title" class="dialog-header ">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <div>新增终端</div>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <h4>设备类型</h4>
            <div class="net-input-item">
              <span class="icon-size icon-nav-network"/>
              <span>
                <selectbox/>
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="parameter">
        <span class="parameter-item">
          <h4>通讯方式</h4>
          <el-radio-group v-model="radio">
            <el-radio :label="1">USB（无驱）</el-radio>
            <p><el-radio :label="2">网络设置</el-radio></p>
            <div class="net-input">
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
              <div class="port">Port</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable/>
                </span>
              </div>
            </div>
            <el-radio :label="3">RS485</el-radio>
            <div class="net-input">
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <selectbox/>
                </span>
              </div>
              <div class="port">通讯密码</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <el-input
                    v-model="input"
                    type="password"
                    placeholder="请输入密码"
                    clearable/>
                </span>
              </div>
            </div>
          </el-radio-group>
        </span>
        <span class="parameter-item">
          <h4>通讯参数</h4>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>终端编号</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>终端编号</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>终端编号</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>设备组</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <selectbox/>
                </span>
              </div>
            </div>
          </div>
          <div class="parameter-item-wrap">
            <div class="parameter-item-center">
              <div>考勤状态</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <selectbox/>
                </span>
              </div>
            </div>
            <div class="parameter-item-center">
              <div>设备标签</div>
              <div class="net-input-item">
                <span class="icon-size icon-nav-network"/>
                <span>
                  <selectbox/>
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
      <!-- <div class="search-device">
        <ul class="seach-list">
          <li class="list-item">
            <span class="main-color">当前查找到的设备</span>
            <span>
              <el-button type="primary">手动添加</el-button>
            </span>
          </li>
          <li class="list-item">
            <span>
              <span>如果自动查找设备失败，可以</span><span class="main-color">手动添加设备。</span>
            </span>
          </li>
          <li class="list-item">
            <ul class="current">
              <li class="current-list">
                <span class="current-list-item">
                  <span class="icon-size icon-nav-network main-color"/>
                  <span>T5S  192.168.70.29  9C-35-8B-60-4C-D7  V 1.222 </span>
                </span>
                <span class="icon-size icon-step-success main-color"/>
              </li>
            </ul>
          </li>
          <li class="list-item">设备</li>
          <li class="list-item">
            <ul class="all">
              <li class="all-list">
                <span class="current-list-item">
                  <span class="icon-size icon-nav-network"/>
                  <span>T5S   192.168.70.29   9C-35-8B-60-4C-D7   V 1.222 </span>
                </span>
                <span class="icon-size icon-step-error"/>
              </li>
              <li class="all-list">
                <span class="current-list-item">
                  <span class="icon-size icon-nav-network"/>
                  <span>T5S   192.168.70.29   9C-35-8B-60-4C-D7   V 1.222 </span>
                </span>
                <span icon="" class="icon-size icon-step-error"/>
              </li>
            </ul>
          </li>
        </ul>
      </div> -->
    </el-dialog>
  </div>
</template>
<script>
import selectbox from '@/components/select'
export default {
  components: {
    selectbox
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      radio: 1,
      input: ''
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

</style>
