import myAxios from "./myAxios";

const sendLog = (body: Object): void => {
  myAxios.post("/log/web", body);
};

export default sendLog;
