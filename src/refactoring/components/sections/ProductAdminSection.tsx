import { useState } from 'react';
import { SectionLayout } from '../layouts';
import NewProductForm from '../NewProductForm';
import AdminProductCard from '../AdminProductCard';
import { useProductsContext } from '../../contexts';

const ProductAdminSection = () => {
  const { products } = useProductsContext();
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  return (
    <SectionLayout title="상품 관리">
      <button
        onClick={() => setShowNewProductForm(!showNewProductForm)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {showNewProductForm ? '취소' : '새 상품 추가'}
      </button>
      {showNewProductForm && (
        <NewProductForm onAddNewProduct={() => setShowNewProductForm(false)} />
      )}
      <div className="space-y-2">
        {products.map((product, index) => (
          <AdminProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProductAdminSection;
