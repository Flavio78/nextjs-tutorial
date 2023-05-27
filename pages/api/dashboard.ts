import { ApiResponseData } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseData>
) {
  res.status(200).json({ name: 'Dashboard API Route' });
}
