import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import FormGroup from "../../../../components/formGroup";
import StoreContext from "../../../../components/store/context";
import { apiPost } from "../../../../helpers/axios-http-client";
import { getFormData } from "../../../../helpers/form";

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
    <div>
      <h1>Edit Client</h1>
      <form onSubmit={submitHandler}>
        <FormGroup label="Name" type="text" name="name" placeholder={client.name} />
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
        <FormGroup label="City" type="text" name="city" placeholder={client.city} />
        <FormGroup label="UF" type="text" name="uf" placeholder={client.uf} />
        <FormGroup
          label="Telephone"
          type="text"
          name="telephone"
          placeholder={client.telephone}
        />
        <FormGroup label="Email" type="text" name="email" placeholder={client.email} />
        <button aria-label="Update Client data">Update</button>
      </form>
    </div>
  );
}

export default EditClient;
