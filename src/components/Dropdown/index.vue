<template>
  <span class="filter-box">
    <el-button size="mini" @mouseover.native="move" @mouseleave.native="leave">{{ value }}<i :class="ok ? 'icon-under' : 'icon-up'"/></el-button>
    <slot/>
  </span>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      ok: true
    }
  },
  methods: {
    move() {
      this.ok = false
    },
    leave() {
      this.ok = true
    },
    aa() {
      console.log(111)
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
        z-index:2;
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
            color:#3CA060;
            margin-bottom:3px;
            cursor: pointer;
            &:hover{
              color:#8ed6a7
            }
          }
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
    color: #3CA060;
    border-color: #ddd;
    background-color: #fff;
  }
</style>
