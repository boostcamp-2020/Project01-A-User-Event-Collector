import { NextApiRequest, NextApiResponse } from "next";
import { getUserInfoData } from "../../../utils/test"

const handler = async(_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { 
        body: { username, password },
        method
    } = _req;

    try {
        switch (method) {
          case "POST": {
            const result = await getUserInfoData({ username, password });
            if (!result) {
              res.status(400).json({ statusCode: 400, message: "Bad Request" });
              return;
            }
            res.status(200).json({ user: result });
            break;
          }
          default:
            res.end();
        }
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
}

export default handler;