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
  get: (path: string, cookie?: string) => Promise<Object>;
  post: (path: string, data: any, cookie?: string) => Promise<Object>;
  put: (path: string, data: any, cookie?: string) => Promise<Object>;
  delete: (path: string, cookie?: string) => Promise<Object>;
}

const myAxios: AxiosInterface = {
  get(path, token = undefined) {
    return token
      ? axios.get(URL + path, {
          ...headerConfig,
          headers: {
            Cookie: `token=${token}`,
          },
        })
      : axios.get(URL + path, headerConfig);
  },

  post(path, data, token = undefined) {
    return token
      ? axios.post(URL + path, data, {
          ...headerConfig,
          headers: {
            Cookie: `token=${token}`,
          },
        })
      : axios.post(URL + path, data, headerConfig);
  },

  put(path, data, token = undefined) {
    return token
      ? axios.put(URL + path, data, {
          ...headerConfig,
          headers: {
            Cookie: `token=${token}`,
          },
        })
      : axios.put(URL + path, data, headerConfig);
  },

  delete(path, token = undefined) {
    return token
      ? axios.delete(URL + path, {
          ...headerConfig,
          headers: {
            Cookie: `token=${token}`,
          },
        })
      : axios.delete(URL + path, headerConfig);
  },
};

export default myAxios;
