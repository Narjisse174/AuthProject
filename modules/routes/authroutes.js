const authcontrollers = require('../controllers/authcontrollers').default;

async function authroutes(fastify) {
  fastify.post('/login', authcontrollers.login);
  fastify.post('/signup', authcontrollers.signup);
}

module.exports = authroutes;
