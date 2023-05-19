import Link from 'next/link';

const ProductList = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
      <Link href="/product/3">Product 3</Link>
    </div>
  );
};

export default ProductList;
