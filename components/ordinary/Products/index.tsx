import React, {useContext} from 'react';
import Product from "@components/ordinary/Product";
import {AppContext} from "@core/context";
import ProductsWrapper from "@components/simple/ProductsWrapper";

const Products = () => {
    const {products} = useContext(AppContext);

    return (
        <ProductsWrapper>
            {products?.map((item) => (
                <Product key={item.id} item={item}/>
            ))}
        </ProductsWrapper>
    );
};

export default Products;