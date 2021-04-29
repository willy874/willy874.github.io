const route = require('./core')

module.exports = (args) => {
  const Route = new route(args)
  Route.get('/', (req, res) => {
    res.send('Hello! This is serve system.')
  })
  /**
   * API
   */
  // UserController
  // Route.api('get','/user', ['Auth','UserController@getUser'])

  // NavigationController
  // Route.api('get','/navigation', 'NavigationController@getNavigation')
  // Route.api('get','/navigation/:id?', 'NavigationController@getNavigationById')

  Route.createSocket(args => {
    const {
      client
    } = args
    console.log('Socket connection')

    client.on('close', () => {
      console.log('Close connected')
    })
  })

  return Route
}

