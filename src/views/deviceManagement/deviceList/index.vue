<template>
  <container>
    <div slot="header">header</div>
    <div slot="main" class="main">
      <card-select v-for="(v,k) in data" :key="k" :val="v" :index="v.key" :select="selected" class="card" @checkbox="checkbox" />
      <!-- <el-button @click="getSelectedList">test</el-button> -->
    </div>
    <div slot="footer">footer</div>
  </container>
</template>

<script>
import container from '@/components/container'
import cardSelect from './components/card'
export default {
  components: { container, cardSelect },
  data() {
    return {
      data: [
        { key: 1, val: 'aaa' },
        { key: 2, val: 'aaa' },
        { key: 3, val: 'aaa' },
        { key: 4, val: 'aaa' },
        { key: 5, val: 'aaa' },
        { key: 6, val: 'aaa' }
      ],
      selected: {},
      selectedList: []
    }
  },
  methods: {
    checkbox(data) {
      console.log(data)
      this.selected[data.key] = data.checked
      console.log(this.selected)
    },
    getSelectedList() {
      this.selectedList = []
      for (const key in this.selected) {
        if (this.selected[key] === true) {
          this.selectedList.push(key)
        }
      }
      console.log(this.selectedList)
    }
  }
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px 10px;
}
</style>
