import { createContext } from "react";
import { getCookie, setCookie } from "../../helpers/storageCookie";

const StoreContext = createContext({
  token: null,
  setToken: setCookie,
  getToken: getCookie,
});

export default StoreContext;
