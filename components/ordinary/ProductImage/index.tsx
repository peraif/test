import Image from "next/image";

import s from "./styles.module.scss";

interface ProductImageProps {
    src: string;
    showHit: boolean;
}

const ProductImage = ({src, showHit}: ProductImageProps) => {
    return (
        <div className={s["product-image"]}>
            {showHit && (<div className={s["product-image__hit"]}>
                <div className={s["product-image__hit-left-item"]}/>
                <div className={s["product-image__hit-text"]}>Хит</div>
                <div className={s["product-image__hit-right-item"]}/>
            </div>)}
            <div className={s["product-image__main-image"]}>
                <Image width={220} height={220} src={src} alt="product-image"/>
            </div>
        </div>
    );
};

export default ProductImage;