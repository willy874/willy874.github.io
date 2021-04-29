import classNames from 'classnames'
import { mountedCheck } from '../../library'
import ListModel from '../../library/proto/list-model'

export default {
  name: 'Pagination',
  data() {
    return {
      loadedScrollTop: 0,
      paginationLoaded: true,
    }
  },
  props: {
    model: {
      type: ListModel,
      required: true,
    },
  },
  mounted() {
    const loading = this.$refs.loading
    mountedCheck(loading).then(() => {
      const loadingOffsetHeight = loading.offsetHeight
      this.loadedScrollTop = loading.getCoordinateBox().y
      window.addEventListener('scroll', () => {
        if (
          window.scrollY + window.outerHeight >
            this.loadedScrollTop + loadingOffsetHeight &&
          this.paginationLoaded
        ) {
          this.paginationLoaded = false
          this.getPagination()
        }
      })
    })
  },
  methods: {
    getPagination() {
      if (this.model.current_page >= this.model.last_page) {
        return
      }
      this.model.getPagination(this.model.current_page + 1).then(res => {
        const resListModel = res.data
        this.model.setPages(resListModel)
        resListModel.data.forEach(data => {
          const Model = this.model.modelType
          this.model.data.push(new Model(data))
        })
        window.requestAnimationFrame(() => {
          this.paginationLoaded = true
          if (!(this.model.total > this.model.data.length)) {
            return
          }
          this.loadedScrollTop = this.$refs.loading.getCoordinateBox().y
        })
      })
    },
  },
  render(h) {
    return h(
      'div',
      {
        ref: 'pagination',
        class: classNames('pagination'),
      },
      [
        h(
          'div',
          {
            class: classNames('pagination-list'),
          },
          [
            this.$slots.default
              ? this.$slots.default.map(children => {
                  return children
                })
              : null,
            (this.model.total || 999) > (this.model.data.length || 0)
              ? h(
                  'div',
                  {
                    ref: 'loading',
                    class: classNames('pagination-loading'),
                  },
                  [
                    h(
                      'div',
                      {
                        class: classNames('spinner-border', 'text-primary'),
                      },
                      [
                        h('div', {
                          class: classNames('sr-only'),
                        }),
                      ]
                    ),
                  ]
                )
              : null,
          ]
        ),
      ]
    )
  },
}
