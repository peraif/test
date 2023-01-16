import React from "react";
import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import {ProductRatingStar} from "@data/product";
import {IProductRating, UpdateProductKeys} from "@core/types/product";

import s from "./styles.module.scss";
import {AppContext} from "@core/context";

interface ProductRatingProps {
    ratingCount: number;
    productId: string;
}

const ProductRating = ({ratingCount, productId}: ProductRatingProps) => {
    const [statusMark, setStatusMark] = useState(false);
    const [ratings, setRatings] = useState<IProductRating[]>(ProductRatingStar);
    const [prevRatings, setPrevRatings] = useState<IProductRating[]>(ProductRatingStar);
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

    const onOver = (e: React.MouseEvent<HTMLImageElement>, id: number, status: boolean) => {
        if (status) return;
        setPrevRatings(ratings);
        setRatings(prev => prev.map((item) => item.id <= id ? {...item, status: true} : item))
    }

    const onOut = (e: React.MouseEvent<HTMLImageElement>) => {
        setRatings(prevRatings);
    }

    const updateRatings = (array: IProductRating[]) => {
        return array.map((item) => {
            if ((item.id <= ratingCount) && ratingCount !== 1) {
                return ({...item, status: true});
            }
            if (item.id === 1 || item.id === 0) {
                return ({...item, status: !item.status});
            }
            return ({...item, status: false});
        })
    }

    useEffect(() => {
        setRatings(prev => updateRatings(prev));
        setPrevRatings(prev => updateRatings(prev));
    }, [ratingCount])

    return (
        <div onClick={() => setStatusMark(!statusMark)} className={s["product-ratings"]}>
            {ratings.map((rating) => (
                <Image
                    key={rating.id}
                    src={rating.status ? "/icons/star.svg" : "/icons/star-gray.svg"}
                    alt="star"
                    width={14}
                    height={14}
                    onClick={() => handleClick(rating.id)}
                    onMouseOver={(e) => onOver(e, rating.id, rating.status)}
                    onMouseOut={onOut}
                />
            ))}
        </div>
    );
};

export default ProductRating;