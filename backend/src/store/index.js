import { createStore } from 'vuex'
import globalModules from './global'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    global: globalModules,
  },
})
