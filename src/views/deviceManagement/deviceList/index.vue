<template>
  <div class="device">
    <search :search="search"/>
    <container>
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini">增加</el-button>
          <el-button :disabled="!checked" :type="checked?'warning':'info'" size="mini">修改</el-button>
          <el-button :disabled="getSelectedList.length<=0" :type="getSelectedList.length>0?'danger':'info'" size="mini">删除</el-button>
          <el-dropdown>
            <el-button :disabled="getSelectedList.length<=0" type="info" size="mini">更多操作<i class="el-icon-arrow-down el-icon--right"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>调动部门</el-dropdown-item>
              <el-dropdown-item>人员离职</el-dropdown-item>
              <el-dropdown-item>设置权限</el-dropdown-item>
              <el-dropdown-item>复制权限</el-dropdown-item>
              <el-dropdown-item>导入人员</el-dropdown-item>
              <el-dropdown-item>导出人员</el-dropdown-item>
              <el-dropdown-item>下载人员</el-dropdown-item>
              <el-dropdown-item>上传人员</el-dropdown-item>
              <el-dropdown-item>下载模板</el-dropdown-item>
              <el-dropdown-item>上传模板</el-dropdown-item>
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
                  <li v-for ="(t_item, index) in item.FingerClient" :key="index" @click="aa(bbb)">
                    {{ t_item.ClientName }}
                  </li>
                </ul>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
      <div slot="main" class="main">
        <card-select v-for="(v,k) in data" :key="k" :val="v" :index="v.key" :select="selected" class="card" @checkbox="checkbox" />
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
export default {
  components: { Search, container, cardSelect, Dropdown },
  data() {
    return {
      disabled: true,
      type: 'info',
      types: 'info',
      search: '工号、姓名',
      value1: '设备组',
      value2: '部门组',
      group_list: [],
      data: [
        { key: 1, val: 'aaa' },
        { key: 2, val: 'aaa' },
        { key: 3, val: 'aaa' },
        { key: 4, val: 'aaa' },
        { key: 5, val: 'aaa' },
        { key: 6, val: 'aaa' }
      ],
      selected: {},
      selectedList: []
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
      console.log(selectedList)
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
  },
  methods: {
    checkbox(data) {
      console.log(data)
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px 10px;
}
</style>
