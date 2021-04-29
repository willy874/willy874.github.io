import v from '../../../library/vnode'

export default function () {
  const h = v.createVirtualDom
  const PrefixVNode = () => {
    if (this.prefix) {
      return h(
        '.text-input-prefix',
        {
          ref: 'prefix',
        },
        [this.prefix]
      )
    }
  }
  const SuffixVNode = () => {
    if (this.suffix) {
      return h(
        '.text-input-suffix',
        {
          ref: 'suffix',
        },
        [this.suffix]
      )
    }
  }
  const PrependVNode = () => {
    if (this.prepend) {
      return h('.input-group-prepend', [
        h('span.input-group-text', this.prepend),
      ])
    }
  }
  const AppendVNode = () => {
    if (this.prepend) {
      return h('.input-group-append', [h('span.input-group-text', this.append)])
    }
  }
  const FlyLabelVNode = () => {
    const isTemplate =
      this.template === 'outLine' || this.template === 'bottomLine'
    if (this.label && isTemplate) {
      return h(
        '.text-input-flylabel',
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
      return h('.text-input-line', {
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
  const InputVNode = () => {
    return h('input.form-control', {
      ref: 'input',
      class: {
        'is-invalid': this.isError,
        ...this.$attrs.inputClass,
      },
      style: {
        ...this.$attrs.inputStyle,
      },
      attrs: {
        type: this.inputType,
        value: this.value,
        ...this.$attrs,
      },
      on: this.$listeners,
      onload: e => {
        e.target.value = this.value
      },
      oninput: e => {
        this.value = e.target.value
        this.model.edited = true
        this.$emit('input', e)
      },
    })
  }
  const ErrorBoxVNode = () => {
    if (this.$slots.error) {
      return h('.text-input-error-box', this.$slots.error)
    }
  }

  const vnode = h(
    '.text-input',
    {
      class: {
        disabled: this.$attrs.disabled,
        readonly: this.$attrs.readonly,
        native: this.template === 'native',
        'bottom-line': this.template === 'bottomLine',
        'out-line': this.template === 'outLine',
      },
      style: {
        paddingBottom: this.isError && this.$slots.error ? '18px' : 0,
      },
    },
    [
      PrependVNode,
      h('.text-input-container', [
        PrefixVNode,
        h('.text-input-wrapper', [InputVNode]),
        SuffixVNode,
        OutlineEffectVNode,
        BottomlineEffectVNode,
        FlyLabelVNode,
      ]),
      AppendVNode,
      ErrorBoxVNode,
    ]
  )

  return v.createVueVnode(vnode, this)
}
