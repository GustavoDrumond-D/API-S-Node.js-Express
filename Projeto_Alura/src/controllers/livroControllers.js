import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroControllers {
    static async listarLivros(req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao listar livros`
            })
        }
    }

    static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao listar livros`
            })
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;

        try {
            const autorEnccontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ... novoLivro, autor: { ...autorEnccontrado._doc}}
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "Livro criado com sucesso",
                livro: livroCriado
            })
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao cadastrar livro`
            })
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Livro atualizado com sucesso"
            });
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao atualizar livro`
            })
        }
    }

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: "Livro deletado com sucesso"
            });
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao deletar livro`
            })
        }
    }

    static async listarLivrosPorEditora (req, res){
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao busca livro por editora`
            })
        }
    }
};

export default LivroControllers