import axios from "axios";

export const baseUrl = (path) => {
  return `http://localhost:3030${path}`;
};

export const apiGet = (path, options) => {
  const url = baseUrl(path);

  return axios.get(url, options);
};

export const apiPost = (path, data, options) => {
  const url = baseUrl(path);

  return axios.post(url, data, options);
};
