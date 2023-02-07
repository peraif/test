import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';

export const useField = (type: HTMLInputTypeAttribute) => {
  const [value, setValue] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue('');
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};
