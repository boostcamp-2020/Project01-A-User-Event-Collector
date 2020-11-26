import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";

type optionObject = {
  take?: number;
  where?: {};
};

const makeSearchOption = (_query: any, _target: string): Object => {
  const { limit, filter } = _query;
  const optObj: optionObject = {};

  if (limit) {
    optObj.take = +limit;
  }
  if (filter) {
    optObj.where = {
      [_target]: { contains: filter },
    };
  }
  return optObj;
};

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
