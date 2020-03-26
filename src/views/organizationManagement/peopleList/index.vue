<template>
  <div>
    <search :search="search"/>
    <Container :total="total" @per_page="people_list">
      <span slot="header" class="con-item">
        <div class="header-item">
          <el-button type="info" size="mini" @click="Adduser">增加</el-button>
          <el-button type="info" size="mini" disabled>修改</el-button>
          <el-dropdown>
            <el-button type="info" size="mini">更多操作<i class="el-icon-arrow-down el-icon--right"/></el-button>
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
      </span>
      <span slot="main">
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
            label="工号"/>
          <el-table-column
            prop="Name"
            label="姓名"
            width="120"/>
          <el-table-column
            prop="Sex"
            label="性别"
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
              <span class="icon-edit"/>
              <span class="icon-recycle"/>
              <span>查看更多</span>
            </template>
          </el-table-column>
        </el-table>
      </span>
    </Container>
    <editDialog ref="editDialog"/>
  </div>
</template>

<script>
import Search from '@/components/search'
import Container from '@/components/container'
import Dropdown from '@/components/Dropdown'
import editDialog from '../components/Dialog/EDIT'
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
      total: null,
      multipleSelection: []
    }
  },
  mounted: function() {
    this.All_groups_list()
    this.depart_list()
    this.people_list(1)
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
      this.$store.dispatch('interactive/userList', { per_page: per_page, Deptid: this.Deptid }).then(response => {
        this.tableData = response.userinfo_list.data
        this.total = response.userinfo_list.total
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 表格数据
    handleSelectionChange(val) {
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
      }
      .el-dropdown + .el-dropdown {
        margin-left: 15px;
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
</style>
