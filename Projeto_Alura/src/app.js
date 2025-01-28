import express from "express";
import dbConnect from "./config/dbConnect.js";
import router from "./routes/index.js";

const conexao = await dbConnect();

conexao.on('error', (erro) => {
    console.log("erro na conexao: ", erro)
});
conexao.once('open', () => {
    console.log("conexao aberta com sucesso")
})

const app = express();
router(app);

export default app;