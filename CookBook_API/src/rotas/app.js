import express from "express";
const app = express();
app.use(express.json());

const receitas = [
    {
        id: 1,
        titulo: "Receita 1"
    },
    {
        id: 2,
        titulo: "Receita 2"
    }
];

app.get('/', (req, res) => {
    res.status(200).send('API CookBook')
})

app.get('/receitas', (req, res) => {
    res.status(200).send(receitas)
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

export default app;