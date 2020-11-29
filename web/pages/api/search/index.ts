import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";
import { makeSearchOption } from "../../../backend/utils/makePrismaObtion";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = _req;

  try {
    switch (method) {
      case "GET": {
        const result: any = {};

        const albumFilter = makeSearchOption(_req.query, "albumName");
        result.Albums = await prisma.albums.findMany(albumFilter);

        const trackFilter = makeSearchOption(_req.query, "trackName");
        result.Tracks = await prisma.tracks.findMany(trackFilter);

        const artistFilter = makeSearchOption(_req.query, "artistName");
        result.Artists = await prisma.artists.findMany(artistFilter);

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
