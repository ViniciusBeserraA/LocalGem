import { MongoClient } from "mongodb";

export default async function connectToMongoDB(stringConnection) {
  let client;
  try {
    client = new MongoClient(stringConnection);
    console.log("Conectando ao mondoDB Atlas..");
    await client.connect();
    console.log("Conexão com MongoDB Atlas bem-sucedida!");
    return client;
  } catch (error) {
    console.error(" Erro ao conectar ao MongoDB Atlas:", error);
    process.exit();
  }
}
