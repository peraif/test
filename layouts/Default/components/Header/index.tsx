import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Container from "@components/simple/Container";

import s from "./styles.module.scss";

const Header = () => {
    return (
        <header className={s.header}>
            <Container>
                <div className={s["header__items"]}>
                    <Link href={'/'}>Home</Link>
                    <Link
                        href={'/shopping-cart'}
                        className={s["header__shopping-link"]}
                    >
                        Shopping Cart {' '}
                        <Image
                            width={40}
                            height={40}
                            src="/images/shopping-cart.svg"
                            alt="shopping-cart"
                        />
                    </Link>
                </div>
            </Container>
        </header>
    );
};

export default Header;