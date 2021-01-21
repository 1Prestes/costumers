import { createContext } from "react";
import { setCookie } from "../../helpers/storageCookie";

const StoreContext = createContext({
  token: null,
  setToken: setCookie,
});

export default StoreContext;
