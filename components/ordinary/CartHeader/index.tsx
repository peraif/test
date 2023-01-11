import React, {useContext} from 'react';
import Button from "@components/simple/Button";
import CartTotalAmount from "@components/ordinary/CartTotalAmount";
import {AppContext} from "@core/context";
import {notifySuccess} from "@core/notifications";

import s from "./styles.module.scss";

interface CartHeaderProps {
    view?: boolean;
}

const CartHeader = ({view}: CartHeaderProps) => {
    const {clearCart} = useContext(AppContext);

    const handleClickClearCart = () => {
        if (!clearCart) return;
        clearCart();
        notifySuccess('Корзина успешно очищена!')
    }

    if (!view) return null;

    return (
        <div className={s["cart-header"]}>
            <Button
                variant="outlined"
                className={s["cart-header__clear-button"]}
                onClick={handleClickClearCart}
            >
                Очистить корзину
            </Button>
            <CartTotalAmount/>
        </div>
    );
};

export default CartHeader;