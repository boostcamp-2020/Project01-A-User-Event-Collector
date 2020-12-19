import { Request, Response } from "express";
import {
  getUserLikeAlbums,
  postUserLikeAlbums,
  deleteUserLikeAlbums,
} from "../../models/library";

const getLibAlbums = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const result = await getUserLikeAlbums(req.user.id);
    res.status(200).json({ Albums: result });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).json({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const postLibAlbums = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");
    const { id: albumId } = req.params;
    const userId = req.user.id;

    const msg = await postUserLikeAlbums(userId, +albumId);
    res.status(200).json({ message: msg });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).json({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const deleteLibAlbums = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const { id: albumId } = req.params;
    const userId = req.user.id;

    const msg = await deleteUserLikeAlbums(userId, +albumId);
    res.status(200).json({ message: msg });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).json({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

export { getLibAlbums, postLibAlbums, deleteLibAlbums };
