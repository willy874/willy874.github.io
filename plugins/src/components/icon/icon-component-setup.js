import { h } from 'vue'
// import cx from 'classnames'
import * as Pattern from './pattern'

/**
 * @param {}
 */
export default {
  name: 'Icon',
  props: {
    pattern: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Array],
      default: 'auto auto',
    },
    type: {
      type: String,
      default: 'svg',
    },
  },
  setup(props, context) {
    const svgSize = () => {
      if (typeof props.size === 'string') {
        const size = props.size.split(',')
        return {
          width: size[0],
          height: size[1] || size[0],
        }
      } else if (Array.isArray(props.size)) {
        return props.size
      } else {
        console.error('[Icon] Is size is not a string.')
      }
    }
    if (props.type === 'svg') {
      const attrs =
        typeof Pattern[props.pattern] !== 'string' && 'attrs' in Pattern[props.pattern]
          ? Pattern[props.pattern].attrs
          : {}
      return () =>
        h('svg', {
          width: svgSize().width,
          height: svgSize().height,
          innerHTML: Pattern[props.pattern].path,
          ...attrs,
        })
    } else if (props.type === 'vnode') {
      return () => h('i', context.slots.default)
    } else if (props.type === 'img') {
      return () =>
        h('img', {
          src: props.pattern,
          width: svgSize().width,
          height: svgSize().height,
        })
    } else if (props.type === 'html') {
      return () =>
        h('i', {
          innerHTML: props.pattern,
        })
    } else {
      return () => h('div')
    }
  },
}
