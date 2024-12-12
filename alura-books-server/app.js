const express = require("express");
const rotaLivros = require('./rotas/livro')
const rotaFavoritos = require('./rotas/favoritos')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivros)
app.use('/favoritos', rotaFavoritos )

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})