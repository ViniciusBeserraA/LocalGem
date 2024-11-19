import express, { json } from "express";

const posts = [
  {
    descricao: "Foto de um gato",
    imagem: "https://placecats.com/millie/300/150",
    id: 1,
  },
  {
    descricao: "Paisagem montanhosa",
    imagem: "https://placecats.com/millie/300/150",
    id: 2,
  },
  {
    descricao: "Cachorro brincando no parque",
    imagem: "https://placecats.com/millie/300/150",
    id: 3,
  },
  {
    descricao: "Comida deliciosa",
    imagem: "https://placecats.com/millie/300/150",
    id: 4,
  },
  {
    descricao: "Cidade à noite",
    imagem: "https://placecats.com/millie/300/150",
    id: 5,
  },
  {
    descricao: "Desenho animado divertido",
    imagem: "https://placecats.com/millie/300/150",
    id: 6,
  },
];

const app = express();
app.use(express.json());

app.listen("3000", () => {
  console.log("servidor rodando");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function findPostById(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  res.status(200).json(posts);
});
