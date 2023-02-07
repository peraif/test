import React from 'react';
import Image from 'next/image';

import s from './styles.module.scss';
import clsx from 'clsx';

interface ProductImageProps {
  src: string;
  showHit: boolean;
  imageWrapperClassName?: string;
}

const ProductImage = ({ src, showHit, imageWrapperClassName }: ProductImageProps) => {
  return (
    <div className={s['product-image']}>
      {showHit && (
        <div className={s['product-image__hit']}>
          <div className={s['product-image__hit-left-item']} />
          <div className={s['product-image__hit-text']}>Хит</div>
          <div className={s['product-image__hit-right-item']} />
        </div>
      )}
      <div className={clsx(s['product-image__main-image'], imageWrapperClassName)}>
        <Image width={220} height={220} src={src} alt="product-image" />
      </div>
    </div>
  );
};

export default ProductImage;
