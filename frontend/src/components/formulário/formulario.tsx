import { useState } from "react";
import "./style.css";

function Formulario() {
  const [pratoSelecionado, setPratoSelecionado] = useState("");
  const [nome, setNome] = useState("");
  const [pratoNovo, setPratoNovo] = useState(false);
  const [confirmar, setConfirmar] = useState(false);

  function novoPrato(): void {
    setPratoNovo(true);
    setPratoSelecionado("");
  }

  function confirmaEvento() {
    setConfirmar(true);
  }

  function resetarEvento() {
    setConfirmar(false);
    setPratoSelecionado("");
    setNome("");
  }

  const pratos: string[] = [
    "Pamonha",
    "Canjica",
    "Curau",
    "Bolo de milho",
    "Bolo de cenoura com chocolate",
    "Milho cozido",
    "Pé-de-moleque",
    "Paçoca",
    "Arroz doce",
    "Cuscuz",
    "Bolo de fubá",
    "Cocada",
    "Pipoca",
    "Doce de abóbora",
    "Amendoim torrado",
    "Torta de frango",
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nome == "" || pratoSelecionado == "") {
      alert("Bota seu nome e escoia seu prato fazfavô!");
      return;
    }

    const dados = { nome, prato: pratoSelecionado };

    fetch("http://localhost:3000/convidados", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.erro);
          });
          return res.json();
        }
      })
      .then((data) => {
        confirmaEvento();
        setNome("");
        setPratoSelecionado("");
      })
      .catch((err) => {
        alert(`Erro: ${err}`);
      });
  }

  return (
    <section>
      <div className="presenca-container">
        <h2>Bó que vai se bão dimai daconta!</h2>
        <form action="/convidados" method="post" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="nome">Seu nome, sô:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="prato">Qual quitute ocê vai trazê?</label>
            <select
              name="prato"
              id="prato"
              required
              value={pratoSelecionado}
              onChange={(e) => setPratoSelecionado(e.target.value)}
            >
              <option value="">Escolhe um trem gostoso</option>
              {pratos.sort().map((prato) => (
                <option value={prato} onClick={!novoPrato}>
                  {prato}
                </option>
              ))}
            </select>
          </div>
          <div className="form-item">
            <button onClick={novoPrato}>Quero um prato diferente uai</button>
            {pratoNovo && (
              <input
                type="text"
                value={pratoSelecionado}
                placeholder="Diz ai mofi qual prato cê vai leva!"
                onChange={(e) => setPratoSelecionado(e.target.value)}
              />
            )}
          </div>
          <div className="form-item">
            <button type="submit">Confirmá Presença</button>
          </div>
        </form>
        {confirmar && (
          <div className="modal-confirmar">
            <div className="background">
              <div className="modal">
                <span>
                  Ô trem bão! Ocê confirmô presença, agora só caprichá no look!
                  <br />
                  Ah e não esquece do pix pro bingo:{" "}
                  <strong>11 96618-6601</strong>
                </span>
                <span id="fechar" onClick={resetarEvento}>
                  Fechar
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Formulario;
