import { Request, Response } from "express";
import {
  getUserLikeAlbums,
  postUserLikeAlbums,
  deleteUserLikeAlbums,
} from "../../../models/library";
import decodeJWT from "../../../utils/decodeJWT";

const getLibAlbums = async (req: Request, res: Response): Promise<void> => {
  const {
    headers: { authorization },
  } = req;

  if (!authorization) res.status(401).send({ message: "Unauthorized" });

  const token = authorization?.split(" ")[1];
  const { id: userId } = decodeJWT(token || " ");

  try {
    const result = await getUserLikeAlbums(userId);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibAlbums = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: albumId } = req.params;
  try {
    const msg = await postUserLikeAlbums(userId, +albumId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const deleteLibAlbums = async (req: Request, res: Response): Promise<void> => {
  const userId = 1;
  const { id: albumId } = req.params;
  try {
    const msg = await deleteUserLikeAlbums(userId, +albumId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export { getLibAlbums, postLibAlbums, deleteLibAlbums };
