import s from "./styles.module.scss";
import CartImage from "@components/ordinary/ProductImage";
import ProductRating from "@components/smart/ProductRating";
import ProductReviews from "@components/smart/ProductReviews";
import ProductButton from "@components/smart/ProductButton";
import LikeButton from "@components/smart/LikeButton";

const Product = () => {
    return (
        <div className={s.product}>
            <CartImage src="/images/test-cart.svg" />
            <div className={s["product__categories"]}>
                <span className={s["product__categories-name"]}>electronics</span>
                <div className={s["product__ratings-block"]}>
                    <ProductRating />
                    <ProductReviews count={5} />
                </div>
            </div>
            <p className={s["product__main-text"]}>Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED</p>
            <span className={s["product__price"]}><strong>275 ₽  </strong>/шт.</span>
            <div className={s["product__buttons"]}>
                <ProductButton />
                <LikeButton />
            </div>
        </div>
    );
};

export default Product;