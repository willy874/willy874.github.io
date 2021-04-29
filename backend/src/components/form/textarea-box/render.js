import v from '../../../library/vnode'

export default function () {
  const h = v.createVirtualDom
  const TextAreaVNode = () => {
    return h(
      'textarea.form-control',
      {
        class: {
          'is-invalid': this.isError,
        },
        attrs: {
          value: this.value,
          ...this.$attrs,
        },
        on: this.$listeners,
        oninput: e => {
          this.model[this.handle] = e.target.value
          this.value = e.target.value
          this.model.edited = true
          this.$emit('input', e, this)
        },
      },
      [this.value]
    )
  }
  const FlyLabelVNode = () => {
    const isTemplate =
      this.template === 'outLine' || this.template === 'bottomLine'
    if (this.label && isTemplate) {
      return h(
        '.textarea-flylabel',
        {
          class: {
            flying: this.flylabel,
            'is-invalid': this.isError,
          },
        },
        [h('span', this.label)]
      )
    }
  }
  const BottomlineEffectVNode = () => {
    if (this.template === 'bottomLine') {
      return h('.textarea-line', {
        class: {
          'is-invalid': this.isError,
        },
      })
    }
  }
  const OutlineEffectVNode = () => {
    if (this.template === 'outLine') {
      return h(
        'fieldset',
        {
          class: {
            'is-invalid': this.isError,
          },
        },
        this.label ? [h('legend', h('span', this.label))] : null
      )
    }
  }
  const ErrorBoxVNode = () => {
    if (this.$slots.error) {
      return h('.textarea-error-box', this.$slots.error)
    }
  }
  const vnode = h(
    '.textarea-box',
    {
      class: {
        disabled: this.$attrs.disabled,
        readonly: this.$attrs.readonly,
        native: this.template === 'native',
        'bottom-line': this.template === 'bottomLine',
        'out-line': this.template === 'outLine',
      },
    },
    [
      h('.textarea-container', [
        h('.textarea-wrapper', [TextAreaVNode]),
        OutlineEffectVNode,
        BottomlineEffectVNode,
        FlyLabelVNode,
      ]),
      ErrorBoxVNode,
    ]
  )
  return v.createVueVnode(vnode, this)
}
