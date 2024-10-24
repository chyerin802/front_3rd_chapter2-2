import AddProductToCartButton from './AddProductToCartButton';
import { Product } from '../../types';
import { getRemainingStock, getMaxDiscount } from '../utils/product';
import { useCartContext } from '../contexts';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { cart } = useCartContext();

  const remainingStock = getRemainingStock(product, cart);
  const maxDiscountRate = getMaxDiscount(product);

  return (
    <div data-testid={`product-${product.id}`} className="bg-white p-3 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{product.name}</span>
        <span className="text-gray-600">{product.price.toLocaleString()}원</span>
      </div>
      <div className="text-sm text-gray-500 mb-2">
        <span className={`font-medium ${remainingStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          재고: {remainingStock}개
        </span>
        {product.discounts.length > 0 && (
          <span className="ml-2 font-medium text-blue-600">
            최대 {(maxDiscountRate * 100).toFixed(0)}% 할인
          </span>
        )}
      </div>
      {product.discounts.length > 0 && (
        <ul className="list-disc list-inside text-sm text-gray-500 mb-2">
          {product.discounts.map((discount, index) => (
            <li key={index}>
              {discount.quantity}개 이상: {(discount.rate * 100).toFixed(0)}% 할인
            </li>
          ))}
        </ul>
      )}
      <AddProductToCartButton product={product} />
    </div>
  );
};

export default ProductCard;
