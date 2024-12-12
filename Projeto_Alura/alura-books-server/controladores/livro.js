const {
    getTodosLivros,
    getLivroPorId,
    postCriarLivro,
    patchAtualizaLivro,
    deleteLivroPorId
} = require('../servicos/livros')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
        res.status(422).send("Id inválido")
    } catch (error) {
        res.status(500).send(error.masage)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422).send("Id inválido")
        }
    } catch (error) {
        res.status(500).send(error.masage)

    }

}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (req.body.nome) {
            postCriarLivro(livroNovo)
            res.status(201).send("Livro inserido")
        } else {
            res.status(422).send("O campo nome é obrigatório")
        }
    } catch (error) {
        res.status(500).send(error.masage)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            patchAtualizaLivro(body, id)
            res.status(201).send("Livro atualizado")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500).send(error.masage)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteLivroPorId(id)
            res.status(500).send("livro deletado com sucesso")
        } else {
            res.status(422).send("ID inválido")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}