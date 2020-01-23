const express = require("express");

const server = express();

server.use(express.json());

const users = ["Vinicius", "João", "Maria"];

server.use((req, res) => {
  return;
});

server.get("/home", (req, res) => {
  return res.send("Bem vindos!");
});

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/buscar/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.put("/update/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.send(`Atualizado com sucesso! Nova lista -> ${users}.`);
});

server.get("/users/:id", (req, res) => {
  const id = req.params.id;

  return res.json(users[id]);
});

server.listen(3000);
