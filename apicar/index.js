// ESM
import multer from "fastify-multer";
import fastifyStatic from ".fastify-static";
import Fastify from 'fastify'
import path from 'path';
import carroutes from "."

const_dirname = path.resolve();

const fastify = Fastify({
    logger:true,
})

fastify.register(multer.contentParser);
fastify.register(fastifyStatic,{
    root:pathToFileURL.join(__dirname,'public'),
    prefix: '/public/',
})

fastify.register(carroutes);
fastify.register(brandroutes);

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()