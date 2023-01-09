import BasicHead from "@components/ordinary/Head";
import DefaultLayout from "@layouts/Default";
import Container from "@components/simple/Container";
import {useContext, useMemo} from "react";
import {AppContext} from "@core/context";
import Product from "@components/ordinary/Product";
import ProductsWrapper from "@components/simple/ProductsWrapper";
import PageTitle from "@components/simple/PageTitle";
import BasketTotalAmount from "@components/ordinary/BasketTotalAmount";

const ShoppingCartPage = () => {
    const {basket, products, totalAmountPriceProducts} = useContext(AppContext);
    const totalAmount = useMemo(() => totalAmountPriceProducts?.reduce((acc, value) => acc + value.total, 0), [totalAmountPriceProducts])

    return (
        <>
            <BasicHead title={'Shopping Cart page'}/>
            <DefaultLayout>
                <Container>
                    <PageTitle>Shopping Cart</PageTitle>
                    {totalAmount !== undefined && (<BasketTotalAmount total={totalAmount}/>)}
                    <ProductsWrapper>
                        {!basket?.length
                            ? 'Корзина пуста'
                            : basket.map((item) =>
                                <Product
                                    key={item.id}
                                    item={products?.find((x) => x.id === item.id)}
                                />)}
                    </ProductsWrapper>
                </Container>
            </DefaultLayout>
        </>
    );
};

export default ShoppingCartPage;