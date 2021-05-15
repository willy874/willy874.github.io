import UserModel from '../model/user'
import AuthModel from '../model/auth'
import globalData from '@/utility/global-vm'
import { ForeachDeep } from '@/utility'

// TODO: 判斷 name 改用 meta 的 authName
export default class Auth {
  constructor(args) {
    const entity = args || {}
    this.type = entity.type || 'account'
    this.auth = entity.auth || false
    this.middleware =
      entity.middleware ||
      ((to, from, next) => {
        if (to.name === 'Login') {
          next()
        } else {
          try {
            // 權限名稱
            if (this.isAuth(to)) {
              next()
            } else {
              next({ name: 'Error' })
            }
          } catch (err) {
            next({ name: 'Error' })
          }
        }
      })
    this.user = null
  }

  /**
   * 判斷該路由是否有對應的 AuthModel，會先判斷是否有 read，若沒有一樣是無權限
   * @param {Route} route
   * @returns {Boolean}
   */
  isAuth(route) {
    const routesOption = {
      children: globalData.$router.options.routes,
    }
    const allow = routesOption.children.filter((r) => r.default).map((r) => r.name)
    let currentRoute
    ForeachDeep.call(routesOption, (item) => {
      if (route.name === item.name) {
        currentRoute = item
      }
    })
    return (
      this.user.auth
        .filter((auth) => auth.read)
        .map((r) => r.name)
        .some((routeName) => currentRoute.props && currentRoute.props.authName === routeName) ||
      allow.some((s) => new RegExp(s).test(route.name))
    )
  }

  /**
   * @param {UserModel} user
   */
  createUser(user) {
    if (user instanceof UserModel) {
      this.user = user
    } else {
      this.user = new UserModel(user)
    }
    return this
  }

  userLogin(user) {
    this.createUser(user)
  }

  userLogout() {
    this.createUser()
  }

  /**
   * 強制執行 middleware
   * @param {Route} to 要前往的路由
   * @param {Route} from 來自於的路由
   * @param {Function} next  callback function
   */
  beforeEach(to, from, next) {
    if (this.auth) {
      this.middleware(to, from, next)
    } else {
      next()
    }
  }

  /**
   * 取得權限資料，因為是 Auth 是非同步的，初始化時不會取得資料，但具備響應式資料特性。也可以用 $watch 監聽到第一次的變化便是取回的參數。
   * @param {String} type 所要的權限名稱
   * @returns {Boolean|Auth}
   */
  getAuth(type) {
    if (this.auth) {
      if (this.user && this.user.auth) {
        const routesOption = {
          children: globalData.$router.options.routes,
        }
        let currentRoute
        ForeachDeep.call(routesOption, (item) => {
          if (this.$router.currentRoute.name === item.name) {
            currentRoute = item
          }
        })
        const authModel = this.user.auth.find((p) => currentRoute.props && currentRoute.props.authName === p.name)
        if (type && authModel) {
          return authModel[type]
        }
        return authModel
      }
      return {
        name: 'notAuth',
      }
    } else {
      if (type) {
        return true
      }
      return new AuthModel({
        id: -1,
        name: 'All',
        read: true,
        create: true,
        update: true,
        delete: true,
      })
    }
  }

  getAuthRoutes() {
    if (this.auth) {
      const filterRouter = (routes) => {
        return routes
          .filter((r) => this.isAuth(r))
          .map((r) => {
            if (r.children) {
              r.children = filterRouter(r.children)
            }
            return r
          })
      }
      return filterRouter(JSON.parse(JSON.stringify(this.$router.options.routes)))
    } else {
      return JSON.parse(JSON.stringify(this.$router.options.routes))
    }
  }
}
