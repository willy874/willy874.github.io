import { h } from 'vue'
import { useDialog } from './use'
import cx from 'classnames'
import PopupComponent from './popup-component'

export default {
  setup() {
    const dialog = useDialog()
    const isPopupOpen = () => dialog.popups.length
    const popupMove = e => {
      const offsetWidth = dialog.dropTarget.offsetWidth
      const offsetHeight = dialog.dropTarget.offsetHeight
      if (window.innerWidth - offsetWidth < e.pageX - dialog.dropOffsetX) {
        dialog.dropTarget.style.left = window.innerWidth - offsetWidth - 1 + 'px'
      } else if (e.pageX - dialog.dropOffsetX < 1) {
        dialog.dropTarget.style.left = 0
      } else {
        dialog.dropTarget.style.left = e.pageX - dialog.dropOffsetX + 'px'
      }
      if (window.innerHeight - offsetHeight < e.pageY - dialog.dropOffsetY) {
        dialog.dropTarget.style.top = window.innerHeight - offsetHeight - 1 + 'px'
      } else if (e.pageY - dialog.dropOffsetY < 1) {
        dialog.dropTarget.style.top = 0
      } else {
        dialog.dropTarget.style.top = e.pageY - dialog.dropOffsetY + 'px'
      }
    }
    const windowResize = () => {
      if (isPopupOpen()) {
        dialog.popups.forEach(popup => {
          const target = popup.ref
          const correctionValue = 8
          const offsetRight = target.offsetWidth + target.offsetLeft
          const offsetBottom = target.offsetHeight + target.offsetTop
          if (window.innerWidth - correctionValue <= offsetRight) {
            if (window.innerWidth - correctionValue > target.offsetWidth) {
              target.style.left = window.innerWidth - popup.offsetWidth - correctionValue + 'px'
            }
          }
          if (window.innerHeight - correctionValue <= offsetBottom) {
            if (window.innerHeight - correctionValue > target.offsetHeight) {
              target.style.top = window.innerHeight - popup.offsetHeight - correctionValue + 'px'
            }
          }
          requestAnimationFrame(() => {
            popup.updated()
          })
        })
      }
    }
    window.addEventListener('resize', windowResize)
    return () => {
      return h(
        'div',
        {
          class: cx('fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300', {
            'pointer-events-none opacity-0': !isPopupOpen(),
          }),
          onClick: () => {
            dialog.popups.forEach(popup => {
              if (popup.onBackgroundClick) popup.onBackgroundClick(popup)
            })
          },
          onDragover: e => {
            if (dialog.dropTarget) {
              popupMove(e)
            }
          },
          onTouchMove: event => {
            if (dialog.dropTarget) {
              const e = Array.apply([], event.touches).find(p => p.target === event.target)
              popupMove(e)
            }
          },
        },
        [
          dialog.popups.map((popup, index) => {
            return h(PopupComponent, {
              popup,
              index,
              key: popup.id,
            })
          }),
        ]
      )
    }
  },
}
