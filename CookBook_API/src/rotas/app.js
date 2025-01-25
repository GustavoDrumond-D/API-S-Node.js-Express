import express from "express";
import dbConnect from "../config/dbConnect.js";
import receita from "../models/Receita.js";

const conexao = await dbConnect();

conexao.on('error', (erro) => {
    console.log("erro na conexao: ", erro)
});
conexao.once('open', () => {
    console.log("conexao aberta com sucesso")
})

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('API CookBook')
})

app.get('/receitas', async(req, res) => {
    const listarReceitas = await receita.find({});
    res.status(200).send(listarReceitas)
})

app.get('/receitas/:id', (req, res) => {
    const receita = receitas.findIndex(receita => {
        return receita.id == Number(req.params.id)
    })
    res.status(200).send(receitas[receita])
})

app.post('/receitas', (req, res) => {
    receitas.push(req.body)
    res.status(201).json("receita criada com sucesso")
})

app.put('/receitas/:id', (req, res) => {
    const receita = receitas.findIndex(receita => {
        return receita.id == Number(req.params.id)
    })
    receitas[receita].titulo = req.body.titulo
    res.status(200).json("receita atualizada com sucesso")
})

app.delete('/receitas/:id', (req, res) => {
    const receita = receitas.findIndex(receita => {
        return receita.id == Number(req.params.id)
    })
    receitas.splice(receita, 1)
    res.status(200).json("receita deletada com sucesso")
})

export default app;