import React, {useContext} from 'react';

import s from "./styles.module.scss";
import {UseCartTotalAmount} from "@core/hooks/use-cart-total";
import {AppContext} from "@core/context";

const CartTotalAmount = () => {
    const {cartItems} = useContext(AppContext);
    const total = UseCartTotalAmount();

    if (cartItems?.length === 0) return null;

    return (
        <div className={s["cart-total-amount"]}>
            ₽ <strong>{total}</strong>
        </div>
    );
};

export default CartTotalAmount;