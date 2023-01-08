import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import Container from "@components/simple/Container";

import s from "./styles.module.scss";

const Header = () => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let windowY = window.pageYOffset;
            let navbarHeight = ref.current?.offsetHeight;
            if (navbarHeight && (windowY > navbarHeight)) ref.current?.classList.add(s['header__show-border']);
            else ref.current?.classList.remove(s['header__show-border']);
        });
    }, [])

    return (
        <header ref={ref} className={s.header}>
            <Container>
                <div className={s["header__items"]}>
                    <Link href={'/'}>Home</Link>
                    <Link
                        href={'/shopping-cart'}
                        className={s["header__shopping-link"]}
                    >
                        Shopping Cart {' '}
                        <Image
                            width={20}
                            height={20}
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