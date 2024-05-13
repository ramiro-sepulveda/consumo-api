/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form } from "react-bootstrap";

function Buscador({ arrayPokemones, setFiltro }) {
  const [tipoFiltro, setTipoFiltro] = useState("name");

  const handleTipoFiltroChange = (event) => {
    setTipoFiltro(event.target.value);
  };

  const handleSearch = (e) => {
    if (tipoFiltro == "name") {
      setFiltro(
        arrayPokemones.filter((el) =>
          el.name.toString().toLowerCase().includes(e.toLowerCase())
        )
      );
    } else if (tipoFiltro == "id") {
      setFiltro(
        arrayPokemones.filter((el) => el.id.toString().toLowerCase() == e)
      );
    } else if (tipoFiltro == "types") {
      const searchTerm = e.toLowerCase();
      setFiltro(
        arrayPokemones.filter((el) =>
          el.types.some((subel) =>
            subel.type.name.toLowerCase().includes(searchTerm)
          )
        )
      );
    }
  };

  return (
    <div>
      <Form className=" d-flex ">
        <Form.Select
          className="w-25 "
          aria-label="Default select example"
          value={tipoFiltro}
          onChange={handleTipoFiltroChange}
        >
          <option value="name">Nombre</option>
          <option value="id">ID</option>
          <option value="types">Tipos</option>
        </Form.Select>

        <Form.Control
          type="text"
          placeholder="Buscar"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </Form>
    </div>
  );
}

export default Buscador;
