import express from "express";
import AutorControllers from "../controllers/autoresControllers.js";

const router = express.Router();

//Rotas

//rota para listar autores
router.get("/autores", AutorControllers.listarAuotores);
//rota para listar autor por id
router.get("/autores/:id", AutorControllers.listarAutoresPorId);
//rota para cadastrar autor
router.post("/autores", AutorControllers.cadastrarAutor);
//rota para atualizar autor
router.put("/autores/:id", AutorControllers.atualizarAutor);
//rota para deletar autor
router.delete("/autores/:id", AutorControllers.deletarAutor);



export default router