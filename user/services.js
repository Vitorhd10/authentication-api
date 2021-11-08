const db = require('../src/db/models')

module.exports = {
    create: payload => db.User.findOnde({where: payload})
}