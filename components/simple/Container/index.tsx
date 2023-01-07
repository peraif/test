import React, {HTMLAttributes} from 'react';

import s from "./styles.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container = ({children, ...props}: ContainerProps) => {
    return (
        <div {...props} className={s.container}>
            {children}
        </div>
    );
};

export default Container;