<template>
  <div id="backend" class="overflow-hidden">
    <Header />
    <div class="flex flex-grow relative">
      <Aside />
      <main class="h-full flex-grow relative">
        <div class="absolute inset-0 overflow-auto">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Aside from './Aside.vue'
import Header from './Header.vue'

export default {
  name: 'Backend',
  setup() {},
  components: {
    Aside,
    Header,
  },
}
</script>

<style></style>
