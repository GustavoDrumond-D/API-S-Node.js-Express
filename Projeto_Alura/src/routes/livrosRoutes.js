import express from "express";
import LivroControllers from "../controllers/livroControllers.js";

const router = express.Router();

//Rotas

//rota para listar livros
router.get("/livros", LivroControllers.listarLivros);
//rota para listar livros por editora
router.get("/livros/busca", LivroControllers.listarLivrosPorEditora);
//rota para listar livro por id
router.get("/livros/:id", LivroControllers.listarLivrosPorId);
//rota para cadastrar livro
router.post("/livros", LivroControllers.cadastrarLivro);
//rota para atualizar livro
router.put("/livros/:id", LivroControllers.atualizarLivro);
//rota para deletar livro
router.delete("/livros/:id", LivroControllers.deletarLivro);


export default router