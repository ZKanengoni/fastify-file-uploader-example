import fastify, { FastifyRequest } from 'fastify';
import fileUpload from 'fastify-file-upload';

const server = fastify({ logger: true });

server.register(fileUpload);

server.post('/upload', async (request: FastifyRequest, reply) => {
  if (!request.body) {
    return reply.status(400).send('No files were uploaded.');
  }

  const file = request.body;

  console.log('File: ', file);
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
