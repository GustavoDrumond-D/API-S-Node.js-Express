import http from "http";

const porta = 3000

const rotas = {
    "/": "API CookBook",
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(rotas[req.url] || "Página não encontrada");
})

server.listen(porta, () => {
    console.log("Servidor rodando na porta 3000");
})