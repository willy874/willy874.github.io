export default {
  state: {
    lang: '',
    routes: {},
    windowInnerWidth: window.innerWidth,
    windowInnerHeight: window.innerHeight,
    asideSwitch: false,
  },
  mutations: {
    setLang(state, value) {
      state.lang = value
    },
    setRoutes(state, value) {
      state.routes = value
    },
    setWindowInnerWidth(state) {
      state.windowInnerWidth = window.innerWidth
      state.windowInnerHeight = window.innerHeight
    },
    setAsideSwitch(state, value) {
      if (typeof value === 'boolean') {
        state.asideSwitch = value
      } else {
        state.asideSwitch = !state.asideSwitch
      }
    },
  },
  actions: {},
}
