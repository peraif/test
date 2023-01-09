import React, {useContext, useMemo, useRef} from 'react';
import {AppContext} from "@core/context";

import s from "./styles.module.scss";
import {splitTheNumber} from "@core/utils/transform-price";

interface BasketCountButtonProps {
    count: number;
    productId: number;
    price: string;
}

const BasketCountButtons = ({count, productId, price}: BasketCountButtonProps) => {
    const {addToBasket, removeFromBasket, totalAmountPriceProducts, updateTotalAmount} = useContext(AppContext);
    const totalPrice = useMemo(() => totalAmountPriceProducts?.find((item) => item.id === productId), [totalAmountPriceProducts]);
    const ref = useRef<HTMLDivElement | null>(null);

    const updatePrice = (price: number, decrease?: boolean) => {
        if (!updateTotalAmount) return;
        updateTotalAmount({id: productId, total: price}, decrease);
    }
    const increase = () => {
        if (!addToBasket || !updateTotalAmount) return;
        addToBasket(productId);
        if (totalPrice) {
            updatePrice(totalPrice.total + parseInt(price));
        }
    }

    const decrease = () => {
        if (!removeFromBasket || !updateTotalAmount) return;
        removeFromBasket(productId, true);
        if (totalPrice) {
            updatePrice(totalPrice.total - parseInt(price), true);
        }
    }

    return (
        <div ref={ref} className={s["basket-buttons"]}>
            <span onClick={increase}>+</span>
            <div className={s["basket-buttons__count"]}>{splitTheNumber(count)}</div>
            {count > 1 && (<span onClick={decrease}>-</span>)}
        </div>
    );
};

export default BasketCountButtons;