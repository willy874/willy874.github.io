const Router = require('./core')
const createModelRouter = require('./model')
const Controller = require('../controller')

/**
 *
 * @param {*} args 設定參數
 * @return {Router} 回應建立出來的 Router
 */
module.exports = args => {
  const router = new Router(args)
  router.app.get('/', (req, res) => {
    res.send('Hello! This is serve system.')
  })
  createModelRouter(router)
  console.log('methodList:', router.methodList)
  // console.log(
  //   'controllerList:',
  //   router.controllerList.map(c => c.constructor.name)
  // )

  return router
}
