import { Posts } from '@/types';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

interface Props {
  posts: Posts;
}

const PostList = ({ posts }: Props) => {
  return (
    <div>
      <h1>Post List Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>
              {post.id} - {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = (await response.json()) as Posts;
  return {
    props: { posts: posts },
  };
};

export default PostList;
