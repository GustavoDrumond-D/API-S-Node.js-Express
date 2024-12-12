const { getTodosfavoritos, postInsereLivroPorId, deleteFavoritoPorId } = require("../servicos/favoritos")


function getFavoritos(req, res) {
    try {
        const livros = getTodosfavoritos()
        res.send(livros)
        res.status(422).send("Id inválido")
    } catch (error) {
        res.status(500).send(error.masage)
    }
}

function postFavoritos(req, res) {
    try {
        const id = req.params.id
        postInsereLivroPorId(id)
        res.status(201).send("Favorito inserido")
    } catch (error) {
        res.status(500).send(error.masage)
    }
}

function deleteFavoritos(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteFavoritoPorId(id)
            res.status(500).send("Favorito deletado com sucesso")
        } else {
            res.status(422).send("ID inválido")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos

}