<template>
  <div style="text-align: center">
    <el-transfer
      v-model="value"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :data="data"
      style="text-align: left; display: inline-block"
      filterable>
      <el-button slot="left-footer" class="transfer-footer" size="small">操作</el-button>
      <el-button slot="right-footer" class="transfer-footer" size="small">操作</el-button>
    </el-transfer>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index
        })
      })
      return data
    }
    return {
      data: generateData(),
      value: [1],
      renderFunc(h, option) {
        return <span>{ option.key } - { option.label }</span>;
      }
    }
  }
}
</script>
