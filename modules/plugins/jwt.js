const fp = require('fastify-plugin');
const jwt = require('fastify-jwt').default;

async function jwtPlugin(fastify) {
  fastify.register(jwt, {
    secret: process.env.JWT_SECRET
  });

  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
}

module.exports = fp(jwtPlugin);
