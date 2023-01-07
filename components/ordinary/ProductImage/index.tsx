import Image from "next/image";

import s from "./styles.module.scss";

interface ProductImageProps {
    src: string;
}

const ProductImage = ({src}: ProductImageProps) => {
    return (
        <div className={s["product-image"]}>
            <div className={s["product-image__hit"]}>
                <Image width={64} height={24} src="/icons/hit.svg" alt="hit-icon"/>
            </div>
            <div className={s["product-image__main-image"]}>
                <Image width={220} height={220} src={src} alt="product-image"/>
            </div>
        </div>
    );
};

export default ProductImage;