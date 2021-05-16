import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { IconInstall } from './components/icon'

Vue.config.productionTip = false

Vue.use(IconInstall)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
