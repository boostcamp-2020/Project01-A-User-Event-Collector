import { Request, Response } from "express";
import {
  getUserLikeTracks,
  postUserLikeTracks,
  deleteUserLikeTracks,
} from "../../models/library";
import decodeJWT from "../../utils/decodeJWT";

const getLibTracks = async (req: Request, res: Response): Promise<void> => {
  const {
    headers: { authorization },
  } = req;

  if (!authorization) res.status(401).send({ message: "Unauthorized" });

  const token = authorization?.split(" ")[1];
  const { id: userId } = decodeJWT(token || " ");

  try {
    const result = await getUserLikeTracks(userId);
    res.status(200).json({ Tracks: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibTracks = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: trackId } = req.params;
  try {
    const msg = await postUserLikeTracks(userId, +trackId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const deleteLibTracks = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: trackId } = req.params;
  try {
    const msg = await deleteUserLikeTracks(userId, +trackId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
export { getLibTracks, postLibTracks, deleteLibTracks };
