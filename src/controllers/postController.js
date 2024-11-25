import { getAllPosts, createPost, updatePost } from "../models/postModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

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

export async function atualizarPost(req, res) {
  const id = req.params.id;
  const urlImg = `http://localhost:3000/${id}.png`;
  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await gerarDescricaoComGemini(imgBuffer);
    const post = {
      imgUrl: urlImg,
      description: descricao,
      alt: req.body.alt,
    };
    const result = await updatePost(id, post);
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
