export default {
  data() {
    return {
      department_options: [{
        value: 1,
        label: '指南',
        children: [{
          value: 2,
          label: '全部',
          children: [{
            value: 4,
            label: '一致'
          }, {
            value: 5,
            label: '反馈'
          }, {
            value: 6,
            label: '效率'
          }, {
            value: 7,
            label: '可控'
          }]
        }, {
          value: 8,
          label: '导航',
          children: [{
            value: 9,
            label: '侧向导航'
          }, {
            value: 10,
            label: '顶部导航'
          }]
        }]
      }, {
        value: 11,
        label: '组件',
        children: [{
          value: 12,
          label: 'Basic',
          children: [{
            value: 13,
            label: 'Layout 布局'
          }, {
            value: 14,
            label: 'Color 色彩'
          }, {
            value: 15,
            label: 'Typography 字体'
          }, {
            value: 16,
            label: 'Icon 图标'
          }, {
            value: 17,
            label: 'Button 按钮'
          }]
        }]
      }, {
        value: 18,
        label: '资源',
        children: [{
          value: 19,
          label: 'Axure Components'
        }, {
          value: 20,
          label: 'Sketch Templates'
        }, {
          value: 21,
          label: '组件交互文档'
        }]
      }]
    }
  }
}
