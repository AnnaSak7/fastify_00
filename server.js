import Fastify from "fastify";
import { items } from "./items.js";
const PORT = 5050;

const fastify = Fastify({
  logger: true,
});

// fastify.get("/items", (req, reply) => {
//   reply.send({ test: "Hello" });
// });

fastify.get("/items", (req, reply) => {
  reply.send(items);
});

fastify.get("/items/:id", (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);

  reply.send(item);
});

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
