<template>
  <mMain :title="title">
    <el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" fixed="left"/>
      <el-table-column :label="$i18n.t('UserList.User_ID')" prop="userid" />
      <el-table-column :label="$i18n.t('UserList.User_Name')" prop="username"/>
      <el-table-column :label="$i18n.t('UserList.Card_ID')" prop="cardid" show-overflow-tooltip />
      <el-table-column :label="$i18n.t('UserList.Operation')" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">{{ $t('btn.edit') }}</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">{{ $t('btn.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-button type="danger" @click="delList">{{ $t('btn.deleteSelected') }}</el-button>
      <el-pagination v-if="!hideOnSinglePage" :total="totalPage" :page-size="pageSize" :pager-count="pagerCount" background layout="prev, pager, next" @current-change="pageChange" />
    </div>
  </mMain>
</template>

<script>
import mMain from '@/components/Main'
export default {
  components: { mMain },
  data() {
    return {
      title: this.$i18n.t('UserList.title'),
      tableData: [],
      totalPage: 0, // 总条数
      pageSize: 10, // 每页条数
      pagerCount: 5, // 分页最大数
      hidePage: true, // 单页隐藏
      multipleSelection: []
    }
  },
  computed: {
    hideOnSinglePage() {
      if (this.totalPage <= this.pageSize) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    this.getUsers(1)
  },
  methods: {
    getUsers(page) {
      const data = { start: (page - 1) * this.pageSize, limit: this.pageSize }
      this.$store.dispatch('UserModule/getUserList', data).then(response => {
        this.tableData = response.record
        this.totalPage = response.count
        return response
      }).catch(error => {
        return error
      })
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleEdit(index, row) {
      this.$router.push({ name: 'edit', params: { id: row.userid, data: row }})
    },
    handleDelete(index, row) {
      this.$confirm(this.$i18n.t('tip.del'), 'tip', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('UserModule/delUser', { userid: row.userid }).then(response => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: response.msg
          })
        }).catch(error => {
          this.$message({
            type: 'error',
            message: 'Fail!'
          })
          console.log(error)
        })
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // })
      })
    },
    delList() {
      const selectID = []
      this.multipleSelection.forEach((v, k) => {
        selectID.push(v.userid)
      })
      const selectIDStr = selectID.join(',')
      console.log(selectID)
      console.log(selectIDStr)
      if (selectID.length <= 0) {
        this.$message(this.$i18n.t('error.userDelInfo'))
      } else {
        this.$confirm(this.$i18n.t('tip.del'), 'tip', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('UserModule/deletSomeUser', { someuserid: selectIDStr }).then(response => {
            for (let i = this.tableData.length - 1; i >= 0; i--) {
              selectID.sort().forEach((v, k) => {
                if (this.tableData[i] === undefined) {
                  return false
                }
                if (this.tableData[i].userid === v) {
                  this.tableData.splice(i, 1)
                  selectID.pop()
                  return false
                }
              })
            }
            this.$message({
              type: 'success',
              message: response.msg
            })
          }).catch(() => {
            this.$message({
              type: 'error',
              message: 'Fail!'
            })
          })
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // })
        })
      }
    },
    pageChange(page) {
      this.getUsers(page)
    }
  }
}
</script>
