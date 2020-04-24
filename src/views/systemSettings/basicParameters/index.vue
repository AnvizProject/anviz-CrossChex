<template >
  <div class="basic main-content">
    <el-row :gutter="10">
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>自定义字段设置</span>
            </div>
            <div>
              <el-form :inline="true" :model="field" class="demo-form-inline word-name">
                <el-form-item label="字段名称" class="word-box">
                  <el-input v-model="field.word"/>
                </el-form-item>
                <el-form-item class="word-but">
                  <el-button type="primary" size="small" @click="add_word">新增</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div style="text-align: center">
              <el-transfer
                v-model="value"
                :render-content="renderFunc"
                :titles="['字段列表']"
                :data="data"
                filterable
                style="text-align: left; display: inline-block"
                @left-check-change="handleWHLeftChange">
                <span slot-scope="{ option }">{{ option.label }}</span>
                <el-button slot="left-footer" class="transfer-footer" size="small" @click="delete_all(1)">清除所有字段</el-button>
                <el-button slot="left-footer" icon="el-icon-delete" class="transfer-footer" size="small" @click="delete_all('',hasCheckedWHLeftData)"/>
              </el-transfer>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="grid-content bg-purple-light communication">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>通讯参数</span>
              <el-button type="primary" size="small" style="float:right" @click="comm_use('update_config')">应用</el-button>
            </div>
            <div class="text item">
              <el-form label-width="300px" label-position="left">
                <el-form-item label="串口通讯超过时间(单位：秒)">
                  <selectbox :options="basic_options.time1" v-model="form.comport_delaytime"/>
                </el-form-item>
                <el-form-item label="网络通讯超过时间 (单位：秒)">
                  <selectbox :options="basic_options.time2" v-model="form.network_delaytime	"/>
                </el-form-item>
                <el-form-item label="RS485通讯超过时间 (单位：毫秒)">
                  <selectbox :options="basic_options.time3" v-model="form.rs485_delaytime"/>
                </el-form-item>
                <el-form-item label="网络通讯端口">
                  <el-input v-model="form.ip_port" placeholder="请填写"/>
                </el-form-item>
                <el-form-item label="人脸端口">
                  <el-input v-model="form.facepass_port" placeholder="请填写"/>
                </el-form-item>
              </el-form>
              <el-checkbox v-model="form.timezone" :true-label="1" :false-label="0">启用时区</el-checkbox>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="download-record">
        <div class="grid-content bg-purple-dark">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>定时下载记录</span>
              <el-button type="primary" size="small" style="float: right" @click="timing_download_but">应用</el-button>
            </div>
            <div class="text item">
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <div class="check-box">
                      <el-checkbox v-model="checked">下载完成自动导出到文本文件</el-checkbox>
                    </div>
                    <el-form ref="form" :model="timing" label-width="110px">
                      <el-form-item label="定时下载时间">
                        <el-row>
                          <el-col :span="11">
                            <el-date-picker v-model="timing.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="2" class="line">-</el-col>
                          <el-col :span="11">
                            <el-time-picker v-model="timing.date2" placeholder="选择时间" style="width: 100%;"/>
                          </el-col>
                        </el-row>
                      </el-form-item>
                    </el-form>
                    <el-form class="file-selection export" auto-complete="on" label-position="left" label-width="110px">
                      <span>
                        <el-form-item label="导出路径">
                          <el-input v-model="timing.date1"/>
                        </el-form-item>
                      </span>
                      <span>
                        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" accept=".mdb">
                          <el-button size="small" type="primary">...</el-button>
                        </el-upload>
                      </span>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">
                    <p>导出字段格式设置</p>
                    <div class="export-word">
                      <span><el-checkbox v-model="checked">考勤号</el-checkbox></span>
                      <span>
                        <el-form label-width="50px" label-position="left">
                          <el-form-item label="位数">
                            <selectbox :options="basic_options.time4" v-model="form.time1"/>
                          </el-form-item>
                        </el-form>
                      </span>
                    </div>
                    <div class="export-word">
                      <span><el-checkbox v-model="checked">时间</el-checkbox></span>
                      <span>
                        <el-form label-width="50px" label-position="left">
                          <el-form-item label="格式">
                            <selectbox :options="basic_options.time5" v-model="form.time1"/>
                          </el-form-item>
                        </el-form>
                      </span>
                    </div>
                    <div class="export-word">
                      <span><el-checkbox v-model="checked">状态</el-checkbox></span>
                      <span>
                        <el-form label-width="50px" label-position="left">
                          <el-form-item label="位数">
                            <selectbox :options="basic_options.time6" v-model="form.time1"/>
                          </el-form-item>
                        </el-form>
                      </span>
                    </div>
                    <div class="export-word">
                      <span><el-checkbox v-model="checked">终端编号</el-checkbox></span>
                      <span>
                        <el-form label-width="50px" label-position="left">
                          <el-form-item label="位数">
                            <selectbox :options="basic_options.time1" v-model="form.time1"/>
                          </el-form-item>
                        </el-form>
                      </span>
                    </div>
                    <div class="export-word separator">
                      <span/>
                      <span>
                        <el-form label-width="60px" label-position="left">
                          <el-form-item label="分隔符">
                            <selectbox :options="basic_options.time7" v-model="form.time1"/>
                          </el-form-item>
                        </el-form>
                      </span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import selectbox from '@/components/select'
import options from '@/components/mixin/basic'
// var field = []
export default {
  components: {
    selectbox
  },
  mixins: [options],
  data() {
    return {
      field: {
        word: ''
      },
      form: {
        cmd: '',
        comport_delaytime: 0,
        network_delaytime: 0,
        rs485_delaytime: 0,
        ip_port: 0,
        facepass_port: 0,
        timezone: 0
      },
      timing: {
        date1: '',
        date2: ''
      },
      data: [],
      value: [],
      delete_all_num: 1,
      hasCheckedWHLeftData: [],
      checked: true,
      renderFunc(h, option) {
        return <span>{ option.label }</span>
      }
    }
  },
  mounted() {
    this.base_para_details()
    this.comm_use('get_config')
  },
  methods: {
    // 新增字段
    add_word() {
      if (this.form.word === '') {
        this.$message.error('字段名称为空！')
        return
      }
      console.log(this.form.word)
      this.$store.dispatch('interactive/Add_fields', this.field.word).then(response => {
        this.base_para_details()
        this.field.word = ''
      }).catch(() => {
        console.log('error')
      })
    },
    // 字段列表
    base_para_details() {
      this.data = []
      this.$store.dispatch('interactive/Base_para_details', {}).then(response => {
        response.BasePara.CustomField.forEach((v, k) => {
          // this.data.push({ key: k, label: v })
          this.$set(this.data, k, { key: k, label: v })
        })
      }).catch(() => {
        console.log('error')
      })
    },
    // 清除所有字段
    delete_all(num, field) {
      this.$store.dispatch('interactive/Delete_fields', { field_name: field, delete_all: num }).then(response => {
        this.base_para_details()
      }).catch(() => {
        console.log('error')
      })
    },
    // 字段列表元素选中 / 取消
    handleWHLeftChange(key, key1) {
      this.hasCheckedWHLeftData = []
      for (var i = 0; i < key.length; i++) {
        for (var j = 0; j < this.data.length; j++) {
          if (key[i] === this.data[j].key) {
            this.hasCheckedWHLeftData.push(this.data[j].label)
          }
        }
      }
    },
    // 通讯参数
    comm_use(cmd) {
      this.form.cmd = cmd
      this.$store.dispatch('interactive/Communication', this.form).then(response => {
        this.form = response.config
      }).catch(() => {
        console.log('error')
      })
    },
    // 定时下载记录
    timing_download_but(time_cmd) {
      this.$store.dispatch('interactive/Timing_download', this.form).then(response => {
        this.form = response.config
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .check-box{
    margin-bottom: 10px;
  }
  .export-word{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    span:first-child{
      width: 90px;
      margin-right: 30px;
    }
    .el-form-item{
      margin-bottom: 0;
    }
  }
  .separator{
    span:first-child{
    width: 80px;
    margin-right: 30px;
    }
  }
</style>
