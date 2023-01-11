import React, {useContext, useMemo} from 'react';
import Product from "@components/ordinary/Product";
import {AppContext} from "@core/context";
import ProductsWrapper from "@components/simple/ProductsWrapper";
import Pagination from "@components/smart/Pagination";
import {UsePaginate} from "@core/hooks/use-paginate";

const Products = () => {
    const {products} = useContext(AppContext);
    if (!products) return null;
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
        gap: 10,
        maxLength: products.length
    })
    const productItems = useMemo(() => products.slice(startId, endId), [startId, endId, products]);

    return (
        <>
            <ProductsWrapper>
                {productItems.map((item) => (
                    <Product key={item.id} item={item}/>
                ))}
            </ProductsWrapper>
            {products.length > 10 && (<Pagination
                showStartButton={showStartButton}
                showEndButton={showEndButton}
                goToStart={goToStart}
                goToEnd={goToEnd}
                activePage={activePage}
                handleClickPaginate={handleClickPaginate}
                totalPages={totalPages}
            />)}
        </>
    );
};

export default Products;