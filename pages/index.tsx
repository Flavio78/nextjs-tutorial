import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const orderHandler = () => {
    router.push('/product');
  };
  return (
    <Link href="/users" prefetch={true}>
      Users
    </Link>
  );
};

export default Home;
