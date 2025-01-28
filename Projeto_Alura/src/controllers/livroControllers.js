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
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: "Livro criado com sucesso",
                livro: novoLivro
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

    static async deletarLivro(req, res){
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
};

export default LivroControllers