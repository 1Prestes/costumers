import axios from "axios";

export const baseUrl = (path) => {
  return `http://localhost:3030${path}`;
};

export const apiGet = (path) => {
  const url = baseUrl(path);

  return axios.get(url);
};

