import Fastify from "fastify";
// import fastifySwagger from "fastify-swagger";
import { itemRoutes } from "./routes/items.js";
const PORT = 5050;

const fastify = Fastify({
  logger: true,
});

// fastify.get("/items", (req, reply) => {
//   reply.send({ test: "Hello" });
// });

fastify.register(itemRoutes);
// fastify.register(fastifySwagger, {
//   exposeRoute: true,
//   routePrefix: "/docs",
//   swagger: {
//     info: { title: "fastify-api" },
//   },
// });

const start = async () => {
  try {
    await fastify.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
