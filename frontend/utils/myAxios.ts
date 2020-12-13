import axios, { AxiosRequestConfig } from "axios";

const serverURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SERVER_DOMAIN_DEVELOP
    : process.env.NEXT_PUBLIC_SERVER_DOMAIN_PRODUCTION;

const URL = `${serverURL}/api`;

const headerConfig: AxiosRequestConfig = {
  withCredentials: true,
};

interface AxiosInterface {
  get: (path: string) => Promise<Object>;
  post: (path: string, data: any) => Promise<Object>;
  put: (path: string, data: any) => Promise<Object>;
  delete: (path: string) => Promise<Object>;
}

const myAxios: AxiosInterface = {
  get(path) {
    return axios.get(URL + path, headerConfig);
  },

  post(path, data) {
    return axios.post(URL + path, data, headerConfig);
  },

  put(path, data) {
    return axios.put(URL + path, data, headerConfig);
  },

  delete(path) {
    return axios.delete(URL + path, headerConfig);
  },
};

export default myAxios;
