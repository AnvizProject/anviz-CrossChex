<template>
  <el-dialog
    :visible.sync="centerDialogVisible"
    :show-close="showClo"
    title="时间段设置"
    width="45%"
    center>
    <span slot="title" class="dialog-header">
      <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
      <div>{{ dialogtitle }}</div>
      <el-button size="mini" type="primary" @click="save">确 定</el-button>
    </span>
    <el-row :gutter="20" class="time-slot">
      <el-col :span="24">
        <div class="grid-content bg-purple day">
          <div class="day-bot day-list">
            <el-form ref="form" :model="form" label-width="110px" size="mini">
              <el-form-item label="时间段名称">
                <el-input v-model="form.Timename"/>
              </el-form-item>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item label="上班时间">
                    <el-time-picker v-model="form.Intime" format="HH:mm" value-format="HH:mm" type="date" placeholder="请选择" style="width: 100%;"/>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="下班时间">
                    <el-time-picker v-model="form.Outtime" format="HH:mm" value-format="HH:mm" type="date" placeholder="请选择" style="width: 100%;"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item label="开始签到时间">
                    <el-time-picker v-model="form.BIntime" format="HH:mm" value-format="HH:mm" type="date" placeholder="请选择" style="width: 100%;"/>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="结束签到时间">
                    <el-time-picker v-model="form.EIntime" format="HH:mm" value-format="HH:mm" type="date" placeholder="请选择" style="width: 100%;"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item label="开始签退时间">
                    <el-time-picker v-model="form.BOuttime" format="HH:mm" value-format="HH:mm" type="date" placeholder="请选择" style="width: 100%;"/>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="结束签退时间">
                    <el-time-picker v-model="form.EOuttime" format="HH:mm" value-format="HH:mm" type="date" placeholder="请选择" style="width: 100%;"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-row :gutter="10">
                    <el-col :span="18">
                      <el-form-item label="记迟到时间">
                        <el-input v-model="form.Latetime"/>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6" class="minute">分钟</el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="10">
                    <el-col :span="19">
                      <el-form-item label="记早退时间">
                        <el-input v-model="form.Leavetime"/>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5" class="minute">分钟</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-row :gutter="10">
                    <el-col :span="18">
                      <el-form-item label="记多少工作日">
                        <el-input v-model="form.WorkDays"/>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5" class="minute"/>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="10">
                    <el-col :span="19">
                      <el-form-item label="记工作时长">
                        <el-input v-model="form.Longtime"/>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5" class="minute">分钟</el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="day-foot">
            <el-form ref="form" :model="form">
              <el-form-item>
                <el-checkbox v-model="form.MustIn" :true-label="1" :false-label="0" label="必须签到" name="type"/>
                <el-checkbox v-model="form.MustOut" :true-label="1" :false-label="0" label="必须签退" name="type"/>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="form.IsFreeTime" :true-label="1" :false-label="0" label="浮动时段" name="type"/>
                <el-checkbox v-model="form.IsOverTime" :true-label="1" :false-label="0" label="加班时段" name="type"/>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
export default {
  props: {
    row: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      showClo: false,
      dialogtitle: '增加时间段',
      form: {
        Timename: '',
        Intime: '',
        Outtime: '',
        BIntime: '',
        EIntime: '',
        BOuttime: '',
        EOuttime: '',
        Latetime: '',
        Leavetime: '',
        WorkDays: '',
        Longtime: '',
        MustIn: '',
        MustOut: '',
        IsFreeTime: '',
        IsOverTime: ''
      },
      value1: '',
      num: 1,
      checked: true,
      multipleSelection: [],
      action: ''
    }
  },
  watch: {
    action(action) {
      if (action === 'add') {
        this.form = {}
      } else if (action === 'edit') {
        this.form = Object.assign({}, this.row)
      }
    }
  },
  methods: {
    // 时间段新增
    save() {
      let url = ''
      if (this.action === 'add') {
        url = 'interactive/Add_time'
      } else if (this.action === 'edit') {
        url = 'interactive/updateTime'
      }
      console.log(this.form)
      this.$store.dispatch(url, this.form).then(response => {
        this.centerDialogVisible = false
        this.$emit('timelist')
      }).catch(() => {
        console.log(0)
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style lang="scss" scoped>
.time-slot{
  display: flex;
}
.day{
    .day-bot.day-list{
      padding: 0 15px;
      margin: 15px 0;
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
    border-top: 1px solid #eee;
    .el-form-item{
      margin-bottom: 0;
    }
    .day-foot-top{
      padding: 15px 10px 0;
    }
    .el-row{
      margin: 20px 0;
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
</style>
