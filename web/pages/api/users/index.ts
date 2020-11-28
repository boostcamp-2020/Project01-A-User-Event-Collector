import { NextApiRequest, NextApiResponse } from "next";
import { getUserInfoData } from "../../../utils/test"

const handler = async(_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const {
        body: { username, password },
        method
    } = _req
    switch (method){
        case "POST":
            const user = await getUserInfoData(username, password);
            res.status(200).send(user);
            break
        default:
            res.end();
    }
}

export default handler;