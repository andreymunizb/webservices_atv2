# Web Services - Aula 02: CRUD com Express

Repositório criado para a atividade da disciplina de Web Services do IFMS, implementando uma API REST completa com operações de CRUD (Create, Read, Update, Delete) utilizando Node.js, Express e TypeScript.

---

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- tsx

---

## Endpoints da API

A API possui os seguintes endpoints configurados:

- **GET /produtos** - Lista todos os produtos cadastrados.
- **GET /produtos/:id** - Consulta um produto específico através do seu ID.
- **POST /produtos** - Cadastra um novo produto na coleção.
- **PUT /produtos/:id** - Atualiza os dados de um produto existente.
- **DELETE /produtos/:id** - Remove um produto da coleção.

---

## Como Executar o Projeto

1. Clone este repositório para a sua máquina:
   ```bash
   git clone https://github.com/andreymunizb/webservices_atv2

   > npm install
   > npm run dev

2. Testes da API
    Para testar os endpoints de forma prática, pode utilizar um cliente HTTP como o Thunder Client diretamente no Visual Studio Code, efetuando requisições para as rotas descritas acima.