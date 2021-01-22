import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import StoreContext from "../../components/store/context";
import { apiPost } from "../../helpers/axios-http-client";
import { getFormData } from "../../helpers/form";
import FormGroup from "../../components/formGroup";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`;

const Form = styled.form`
  background: #f1f1f1;
  padding: 40px;
  border-radius: 3px;
`;

const ButtonLogin = styled.button`
  padding: 15px;
  border-radius: 3px;
  width: 100px;
  background: green;
  color: white;
`;

function SignIn() {
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  const submitHandler = async (e) => {
    const data = getFormData(e);
    const token = await apiPost("/login", data).then((res) => res.data.token);

    if (token) {
      setToken("tk", token);
      return history.push("/clients");
    }
  };

  return (
    <Flex>
      <h2>My Clients 1234</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup label="Login" name="login" placeholder="Your login" />
        <FormGroup
          label="Password"
          type="password"
          name="password"
          placeholder="Your password"
        />
        <ButtonLogin aria-label="Login">Login</ButtonLogin>
      </Form>
    </Flex>
  );
}

export default SignIn;
