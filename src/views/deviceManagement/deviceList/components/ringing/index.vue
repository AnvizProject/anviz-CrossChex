<template>
  <div class="ringing-dialog">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClo"
      width="60%"
      center>
      <span slot="title" class="dialog-header ">
        <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
        <div>打铃设置</div>
        <el-button size="mini" type="primary" @click="save">确 定</el-button>
      </span>
      <div class="parameter">
        <span class="parameter-item">
          <h4>打铃时间列表</h4>
          <ul class="time-list">
            <li v-for = "(v,k) in ring_data" v-if="!(Number(v.week) == 0 && v.ring_time == '00:00')" :key="k" :class="{bg:k==isactive}" class="time-list-item" @click="time_click(k)">
              <el-checkbox v-model="v.checked" @change="checkedList(k, v.checked)">
                <span>{{ v.ring_time }}</span>
              </el-checkbox>
              <span class="el-icon-arrow-right"/>
            </li>
            <!-- <li v-for = "(v,k) in ring_data" v-if="!(Number(v.week) === 0 && v.ring_time === '00:00')" :key="k" :class="{bg:k==isactive}" class="time-list-item" @click="time_click(k)">
              <span>{{ v.ring_time }}</span>
              <span class="el-icon-arrow-right"/>
            </li> -->
          </ul>
        </span>
        <span class="parameter-item">
          <h4>详细信息</h4>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="打铃时间">
              <el-col :span="12">
                <el-time-picker
                  v-model="form.ring_time"
                  value-format="HH:mm"
                  format="HH:mm"
                  placeholder="请选择时间"/>
              </el-col>
            </el-form-item>
          </el-form>
          <div class="week">
            <el-checkbox v-model="form.weekinfo.MON" :true-label="1" :false-label="0">星期一</el-checkbox>
            <el-checkbox v-model="form.weekinfo.TUE" :true-label="1" :false-label="0">星期二</el-checkbox>
            <el-checkbox v-model="form.weekinfo.WED" :true-label="1" :false-label="0">星期三</el-checkbox>
            <el-checkbox v-model="form.weekinfo.THU" :true-label="1" :false-label="0">星期四</el-checkbox>
            <el-checkbox v-model="form.weekinfo.FRI" :true-label="1" :false-label="0">星期五</el-checkbox>
            <el-checkbox v-model="form.weekinfo.SAT" :true-label="1" :false-label="0">星期六</el-checkbox>
            <el-checkbox v-model="form.weekinfo.SUN" :true-label="1" :false-label="0">星期天</el-checkbox>
          </div>
        </span>
      </div>
      <div slot="footer">
        <el-row>
          <el-button size="small" type="primary" @click="add_time">增加</el-button>
          <el-button size="small" type="warning" @click="edit_time">修改</el-button>
          <el-button size="small" type="danger" @click="del_time">删除</el-button>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    ring_data: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      isactive: 0,
      form: {
        ring_time: '',
        weekinfo: {
          MON: 0,
          TUE: 0,
          WED: 0,
          THU: 0,
          FRI: 0,
          SAT: 0,
          SUN: 0
        }
      },
      selectedList: {}
    }
  },
  mounted() {
    this.ring_data.forEach(v => {
      v.checked = false
    })
  },
  methods: {
    checkedList(key, state) {
      if (state === false) {
        delete this.selectedList[key]
      } else {
        this.selectedList[key] = state
      }
      console.log(this.selectedList)
    },
    time_click(index) {
      this.form.ring_time = this.ring_data[index].ring_time
      this.form.weekinfo.MON = this.ring_data[index].weekinfo.MON
      this.form.weekinfo.TUE = this.ring_data[index].weekinfo.TUE
      this.form.weekinfo.WED = this.ring_data[index].weekinfo.WED
      this.form.weekinfo.THU = this.ring_data[index].weekinfo.THU
      this.form.weekinfo.FRI = this.ring_data[index].weekinfo.FRI
      this.form.weekinfo.SAT = this.ring_data[index].weekinfo.SAT
      this.form.weekinfo.SUN = this.ring_data[index].weekinfo.SUN
      this.isactive = index
    },
    add_time() {
      console.log(this.ring_data)
      for (let i = 0; i < this.ring_data.length; i++) {
        if (this.ring_data[i].ring_time === this.form.ring_time) {
          this.$message({
            message: '不允许设置重复时间',
            type: 'warning'
          })
          return
        } else if (Number(this.ring_data[i].week) === 0 && this.ring_data[i].ring_time === '00:00') {
          console.log(i)
          const obj = Object.assign({}, this.form)
          console.log(obj)
          this.$set(this.ring_data, i, obj)
          break
        }
      }
    },

    edit_time() {
      this.$set(this.ring_data, this.isactive, this.form)
      console.log(this.ring_data)
    },
    del_time() {
      for (const i in this.selectedList) {
        console.log(i)
        this.ring_data[i].ring_time = '00:00'
        this.ring_data[i].weekinfo.MON = 0
        this.ring_data[i].weekinfo.TUE = 0
        this.ring_data[i].weekinfo.WED = 0
        this.ring_data[i].weekinfo.THU = 0
        this.ring_data[i].weekinfo.FRI = 0
        this.ring_data[i].weekinfo.SAT = 0
        this.ring_data[i].weekinfo.SUN = 0
        this.form.ring_time = ''
        this.form.weekinfo.MON = 0
        this.form.weekinfo.TUE = 0
        this.form.weekinfo.WED = 0
        this.form.weekinfo.THU = 0
        this.form.weekinfo.FRI = 0
        this.form.weekinfo.SAT = 0
        this.form.weekinfo.SUN = 0
      }
    },
    save() {
      this.ring_data.forEach((v, k) => {
        this.$set(this.ring_data, k, JSON.stringify(v))
      })
      this.$emit('ring_set', this.ring_data)
      this.ring_data.forEach((v, k) => {
        this.$set(this.ring_data, k, JSON.parse(v))
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .device-dialog .dialog-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .parameter{
        display: flex;
  }
  .parameter-item{
    background:#fff;
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.13);
    border-radius:5px;
    padding: 10px;
    &:first-child{
      padding: 10px 0;
      h4{
        padding: 0 10px;
      }
    }
    h4{
      margin:3px 0 5px;
    }
    &:first-child{
      margin-right: 0.5%;
      width: 20%;
    }
    &:last-child{
      margin-left: 0.5%;
      width: 79%;
    }
  }
  ul{
    list-style: none;
    padding-left: 0;
    .time-list-item{
      cursor: pointer;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover{
        background: rgba(123,192,180,0.1);
      }
    }
    .bg{
      background: rgba(123,192,181,0.2);
    }
  }
  .el-row{
    background: #fff;
    padding: 8px 0;
  }
  .week{
    .el-checkbox{
      margin-bottom: 15px;
    }
  }
</style>
