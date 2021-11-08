const authRoutes = require('../auth/routes')
const userRoutes = require('../../user/routes')

module.exports = router => {
    authRoutes(router)
    userRoutes(router)
}