<template>
  <el-select-tree
    :data="treeData"
    :props="defaultProps"
    v-model="value"
    placeholder="请选择"
  />
</template>

<script>
import ElSelectTree from 'el-select-tree'

export default {
  components: {
    ElSelectTree
  },
  props: {
    defaultProps: {
      type: Object,
      default: () => {
        return {
          value: 'Deptid',
          children: 'children',
          label: 'label'
        }
      }
    }
  },
  data() {
    return {
      value: null,
      treeData: []
    }
  },
  mounted() {
    this.depart_list()
  },
  methods: {
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        console.log(response)
        this.treeData = response.dept_tree
        this.value = Number(response.dept_tree[0].Deptid)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
