<template>
  <container>
    <div slot="header">header</div>
    <div slot="main" class="main">
      <card-select v-for="(v,k) in 4" :key="k" :val="k" :select="selected" class="card" @radio="radio" />
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
      data: [],
      selected: null
    }
  },
  methods: {
    radio(data) {
      this.selected = data
    }
  }

}
</script>

<style scoped>
.main {
  padding: 17px 3px;
  display: flex;
  justify-content: space-around;
}
.card {
  width: 24%;
}
</style>
