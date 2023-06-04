import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Home = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  console.log('session, loading', session, loading);
  return (
    <div>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/products">Products</Link>
      <Link href="/news">News</Link>
      <Link href="/dashboard-swr">Dashboard</Link>
      <Link href="/events">Events</Link>
      <Link href="/comments">Comments</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/css-in-tsx">Css in Tsx</Link>
      <Link href="/blog">Blogs</Link>
      <Link href="/pets">Pets</Link>
      <Link href="/news-preview">News Preview</Link>
    </div>
  );
};

export default Home;
