import classNames from 'classnames'
import { ImageModel } from '@/models'

// multiple

export default {
  name: 'PhotoFrame',
  data() {
    return {}
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    handle: {
      type: String,
      default: 'images',
    },
    attrs: {
      type: Object,
      default: () => {
        return {}
      },
    },
    fileLimitSize: {
      type: Number,
      default: 0,
    },
    baseLimitSize: {
      type: Number,
      default: 0,
    },
    fileType: {
      type: Array,
      default: () => {
        return ['image']
      },
    },
    saveType: {
      type: String,
      default: 'file',
      validator: function (value) {
        const valid = ['base64', 'file'].indexOf(value) !== -1
        if (valid) return valid
        throw new Error(
          '[Component PhotoFrame]: Attributes "save-type" only allowed ["base64","file"].'
        )
      },
    },
    defaultImage: {
      type: String,
      default: 'Image',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // (this.$el);
  },
  methods: {
    imageUpload(inputChangeEvent) {
      const fileObject =
        inputChangeEvent.target.files || inputChangeEvent.dataTransfer.files
      // 判斷檔案大小
      if (this.fileLimitSize) {
        if (this.fileLimitSize < fileObject[0].size) {
          alert('上傳檔案大小不得超過' + this.fileLimitSize + ' bytes')
          return
        }
      }
      // 判斷檔案類型
      if (this.fileType.length) {
        if (
          !this.fileType.some(type => {
            const typeRegExp = new RegExp(type)
            return typeRegExp.test(fileObject[0].type)
          })
        ) {
          alert('上傳檔案類型必須為 ' + this.fileType.join('、'))
          return
        }
      }
      const reader = new FileReader()
      reader.onload = e => {
        this.model[this.handle] = [
          new ImageModel({
            file: fileObject[0],
            name: fileObject[0].name,
            size: fileObject[0].size,
            type: fileObject[0].type,
            addData: !(
              this.model[this.handle] && this.model[this.handle].length
            ),
            edited: !!(
              this.model[this.handle] && this.model[this.handle].length
            ),
            saveType: this.saveType,
          }),
        ]
        const target = inputChangeEvent.dataTransfer || inputChangeEvent.target
        this.$set(this.model[this.handle][0], 'url', e.target.result)
        if (
          this.saveType === 'base64' &&
          this.baseLimitSize > fileObject[0].size
        ) {
          this.$set(this.model[this.handle][0], 'base64', e.target.result)
          this.$emit('fileUpload', {
            event: e,
            imageObject: this.model[this.handle],
            photoFrame: this,
            base64: e.target.result,
          })
        } else {
          this.$set(this.model[this.handle][0], 'file', target.files[0])
          this.$emit('fileUpload', {
            event: inputChangeEvent,
            imageObject: this.model[this.handle],
            photoFrame: this,
            files: target.files,
            base64: e.target.result,
          })
        }

        this.model.edited = true
        this.$forceUpdate()
      }
      reader.readAsDataURL(fileObject[0])
    },
  },
  render(h) {
    return h(
      'div',
      {
        class: classNames('photo-frame', {
          disabled: this.disabled,
          readonly: this.readonly,
        }),
      },
      [
        h('input', {
          class: classNames('photo-frame-input'),
          attrs: {
            type: 'file',
            id: this.model.id,
            disabled: this.disabled || this.readonly,
            ...this.attrs,
          },
          on: {
            change: e => {
              this.imageUpload(e)
            },
          },
        }),
        h('label', {
          class: classNames('photo-frame-label'),
          attrs: {
            for: this.model.id,
          },
          on: {
            dragenter: e => {
              e.preventDefault()
              e.stopPropagation()
              e.target.classList.add('hover')
            },
            dragleave: e => {
              e.preventDefault()
              e.stopPropagation()
              e.target.classList.remove('hover')
            },
            dragover: e => {
              e.preventDefault()
              e.stopPropagation()
            },
            drop: e => {
              e.preventDefault()
              e.stopPropagation()
              e.target.classList.remove('hover')
              this.imageUpload(e)
            },
          },
        }),
        h(
          'div',
          {
            class: classNames('photo-frame-image'),
          },
          [
            this.model[this.handle] &&
            this.model[this.handle].length &&
            !this.model[this.handle][0].deleted
              ? h('img', {
                  attrs: {
                    src: this.model[this.handle][0].url,
                  },
                })
              : h('icon-component', {
                  props: {
                    pattern: this.defaultImage,
                    size: '100%',
                  },
                }),
          ]
        ),
        this.model[this.handle]
          ? h(
              'div',
              {
                class: classNames('photo-frame-delete'),
                on: {
                  click: () => {
                    this.model[this.handle][0].deleted = true
                    this.model.edited = true
                    this.$forceUpdate()
                  },
                },
              },
              [
                h('Icon', {
                  props: {
                    pattern: 'Close',
                    size: '16',
                  },
                }),
              ]
            )
          : null,
      ]
    )
  },
}
