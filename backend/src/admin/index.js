import Auth from './auth'

export default {
  install(Vue, ops) {
    let init = true
    const auth = new Auth(ops)
    Object.defineProperty(auth, '$router', {
      value: ops.router,
      enumerable: false,
    })
    Object.defineProperty(auth, '$store', {
      value: ops.store,
      enumerable: false,
    })
    Vue.prototype.$auth = function () {
      Object.defineProperty(auth, 'vm', {
        value: this,
        enumerable: false,
        writable: true,
      })
      if (init) {
        auth.$router.beforeEach((to, from, next) => {
          auth.beforeEach(to, from, next)
        })
        auth.$store.commit('setAdmin', auth)
        init = false
      }
      return auth
    }
  },
}
