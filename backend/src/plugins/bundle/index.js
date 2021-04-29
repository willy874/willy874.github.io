import { ref, onMounted, onUpdated, h, reactive } from 'vue';
import crypto from 'crypto';
import cx from 'classnames';

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

/**
 * @property {Number} id
 * @property {VueComponent} view
 * @property {Number} width
 * @property {Number} height
 * @property {Boolean} zIndexLock
 */
class Popup {
  constructor(args) {
    const entity = args || {};
    this.id = entity.id || v4();
    this.view = entity.view;
    this.width = entity.width || 0;
    this.height = entity.height || 0;
    this.zIndexLock = entity.zIndexLock || false;
    this.position = entity.position || {
      x: 'center',
      y: 'center',
    };
    this.onBackgroundClick =
      entity.onBackgroundClick ||
      (() => {
        this.close();
      });
    this.props = Object.assign(
      {
        id: this.id,
      },
      entity.props
    );
  }

  open(options) {
    const dialog = useDialog();
    Object.keys(options).forEach(key => {
      this[key] = options[key];
    });
    dialog.popup(this);
  }

  close() {
    const dialog = useDialog();
    dialog.closePopup(this.id);
  }
}

/**
 * @property {Array<Popup>} popups
 */
class Dialog$1 {
  constructor() {
    this.popups = [];
    this.popupRoot = null;
    this.popupCache = null;
  }

  popup(view, options) {
    document.body.style.overflow = 'hidden';
    const popup =
      view instanceof Popup
        ? view
        : new Popup({
            ...options,
            view,
          });
    this.popups.push(popup);
    return new Promise(resolve => {
      popup.onClose = attrs => {
        resolve(attrs);
      };
    })
  }

  closePopup(id) {
    return new Promise(resolve => {
      Promise.all(
        this.popups
          .filter((popup, index) => {
            if (typeof id === 'number') {
              return id === index
            } else if (typeof id === 'string') {
              return popup.id === id
            } else {
              return true
            }
          })
          .map(popup => {
            return new Promise(resolve => {
              popup.ref.style.opacity = '0';
              const end = () => {
                popup.ref.removeEventListener('transitionend', end);
                if (popup.onClose) popup.onClose(popup);
                resolve();
              };
              popup.ref.addEventListener('transitionend', end);
            })
          })
      ).then(() => {
        if (typeof id === 'number') {
          resolve(this.popups.splice(id, 1));
          if (this.popups.length === 0) document.body.style.overflow = '';
        }
        if (typeof id === 'string') {
          const index = this.popups.map(item => item.id).indexOf(id);
          resolve(this.popups.splice(index, 1));
          if (this.popups.length === 0) document.body.style.overflow = '';
        } else {
          resolve(this.popups.splice(0));
          document.body.style.overflow = '';
        }
      });
    })
  }
}

var PopupComponent = {
  props: {
    popup: {
      type: Popup,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    // 解除 Proxy 代理
    const PopupView = {};
    Object.keys(props.popup.view).forEach(key => {
      PopupView[key] = props.popup.view[key];
    });
    const dialog = useDialog();
    const popupItem = ref({});
    props.popup.updated = () => {
      props.popup.offsetWidth = popupItem.value.offsetWidth;
      props.popup.offsetHeight = popupItem.value.offsetHeight;
    };
    onMounted(() => {
      props.popup.ref = popupItem;
      const position = props.popup.position;
      const correctionValue = 20;
      const topMath = top => {
        if (typeof top === 'number') {
          return top + 'px'
        } else if (typeof top === 'string') {
          if (top === 'top') {
            return correctionValue + 'px'
          } else if (top === 'center') {
            return (
              (window.innerHeight - popupItem.value.offsetHeight) / 2 + 'px'
            )
          } else if (top === 'bottom') {
            return window.innerHeight - correctionValue + 'px'
          }
          return top
        }
        return 0
      };
      const leftMath = left => {
        if (typeof left === 'number') {
          return left + 'px'
        } else if (typeof left === 'string') {
          if (left === 'left') {
            return correctionValue + 'px'
          } else if (left === 'center') {
            return (window.innerWidth - popupItem.value.offsetWidth) / 2 + 'px'
          } else if (left === 'bottom') {
            return window.innerWidth - correctionValue + 'px'
          }
          return left
        }
        return 0
      };
      if (position.x || position.y) {
        popupItem.value.style.left = position.x ? leftMath(position.x) : 0;
        popupItem.value.style.top = position.y ? topMath(position.y) : 0;
      }
      if (position.left || position.top) {
        popupItem.value.style.left = position.left ? leftMath(position.left) : 0;
        popupItem.value.style.top = position.top ? topMath(position.top) : 0;
      }
      props.popup.updated();
    });
    onUpdated(() => {
      props.popup.updated();
    });
    return () => {
      return h(
        'div',
        {
          ref: popupItem,
          class: cx('absolute transition-opacity duration-300'),
          onClick: e => e.stopPropagation(),
          // change zIndex
          onMouseDown: () => {
            const indexOf = dialog.popups.indexOf(props.popup);
            if (dialog.popups[indexOf].zIndexLock) {
              return
            }
            if (indexOf !== dialog.popups.length - 1) {
              dialog.popups.push(dialog.popups.splice(indexOf, 1)[0]);
            }
          },
          style: {
            maxWidth: props.width || 'auto',
            width: props.width ? '100%' : 'auto',
            maxHeight: props.height || 'auto',
            height: props.height ? '100%' : 'auto',
            zIndex: (props.index + 1) * 1,
          },
        },
        [
          h(PopupView, {
            props: Object.assign(props.popup.props, {
              index: props.index,
            }),
            drag: e => {
              e.dataTransfer.setDragImage(new Image(), 0, 0);
              dialog.dropTarget = popupItem;
              dialog.dropOffsetX = e.pageX - popupItem.value.offsetLeft;
              dialog.dropOffsetY = e.pageY - popupItem.value.offsetTop;
            },
            touch: event => {
              const e = Array.apply([], event.touches).find(
                p => p.target === event.target
              );
              dialog.dropTarget = popupItem;
              dialog.dropOffsetX = e.pageX - popupItem.value.offsetLeft;
              dialog.dropOffsetY = e.pageY - popupItem.value.offsetTop;
            },
          }),
        ]
      )
    }
  },
};

var Dialog = {
  setup() {
    const dialog = useDialog();
    const isPopupOpen = () => dialog.popups.length;
    const popupMove = e => {
      const offsetWidth = dialog.dropTarget.offsetWidth;
      const offsetHeight = dialog.dropTarget.offsetHeight;
      if (window.innerWidth - offsetWidth < e.pageX - dialog.dropOffsetX) {
        dialog.dropTarget.style.left =
          window.innerWidth - offsetWidth - 1 + 'px';
      } else if (e.pageX - dialog.dropOffsetX < 1) {
        dialog.dropTarget.style.left = 0;
      } else {
        dialog.dropTarget.style.left = e.pageX - dialog.dropOffsetX + 'px';
      }
      if (window.innerHeight - offsetHeight < e.pageY - dialog.dropOffsetY) {
        dialog.dropTarget.style.top =
          window.innerHeight - offsetHeight - 1 + 'px';
      } else if (e.pageY - dialog.dropOffsetY < 1) {
        dialog.dropTarget.style.top = 0;
      } else {
        dialog.dropTarget.style.top = e.pageY - dialog.dropOffsetY + 'px';
      }
    };
    const windowResize = () => {
      if (isPopupOpen()) {
        dialog.popups.forEach(popup => {
          const target = popup.ref;
          const correctionValue = 8;
          const offsetRight = target.offsetWidth + target.offsetLeft;
          const offsetBottom = target.offsetHeight + target.offsetTop;
          if (window.innerWidth - correctionValue <= offsetRight) {
            if (window.innerWidth - correctionValue > target.offsetWidth) {
              target.style.left =
                window.innerWidth - popup.offsetWidth - correctionValue + 'px';
            }
          }
          if (window.innerHeight - correctionValue <= offsetBottom) {
            if (window.innerHeight - correctionValue > target.offsetHeight) {
              target.style.top =
                window.innerHeight - popup.offsetHeight - correctionValue + 'px';
            }
          }
          requestAnimationFrame(() => {
            popup.updated();
          });
        });
      }
    };
    window.addEventListener('resize', windowResize);
    return () => {
      return h(
        'div',
        {
          class: cx(
            'fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300',
            {
              'pointer-events-none opacity-0': !isPopupOpen(),
            }
          ),
          onClick: () => {
            dialog.popups.forEach(popup => {
              if (popup.onBackgroundClick) popup.onBackgroundClick(popup);
            });
          },
          onDragover: e => {
            if (dialog.dropTarget) {
              popupMove(e);
            }
          },
          onTouchMove: event => {
            if (dialog.dropTarget) {
              const e = Array.apply([], event.touches).find(
                p => p.target === event.target
              );
              popupMove(e);
            }
          },
        },
        [
          dialog.popups.map((popup, index) => {
            return h(PopupComponent, {
              popup,
              index,
              key: popup.id,
            })
          }),
        ]
      )
    }
  },
};

const DialogInstall = {
  install(app) {
    app.component('Dialog', Dialog);
  },
};

const DialogNative = reactive(new Dialog$1());

const useDialog = () => {
  return DialogNative
};

var add = {
  mount: '.icon-add',
  attrs: {
    viewBox: '0 0 448 448',
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'currentColor',
  },
  path: `
    <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/>
  `,
};

var arrowSolid = {
  mount: '.icon-add',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 451.847 451.847',
    fill: 'currentColor',
  },
  path: `
    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
  `,
};

var arrow = {
  mount: '.icon-add',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 213.333 213.333',
    fill: 'currentColor',
  },
  path: `
    <polygon points="0,53.333 106.667,160 213.333,53.333 "/>
  `,
};

var _delete = {
  mount: '.icon-add',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 384 384',
    fill: 'currentColor',
  },
  path: `
    <path d="M64,341.333C64,364.8,83.2,384,106.667,384h170.667C300.8,384,320,364.8,320,341.333v-256H64V341.333z M116.587,189.44l30.187-30.187L192,204.48l45.227-45.227l30.187,30.187l-45.227,45.227l45.227,45.227l-30.187,30.187L192,264.853l-45.227,45.227l-30.187-30.187l45.227-45.227L116.587,189.44z"/>
    <polygon points="266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333 "/>
  `,
};

var edit = {
  mount: '.icon-add',
  attrs: {
    viewBox: '0 0 512 511',
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'currentColor',
  },
  path: `
    <path d="m405.332031 256.484375c-11.796875 0-21.332031 9.558594-21.332031 21.332031v170.667969c0 11.753906-9.558594 21.332031-21.332031 21.332031h-298.667969c-11.777344 0-21.332031-9.578125-21.332031-21.332031v-298.667969c0-11.753906 9.554687-21.332031 21.332031-21.332031h170.667969c11.796875 0 21.332031-9.558594 21.332031-21.332031 0-11.777344-9.535156-21.335938-21.332031-21.335938h-170.667969c-35.285156 0-64 28.714844-64 64v298.667969c0 35.285156 28.714844 64 64 64h298.667969c35.285156 0 64-28.714844 64-64v-170.667969c0-11.796875-9.539063-21.332031-21.335938-21.332031zm0 0"/>
    <path d="m200.019531 237.050781c-1.492187 1.492188-2.496093 3.390625-2.921875 5.4375l-15.082031 75.4375c-.703125 3.496094.40625 7.101563 2.921875 9.640625 2.027344 2.027344 4.757812 3.113282 7.554688 3.113282.679687 0 1.386718-.0625 2.089843-.210938l75.414063-15.082031c2.089844-.429688 3.988281-1.429688 5.460937-2.925781l168.789063-168.789063-75.414063-75.410156zm0 0"/>
    <path d="m496.382812 16.101562c-20.796874-20.800781-54.632812-20.800781-75.414062 0l-29.523438 29.523438 75.414063 75.414062 29.523437-29.527343c10.070313-10.046875 15.617188-23.445313 15.617188-37.695313s-5.546875-27.648437-15.617188-37.714844zm0 0"/>
  `,
};

var gearOption = {
  mount: '.icon-add',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 369.793 369.792',
    fill: 'currentColor',
  },
  path: `
    <path d="M320.83,140.434l-1.759-0.627l-6.87-16.399l0.745-1.685c20.812-47.201,19.377-48.609,15.925-52.031L301.11,42.61c-1.135-1.126-3.128-1.918-4.846-1.918c-1.562,0-6.293,0-47.294,18.57L247.326,60l-16.916-6.812l-0.679-1.684C210.45,3.762,208.475,3.762,203.677,3.762h-39.205c-4.78,0-6.957,0-24.836,47.825l-0.673,1.741l-16.828,6.86l-1.609-0.669C92.774,47.819,76.57,41.886,72.346,41.886c-1.714,0-3.714,0.769-4.854,1.892l-27.787,27.16c-3.525,3.477-4.987,4.933,16.915,51.149l0.805,1.714l-6.881,16.381l-1.684,0.651C0,159.715,0,161.556,0,166.474v38.418c0,4.931,0,6.979,48.957,24.524l1.75,0.618l6.882,16.333l-0.739,1.669c-20.812,47.223-19.492,48.501-15.949,52.025L68.62,327.18c1.162,1.117,3.173,1.915,4.888,1.915c1.552,0,6.272,0,47.3-18.561l1.643-0.769l16.927,6.846l0.658,1.693c19.293,47.726,21.275,47.726,26.076,47.726h39.217c4.924,0,6.966,0,24.859-47.857l0.667-1.742l16.855-6.814l1.604,0.654c27.729,11.733,43.925,17.654,48.122,17.654c1.699,0,3.717-0.745,4.876-1.893l27.832-27.219c3.501-3.495,4.96-4.924-16.981-51.096l-0.816-1.734l6.869-16.31l1.64-0.643c48.938-18.981,48.938-20.831,48.938-25.755v-38.395C369.793,159.95,369.793,157.914,320.83,140.434z M184.896,247.203c-35.038,0-63.542-27.959-63.542-62.3c0-34.342,28.505-62.264,63.542-62.264c35.023,0,63.522,27.928,63.522,62.264C248.419,219.238,219.92,247.203,184.896,247.203z"/>
  `,
};

var home = {
  mount: '.icon-add',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 426.667 426.667',
    fill: 'currentColor',
  },
  path: `
    <polygon points="213.333,32 0,224 64,224 64,394.667 170.667,394.667 170.667,266.667 256,266.667 256,394.667 362.667,394.667 362.667,224 426.667,224 "/>
  `,
};

var play = {
  mount: '.icon-add',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 494.148 494.148',
    fill: 'currentColor',
  },
  path: `
    <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"/>
  `,
};

var Pattern = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Add: add,
  ArrowSolid: arrowSolid,
  Arrow: arrow,
  Delete: _delete,
  Edit: edit,
  GearOption: gearOption,
  Home: home,
  Play: play
});

/**
 * @param {}
 */
var Icon = {
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
        const size = props.size.split(',');
        return {
          width: size[0],
          height: size[1] || size[0],
        }
      } else if (Array.isArray(props.size)) {
        return props.size
      } else {
        console.error('[Icon] Is size is not a string.');
      }
    };
    if (props.type === 'svg') {
      const attrs =
        typeof Pattern[props.pattern] !== 'string' &&
        'attrs' in Pattern[props.pattern]
          ? Pattern[props.pattern].attrs
          : {};
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
};

const IconInstall = {
  install(app) {
    app.component('Icon', Icon);
  },
};

export { Dialog$1 as Dialog, DialogInstall, IconInstall, Popup, Dialog as VueDialog, Icon as VueIcon, PopupComponent as VuePopup, useDialog };
