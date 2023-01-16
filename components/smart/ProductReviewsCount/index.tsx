import {HTMLAttributes} from "react";

import s from "./styles.module.scss";
import clsx from "clsx";

interface ProductReviewsCountProps extends HTMLAttributes<HTMLDivElement> {
    reviewsCount: number;
}

const ProductReviewsCount = ({reviewsCount, ...props}: ProductReviewsCountProps) => {
    const reviewText = () => {
        if (reviewsCount > 1 && reviewsCount < 5) {
            return ' отзыва';
        }
        if (reviewsCount === 0 || reviewsCount >= 5) {
            return ' отзывов';
        }
        return ' отзыв';
    }
    return (
        <div className={clsx(s["product-reviews-count"], props.className)} {...props}>
            {reviewsCount + reviewText()}
        </div>
    );
};

export default ProductReviewsCount;