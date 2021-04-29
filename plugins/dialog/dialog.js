import Popup from './popup'

/**
 * @property {Array<Popup>} popups
 */
export default class Dialog {
  constructor() {
    this.popups = []
    this.popupRoot = null
    this.popupCache = null
  }

  popup(view, options) {
    document.body.style.overflow = 'hidden'
    const popup =
      view instanceof Popup
        ? view
        : new Popup({
            ...options,
            view,
          })
    this.popups.push(popup)
    return new Promise(resolve => {
      popup.onClose = attrs => {
        resolve(attrs)
      }
    })
  }

  closePopup(id) {
    return new Promise(resolve => {
      Promise.all(
        this.popups
          .filter((popup, index) => {
            if (typeof id === 'number') {
              return id === index
            } else if (typeof id === 'string') {
              return popup.id === id
            } else {
              return true
            }
          })
          .map(popup => {
            return new Promise(resolve => {
              popup.ref.style.opacity = '0'
              const end = () => {
                popup.ref.removeEventListener('transitionend', end)
                if (popup.onClose) popup.onClose(popup)
                resolve()
              }
              popup.ref.addEventListener('transitionend', end)
            })
          })
      ).then(() => {
        if (typeof id === 'number') {
          resolve(this.popups.splice(id, 1))
          if (this.popups.length === 0) document.body.style.overflow = ''
        }
        if (typeof id === 'string') {
          const index = this.popups.map(item => item.id).indexOf(id)
          resolve(this.popups.splice(index, 1))
          if (this.popups.length === 0) document.body.style.overflow = ''
        } else {
          resolve(this.popups.splice(0))
          document.body.style.overflow = ''
        }
      })
    })
  }
}
