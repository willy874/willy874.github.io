<template>
  <header>
    <div class="border-b flex">
      <div>
        <img class="w-36 px-3 py-1" src="@base/assets/logo-light.png" alt="" />
      </div>
    </div>
    <div class="border-b flex">
      <div>
        <div class="p-2" v-show="storeGlobal.windowInnerWidth < deviceSwitch">
          <Navbtn class="" @btnClick="btnChange" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Navbtn from '@base/components/Navbtn.vue'
import config from '@base/config'

export default {
  setup() {
    const store = useStore()
    return {
      deviceSwitch: ref(config.layout.deviceSwitch),
      storeGlobal: ref(store.state.global),
      btnChange: bool => {
        store.commit('setAsideSwitch', bool)
      },
    }
  },
  components: {
    Navbtn,
  },
}
</script>

<style></style>
