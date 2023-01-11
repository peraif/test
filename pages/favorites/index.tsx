import React, {useContext, useMemo} from 'react';
import BasicHead from "@components/ordinary/Head";
import DefaultLayout from "@layouts/Default";
import Container from "@components/simple/Container";
import Product from "@components/ordinary/Product";
import {AppContext} from "@core/context";
import ProductsWrapper from "@components/simple/ProductsWrapper";
import PageTitle from "@components/simple/PageTitle";
import {UsePaginate} from "@core/hooks/use-paginate";
import Pagination from "@components/smart/Pagination";
import {PAGINATION_GAP} from "@core/constants/pagination";

function Favorites() {
    const {products} = useContext(AppContext);
    const favorites = useMemo(() => products?.filter((product) => product.like), [products]);
    if (!favorites) return null;
    const {
        totalPages,
        handleClickPaginate,
        startId,
        endId,
        activePage,
        goToStart,
        goToEnd,
        showEndButton,
        showStartButton
    } = UsePaginate({
        gap: PAGINATION_GAP,
        maxLength: favorites.length
    })
    const favoriteItems = useMemo(() => favorites?.slice(startId, endId), [startId, endId, products]);


    return (
        <>
            <BasicHead title={'Favorites page'}/>
            <DefaultLayout>
                <Container>
                    <PageTitle>Favorites</PageTitle>
                    <ProductsWrapper>
                        {!favoriteItems.length ? "Нет избранных товаров" : favoriteItems.map((item) =>
                            <Product
                                key={item.id}
                                item={products?.find((x) => x.id === item.id)}
                            />)}
                    </ProductsWrapper>
                    {favorites.length > PAGINATION_GAP && (<Pagination
                        showStartButton={showStartButton}
                        showEndButton={showEndButton}
                        goToStart={goToStart}
                        goToEnd={goToEnd}
                        activePage={activePage}
                        handleClickPaginate={handleClickPaginate}
                        totalPages={totalPages}
                    />)}
                </Container>
            </DefaultLayout>
        </>
    );
}

export default Favorites;