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
    </div>
  );
};

export default Home;
