import React, {useContext, useMemo} from 'react';
import {AppContext} from "@core/context";
import {useRouter} from "next/router";
import ReviewsItem from "@components/smart/ReviewsItem";
import {Paths} from "@core/routes";

import s from "./styles.module.scss";

const ProductReviewsList = () => {
    const {query, asPath} = useRouter();
    const {products} = useContext(AppContext);
    const item = useMemo(() => products?.find((product) => product.id === query.param?.[0]), [products, query])


    if (!item || !asPath.includes(`${item.id}/${Paths.reviews}`) || !item.reviews) return null;

    return (
        <div>
            <h4>Отзывы ( {item.reviews.length} ): </h4>
            <ul className={s["product-reviews"]}>
                {item.reviews.map((review) => (
                    <ReviewsItem
                        productId={item.id}
                        reviewId={review.review.id}
                        key={review.review.id}
                        reviewItem={review}
                        accountName={review.review.name}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProductReviewsList;