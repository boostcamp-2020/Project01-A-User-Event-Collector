import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { limit },
    method: method,
  } = _req;

  const limitOption = {
    take: limit === undefined ? undefined : +limit,
  };

  try {
    switch (method) {
      case "GET":
        const result = await prisma.dJStations.findMany(limitOption);
        res.status(200).json({ DJStations: result });
        break;

      default:
        res.end();
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
