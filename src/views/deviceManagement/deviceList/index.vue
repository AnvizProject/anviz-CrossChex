<template>
  <div class="device">
    <search :search="search"/>
    <container>
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini" @click="add">增加</el-button>
          <el-button :disabled="!checked" :type="checked?'warning':'info'" size="mini" @click="edit">修改</el-button>
          <el-button :disabled="getSelectedList.length<=0" :type="getSelectedList.length>0?'danger':'info'" size="mini" @click="del">删除</el-button>
          <el-dropdown>
            <el-button :disabled="getSelectedList.length<=0" type="info" size="mini">更多操作<i class="el-icon-arrow-down el-icon--right"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>同步时间</el-dropdown-item>
              <el-dropdown-item>终端参数</el-dropdown-item>
              <el-dropdown-item>打铃设置</el-dropdown-item>
              <el-dropdown-item>读取新记录</el-dropdown-item>
              <el-dropdown-item>读取全部记录</el-dropdown-item>
              <el-dropdown-item>备份人员</el-dropdown-item>
              <el-dropdown-item>恢复人员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-item">
          <Dropdown :value="value1">
            <div class="filter-con">
              <p class="filter-all">所有设备</p>
              <div v-for="(item, index) in group_list" :key="index">
                <p class="filter-title">{{ item.devicegroupname }}</p>
                <ul>
                  <li v-if="item.FingerClient.length===0">暂无设备</li>
                  <li v-for ="(t_item, index) in item.FingerClient" :key="index" @click="Terminal_list(t_item.Floorid)">
                    {{ t_item.ClientName }}
                  </li>
                </ul>
              </div>
            </div>
          </Dropdown>
          <Dialog ref="Dialog"/>
        </div>
      </div>
      <div slot="main" class="main">
        <card-select v-for="(v,k) in terminal_list" :key="k" :val="v" :index="v.key" :select="selected" class="card" @checkbox="checkbox"/>
      <!-- <el-button @click="getSelectedList">test</el-button> -->
      </div>
    </container>
  </div>
</template>

<script>
import Search from '@/components/search'
import container from '@/components/container'
import cardSelect from './components/card'
import Dropdown from '@/components/Dropdown'
import Dialog from '../components/Dialog/edit'
export default {
  components: { Search, container, cardSelect, Dropdown, Dialog },
  data() {
    return {
      disabled: true,
      type: 'info',
      types: 'info',
      search: '工号、姓名',
      value1: '设备组',
      value2: '部门组',
      group_list: [],
      selected: {},
      selectedList: [],
      terminal_list: [],
      floorId: 0
    }
  },
  computed: {
    getSelectedList() {
      const selectedList = []
      for (const key in this.selected) {
        if (this.selected[key] === true) {
          selectedList.push(key)
        }
      }
      return selectedList
    },

    checked() {
      if (this.getSelectedList.length === 1) {
        return true
      } else {
        return false
      }
    }

  },
  mounted: function() {
    this.All_groups_list()
    this.Terminal_list(0)
  },
  methods: {
    checkbox(data) {
      this.selected[data.key] = data.checked
      this.selected = Object.assign({}, this.selected)
    },
    // 所有组列表
    All_groups_list() {
      this.$store.dispatch('interactive/All_groups_list', {}).then(response => {
        this.group_list = response.DeviceGroup
      }).catch(() => {
        console.log('error')
      })
    },
    // 终端列表
    Terminal_list(floorId) {
      this.floorId = floorId
      this.$store.dispatch('interactive/Terminal_list', { Floorid: floorId }).then(response => {
        console.log(response.FingerClient)
        this.terminal_list = response.FingerClient
        this.details = response.FingerClient[0]
      }).catch(() => {
        console.log('error')
      })
    },
    add() {
      if (this.floorId <= 0) {
        alert('请选择设备组')
      } else {
        this.$refs.Dialog.centerDialogVisible = true
        this.$refs.Dialog.dialogtitle = '新增终端'
        this.de_data = 1
      }
    },
    edit() {
      this.$refs.Dialog.centerDialogVisible = true
      this.de_data = 0
      this.$refs.Dialog.dialogtitle = '修改终端'
      this.details = this.terminal_list[0]
      this.$refs.Dialog.form = this.details
      this.$refs.Dialog.Prohibit = true
    },
    del() {
      this.$confirm('是否确定删除此部门?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('interactive/Device_delete', { ClientNumbers: this.getSelectedList.join(',') }).then(response => {
          this.Terminal_list()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch((error) => {
          console.log(error)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header{
    .con-item{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-dropdown {
        vertical-align: top;
        margin-left: 10px;
      }
    }
    .secondary{
      display: flex;
      .sec-title{
        white-space: nowrap;
        margin-right: 15px;
      }
    }
  }
  .el-main{
    .icon{
      font-size: 24px;
      &.icon-edit{
        color:#FA6400;
      }
      &.icon-recycle{
        color:#D0021B;
      }
    }
  }
.main {
  display: grid;
  // grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat( auto-fill, minmax(330px, 1fr) );
  grid-gap: 10px 10px;
}
</style>
