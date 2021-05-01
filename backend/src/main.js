import { createApp } from 'vue'
import App from './App.vue'
import config from './config'
import router from './router'
import store from './store'
import { DialogInstall } from './plugins/dialog'
import { IconInstall } from './plugins/icon'
import i18n from './plugins/i18n'
import ComponentInstall from './components/install'
import EventInstall from './event'
import './index.css'

const app = createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .use(ComponentInstall)
  .use(EventInstall)
  .use(DialogInstall)
  .use(IconInstall)
console.log(app.config)
app.config.devtools = true
app.config.debug = true

app.mount('#app')
