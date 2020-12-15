import axios from "axios";

const serverURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SERVER_DOMAIN_DEVELOP
    : process.env.NEXT_PUBLIC_SERVER_DOMAIN_PRODUCTION;

const URL = `${serverURL}/api`;

interface AxiosInterface {
  get: (path: string, cookie?: string) => Promise<Object>;
  post: (path: string, data: any, cookie?: string) => Promise<Object>;
  put: (path: string, data: any, cookie?: string) => Promise<Object>;
  delete: (path: string, cookie?: string) => Promise<Object>;
}

const myAxios: AxiosInterface = {
  get(path) {
    const token = localStorage.getItem("token");
    return token
      ? axios.get(URL + path, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : axios.get(URL + path);
  },

  post(path, data) {
    const token = localStorage.getItem("token");
    return token
      ? axios.post(URL + path, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : axios.post(URL + path, data);
  },

  put(path, data, token = undefined) {
    return token
      ? axios.put(URL + path, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : axios.put(URL + path, data);
  },

  delete(path, token = undefined) {
    return token
      ? axios.delete(URL + path, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : axios.delete(URL + path);
  },
};

export default myAxios;
