import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = _req;

  try {
    switch (method) {
      case "GET": {
        const result = await prisma.genres.findMany();
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
