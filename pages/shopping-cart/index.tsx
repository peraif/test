import BasicHead from "@components/ordinary/Head";
import DefaultLayout from "@layouts/Default";
import Container from "@components/simple/Container";
import {useContext} from "react";
import {AppContext} from "@core/context";
import Product from "@components/ordinary/Product";

import s from "./styles.module.scss";

const ShoppingCartPage = () => {
    const {basket, products} = useContext(AppContext);

    return (
        <>
            <BasicHead title={'Shopping Cart page'}/>
            <DefaultLayout>
                <Container>
                    <h1>Shopping Cart</h1>
                    <div className={s["shopping-cart-items"]}>
                        {!basket?.length
                            ? 'Корзина пуста'
                            : basket.map((item) =>
                                <Product
                                    key={item.id}
                                    item={products?.find((x) => x.id === item.id)}
                                />)}
                    </div>
                </Container>
            </DefaultLayout>
        </>
    );
};

export default ShoppingCartPage;