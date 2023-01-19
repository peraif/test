import React from 'react';

import s from "./styles.module.scss";

interface ReviewAnswersUserContentProps {
    name: string;
    text: string;
    answerChildren?: boolean;
    markedUser?: string | null;
}

const ReviewAnswersUserContent = ({name, text, markedUser}: ReviewAnswersUserContentProps) => {
    const date = new Date();

    console.log(text)


    return (
        <div className={s["review-answers-user-content"]}>
            <div className={s["review-answers-user-content__name-block"]}>
                <strong>{name}</strong>
                <span>- {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</span>
            </div>
            <div className={s["review-answers-user-content__text-block"]}>
                <p>
                    {markedUser && (
                        <>
                            <strong className={s["review-answers-user-content__marked-user"]}>{markedUser}</strong>{' '}{text}
                        </>
                    )}
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ReviewAnswersUserContent;