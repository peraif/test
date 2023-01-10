import React, {useContext, useRef} from 'react';
import {AppContext} from "@core/context";
import Image from "next/image";
import {splitTheNumber} from "@core/utils/transform-price";

import s from "./styles.module.scss";

interface CartProductCountButtonsProps {
    count: number;
    productId: number;
}

const CartProductCountButtons = ({count, productId}: CartProductCountButtonsProps) => {
    const {updateCart} = useContext(AppContext);
    const ref = useRef<HTMLDivElement | null>(null);
    const increase = () => {
        if (!updateCart) return;
        updateCart({id: productId, add: true});
    }
    const decrease = () => {
        if (!updateCart) return;
        updateCart({id: productId, remove: true, decrease: true});
    }

    return (
        <div ref={ref} className={s["cart-buttons"]}>
            <div className={s["cart-buttons__item"]}>
                <Image
                    src="/icons/add-line.svg"
                    width={16}
                    height={16}
                    alt="cart-plus"
                    onClick={increase}
                />
            </div>
            <div className={s["cart-buttons__count"]}>{splitTheNumber(count)}</div>
            <div className={s["cart-buttons__item"]}>
                <Image
                    src="/icons/delete-line.svg"
                    width={16}
                    height={16}
                    alt="cart-delete"
                    onClick={decrease}
                />
            </div>
        </div>
    );
};

export default CartProductCountButtons;