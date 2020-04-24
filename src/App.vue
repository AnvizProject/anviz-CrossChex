<template>
  <div id="app" :class="lang?'Chinese':'Englist'">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    lang() {
      if (this.$i18n.locale === 'zh') {
        return true
      } else if (this.$i18n.locale === 'en') {
        return false
      }
    }
  },
  mounted() {
    console.log(this.$i18n.locale)
  }
}

</script>
