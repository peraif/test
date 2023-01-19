import React, {useContext, useState} from 'react';
import {IReview, UpdateProductKeys} from "@core/types/product";
import ReviewAnswerButton from "@components/ordinary/ReviewAnswersButton";

import s from "./styles.module.scss";
import ReviewsItemContent from "@components/ordinary/ReviewsItemContent";
import {AppContext} from "@core/context";

interface ReviewsItemProps {
    reviewItem: IReview;
    productId: string;
    reviewId: string;
    accountName: string;
}

const ReviewsItem = ({reviewItem, reviewId, productId, accountName}: ReviewsItemProps) => {
        const [answersListState, setAnswersListState] = useState(false);
        const {updateProduct, products} = useContext(AppContext);

        const toggleAnswersListState = () => setAnswersListState(!answersListState);

        const updateAnswers = (newAnswerValue: string, newAnswerId: string, markedUser: string | null, userName?: string,) => {
            if (!updateProduct || !products) return;
            let product = products.find((x) => x.id === productId);
            if (product?.reviews) {
                const review = product.reviews.map((el) => {
                    if (el.review.id === reviewId && userName) {
                        return {
                            ...el,
                            answers: el.answers?.concat({
                                id: newAnswerId,
                                text: newAnswerValue,
                                name: userName,
                                marked_user: markedUser ? markedUser : null
                            })
                        }
                    }
                    return el
                })
                updateProduct(productId, UpdateProductKeys.reviews, review);
            }
        }


        return (
            <AppContext.Provider value={{
                updateAnswers
            }}>
                <li className={s["reviews-item"]}>
                    <ReviewsItemContent
                        name={reviewItem.review.name}
                        text={reviewItem.review.text}
                        id={reviewId}
                        contentClassName={s["reviews-item__content"]}
                    >
                        <ReviewAnswerButton
                            count={reviewItem.answers?.length}
                            onClick={toggleAnswersListState}
                            active={answersListState}
                        />
                        {answersListState && (
                            <ul className={s["reviews-item__answers"]}>
                                {reviewItem.answers?.map((item, i) => (
                                    <li key={i}>
                                        <ReviewsItemContent
                                            accountName={accountName}
                                            name={item.name}
                                            text={item.text}
                                            markedUser={item.marked_user}
                                            id={item.id}
                                            contentClassName={s["reviews-item__content"]}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </ReviewsItemContent>
                </li>
            </AppContext.Provider>
        );
    }
;

export default ReviewsItem;