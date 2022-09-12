// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration } from '../core/configuration'

type Data = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        res.status(200).json({ message: Configuration.CORRECT_REQUEST })
    } else {
        res.status(200).json({ message: Configuration.WRONG_REQUEST })
    }
}
