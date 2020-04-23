export default{
  data() {
    return {
      options: {
        User_option1: [
          {
            value: 1,
            label: '市场部'
          }, {
            value: 2,
            label: '研发部'
          }, {
            value: 3,
            label: '人事部'
          }, {
            value: 4,
            label: '财务部'
          }],
        User_option2: [{
          value: 1,
          label: '1'
        }, {
          value: 2,
          label: '2'
        }, {
          value: 3,
          label: '3'
        }, {
          value: 4,
          label: '4'
        }, {
          value: 5,
          label: '5'
        }],
        User_option3: [{
          value: 1,
          label: '独立'
        }, {
          value: 2,
          label: '卡+指纹'
        }, {
          value: 3,
          label: '密码+指纹'
        }, {
          value: 4,
          label: '卡+密码'
        }, {
          value: 5,
          label: '编号+指纹'
        }, {
          value: 6,
          label: '卡+密码+指纹'
        }],
        User_option4: [{
          value: 1,
          label: '普通用户'
        }, {
          value: 2,
          label: '管理员'
        }],
        User_option5: [{
          value: 1,
          label: '0'
        }, {
          value: 2,
          label: '1'
        }, {
          value: 3,
          label: '2'
        }, {
          value: 4,
          label: '3'
        }, {
          value: 5,
          label: '4'
        }],
        record_identifier: [{
          value: 0,
          label: '全部'
        }, {
          value: 1,
          label: '考勤'
        }, {
          value: 2,
          label: '门禁'
        }, {
          value: 3,
          label: '考勤和门禁'
        }, {
          value: 4,
          label: '无效记录'
        }],
        Attendance: {
          exportFormat: [
            {
              value: 'txt',
              label: '文本文件(*.txt)'
            },
            {
              value: 'csv',
              label: 'CSV 文件(*.csv)'
            },
            {
              value: 'xls',
              label: 'Excel 文件(*.xls)'
            }
          ],
          exportField: [
            {
              value: '考勤号',
              label: '考勤号'
            },
            {
              value: '人员编号',
              label: '人员编号'
            },
            {
              value: '姓名',
              label: '姓名'
            },
            {
              value: '日期/时间',
              label: '日期/时间'
            },
            {
              value: '机器号',
              label: '机器号'
            },
            {
              value: '机器名称',
              label: '机器名称'
            },
            {
              value: '状态',
              label: '状态'
            },
            {
              value: '状态名称',
              label: '状态名称'
            },
            {
              value: '部门',
              label: '部门'
            },
            {
              value: '职务',
              label: '职务'
            },
            {
              value: '工作码',
              label: '工作码'
            }
          ],
          timeFormat: [
            {
              value: 0,
              label: 'yyyy-mm-dd hh:mm:ss'
            },
            {
              value: 1,
              label: 'yyyy-m-d hh:mm:ss'
            },
            {
              value: 2,
              label: 'yy-mm-dd hh:mm:ss'
            },
            {
              value: 3,
              label: 'yyyymmddhhmmss'
            }
          ],
          spacer: [
            {
              value: 0,
              label: ','
            },
            {
              value: 1,
              label: ';'
            },
            {
              value: 2,
              label: '_'
            },
            {
              value: 3,
              label: '/'
            },
            {
              value: 4,
              label: '-'
            },
            {
              value: 5,
              label: 'Tab'
            },
            {
              value: 6,
              label: 'Space'
            }
          ]
        }
      }
    }
  }
}
