import {useContext, useEffect, useMemo, useState} from "react";
import clsx from "clsx";

import s from "./styles.module.scss";
import {AppContext} from "@core/context";
import {useRouter} from "next/router";
import {Paths} from "@core/routes";

interface ProductButtonProps {
    productId: number;
}

const ProductButton = ({productId}: ProductButtonProps) => {
    const [active, setActive] = useState(false);
    const {addToBasket, removeFromBasket, basket} = useContext(AppContext);
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

    const handleClick = () => {
        if (!addToBasket || !removeFromBasket) return;
        if (!active) {
            addToBasket(productId);
        } else {
            removeFromBasket(productId);
        }
        setActive(!active);
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