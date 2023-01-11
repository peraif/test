import React, {HTMLAttributes} from 'react';
import clsx from "clsx";

import s from "./styles.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: 'text' | 'contained' | 'outlined';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button = ({children, variant, type, className, ...props}: ButtonProps) => {
    const classes = clsx(
        className,
        s['button'],
        {
            [s['button__text']]: variant === 'text',
            [s['button__contained']]: variant === 'contained',
            [s['button__outlined']]: variant === 'outlined'
        },
    )

    return (
        <button className={classes} type={type || 'button'} {...props}>
            {children}
        </button>
    );
};

export default Button;