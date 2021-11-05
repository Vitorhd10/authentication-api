const db = require("../db/models/index");

module.exports = {
  auth: (payload) => db.User.findOne(payload),
};
