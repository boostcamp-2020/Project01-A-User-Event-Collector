import { Request, Response } from "express";
import crypto from "crypto";
import { getUserInfo } from "../../../models/users";
import encodeJWT from "../../../utils/encodeJWT";

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const loginResult = await getUserInfo({
    username,
    password: crypto.createHash("sha512").update(password).digest("hex"),
  });
  const jwt = encodeJWT(loginResult);
  if (!loginResult)
    return res.status(400).send({
      result:
        "해당하는 아이디, 비밀번호에 해당하는 유저 정보가 존재하지 않습니다.",
    });
  return res.status(200).send({ result: "success", token: jwt });
};

export default login;
