import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse): void {
  res.json({ stage: process.env.STAGE });
}
