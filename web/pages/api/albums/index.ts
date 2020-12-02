import { NextApiRequest, NextApiResponse } from "next";
import { getAlbumCovers } from "../../../backend/models/albums";
// import { makeOption } from "../../../backend/utils/makePrismaObtion";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = _req;

  try {
    switch (method) {
      case "GET": {
        // const optObj = makeOption(_req.query);
        const result = await getAlbumCovers({});
        res.status(200).json({ DJStations: result });
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
