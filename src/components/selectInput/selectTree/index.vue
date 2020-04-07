<template>
  <div id="app">
    <select-tree :data = "options" :default-props="defaultProps" />
    <el-input v-model="input" placeholder="请输入内容"/>
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
    }
  },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      input: '',
      defaultProps: {
        id: 'devicegroupid',
        children: 'FingerClient',
        label: 'devicegroupname'
      }
    }
  },
  methods: {
    select(id) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss">
  #app{
    display: flex;
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
    .el-input__inner{
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
</style>
