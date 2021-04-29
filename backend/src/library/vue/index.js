import classNames from 'classnames'
import _flattenDeep from 'lodash/flattenDeep'
/**
 * 虛擬節點建構式
 * @param {String} selector 將字串轉譯成有意義的 HTML 結構物件
 */
function compileSelector(selector) {
  // eslint-disable-next-line no-useless-escape
  const selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
  let tag = 'div'
  const classes = []
  const attrs = {}
  const matchSelectorParser = selectorString => {
    const match = selectorParser.exec(selectorString)
    if (match) {
      const type = match[1]
      const value = match[2]
      if (type === '' && value !== '') tag = value
      else if (type === '#') attrs.id = value
      else if (type === '.') classes.push(value)
      else if (match[3][0] === '[') {
        let attrValue = match[6]
        if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, '$1').replace(/\\\\/g, '\\')
        if (match[4] === 'class') classes.push(attrValue)
        else attrs[match[4]] = attrValue === '' ? attrValue : attrValue || true
      }
      return matchSelectorParser(selectorString)
    }
  }
  matchSelectorParser(selector)
  if (classes.length > 0) attrs.className = classes.join(' ')
  const dom = document.createElement(tag)
  Object.keys(attrs).forEach(key => {
    dom.setAttribute(key, attrs[key])
  })
  return { tag, attrs, dom }
}

function renderVirtualDom(param) {
  const fp = p => {
    if (typeof p === 'function') {
      const VdRender = p
      if (Object.isPrototypeOf.call(VirtualDom, VdRender)) {
        return new VdRender()
      }
      return p()
    }
    return p
  }
  if (Array.isArray(param)) {
    return _flattenDeep(param).map(v => fp(v))
  }
  return fp(param)
}

/**
 * 虛擬節點建立函式
 * @param {String|Object} tag 要建立的虛擬節點或標籤
 * @param {Object} attrs 參數
 * @param {String|Array|VirtualDom} children 往子層傳遞的節點
 * @return {VirtualDom|VNode} 返回一個 VirtualDom 或將 VNode 傳出
 */
function createVirtualDom(...args) {
  const param1 = renderVirtualDom(args[0])
  const param2 = renderVirtualDom(args[1])
  const param3 = renderVirtualDom(args[2])
  if (param1 instanceof VirtualDom || param1 instanceof window.VNode) {
    return param1
  }
  if (
    typeof param2 === 'string' ||
    Array.isArray(param2) ||
    param2 instanceof VirtualDom ||
    param2 instanceof window.VNode
  ) {
    return new VirtualDom({
      tag: param1,
      attrs: undefined,
      children: param2,
    })
  }
  return new VirtualDom({
    tag: param1,
    attrs: param2,
    children: param3,
  })
}

/**
 * 虛擬節點轉換函式
 * @param {VirtualDom|VNode} vnode 將虛擬節點轉換成 Vue VNode
 * @param {VueComponent} vm 虛擬節點所屬的組件
 */
function createVueVnode(vdom, vm) {
  const VNode = window.VNode
  const createElement = vm.$createElement
  if (vdom instanceof VNode) {
    return vdom
  }
  let vnode = null
  if (vdom instanceof VirtualDom) {
    const tag = vdom.renderFunction().tag || vdom.renderFunction().component
    const attrs = vdom.renderFunction().attrs || {}
    const children = vdom.renderFunction().children || null
    if (children) {
      if (Array.isArray(children)) {
        vnode = createElement(
          tag,
          attrs,
          _flattenDeep(children).map(v => createVueVnode(v, vm)),
          false
        )
      } else {
        vnode = createElement(tag, attrs, children, false)
      }
    } else {
      vnode = createElement(tag, attrs, undefined, false)
    }
  }
  if (vdom.lifecycle.update) {
    vnode.context.$nextTick(function () {
      vdom.lifecycle.update(vnode)
    })
  }
  return vnode
}

/**
 * 虛擬節點建構式
 * @param {String|Object} tag 要建立的虛擬節點或標籤
 * @param {Object} attrs 參數
 * @param {String|Array|VirtualDom} children 往子層傳遞的節點
 */
class VirtualDom {
  constructor(args) {
    const entity = args || {}
    const tag = entity.tag || 'div'
    const attrs = entity.attrs || {}
    if (entity.children && entity.children.length) {
      this.children = entity.children.filter(child => child)
    }
    const attrsCache = {}
    this.attrs = {}
    const allowed = [
      'style',
      'props',
      'domProps',
      'nativeOn',
      'directives',
      'scopedSlots',
      'slot',
      'key',
      'ref',
      'refInFor',
    ]
    allowed.forEach(key => {
      if (attrs[key] !== undefined) {
        this.attrs[key] = attrs[key]
      }
      delete attrs[key]
    })
    this.attrs.on = Object.assign({}, attrs.on)
    this.lifecycle = {}
    Object.keys(attrs).forEach(key => {
      if (/^on/.test(key) && typeof attrs[key] === 'function') {
        if (['onupdate', 'onremove'].includes(key)) {
          this.lifecycle[key.slice(2)] = attrs[key]
        } else {
          this.attrs.on[key.slice(2)] = attrs[key]
        }
        delete attrs[key]
      }
    })
    delete attrs.on
    if (typeof tag === 'string') {
      const selector = compileSelector(tag)
      this.tag = selector.tag
      const classes = classNames(selector.attrs.className || '', attrs.class || '')
      if (classes) this.attrs.class = classes
      delete selector.attrs.className
      delete attrs.class
      attrsCache.selector = selector.attrs
      attrsCache.param = attrs.attrs
      delete attrs.attrs
      attrsCache.attrs = attrs
      const objAttr = Object.assign(attrsCache.selector, attrsCache.param, attrsCache.attrs)
      if (Object.keys(objAttr).length) {
        this.attrs.attrs = objAttr
      }
    } else if (typeof tag === 'object') {
      this.component = tag
      this.attrs.class = classNames(attrs.class || '')
      delete attrs.class
      if (attrs.attrs) {
        this.attrs.attrs = attrs.attrs
        delete attrs.attrs
      }
      if (Object.keys(attrs).length) {
        this.attrs.props = attrs
      }
    }
  }

  renderFunction() {
    if (this.render) {
      return this.render(createVirtualDom)
    }
    return {
      tag: this.tag,
      attrs: this.attrs,
      children: this.children,
      component: this.component,
    }
  }
}

VirtualDom.createVueVnode = createVueVnode
VirtualDom.createVirtualDom = createVirtualDom
VirtualDom.compileSelector = compileSelector

export { VirtualDom }
