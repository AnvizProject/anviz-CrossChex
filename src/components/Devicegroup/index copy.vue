<template>
  <span class="filter-box">
    <el-button :style="{'color':fontColor}" size="mini" @mouseover.native="move" @mouseleave.native="leave">{{ value }}<i :class="ok ? 'icon-under' : 'icon-up'"/></el-button>
    <div class="filter-con">
      <p class="filter-all">所有组</p>
      <div v-for="(item, index) in group_list" :key="index">
        <p class="filter-title">{{ item.devicegroupname }}</p>
        <ul>
          <p v-if="item.FingerClient.length===0" class="hint">暂无终端</p>
          <li v-for ="(t_item, index) in item.FingerClient" :key="index" @click="list(t_item.ClientName)">
            {{ t_item.ClientName }}
          </li>
        </ul>
      </div>
    </div>
  </span>
</template>
<script>
export default {
  data() {
    return {
      ok: true,
      value: '设备组',
      group_list: [],
      fontColor: '#58585A'
    }
  },
  mounted: function() {
    this.All_groups_list()
  },
  methods: {
    move() {
      this.ok = false
    },
    leave() {
      this.ok = true
    },
    // 所有组列表
    All_groups_list() {
      this.$store.dispatch('interactive/All_groups_list', {}).then(response => {
        this.group_list = response.DeviceGroup
        // console.log(response)
      }).catch(() => {
        console.log('error')
      })
    },
    // 部门列表点击
    list(ClientName) {
      this.value = ClientName
      this.fontColor = '#3CA060'
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-header{
    .filter-box{
      position: relative;
      display: inline-block;
      z-index:2;
      width: auto;
      height: auto;
      .el-button{
        position: relative;
        z-index:3;
      }
      &:last-child{
        margin-left: 10px;
      }
      .filter-con{
        position: absolute;
        top:27px;
        right:0;
        padding: 15px 15px 0;
        text-align: left;
        background: #fff;
        border:1px solid #ddd;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        width: 370px;
        z-index: 2;
        display: none;
        .filter-all{
          margin-bottom:10px;
          font-weight: 600;
        }
        .filter-title{
          border-bottom:1px solid #ddd;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        ul{
          flex-wrap: wrap;
          display: flex;
          margin-bottom: 15px;
          li{
            width: auto;
            margin-right:10px;
            white-space: nowrap;
            color:#0EA58A;
            margin-bottom:3px;
            cursor: pointer;
            &:hover{
              color:#8ed6a7
            }
          }
        }
        .hint{
          font-size: 14px;
          color:#c8c9cc
        }
      }
    }
    .filter-box:hover{
      .el-button{
        border-bottom:1px solid #fff;
      }
      .filter-con{
        display: block;
      }
    }
  }
  .el-button:focus, .el-button:hover{
    color: #3CA060 !important;
    border-color: #ddd;
    background-color: #fff !important;
  }
</style>
