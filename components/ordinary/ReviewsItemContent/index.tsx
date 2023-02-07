import React from 'react';
import ProductReviewsAvatar from '@components/simple/ProductReviewsAvatar';
import ReviewAnswersUserContent from '@components/ordinary/ReviewAnswersUserContent';
import ReviewAnswerField from '@components/smart/ReviewAnswerField';

interface ReviewsItemContentProps {
  contentClassName: string;
  name: string;
  text: string;
  markedUser?: string | null;
  id: string;
  accountName?: string;
  children?: React.ReactNode;
}

const ReviewsItemContent = ({
  contentClassName,
  name,
  text,
  id,
  markedUser,
  children,
  accountName,
}: ReviewsItemContentProps) => {
  return (
    <>
      <ProductReviewsAvatar name={name} />
      <div className={contentClassName}>
        <ReviewAnswersUserContent name={name} text={text} markedUser={markedUser} />
        <ReviewAnswerField accountName={accountName} answerChildren name={name} id={id} />
        {children}
      </div>
    </>
  );
};

export default ReviewsItemContent;
