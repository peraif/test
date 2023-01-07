interface ProductReviewsProps {
    count: number;
}

const ProductReviews = ({count}: ProductReviewsProps) => {
    const reviewText = () => {
        if (count > 1 && count < 5) {
            return ' отзыва';
        }
        if (count === 0 || count >= 5) {
            return ' отзывов';
        }
        return ' отзыв';
    }
    return (
        <div>
            {count + reviewText()}
        </div>
    );
};

export default ProductReviews;