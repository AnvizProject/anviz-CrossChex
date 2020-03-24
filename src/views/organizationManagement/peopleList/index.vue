<template>
  <div>
    <search/>
    <container>
      <span slot="header" class="con-item">
        <div class="header-item">
          <el-button type="info" size="mini" disabled>增加</el-button>
          <el-button type="info" size="mini" disabled>修改</el-button>
        </div>
        <div class="header-item">
          <span class="filter-box">
            <el-button size="mini">设备组<i class="icon-under"/></el-button>
            <div class="filter-con">
              <p class="filter-title">所有设备</p>
              <ul>
                <li>123</li>
                <li>1234</li>
                <li>1235</li>
              </ul>
            </div>
          </span>
          <span class="filter-box">
            <el-button size="mini">部门组<i class="icon-under"/></el-button>
          </span>

        </div>
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
<style lang="scss" scoped>
  .el-header{
    .con-item{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .filter-box{
      position: relative;
      display: inline-block;
      width: auto;
      height: auto;
      &:last-child{
        margin-left: 10px;
      }
      .filter-con{
        position: absolute;
        right:0;
        background: #fff;
        margin-top: -1px;
        border:1px solid #ddd
      }
    }
  }
</style>
