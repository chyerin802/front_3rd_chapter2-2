import React from 'react';
import { Coupon } from '../../types';

interface Props extends React.OptionHTMLAttributes<number> {
  coupon: Coupon;
}

const CouponOption = ({ value, coupon }: Props) => (
  <option value={value}>
    {coupon.name} -{' '}
    {coupon.discountType === 'amount' ? `${coupon.discountValue}원` : `${coupon.discountValue}%`}
  </option>
);

export default CouponOption;
