<template >
  <div class="department main-content">
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-input
            v-model="input"
            size="mini"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"/>
          <!-- <el-tree
            :data="data"
            :props="defaultProps"
            :accordion="true"
            @node-click="handleNodeClick"/> -->
          <tree ref="tree" :tree-data-list="data" @selectedItem="handleNodeClick"/>
        </div>
      </el-col>

      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ depart_title }}</span>
            </div>
            <div class="text item">
              <p class="fun-btn">
                <el-button type="primary" size="mini" @click="add">新增</el-button>
                <el-button type="primary" size="mini" @click="modify">修改</el-button>
                <el-button type="danger" size="mini" @click="depart_del">删除</el-button>
              </p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <Dialog ref="Dialog" :de_data="de_data" :rowData="row_data" :dept="data" :Deptid="Deptid" @addRow="append" @edit="edit"/>
  </div>
</template>
<script>
import Dialog from './components/Dialog/adddepartment'
import tree from '@/components/tree'
export default {
  components: {
    Dialog,
    tree
  },
  data() {
    return {
      data: [],
      list: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      input: '',
      depart_title: '',
      de_data: null,
      SupDeptid: null,
      Deptid: 0,
      row_data: null
    }
  },
  computed: {
    treeData() {
      const treeData = []
      this.list.forEach((v, k) => {
        treeData.push({ label: v.DeptName, children: [], Deptid: v.Deptid, SupDeptid: v.SupDeptid })
      })
      return treeData
    }
  },
  mounted() {
    this.depart_list()
  },
  methods: {
    // 部门列表
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        this.list = response.dept
        this.data = this.Tree(this.treeData, 0)
        this.depart_title = response.dept_tree[0].DeptName
        this.SupDeptid = response.dept_tree[0].Deptid
        this.Deptid = response.dept_tree[0].Deptid
        this.row_data = Object.assign({}, this.data[0])
      }).catch(error => {
        console.log(error)
      })
    },
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
    // 部门新增
    add() {
      this.$refs.Dialog.dialogVisible = true
      this.$refs.Dialog.dialogtitle = '新增部门'
      this.de_data = 1
      this.$refs.Dialog.form.DeptName = ''
    },
    append(data) {
      this.$refs.tree.append(data)
    },
    // 部门修改
    modify() {
      this.$refs.Dialog.dialogVisible = true
      this.$refs.Dialog.dialogtitle = '修改部门'
      this.de_data = 0
      this.$refs.Dialog.form.DeptName = this.depart_title
    },
    edit(data) {
      this.$refs.tree.edit(data.Deptid, data.DeptName)
      this.depart_title = data.DeptName
    },
    // 部门删除
    depart_del() {
      this.$confirm('是否确定删除此部门?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('interactive/Depart_delete', { Deptid: this.Deptid }).then(response => {
          this.depart_list()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch((error) => {
          console.log(error)
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 部门列表点击
    handleNodeClick(data) {
      this.depart_title = data.label
      this.SupDeptid = data.Deptid
      this.Deptid = data.Deptid
      this.row_data = data
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-row{
    display: flex;
    height: 100%;
    .grid-content{
      height: 100%;
      background: #fff;
      border-radius: 4px;
      box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
      .el-tree{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height:calc(100% - 40px);
        overflow: auto;
        margin: 0 10px 0 0;
      }
      .el-card.is-always-shadow{
        height: 100%;
      }
      .el-input{
       width: 95%;
       margin: 6px 2.5%;
      }
    }
  }
  .fun-btn{
    text-align: right;
    margin-bottom:15px;
  }
</style>
