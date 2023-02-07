import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '@components/simple/Button';
import Input from '@components/simple/Input';
import { useField } from '@core/hooks/use-field';
import { AppContext } from '@core/context';

import s from './styles.module.scss';

interface ReviewAnswerFieldProps {
  id: string;
  name: string;
  answerChildren?: boolean;
  accountName?: string;
}

const ReviewAnswerField = ({ id, name, answerChildren, accountName }: ReviewAnswerFieldProps) => {
  const [statusAnswerField, setStatusAnswerField] = useState(false);
  const { reset: resetAnswerValue, ...answer } = useField('text');
  const answerFieldRef = useRef<HTMLInputElement | null>(null);
  const { updateAnswers } = useContext(AppContext);

  const addNewAnswer = () => {
    if (!updateAnswers) return;
    const { value } = answer;
    let markedUser = null;
    if (answerChildren) {
      markedUser = '@' + name;
    }
    updateAnswers(value, id, markedUser, accountName);
    resetAnswerValue();
    hideAnswerField();
  };

  const showAnswerField = () => setStatusAnswerField(true);
  const hideAnswerField = () => setStatusAnswerField(false);

  useEffect(() => {
    if (statusAnswerField && answerFieldRef.current) {
      answerFieldRef.current?.focus();
    }
  }, [statusAnswerField]);

  return (
    <>
      {!statusAnswerField && (
        <Button thumbnail variant={'text'} onClick={showAnswerField}>
          Ответить
        </Button>
      )}
      {statusAnswerField && (
        <>
          <Input inputRef={answerFieldRef} {...answer} id={id} placeholder="Введите текст отзыва" />
          <div className={s['review-input-field__buttons']}>
            <Button thumbnail variant={'text'} onClick={hideAnswerField}>
              Отмена
            </Button>
            <Button thumbnail variant={'text'} onClick={addNewAnswer}>
              Ответить
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default ReviewAnswerField;
