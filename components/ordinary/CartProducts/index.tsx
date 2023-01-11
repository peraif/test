import React, {useContext} from 'react';
import ProductsWrapper from "@components/simple/ProductsWrapper";
import Product from "@components/ordinary/Product";
import {CartItem} from "@core/types/cart";
import {AppContext} from "@core/context";

interface CartProductsProps {
    view?: boolean;
    items: CartItem[];
}

const CartProducts = ({view, items}: CartProductsProps) => {
    const {products} = useContext(AppContext);

    if (!view) return null;

    return (
        <ProductsWrapper>
            {items.map((item) =>
                <Product
                    key={item.id}
                    item={products?.find((x) => x.id === item.id)}
                />)}
        </ProductsWrapper>
    );
};

export default CartProducts;