import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import s from './styles.module.scss';

interface ProductPriceProps extends HTMLAttributes<HTMLDivElement> {
  measurementName: string;
  prefix: string;
  price: string;
}

const ProductPrice = ({ measurementName, price, prefix, ...props }: ProductPriceProps) => {
  return (
    <div {...props} className={clsx(s['product-price'], props.className)}>
      <strong>
        {price} {prefix}{' '}
      </strong>
      /{measurementName}.
    </div>
  );
};

export default ProductPrice;
