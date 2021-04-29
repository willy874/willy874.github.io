/**
 * @param {Arguments} args 要過濾的參數
 * @param {Array} types 設定參數的類型
 * @return {Array} 按 types 的位置重新放置 args
 */
export const paramFilter = (args, types) => {
  const arrArgs = [].map.call(args, a => a)
  return types.map(type => {
    const findParam = arrArgs.find(param => {
      if ([Boolean, Number, String, Object].includes(type)) {
        switch (type) {
          case Boolean:
            return typeof param === 'boolean'
          case Number:
            return typeof param === 'number'
          case String:
            return typeof param === 'string'
          case Object:
            return typeof param === 'object'
          default:
            return false
        }
      }
      return param instanceof type
    })
    if (findParam !== undefined) {
      arrArgs[arrArgs.indexOf(findParam)] = undefined
    }
    return findParam
  })
}

/**
 * @param {*} value 要檢查的值
 * @return {Boolean}
 */
export const isAllowEmpty = value => {
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true
  } else if (typeof value === 'string' && value === '') {
    return true
  } else if (typeof value === 'number' && value.length === 0) {
    return true
  }
  return !value
}

export function mountedCheck(dom, reject) {
  return new Promise(resolve => {
    let i = 0
    const start = () => {
      i++
      if (!dom) {
        if (i > 60) {
          return console.warn('mountedCheck not dom.')
        }
        return requestAnimationFrame(start)
      }
      if (dom.offsetWidth === 0 || dom.offsetHeight === 0) {
        if (reject) reject()
        requestAnimationFrame(start)
      } else {
        resolve()
      }
    }
    start()
  })
}

/**
 * 判斷使用者當前是否使用行動設備
 * @return {*} boolen
 */
export const isMobileDevice = function () {
  const mobileDevice = [
    'Android',
    'webOS',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
  ]
  return mobileDevice.some(d => navigator.userAgent.match(d))
}

/**
 * 卷軸滾動動畫
 * @param {*} param 設定參數
 * @param {Number} param.top 滾動 Y 軸
 * @param {Number} param.left 滾動 X 軸
 * @param {Number} param.duration 滾動時間 (ms)
 * @param {Number} param.delay 延遲時間 (ms)
 * @param {Function} param.ease 緩動函數
 */
export const toScrollAnimation = function (param = {}) {
  const toTop = param.top || 0
  const toLeft = param.left || 0
  const duration = param.duration || 400
  const delay = param.delay || 0
  const ease = param.easing || (e => e * 1)
  return new Promise(resolve => {
    let timer
    let cacheTime = 0
    const redrawSpeed = 20
    const cacheScrollY = scrollY
    const cacheScrollX = scrollX
    const redraw = () => {
      cacheTime += redrawSpeed
      const top =
        (toTop - cacheScrollY) * ease(cacheTime / duration) + cacheScrollY
      const left =
        (toLeft - scrollX) * ease(cacheTime / duration) + cacheScrollX
      scrollTo({ top, left })
      if (cacheTime > duration) {
        clearInterval(timer)
        resolve()
      }
    }
    setTimeout(() => {
      timer = setInterval(redraw, redrawSpeed)
      redraw()
    }, delay)
  })
}
