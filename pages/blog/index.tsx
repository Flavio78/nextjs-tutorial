import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1>Blog Page</h1>
      <Link href="/blog/1">Go to blog 1</Link>
    </div>
  );
};

export default Blog;
