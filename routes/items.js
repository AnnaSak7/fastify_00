import { getItems, getItem } from "../controllers/itemsController.js";

const item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: item,
      },
    },
  },
  //   handler: function (req, reply) {
  //     reply.send(items);
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: item,
    },
  },
  handler: getItem,
};

export const itemRoutes = (fastify, options, done) => {
  fastify.get("/items", getItemsOpts);

  fastify.get("/items/:id", getItemOpts, (req, reply) => {
    // const { id } = req.params;
    // const item = items.find((item) => item.id === id);
    // reply.send(item);
  });

  done();
};
