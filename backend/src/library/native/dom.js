import { paramFilter } from './function'

// getBoundingClientRect() getBox

/**
 * 建立一個觸控裝置滑動事件，可監聽四個方向的滑動。
 * @param {HTMLElement} dom 要被加入事件的元素
 * @param {String} type 觸發事件的類型，可傳入 "top","left","right","bottom","move" 其一
 * @param {Function} callback 當被觸發時運行的 Function
 */
export function addEventListenerTouch(dom, type, callback) {
  if (typeof type !== 'string') {
    throw new Error('傳入的 type 參數必須是個 string')
  }
  if (typeof callback !== 'function') {
    throw new Error('傳入的 callback 參數必須是個 function')
  }
  const allowed = ['top', 'left', 'right', 'bottom', 'move']
  if (!allowed.includes(type)) {
    throw new Error(
      '傳入的 type 參數必須是 "top","left","right","bottom","move" 其一'
    )
  }
  if (this instanceof HTMLElement) {
    const touchstart = function (e) {
      dom.startX = e.touches[0].pageX
      dom.startY = e.touches[0].pageY
    }
    const touchend = function (e) {
      dom.endX = e.changedTouches[0].pageX
      dom.endY = e.changedTouches[0].pageY
      const direction = (function (startX, startY, endX, endY) {
        const dy = startY - endY
        const dx = endX - startX
        const result = 'move'
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
          return result
        }
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI
        if (angle >= -45 && angle < 45) {
          return 'right'
        } else if (angle >= 45 && angle < 135) {
          return 'top'
        } else if (angle >= -135 && angle < -45) {
          return 'bottom'
        } else if (
          (angle >= 135 && angle <= 180) ||
          (angle >= -180 && angle < -135)
        ) {
          return 'left'
        }
        return result
      })(dom.startX, dom.startY, dom.endX, dom.endY)
      if (type === 'move' && direction !== 'move') {
        e.direction = direction
        callback(e)
      } else {
        if (direction === type) {
          callback(e)
        }
      }
    }
    this.addEventListener('touchstart', touchstart, false)
    this.addEventListener('touchend', touchend, false)
    return {
      touchstart,
      touchend,
      callback,
    }
  } else {
    throw new Error('必須是個 HTMLElement')
  }
}

/**
 * @param {Number} duration 過渡時間(ms)
 * @param {String} easing 緩動動畫函數
 * @param {Number} delay 延遲(ms)
 * @param {Function} callback 完成動畫後要執行的事件
 */
export const slideDown = function () {
  const [el, duration, easing, delay, callback] = paramFilter(arguments, [
    HTMLElement,
    Number,
    String,
    Number,
    Function,
  ])
  el.style.transition = `height ${(duration || 400) + 'ms'} ${
    easing || 'ease'
  } ${(delay || 0) + 'ms'}`
  el.style.overflow = 'hidden'
  el.style.display = 'block'
  requestAnimationFrame(() => {
    const offsetHeight = el ? el.offsetHeight + 'px' : 'auto'
    el.style.height = 0
    requestAnimationFrame(() => {
      el.style.height = offsetHeight
      const transitionEndEvent = e => {
        el.style = ''
        if (callback) {
          callback(e)
        }
        el.removeEventListener('transitionend', transitionEndEvent)
      }
      el.addEventListener('transitionend', transitionEndEvent)
    })
  })
}
/**
 * @param {Number} duration 過渡時間(ms)
 * @param {String} easing 緩動動畫函數
 * @param {Number} delay 延遲(ms)
 * @param {Function} callback 完成動畫後要執行的事件
 */
export const slideUp = function () {
  const [el, duration, easing, delay, callback] = paramFilter(arguments, [
    HTMLElement,
    Number,
    String,
    Number,
    Function,
  ])
  el.style.transition = `height ${(duration || 400) + 'ms'} ${easing || ''} ${
    (delay || 0) + 'ms'
  }`
  el.style.overflow = 'hidden'
  const offsetHeight = el ? el.offsetHeight + 'px' : 'auto'
  el.style.height = offsetHeight
  requestAnimationFrame(() => {
    const transitionEndEvent = e => {
      el.style = ''
      el.style.display = 'none'
      if (callback) {
        callback(e)
      }
      el.removeEventListener('transitionend', transitionEndEvent)
    }
    el.addEventListener('transitionend', transitionEndEvent)
    requestAnimationFrame(() => {
      el.style.height = 0
    })
  })
}
