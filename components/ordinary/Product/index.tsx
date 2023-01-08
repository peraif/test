import s from "./styles.module.scss";
import CartImage from "@components/ordinary/ProductImage";
import ProductRating from "@components/smart/ProductRating";
import ProductReviews from "@components/smart/ProductReviews";
import ProductButton from "@components/smart/ProductButton";
import LikeButton from "@components/smart/LikeButton";
import {IProduct} from "@core/types/product";

interface ProductProps {
    item?: IProduct;
}
const Product = ({item}: ProductProps) => {

    if (!item) return null;

    return (
        <div className={s.product}>
            <CartImage showHit={item.hit} src="/images/test-product.svg" />
            <div className={s["product__categories"]}>
                <span className={s["product__categories-name"]}>{item.category}</span>
                <div className={s["product__ratings-block"]}>
                    <ProductRating productId={item.id} ratingCount={item.rating_count} />
                    <ProductReviews reviewsCount={item.reviews_count} />
                </div>
            </div>
            <p className={s["product__main-text"]}>{item.text}</p>
            <span className={s["product__price"]}><strong>{item.price} ₽  </strong>/шт.</span>
            <div className={s["product__buttons"]}>
                <ProductButton productId={item.id} />
                <LikeButton productId={item.id} like={item.like} />
            </div>
        </div>
    );
};

export default Product;