import receita from "../models/Receita.js";

class ReceitasControllers {
    static async listarReceitas(req, res) {
        try {
            const receitas = await receita.find({});
            res.status(200).json(receitas);
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao listar receitas`
            })
        }
    }

    static async listarReceitasPorId(req, res){
        try {
            const id = req.params.id;
            const receitaEncontrada = await receita.findById(id);
            res.status(200).json(receitaEncontrada);
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao listar receita`
            })
        }
    }

    static async cadastrarReceita(req, res){
        try {
            const id = req.params.id;
            const novaReceita = await receita.create(req.body);
            res.status(200).json({
                message: "receita criado com sucesso",
                receita: novaReceita
            });
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao cadastrar receita`
            })  
        }
    }

    static async atualizarReceita(req, res){
        try {
            const id = req.params.id;
            await receita.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "receita atualizado com sucesso",
            });
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao atualizar receita`
            })  
        }
    }

    static async deletarReceita(req, res){
        try {
            const id = req.params.id;
            await receita.findByIdAndDelete(id, req.body);
            res.status(200).json({
                message: "Receita deletado com sucesso",
            });
        } catch (error) {
            res.status(500).json({
                message: `${error} - falha ao deletar Receita`
            })  
        }
    }
}

export default ReceitasControllers;