import RouterModel from '@base/models/proto/router'
import i18n from '@base/plugins/i18n'

const i18nMsg = i18n.messages[i18n.getLocale()]

/**
 * @property {String} path
 * @property {Boolean} meta.navHidden
 */
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: 'DashboardPage',
  },
  // {
  //   path: '/backend',
  //   name: 'Backend',
  //   component: 'BackendPage',
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       title: i18nMsg.home,
  //       component: 'HomePage',
  //       meta: {
  //         navHidden: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: 'LoginPage'
  // }
]

export default function () {
  return routes.map(child => new RouterModel(child))
}
