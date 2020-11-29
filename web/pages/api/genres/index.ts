import { NextApiRequest, NextApiResponse } from "next";
import { getGenreCovers } from "../../../backend/models/genres";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = _req;

  try {
    switch (method) {
      case "GET": {
        const result = await getGenreCovers();
        res.json({ Genres: result });
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
