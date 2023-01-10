import BasicHead from "@components/ordinary/Head";
import DefaultLayout from "@layouts/Default";
import Container from "@components/simple/Container";
import {useContext} from "react";
import {AppContext} from "@core/context";
import Product from "@components/ordinary/Product";
import ProductsWrapper from "@components/simple/ProductsWrapper";
import PageTitle from "@components/simple/PageTitle";
import CartTotalAmount from "@components/ordinary/CartTotalAmount";

const ShoppingCartPage = () => {
    const {cartItems, products} = useContext(AppContext);

    return (
        <>
            <BasicHead title={'Shopping Cart page'}/>
            <DefaultLayout>
                <Container>
                    <PageTitle>Shopping Cart</PageTitle>
                    <CartTotalAmount/>
                    <ProductsWrapper>
                        {!cartItems?.length
                            ? 'Корзина пуста'
                            : cartItems.map((item) =>
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