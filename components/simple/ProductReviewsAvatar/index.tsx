import React from 'react';

import s from "./styles.module.scss";

interface ProductReviewsAvatarProps {
    name: string;
}

const ProductReviewsAvatar = ({name}: ProductReviewsAvatarProps) => {
    return (
        <div className={s["product-reviews-avatar"]}>
            {name.length > 0 ? name[0].toUpperCase() : 'A'}
        </div>
    );
};

export default ProductReviewsAvatar;