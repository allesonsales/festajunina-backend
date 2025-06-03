import "./style.css";

function Detalhes() {
  return (
    <div className="detalhes-container">
      <ul>
        <li>
          <div className="dataelocal">
            <div className="data">
              <span>12</span>
              <small>julho</small>
            </div>
            <div className="horario">- 19h</div>
          </div>
        </li>
        <li>
          <b>Local:</b>
          <span>Alameda Lua, 117 – Morada do Sol, Vargem Grande Paulista</span>
        </li>
        <li>
          <b>Atrações:</b>
          <span>
            Vai tê barraca típica, um bando de comida bão dimais da conta,
            karaokê pra quem gosta de cantá, bingo animado e quadrilha pra todo
            mundo arrastá o pé!
          </span>
        </li>
        <li>
          <b>Contribuição:</b>
          <span>
            Pedimo uma ajudinha de <strong>R$ 10,00</strong> por pessoinha que
            já passou dos 15 ano,{" "}
            <strong>
              pra nóis fazê um bingo bem caprichado. E não se esquece de trazê
              seu prato e uma bebidinha, uai!
            </strong>
            <br />
            Vai que ocê ganha um trem bão!
            <br />
            <strong>PIX: (11) 96618-6601</strong> – pode mandá o comprovante pra
            esse número memo, viu?
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Detalhes;
