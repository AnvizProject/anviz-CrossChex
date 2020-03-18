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
          value: 1,
          label: '全部'
        }, {
          value: 2,
          label: '考勤'
        }, {
          value: 3,
          label: '门禁'
        }, {
          value: 4,
          label: '考勤和门禁'
        }, {
          value: 5,
          label: '无效记录'
        }]
      }
    }
  }
}
