import { Request, Response } from "express";
import {
  getUserLikeArtists,
  postUserLikeArtists,
  deleteUserLikeArtists,
} from "../../models/library";
import decodeJWT from "../../utils/decodeJWT";

const getLibArtists = async (req: Request, res: Response): Promise<void> => {
  const {
    headers: { authorization },
  } = req;

  if (!authorization) res.status(401).send({ message: "Unauthorized" });

  const token = authorization?.split(" ")[1];
  const { id: userId } = decodeJWT(token || " ");

  try {
    const result = await getUserLikeArtists(userId);
    res.status(200).json({ Artists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibArtists = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: artistId } = req.params;
  try {
    const msg = await postUserLikeArtists(userId, +artistId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const deleteLibArtists = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: artistId } = req.params;
  try {
    const msg = await deleteUserLikeArtists(userId, +artistId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
export { getLibArtists, postLibArtists, deleteLibArtists };
