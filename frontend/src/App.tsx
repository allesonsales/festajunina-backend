import "./App.css";
import Banner from "./components/banner/banner";
import Detalhes from "./components/detalhes/detalhes";
import Formulario from "./components/formulário/formulario";
import Presenca from "./components/presenca/presenca";

function App() {
  return (
    <>
      <div className="container">
        <div id="banner">
          <Banner />
        </div>
        <div id="detalhes">
          <Detalhes />
        </div>
        <div id="formulario">
          <Formulario />
        </div>
        <div id="presenca">
          <Presenca />
        </div>
      </div>
    </>
  );
}

export default App;
