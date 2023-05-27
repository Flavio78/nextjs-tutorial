import { Comments } from '@/types';
import Link from 'next/link';
import { useState } from 'react';

const CommentsList = () => {
  const [comments, setComments] = useState<Comments>([]);
  const [comment, setComment] = useState<string>('');

  const fetchComments = async (): Promise<void> => {
    let comments: Comments = [];
    try {
      const response = await fetch('/api/comments');
      comments = (await response.json()) as Comments;
    } catch (error: any) {
      console.error((error as Error).message);
    }
    setComments(comments);
  };

  const submitComment = async (text: string) => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      fetchComments();
    } catch (error) {}
  };

  return (
    <div>
      <Link href="/">Back to home</Link>
      <h2>Comments List</h2>
      <input
        type="text"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button onClick={() => submitComment(comment)}>Add comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {!comments.length ? (
        <div>No Comments</div>
      ) : (
        comments.map((comment) => (
          <h1 key={comment.id}>
            {comment.id} | {comment.text}
          </h1>
        ))
      )}
    </div>
  );
};

export default CommentsList;
