const globalData = {
  install(Vue) {
    Vue.prototype.$globalInit = function (data) {
      Object.keys(data).forEach((key) => {
        globalData[key] = data[key]
      })
    }
  },
}

export default globalData
