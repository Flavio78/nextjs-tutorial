import { Post, Posts } from '@/types';
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <h1>
        {post.id} - {post.title}
      </h1>
      <h1>{post.body}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = (await response.json()) as Posts;
  const paths = posts.map((post) => ({
    params: { postId: `${post.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.postId}`
  );
  const post = (await response.json()) as Post;
  return {
    props: { post },
  };
};

export default Post;
