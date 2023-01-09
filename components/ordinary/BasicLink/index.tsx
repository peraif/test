import React from 'react';
import Link from "next/link";
import {LinkProps} from "next/dist/client/link";

import s from "./styles.module.scss";
import {useRouter} from "next/router";
import clsx from "clsx";

interface BasicLinkProps extends LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const BasicLink = ({children, ...props}: BasicLinkProps) => {
    const {asPath} = useRouter();

    return (
        <Link
            {...props}
            className={clsx(
                s["basic-link"],
                props.className,
                props.href === asPath && s["basic-link__active"]
            )}
        >
            {children}
        </Link>
    );
};

export default BasicLink;