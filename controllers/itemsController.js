import { items } from "../Items.js";

export const getItems = (req, reply) => {
  reply.send(items);
};

export const getItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);

  reply.send(item);
};
