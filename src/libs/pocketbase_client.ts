import PocketBase from "pocketbase";
import { env } from "hono/adapter";

export const pb = new PocketBase(process.env.POCKETBASE_URL);
