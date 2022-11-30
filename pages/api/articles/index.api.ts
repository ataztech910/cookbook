import type { NextApiRequest, NextApiResponse } from 'next'

import { getMock } from "../../mocks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
 res.status(200).json(getMock.new_articles);
}
