import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Product {productId} Detail Page</h1>;
};

export default ProductDetail;
