import {useContext, useEffect, useMemo, useState} from "react";
import clsx from "clsx";

import s from "./styles.module.scss";
import {AppContext} from "@core/context";
import {useRouter} from "next/router";
import {Paths} from "@core/routes";

interface ProductButtonProps {
    productId: number;
    price: string;
}

const ProductButton = ({productId, price}: ProductButtonProps) => {
    const [active, setActive] = useState(false);
    const {addToBasket, removeFromBasket, basket, updateTotalAmount, totalAmountPriceProducts} = useContext(AppContext);
    const totalPrice = useMemo(() => totalAmountPriceProducts?.find((item) => item.id === productId), [totalAmountPriceProducts]);
    const router = useRouter();
    const text = useMemo(() => {
        if (router.asPath === Paths.shopping_cart) {
            return 'Удалить из корзины';
        } else {
            if (active) {
                return "В корзине";
            }
            return "В корзину";
        }
    }, [router.asPath, active]);

    const updatePrice = (price: number) => {
        if (!updateTotalAmount) return;
        updateTotalAmount({id: productId, total: price});
    }

    const handleClick = () => {
        if (!addToBasket || !removeFromBasket || !updateTotalAmount) return;
        if (!active) {
            addToBasket(productId);
            setActive(true);
            if (totalPrice) {
                updatePrice(totalPrice.total + parseInt(price));
            } else {
                updatePrice(parseInt(price));
            }
        } else if (router.asPath === Paths.shopping_cart) {
            removeFromBasket(productId);
            setActive(false);
            if (totalPrice) {
                updatePrice(totalPrice.total - parseInt(price));
            }
        }
    }

    useEffect(() => {
        if (basket?.length && basket.find(x => x.id === productId)) {
            setActive(true);
        }
    }, [])

    return (
        <button
            className={clsx(s["product-button"], active && s["product-button__active"])}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default ProductButton;