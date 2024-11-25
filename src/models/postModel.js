import connectToMongoDB from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

const conexao = await connectToMongoDB(process.env.STRING_CONNECTION);
const database = conexao.db("db-images");
const collection = database.collection("posts");

export async function getAllPosts() {
  return collection.find().toArray();
}

export async function createPost(newPost) {
  return collection.insertOne(newPost);
}
export async function updatePost(id, newPost) {
  const objectId = ObjectId.createFromHexString(id);
  return collection.updateOne(
    { _id: new ObjectId(objectId) },
    { $set: newPost }
  );
}
