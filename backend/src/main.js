import { createApp } from 'vue'
import App from './App.vue'
import config from './config'
import router from './router'
import store from './store'
import { DialogInstall, IconInstall } from './plugins/bundle'
import i18n from './plugins/i18n'
import ComponentInstall from './components/install'
import EventInstall from './event'
import './index.css'

console.log(config)
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
