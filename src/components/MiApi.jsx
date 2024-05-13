import { useState , useEffect } from "react";
import Table from "react-bootstrap/Table";

function MiApi() {
    // 3-info guardará los valores traídos desde la API
    const [info, setInfo] = useState([]);
    // 2-Llamamos a la función consultarApi al momento de montar el componente
    useEffect(() => {
      consultarApi();
    }, []);
    // 1-Función que consulta la API
    const consultarApi = async () => {
      const url = "https://datos.gob.cl/api/3/action/datastore_search?resource_id=a7a89d98-254c-4ab3-af66-2d54766cce68";
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
      // Con setInfo actualizamos el estado
    };
    return (
        <div className="pb-5">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {info.map((objeto) => (
              <tr key={objeto._id}>
                <td>{objeto._id}</td>
                <td>{objeto.REGIONGEOGRAFICA}</td>
                <td>{objeto.NOM_GASTO}</td>
                <td>{objeto.SUBTIPOGASTO2}</td>
                <td>{objeto.FECHALICITACION.toDateString()}</td>
                <td>{objeto.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  

export default MiApi