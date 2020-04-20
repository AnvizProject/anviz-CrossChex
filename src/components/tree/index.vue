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
export default {
  props: {
    treeDataList: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      data: JSON.parse(JSON.stringify(this.treeDataList)),
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
    append(data) {
      const newChild = { Deptid: data.addRow.Deptid, label: data.addRow.DeptName, children: [] }
      if (!data.row.children) {
        this.$set(data.row, 'children', [])
      }
      data.row.children.push(newChild)
    },
    remove() {
      const parent = this.selectedNode.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === this.selectedItem.id)
      children.splice(index, 1)
    },
    edit(id, label) {
      console.log(this.treeDataList, id, label)
      this.subEdit(this.treeDataList, id, label)
    },
    subEdit(arr, id, name) {
      arr.forEach((v, k) => {
        if (v.Deptid !== id) {
          this.subEdit(v.children, id, name)
        } else {
          console.log(arr, id, name)
          v.label = name
        }
      })
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
