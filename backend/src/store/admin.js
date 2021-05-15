import { getUser } from '@/api'
import globalData from '@/utility/global-vm'
import UserModel from '@/admin/model/user'

export default {
  state: {
    auth: null,
    login: false,
  },
  mutations: {
    setAdmin(state, auth) {
      state.auth = auth
    },
  },
  actions: {
    async adminLoing({ state, rootState }) {
      const lastPage = localStorage.getItem('last-page')
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const res = await getUser()
          const user = new UserModel(res.data)
          state.login = true
          state.auth.userLogin(user)
          rootState.model.Database.login()
          if (lastPage && lastPage !== '/login' && lastPage !== '/') {
            if (globalData.$router.currentRoute.path !== lastPage) {
              globalData.$router.push(lastPage)
            }
          } else {
            if (lastPage !== '/') {
              globalData.$router.push('/')
            }
          }
          return user
        } catch (error) {
          console.log('token error')
          globalData.$router.replace('/login')
        }
      } else {
        globalData.$router.replace('/login')
      }
    },
    async adminLogout({ state, rootState }) {
      state.login = false
      state.auth.userLogout()
      rootState.model.Database.logout()
      localStorage.removeItem('token')
      localStorage.removeItem('refresh-token')
    },
  },
}
