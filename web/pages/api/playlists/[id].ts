import { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylistPageData } from '../../../test';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id: stringId },
    method: method,
  } = _req;

  const id : number = +stringId;

  switch(method) {
    case 'GET':
      try {
        const result = await getPlaylistPageData(id);
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
      break;
    default:
      break;
  }


}

export default handler;
