import type { NextApiRequest, NextApiResponse } from 'next'

import { getMock } from "../../mocks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
 const { pid } = req.query
 res.status(200).json(getMock.new_articles.find(item=>item.id === Number(pid)));
}
