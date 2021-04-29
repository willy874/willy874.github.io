import { h, onMounted, onUpdated, ref } from 'vue'
import cx from 'classnames'
import Popup from './popup'
import { useDialog } from './use'

export default {
  props: {
    popup: {
      type: Popup,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    // 解除 Proxy 代理
    const PopupView = {}
    Object.keys(props.popup.view).forEach(key => {
      PopupView[key] = props.popup.view[key]
    })
    const dialog = useDialog()
    const popupItem = ref({})
    props.popup.updated = () => {
      props.popup.offsetWidth = popupItem.value.offsetWidth
      props.popup.offsetHeight = popupItem.value.offsetHeight
    }
    onMounted(() => {
      props.popup.ref = popupItem
      const position = props.popup.position
      const correctionValue = 20
      const topMath = top => {
        if (typeof top === 'number') {
          return top + 'px'
        } else if (typeof top === 'string') {
          if (top === 'top') {
            return correctionValue + 'px'
          } else if (top === 'center') {
            return (window.innerHeight - popupItem.value.offsetHeight) / 2 + 'px'
          } else if (top === 'bottom') {
            return window.innerHeight - correctionValue + 'px'
          }
          return top
        }
        return 0
      }
      const leftMath = left => {
        if (typeof left === 'number') {
          return left + 'px'
        } else if (typeof left === 'string') {
          if (left === 'left') {
            return correctionValue + 'px'
          } else if (left === 'center') {
            return (window.innerWidth - popupItem.value.offsetWidth) / 2 + 'px'
          } else if (left === 'bottom') {
            return window.innerWidth - correctionValue + 'px'
          }
          return left
        }
        return 0
      }
      if (position.x || position.y) {
        popupItem.value.style.left = position.x ? leftMath(position.x) : 0
        popupItem.value.style.top = position.y ? topMath(position.y) : 0
      }
      if (position.left || position.top) {
        popupItem.value.style.left = position.left ? leftMath(position.left) : 0
        popupItem.value.style.top = position.top ? topMath(position.top) : 0
      }
      props.popup.updated()
    })
    onUpdated(() => {
      props.popup.updated()
    })
    return () => {
      return h(
        'div',
        {
          ref: popupItem,
          class: cx('absolute transition-opacity duration-300'),
          onClick: e => e.stopPropagation(),
          // change zIndex
          onMouseDown: () => {
            const indexOf = dialog.popups.indexOf(props.popup)
            if (dialog.popups[indexOf].zIndexLock) {
              return
            }
            if (indexOf !== dialog.popups.length - 1) {
              dialog.popups.push(dialog.popups.splice(indexOf, 1)[0])
            }
          },
          style: {
            maxWidth: props.width || 'auto',
            width: props.width ? '100%' : 'auto',
            maxHeight: props.height || 'auto',
            height: props.height ? '100%' : 'auto',
            zIndex: (props.index + 1) * 1,
          },
        },
        [
          h(PopupView, {
            props: Object.assign(props.popup.props, {
              index: props.index,
            }),
            drag: e => {
              e.dataTransfer.setDragImage(new Image(), 0, 0)
              dialog.dropTarget = popupItem
              dialog.dropOffsetX = e.pageX - popupItem.value.offsetLeft
              dialog.dropOffsetY = e.pageY - popupItem.value.offsetTop
            },
            touch: event => {
              const e = Array.apply([], event.touches).find(p => p.target === event.target)
              dialog.dropTarget = popupItem
              dialog.dropOffsetX = e.pageX - popupItem.value.offsetLeft
              dialog.dropOffsetY = e.pageY - popupItem.value.offsetTop
            },
          }),
        ]
      )
    }
  },
}
