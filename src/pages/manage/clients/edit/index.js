import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import FormGroup from "../../../../components/formGroup";
import StoreContext from "../../../../components/store/context";
import { apiPost } from "../../../../helpers/axios-http-client";
import { getFormData } from "../../../../helpers/form";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  background: #f1f1f1;
  padding: 40px;
  border-radius: 3px;
  width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const Update = styled.button`
  margin-top: 30px;
  width: 70px;
  padding: 15px;
  border: none;
  border-radius: 3px;
  background: #198754;
  color: white;
`;

function EditClient({ location }) {
  const { state } = location;
  const { client } = state;

  const history = useHistory();
  const { getToken } = useContext(StoreContext);
  const token = getToken("tk");

  const options = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "x-access-token",
      "x-access-token": token,
    },
  };
  const submitHandler = async (e) => {
    const data = getFormData(e);

    const response = await apiPost(
      "/client/update",
      { ...data, id: client._id },
      options
    )
      .then((res) => res.data)
      .catch((err) => console.error(err));
    if (response) history.push("/clients");
  };

  return (
    <Flex>
      <h1>Edit Client</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup
          label="Name"
          type="text"
          name="name"
          placeholder={client.name}
        />
        <FormGroup
          label="Address"
          type="text"
          name="address"
          placeholder={client.address}
        />
        <FormGroup
          label="Neighborhood"
          type="text"
          name="neighborhood"
          placeholder={client.neighborhood}
        />
        <FormGroup
          label="City"
          type="text"
          name="city"
          placeholder={client.city}
        />
        <FormGroup label="UF" type="text" name="uf" placeholder={client.uf} />
        <FormGroup
          label="Telephone"
          type="text"
          name="telephone"
          placeholder={client.telephone}
        />
        <FormGroup
          label="Email"
          type="text"
          name="email"
          placeholder={client.email}
        />
        <Update aria-label="Update Client data">Update</Update>
      </Form>
    </Flex>
  );
}

export default EditClient;
