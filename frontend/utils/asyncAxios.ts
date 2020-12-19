/* eslint-disable no-unused-expressions */
import axios from "axios";

const serverURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SERVER_DOMAIN_DEVELOP
    : process.env.NEXT_PUBLIC_SERVER_DOMAIN_PRODUCTION;

const URL = `${serverURL}/api`;

interface AsyncAxios {
  get: (path: string) => Object;
  post: (path: string, data: any, cookie?: string) => Object;
  put: (path: string, data: any, cookie?: string) => Object;
  delete: (path: string, cookie?: string) => Object;
}

const getBearer = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;
  return { Authorization: `Bearer ${token}` };
};

const asyncAxios: AsyncAxios = {
  get: (path: string) => {
    return async () => {
      const bearer = getBearer();

      let result;
      bearer === null
        ? (result = await axios.get(URL + path))
        : (result = await axios.get(URL + path, { headers: bearer }));
      return result;
    };
  },

  post: async (path: string, data: any) => {
    const bearer = getBearer();

    let result;
    bearer === null
      ? (result = await axios.post(URL + path, data))
      : (result = await axios.post(URL + path, data, { headers: bearer }));
    return result;
  },

  put: async (path: string, data: any) => {
    const bearer = getBearer();

    let result;
    bearer === null
      ? (result = await axios.put(URL + path, data))
      : (result = await axios.put(URL + path, data, { headers: bearer }));
    return result;
  },

  delete: async (path: string) => {
    const bearer = getBearer();

    let result;
    bearer === null
      ? (result = await axios.delete(URL + path))
      : (result = await axios.delete(URL + path, { headers: bearer }));
    return result;
  },
};

export default asyncAxios;
