/* eslint-disable no-console */
import { MongoClient } from "mongodb";

const db = {};

const connect = async (): Promise<void> => {
  const mongoURL = process.env.MONGO_URL;
  const poolSize = process.env.MONGO_POOLSIZE
    ? parseInt(process.env.MONGO_POOLSIZE, 10)
    : 1;
  if (!mongoURL) {
    throw new Error("MONGO DB won't be connected!");
  }
  const client = new MongoClient(mongoURL, { poolSize });
  await client.connect();
  const database = client.db("Vibe");
  const iOS = database.collection("iOS");
  const web = database.collection("web");
  Object.assign(db, { iOS, web });
  console.log("MongoDB is now connected");
};

export { connect, db };
