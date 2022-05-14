import Fastify from "fastify";
import multer from "fastify-multer";
import CarRoutes from "./apicar/routes/Carroutes.js.js";
import BrandRoutes from "./apicar/routes/Brandroutes.js.js";
import fastifyStatic from "fastify-static";
import path from 'path';

const __dirname = path.resolve();

const fastify = Fastify({
  logger: true,
});

fastify.register(multer.contentParser);
fastify.register(fastifyStatic,{
  root:path.join(__dirname,"public"),
  prefix:'/public/',
});

fastify.register(CarRoutes);
fastify.register(BrandRoutes);

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
