import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { pb } from "./libs/pocketbase_client";
import dotenv from "dotenv";
dotenv.config();

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Rev!");
});

app.post("/options", (c) => {
  return c.text("Hello Rev!" + process.env.POCKETBASE_URL);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
