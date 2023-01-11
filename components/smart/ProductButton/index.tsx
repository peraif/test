import {useContext, useEffect, useMemo, useState} from "react";
import clsx from "clsx";
import {AppContext} from "@core/context";
import {useRouter} from "next/router";
import {Paths} from "@core/routes";

import s from "./styles.module.scss";
interface ProductButtonProps {
    productId: string;
    price: string;
}

const ProductButton = ({productId}: ProductButtonProps) => {
    const [active, setActive] = useState(false);
    const {
        cartItems,
        updateCart
    } = useContext(AppContext);
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
        if (!updateCart) return;
        if (!active) {
            updateCart({id: productId, add: true});
            setActive(true);
        } else if (router.asPath === Paths.shopping_cart) {
            updateCart({id: productId, remove: true});
            setActive(false);
        }
    }

    useEffect(() => {
        if (cartItems?.length && cartItems.find(x => x.id === productId)) {
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