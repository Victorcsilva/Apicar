import Fastify from "fastify";
import multer from "fastify-multer";
import fastifyStatic from "fastify-static";
import Carroutes from "./routes/Carroutes.js";
import Brandroutes from "./routes/Brandroutes.js";
import path from 'path';
import helmet from "fastify-helmet";

const __dirname = path.resolve();

const fastify = Fastify({
  logger: true,
});

fastify.register(multer.contentParser);
fastify.register(fastifyStatic,{
  root:path.join(__dirname,"public"),
  prefix:'/public/',
});

fastify.register(Carroutes);
fastify.register(Brandroutes);

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
