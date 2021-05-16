import { v4 as uuidv4 } from 'uuid'
// import { useDialog } from './use'

/**
 * @property {Number} id
 * @property {VueComponent} view
 * @property {Number} width
 * @property {Number} height
 * @property {Boolean} zIndexLock
 */
export default class Popup {
  constructor(args) {
    const entity = args || {}
    this.id = entity.id || uuidv4()
    this.view = entity.view
    this.width = entity.width || 0
    this.height = entity.height || 0
    this.zIndexLock = entity.zIndexLock || false
    this.position = entity.position || {
      x: 'center',
      y: 'center',
    }
    this.onBackgroundClick =
      entity.onBackgroundClick ||
      (() => {
        this.close()
      })
    this.props = Object.assign(
      {
        id: this.id,
      },
      entity.props
    )
  }

  // open(options) {
  //   const dialog = useDialog()
  //   Object.keys(options).forEach(key => {
  //     this[key] = options[key]
  //   })
  //   dialog.popup(this)
  // }

  // close() {
  //   const dialog = useDialog()
  //   dialog.closePopup(this.id)
  // }
}
