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

const Register = styled.button`
  margin-top: 30px;
  text-align: center;
  padding: 15px;
  border: none;
  border-radius: 3px;
  background: #198754;
  color: white;
`;

function CreateClient() {
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
    const client = await apiPost("/client", data, options)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    if (client) history.push("/clients");
  };

  return (
    <Flex>
      <h2>Register new client</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup label="Label" name="name" placeholder="Client name" />
        <FormGroup
          label="Address"
          name="address"
          placeholder="Client address"
        />
        <FormGroup
          label="Neighborhood"
          name="neighborhood"
          placeholder="Client neighborhood"
        />
        <FormGroup label="City" name="city" placeholder="Client city" />
        <FormGroup label="UF" name="uf" placeholder="Client UF" />
        <FormGroup
          label="Telephone"
          name="telephone"
          placeholder="Client telephone"
        />
        <FormGroup label="E-mail" name="email" placeholder="Client e-mail" />
        <Register aria-label="register new client">Register</Register>
      </Form>
    </Flex>
  );
}

export default CreateClient;
