import { Request, Response } from "express";
import {
  getUserLikeAlbums,
  getUserLikeTracks,
  getUserLikeArtists,
  getUserLikePlaylists,
} from "../../../models/library";

const userLikedItems = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const result = await Promise.all([
      getUserLikeAlbums(req.user.id),
      getUserLikeTracks(req.user.id),
      getUserLikeArtists(req.user.id),
      getUserLikePlaylists(req.user.id),
    ]);

    res.status(200).json({
      LikedAlbums: result[0],
      LikedTracks: result[1],
      LikedArtists: result[2],
      LikedPlaylists: result[3],
    });
  } catch (err) {
    if (err === "Unautorized") {
      res.status(401).send({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

export default userLikedItems;
