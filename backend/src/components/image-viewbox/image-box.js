import { ImageModel } from '@/models'
import axios from 'axios'

export default {
  props: {
    display: {
      type: String,
      default: 'image',
    },
    src: {
      type: [ImageModel, String],
      default: '',
    },
    defaultImage: {
      type: String,
      default: '',
    },
    requestHeader: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      source: null,
    }
  },
  created() {
    this.$watch('src', () => this.handleImage(), { deep: true })
    this.handleImage()
  },
  methods: {
    handleImage() {
      if (this.src === '') {
        this.source = this.defaultImage
      } else if (/^data:|base64/.test(this.src)) {
        this.source = this.src
      } else if (this.src instanceof ImageModel) {
        const Model = this.src
        if (Model.image_base64) {
          this.source = Model.image_base64
          this.$emit('load', Model.image_base64)
        } else if (Model.image_blob) {
          this.handleBlob(Model.image_blob)
        } else {
          if (Model.image_url === '') {
            this.source = this.defaultImage
          } else {
            this.handleUrl(Model.image_url)
          }
        }
      } else {
        const cache = this.$image.get(this.src)
        if (cache) {
          this.source = cache
          this.$emit('load', cache)
        } else {
          this.handleUrl(this.src)
        }
      }
    },
    handleBlob(blob) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.source = e.target.result
        this.$emit('load', this.source)
      }
      reader.readAsDataURL(blob)
    },
    handleUrl(url) {
      axios
        .get(url, {
          responseType: 'blob',
          ...this.requestHeader,
        })
        .then((res) => {
          const file = new File([res.data], 'fileName', { type: res.data.type })
          this.$image.set(url, file).then((data) => {
            this.source = data
            this.$emit('load', data)
          })
        })
    },
  },
  render(h) {
    if (this.source) {
      if (this.display === 'background' || this.display === 'bg') {
        return h('div', {
          attrs: this.$attrs,
          class: 'image-box',
          style: {
            backgroundImage: `url(${this.source})`,
          },
        })
      } else {
        return h('img', {
          class: 'image-box',
          attrs: {
            src: this.source,
            ...this.$attrs,
          },
        })
      }
    } else {
      if (this.slots && this.slots.loading) {
        return this.slots.loading
      } else {
        return h('div', { class: 'image-box--loading' })
      }
    }
  },
}
