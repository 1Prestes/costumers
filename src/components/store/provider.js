import React from "react";
import { getCookie, setCookie } from "../../helpers/storageCookie";

import Context from "./context";

const StoreProvider = ({ children }) => {
  const token = getCookie("tk");
  setCookie("tk", token);
  return (
    <Context.Provider value={{ token, setToken: setCookie }}>
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
