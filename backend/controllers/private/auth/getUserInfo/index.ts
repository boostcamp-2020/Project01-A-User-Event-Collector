import { Request, Response } from "express";
import { getUserInfoWithID } from "../../../../models/users";

const getUserInfo = async (req: Request, res: Response): Promise<Response> => {
  try {
    console.log(req.headers);
    if (req.user) {
      const {
        user: { id },
      } = req;

      const user = await getUserInfoWithID(id);

      return res.status(200).send({ user });
    }
    return res.status(401).send({ message: "Unauthroized" });
  } catch (err) {
    return res.status(401).send({ message: "Unauthroized" });
  }
};

export default getUserInfo;
