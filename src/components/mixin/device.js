export default{
  data() {
    return {
      device_options: {
        value1: [
          {
            value: 0,
            label: '指纹/卡/Facepass7'
          }, {
            value: 1,
            label: 'Facepass Pro'
          }
        ],
        value2: [
          {
            value: 0,
            label: '实际状态'
          }, {
            value: 1,
            label: '上班'
          }, {
            value: 2,
            label: '下班'
          }
        ],
        value3: [
          {
            value: 0,
            label: '考勤'
          }, {
            value: 1,
            label: '门禁'
          }, {
            value: 2,
            label: '考勤/门禁'
          }
        ]
      }
    }
  }
}

