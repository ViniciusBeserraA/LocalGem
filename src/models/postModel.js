import connectToMongoDB from "../config/dbConfig.js";

const conexao = await connectToMongoDB(process.env.STRING_CONNECTION);
const database = conexao.db("db-images");
const collection = database.collection("posts");

export async function getAllPosts() {
  return collection.find().toArray();
}

export async function createPost(newPost) {
  return collection.insertOne(newPost);
}
