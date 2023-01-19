export interface IProductRating {
    id: number;
    status: boolean;
}

export interface IProduct {
    id: string;
    category: string;
    text: string;
    price: string;
    reviews_count: number;
    rating_count: number;
    hit: boolean;
    like: boolean;
    reviews?: IReview[];
}

export enum UpdateProductKeys {
    reviews_count = 'reviews_count',
    rating_count = 'rating_count',
    like = 'like',
    reviews = 'reviews'
}

export interface IReviewItem {
    id: string;
    text: string;
    name: string;
    marked_user?: string | null;
}

export interface IReview {
    review: IReviewItem;
    answers?: IReviewItem[];
}