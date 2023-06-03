import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({ user: 'Vishwas' });
  //res.end('Preview mode enabled');
  res.redirect(req.query.redirect!.toString());
  req.statusCode = 200;
}
