import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [data, setData] = useState([]);
  const [pokeFiltro, setFiltro] = useState();

  return (
    <>
      <header className="bg-custom p-3 mb-3 w-100 ">
        <h1 className="text-white">Lista de Pokemones</h1>
      </header>
      <div className="bg-light p-3 w-50 m-auto ">
        <Buscador arrayPokemones={data} setFiltro={setFiltro} />
        <MiApi arrayPokemones={setData} pokeFiltro={pokeFiltro} />
      </div>
    </>
  );
}

export default App;
