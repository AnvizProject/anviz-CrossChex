<template>
  <div id="app">
    <treeselect :normalizer="normalizer" v-model="value" :multiple="false" :options="options" :clearable="true" @select="select" />
    <el-input v-model="input" placeholder="请输入内容"/>
  </div>
</template>

<script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  // register the component
  components: { Treeselect },
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
      input: '',
      normalizer(node) {
        return {
          id: node.devicegroupid,
          label: node.devicegroupname,
          children: node.FingerClient
        }
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
