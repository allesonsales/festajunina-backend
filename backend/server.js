const express = require("express");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

function lerConvidados() {
  const convidados = fs.readFileSync("./backend/convidados.json", "utf8");
  return JSON.parse(convidados);
}

function salvarConvidados(convidado) {
  fs.writeFileSync("./backend/convidados.json", JSON.stringify(convidado));
}

app.get("/convidados", (req, res) => {
  const convidados = lerConvidados();
  res.json(convidados);
});

app.post("/convidados", (req, res) => {
  const nome = req.body.nome;
  const prato = req.body.prato;

  if (!nome || !prato) {
    return res
      .status(400)
      .json({ erro: "Preencha o nome e escolha o seu prato!" });
  }

  const convidados = lerConvidados();

  convidados.push({ nome, prato });
  salvarConvidados(convidados);
  return res.status(201).json({
    mensagem:
      "Bota sua  mió roupa de festa junina que ocê já tá confirmado! :)",
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Servidor rodando na porta: ${port} `);
});
