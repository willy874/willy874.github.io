const Router = require('./core')
const Controller = require('../controller')

module.exports = args => {
  const router = new Router(args)
  router.app.get('/', (req, res) => {
    res.send('Hello! This is serve system.')
  })
  // Controller.NavigationController
  // Controller.UserController
  /**
   * API
   */
  // UserController
  // Route.api('get','/user', ['Auth','UserController@getUser'])

  // NavigationController
  // Route.api('get','/navigation', 'NavigationController@getNavigation')
  // Route.api('get','/navigation/:id?', 'NavigationController@getNavigationById')

  return router
}
