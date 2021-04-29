<template>
  <div id="layout">
    <Layout />
    <Dialog />
  </div>
</template>

<script>
import Layout from '@base/layout/bsdctw/Index.vue'
export default {
  created() {
    window.addEventListener('resize', () => {
      this.$store.commit('setWindowInnerWidth')
    })
  },
  components: { Layout },
}
</script>

<style lang="scss" src="./style/main.scss"></style>
