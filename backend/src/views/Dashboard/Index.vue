<template>
  <div>
    <img alt="Vue logo" src="@base/assets/image/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '/src/components/HelloWorld.vue'

export default {
  name: 'Dashboard',
  components: {
    HelloWorld,
  },
}
</script>
