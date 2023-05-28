import { NextApiRequest, NextApiResponse } from 'next';

interface Query {
  params: string[];
}

export default function handler(
  req: NextApiRequest & { query: Query },
  res: NextApiResponse
) {
  const { params } = req.query;
  console.log('params', params);
  res.status(200).json(params);
}
