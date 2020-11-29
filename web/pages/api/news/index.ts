import { NextApiRequest, NextApiResponse } from "next";
import { getNewsCovers } from "../../../backend/models/news";
import { makeOption } from "../../../backend/utils/makePrismaObtion";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = _req;

  try {
    switch (method) {
      case "GET": {
        const optObj = makeOption(_req.query);
        const result = await getNewsCovers(optObj);
        res.json({ News: result });
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
