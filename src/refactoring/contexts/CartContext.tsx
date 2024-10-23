import { createContext, useContext, type PropsWithChildren } from 'react';
import { useCart } from '../hooks';

// Context
type CartContextType = ReturnType<typeof useCart> | undefined;
const CartContext = createContext<CartContextType>(undefined);

// Provider
export const CartProvider = ({ children }: PropsWithChildren) => {
  const cartContextValue = useCart(); // useCart 훅을 Context로 감싸기

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

// 커스텀 훅
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
