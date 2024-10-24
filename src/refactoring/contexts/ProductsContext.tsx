import { createContext, useContext, type PropsWithChildren } from 'react';
import { useProducts } from '../hooks';
import { Product } from '../../types.ts';

// Context
type ProductsContextType = ReturnType<typeof useProducts> | undefined;
const ProductsContext = createContext<ProductsContextType>(undefined);

// Provider
export const ProductsProvider = ({
  initialProducts,
  children,
}: PropsWithChildren<{
  initialProducts: Product[];
}>) => {
  const productsContextValue = useProducts(initialProducts);

  return (
    <ProductsContext.Provider value={productsContextValue}>{children}</ProductsContext.Provider>
  );
};

// hook
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
};
