import * as handle from './handle'

const installEvent = {
  install(app) {
    app.config.globalProperties.$event = handle
  },
}

export default installEvent
