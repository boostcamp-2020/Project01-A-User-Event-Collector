import { Request, Response } from "express";
import {
  getUserLikeAlbums,
  getUserLikeTracks,
  getUserLikeArtists,
  getUserLikePlaylists,
} from "../../models/library";

const userLikedItems = async (req: Request, res: Response): Promise<void> => {
  //   const userId = req.user.id;
  const userId = 1;
  const result = await Promise.all([
    getUserLikeAlbums(userId),
    getUserLikeTracks(userId),
    getUserLikeArtists(userId),
    getUserLikePlaylists(userId),
  ]);

  res.status(200).json({
    LikedAlbums: result[0],
    LikedTracks: result[1],
    LikedArtists: result[2],
    LikedPlaylists: result[3],
  });
};

export default userLikedItems;
