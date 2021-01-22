import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import StoreContext from "../../../../components/store/context";
import { apiPost } from "../../../../helpers/axios-http-client";
import { getFormData } from "../../../../helpers/form";

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
    <div>
      <h2>Register new client</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Aame</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" placeholder="Address" />
        </div>
        <div>
          <label>Neighborhood</label>
          <input type="text" name="neighborhood" placeholder="Neighborhood" />
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" placeholder="City" />
        </div>
        <div>
          <label>UF</label>
          <input type="text" name="uf" placeholder="UF" />
        </div>
        <div>
          <label>Telephone</label>
          <input type="text" name="telephone" placeholder="Telephone" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="text" name="email" placeholder="E-mail" />
        </div>
        <button aria-label="register new client">Register</button>
      </form>
    </div>
  );
}

export default CreateClient;
