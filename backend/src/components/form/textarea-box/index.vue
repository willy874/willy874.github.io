<script>
import render from './render'
import { v4 as uuidv4 } from 'uuid'
import Validate from 'validate.js'

export default {
  name: 'TextareaBox',
  render,
  data() {
    return {
      value: this.model[this.handle],
    }
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    handle: {
      type: String,
      required: true,
    },
    template: {
      type: String,
      default: 'native',
    },
    id: {
      type: String,
      default: uuidv4(),
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      },
    },
    watch: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isAllowEmpty(value) {
      if (Array.isArray(value) && value.length) {
        return true
      } else if (typeof value === 'string' && value === '') {
        return true
      } else if (typeof value === 'number' && value.length === 0) {
        return true
      } else if (typeof value === 'object' && Object.keys(value).length) {
        return true
      }
      return !!value
    },
  },
  computed: {
    isValid() {
      const rules = Object.keys(this.rules).length ? this.rules : false
      const errors = this.model.errors
      if (rules) {
        const errMsg = Validate.single(this.model[this.handle], rules, {
          format: 'flat',
        })
        return errMsg && errMsg[0]
      }
      if (errors && Object.keys(errors).length) {
        if (this.watch) {
          this.model.valid(this.handle)
        }
        return errors[this.handle] && errors[this.handle][0]
      }
      return false
    },
    isError() {
      return this.error || this.isAllowEmpty(this.isValid) || false
    },
    flylabel() {
      if (this.value === 0) {
        return '0'
      }
      return this.placeholder || this.value
    },
  },
}
</script>
<style lang="scss" src="./style.scss"></style>
