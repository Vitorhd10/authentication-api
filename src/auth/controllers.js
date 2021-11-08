const services = require("./services");
const Boom = require("boom");
const jwt = require('jsonwebtoken')

const Validator = require("fastest-validator");

const v = new Validator();

module.exports = {
  auth: async (ctx) => {
    const {
      request: { body },
      response,
    } = ctx;

    const schema = {
      email: { max: 255, min: 5, type: "string" },
      password: { max: 16, min: 6, type: "string" },
    };
    const errors = v.validate(body, schema);

    if (Array.isArray(errors) && errors.length) {
      response.status = 400;
      return (response.body = Boom.badRequest(null, errors));
    }

    const user = await services.auth(body);
    console.log(user);
    if (user) {
      response.body = {
          result: jwt.sign({ email: user.email }, 'segredo')
        }
    } else {
      response.status = 401;
      response.body = { result: Boom.unauthorized() };
    }
  },
};
