import { Request, Response } from "express";
import { Album, Artist, Playlist, Track } from "../../../interfaces";
import {
  getUserLikeAlbums,
  getUserLikeTracks,
  getUserLikeArtists,
  getUserLikePlaylists,
} from "../../../models/library";

// interface test {
//     [Albums[],]
// }

const userLikedItems = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const result = await Promise.all([
      getUserLikeAlbums(req.user.id),
      getUserLikeTracks(req.user.id),
      getUserLikeArtists(req.user.id),
      getUserLikePlaylists(req.user.id),
    ]);

    const LikedAlbums: number[] = result[0].map((elem: Album) => elem.id);
    const LikedTracks: number[] = result[1].map((elem: Track) => elem.id);
    const LikedArtists: number[] = result[2].map((elem: Artist) => elem.id);
    const LikedPlaylists: number[] = result[3].map((elem: Playlist) => elem.id);

    res.status(200).json({
      LikedAlbums,
      LikedTracks,
      LikedArtists,
      LikedPlaylists,
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
