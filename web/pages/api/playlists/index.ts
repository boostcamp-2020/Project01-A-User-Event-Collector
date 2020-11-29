import { NextApiRequest, NextApiResponse } from "next";
import { getPlaylistCovers } from "../../../backend/models/playlists";
import { makeOption } from "../../../backend/utils/makePrismaObtion";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = _req;

  try {
    switch (method) {
      case "GET": {
        const optObj = makeOption(_req.query, "author", "number");
        const result = await getPlaylistCovers(optObj);
        res.json({ Playlists: result });
        break;
      }

      case "POST": {
        break;
      }

      default:
        res.end();
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
