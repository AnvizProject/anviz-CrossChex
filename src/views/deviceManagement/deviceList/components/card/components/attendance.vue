<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="60%"
    class="device-attendancestatus">
    <span>
      <el-container>
        <el-header>
          <div class="con-item">
            <el-button :disabled="multipleSelection.length===0" type="primary" size="mini" @click="update">更新考勤状态</el-button>
            <el-button :disabled="multipleSelection.length===0" type="primary" size="mini" @click="update_status">更新考勤状态到终端设备</el-button>
          </div>
        </el-header>
        <el-main v-loading="loading">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <el-table
                  ref="multipleTable"
                  :data="tableData"
                  border
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"/>
                  <el-table-column
                    prop="StatusID"
                    label="状态编号"/>
                  <el-table-column
                    label="导出时表示字符">
                    <template slot-scope="scope">
                      <el-input
                        ref="StatusChar"
                        v-model="scope.row.StatusChar"
                        style="width: 100%"/>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="状态描述说明"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                      <el-input
                        ref="StatusText"
                        v-model="scope.row.StatusText"
                        style="width: 100%"/>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </span>
  </el-dialog>
</template>
<script>
var timestamp = Date.parse(new Date()) / 1000
export default {
  props: {
    clientid: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      multipleSelection: [],
      loading: true
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 考勤状态列表
    status_index() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"get_status", "data": {"ts":"' + timestamp + '","clientid": "' + this.clientid + '"}}'), this.getConfigResult)
    },
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      console.log(res, '123')
      if (res.ret === '0') {
        setTimeout(() => {
          if (res.cmd === 'get_status') {
            this.loading = false
            this.tableData = res.data.Status
          }
          if (res.cmd === 'update_status') {
            this.dialogVisible = false
            this.$message({
              message: '更新到终端成功',
              type: 'success'
            })
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
    update() {
      console.log(this.multipleSelection)
      this.$store.dispatch('interactive/Status_Update', { Status: this.multipleSelection }).then(response => {
        this.status_index()
      }).catch(error => {
        console.log(error)
      })
    },
    update_status() {
      this.socketApi.sendSock(JSON.parse('{"cmd":"update_status", "data": {"ts":"' + timestamp + '","clientids": "' + this.clientid + '"}}'), this.getConfigResult)
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-container{
    background: #fff;
    .el-header{
      height: auto !important;
      padding: 5px 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      text-align: left;
    }
  }
  </style>
  <style lang="scss">
    .device-attendancestatus{
      .el-input__inner{
        border:none;
        background-color:transparent !important;
      }
      .el-dialog__header,.el-dialog__body{
        padding: 0 !important;
        margin: 0 !important;
      }
      .el-dialog__body{
        height: 100%;
      }
      .el-container{
        height: 100%;
      }
      .el-dialog__headerbtn{
        top:5px;
        right:5px;
        z-index: 1;
        .el-dialog__close{
          font-size: 30px;
        }
      }
    }
  </style>
