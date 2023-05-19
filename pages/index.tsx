import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const orderHandler = () => {
    router.push('/product');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <button onClick={orderHandler}>Place Order</button>
    </div>
  );
};

export default Home;
