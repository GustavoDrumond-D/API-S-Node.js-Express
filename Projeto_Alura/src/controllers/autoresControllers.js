import { autor } from "../models/Autor.js";

class AutorControllers {
    static async listarAuotores(req, res) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao listar autores`
            })
        }
    }

    static async listarAutoresPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao listar autor`
            })
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Autor criado com sucesso",
                autor: novoAutor
            })
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao cadastrar Autor`
            })
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Autor atualizado com sucesso"
            });
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao atualizar Autor`
            })
        }
    }

    static async deletarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: "Autor deletado com sucesso"
            });
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao deletar Autor`
            })
        }
    }
};

export default AutorControllers;