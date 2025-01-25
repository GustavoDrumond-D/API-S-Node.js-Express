import "dotenv/config";
import app from "./src/app.js";

const porta = 3000

app.listen(porta, () => {
    console.log("Servidor rodando na porta 3000");
})

// mongodb+srv://admin:<db_password>@cluster0.3ciir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0