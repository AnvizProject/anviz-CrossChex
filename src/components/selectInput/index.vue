<template>
  <div id="app">
    <treeselect :normalizer="normalizer" v-model="value" :multiple="false" :options="options" :clearable="true" @select="select" />
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
          id: node.Deptid,
          label: node.DeptName,
          children: node.SubDept
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>
