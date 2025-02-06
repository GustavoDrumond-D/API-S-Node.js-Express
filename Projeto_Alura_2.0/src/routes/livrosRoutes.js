import express from "express";
import LivroController from "../controllers/livrosController.js";
import Paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, Paginar)
  .get("/livros/busca", LivroController.listarLivroPorFiltro, Paginar)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);

export default router;
