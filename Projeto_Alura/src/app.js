import express from "express";
const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    const livro = livros.findIndex(livro => {
        return livro.id === Number(req.params.id)
    })
    res.status(200).json(livros[livro])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json("livro criado com sucesso")
})

app.put('/livros/:id', (req, res) => {
    const livro = livros.findIndex(livro => {
        return livro.id === Number(req.params.id)
    })
    livros[livro].titulo = req.body.titulo
    res.status(201).json("livro atualizado com sucesso")
})

app.delete('/livros/:id', (req, res) => {
    const livro = livros.findIndex(livro => {
        return livro.id === Number(req.params.id)
    })
    livros.splice(livro, 1)
    res.status(201).json("livro deletado com sucesso")
})

export default app;