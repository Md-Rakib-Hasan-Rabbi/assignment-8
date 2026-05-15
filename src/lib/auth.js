import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("Missing MONGO_URI in environment variables.");
}

const globalForMongo = globalThis;
const client = globalForMongo.__mongoClient ?? new MongoClient(mongoUri);

if (!globalForMongo.__mongoClient) {
  globalForMongo.__mongoClient = client;
}

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
  },
});