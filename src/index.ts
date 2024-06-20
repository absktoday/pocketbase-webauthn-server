import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { pb } from "./libs/pocketbase_client";
import { env } from "hono/adapter";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Rev!");
});

app.post("/options", (c) => {
  const { POCKETBASE_URL } = env<{ POCKETBASE_URL: string }>(c);

  return c.text("Hello Rev!" + POCKETBASE_URL);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
