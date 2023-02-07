import React, { HTMLAttributes, useMemo } from 'react';

import s from './styles.module.scss';
import clsx from 'clsx';

interface ReviewAnswerButtonProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  count?: number;
}

const ReviewAnswerButton = ({ active, count, ...props }: ReviewAnswerButtonProps) => {
  if (!count || count === 0) return null;
  const answersText = useMemo(() => {
    if (count > 4) {
      return 'отзывов';
    }
    if (count === 1) {
      return 'отзыв';
    }
    return 'отзыва';
  }, [count]);

  return (
    <div {...props} className={s['review-answers-button']}>
      <div
        className={clsx(
          s['review-answers-button__arrow'],
          active && s['review-answers-button__arrow-active']
        )}
      />
      {count + ' ' + answersText}
    </div>
  );
};

export default ReviewAnswerButton;
