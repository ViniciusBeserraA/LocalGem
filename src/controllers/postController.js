import { getAllPosts, createPost } from "../models/postModel.js";
import fs from "fs";

export async function listarPosts(req, res) {
  const result = await getAllPosts();
  res.status(200).json(result);
}

export async function salvarPost(req, res) {
  const newPost = req.body;
  try {
    const result = await createPost(newPost);
    res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "mensagem de erro": "Falha na requisição" });
  }
}

export async function uploadImg(req, res) {
  const newPost = {
    description: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  try {
    const result = await createPost(newPost);
    const renameImg = `uploads/${result.insertedId}.png`;
    fs.renameSync(req.file.path, renameImg);
    res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "mensagem de erro": "Falha na requisição" });
  }
}