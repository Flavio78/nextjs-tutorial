import { Products } from '@/types';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

interface Props {
  products: Products;
}

const ProductList = ({ products }: Props) => {
  return (
    <div>
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
  const response = await fetch('http://localhost:4000/products');
  const products = (await response.json()) as Products;
  return {
    props: {
      products,
    },
    revalidate: 1,
  };
};

export default ProductList;
