// import { nextTick } from 'vue'
import _uniq from 'lodash/uniq'
import { getNavigation } from '@/api'
import store from '@/store'
import RouterModel from '@/router/router'
import router from '@/router'
// import RouterView from '@/views/router-view.vue'

export default function () {
  getNavigation().then(res => {
    const routes = RouterModel.structured(res.data)
    const groupAllows = _uniq(routes.map(p => p.group))
    groupAllows.forEach(group => {
      routes
        .filter(p => p.group === group)
        .map(r => new RouterModel(r))
        .forEach(r => {
          store.commit('setRoutes', router.getRoutes())
          store.state.global.routes
            .find(item => item.name === group)
            .children.push(r)
          router.addRoute(group, r)
        })
    })
    router.replace(location.pathname)
    // nextTick().then(() => {
    //   requestAnimationFrame(() => {
    //     const els = document.getElementsByClassName('router:hidden')
    //     for (let index = 0; index < els.length; index++) {
    //       els[index].style.display = 'none'
    //     }
    //   })
    // })
    // console.log(router.getRoutes())
    // nextTick().then(() => {
    //   requestAnimationFrame(() => {
    //     console.log(router.options.routes)
    //     router.options.routes.forEach(item => {
    //       item.forEachDeep(r => {
    //         if (r.panel && r.panel instanceof HTMLElement) {
    //           r.panel.style.display = 'none'
    //         }
    //       })
    //     })
    //   })
    // })
  })
}
