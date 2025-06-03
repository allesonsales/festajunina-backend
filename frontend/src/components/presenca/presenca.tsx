import { useEffect, useState } from "react";
import "./style.css";

function Presenca() {
  type Confirmados = {
    nome: string;
    prato: string;
  };

  const [confirmados, setConfirmados] = useState<Confirmados[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/convidados")
      .then((res) => res.json())
      .then((data) => {
        setConfirmados(data);
        console.log(confirmados);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [confirmados]);

  if (confirmados.length <= 0) {
    return (
      <div className="confirmados">
        <h2>Ê sô, olha quem confirmou presença:</h2>
        <span>Num tem ninguém confirmado ainda, uai...</span>
      </div>
    );
  }

  return (
    <div className="confirmados">
      <h2>Ê sô, olha quem confirmou presença:</h2>
      <ul>
        {confirmados.map((confirmado, index) => {
          return (
            <li key={index}>
              <span>{confirmado.nome}</span> - <small>{confirmado.prato}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Presenca;
