import { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
import makeOption from '../../../utils/testQuery'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()
  const {method} = _req;
  
  try {
    switch(method) {
      case 'GET':
        const obtObj = makeOption(_req.query, 'magazineType','string')
        const result = await prisma.magazines.findMany(obtObj)
        res.json(result)
        break;

      case 'POST':
        break
        
      default:
        res.end()
    }
  }catch (err) { res.status(500).json({ statusCode: 500, message: err.message }) }
}

export default handler;
