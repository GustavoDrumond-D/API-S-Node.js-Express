import express from "express";
import ReceitasControllers from "../controllers/receitasControllers.js";

const router = express.Router();

//rotas

//rota para listar receitas
router.get("/receitas", ReceitasControllers.listarReceitas);
//rota para listar receita por id
router.get("/receitas/:id", ReceitasControllers.listarReceitasPorId);
//rota para cadastrar receita
router.post("/receitas", ReceitasControllers.cadastrarReceita);
//rota para atualizar receita
router.put("/receitas/:id", ReceitasControllers.atualizarReceita);
//rota para deletar receita
router.delete("/receitas/:id", ReceitasControllers.deletarReceita);

export default router