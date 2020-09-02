<template>
  <div class="hello">
    <el-tree
      ref="tree"
      :data="treeData"
      :default-checked-keys="[1]"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
      check-strictly
      @node-click="handleNodeClick"
      @check-change="handleCheckChange"/>
    <div class="btn">
      <el-button size="mini" type="primary" @click="selectAllNodes">全选</el-button>
      <el-button size="mini" type="primary" @click="clearAllNodes">清空</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      defaultProps: {
        children: 'childList',
        label: 'label'
      },
      treeData: [
        {
          id: 1,
          label: '一级 1',
          childList: [
            {
              id: 4,
              label: '二级 1-1',
              childList: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          childList: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          childList: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      checkAll: false
    }
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data);
      this.$refs.tree.getCheckedKeys()
    },
    handleCheckChange(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate);
    },
    // 全选
    selectAllNodes: function() {
      //  获取根节点
      const rootNode = this.$refs.tree.getNode(this.treeData[0].id).parent
      travelNodes(rootNode)
      function travelNodes(tmpRoot) {
        // 选中该节点
        tmpRoot.checked = true
        // 叶子节点
        if (tmpRoot.childNodes.length === 0) {
          return
        } else {
          const tmpChildNoes = tmpRoot.childNodes
          for (let i = 0; i < tmpChildNoes.length; i++) {
            travelNodes(tmpChildNoes[i])
          }
        }
      }
    },
    // 清空
    clearAllNodes: function() {
      this.$refs.tree.setCheckedKeys([])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 600px;
  border: 1px solid rgb(209, 203, 203);
  border-radius: 6px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.btn {
  margin-top: 20px;
}
.el-select {
  margin-left: 10px;
  width: 120px;
}
</style>
