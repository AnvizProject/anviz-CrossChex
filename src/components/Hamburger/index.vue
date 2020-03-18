<template>
  <div>
    <i class="hamburger icon icon-menu" @click="toggleClick"/>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 15px;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
