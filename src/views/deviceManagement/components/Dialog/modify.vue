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
      <div class="parameter-wrap">
        <div class="parameter">
          <span class="parameter-item">
            <h4>基本参数</h4>
            <div class="parameter-item-wrap">
              <div class="parameter-item-center">
                <div>对比精度</div>
                <div class="net-input-item">
                  <selectbox/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>记录报警值(0-5000)</div>
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
                <div>重复考勤时间间隔(0-250)</div>
                <div class="net-input-item">
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>实时监控</div>
                <div class="net-input-item">
                  <selectbox/>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div class="parameter">
          <span class="parameter-item">
            <h4>基本设置</h4>
            <div class="parameter-item-wrap">
              <div class="parameter-item-center">
                <div>管理密码(0-999999)</div>
                <div class="net-input-item">
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>休眠时间(0-250)</div>
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
                <div>音量(0-5)</div>
                <div class="net-input-item">
                  <selectbox/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>显示日期格式</div>
                <div class="net-input-item">
                  <selectbox/>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div class="parameter">
          <span class="parameter-item">
            <h4>公司信息</h4>
            <div class="parameter-item-wrap">
              <div class="parameter-item-center">
                <div>公司名称</div>
                <div class="net-input-item">
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div class="parameter-item-center">
                <div>公司地址</div>
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
                <div>公司传真</div>
                <div class="net-input-item">
                  <el-input
                    v-model="input"
                    placeholder="请输入内容"
                    clearable
                    class="input-box"/>
                </div>
              </div>
              <div class="parameter-item-center"/>
            </div>
          </span>
        </div>
      </div>
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
      radio: '1',
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
  .parameter-wrap{
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
    border-radius:5px;
    background: #fff;
    .parameter{
      display: flex;
      .parameter-item{
        width: 100%;
        padding: 0 10px 10px;
        >h4{
          border-bottom:1px solid #bdbdbd;
          margin: 0 0 20px 0;
          padding: 12px 0;
          color:#47a369
        }
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
    padding: 0 30px;
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
</style>
