import { NextApiRequest, NextApiResponse } from "next";
import { getUserInfo } from "../../../backend/models/users";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    body: { username, password },
    method,
  } = _req;
  switch (method) {
    case "POST": {
      const user = await getUserInfo({ username, password });
      res.status(200).send(user);
      break;
    }
    default:
      res.end();
  }
};

export default handler;
