import Database from './proto'

export default {
  install(Vue, ops) {
    const db = new Database()
    db.$router = ops.router
    db.$store = ops.store
    Object.defineProperty(db, '$router', {
      value: ops.router,
      enumerable: false,
    })
    Object.defineProperty(db, '$store', {
      value: ops.store,
      enumerable: false,
    })
    let init = true
    Vue.prototype.$db = function () {
      Object.defineProperty(db, 'vm', {
        value: this,
        enumerable: false,
        writable: true,
      })
      if (init) {
        db.$store.commit('setDatabase', db)
        db.init()
        init = false
      }
      return db
    }
  },
}
