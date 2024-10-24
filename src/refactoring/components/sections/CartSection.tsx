import CartItemCard from '../CartItemCard';
import { SectionLayout } from '../layouts';
import CartTotalSummary from '../CartTotalSummary';
import CartCouponSelector from '../CartCouponSelector';
import { useCartContext } from '../../contexts';

const CartSection = () => {
  const { cart } = useCartContext();

  return (
    <SectionLayout title="장바구니 내역">
      <div className="space-y-2">
        {cart.map((item) => (
          <CartItemCard key={item.product.id} item={item} />
        ))}
      </div>
      <CartCouponSelector />
      <CartTotalSummary />
    </SectionLayout>
  );
};

export default CartSection;
