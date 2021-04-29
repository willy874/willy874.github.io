<script>
import render from './render'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import Validate from 'validate.js'
import { isAllowEmpty } from '../../../library'
import { DataModel } from '../../../library/proto'

/**
 * @name InputBox
 * @param {DataModel} model 要監測的 model
 * @param {String} handle 要監測的 key
 * @param {String} template 使用的樣板
 * @param {String} id 自動產生uuid，或放入自訂義uuid
 * @param {String} type input 的類型，預設為 text
 * @param {String} label 標題/漂浮文字
 * @param {Boolean} error 是否啟動錯誤
 * @param {Boolean} watch 持續監測驗證
 * @param {String} rules 設定監測規則
 * @param {*} attrs 任何參數會自動綁定到 input，class,style 則改成寫 inputClass,inputStyle
 * @template prepend input 外後置元素
 * @template append input 外前置元素
 * @template prefix input 內後置元素
 * @template suffix input 內前置元素
 * @template error 錯誤訊息
 * @example
 * <template>
 *   <InputBox :model="{model}" handle="{handle}">
 *     <template v-slot:{name}></template>
 *   </InputBox>
 * </template>
 */
export default {
  name: 'InputBox',
  render,
  inheritAttrs: false,
  data() {
    return {
      passwordClosed: false,
      prefixClientWidth: 0,
      suffixClientWidth: 0,
    }
  },
  props: {
    model: {
      type: DataModel,
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
    type: {
      type: String,
      default: 'text',
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
  mounted() {
    this.prefixClientWidth = this.$refs.prefix
      ? this.$refs.prefix.clientWidth
      : 0
    this.suffixClientWidth = this.$refs.suffix
      ? this.$refs.suffix.clientWidth
      : 0
  },
  computed: {
    value: {
      get() {
        return this.model[this.handle]
      },
      set(value) {
        return value
      },
    },
    isValid() {
      const rules = Object.keys(this.rules).length ? this.rules : false
      const errors = this.model.errors
      if (rules) {
        const errMsg = Validate.single(this.value, rules, { format: 'flat' })
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
      return this.error || isAllowEmpty(this.isValid) || false
    },
    inputType() {
      if (this.type === 'password' && this.passwordClosed) {
        return 'text'
      }
      return this.type
    },
    inputStyle() {
      if (this.template === 'bottomLine' || this.template === 'outLine') {
        return
      }
      return {
        paddingLeft: this.prefixClientWidth + 16 + 'px',
        paddingRight: this.suffixClientWidth + 16 + 'px',
      }
    },
    flylabel() {
      if (this.value === 0) {
        return '0'
      }
      return this.$slots.prefix || this.$attrs.placeholder || this.value
    },
    prepend() {
      return this.$slots.prepend
    },
    append() {
      return this.$slots.append
    },
    prefix() {
      return this.$slots.prefix
    },
    suffix() {
      const h = this.$createElement
      if (this.type === 'password') {
        if (this.passwordClosed) {
          return h('i', {
            class: classNames('suffix-password', {
              'is-invalid': this.isError,
            }),
            on: {
              click: () => {
                this.passwordClosed = false
              },
            },
            domProps: {
              innerHTML: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                </svg>`,
            },
          })
        } else {
          return h('i', {
            class: classNames('suffix-password', {
              'is-invalid': this.isError,
            }),
            on: {
              click: () => {
                this.passwordClosed = true
              },
            },
            domProps: {
              innerHTML: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>`,
            },
          })
        }
      }
      return this.$slots.suffix
    },
  },
}
</script>
<style lang="scss" src="./style.scss"></style>
