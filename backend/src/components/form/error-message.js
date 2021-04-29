import classNames from 'classnames'
import Validate from 'validate.js'

export default {
  name: 'ErrorMessage',
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
      default: '',
    },
    tag: {
      type: String,
      default: 'div',
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    isValid() {
      // 驗證到錯誤回傳 errorMessage，正常情況回傳 false
      const rules = Object.keys(this.rules).length ? this.rules : false
      if (rules) {
        const errorMessage = Validate(this.model, rules, { format: 'flat' })
        return errorMessage && errorMessage[0]
      } else if (
        this.model.errors &&
        this.handle &&
        this.model.errors[this.handle]
      ) {
        return this.model.errors[this.handle][0]
      }
      return false
    },
  },
  render(h) {
    return this.isValid
      ? h(
          this.tag,
          {
            class: classNames('error-message'),
          },
          [this.$slots.default ? this.$slots.default : this.isValid]
        )
      : null
  },
}
