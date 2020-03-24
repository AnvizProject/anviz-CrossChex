<template>
  <div>
    <search/>
    <container>
      <span slot="header">
        <el-button type="info" size="mini" disabled>增加</el-button>
        <el-button type="info" size="mini" disabled>修改</el-button>
      </span>
      <span slot="main">我是main</span>
      <span slot="footer">我是footer</span>
    </container>
  </div>

</template>

<script>
import Search from '@/components/search'
import container from '@/components/container'
export default {
  components: {
    Search,
    container
  },
  data() {
    return {
    }
  }
}
</script>
