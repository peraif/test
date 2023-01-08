interface ProductReviewsProps {
    reviewsCount: number;
}

const ProductReviews = ({reviewsCount}: ProductReviewsProps) => {
    const reviewText = () => {
        if (reviewsCount > 1 && reviewsCount < 5) {
            return ' отзыва';
        }
        if (reviewsCount === 0 || reviewsCount >= 5) {
            return ' отзывов';
        }
        return ' отзыв';
    }
    return (
        <div>
            {reviewsCount + reviewText()}
        </div>
    );
};

export default ProductReviews;