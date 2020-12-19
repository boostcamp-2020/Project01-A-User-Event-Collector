import { Request, Response } from "express";
import crypto from "crypto";
import { postUserInfo } from "../../../models/users";

const signup = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password1, password2 } = req.body;
    if (password1 !== password2) {
      return res
        .status(400)
        .send({ message: "비밀번호와 비밀번호 확인이 동일하지 않습니다." });
    }
    await postUserInfo({
      username,
      password: crypto.createHash("sha512").update(password1).digest("hex"),
    });

    return res.status(200).send({ message: "success" });
  } catch (err) {
    return res.send(400).send({ err });
  }
};

export default signup;
