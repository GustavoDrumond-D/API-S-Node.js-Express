import express from "express";
import livros from "./livrosRoutes.js";

const router = (app) => {
    app.route("/").get((req,res) => {
        res.status(200).send({titulo: "Curso de Node.js"})
    })

    app.use(express.json(), livros)
}

export default router