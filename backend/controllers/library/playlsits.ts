import { Request, Response } from "express";
import {
  getUserLikePlaylists,
  postUserLikePlaylists,
  deleteUserLikePlaylists,
} from "../../models/library";

const getLibPlaylists = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const result = await getUserLikePlaylists(req.user.id);
    res.status(200).json({ Playlists: result });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).json({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const postLibPlaylists = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");
    const userId = req.user.id;
    const { id: playlistId } = req.params;

    const msg = await postUserLikePlaylists(userId, +playlistId);
    res.status(200).json({ message: msg });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).json({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const deleteLibPlaylists = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");
    const userId = req.user.id;
    const { id: playlistId } = req.params;

    const msg = await deleteUserLikePlaylists(userId, +playlistId);
    res.status(200).json({ message: msg });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).json({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

export { getLibPlaylists, postLibPlaylists, deleteLibPlaylists };
