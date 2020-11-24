import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_req:NextApiRequest,res:NextApiResponse){
    res.json({stage:process.env.STAGE})
}