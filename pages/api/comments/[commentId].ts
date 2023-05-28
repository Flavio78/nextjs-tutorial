import { comments } from '@/data/comments';
import { Comment } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

interface Query {
  commentId: string;
}

export default function handler(
  req: NextApiRequest & { query: Query },
  res: NextApiResponse
) {
  let comment: Comment | undefined;
  const { commentId } = req.query;
  const id = parseInt(commentId, 10);
  const index = comments.findIndex((comment) => comment.id === id);
  switch (req.method) {
    case 'DELETE':
      comment = comments.find((comment) => comment.id === id);
      if (index !== -1) {
        comments.splice(index, 1);
      }
      break;

    case 'PATCH':
      comment = req.body as Comment;
      if (index !== -1) {
        comments[index].text = comment.text;
      }
      break;
    default:
      break;
  }
  res.status(200).json(comment);
}
