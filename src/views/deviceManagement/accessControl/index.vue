<template >
  <div class="access-control app-container">
    <el-row :gutter="20" class="time-slot">
      <el-col :span="6">
        <div class="grid-content bg-purple-light day">
          <div class="day-top top-title">部门列表</div>
          <div class="day-bot day-list">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"/>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">
          <el-tabs type="border-card">
            <el-tab-pane label="门禁时段信息">
              <el-row :gutter="20" class="time-slot">
                <el-col :span="6">
                  <div class="grid-content bg-purple-light day">
                    <div class="day-top top-title">门禁时段列表</div>
                    <div class="day-bot day-list">
                      <el-radio-group v-model="radio">
                        <div><el-checkbox v-model="checked">1</el-checkbox></div>
                        <div><el-checkbox v-model="checked">2</el-checkbox></div>
                        <div><el-checkbox v-model="checked">3</el-checkbox></div>
                        <div><el-checkbox v-model="checked">4</el-checkbox></div>
                        <div><el-checkbox v-model="checked">5</el-checkbox></div>
                        <div><el-checkbox v-model="checked">6</el-checkbox></div>
                        <div><el-checkbox v-model="checked">7</el-checkbox></div>
                        <div><el-checkbox v-model="checked">8</el-checkbox></div>
                        <div><el-checkbox v-model="checked">9</el-checkbox></div>
                        <div><el-checkbox v-model="checked">10</el-checkbox></div>
                        <div><el-checkbox v-model="checked">11</el-checkbox></div>
                        <div><el-checkbox v-model="checked">12</el-checkbox></div>
                        <div><el-checkbox v-model="checked">13</el-checkbox></div>
                        <div><el-checkbox v-model="checked">14</el-checkbox></div>
                        <div><el-checkbox v-model="checked">15</el-checkbox></div>
                        <div><el-checkbox v-model="checked">16</el-checkbox></div>
                        <div><el-checkbox v-model="checked">17</el-checkbox></div>
                        <div><el-checkbox v-model="checked">18</el-checkbox></div>
                        <div><el-checkbox v-model="checked">19</el-checkbox></div>
                        <div><el-checkbox v-model="checked">20</el-checkbox></div>
                        <div><el-checkbox v-model="checked">21</el-checkbox></div>
                      </el-radio-group>
                    </div>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light day">
                    <div class="day-top top-title">门禁时段信息</div>
                    <div class="day-bot day-list">
                      <el-form ref="form" :model="form" label-width="200px">
                        <el-form-item label="时段说明">
                          <el-input v-model="form.name" style="padding:0 10px"/>
                        </el-form-item>
                        <el-form-item label="星期一起止时间">
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="星期二起止时间">
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="星期三起止时间">
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="星期四起止时间">
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="星期五起止时间">
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="星期六起止时间">
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="星期日起止时间">
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                          <el-col :span="12">
                            <el-time-picker v-model="form.date1" type="date" placeholder="请选择" style="width: 100%;"/>
                          </el-col>
                        </el-form-item>
                      </el-form>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="edit-button"><el-button type="primary" size="mini">应用</el-button></div>
            </el-tab-pane>
            <el-tab-pane label="门禁时段信息">
              <el-row :gutter="20" class="time-slot">
                <el-col :span="6">
                  <div class="grid-content bg-purple-light day">
                    <div class="day-top top-title">门禁时段列表</div>
                    <div class="day-bot day-list">
                      <el-radio-group v-model="radio">
                        <div><el-checkbox v-model="checked">1</el-checkbox></div>
                        <div><el-checkbox v-model="checked">2</el-checkbox></div>
                        <div><el-checkbox v-model="checked">3</el-checkbox></div>
                        <div><el-checkbox v-model="checked">4</el-checkbox></div>
                        <div><el-checkbox v-model="checked">5</el-checkbox></div>
                        <div><el-checkbox v-model="checked">6</el-checkbox></div>
                        <div><el-checkbox v-model="checked">7</el-checkbox></div>
                        <div><el-checkbox v-model="checked">8</el-checkbox></div>
                        <div><el-checkbox v-model="checked">9</el-checkbox></div>
                        <div><el-checkbox v-model="checked">10</el-checkbox></div>
                        <div><el-checkbox v-model="checked">11</el-checkbox></div>
                        <div><el-checkbox v-model="checked">12</el-checkbox></div>
                        <div><el-checkbox v-model="checked">13</el-checkbox></div>
                        <div><el-checkbox v-model="checked">14</el-checkbox></div>
                        <div><el-checkbox v-model="checked">15</el-checkbox></div>
                        <div><el-checkbox v-model="checked">16</el-checkbox></div>
                        <div><el-checkbox v-model="checked">17</el-checkbox></div>
                        <div><el-checkbox v-model="checked">18</el-checkbox></div>
                        <div><el-checkbox v-model="checked">19</el-checkbox></div>
                        <div><el-checkbox v-model="checked">20</el-checkbox></div>
                        <div><el-checkbox v-model="checked">21</el-checkbox></div>
                      </el-radio-group>
                    </div>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light day">
                    <div class="day-top top-title">门禁时段信息</div>
                    <div class="day-bot day-list">
                      <el-form ref="form" :model="form" label-width="200px">
                        <el-form-item label="门禁组说明">
                          <el-input v-model="form.name" style="padding:0 10px"/>
                        </el-form-item>
                        <el-form-item label="门禁时段1">
                          <selectbox :options="access_options" v-model="form.date3"/>
                        </el-form-item>
                        <el-form-item label="门禁时段2">
                          <selectbox :options="access_options" v-model="form.date3"/>
                        </el-form-item>
                        <el-form-item label="门禁时段3">
                          <selectbox :options="access_options" v-model="form.date3"/>
                        </el-form-item>
                        <el-form-item label="门禁时段4">
                          <selectbox :options="access_options" v-model="form.date3"/>
                        </el-form-item>
                      </el-form>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="edit-button"><el-button type="primary" size="mini">应用</el-button></div>
            </el-tab-pane>
            <el-tab-pane label="组成员列表">角色管理</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import selectbox from '@/components/select'
import access from '@/components/mixin/access'
export default {
  components: {
    selectbox
  },
  mixins: [access],
  data() {
    return {
      radio: 1,
      checked: true,
      form: {
        name: '',
        time1: '',
        date1: '',
        date2: '',
        date3: null
      },
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
  .time-slot{
    display: flex;
  }
  .day{
    border:1px solid rgba(0,0,0,0.1);
    border-radius:3px 3px 0px 0px;
    height: 100%;
    background: #fff;
    .day-top{
      width: 100%;
      height:31px;
      background:rgba(244,244,244,1);
      border-bottom:1px solid rgba(0,0,0,0.1);
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .day-bot.day-list{
      padding: 0 15px;
      margin: 15px 0;
      overflow-y: auto;
      height: 100%;
    }
  }
  .edit-button{
    display: flex;
    margin-top: 60px;
    justify-content: flex-end;
  }
  .el-select{
    padding: 0 10px;
  }
</style>
