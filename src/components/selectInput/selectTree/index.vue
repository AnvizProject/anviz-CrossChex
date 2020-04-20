<template>
  <div id="app">
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
      default: null
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
      defaultCheckedKeys: []
    }
  },
  created() {
    if (this.deptid) {
      this.defaultCheckedKeys = [this.deptid]
    }
  },
  methods: {
    popoverHide(checkedIds, checkedData) {
      console.log(checkedIds)
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
  }
  .el-popover{
    min-width: 157px;
  }
  .el-tree{
    width: auto !important;
    height: auto !important;
  }
</style>
