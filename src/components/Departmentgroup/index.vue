<template>
  <span class="filter-box">
    <el-button :style="{'color':fontColor}" size="mini" @mouseover.native="move" @mouseleave.native="leave">{{ value }}<i :class="ok ? 'icon-under' : 'icon-up'"/></el-button>
    <div class="filter-con">
      <p class="filter-all">所有部门</p>
      <div v-for="(item, index) in dep_list" :key="index">
        <p class="filter-title" >{{ item.DeptName }}</p>
        <div v-for="(item, index) in item.SubDept" :key="index" class="secondary">
          <span class="sec-title">{{ item.DeptName }}</span>
          <span>
            <ul>
              <p v-if="item.SubDept.length===0" class="hint">暂无部门</p>
              <li v-for="(item, index) in item.SubDept" :key="index" @click="list(item.DeptName)">{{ item.DeptName }}</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </span>
</template>
<script>
export default {
  data() {
    return {
      ok: true,
      value: '部门组',
      dep_list: [],
      fontColor: '#58585A'
    }
  },
  mounted: function() {
    this.depart_list()
  },
  methods: {
    move() {
      this.ok = false
    },
    leave() {
      this.ok = true
    },
    // 部门列表
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        this.dep_list = response.dept_tree
      }).catch(error => {
        console.log(error)
      })
    },
    // 部门列表点击
    list(DeptName) {
      this.value = DeptName
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
      .secondary{
        display: flex;
        .sec-title{
          white-space: nowrap;
          margin-right: 15px;
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
