import React from 'react';

import s from "./styles.module.scss";

const PagePreloader = () => {
    return (
        <section className={s["page-preloader"]}>
            <div className={s["page-preloader__loader"]}>
                <div className={s["page-preloader__outer"]}></div>
                <div className={s["page-preloader__inner"]}></div>
            </div>
        </section>
    );
};

export default PagePreloader;