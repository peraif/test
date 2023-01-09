import React, {useContext, useMemo} from 'react';
import BasicHead from "@components/ordinary/Head";
import DefaultLayout from "@layouts/Default";
import Container from "@components/simple/Container";
import Product from "@components/ordinary/Product";
import {AppContext} from "@core/context";
import ProductsWrapper from "@components/simple/ProductsWrapper";
import PageTitle from "@components/simple/PageTitle";

function Favorites() {
    const {products} = useContext(AppContext);
    const favorites = useMemo(() => products?.filter((product) => product.like), [products]);

    return (
        <>
            <BasicHead title={'Favorites page'}/>
            <DefaultLayout>
                <Container>
                    <PageTitle>Favorites</PageTitle>
                    <ProductsWrapper>
                        {!favorites?.length ? "Нет избранных товаров" : favorites.map((item) =>
                            <Product
                                key={item.id}
                                item={products?.find((x) => x.id === item.id)}
                            />)}
                    </ProductsWrapper>
                </Container>
            </DefaultLayout>
        </>
    );
}

export default Favorites;