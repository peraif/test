import React, {useContext, useMemo} from 'react';
import {useRouter} from "next/router";
import BasicHead from "@components/ordinary/Head";
import DefaultLayout from "@layouts/Default";
import Container from "@components/simple/Container";
import PageTitle from "@components/simple/PageTitle";
import {AppContext} from "@core/context";
import ProductPageItem from "@components/ordinary/ProductPageItem";
import ProductReviewsList from "@components/smart/ProductReviewsList";

export default function ProductPage() {
    const {query} = useRouter()
    const {products} = useContext(AppContext);
    const item = useMemo(() => products?.find((product) => product.id === query.param?.[0]), [products, query]);

    if (!item) return null;

    return (
        <>
            <BasicHead title={`${item.text}`}/>
            <DefaultLayout>
                <Container>
                    <PageTitle>{item.text}</PageTitle>
                    <ProductPageItem item={item}/>
                    <ProductReviewsList />
                </Container>
            </DefaultLayout>
        </>
    );
};