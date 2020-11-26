import { NextApiRequest, NextApiResponse } from 'next'
import {getNewsPageData} from '../../../utils/test'

const handler = async (_req:NextApiRequest,res:NextApiResponse) => {
  const {
    query : { id :stringId },
    method : method
  } = _req
  const id : number = +stringId;
  
  try{
    switch(method){
      case 'GET':
        const result = await getNewsPageData(id)
        if(!result) {
          res.status(400).json({statusCode: 400, message: 'Bad Request'});
          return;
        }
        
        console.log(result)
        res.status(200).json({'News':result})
        break

      case 'POST':

      default :
        res.end()
    }
  }catch(err){ res.status(500).json({ statusCode: 500, message: err.message }) }
}

export default handler;
