import React from "react";
import CartImage from "@components/ordinary/ProductImage";
import ProductRating from "@components/smart/ProductRating";
import ProductButton from "@components/smart/ProductButton";
import LikeButton from "@components/smart/LikeButton";
import {IProduct} from "@core/types/product";
import {useContext, useMemo} from "react";
import {AppContext} from "@core/context";
import {useRouter} from "next/router";
import {Paths} from "@core/routes";
import CartProductCountButtons from "@components/smart/CartProductCountButtons";
import ProductCategory from "@components/simple/ProductCategory";
import ProductPrice from "@components/simple/ProductPrice";
import ProductText from "@components/simple/ProductText";
import ProductReviewsCount from "@components/smart/ProductReviewsCount";

import s from "./styles.module.scss";

interface ProductProps {
    item?: IProduct;
}

const Product = ({item}: ProductProps) => {
    const {asPath, push} = useRouter();
    const {cartItems, setProductData} = useContext(AppContext);
    const countProductInCart = useMemo(() => cartItems?.find((elem) => elem.id === item?.id), [cartItems, item]);

    const openProductPage = () => {
        push(`/${Paths.products}/${item?.id}`).then(() => {
            if (!setProductData || !item) return;
            setProductData(item);
        });
    };

    const openReviews = () => push(`/${Paths.products}/${item?.id}/${Paths.reviews}`);

    if (!item) return null;

    return (
        <div className={s.product}>
            <CartImage showHit={item.hit} src="/images/test-product.svg"/>
            <div className={s["product__categories"]}>
                <ProductCategory>{item.category}</ProductCategory>
                <div className={s["product__ratings-block"]}>
                    <ProductRating productId={item.id} ratingCount={item.rating_count}/>
                    {item.reviews && item.reviews.length > 0 && (<ProductReviewsCount onClick={openReviews} reviewsCount={item.reviews.length}/>)}
                </div>
            </div>
            <ProductText
                text={item.text}
                onClick={openProductPage}
            />
            <ProductPrice
                price={item.price}
                measurementName={'шт.'}
                prefix={'₽'}
            />
            <div className={s["product__buttons"]}>
                <ProductButton price={item.price} productId={item.id}/>
                {(asPath.includes(Paths.shopping_cart) && countProductInCart) &&
                    <CartProductCountButtons productId={item.id} count={countProductInCart.count}/>
                }
                {!asPath.includes(Paths.shopping_cart) && (<LikeButton productId={item.id} like={item.like}/>)}
            </div>
        </div>
    );
};

export default Product;