import { createI18n } from 'vue3-i18n'
import store from '@base/store'
import en from './lang/en'
import zh from './lang/zh'

const storeLang = store && store.state && store.state.global && store.state.global.lang
const lang = storeLang || navigator.language
const locale = ['en-US', 'zh-TW'].includes(lang) ? lang : 'en-US'

export default createI18n({
  locale,
  messages: {
    'en-US': en,
    'zh-TW': zh,
  },
})
