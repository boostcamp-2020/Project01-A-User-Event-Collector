import { Request, Response } from "express";
import { Album, Artist, Playlist, Track } from "../../../interfaces";
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

    const likedAlbums: number[] = result[0].map((elem: Album) => elem.id);
    const likedTracks: number[] = result[1].map((elem: Track) => elem.id);
    const likedArtists: number[] = result[2].map((elem: Artist) => elem.id);
    const likedPlaylists: number[] = result[3].map((elem: Playlist) => elem.id);

    res.status(200).json({
      likedAlbums,
      likedTracks,
      likedArtists,
      likedPlaylists,
    });
  } catch (err) {
    if (err === "Unauthorized") {
      res.status(401).send({ message: "Unauthroized" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

export default userLikedItems;
