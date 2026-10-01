import express from "express";

const app = express();

app.use(express.json());

let produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 }
];

app.get("/produtos", (request, response) => {
    return response.json(produtos);
});

app.get("/produtos/:id", (request, response) => {
    const id = Number(request.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return response.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    return response.json(produto);
});

app.post("/produtos", (request, response) => {
    const { nome, preco } = request.body;

    const ultimoProduto = produtos[produtos.length - 1];
    const novoId = ultimoProduto ? ultimoProduto.id + 1 : 1;

    const novoProduto = {
        id: novoId,
        nome,
        preco
    };

    produtos.push(novoProduto);

    return response.status(201).json(novoProduto);
});

app.put("/produtos/:id", (request, response) => {
    const id = Number(request.params.id);
    
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return response.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    const { nome, preco } = request.body;

    produto.nome = nome;
    produto.preco = preco;

    return response.json(produto);
});

app.delete("/produtos/:id", (request, response) => {
    const id = Number(request.params.id);
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return response.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    produtos.splice(indice, 1);

    return response.status(204).send();
});

app.listen(3000, () => {
    console.log("Servidor a executar em http://localhost:3000");
});