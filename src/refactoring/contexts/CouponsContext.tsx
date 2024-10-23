import { createContext, useContext, type PropsWithChildren } from 'react';
import { useCoupons } from '../hooks';
import { Coupon } from '../../types';

// Context
type CouponsContextType = ReturnType<typeof useCoupons> | undefined;
const CouponsContext = createContext<CouponsContextType>(undefined);

// Provider
export const CouponsProvider = ({
  children,
  initialCoupons,
}: PropsWithChildren<{ initialCoupons: Coupon[] }>) => {
  const couponsContextValue = useCoupons(initialCoupons);

  return <CouponsContext.Provider value={couponsContextValue}>{children}</CouponsContext.Provider>;
};

// hook
export const useCouponsContext = () => {
  const context = useContext(CouponsContext);
  if (!context) {
    throw new Error('useCouponsContext must be used within a CouponsProvider');
  }
  return context;
};
