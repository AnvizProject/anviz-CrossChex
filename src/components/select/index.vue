<template>
  <el-select :value="changeval" placeholder="请选择" @change="change">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
  </el-select>
</template>

<script>
export default {
  model: {
    prop: 'changeval',
    event: 'up'
  },
  props: {
    options: {
      type: Array,
      default: () => {}
    },
    changeval: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    change(v) {
      this.$emit('up', v)
    }
  }
}
</script>
<style scoped>
  .el-select{
    width: 100%;
  }
</style>
