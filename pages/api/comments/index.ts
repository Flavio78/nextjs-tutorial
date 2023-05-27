import { comments } from '@/data/comments';
import { Comment, CommentBody } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(comments);
      break;
    case 'POST':
      const comment = (req.body as CommentBody).text;
      const newComment: Comment = {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        text: comment,
      };
      comments.push(newComment);
      res.status(201).json(newComment);
      break;
    default:
      break;
  }
}
