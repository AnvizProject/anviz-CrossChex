<template>
  <div>
    <!-- <pre>{{ treeDataList }}</pre>
    <pre>{{ data }}</pre> -->
    <el-tree
      ref="tree"
      :data="treeDataList"
      :expand-on-click-node="false"
      node-key="id"
      @node-click="handleNodeClick"/>
  </div>
</template>

<script>
let id = 1000
export default {
  props: {
    treeDataList: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      // data: JSON.parse(JSON.stringify(this.treeDataList)),
      selectedItem: '',
      selectedNode: ''
    }
  },
  methods: {
    handleNodeClick(data) {
      this.selectedItem = data
      this.$emit('selectedItem', this.selectedItem)
      this.selectedNode = this.$refs.tree.getNode(data)
    },
    append() {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!this.selectedItem.children) {
        this.$set(this.selectedItem, 'children', [])
      }
      this.selectedItem.children.push(newChild)
    },
    remove() {
      console.log(this.selectedNode)
      const parent = this.selectedNode.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === this.selectedItem.id)
      children.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  } */
</style>
