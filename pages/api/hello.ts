// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiResponseData } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseData>
) {
  res.status(200).json({ name: 'John Doe' });
}
