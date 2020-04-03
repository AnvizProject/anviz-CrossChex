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
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: [{
        id: 'a',
        label: 'a',
        children: [{
          id: 'aa',
          label: 'aa'
        }, {
          id: 'ab',
          label: 'ab'
        }]
      }, {
        id: 'b',
        label: 'b'
      }, {
        id: 'c',
        label: 'c'
      }],
      input: ''
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
