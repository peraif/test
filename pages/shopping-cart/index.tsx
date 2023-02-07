import BasicHead from '@components/ordinary/Head';
import DefaultLayout from '@layouts/Default';
import Container from '@components/simple/Container';
import React, { useContext, useMemo } from 'react';
import { AppContext } from '@core/context';
import PageTitle from '@components/simple/PageTitle';
import Pagination from '@components/smart/Pagination';
import { UsePaginate } from '@core/hooks/use-paginate';
import EmptyCart from '@components/ordinary/EmptyCart';
import CartProducts from '@components/ordinary/CartProducts';
import CartHeader from '@components/ordinary/CartHeader';
import { PAGINATION_GAP } from '@core/constants/pagination';

const ShoppingCartPage = () => {
  const { cartItems } = useContext(AppContext);
  if (!cartItems) return null;
  const {
    totalPages,
    handleClickPaginate,
    startId,
    endId,
    activePage,
    goToStart,
    goToEnd,
    showEndButton,
    showStartButton,
  } = UsePaginate({
    gap: PAGINATION_GAP,
    maxLength: cartItems.length,
  });
  const cartProductItems = useMemo(
    () => cartItems.slice(startId, endId),
    [startId, endId, cartItems]
  );

  return (
    <>
      <BasicHead title={'Shopping Cart page'} />
      <DefaultLayout>
        <Container>
          <PageTitle>Shopping Cart</PageTitle>
          <CartHeader view={cartItems.length > 0} />
          <EmptyCart view={cartItems.length === 0} />
          <CartProducts view={cartItems.length > 0} items={cartProductItems} />
          {cartItems.length > PAGINATION_GAP && (
            <Pagination
              showStartButton={showStartButton}
              showEndButton={showEndButton}
              goToStart={goToStart}
              goToEnd={goToEnd}
              activePage={activePage}
              handleClickPaginate={handleClickPaginate}
              totalPages={totalPages}
            />
          )}
        </Container>
      </DefaultLayout>
    </>
  );
};

export default ShoppingCartPage;
