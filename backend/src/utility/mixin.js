/**
 * 避免在 mixin.methods 使用 this，減少函數間的耦合性
 */
export default {
  methods: {},
  beforeRouteEnter(to, from, next) {
    to.meta.enter = 'slide-left'
    from.meta.leave = 'fade'
    window.requestAnimationFrame(next)
  },
  beforeRouteUpdate(to, from, next) {
    to.meta.enter = 'slide-left'
    from.meta.leave = 'fade'
    window.requestAnimationFrame(next)
  },
}
