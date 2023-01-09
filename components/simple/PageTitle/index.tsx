import React, {HTMLAttributes} from 'react';
import clsx from "clsx";

import s from "./styles.module.scss";

interface PageTitleProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const PageTitle = ({children, ...props}: PageTitleProps) => (
    <h1 className={clsx(s["page-title"], props.className)} {...props}>
        {children}
    </h1>
);

export default PageTitle;