import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import StoreContext from "../../components/store/context";
import { apiPost } from "../../helpers/axios-http-client";
import { getFormData } from "../../helpers/form";

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
    <div>
      <h2>My Clients 1234</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Login</label>
          <input type="text" name="login" placeholder="Login" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button aria-label="Login">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
