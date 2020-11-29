import { NextApiRequest, NextApiResponse } from "next";
import { makeSearchOption } from "../../../backend/utils/makePrismaObtion";
import { getAlbumCovers } from "../../../backend/models/albums";
import { getArtistCovers } from "../../../backend/models/artists";
import { getTrackCovers } from "../../../backend/models/tracks";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = _req;

  try {
    switch (method) {
      case "GET": {
        const result: any = {};

        const albumFilter = makeSearchOption(_req.query, "albumName");
        const trackFilter = makeSearchOption(_req.query, "trackName");
        const artistFilter = makeSearchOption(_req.query, "artistName");

        // TODO : PROMISE ALL
        result.Albums = await getAlbumCovers(albumFilter);
        result.Tracks = await getTrackCovers(trackFilter);
        result.Artists = await getArtistCovers(artistFilter);
        res.json(result);
        break;
      }

      case "POST":
        break;

      default:
        res.end();
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
