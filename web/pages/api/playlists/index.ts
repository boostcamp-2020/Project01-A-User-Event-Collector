import { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
import makeOption from '../../../utils/testQuery'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()
  const {method} = _req
  
  try {
    switch(method) {
      case 'GET':
        //JOIN해서 판단할 경우, 유저 아이디 그 자체로 필터링 하는 경우
        // const obtObj = makeOption(_req.query,{Users : { username : _req.query.filter}}, 'object')  
        const obtObj = makeOption(_req.query,'author','number')
        const result = await prisma.playlists.findMany(obtObj)
        res.json(result)
        break;

      case 'POST':
        break

      default:
        res.end()
    }
  } catch (err) { res.status(500).json({ statusCode: 500, message: err.message }) }
}

export default handler;
