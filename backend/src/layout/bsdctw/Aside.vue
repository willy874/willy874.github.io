<template>
  <div
    class="h-full flex-shrink-0 border-r z-10 bg-blue-600 transform transition duration-300"
    :style="{
      willChange: 'translate',
      width: `${asideWidth}px`,
      position: storeGlobal.windowInnerWidth < deviceSwitch ? 'fixed' : 'relative',
      '--tw-translate-x': storeGlobal.windowInnerWidth < deviceSwitch && !storeGlobal.asideSwitch ? `-100%` : 0,
    }"
  >
    <div class="absolute inset-0 overflow-y-auto overflow-x-hidden">
      <aside id="aside">
        <Navbar :routes="routesComputed" />
      </aside>
    </div>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Navbar from './Navbar'
import config from '@base/config'

export default {
  name: 'Aside',
  setup() {
    const store = useStore()
    const router = useRouter()
    const routes = reactive(router.options.routes)
    return {
      routesComputed: computed(() => routes.find(r => r.name === 'Backend')),
      asideWidth: ref(config.layout.asideWidth),
      deviceSwitch: ref(config.layout.deviceSwitch),
      storeGlobal: ref(store.state.global),
    }
  },
  components: {
    Navbar,
  },
}
</script>

<style></style>
