import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import {ProductRatingStar} from "@data/product";
import {IProductRatingStar, UpdateProductKeys} from "@core/types/product";

import s from "./styles.module.scss";
import {AppContext} from "@core/context";

interface ProductRatingProps {
    ratingCount: number;
    productId: number;
}

const ProductRating = ({ratingCount, productId}: ProductRatingProps) => {
    const [statusMark, setStatusMark] = useState(false);
    const [stars, setStars] = useState<IProductRatingStar[]>(ProductRatingStar);
    const {updateProduct} = useContext(AppContext);

    const handleClick = (id: number) => {
        if (!updateProduct) return;
        if (id === 1) {
            if (ratingCount === 1) {
                updateProduct(productId, UpdateProductKeys.rating_count, 0);
            } else {
                updateProduct(productId, UpdateProductKeys.rating_count, id);
            }
        } else {
            updateProduct(productId, UpdateProductKeys.rating_count, id);
        }
    }

    useEffect(() => {
        setStars(prev => prev.map((x) => {
            if ((x.id <= ratingCount) && ratingCount !== 1) {
                return ({...x, status: true});
            }
            if (x.id === 1 || x.id === 0) {
                return ({...x, status: !x.status});
            }
            return ({...x, status: false});
        }));
    }, [ratingCount])

    return (
        <div onClick={() => setStatusMark(!statusMark)} className={s["product-ratings"]}>
            {stars.map((star) => (
                <Image
                    key={star.id}
                    src={star.status ? "/icons/star.svg" : "/icons/star-gray.svg"}
                    alt="star"
                    width={14}
                    height={14}
                    onClick={() => handleClick(star.id)}
                />
            ))}
        </div>
    );
};

export default ProductRating;