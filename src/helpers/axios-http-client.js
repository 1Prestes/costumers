import axios from "axios";

export const baseUrl = (path) => {
  return `http://localhost:3030${path}`;
};

export const apiGet = (path) => {
  const url = baseUrl(path);

  return axios.get(url);
};

export const apiPost = (path, data, options) => {
  const url = baseUrl(path);

  return axios.post(url, data, options);
};
