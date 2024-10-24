import SectionLayout from '../layouts/SectionLayout';
import ProductCard from '../ProductCard';
import { useProductsContext } from '../../contexts';

const ProductListSection = () => {
  const { products } = useProductsContext();

  return (
    <SectionLayout title="상품 목록">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SectionLayout>
  );
};

export default ProductListSection;
