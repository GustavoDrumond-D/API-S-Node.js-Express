import express from "express";
import receitas from "./receitasRoutes.js";

const router = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "API CookBook"})
    })

    app.use(express.json(), receitas)
}

export default router