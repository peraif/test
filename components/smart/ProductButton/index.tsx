import {useState} from "react";
import clsx from "clsx";

import s from "./styles.module.scss";

interface ProductButtonProps {
   active?: boolean;
}

const ProductButton = ({}: ProductButtonProps) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <button
            className={clsx(s["product-button"], active && s["product-button__active"])}
            onClick={handleClick}
        >
            {active ? "В корзине" : "В корзину"}
        </button>
    );
};

export default ProductButton;