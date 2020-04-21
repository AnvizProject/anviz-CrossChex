<template>
  <div id="app" class="selectTree">
    <select-tree :data = "options" :node-key="nodeKey" :checked-keys="defaultCheckedKeys" :default-props="defaultProps" @popoverHide="popoverHide" />
    <!-- <el-input v-model="input" placeholder="请输入内容"/> -->
  </div>
</template>

<script>
import selectTree from './selectTree'
export default {
  // register the component
  components: { selectTree },
  props: {
    options: {
      type: Array,
      default: () => {}
    },
    deptid: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      input: '',
      defaultProps: {
        id: 'Deptid',
        children: 'children',
        label: 'label'
      },
      nodeKey: 'Deptid',
      defaultCheckedKeys: [this.deptid]
    }
  },
  watch: {
    deptid(val) {
      this.defaultCheckedKeys = [val]
    }
  },
  methods: {
    popoverHide(checkedIds, checkedData) {
      this.$emit('DeptRow', { id: checkedIds, row: checkedData })
    }
  }
}
</script>

<style lang="scss">
  #app{
    display: flex;
    width: 100%;
    .el-select{
      width: 100% !important;
      height: 100%;
    }
    .vue-treeselect{
      width: 50%;
      .vue-treeselect__control{
        height: 100%;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        .vue-treeselect__placeholder{
          top: calc(50% - 8px);
          line-height: unset;
        }
      }
    }
    .tree-wrap{
      .el-input__inner{
        height: 32px;
      }
    }
    .el-input__inner{
      width: 100%;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    &.selectTree{
      .el-input--small .el-input__icon{
        line-height: unset !important
      }
    }
  }
  .el-popover{
    min-width: 157px;
  }
  .el-tree{
    width: auto !important;
    height: auto !important;
  }
</style>
