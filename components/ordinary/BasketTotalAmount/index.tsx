import React from 'react';

import s from "./styles.module.scss";

interface BasketTotalAmountProps {
    total: number;
}

const BasketTotalAmount = ({total}: BasketTotalAmountProps) => {
    return (
        <div className={s["basket-total-amount"]}>
            ₽ <strong>{total}</strong>
        </div>
    );
};

export default BasketTotalAmount;