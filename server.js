import Fastify from "fastify";
import { itemRoutes } from "./routes/items.js";
const PORT = 5050;

const fastify = Fastify({
  logger: true,
});
fastify.register(itemRoutes);
// fastify.get("/items", (req, reply) => {
//   reply.send({ test: "Hello" });
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
