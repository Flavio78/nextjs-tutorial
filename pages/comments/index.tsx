import { Comment, Comments } from '@/types';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import classes from './comments.module.css';

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
    } catch (error: any) {
      console.error((error as Error).message);
    }
  };

  const deleteComment = async (event: MouseEvent, id: number) => {
    event.stopPropagation();
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      fetchComments();
    } catch (error: any) {
      console.error((error as Error).message);
    }
  };

  const updateComment = async (event: MouseEvent, comment: Comment) => {
    event.stopPropagation();
    try {
      const response = await fetch(`/api/comments/${comment.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ ...comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      fetchComments();
    } catch (error: any) {
      console.error((error as Error).message);
    }
    setComment('');
  };

  const selectComment = (text: string) => {
    setComment(text);
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
        comments.map((comment_map) => (
          <div
            key={comment_map.id}
            className={classes.comment}
            onClick={() => selectComment(comment_map.text)}
          >
            <h3>
              {comment_map.id} | {comment_map.text}
            </h3>
            <button onClick={(e) => deleteComment(e, comment_map.id)}>
              Delete
            </button>
            <button
              onClick={(e) =>
                updateComment(e, { id: comment_map.id, text: comment })
              }
            >
              Update
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentsList;
