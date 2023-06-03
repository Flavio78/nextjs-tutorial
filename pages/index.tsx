import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const orderHandler = () => {
    router.push('/product');
  };
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
      <Link href="/blog/1">Blog 1</Link>
    </div>
  );
};

export default Home;
