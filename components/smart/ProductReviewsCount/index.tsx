import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import s from './styles.module.scss';

interface ProductReviewsCountProps extends HTMLAttributes<HTMLDivElement> {
  reviewsCount: number;
}

const ProductReviewsCount = ({ reviewsCount, ...props }: ProductReviewsCountProps) => {
  const reviewText = () => {
    if (reviewsCount > 1 && reviewsCount < 5) {
      return ' отзыва';
    }
    if (reviewsCount === 0 || reviewsCount >= 5) {
      return ' отзывов';
    }
    return ' отзыв';
  };
  return (
    <div className={clsx(s['product-reviews-count'], props.className)} {...props}>
      {reviewsCount + reviewText()}
    </div>
  );
};

export default ProductReviewsCount;
