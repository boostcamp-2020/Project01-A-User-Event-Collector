import { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()
  const {method} = _req
  
  try {
    switch(method) {
      case 'GET':
        const result = await prisma.genres.findMany();
        res.json(result);
        break;

      case 'POST':
        break

      default:
        res.end()
    }
  } catch (err) { res.status(500).json({ statusCode: 500, message: err.message }) }
}

export default handler;
