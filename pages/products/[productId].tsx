import { Product, Products } from '@/types';
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface ProductProps {
  product: Product;
}

interface Params extends ParsedUrlQuery {
  productId: string;
}

const Product = ({ product }: ProductProps) => {
  const router = useRouter();
  const { productId } = router.query as Params;
  console.log('productId', productId);
  if (router.isFallback) return <div>Loading ...</div>;

  return (
    <div>
      <h2>
        {product.id} - {product.title} - {product.price}
      </h2>
      <p>{product.description}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async (
  context: GetStaticPathsContext
) => {
  const response = await fetch('http://localhost:4000/products');
  const products = (await response.json()) as Products;
  const paths = products.map((product) => ({
    params: { productId: `${product.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductProps, Params> = async ({
  params,
}) => {
  const response = await fetch(
    `http://localhost:4000/products/${params!.productId}`
  );
  const product = (await response.json()) as Product;
  return product
    ? {
        props: { product },
        revalidate: 1,
      }
    : { notFound: true };
};

export default Product;
