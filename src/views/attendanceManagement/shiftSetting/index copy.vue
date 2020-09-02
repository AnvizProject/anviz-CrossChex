<template >
  <div class="shift main-content">
    <el-row :gutter="10" class="shift-item">
      <el-col :span="6">
        <div class="grid-content bg-purple-light left day">
          <div class="day-top">
            <span>班次列表</span>
          </div>
          <div class="day-bot day-list">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              border
              highlight-current-row>
              <el-table-column label="选择" width="65">
                <template slot-scope="scope">
                  <el-radio :label="scope.row.index" v-model="index" @change.native="getCurrentRow(scope.row)">&nbsp;</el-radio>
                </template>
              </el-table-column>
              <el-table-column
                label="时间段名称">
                <template slot-scope="scope">{{ scope.row.Schname }}</template>
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    @click.native.prevent="deleteRow(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light right day">
          <div class="day-top">
            <span>班次信息</span>
          </div>
          <div class="day-bot day-list">
            <div class="day-bot-top">
              <el-button type="primary" size="mini" @click="addShift">新增班次</el-button>
              <el-button type="primary" size="mini" @click="editShift">修改班次</el-button>
            </div>
            {{ form.Cycles }}
            <el-form ref="form" :inline="true" :model="form" label-width="70px" class="shifts-name">
              <el-form-item label="班次名称">
                <el-input v-model="form.Schname"/>
              </el-form-item>
              <el-form-item label="周期数">
                <el-input-number :min="1" :max="100" v-model="form.Cycles" controls-position="right" @change="handleChange" />
                <!-- <input type="number" :value @change="handleChange"> -->
              </el-form-item>
              <el-form-item label="周期单位">
                <el-select v-model="form.Units" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="form.IsDefault" :true-label="1" :false-label="0">作为新员工默认班次</el-checkbox>
              </el-form-item>
            </el-form>
          </div>
          <div class="day-foot">
            <div class="day-foot-top">
              <el-button type="primary" size="mini" @click="addtime">新增时间段</el-button>
              <el-button type="primary" size="mini" @click="deltime">删除时间段</el-button>
              <el-button type="primary" size="mini" @click="cleartime">清除时间段</el-button>
            </div>
            <div class="shift-list">
              <div class="shift-list-slide">
                <el-row>
                  <el-col :span="24">
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple date-head">日期</div></el-col>
                      <el-col :span="3"><div class="grid-content bg-purple date-head">上班时段一</div></el-col>
                      <el-col :span="3"><div class="grid-content bg-purple date-head">上班时段二</div></el-col>
                      <el-col :span="3"><div class="grid-content bg-purple date-head">上班时段三</div></el-col>
                      <el-col :span="3"><div class="grid-content bg-purple date-head">上班时段四</div></el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <pre/>
                <el-row>
                  <el-col :span="3">
                    <div v-for="(v,k) in form.Cycles" v-if="form.Units===0" :key="k" class="grid-content bg-purple">
                      <div class="date-list">第{{ k+1 }}日</div>
                    </div>
                    <div v-for="(v,k) in form.Cycles" v-if="form.Units===1" :key="k" class="grid-content bg-purple">
                      <div v-for="(x,i) in week" :key="i" class="date-list">{{ x }}</div>
                    </div>
                    <div v-for="(v,k) in form.Cycles" v-if="form.Units===2" :key="k" class="grid-content bg-purple">
                      <div v-for="(x,i) in month" :key="i" class="date-list">{{ x }}日</div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                      <el-row>
                        <el-col v-for="(v,k) in time_list" :key="k" :span="6">
                          <div v-for="(m,n) in v" :key="n">
                            <div v-for="(x,z) in m" v-if="x.Timename!==undefined" :key="z" :class="{'active':currentSort===(k+1)+'-'+(z)}" style="cursor: pointer;" class="grid-content bg-purple date-data" @click="time((k+1)+'-'+(z),k+1,z)">{{ x.Timename }}</div>
                            <div v-else class="grid-content bg-purple date-data">&nbsp;</div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <addshiftDialog ref="addshiftDialog" :addshift_data="form" :sch_time_json="multipleSelection" />
  </div>
</template>
<script>
import addshiftDialog from './components/Dialog/addshift'
export default {
  components: {
    addshiftDialog
  },
  data() {
    return {
      week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      options: [{
        value: 0,
        label: '天'
      }, {
        value: 1,
        label: '周'
      }, {
        value: 2,
        label: '月'
      }],
      index: 0,
      form: {
        Schname: '',
        Cycles: 1,
        Units: 0,
        IsDefault: 0,
        Schid: null
      },
      tableData: [],
      multipleSelection: [],
      currentSort: 0,
      k: 0,
      z: 0

    }
  },
  computed: {
    time_list() {
      const time_list = []
      for (const i in this.multipleSelection.schTimeByArr) {
        time_list.push([])
        time_list[parseInt(i) - 1].push(this.multipleSelection.schTimeByArr[i])
      }
      return time_list
    }
  },
  mounted: function() {
    this.timelist()
  },
  methods: {
    handleChange(value) {
      const newVal = value === '' ? undefined : Number(value)
      if (!isNaN(newVal) || value === '') {
        this.setCurrentValue(newVal)
      }
      this.userInput = null
    },
    // 班次列表
    timelist() {
      this.$store.dispatch('interactive/Shiftlist').then(response => {
        console.log(response)
        response.Schedule.forEach((v, k) => {
          v.index = k
        })
        this.tableData = response.Schedule
        this.form = {
          Schname: response.Schedule[this.index].Schname,
          Cycles: response.Schedule[this.index].Cycles,
          Units: response.Schedule[this.index].Units,
          IsDefault: response.Schedule[this.index].IsDefault,
          Schid: response.Schedule[this.index].Schid
        }
        if (response.Schedule.length !== 0) {
          this.multipleSelection = response.Schedule[this.index]
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 新增班次
    addShift() {
      this.$store.dispatch('interactive/Addshift', this.form).then(response => {
        this.$message({
          message: '新增成功',
          type: 'success'
        })
        this.timelist()
      }).catch(error => {
        console.log(error)
      })
    },
    // 班次修改
    editShift() {
      this.$store.dispatch('interactive/Updateshift', this.form).then(response => {
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.timelist()
      }).catch(error => {
        console.log(error)
      })
    },
    // 班次删除
    deleteRow(row) {
      console.log(row.Schid)
      this.$store.dispatch('interactive/Delshift', { Schid: row.Schid }).then(response => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.timelist()
      }).catch(error => {
        console.log(error)
      })
    },
    // 班次列表单选
    getCurrentRow(row) {
      console.log(row)
      this.multipleSelection = row
      this.form = {
        Schname: row.Schname,
        Cycles: row.Cycles,
        Units: row.Units,
        IsDefault: row.IsDefault,
        Schid: row.Schid
      }
    },
    // 新增时间段
    addtime() {
      this.$refs.addshiftDialog.centerDialogVisible = true
      this.$refs.addshiftDialog.checkAll = false
      this.$refs.addshiftDialog.checkeddate = []
    },
    // 清除时间段
    cleartime() {
      this.$store.dispatch('interactive/Deltime', { Timeid: -1, BeginDay: -1, Schid: this.multipleSelection.Schid }).then(response => {
        this.timelist()
      }).catch(error => {
        console.log(error)
      })
    },
    time(index, k, z) {
      this.currentSort = index
      this.k = k
      this.z = z
    },
    // 删除时间段
    deltime() {
      console.log(this.time_list)
      this.time_list.forEach((v, k) => {
        if (k + 1 === this.k) {
          console.log(v, 'v')
          v.forEach((m, n) => {
            console.log(m, 'm')
            m.forEach((i, j) => {
              // console.log(i, 'i')
              if (j === this.z) {
                console.log(i)
                this.$store.dispatch('interactive/Deltime', { Timeid: i.Timeid, BeginDay: i.BeginDay, Schid: i.Schid }).then(response => {
                  this.timelist()
                }).catch(error => {
                  console.log(error)
                })
              }
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.shift-item{
  display: flex;
}
.el-row{
  height: 100%;
  overflow: hidden;
}
.el-form-item{
  margin-bottom: 0;
}
.day{
    height: 100%;
    background: #fff;
    border-radius: 5px;
    overflow: auto;
    &.right{
      .day-bot.day-list{
        border-bottom: 1px solid #eee;
      }
    }
    .day-top{
      width: 100%;
      background:rgba(244,244,244,1);
      border-bottom:1px solid rgba(0,0,0,0.1);
      padding: 5px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &.top-title{
        text-align: center;
        justify-content: center;
      }
    }

    .day-bot.day-list{
      padding: 15px;
      .day-bot-top{
        margin-bottom: 15px;
      }
    }
  }
  .line{
    text-align: center;
  }
  .minute{
    line-height: 28px;
  }
  .day-foot{
    margin: 0 10px;
    .day-foot-top{
      padding: 15px 10px;
      .el-checkbox{
        margin-left: 20px;
      }
    }
    .shift-list-slide{
      border:1px solid #eee;
      margin-bottom: 15px;
    }
    .date-head{
      border-right:1px solid #eee;
    }
    .date-list,.date-data{
      border-top:1px solid #eee;
      border-right:1px solid #eee;
    }
  }
  .edit-button{
    display: flex;
    padding: 0 30px;
    margin-top: 60px;
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-end;
  }
  .table-title{
    height: 50px;
    display: flex;
    align-items: center;
  }
  .active{
    border:1px solid #47a369 !important;
    border-top:1px solid #47a369 !important;
    border-right:1px solid #47a369 !important;
  }
</style>
<style lang="scss">
    .shift{
      .el-table .cell{
        text-align: center;
      }
      .el-radio__label{
        padding-left: 0;
      }
      .el-radio__inner{
        border-radius: 0%;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        &::after{
          content: "\2713";
          width: auto;
          height: auto;
          color:#fff;
          background-color: transparent;
        }
      }
    }
</style>
