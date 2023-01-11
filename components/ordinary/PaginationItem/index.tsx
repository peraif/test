import React, {HTMLAttributes} from 'react';

import s from "./styles.module.scss";
import clsx from "clsx";

interface PaginationItem extends HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    active?: boolean;
    startButton?: boolean;
    endButton?: boolean;
}

const PaginationItem = ({children, active, startButton, endButton, ...props}: PaginationItem) => {
    return (
        <li {...props} className={clsx( s["pagination-item"], active && s["pagination-item__active"], props.className)}>
            {children}
        </li>
    );
};

export default PaginationItem;