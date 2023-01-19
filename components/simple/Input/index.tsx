import React, {HTMLAttributes} from 'react';

import s from "./styles.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    inputRef?: React.LegacyRef<HTMLInputElement>;
}

const Input = ({label, inputRef, ...props}: InputProps) => {
    return (
        <>
            {label && (<label htmlFor={props.id}></label>)}
            <input ref={inputRef} className={s["input-field"]} {...props} />
        </>
    );
};

export default Input;