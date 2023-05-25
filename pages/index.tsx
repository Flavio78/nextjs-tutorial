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
    </div>
  );
};

export default Home;
