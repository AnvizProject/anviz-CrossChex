<template>
  <div class="shift">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="50%"
      center>
      <span slot="title" class="dialog-header">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>调动部门</div>
        <el-button size="mini" type="primary" @click="save">确 定</el-button>
      </span>
      <el-tree
        :data="data"
        :props="defaultProps"
        :accordion="true"
        :expand-on-click-node="false"
        default-expand-all
        @node-click="handleNodeClick"/>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    user_id: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      data: [],
      list: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      Deptid: 0
    }
  },
  computed: {
    ...mapState({
      deptTree: state => state.interactive.department.deptTree,
      deptList: state => state.interactive.department.deptList
    }),
    treeData() {
      const treeData = []
      this.list.forEach((v, k) => {
        treeData.push({ label: v.DeptName, children: [], Deptid: v.Deptid, SupDeptid: v.SupDeptid })
      })
      return treeData
    }
  },
  watch: {
    deptList() {
      this.list = this.deptList
      // console.log(this.list)
    },
    deptTree() {
      this.data = this.Tree(this.treeData, 0)
      // console.log(this.treeData)
      this.depart_title = this.deptTree[0].DeptName
      this.SupDeptid = this.deptTree[0].Deptid
      this.Deptid = this.deptTree[0].Deptid
      this.row_data = Object.assign({}, this.data[0])
    }
  },
  methods: {
    // 部门列表无限循环
    Tree(data, parentId = '') {
      const tree = []
      let temp
      data.forEach((item, index) => {
        if (data[index].SupDeptid === parentId) {
          const obj = data[index]
          temp = this.Tree(data, data[index].Deptid)
          if (temp.length > 0) {
            obj.children = temp
          }
          tree.push(obj)
        }
      })
      return tree
    },
    // 部门列表点击
    handleNodeClick(data) {
      this.Deptid = data.Deptid
    },
    // 数据初始默认值
    form(data) {
      this.data[0].label = data.DeptName
    },
    save() {
      this.$store.dispatch('interactive/Transfer', { userid: this.user_id.join(','), Deptid: this.Deptid }).then(response => {
        this.$message({
          type: 'success',
          message: '调动成功!'
        })
        setTimeout(() => {
          this.centerDialogVisible = false
        }, 300)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
