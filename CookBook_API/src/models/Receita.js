import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, },
    nome: { type: String, required: true },
    descricao: { type: String },
    ingredientes: { type: String },
    intrucoes: { type: String },
    categoria: { type: String },
    dificuldade: { type: String },
}, {versionKey: false});

const receita = mongoose.model("receitas", receitaSchema);

export default receita;