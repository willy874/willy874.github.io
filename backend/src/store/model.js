export default {
  state: {
    Database: null,
    db: {},
  },
  mutations: {
    setDatabase(state, db) {
      if (!state.Database) {
        state.Database = db
      }
      state.db = db.data
    },
  },
  actions: {},
}
