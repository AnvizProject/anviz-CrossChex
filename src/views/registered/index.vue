<template>
  <div v-show="flag" class="register">
    <el-button size="mini" class="closed" icon="el-icon-close" circle @click="closed"/>
    <el-container>
      <el-header>
        <el-steps :active="active" finish-status="success">
          <el-step title="注册"/>
          <el-step title="数据库"/>
          <el-step title="部门"/>
          <el-step title="员工"/>
          <el-step title="考勤"/>
          <el-step title="排班"/>
          <el-step title="设备"/>
        </el-steps>
      </el-header>
      <el-main>
        <div v-if="active===0" class="main-item">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>注册信息带 * 必填</span>
            </div>
            <div class="text item">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="70px" class="demo-ruleForm">
                      <el-form-item label="联系人" prop="name">
                        <el-input v-model="ruleForm.name"/>
                      </el-form-item>
                      <el-form-item label="公司" prop="company">
                        <el-input v-model="ruleForm.company"/>
                      </el-form-item>
                      <el-form-item label="国家" prop="country">
                        <el-input v-model="ruleForm.country"/>
                      </el-form-item>
                      <el-form-item label="邮箱" prop="mail">
                        <el-input v-model="ruleForm.mail"/>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">
                    <el-form :model="ruleForm" label-width="70px" class="demo-ruleForm">
                      <el-form-item label="电话">
                        <el-input v-model="ruleForm.phone"/>
                      </el-form-item>
                      <el-form-item label="网站">
                        <el-input v-model="ruleForm.web"/>
                      </el-form-item>
                      <el-form-item label="地址">
                        <el-input v-model="ruleForm.address" type="textarea"/>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
              </el-row>
            </div>
            <ul class="point">
              <li>1、该软件为免费版软件，为了保证能更好的获得服务，请注册后使用</li>
              <li>2、我们注册信息通过加密传输,请放心使用</li>
              <li>3、该信息仅使用于我们提供技术服务支持使用</li>
              <li>4、软件注册需要Internet连接。如果未连接到Internet,注册信息将会保存在本地 ，待连接将会自动注册。</li>
            </ul>
          </el-card>
        </div>
        <div v-if="active===1" class="main-item" >
          <el-card class="box-card">
            <div class="text item">
              <el-form class="data-selection" auto-complete="on" label-position="left" label-width="25%">
                <el-form-item label="服务器IP">
                  <el-input v-model="form.db_host"/>
                </el-form-item>
                <el-form-item label="服务器端口">
                  <el-input v-model="form.db_port"/>
                </el-form-item>
                <el-form-item label="用户名称">
                  <el-input v-model="form.db_username"/>
                </el-form-item>
                <el-form-item label="用户密码">
                  <el-input v-model="form.db_password" :type="pwdType"/>
                </el-form-item>
                <el-form-item label="数据库名">
                  <el-select v-model="form.db_database" filterable placeholder="请选择">
                    <el-option v-for="(v,k) in db_name" :key="k" :label="v" :value="v"/>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
        <div v-if="active===2" class="main-item">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>部门设置</span>
              <span style="float:right">
                <el-button type="primary" size="mini" @click="add">新增</el-button>
                <el-button type="primary" size="mini" @click="modify">修改</el-button>
                <el-button type="danger" size="mini" @click="depart_del">删除</el-button>
              </span>
            </div>
            <div class="text item">
              <tree ref="tree" :tree-data-list="data" @selectedItem="handleNodeClick"/>
            </div>
          </el-card>
        </div>
      </el-main>
      <el-footer>
        <el-button style="margin-top: 12px;" size="small " @click="previous">上一步</el-button>
        <el-button style="margin-top: 12px;" size="small " @click="next">下一步</el-button>
      </el-footer>
    </el-container>
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
      active: 0,
      flag: true,
      ruleForm: {
        name: '',
        company: '',
        country: '',
        mail: '',
        phone: '',
        web: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入公司', trigger: 'blur' }
        ],
        country: [
          { required: true, message: '请输入国家', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      },
      form: {
        db_host: '',
        db_port: '',
        db_username: '',
        db_password: '',
        db_database: ''
      },
      db_name: [],
      pwdType: 'password',
      // 部门
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
    this.get_db({ cmd: 'get_db' })
    setTimeout(() => {
      this.get_db({ cmd: 'databases', db_host: this.form.db_host, db_port: this.form.db_port, db_username: this.form.db_username, db_password: this.form.db_password })
    }, 500)
    this.depart_list()
  },
  methods: {

    // 获取数据库配置
    get_db(cmd) {
      this.$store.dispatch('interactive/Get_db', cmd).then(response => {
        console.log(response)
        if (cmd.cmd === 'init_db') {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }
        if (cmd.cmd === 'get_db') {
          this.form.db_host = response.db_config.db_host
          this.form.db_port = response.db_config.db_port
          this.form.db_username = response.db_config.db_username
          this.form.db_password = response.db_config.db_password
          this.form.db_database = response.db_config.db_database
        } else {
          // console.log(response)
          this.db_name = response.databases
        }
      }).catch(error => {
        console.log(error)
      })
    },
    request() {
      this.form.cmd = 'init_db'
      this.get_db(this.form)
    },

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
    },

    closed() {
      this.flag = false
      console.log(this.flag)
    },
    previous() {
      if (this.active-- < 0) this.active = 6
    },
    next() {
      if (this.active === 0) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            if (this.active++ > 6) this.active = 0
          } else {
            return false
          }
        })
      } else {
        if (this.active++ > 6) this.active = 6
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .closed{
    position: absolute;
    right:15px;
    top:15px
  }
  .flag{
    display: none;
  }
  .register{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    // background: #fff;
    background: linear-gradient(213deg, #13547a 0%, #80d0c7 100%);
    z-index: 1002;
    .el-container{
      width: 50%;
      height: auto;
      margin: 0 auto;
      padding: 20px 0;
    }
    .el-footer{
      text-align: right;
    }
    .point{
      li{
        margin-bottom: 10px;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
</style>
<style lang="scss">
  .register{
    .el-card__header{
      padding: 10px;
    }
    .el-form-item__label{
      text-align: center;
    }
    .el-textarea__inner{
      min-height: 102px !important;
    }
  }
</style>
