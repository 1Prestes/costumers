import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../../components/store/context";
import { apiGet } from "../../helpers/axios-http-client";

import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  padding: 0 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  td,
  th {
    padding: 0.8em;
  }
  td {
    border-right: 1px solid #f8f8f8;
    font-size: 0.8em;
  }

  thead {
    font-size: 1em;
    th {
      color: #fff;
      background: #4fc3a1;
    }
    th:nth-child(odd) {
      color: #fff;
      background: #324960;
    }
  }

  tr:nth-child(even) {
    background: #f8f8f8;
  }
`;

const Edit = styled.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  width: 70px;
  background: #0dcaf0;
  color: white;
`;
const Delete = styled.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  width: 70px;
  background: #dc3545;
  color: white;
`;

function Clients() {
  const [clients, setClients] = useState([]);
  const { getToken } = useContext(StoreContext);
  const token = getToken("tk");

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
    <Flex>
      <div>
        <Link to="/clients/new">Add new client</Link>
      </div>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Neighborhood</th>
              <th>City</th>
              <th>UF</th>
              <th>Telephone</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((client) => (
                <tr key={client._id}>
                  <td>{client.name}</td>
                  <td>{client.address}</td>
                  <td>{client.neighborhood}</td>
                  <td>{client.city}</td>
                  <td>{client.uf}</td>
                  <td>{client.telephone}</td>
                  <td>{client.email}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/clients/edit",
                        search: client._id,
                        state: { client },
                      }}
                    >
                      <Edit>Edit</Edit>
                    </Link>{" "}
                    <Link to="/clients">
                      <Delete>Delete</Delete>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default Clients;
