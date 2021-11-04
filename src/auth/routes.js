const controllers = require('./controllers')

module.exports = router => {
    router.get('/v1/api/auth', controllers.auth)
}