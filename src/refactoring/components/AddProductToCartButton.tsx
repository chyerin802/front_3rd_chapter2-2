import { useCartContext } from '../contexts';
import { getRemainingStock } from '../utils/product';
import { Product } from '../../types';

interface Props {
  product: Product;
}

const AddProductToCartButton = ({ product }: Props) => {
  const { cart, addToCart, updateQuantity } = useCartContext();
  const remainingStock = getRemainingStock(product, cart);

  const handleAddToCart = () => {
    const remainingStock = getRemainingStock(product, cart);
    if (remainingStock <= 0) return;

    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, Math.min(existingItem.quantity + 1, product.stock));
    } else {
      addToCart(product);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`w-full px-3 py-1 rounded ${
        remainingStock > 0
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
      disabled={remainingStock <= 0}
    >
      {remainingStock > 0 ? '장바구니에 추가' : '품절'}
    </button>
  );
};

export default AddProductToCartButton;
