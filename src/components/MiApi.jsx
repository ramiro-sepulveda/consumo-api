/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function MiApi({ arrayPokemones, pokeFiltro }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    pokeFiltro ? setInfo(pokeFiltro) : consultarApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeFiltro]);

  const consultarApi = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0";
    const response = await fetch(url);
    const pre_data = await response.json();
    const responses = await Promise.all(
      pre_data.results.map((objeto) => fetch(objeto.url))
    );
    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    arrayPokemones(data.sort((a,b) => a.id - b.id));
    setInfo(data.sort((a,b) => a.id - b.id));
  };

  return (
    <div className="py-3 fs-5">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo 1</th>
            <th>Tipo 2</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {info.map((objeto) => (
            <tr key={objeto.id}>
              <td className="align-middle">{objeto.id}</td>
              <td className="align-middle">
                {objeto.name.charAt(0).toUpperCase() + objeto.name.slice(1)}
              </td>
              <td className="align-middle">
                {objeto.types[0].type.name.charAt(0).toUpperCase() +
                  objeto.types[0].type.name.slice(1)}
              </td>
              <td className="align-middle">
                {objeto.types[1]
                  ? objeto.types[1].type.name.charAt(0).toUpperCase() +
                    objeto.types[1].type.name.slice(1)
                  : "-"}
              </td>
              <td>
                <img src={objeto.sprites.front_default} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MiApi;
