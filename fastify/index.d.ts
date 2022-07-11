import { FastifyRequest } from 'fastify';

export module 'fastify' {
  export interface FastifyRequest {
    name: string;
    data: Buffer;
    size: number;
    encoding: string;
    tempFilePath: string;
    truncated: boolean;
    mimetype: string;
    md5: string;
    mv: Function;
  }
}
