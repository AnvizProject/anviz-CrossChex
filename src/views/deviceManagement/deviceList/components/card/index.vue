<template>
  <el-card class="card-select">
    <div slot="header" class="header clearfix" title="123" @click="drawer">
      <div class="left">
        <img src="./c2slim.png" alt="">
      </div>
      <div class="middle">
        <div class="department">研发部</div>
        <div class="ip">192.168.60.107</div>
        <div class="group">Anviz 设备组</div>
      </div>
      <div class="right">
        <div @click.stop="stop">
          <el-radio v-model="selected" :label="val" class="radio" @change="change"/>
        </div>
      </div>
    </div>
    <div class="icon">
      <span class="icon-cursor icon-psd-lock display"/>
      <!-- <span class="icon-cursor icon-psd-open open"/> -->
      <span class="icon-cursor icon-data-import"/>
      <el-dropdown :hide-on-click="false" trigger="click">
        <span class="el-dropdown-link">
          <span class="icon-cursor icon-setting"/><i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <drawer ref="drawer"/>
  </el-card>
</template>

<script>
import drawer from './drawer'
export default {
  components: { drawer },
  props: {
    val: {
      type: Object,
      default: () => {}
    },
    key: {
      type: Number,
      default: null
    },
    selected: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      radio: 1
    }
  },
  methods: {
    drawer() {
      this.$refs.drawer.drawer = true
    },
    change() {
      this.$emit('radio', this.radio)
    },
    stop() {
      // 阻止点击单选按钮事件冒泡的空函数
    }
  }
}
</script>

<style lang="scss">
  .header{
    display: flex;
    cursor: pointer;
    .left,.right,.middle{
      width: 33%;
    }
    .right>div{
      width: 33px;
      overflow: hidden;
      margin: 0 0 0 auto;
    }
    .left{
      border-right: 1px #F3F3F3 solid;
      img{
        width: 90px;
        height: 90px;
      }
    }
    .middle{
      padding: 6px 13px;
      font-size: 12px;
      color: #AAA;
      .department{
        font-size: 18px;
        color: #58585A;
      }
    }
  }
  .icon{
    font-size: 32px;
    display: flex;
    justify-content: space-around;
    .icon-cursor {
      cursor: pointer;
    }
    .el-dropdown-link>span{
      font-size: 32px;
    }
    .display{
      color: #dedbdc;
    }
    .open{
      color: #d0021b;
    }
  }
</style>

<style lang="scss">
  .card-select{
    .el-card__header{
      border-bottom: 1px solid #EBEEF5;
      box-shadow: none;
      padding: 12px;
      line-height: unset;
    }
    .el-radio__inner{
      background: #FFF !important;
      width: 25px;
      height: 25px;
    }
    .el-radio{
      &.is-checked{
        position: relative;
        & .el-radio__input:after {
          content: "";
          display: block;
          height: 25px;
          width: 25px;
          background-image: url('../../../../../assets/checkbox.png');
          background-size: 100%;
          position: absolute;
          right:0px;
          top:0;
        }
      }
    }
    .el-card__body{
      padding: 3px 0;
    }
  }
</style>
