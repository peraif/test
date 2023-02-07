import React from 'react';
import Button from '@components/simple/Button';
import Image from 'next/image';

import s from './styles.module.scss';
import { useRouter } from 'next/router';

interface EmptyCartProps {
  view?: boolean;
}

const EmptyCart = ({ view }: EmptyCartProps) => {
  const { push } = useRouter();

  const navigateToHome = () => push('/');
  const navigateToFavorites = () => push('/favorites');

  if (!view) return null;

  return (
    <div className={s['empty-cart']}>
      <div className={s['empty-cart__image']}>
        <Image width={400} height={300} src="/images/empty.webp" alt="empty cart" />
      </div>
      <h2>Корзина пуста</h2>
      <p className={s['empty-cart__text']}>
        Посмотрите предложения на <strong onClick={navigateToHome}>главной странице</strong> или
        перейдите в <strong onClick={navigateToFavorites}>избранное</strong>!.
      </p>
      <div className={s['empty-cart__buttons']}>
        <Button onClick={navigateToHome} variant="outlined">
          На главную
        </Button>
        <Button onClick={navigateToFavorites} variant="contained">
          В избранное
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
