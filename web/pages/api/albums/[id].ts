import { NextApiRequest, NextApiResponse } from 'next'
import {getAlbumPageData} from '../../../test'

export default async function handler(_req:NextApiRequest,res:NextApiResponse) {
  const {
    query : { id :stringId },
    method : method
  } = _req
  const id : number = +stringId;
  
  switch(method){
    case 'GET':
      try{
        const result = await getAlbumPageData(id)
        res.status(200).json({'Albums':result})
      }catch(err){
        res.status(500).json({ statusCode: 500, message: err.message });
      }
      break
    case 'POST':
    default :
  }

  res.end()
}