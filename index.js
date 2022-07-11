"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_file_upload_1 = __importDefault(require("fastify-file-upload"));
const server = (0, fastify_1.default)({ logger: true });
server.register(fastify_file_upload_1.default);
server.post('/upload', async (request, reply) => {
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
