import React, {useContext} from 'react';
import Product from "@components/ordinary/Product";

import s from "./styles.module.scss";
import {AppContext} from "@core/context";

const Products = () => {
    const {products} = useContext(AppContext);

    return (
        <div className={s.products}>
            {products?.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Products;