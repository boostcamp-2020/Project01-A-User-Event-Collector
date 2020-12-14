import { Request, Response } from "express";
import {
  getUserLikeArtists,
  postUserLikeArtists,
  deleteUserLikeArtists,
} from "../../models/library";

const getLibArtists = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const result = await getUserLikeArtists(req.user.id);
    res.status(200).json({ Artists: result });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).json({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
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
