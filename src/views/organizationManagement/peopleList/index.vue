<template>
  <div class="organization">
    <search :search="search"/>
    <Container :total="total" @per_page="people_list" @page="people_list">
      <div slot="header" class="con-item">
        <div class="header-item">
          <el-button type="primary" size="mini" @click="Adduser">增加</el-button>
          <el-button :disabled="multipleSelection.length<=0" :type="multipleSelection.length>0?'danger':'info'" size="mini" @click="handleDelete">删除</el-button>
          <el-dropdown>
            <el-button :disabled="multipleSelection.length<=0" type="info" size="mini">更多操作<i class="el-icon-arrow-down el-icon--right"/></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>调动部门</el-dropdown-item>
              <el-dropdown-item>人员离职</el-dropdown-item>
              <el-dropdown-item>设置权限</el-dropdown-item>
              <el-dropdown-item>复制权限</el-dropdown-item>
              <el-dropdown-item>导入人员</el-dropdown-item>
              <el-dropdown-item>导出人员</el-dropdown-item>
              <el-dropdown-item>下载人员</el-dropdown-item>
              <el-dropdown-item>上传人员</el-dropdown-item>
              <el-dropdown-item>下载模板</el-dropdown-item>
              <el-dropdown-item>上传模板</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-item">
          <Dropdown :value="value1">
            <div class="filter-con">
              <p class="filter-all">所有部门</p>
              <div v-for="(item, index) in group_list" :key="index">
                <p class="filter-title">{{ item.devicegroupname }}</p>
                <ul>
                  <li v-if="item.FingerClient.length===0">暂无终端</li>
                  <li v-for ="(t_item, index) in item.FingerClient" :key="index" @click="aa(bbb)">
                    {{ t_item.ClientName }}
                  </li>
                </ul>
              </div>

            </div>
          </Dropdown>
          <Dropdown :value="value2">
            <div class="filter-con">
              <p class="filter-all">所有部门</p>
              <div v-for="(item, index) in dep_list" :key="index">
                <p class="filter-title" >{{ item.DeptName }}</p>
                <div v-for="(item, index) in item.SubDept" :key="index" class="secondary">
                  <span class="sec-title">{{ item.DeptName }}</span>
                  <span>
                    <ul>
                      <li v-if="item.SubDept.length===0">暂无部门</li>
                      <li v-for="(item, index) in item.SubDept" :key="index">{{ item.DeptName }}</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
      <div slot="main">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"/>
          <el-table-column
            prop="UserCode"
            sortable
            width="100px"
            label="工号"/>
          <el-table-column
            label="姓名"
            width="120">
            <template slot-scope="scope">
              <div>{{ scope.row.Name }}</div>
              <div>
                <span type="primary">主要按钮</span>
                <span type="info">信息按钮</span>
                <span type="warning">警告按钮</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Sex"
            label="性别"
            width="100px"
            show-overflow-tooltip/>
          <el-table-column
            prop="Duty"
            label="职务"
            show-overflow-tooltip/>
          <el-table-column
            prop="Mobile"
            label="联系电话"
            show-overflow-tooltip/>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="operating">
                <el-button type="text" size="mini" class="icon icon-edit" @click="handleEdit(scope.$index, scope.row)"/>
                <el-button type="text" size="mini" class="icon icon-recycle" @click="handleDelete(scope.$index, scope.row)"/>
                <el-button type="text" size="mini">查看更多</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </Container>
    <editDialog ref="editDialog" :rowdata="rowdata"/>
  </div>
</template>

<script>
import Search from '@/components/search'
import Container from '@/components/container'
import Dropdown from '@/components/Dropdown'
import editDialog from '../components/Dialog/EDIT'
function check() {
  if (document.getElementById('check1').checked === true) {
    return true
  } else {
    return false
  }
}
export default {
  components: {
    Search,
    Container,
    Dropdown,
    editDialog
  },
  data() {
    return {
      search: '工号、姓名',
      value1: '设备组',
      value2: '部门组',
      group_list: [],
      dep_list: [],
      tableData: [],
      rowdata: {},
      total: null,
      per_page: {
        page: 1,
        perPage: 15
      },
      user_id: [],
      checked: true,
      multipleSelection: []
    }
  },
  computed: {
    user_id_list() {
      const userid = []
      this.multipleSelection.forEach(item => {
        userid.push(item.userid)
      })
      return userid
    }
  },
  mounted: function() {
    this.All_groups_list()
    this.depart_list()
    this.people_list()
  },
  methods: {
    // 增加人员
    Adduser() {
      this.$refs.editDialog.Adduser()
    },
    // 所有组列表
    All_groups_list() {
      this.$store.dispatch('interactive/All_groups_list', {}).then(response => {
        this.group_list = response.DeviceGroup
      }).catch(() => {
        console.log('error')
      })
    },
    // 部门列表
    depart_list() {
      this.$store.dispatch('interactive/Depart_list', {}).then(response => {
        this.dep_list = response.dept_tree
        // console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 人员列表
    people_list(per_page) {
      if (per_page !== undefined) {
        this.per_page = per_page
      }
      console.log(this.per_page, '111')
      this.$store.dispatch('interactive/userList', { per_page: this.per_page.perPage, Deptid: this.Deptid, page: this.per_page.page }).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 修改人员
    handleEdit(index, row) {
      setTimeout(() => {
        this.$refs.editDialog.handleEdit()
      }, 0)
      this.rowdata = Object.assign({}, row)
    },

    handleDelete(index, rows) {
      this.user_id.push(rows.userid)
      this.Delete()
    },

    // 删除人员
    Delete() {
      this.$confirm('<div>123</div><div><input id="check1" type="checkbox" checked="checked" value="">456</div>', '提示', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(check())
        this.$store.dispatch('interactive/userDelete', { userid: this.user_id.join(',') }).then(response => {
          this.people_list()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 表格数据
    handleSelectionChange(val) {
      console.log(val, 'table')
      this.multipleSelection = val
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-header{
    .con-item{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-dropdown {
        vertical-align: top;
        margin-left: 10px;
      }
    }
    .secondary{
      display: flex;
      .sec-title{
        white-space: nowrap;
        margin-right: 15px;
      }
    }
  }
  .el-main{
    .icon{
      font-size: 24px;
      &.icon-edit{
        color:#FA6400;
      }
      &.icon-recycle{
        color:#D0021B;
      }
    }
    .operating{
      height: 28px;
      display: flex;
      .el-button{
        padding: 0px;
      }
    }
  }
</style>
