import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
import StoreContext from "../../components/store/context";
import { apiGet } from "../../helpers/axios-http-client";

function Clients() {
  const [clients, setClients] = useState([]);
  const { getToken } = useContext(StoreContext);
  // const history = useHistory();
  const token = getToken("tk");
  // if (!token) return history.push("/");

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "x-access-token",
        "x-access-token": token,
      },
    };
    (async () => {
      const data = await apiGet("/clients", options).then((res) => res.data);
      setClients(data);
    })();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Neighborhood</th>
            <th>City</th>
            <th>UF</th>
            <th>Telephone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.address}</td>
              <td>{client.neighborhood}</td>
              <td>{client.city}</td>
              <td>{client.uf}</td>
              <td>{client.telephone}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
