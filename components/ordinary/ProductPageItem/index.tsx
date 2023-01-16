import React, {useContext, useMemo} from 'react';
import {IProduct} from "@core/types/product";
import ProductRating from "@components/smart/ProductRating";
import ProductButton from "@components/smart/ProductButton";
import {Paths} from "@core/routes";
import CartProductCountButtons from "@components/smart/CartProductCountButtons";
import LikeButton from "@components/smart/LikeButton";
import {useRouter} from "next/router";
import {AppContext} from "@core/context";
import ProductCategory from "@components/simple/ProductCategory";
import ProductPrice from "@components/simple/ProductPrice";
import ProductText from "@components/simple/ProductText";
import CartImage from "@components/ordinary/ProductImage";
import ProductReviewsCount from "@components/smart/ProductReviewsCount";

import s from "./styles.module.scss";

interface ProductPageItemProps {
    item: IProduct;
}

const ProductPageItem = ({item}: ProductPageItemProps) => {
    const {asPath, push, query} = useRouter();
    const {cartItems, setProductData} = useContext(AppContext);
    const countProductInCart = useMemo(() => cartItems?.find((elem) => elem.id === item?.id), [cartItems, item]);

    const openProductPage = () => {
        if (!query.param || (query.param.length === 1 && query.param?.[0].includes(item?.id))) return;
            push(`/${Paths.products}/${item?.id}`).then(() => {
                if (!setProductData || !item) return;
                setProductData(item);
            });

    };
    const openReviews = () => {
        if (!query.param || (query.param.length > 1 && query.param?.[1].includes(Paths.reviews))) return;
        push(`/${Paths.products}/${item?.id}/${Paths.reviews}`)
    };

    return (
        <div className={s["product-page-item"]}>
            <CartImage
                showHit={item.hit}
                src="/images/test-product.svg"
                imageWrapperClassName={s["product-page-item__image"]}
            />
            <div className={s["product-page-item__block"]}>
                <ProductCategory className={s["product-page-item__category"]}>{item.category}</ProductCategory>
                <div className={s["product-page-item__ratings-block"]}>
                    <ProductRating productId={item.id} ratingCount={item.rating_count}/>
                    <ProductReviewsCount onClick={openReviews} reviewsCount={item.reviews_count}/>
                </div>
            </div>
            <ProductText onClick={openProductPage} className={s["product-page-item__text"]} text={item.text}/>
            <ProductPrice
                price={item.price}
                measurementName={'шт.'}
                prefix={'₽'}
            />
            <div className={s["product-page-item__block"]}>
                <ProductButton price={item.price} productId={item.id}/>
                {(asPath === Paths.shopping_cart && countProductInCart) &&
                    <CartProductCountButtons productId={item.id} count={countProductInCart.count}/>
                }
                {asPath !== Paths.shopping_cart && (<LikeButton productId={item.id} like={item.like}/>)}
            </div>
        </div>
    );
};

export default ProductPageItem;