require('dotenv').config();
const fastify = require('fastify')({ logger: true });
import jwtPlugin from './modules/plugins/jwt';

fastify.register(jwtPlugin);

import authroutes from './modules/routes/authroutes';
fastify.register(authroutes, { prefix: '/api' });

fastify.get('/protected', { preHandler: [fastify.authenticate] }, async (request, reply) => {
  reply.send({ message: 'This is a protected route' });
});

// Démarrage du serveur
const start = async () => {
  try {
    const address = await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info(`Server listening on ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
