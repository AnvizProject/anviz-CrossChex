<template>
  <div class="shift">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="50%"
      center>
      <span slot="title" class="dialog-header">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>设置权限</div>
        <el-button :disabled="disabled" size="mini" type="primary" @click="save">确 定</el-button>
      </span>
      <el-tree
        ref="tree"
        :data="treeData"
        :props="defaultProps"
        :accordion="true"
        :default-checked-keys="defaultKey"
        show-checkbox
        node-key="id"
        default-expand-all/>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    group_list: {
      type: Array,
      default: () => {}
    },
    checkedList: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      data: [],
      list: [],
      defaultKey: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      clientids: [],
      disabled: false
    }
  },
  computed: {
    treeData() {
      const treeData = []
      this.group_list.forEach((v, k) => {
        treeData.push({ label: v.devicegroupname, children: v.FingerClient })
        v.FingerClient.forEach((m, n) => {
          m.label = m.ClientName
          m.id = m.Clientid
          m.number = m.ClientNumber
        })
      })
      return treeData
    }
  },
  watch: {
    defaultKey(val) {
      this.$nextTick(function() {
        this.$refs.tree.setCheckedKeys(val)
      })
    }
  },
  methods: {
    save() {
      this.$emit('setting_authority', this.$refs.tree.getCheckedKeys(true))
    }
  }
}
</script>
