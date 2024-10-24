import { PageLayout } from '../components/layouts';
import { ProductListSection, CartSection } from '../components/sections';

export const CartPage = () => {
  return (
    <PageLayout title="장바구니">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductListSection />
        <CartSection />
      </div>
    </PageLayout>
  );
};
