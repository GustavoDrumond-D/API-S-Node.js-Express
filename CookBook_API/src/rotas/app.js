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

app.post('/receitas', (req, res) => {
    receitas.push(req.body)
    res.status(201).json("receita criada com sucesso")
})

export default app;