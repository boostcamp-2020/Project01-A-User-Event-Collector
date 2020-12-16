import { Request, Response } from "express";
import { getUserInfoWithID } from "../../../models/users";

const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const userProfile = await getUserInfoWithID(req.user.id);
    res.status(200).send({ userProfile });
  } catch (err) {
    res.status(401).send({ message: "Unauthroized" });
  }
};

export default getUserProfile;
