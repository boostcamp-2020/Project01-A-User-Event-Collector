import { NextApiRequest, NextApiResponse } from "next";
import { getMagazinePageData } from "../../../backend/models/test";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query: { id: stringId },
    method,
  } = _req;
  const id: number = +stringId;

  try {
    switch (method) {
      case "GET": {
        const result = await getMagazinePageData(id);
        if (!result) {
          res.status(400).json({ statusCode: 400, message: "Bad Request" });
          return;
        }

        res.status(200).json({ Magzines: result });
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
