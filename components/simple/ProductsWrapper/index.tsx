import React from 'react';

import s from "./styles.module.scss";

interface ProductsWrapperProps {
    children: React.ReactNode;
}

const ProductsWrapper = ({children}: ProductsWrapperProps) => {
    return (
        <div className={s["products-wrapper"]}>
            {children}
        </div>
    );
};

export default ProductsWrapper;