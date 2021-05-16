<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="display: flex">
      <div v-for="name in pattern" :key="name">
        <Icon :pattern="name" size="24" />
        <div>{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as pattern from '@/components/icon/pattern'

export default {
  name: 'Home',
  data() {
    return {
      pattern: Object.keys(pattern),
    }
  },
}
</script>
