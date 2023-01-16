import React, {HTMLAttributes} from 'react';
import clsx from "clsx";

import s from "./styles.module.scss";

interface ProductTextProps extends HTMLAttributes<HTMLParagraphElement> {
    text: string;
}

const ProductText = ({text, ...props}: ProductTextProps) => {
    return (
        <div className={clsx(s["product-text"], props.className)}>
            <p {...props}>{text}</p>
        </div>
    );
};

export default ProductText;