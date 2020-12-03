import { Request, Response } from "express";
import { makeSearchOption } from "../../utils/makePrismaObtion";
import { getAlbumCovers } from "../../models/albums";
import { getArtistCovers } from "../../models/artists";
import { getTrackCovers } from "../../models/tracks";

interface Controller {
  search(req: Request, res: Response): Promise<void>;
}

const search = async (req: Request, res: Response): Promise<void> => {
  const albumFilter = makeSearchOption(req.query, "albumName");
  const trackFilter = makeSearchOption(req.query, "trackName");
  const artistFilter = makeSearchOption(req.query, "artistName");

  try {
    const result: any = {};

    // TODO : PROMISE ALL
    result.Albums = await getAlbumCovers(albumFilter);
    result.Tracks = await getTrackCovers(trackFilter);
    result.Artists = await getArtistCovers(artistFilter);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const controller: Controller = { search };
export default controller;
