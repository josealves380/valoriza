import express, { request, response } from "express";

// @types/express
const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir (Criar) uma informação
 * PUT => Alterar uma informação
 * DELETE =>
 */
//metodo para rota
app.get("/test", (request, response) => {
    return response.send("Olá nlw");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW metodo post");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));