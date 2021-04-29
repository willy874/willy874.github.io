export const definePropertySet = function (props, set) {
  Object.keys(props).forEach(key => {
    const setting = set || {}
    if (!setting.get) {
      setting.value = props[key]
    }
    Object.defineProperty(props, key, setting)
  })
}
