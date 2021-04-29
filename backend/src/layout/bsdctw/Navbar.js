import { h, resolveComponent, ref } from 'vue'
import cx from 'classnames'
import { useRouter } from 'vue-router'
import { RouterModel } from '@base/models/proto'
import * as lib from '@base/library'
import Style from './navbar-style'

export default {
  name: 'Navbar',
  props: {
    routes: {
      type: RouterModel,
      required: true,
    },
    panelLink: {
      type: Boolean,
      default: false,
    },
    levelPadding: {
      type: Number,
      default: 8,
    },
  },
  setup(props) {
    const router = useRouter()
    const IconComponent = resolveComponent('Icon')
    const RouterLink = resolveComponent('router-link')
    const pathFormat = $routes => {
      const pathArr = []
      const createPath = r => {
        if (r.path) {
          pathArr.unshift(r.path)
          if (r.parent && !/^\//.test(r.path)) {
            createPath(r.parent)
          }
        }
      }
      createPath($routes)
      return pathArr.join('/')
    }
    const renderFilter = $routes => {
      return $routes.children.filter(r => !(r.meta && r.meta.navHidden))
    }
    const navbar = ($route, level = 0) => {
      const children = $route.children ? renderFilter($route) : []
      const panel = ref({})
      $route.panel = panel
      return h(
        'li',
        {
          key: $route.name,
        },
        [
          h(
            RouterLink,
            {
              to: pathFormat($route),
              custom: true,
            },
            {
              default: ({ href }) =>
                h(
                  'a',
                  {
                    href,
                    id: $route.uuid,
                    class: Style.getClassName('link'),
                    onClick: e => {
                      e.preventDefault()
                      if (!children.length || props.panelLink) {
                        router.push(href)
                      } else {
                        const panel = e.target.nextElementSibling
                        if (panel) {
                          if ($route.meta.open) {
                            lib.slideUp(panel)
                            $route.meta.open = false
                          } else {
                            lib.slideDown(panel)
                            $route.meta.open = true
                          }
                        }
                      }
                    },
                  },
                  [
                    h('div', {
                      style: {
                        paddingLeft: level * props.levelPadding + 'px',
                      },
                    }),
                    h(
                      'i',
                      {
                        class: Style.getClassName('linkIcon'),
                      },
                      [
                        $route.icon && $route.icon.url
                          ? h(IconComponent, {
                              pattern: $route.icon.url,
                              size: ['100%', 'auto'],
                              type: 'img',
                            })
                          : null,
                      ]
                    ),
                    h(
                      'span',
                      {
                        class: Style.getClassName('linkText'),
                      },
                      [$route.title || $route.name]
                    ),
                    children.length
                      ? h(
                          'i',
                          {
                            class: Style.getClassName('linkArrow'),
                            style: {
                              transform: $route.meta.open ? '' : 'rotate(-90deg)',
                            },
                          },
                          [
                            h(IconComponent, {
                              pattern: 'Arrow',
                              size: '10',
                            }),
                          ]
                        )
                      : null,
                  ]
                ),
            }
          ),
          children.length
            ? h(
                'ul',
                {
                  ref: panel,
                  style: { willChange: 'height' },
                  class: cx({
                    'router:hidden': !props.panelLink,
                  }),
                },
                [children.map($$route => navbar($$route, level + 1))]
              )
            : null,
        ]
      )
    }
    return () => {
      return h('nav', {}, [
        props.routes && props.routes.children
          ? h('ul', [renderFilter(props.routes).map($routes => navbar($routes))])
          : null,
      ])
    }
  },
}
