import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { AppContext } from '@core/context';
import { UpdateProductKeys } from '@core/types/product';
import { notifyError, notifySuccess } from '@core/notifications';

import s from './styles.module.scss';

interface LikeButtonProps {
  like: boolean;
  productId: string;
}

const LikeButton = ({ like, productId }: LikeButtonProps) => {
  const [active, setActive] = useState(like);
  const { updateProduct } = useContext(AppContext);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if (!updateProduct) return;
    updateProduct(productId, UpdateProductKeys.like, !like);
    if (like) {
      notifyError('Товар удален из списка избранных!');
    } else {
      notifySuccess('Товар был успешно добавлен в список избранных!');
    }
  };

  useEffect(() => {
    setActive(like);
    if (ref.current) {
      ref.current.onmouseenter = () => {
        setActive(true);
      };
      ref.current.onmouseleave = () => {
        setActive(like);
      };
    }
  }, [like]);

  return (
    <div
      ref={ref}
      className={clsx(s['like-button'], active && s['like-button__active'])}
      onClick={handleClick}
    >
      <Image
        src={active ? '/icons/like.svg' : '/icons/like-gray.svg'}
        alt="like"
        width={16}
        height={14}
      />
    </div>
  );
};

export default LikeButton;
