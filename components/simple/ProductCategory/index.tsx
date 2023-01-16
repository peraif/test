import React, {HTMLAttributes} from 'react';
import clsx from "clsx";

import s from "./styles.module.scss";

interface ProductCategoryProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

const ProductCategory = ({children, ...props}: ProductCategoryProps) => {
    return (
        <span {...props} className={clsx(s["product-category"], props.className)}>
            {children}
        </span>
    );
};

export default ProductCategory;