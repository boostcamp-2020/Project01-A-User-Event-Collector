import { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
const prisma = new PrismaClient()
  const {
    query: {filter,limit},
    method: method,
  } = _req;
  console.log(filter, limit)
  const result = await prisma.magazines.findMany({ where:{ magazineType : filter}})
  // console.log(limit)
  res.json(result)
//   switch(method) {
//     case 'GET':
//       try {
//         const result = await getPlaylistPageData(id);
//         res.status(200).json({"Playlists":result});
//       } catch (err) {
//         res.status(500).json({ statusCode: 500, message: err.message });
//       }
//       break;
//     default:
//       break;
//   }
}
export default handler;