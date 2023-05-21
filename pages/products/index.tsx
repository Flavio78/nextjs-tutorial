import { Products } from '@/types';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
// import { useEffect, useState } from 'react';

interface Props {
  products: Products;
}

const ProductList = (pageProps: Props) => {
  const { products } = pageProps;

  // const [products, setProducts] = useState(pageProps.products);

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const response = await fetch('http://localhost:4000/products');
  //     const products = (await response.json()) as Products;
  //     setProducts(products);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      <Link href="/">back to home</Link>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <Link href={`products/${product.id}`} key={product.id}>
            <h2>
              {product.id} - {product.title} - {product.price}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  try {
    console.log('Regeneration');
    const response = await fetch('http://localhost:4000/products');
    const products = (await response.json()) as Products;
    return products.length > 0
      ? {
          props: {
            products,
          },
          revalidate: 30,
        }
      : { notFound: true };
  } catch (error: any) {
    console.error('error', error as Error);
    return { notFound: true };
  }
};

export default ProductList;
