import React, {useState} from 'react';
import {IReview} from "@core/types/product";
import Button from "@components/simple/Button";

import s from "./styles.module.scss";
import ProductReviewsAvatar from "@components/simple/ProductReviewsAvatar";

interface ReviewsItemProps {
    item: IReview;
}

const ReviewsItem = ({item}: ReviewsItemProps) => {
    const [answersListState, setAnswersListState] = useState(false);

    const toggleAnswersListState = () => setAnswersListState(!answersListState);

    return (
        <li className={s["reviews-item"]}>
            <ProductReviewsAvatar name={item.review.name}/>
            <div className={s["reviews-item__content"]}>
                <p>{item.review.text}</p>
                {<Button
                    onClick={toggleAnswersListState}
                    variant={answersListState ? "outlined" : "contained"}>
                    {item.answers?.length} ответ
                </Button>}
                {answersListState && (
                    <ul className={s["reviews-item__answers"]}>
                        {item.answers?.map((item) => (
                            <li key={item.id}>
                                <ProductReviewsAvatar name={item.name}/>
                                <div>
                                    <p>{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
};

export default ReviewsItem;