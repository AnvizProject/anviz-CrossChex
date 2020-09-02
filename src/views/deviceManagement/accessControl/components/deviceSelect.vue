<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :show-close="showClo"
    width="50%"
    center>
    <span slot="title" class="dialog-header">
      <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
      <div>选择设备</div>
      <el-button :disabled="form.clientid.length===0" :loading="loading" type="primary" size="mini" @click="submit">确 定</el-button>
    </span>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item v-for="(item, index) in group_list" :key="index" :label="item.devicegroupname">
        <p v-if="item.FingerClient.length===0" class="hint">暂无在线终端</p>
        <p v-for ="(t_item, index) in item.FingerClient" v-if="t_item.online_status==='offline'" :key="index">暂无在线终端</p>
        <el-checkbox-group v-else v-model="form.clientid">
          <el-checkbox v-for ="(t_item, index) in item.FingerClient" :key="index" :label="t_item.Clientid" name="clientid">{{ t_item.ClientName }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
var timestamp = Date.parse(new Date()) / 1000
export default {
  props: {
    tag_id: {
      type: Number,
      default: null
    },
    select_arr: {
      type: Array,
      default: () => {}
    }

  },
  data() {
    return {
      dialogVisible: false,
      showClo: false,
      loading: false,
      group_list: [],
      form: {
        clientid: []
      }
    }
  },
  computed: {
    group_users() {
      const userList = []
      this.select_arr.forEach((v, k) => {
        userList.push({ accessgroupid: v.Groupid, userids: v.userid })
      })
      return userList
    }
  },
  mounted() {
    this.All_groups_list()
  },
  methods: {
    // 所有组列表
    All_groups_list() {
      this.$store.dispatch('interactive/All_groups_list', {}).then(response => {
        console.log(response)
        this.group_list = response.DeviceGroup
      }).catch((error) => {
        console.log(error)
      })
    },
    // 确定
    submit() {
      this.loading = true
      this.socketApi.sendSock({ 'cmd': 'update_accesstime', 'data': { 'ts': timestamp, 'tag_id': this.tag_id, 'clientids': this.form.clientid.join(','), 'group_users': this.group_users }}, this.getConfigResult)
    },
    // websocket接收回调函数返回数据的方法
    getConfigResult(res) {
      console.log(res)
      if (res.ret === '0') {
        this.loading = false
        this.$message({
          message: '更新成功',
          type: 'success'
        })
        this.dialogVisible = false
        return
      } else {
        this.$message({
          message: '失败',
          type: 'warning'
        })
      }
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
  .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
